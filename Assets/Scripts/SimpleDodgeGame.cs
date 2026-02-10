using System.Collections;
using System.Collections.Generic;
using UnityEngine;
#if !UNITY_LUNA
using UnityEngine.UI;
#endif

public sealed class SimpleDodgeGame : MonoBehaviour
{
    [Header("Board")]
    [SerializeField] private int columns = 6;
    [SerializeField] private int rows = 5;
    [SerializeField] private float boardSidePadding = 0.45f;
    [SerializeField] private float boardBottomPadding = 0.8f;
    [SerializeField] private float boardTopPadding = 2.15f;
    [SerializeField] [Range(0.6f, 1f)] private float orbScale = 0.9f;
    [SerializeField] private float clearDelaySeconds = 0.08f;
    [SerializeField] private float fallDurationSeconds = 0.12f;

    [Header("Round")]
    [SerializeField] private float roundDurationSeconds = 35f;
    [SerializeField] private int baseScorePerOrb = 12;

    [Header("Colors")]
    [SerializeField] private Color backgroundColor = new Color(0.12f, 0.16f, 0.25f, 1f);
    [SerializeField] private Color boardColor = new Color(0.05f, 0.07f, 0.12f, 0.85f);
    [SerializeField] private Color boardOutlineColor = new Color(0.72f, 0.78f, 0.9f, 0.4f);
    [SerializeField] private Color[] orbColors =
    {
        new Color(0.90f, 0.33f, 0.30f, 1f),
        new Color(0.25f, 0.66f, 0.95f, 1f),
        new Color(0.42f, 0.86f, 0.42f, 1f),
        new Color(0.93f, 0.82f, 0.31f, 1f),
        new Color(0.70f, 0.48f, 0.96f, 1f),
        new Color(0.96f, 0.57f, 0.81f, 1f),
    };
    [SerializeField] private Sprite[] orbSprites;

    [Header("Rendering")]
    [SerializeField] private Material spriteMaterial;
    [SerializeField] private bool useCustomMaterialInEditor = true;
    [SerializeField] private bool useCustomMaterialInWebGl = false;
    [SerializeField] private bool fallbackToDefaultIfShaderUnsupported = true;

    private sealed class Orb
    {
        public int type;
        public readonly GameObject gameObject;
        public readonly Transform transform;
        public readonly SpriteRenderer renderer;

        public Orb(int type, GameObject gameObject, SpriteRenderer renderer)
        {
            this.type = type;
            this.gameObject = gameObject;
            this.renderer = renderer;
            transform = gameObject.transform;
        }
    }

    private struct OrbMove
    {
        public Orb orb;
        public Vector3 from;
        public Vector3 to;

        public OrbMove(Orb orb, Vector3 from, Vector3 to)
        {
            this.orb = orb;
            this.from = from;
            this.to = to;
        }
    }

    private static readonly Vector2Int[] NeighborOffsets =
    {
        new Vector2Int(1, 0),
        new Vector2Int(-1, 0),
        new Vector2Int(0, 1),
        new Vector2Int(0, -1),
    };

    private static Sprite generatedFallbackSprite;
    private static Texture2D generatedFallbackTexture;
    private Camera gameplayCamera;
    private PlayworksComplianceHooks complianceHooks;

    private Transform boardRoot;
    private Transform backgroundTransform;
    private SpriteRenderer backgroundRenderer;
    private Transform boardFrameTransform;
    private SpriteRenderer boardFrameRenderer;
    private Transform boardOutlineTransform;
    private SpriteRenderer boardOutlineRenderer;

    private Orb[,] board;
    private float gameplayZ;
    private float pointerDepth;
    private float cellSize;
    private Vector2 boardBottomLeft;
    private float boardWorldWidth;
    private float boardWorldHeight;
    private bool layoutInitialized;

    private bool isDragging;
    private bool isResolving;
    private bool roundEnded;
    private bool hasReportedGameEnded;
    private Vector2Int heldCell;

    private float timeRemaining;
    private int score;
    private int lastMoveCombos;
    private bool hasLoggedMissingSpriteConfig;

#if !UNITY_LUNA
    private Transform hudRootTransform;
    private Text scoreText;
    private Text timeText;
    private Text comboText;
    private Text resultText;
#endif
    private readonly List<OrbMove> moveBuffer = new List<OrbMove>(64);
    private readonly List<Vector2Int> matchedCellsBuffer = new List<Vector2Int>(64);
    private readonly List<Vector2Int> floodFillStackBuffer = new List<Vector2Int>(64);
    private bool[,] markedCellsBuffer;
    private bool[,] visitedCellsBuffer;
    private float cachedClearDelaySeconds = -1f;
    private WaitForSeconds cachedClearDelayWait;

    private void Awake()
    {
        gameplayCamera = GetComponent<Camera>();
        if (gameplayCamera == null)
        {
            gameplayCamera = Camera.main;
        }

        if (gameplayCamera == null)
        {
            Debug.LogError("SimpleDodgeGame needs a Camera on scene.");
            enabled = false;
            return;
        }

        if (!gameplayCamera.orthographic)
        {
            gameplayCamera.orthographic = true;
        }

        complianceHooks = GetComponent<PlayworksComplianceHooks>();
        ValidateConfig();
        WarnIfMissingSpriteSetup();

        gameplayZ = GetGameplayZ();
        pointerDepth = Mathf.Abs(gameplayZ - gameplayCamera.transform.position.z);

        CreateRuntimeVisuals();
        CreateRuntimeHud();
        UpdateLayout(force: true);
        ResetRound();
    }

    private void Update()
    {
        if (gameplayCamera == null)
        {
            return;
        }

        UpdateLayout(force: false);

        if (roundEnded)
        {
            if (Input.GetKeyDown(KeyCode.R) || PointerPressedThisFrame())
            {
                ResetRound();
            }

            UpdateHudTexts();
            return;
        }

        timeRemaining -= Time.deltaTime;
        if (timeRemaining <= 0f)
        {
            timeRemaining = 0f;
            EndRound();
            UpdateHudTexts();
            return;
        }

        if (!isResolving)
        {
            HandleDragInput();
        }

        UpdateHudTexts();
    }

    private void OnDestroy()
    {
        ClearBoard();

        if (boardRoot != null)
        {
            Destroy(boardRoot.gameObject);
        }

        if (backgroundTransform != null)
        {
            Destroy(backgroundTransform.gameObject);
        }

#if !UNITY_LUNA
        if (hudRootTransform != null)
        {
            Destroy(hudRootTransform.gameObject);
        }
#endif
    }

    private void OnValidate()
    {
        ValidateConfig();
        WarnIfMissingSpriteSetup();

        if (!Application.isPlaying)
        {
            return;
        }

        RefreshVisualsNow();
    }

    public void RefreshVisualsNow()
    {
        ValidateConfig();
        ApplyBackgroundVisuals();
        ApplyBoardFrameVisuals();
        UpdateHudTexts();

        if (board == null)
        {
            return;
        }

        for (int x = 0; x < columns; x++)
        {
            for (int y = 0; y < rows; y++)
            {
                Orb orb = board[x, y];
                if (orb == null || orb.gameObject == null)
                {
                    continue;
                }

                ApplyOrbVisuals(orb);
                orb.transform.position = CellToWorld(x, y);
            }
        }
    }

    public void ApplyPlaygroundVariant(int variantIndex)
    {
        int normalizedVariant = Mathf.Abs(variantIndex) % 3;
        if (normalizedVariant == 1)
        {
            columns = 6;
            rows = 5;
            boardSidePadding = 0.45f;
            boardBottomPadding = 0.8f;
            boardTopPadding = 2.15f;
            orbScale = 0.88f;
            clearDelaySeconds = 0.05f;
            fallDurationSeconds = 0.08f;
            roundDurationSeconds = 28f;
            baseScorePerOrb = 16;
        }
        else if (normalizedVariant == 2)
        {
            columns = 5;
            rows = 5;
            boardSidePadding = 0.55f;
            boardBottomPadding = 0.8f;
            boardTopPadding = 2.2f;
            orbScale = 0.92f;
            clearDelaySeconds = 0.12f;
            fallDurationSeconds = 0.16f;
            roundDurationSeconds = 45f;
            baseScorePerOrb = 10;
        }
        else
        {
            columns = 6;
            rows = 5;
            boardSidePadding = 0.45f;
            boardBottomPadding = 0.8f;
            boardTopPadding = 2.15f;
            orbScale = 0.9f;
            clearDelaySeconds = 0.08f;
            fallDurationSeconds = 0.12f;
            roundDurationSeconds = 35f;
            baseScorePerOrb = 12;
        }

        ValidateConfig();

        if (!Application.isPlaying)
        {
            return;
        }

        UpdateLayout(force: true);
        ResetRound();
    }

    [ContextMenu("Refresh Visual Theme")]
    private void RefreshVisualThemeFromContextMenu()
    {
        RefreshVisualsNow();
    }

    private void ResetRound()
    {
        StopAllCoroutines();
        isDragging = false;
        isResolving = false;
        roundEnded = false;
        hasReportedGameEnded = false;

        score = 0;
        lastMoveCombos = 0;
        timeRemaining = Mathf.Max(5f, roundDurationSeconds);

        ClearBoard();
        BuildInitialBoard();
        SetResultVisible(false);
        UpdateHudTexts();
    }

    private void EndRound()
    {
        if (roundEnded)
        {
            return;
        }

        roundEnded = true;
        isDragging = false;
        isResolving = false;
        StopAllCoroutines();

        if (!hasReportedGameEnded && complianceHooks != null)
        {
            hasReportedGameEnded = true;
            complianceHooks.TriggerGameEnded();
        }

        SetResultVisible(true);
        UpdateHudTexts();
    }

    private void HandleDragInput()
    {
        if (!isDragging)
        {
            if (TryGetPointerDownWorld(out Vector3 worldPosition) && TryWorldToCell(worldPosition, out Vector2Int pressedCell))
            {
                heldCell = pressedCell;
                isDragging = true;
            }

            return;
        }

        if (TryGetPointerHeldWorld(out Vector3 draggedWorld) && TryWorldToCell(draggedWorld, out Vector2Int targetCell))
        {
            DragHeldOrbToward(targetCell);
        }

        if (PointerReleasedThisFrame())
        {
            isDragging = false;
            StartCoroutine(ResolveBoardRoutine());
        }
    }

    private void DragHeldOrbToward(Vector2Int targetCell)
    {
        if (targetCell == heldCell)
        {
            return;
        }

        int guard = 0;
        while (heldCell != targetCell && guard < columns + rows)
        {
            Vector2Int delta = targetCell - heldCell;
            Vector2Int step;

            if (Mathf.Abs(delta.x) >= Mathf.Abs(delta.y))
            {
                step = new Vector2Int(delta.x > 0 ? 1 : -1, 0);
            }
            else
            {
                step = new Vector2Int(0, delta.y > 0 ? 1 : -1);
            }

            Vector2Int next = heldCell + step;
            if (!IsInsideBoard(next))
            {
                break;
            }

            SwapCells(heldCell, next);
            heldCell = next;
            guard++;
        }
    }

    private IEnumerator ResolveBoardRoutine()
    {
        if (isResolving || roundEnded)
        {
            yield break;
        }

        isResolving = true;
        int totalMoveCombos = 0;
        int safety = 0;

        while (safety < 24)
        {
            int combos = CollectMatches(out List<Vector2Int> matchedCells);
            if (combos <= 0 || matchedCells.Count == 0)
            {
                break;
            }

            totalMoveCombos += combos;
            int removed = matchedCells.Count;
            score += CalculateScoreGain(removed, combos, totalMoveCombos);

            RemoveMatchedCells(matchedCells);
            if (clearDelaySeconds > 0f)
            {
                yield return GetClearDelayWait();
            }

            yield return CollapseColumns();
            yield return FillEmptyCells();
            safety++;
        }

        lastMoveCombos = totalMoveCombos;
        isResolving = false;
    }

    private void RemoveMatchedCells(List<Vector2Int> matchedCells)
    {
        for (int i = 0; i < matchedCells.Count; i++)
        {
            Vector2Int cell = matchedCells[i];
            Orb orb = board[cell.x, cell.y];
            if (orb == null)
            {
                continue;
            }

            board[cell.x, cell.y] = null;
            Destroy(orb.gameObject);
        }
    }

    private IEnumerator CollapseColumns()
    {
        moveBuffer.Clear();

        for (int x = 0; x < columns; x++)
        {
            int writeY = 0;
            for (int readY = 0; readY < rows; readY++)
            {
                Orb orb = board[x, readY];
                if (orb == null)
                {
                    continue;
                }

                if (writeY != readY)
                {
                    board[x, writeY] = orb;
                    board[x, readY] = null;

                    Vector3 from = orb.transform.position;
                    Vector3 to = CellToWorld(x, writeY);
                    moveBuffer.Add(new OrbMove(orb, from, to));
                }

                writeY++;
            }
        }

        yield return AnimateMoves(moveBuffer, fallDurationSeconds);
    }

    private IEnumerator FillEmptyCells()
    {
        moveBuffer.Clear();

        for (int x = 0; x < columns; x++)
        {
            int spawnOffset = 0;
            for (int y = 0; y < rows; y++)
            {
                if (board[x, y] != null)
                {
                    continue;
                }

                int orbType = GetRandomOrbType();
                Vector3 spawnPosition = CellToWorld(x, rows + spawnOffset);
                Orb orb = CreateOrb(orbType, spawnPosition);
                board[x, y] = orb;

                Vector3 settlePosition = CellToWorld(x, y);
                moveBuffer.Add(new OrbMove(orb, spawnPosition, settlePosition));
                spawnOffset++;
            }
        }

        yield return AnimateMoves(moveBuffer, fallDurationSeconds * 1.15f);
    }

    private IEnumerator AnimateMoves(List<OrbMove> moves, float duration)
    {
        if (moves == null || moves.Count == 0)
        {
            yield break;
        }

        float safeDuration = Mathf.Max(0.01f, duration);
        float elapsed = 0f;

        while (elapsed < safeDuration)
        {
            elapsed += Time.deltaTime;
            float t = Mathf.Clamp01(elapsed / safeDuration);
            float eased = t * t * (3f - 2f * t);

            for (int i = 0; i < moves.Count; i++)
            {
                OrbMove move = moves[i];
                if (move.orb == null || move.orb.gameObject == null)
                {
                    continue;
                }

                move.orb.transform.position = Vector3.LerpUnclamped(move.from, move.to, eased);
            }

            yield return null;
        }

        for (int i = 0; i < moves.Count; i++)
        {
            OrbMove move = moves[i];
            if (move.orb == null || move.orb.gameObject == null)
            {
                continue;
            }

            move.orb.transform.position = move.to;
        }
    }

    private int CollectMatches(out List<Vector2Int> matchedCells)
    {
        EnsureMatchBuffers();
        ClearBoolGrid(markedCellsBuffer);
        bool[,] marked = markedCellsBuffer;

        for (int y = 0; y < rows; y++)
        {
            int streakType = -1;
            int streakStart = 0;
            int streakLength = 0;

            for (int x = 0; x < columns; x++)
            {
                Orb orb = board[x, y];
                int type = orb != null ? orb.type : -1;

                if (type >= 0 && type == streakType)
                {
                    streakLength++;
                    continue;
                }

                if (streakLength >= 3)
                {
                    for (int markX = streakStart; markX < streakStart + streakLength; markX++)
                    {
                        marked[markX, y] = true;
                    }
                }

                streakType = type;
                streakStart = x;
                streakLength = type >= 0 ? 1 : 0;
            }

            if (streakLength >= 3)
            {
                for (int markX = streakStart; markX < streakStart + streakLength; markX++)
                {
                    marked[markX, y] = true;
                }
            }
        }

        for (int x = 0; x < columns; x++)
        {
            int streakType = -1;
            int streakStart = 0;
            int streakLength = 0;

            for (int y = 0; y < rows; y++)
            {
                Orb orb = board[x, y];
                int type = orb != null ? orb.type : -1;

                if (type >= 0 && type == streakType)
                {
                    streakLength++;
                    continue;
                }

                if (streakLength >= 3)
                {
                    for (int markY = streakStart; markY < streakStart + streakLength; markY++)
                    {
                        marked[x, markY] = true;
                    }
                }

                streakType = type;
                streakStart = y;
                streakLength = type >= 0 ? 1 : 0;
            }

            if (streakLength >= 3)
            {
                for (int markY = streakStart; markY < streakStart + streakLength; markY++)
                {
                    marked[x, markY] = true;
                }
            }
        }

        matchedCells = matchedCellsBuffer;
        matchedCells.Clear();
        for (int x = 0; x < columns; x++)
        {
            for (int y = 0; y < rows; y++)
            {
                if (marked[x, y])
                {
                    matchedCells.Add(new Vector2Int(x, y));
                }
            }
        }

        if (matchedCells.Count == 0)
        {
            return 0;
        }

        int combos = 0;
        ClearBoolGrid(visitedCellsBuffer);
        bool[,] visited = visitedCellsBuffer;
        List<Vector2Int> stack = floodFillStackBuffer;
        stack.Clear();

        for (int x = 0; x < columns; x++)
        {
            for (int y = 0; y < rows; y++)
            {
                if (!marked[x, y] || visited[x, y] || board[x, y] == null)
                {
                    continue;
                }

                combos++;
                int type = board[x, y].type;

                stack.Clear();
                stack.Add(new Vector2Int(x, y));
                visited[x, y] = true;

                while (stack.Count > 0)
                {
                    int lastIndex = stack.Count - 1;
                    Vector2Int cell = stack[lastIndex];
                    stack.RemoveAt(lastIndex);

                    for (int i = 0; i < NeighborOffsets.Length; i++)
                    {
                        Vector2Int next = cell + NeighborOffsets[i];
                        if (!IsInsideBoard(next))
                        {
                            continue;
                        }

                        if (visited[next.x, next.y] || !marked[next.x, next.y])
                        {
                            continue;
                        }

                        Orb orb = board[next.x, next.y];
                        if (orb == null || orb.type != type)
                        {
                            continue;
                        }

                        visited[next.x, next.y] = true;
                        stack.Add(next);
                    }
                }
            }
        }

        return combos;
    }

    private int CalculateScoreGain(int removedCount, int stepCombos, int totalCombos)
    {
        int comboBonus = 1 + Mathf.Max(0, stepCombos - 1);
        int chainBonus = 1 + Mathf.Max(0, totalCombos - 1);
        return removedCount * Mathf.Max(1, baseScorePerOrb) * comboBonus * chainBonus;
    }

    private void BuildInitialBoard()
    {
        for (int x = 0; x < columns; x++)
        {
            for (int y = 0; y < rows; y++)
            {
                int type = GetInitialOrbType(x, y);
                board[x, y] = CreateOrb(type, CellToWorld(x, y));
            }
        }
    }

    private void ClearBoard()
    {
        if (board == null)
        {
            return;
        }

        for (int x = 0; x < columns; x++)
        {
            for (int y = 0; y < rows; y++)
            {
                Orb orb = board[x, y];
                if (orb != null && orb.gameObject != null)
                {
                    Destroy(orb.gameObject);
                }

                board[x, y] = null;
            }
        }
    }

    private Orb CreateOrb(int type, Vector3 worldPosition)
    {
        GameObject orbObject = new GameObject("Orb");
        orbObject.transform.SetParent(boardRoot, worldPositionStays: true);
        orbObject.transform.position = worldPosition;

        SpriteRenderer renderer = orbObject.AddComponent<SpriteRenderer>();
        Orb orb = new Orb(type, orbObject, renderer);
        ApplyOrbVisuals(orb);
        return orb;
    }

    private void SwapCells(Vector2Int a, Vector2Int b)
    {
        Orb first = board[a.x, a.y];
        Orb second = board[b.x, b.y];

        board[a.x, a.y] = second;
        board[b.x, b.y] = first;

        if (board[a.x, a.y] != null)
        {
            board[a.x, a.y].transform.position = CellToWorld(a.x, a.y);
        }

        if (board[b.x, b.y] != null)
        {
            board[b.x, b.y].transform.position = CellToWorld(b.x, b.y);
        }
    }

    private int GetInitialOrbType(int x, int y)
    {
        int colorCount = GetOrbColorCount();
        int candidate = Random.Range(0, colorCount);
        int attempts = 0;

        while (attempts < 16)
        {
            bool horizontalMatch = x >= 2 && board[x - 1, y] != null && board[x - 2, y] != null &&
                                   board[x - 1, y].type == candidate && board[x - 2, y].type == candidate;

            bool verticalMatch = y >= 2 && board[x, y - 1] != null && board[x, y - 2] != null &&
                                 board[x, y - 1].type == candidate && board[x, y - 2].type == candidate;

            if (!horizontalMatch && !verticalMatch)
            {
                return candidate;
            }

            candidate = Random.Range(0, colorCount);
            attempts++;
        }

        return candidate;
    }

    private int GetRandomOrbType()
    {
        return Random.Range(0, GetOrbColorCount());
    }

    private int GetOrbColorCount()
    {
        if (orbColors == null || orbColors.Length == 0)
        {
            return 1;
        }

        return orbColors.Length;
    }

    private Color GetOrbColor(int type)
    {
        if (orbColors == null || orbColors.Length == 0)
        {
            return Color.white;
        }

        int safeIndex = Mathf.Abs(type) % orbColors.Length;
        return orbColors[safeIndex];
    }

    private void CreateRuntimeVisuals()
    {
        if (backgroundTransform == null)
        {
            GameObject backgroundObject = new GameObject("GameplayBackground");
            backgroundTransform = backgroundObject.transform;
            backgroundRenderer = backgroundObject.AddComponent<SpriteRenderer>();
            backgroundRenderer.sortingOrder = -30;
        }

        if (boardRoot == null)
        {
            GameObject boardRootObject = new GameObject("PuzzleBoardRoot");
            boardRoot = boardRootObject.transform;
        }

        if (boardFrameTransform == null)
        {
            GameObject frameObject = new GameObject("PuzzleBoardFrame");
            frameObject.transform.SetParent(boardRoot, worldPositionStays: false);
            boardFrameTransform = frameObject.transform;
            boardFrameRenderer = frameObject.AddComponent<SpriteRenderer>();
            boardFrameRenderer.sortingOrder = -15;
        }

        if (boardOutlineTransform == null)
        {
            GameObject outlineObject = new GameObject("PuzzleBoardOutline");
            outlineObject.transform.SetParent(boardRoot, worldPositionStays: false);
            boardOutlineTransform = outlineObject.transform;
            boardOutlineRenderer = outlineObject.AddComponent<SpriteRenderer>();
            boardOutlineRenderer.sortingOrder = -14;
        }

        ApplyBackgroundVisuals();
        ApplyBoardFrameVisuals();
    }

    private void ApplyBackgroundVisuals()
    {
        if (backgroundRenderer == null)
        {
            return;
        }

        backgroundRenderer.sprite = GetBoardSprite();
        backgroundRenderer.color = backgroundColor;
        ApplyRendererMaterial(backgroundRenderer);
        UpdateBackgroundTransform();

        if (gameplayCamera != null)
        {
            gameplayCamera.backgroundColor = backgroundColor;
        }
    }

    private void ApplyBoardFrameVisuals()
    {
        if (boardFrameRenderer != null)
        {
            boardFrameRenderer.sprite = GetBoardSprite();
            boardFrameRenderer.color = boardColor;
            ApplyRendererMaterial(boardFrameRenderer);
        }

        if (boardOutlineRenderer != null)
        {
            boardOutlineRenderer.sprite = GetBoardSprite();
            boardOutlineRenderer.color = boardOutlineColor;
            ApplyRendererMaterial(boardOutlineRenderer);
        }

        UpdateBoardFrameTransform();
    }

    private void ApplyOrbVisuals(Orb orb)
    {
        if (orb == null || orb.renderer == null || orb.transform == null)
        {
            return;
        }

        Sprite orbSpriteForType = GetOrbSpriteForType(orb.type);
        orb.renderer.sprite = orbSpriteForType;
        orb.renderer.color = GetOrbColor(orb.type);
        orb.renderer.sortingOrder = 10;
        ApplyRendererMaterial(orb.renderer);
        SetTransformDiameter(orb.transform, orbSpriteForType, cellSize * orbScale);
    }

    private Sprite GetOrbSpriteForType(int type)
    {
        if (orbSprites != null && orbSprites.Length > 0)
        {
            int safeIndex = Mathf.Abs(type) % orbSprites.Length;
            Sprite configuredSprite = orbSprites[safeIndex];
            if (configuredSprite != null)
            {
                return PrepareSpriteForRuntime(configuredSprite);
            }
        }

        Sprite configuredFallback = GetAnyConfiguredOrbSprite();
        return PrepareSpriteForRuntime(configuredFallback != null ? configuredFallback : GetGeneratedFallbackSprite());
    }

    private Sprite GetBoardSprite()
    {
        return GetGeneratedFallbackSprite();
    }

    private Sprite GetAnyConfiguredOrbSprite()
    {
        if (orbSprites == null)
        {
            return null;
        }

        for (int i = 0; i < orbSprites.Length; i++)
        {
            if (orbSprites[i] != null)
            {
                return orbSprites[i];
            }
        }

        return null;
    }

    private Sprite PrepareSpriteForRuntime(Sprite sourceSprite)
    {
        if (sourceSprite == null)
        {
            return GetGeneratedFallbackSprite();
        }

        return sourceSprite;
    }

    private void WarnIfMissingSpriteSetup()
    {
        if (hasLoggedMissingSpriteConfig)
        {
            return;
        }

        if (GetAnyConfiguredOrbSprite() != null)
        {
            return;
        }

        hasLoggedMissingSpriteConfig = true;
        Debug.LogWarning("SimpleDodgeGame has no configured orb/board Sprite. Playworks visibility may fail if runtime sprite generation is unsupported.");
    }

#if !UNITY_LUNA
    private void CreateRuntimeHud()
    {
        if (hudRootTransform != null)
        {
            return;
        }

        GameObject canvasObject = new GameObject("RuntimeHud");
        hudRootTransform = canvasObject.transform;

        Canvas canvas = canvasObject.AddComponent<Canvas>();
        canvas.renderMode = RenderMode.ScreenSpaceOverlay;
        canvasObject.AddComponent<CanvasScaler>();
        canvasObject.AddComponent<GraphicRaycaster>();

        Font font = GetBuiltinHudFont();
        scoreText = CreateHudText(canvasObject.transform, "ScoreText", font, 28, new Vector2(0f, 1f), new Vector2(0f, 1f), new Vector2(0f, 1f), new Vector2(20f, -16f), new Vector2(460f, 42f), TextAnchor.MiddleLeft);
        timeText = CreateHudText(canvasObject.transform, "TimeText", font, 28, new Vector2(0f, 1f), new Vector2(0f, 1f), new Vector2(0f, 1f), new Vector2(20f, -54f), new Vector2(460f, 42f), TextAnchor.MiddleLeft);
        comboText = CreateHudText(canvasObject.transform, "ComboText", font, 28, new Vector2(0f, 1f), new Vector2(0f, 1f), new Vector2(0f, 1f), new Vector2(20f, -92f), new Vector2(560f, 42f), TextAnchor.MiddleLeft);
        resultText = CreateHudText(canvasObject.transform, "ResultText", font, 34, new Vector2(0.5f, 0.5f), new Vector2(0.5f, 0.5f), new Vector2(0.5f, 0.5f), Vector2.zero, new Vector2(700f, 220f), TextAnchor.MiddleCenter);
        SetResultVisible(false);
        UpdateHudTexts();
    }

    private static Text CreateHudText(
        Transform parent,
        string objectName,
        Font font,
        int fontSize,
        Vector2 anchorMin,
        Vector2 anchorMax,
        Vector2 pivot,
        Vector2 anchoredPosition,
        Vector2 sizeDelta,
        TextAnchor alignment)
    {
        GameObject textObject = new GameObject(objectName);
        textObject.transform.SetParent(parent, false);

        Text text = textObject.AddComponent<Text>();
        text.font = font;
        text.fontSize = fontSize;
        text.fontStyle = FontStyle.Bold;
        text.color = Color.white;
        text.alignment = alignment;
        text.horizontalOverflow = HorizontalWrapMode.Overflow;
        text.verticalOverflow = VerticalWrapMode.Overflow;
        text.raycastTarget = false;

        RectTransform rectTransform = text.rectTransform;
        rectTransform.anchorMin = anchorMin;
        rectTransform.anchorMax = anchorMax;
        rectTransform.pivot = pivot;
        rectTransform.anchoredPosition = anchoredPosition;
        rectTransform.sizeDelta = sizeDelta;
        return text;
    }

    private void UpdateHudTexts()
    {
        if (scoreText != null)
        {
            scoreText.text = "Score: " + score;
        }

        if (timeText != null)
        {
            timeText.text = "Time: " + timeRemaining.ToString("0.0");
        }

        if (comboText != null)
        {
            comboText.text = "Last Combo: x" + lastMoveCombos;
        }

        if (resultText != null && roundEnded)
        {
            resultText.text = "TIME UP\nScore: " + score + "\nTap / Click to restart";
        }
    }

    private void SetResultVisible(bool visible)
    {
        if (resultText != null)
        {
            resultText.enabled = visible;
        }
    }

    private static Font GetBuiltinHudFont()
    {
        Font font = TryLoadBuiltinFont("LegacyRuntime.ttf");
        if (font != null)
        {
            return font;
        }

        font = TryLoadBuiltinFont("Arial.ttf");
        if (font != null)
        {
            return font;
        }

        Debug.LogWarning("Failed to load builtin HUD font. Text may not render correctly.");
        return null;
    }

    private static Font TryLoadBuiltinFont(string fontPath)
    {
        try
        {
            return (Font)Resources.GetBuiltinResource(typeof(Font), fontPath);
        }
        catch
        {
            return null;
        }
    }
#else
    private void CreateRuntimeHud() { }
    private void UpdateHudTexts() { }
    private void SetResultVisible(bool visible) { }
#endif

    private void UpdateLayout(bool force)
    {
        if (gameplayCamera == null || columns <= 0 || rows <= 0)
        {
            return;
        }

        float halfHeight = gameplayCamera.orthographicSize;
        float halfWidth = halfHeight * gameplayCamera.aspect;
        Vector3 cameraPosition = gameplayCamera.transform.position;

        float safeBottom = cameraPosition.y - halfHeight + Mathf.Max(0f, boardBottomPadding);
        float safeTop = cameraPosition.y + halfHeight - Mathf.Max(0.5f, boardTopPadding);
        float availableHeight = Mathf.Max(1f, safeTop - safeBottom);
        float availableWidth = Mathf.Max(1f, (halfWidth * 2f) - (boardSidePadding * 2f));

        float newCellSize = Mathf.Min(availableWidth / columns, availableHeight / rows);
        newCellSize = Mathf.Max(0.5f, newCellSize);

        float newBoardWidth = newCellSize * columns;
        float newBoardHeight = newCellSize * rows;
        float newLeft = cameraPosition.x - (newBoardWidth * 0.5f);
        float newBottom = safeBottom + Mathf.Max(0f, (availableHeight - newBoardHeight) * 0.5f);

        bool changed = force ||
                       !layoutInitialized ||
                       Mathf.Abs(newCellSize - cellSize) > 0.0001f ||
                       Mathf.Abs(newLeft - boardBottomLeft.x) > 0.0001f ||
                       Mathf.Abs(newBottom - boardBottomLeft.y) > 0.0001f;

        if (!changed)
        {
            return;
        }

        cellSize = newCellSize;
        boardBottomLeft = new Vector2(newLeft, newBottom);
        boardWorldWidth = newBoardWidth;
        boardWorldHeight = newBoardHeight;
        layoutInitialized = true;

        UpdateBackgroundTransform();
        UpdateBoardFrameTransform();
        RepositionBoardOrbs();
    }

    private void RepositionBoardOrbs()
    {
        if (board == null)
        {
            return;
        }

        for (int x = 0; x < columns; x++)
        {
            for (int y = 0; y < rows; y++)
            {
                Orb orb = board[x, y];
                if (orb == null || orb.gameObject == null)
                {
                    continue;
                }

                orb.transform.position = CellToWorld(x, y);
                SetTransformDiameter(orb.transform, orb.renderer.sprite, cellSize * orbScale);
            }
        }
    }

    private void UpdateBackgroundTransform()
    {
        if (backgroundTransform == null || backgroundRenderer == null || gameplayCamera == null)
        {
            return;
        }

        float worldHeight = gameplayCamera.orthographicSize * 2f;
        float worldWidth = worldHeight * gameplayCamera.aspect;
        Vector2 spriteSize = GetSpriteWorldSize(backgroundRenderer.sprite);
        float scaleX = worldWidth / spriteSize.x;
        float scaleY = worldHeight / spriteSize.y;

        backgroundTransform.position = new Vector3(gameplayCamera.transform.position.x, gameplayCamera.transform.position.y, gameplayZ);
        backgroundTransform.localScale = new Vector3(scaleX, scaleY, 1f);
    }

    private void UpdateBoardFrameTransform()
    {
        if (boardFrameTransform != null && boardFrameRenderer != null)
        {
            boardFrameTransform.position = new Vector3(boardBottomLeft.x + (boardWorldWidth * 0.5f), boardBottomLeft.y + (boardWorldHeight * 0.5f), gameplayZ);
            SetTransformSize(boardFrameTransform, boardFrameRenderer.sprite, boardWorldWidth * 1.02f, boardWorldHeight * 1.02f);
        }

        if (boardOutlineTransform != null && boardOutlineRenderer != null)
        {
            boardOutlineTransform.position = new Vector3(boardBottomLeft.x + (boardWorldWidth * 0.5f), boardBottomLeft.y + (boardWorldHeight * 0.5f), gameplayZ + 0.001f);
            SetTransformSize(boardOutlineTransform, boardOutlineRenderer.sprite, boardWorldWidth * 1.08f, boardWorldHeight * 1.08f);
        }
    }

    private Vector3 CellToWorld(int x, int y)
    {
        return new Vector3(
            boardBottomLeft.x + ((x + 0.5f) * cellSize),
            boardBottomLeft.y + ((y + 0.5f) * cellSize),
            gameplayZ);
    }

    private bool TryWorldToCell(Vector3 worldPosition, out Vector2Int cell)
    {
        float localX = worldPosition.x - boardBottomLeft.x;
        float localY = worldPosition.y - boardBottomLeft.y;

        int x = Mathf.FloorToInt(localX / cellSize);
        int y = Mathf.FloorToInt(localY / cellSize);

        cell = new Vector2Int(x, y);
        return IsInsideBoard(cell);
    }

    private bool IsInsideBoard(Vector2Int cell)
    {
        return cell.x >= 0 && cell.x < columns && cell.y >= 0 && cell.y < rows;
    }

    private bool TryGetPointerDownWorld(out Vector3 worldPosition)
    {
        if (Input.touchCount > 0)
        {
            for (int i = 0; i < Input.touchCount; i++)
            {
                Touch touch = Input.GetTouch(i);
                if (touch.phase != TouchPhase.Began)
                {
                    continue;
                }

                worldPosition = ScreenToWorld(touch.position);
                return true;
            }
        }

        if (Input.GetMouseButtonDown(0))
        {
            worldPosition = ScreenToWorld(Input.mousePosition);
            return true;
        }

        worldPosition = Vector3.zero;
        return false;
    }

    private bool TryGetPointerHeldWorld(out Vector3 worldPosition)
    {
        if (Input.touchCount > 0)
        {
            Touch touch = Input.GetTouch(0);
            if (touch.phase == TouchPhase.Canceled || touch.phase == TouchPhase.Ended)
            {
                worldPosition = Vector3.zero;
                return false;
            }

            worldPosition = ScreenToWorld(touch.position);
            return true;
        }

        if (Input.GetMouseButton(0))
        {
            worldPosition = ScreenToWorld(Input.mousePosition);
            return true;
        }

        worldPosition = Vector3.zero;
        return false;
    }

    private bool PointerPressedThisFrame()
    {
        if (Input.GetMouseButtonDown(0))
        {
            return true;
        }

        for (int i = 0; i < Input.touchCount; i++)
        {
            if (Input.GetTouch(i).phase == TouchPhase.Began)
            {
                return true;
            }
        }

        return false;
    }

    private bool PointerReleasedThisFrame()
    {
        if (Input.GetMouseButtonUp(0))
        {
            return true;
        }

        for (int i = 0; i < Input.touchCount; i++)
        {
            TouchPhase phase = Input.GetTouch(i).phase;
            if (phase == TouchPhase.Canceled || phase == TouchPhase.Ended)
            {
                return true;
            }
        }

        return false;
    }

    private Vector3 ScreenToWorld(Vector2 screenPosition)
    {
        Vector3 screen = new Vector3(screenPosition.x, screenPosition.y, pointerDepth);
        return gameplayCamera.ScreenToWorldPoint(screen);
    }

    private void ValidateConfig()
    {
        columns = Mathf.Max(3, columns);
        rows = Mathf.Max(3, rows);
        roundDurationSeconds = Mathf.Max(5f, roundDurationSeconds);
        baseScorePerOrb = Mathf.Max(1, baseScorePerOrb);
        orbScale = Mathf.Clamp(orbScale, 0.6f, 1f);
        clearDelaySeconds = Mathf.Max(0f, clearDelaySeconds);
        fallDurationSeconds = Mathf.Max(0.01f, fallDurationSeconds);

        if (orbColors == null || orbColors.Length < 4)
        {
            orbColors = new[]
            {
                new Color(0.90f, 0.33f, 0.30f, 1f),
                new Color(0.25f, 0.66f, 0.95f, 1f),
                new Color(0.42f, 0.86f, 0.42f, 1f),
                new Color(0.93f, 0.82f, 0.31f, 1f),
                new Color(0.70f, 0.48f, 0.96f, 1f),
                new Color(0.96f, 0.57f, 0.81f, 1f),
            };
        }

        if (board == null || board.GetLength(0) != columns || board.GetLength(1) != rows)
        {
            board = new Orb[columns, rows];
        }

        EnsureMatchBuffers();
    }

    private void EnsureMatchBuffers()
    {
        if (markedCellsBuffer == null || markedCellsBuffer.GetLength(0) != columns || markedCellsBuffer.GetLength(1) != rows)
        {
            markedCellsBuffer = new bool[columns, rows];
        }

        if (visitedCellsBuffer == null || visitedCellsBuffer.GetLength(0) != columns || visitedCellsBuffer.GetLength(1) != rows)
        {
            visitedCellsBuffer = new bool[columns, rows];
        }
    }

    private static void ClearBoolGrid(bool[,] grid)
    {
        if (grid == null)
        {
            return;
        }

        int width = grid.GetLength(0);
        int height = grid.GetLength(1);
        for (int x = 0; x < width; x++)
        {
            for (int y = 0; y < height; y++)
            {
                grid[x, y] = false;
            }
        }
    }

    private WaitForSeconds GetClearDelayWait()
    {
        float safeDelay = Mathf.Max(0f, clearDelaySeconds);
        if (cachedClearDelayWait == null || Mathf.Abs(cachedClearDelaySeconds - safeDelay) > 0.0001f)
        {
            cachedClearDelaySeconds = safeDelay;
            cachedClearDelayWait = new WaitForSeconds(safeDelay);
        }

        return cachedClearDelayWait;
    }

    private void ApplyRendererMaterial(SpriteRenderer renderer)
    {
        if (renderer == null)
        {
            return;
        }

        Material selectedMaterial = GetSharedSpriteMaterial();
        if (selectedMaterial != null)
        {
            renderer.material = selectedMaterial;
        }
    }

    private float GetGameplayZ()
    {
        float distanceFromCamera = Mathf.Max(gameplayCamera.nearClipPlane + 1f, 5f);
        float forwardZ = gameplayCamera.transform.forward.z;
        if (Mathf.Abs(forwardZ) < 0.0001f)
        {
            forwardZ = 1f;
        }

        return gameplayCamera.transform.position.z + (Mathf.Sign(forwardZ) * distanceFromCamera);
    }

    private Material GetSharedSpriteMaterial()
    {
        if (spriteMaterial != null && ShouldUseCustomMaterialForCurrentPlatform())
        {
            Shader shader = spriteMaterial.shader;
            if (!fallbackToDefaultIfShaderUnsupported || (shader != null && shader.isSupported))
            {
                return spriteMaterial;
            }
        }

        return null;
    }

    private bool ShouldUseCustomMaterialForCurrentPlatform()
    {
        if (Application.platform == RuntimePlatform.WebGLPlayer)
        {
            return useCustomMaterialInWebGl;
        }

        return useCustomMaterialInEditor;
    }

    private static Sprite GetGeneratedFallbackSprite()
    {
        if (generatedFallbackSprite != null)
        {
            return generatedFallbackSprite;
        }

        try
        {
            if (generatedFallbackTexture == null)
            {
                generatedFallbackTexture = new Texture2D(2, 2, TextureFormat.RGBA32, mipChain: false);
                generatedFallbackTexture.SetPixel(0, 0, Color.white);
                generatedFallbackTexture.SetPixel(1, 0, Color.white);
                generatedFallbackTexture.SetPixel(0, 1, Color.white);
                generatedFallbackTexture.SetPixel(1, 1, Color.white);
                generatedFallbackTexture.Apply(updateMipmaps: false, makeNoLongerReadable: true);
            }

            generatedFallbackSprite = Sprite.Create(
                generatedFallbackTexture,
                new Rect(0f, 0f, generatedFallbackTexture.width, generatedFallbackTexture.height),
                new Vector2(0.5f, 0.5f),
                generatedFallbackTexture.width);
        }
        catch
        {
            return null;
        }

        return generatedFallbackSprite;
    }

    private static void SetTransformDiameter(Transform targetTransform, Sprite sprite, float diameter)
    {
        Vector2 spriteSize = GetSpriteWorldSize(sprite);
        float safeDiameter = Mathf.Max(0.01f, diameter);
        float scaleX = safeDiameter / spriteSize.x;
        float scaleY = safeDiameter / spriteSize.y;
        targetTransform.localScale = new Vector3(scaleX, scaleY, 1f);
    }

    private static void SetTransformSize(Transform targetTransform, Sprite sprite, float width, float height)
    {
        Vector2 spriteSize = GetSpriteWorldSize(sprite);
        float scaleX = Mathf.Max(0.01f, width) / spriteSize.x;
        float scaleY = Mathf.Max(0.01f, height) / spriteSize.y;
        targetTransform.localScale = new Vector3(scaleX, scaleY, 1f);
    }

    private static Vector2 GetSpriteWorldSize(Sprite sprite)
    {
        if (sprite == null)
        {
            return Vector2.one;
        }

        Vector2 size = sprite.bounds.size;
        if (size.x <= Mathf.Epsilon || size.y <= Mathf.Epsilon)
        {
            return Vector2.one;
        }

        return size;
    }
}
