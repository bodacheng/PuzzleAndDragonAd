using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

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
    [SerializeField] private float resolveStallTimeoutSeconds = 8f;

    [Header("Round")]
    [SerializeField] private float roundDurationSeconds = 35f;
    [SerializeField] private int baseScorePerOrb = 12;

    [Header("Colors")]
    [SerializeField] private Color backgroundColor = new Color(0.12f, 0.16f, 0.25f, 1f);
    [SerializeField] private Sprite backgroundSprite;
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
    [SerializeField] private Font hudFontOverride;

    [Header("Enemy & Attack")]
    [SerializeField] private GameObject enemyPrefab;
    [SerializeField] private Sprite enemySprite;
    [SerializeField] private Color enemyTint = Color.white;
    [SerializeField] [Range(0.8f, 3f)] private float enemySizeInCells = 1.8f;
    [SerializeField] [Range(0.25f, 8f)] private float enemyDisplayScale = 1f;
    [SerializeField] private float enemyTopMargin = 0.3f;
    [SerializeField] private string enemyIdleAnimationState = "Idle";
    [SerializeField] private string enemyHurtAnimationState = "Hurt";
    [SerializeField] [Range(0.05f, 2f)] private float enemyHurtAnimationSeconds = 0.22f;
    [SerializeField] private GameObject attackEffectPrefab;
    [SerializeField] private Sprite attackEffectSprite;
    [SerializeField] [Range(0.05f, 0.5f)] private float attackTravelSeconds = 0.18f;
    [SerializeField] [Range(0f, 2f)] private float attackArcHeight = 0.45f;
    [SerializeField] [Range(0.1f, 1.5f)] private float attackEffectScale = 0.3f;
    [SerializeField] [Range(0.005f, 0.25f)] private float enemyHitShakeInCells = 0.03f;
    [SerializeField] [Range(0.01f, 0.2f)] private float enemyHitShakeSeconds = 0.07f;

    [Header("Audio")]
    [SerializeField] private AudioClip bgmClip;
    [SerializeField] private AudioClip attackSfxClip;
    [SerializeField] private AudioClip match3SfxClip;
    [SerializeField] [Range(0f, 1f)] private float bgmVolume = 0.6f;
    [SerializeField] [Range(0f, 1f)] private float sfxVolume = 0.9f;

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

    private struct ActiveAttackEffect
    {
        public readonly GameObject gameObject;
        public readonly Transform transform;
        public readonly Vector3 from;
        public readonly Vector3 to;
        public readonly float duration;
        public float elapsed;

        public ActiveAttackEffect(GameObject gameObject, Transform transform, Vector3 from, Vector3 to, float duration)
        {
            this.gameObject = gameObject;
            this.transform = transform;
            this.from = from;
            this.to = to;
            this.duration = duration;
            elapsed = 0f;
        }
    }

    private enum ImmediateResolvePhase
    {
        Idle,
        ClearDelay,
        CollapseAnim,
        FillAnim,
    }

    private static readonly Vector2Int[] NeighborOffsets =
    {
        new Vector2Int(1, 0),
        new Vector2Int(-1, 0),
        new Vector2Int(0, 1),
        new Vector2Int(0, -1),
    };
    private const string HudFontResourceName = "HudFont";
    private const string PrefKeyBgmEnabled = "SimpleDodgeGame.BgmEnabled";
    private const string PrefKeyAttackSfxEnabled = "SimpleDodgeGame.AttackSfxEnabled";
    private const string PrefKeyMatch3SfxEnabled = "SimpleDodgeGame.Match3SfxEnabled";

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
    private Transform attackEffectsRoot;
    private Transform enemyTransform;
    private Transform enemyVisualRoot;
    private SpriteRenderer[] enemyRenderers = new SpriteRenderer[0];
    private Color[] enemyBaseRendererColors = new Color[0];
    private Animator enemyAnimator;
    private float enemyVisualBaseDiameter = 1f;
    private Vector3 enemyAnchorPosition;

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

    private Transform hudRootTransform;
    private Text scoreText;
    private Text timeText;
    private Text comboText;
    private Text resultText;
    private Button settingsButton;
    private GameObject settingsPanelObject;
    private Toggle bgmToggle;
    private Toggle attackSfxToggle;
    private Toggle match3SfxToggle;
    private AudioSource bgmAudioSource;
    private AudioSource sfxAudioSource;
    private readonly List<OrbMove> moveBuffer = new List<OrbMove>(64);
    private readonly List<ActiveAttackEffect> activeAttackEffects = new List<ActiveAttackEffect>(96);
    private readonly List<Vector2Int> matchedCellsBuffer = new List<Vector2Int>(64);
    private readonly List<Vector2Int> floodFillStackBuffer = new List<Vector2Int>(64);
    private bool[,] markedCellsBuffer;
    private bool[,] visitedCellsBuffer;
    private float resolveStartedAt = -1f;
    private int resolveRecoveryAttempts;
    private string resolveStage = "idle";
    private ImmediateResolvePhase immediateResolvePhase = ImmediateResolvePhase.Idle;
    private float immediatePhaseTimer;
    private float immediateMoveDuration;
    private int immediateTotalMoveCombos;
    private bool hasLoggedMissingHudFont;
    private bool enemyHitFeedbackActive;
    private float enemyHitFeedbackTimer;
    private float enemyHitFeedbackDuration;
    private bool enemyHurtAnimationActive;
    private float enemyHurtAnimationTimer;
    private bool bgmEnabled = true;
    private bool attackSfxEnabled = true;
    private bool match3SfxEnabled = true;
    private float nextAttackSfxAllowedAt;
    private bool shouldRetryBgmStart;

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
        LoadAudioSettings();

        gameplayZ = GetGameplayZ();
        pointerDepth = Mathf.Abs(gameplayZ - gameplayCamera.transform.position.z);

        CreateRuntimeVisuals();
        CreateRuntimeHud();
        CreateAudioSources();
        ApplyAudioSettingsToRuntime();
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
        TryStartBgmOnUserGesture();
        UpdateActiveAttackEffects();
        UpdateEnemyHitFeedback();
        UpdateEnemyHurtAnimation();
        RecoverFromResolveStallIfNeeded();

        if (!roundEnded && !isResolving && HasAnyEmptyCell())
        {
            TriggerResolve();
        }

        if (roundEnded)
        {
#if UNITY_LUNA
            if (!IsPointerOverUi() && PointerPressedThisFrame())
            {
                if (complianceHooks != null)
                {
                    complianceHooks.TriggerInstall();
                }
                else
                {
                    ResetRound();
                }
            }
#else
            if (Input.GetKeyDown(KeyCode.R) || (!IsPointerOverUi() && PointerPressedThisFrame()))
            {
                ResetRound();
            }
#endif

            UpdateHudTexts();
            return;
        }

        timeRemaining -= GetSafeUnscaledDeltaTime();
        if (timeRemaining <= 0f)
        {
            timeRemaining = 0f;
            EndRound();
            UpdateHudTexts();
            return;
        }

        if (ShouldUseImmediateResolve() && isResolving)
        {
            UpdateImmediateResolve();
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

        if (hudRootTransform != null)
        {
            Destroy(hudRootTransform.gameObject);
        }
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
        ApplyAudioSettingsToRuntime();
        UpdateAudioSettingsUiState();
    }

    public void RefreshVisualsNow()
    {
        ValidateConfig();
        ApplyBackgroundVisuals();
        ApplyBoardFrameVisuals();
        ApplyEnemyVisuals();
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

        UpdateEnemyTransform();
    }

    public void ConfigureEnemyPresentation(Sprite configuredEnemySprite, GameObject configuredAttackEffectPrefab)
    {
        ConfigureEnemyPresentation(null, configuredEnemySprite, configuredAttackEffectPrefab);
    }

    public void ConfigureEnemyPresentation(GameObject configuredEnemyPrefab, Sprite configuredEnemySprite, GameObject configuredAttackEffectPrefab)
    {
        if (configuredEnemyPrefab != null)
        {
            enemyPrefab = configuredEnemyPrefab;
        }

        if (configuredEnemySprite != null)
        {
            enemySprite = configuredEnemySprite;
        }

        if (configuredAttackEffectPrefab != null)
        {
            attackEffectPrefab = configuredAttackEffectPrefab;
        }

        if (!Application.isPlaying)
        {
            return;
        }

        ApplyEnemyVisuals();
        UpdateEnemyTransform();
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
        ResetImmediateResolveState();
        resolveStartedAt = -1f;
        resolveRecoveryAttempts = 0;
        roundEnded = false;
        hasReportedGameEnded = false;

        score = 0;
        lastMoveCombos = 0;
        timeRemaining = Mathf.Max(5f, roundDurationSeconds);
        ResetEnemyHitVisuals();
        ResetEnemyAnimatorToIdle();

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
        ResetImmediateResolveState();
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
        if (!isDragging && IsPointerOverUi())
        {
            return;
        }

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

        bool released = PointerReleasedThisFrame();
        if (!released && !IsPointerCurrentlyHeld())
        {
            // Playworks/web sometimes misses a release event. Recover by force-releasing.
            released = true;
        }

        if (released)
        {
            isDragging = false;
            TriggerResolve();
        }
    }

    private static bool IsPointerCurrentlyHeld()
    {
        if (Input.GetMouseButton(0))
        {
            return true;
        }

        for (int i = 0; i < Input.touchCount; i++)
        {
            TouchPhase phase = Input.GetTouch(i).phase;
            if (phase != TouchPhase.Ended && phase != TouchPhase.Canceled)
            {
                return true;
            }
        }

        return false;
    }

    private static bool IsPointerOverUi()
    {
        EventSystem eventSystem = EventSystem.current;
        if (eventSystem == null)
        {
            return false;
        }

        for (int i = 0; i < Input.touchCount; i++)
        {
            if (eventSystem.IsPointerOverGameObject(Input.GetTouch(i).fingerId))
            {
                return true;
            }
        }

        return eventSystem.IsPointerOverGameObject();
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

        if (ShouldUseImmediateResolve())
        {
            StartImmediateResolve();
            yield break;
        }

        isResolving = true;
        MarkResolveProgress();
        resolveStage = "collect";
        int totalMoveCombos = 0;
        int safety = 0;
        try
        {
            while (safety < 24)
            {
                MarkResolveProgress();
                resolveStage = "collect";
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
                    resolveStage = "clear-delay";
                    yield return WaitForSecondsUnscaled(clearDelaySeconds);
                    MarkResolveProgress();
                }

                resolveStage = "collapse";
                yield return CollapseColumns();
                MarkResolveProgress();
                resolveStage = "fill";
                yield return FillEmptyCells();
                MarkResolveProgress();
                safety++;
            }

            if (HasAnyEmptyCell())
            {
                resolveStage = "final-fill";
                yield return FillEmptyCells();
                MarkResolveProgress();
            }
        }
        finally
        {
            if (HasAnyEmptyCell())
            {
                FillAnyEmptyCellsImmediate();
            }

            lastMoveCombos = totalMoveCombos;
            isResolving = false;
            resolveStartedAt = -1f;
            resolveStage = "idle";
            resolveRecoveryAttempts = 0;
        }
    }

    private void RemoveMatchedCells(List<Vector2Int> matchedCells)
    {
        if (matchedCells == null || matchedCells.Count == 0)
        {
            return;
        }

        PlayMatch3Sfx();

        for (int i = 0; i < matchedCells.Count; i++)
        {
            Vector2Int cell = matchedCells[i];
            Orb orb = board[cell.x, cell.y];
            if (orb == null)
            {
                continue;
            }

            LaunchAttackAtEnemy(orb.transform.position, orb.type);
            board[cell.x, cell.y] = null;
            Destroy(orb.gameObject);
        }
    }

    private void LaunchAttackAtEnemy(Vector3 fromPosition, int orbType)
    {
        if (enemyTransform == null || roundEnded)
        {
            return;
        }

        GameObject attackObject = CreateAttackEffectObject(orbType);
        if (attackObject == null)
        {
            return;
        }

        Transform attackTransform = attackObject.transform;
        attackTransform.position = fromPosition;
        attackTransform.rotation = Quaternion.identity;
        Vector3 targetPosition = layoutInitialized ? enemyAnchorPosition : enemyTransform.position;
        float duration = Mathf.Max(0.05f, attackTravelSeconds);
        activeAttackEffects.Add(new ActiveAttackEffect(attackObject, attackTransform, fromPosition, targetPosition, duration));
    }

    private GameObject CreateAttackEffectObject(int orbType)
    {
        if (attackEffectPrefab != null)
        {
            GameObject effectObject = Instantiate(attackEffectPrefab);
            if (effectObject == null)
            {
                return null;
            }

            if (boardRoot != null)
            {
                effectObject.transform.SetParent(attackEffectsRoot != null ? attackEffectsRoot : boardRoot, worldPositionStays: true);
            }

            ApplyAttackEffectTint(effectObject, GetOrbColor(orbType));
            return effectObject;
        }

        GameObject fallbackObject = new GameObject("AttackEffect");
        if (boardRoot != null)
        {
            fallbackObject.transform.SetParent(attackEffectsRoot != null ? attackEffectsRoot : boardRoot, worldPositionStays: true);
        }

        SpriteRenderer renderer = fallbackObject.AddComponent<SpriteRenderer>();
        Sprite configuredSprite = attackEffectSprite != null ? attackEffectSprite : GetAnyConfiguredOrbSprite();
        renderer.sprite = PrepareSpriteForRuntime(configuredSprite != null ? configuredSprite : GetGeneratedFallbackSprite());
        renderer.color = GetOrbColor(orbType);
        renderer.sortingOrder = 18;
        ApplyRendererMaterial(renderer);
        SetTransformDiameter(fallbackObject.transform, renderer.sprite, cellSize * attackEffectScale);
        return fallbackObject;
    }

    private void ApplyAttackEffectTint(GameObject effectObject, Color tint)
    {
        if (effectObject == null)
        {
            return;
        }

        SpriteRenderer[] renderers = effectObject.GetComponentsInChildren<SpriteRenderer>(includeInactive: true);
        for (int i = 0; i < renderers.Length; i++)
        {
            SpriteRenderer renderer = renderers[i];
            if (renderer == null)
            {
                continue;
            }

            renderer.color = Color.Lerp(renderer.color, tint, 0.8f);
            renderer.sortingOrder = Mathf.Max(renderer.sortingOrder, 18);
            ApplyRendererMaterial(renderer);
        }
    }

    private void UpdateActiveAttackEffects()
    {
        if (activeAttackEffects.Count == 0)
        {
            return;
        }

        float dt = GetSafeUnscaledDeltaTime();
        for (int i = activeAttackEffects.Count - 1; i >= 0; i--)
        {
            ActiveAttackEffect attack = activeAttackEffects[i];
            if (attack.gameObject == null || attack.transform == null)
            {
                activeAttackEffects.RemoveAt(i);
                continue;
            }

            attack.elapsed += dt;
            float t = Mathf.Clamp01(attack.elapsed / Mathf.Max(0.01f, attack.duration));
            float eased = t * t * (3f - 2f * t);
            Vector3 linear = Vector3.LerpUnclamped(attack.from, attack.to, eased);
            float arcOffset = attackArcHeight * Mathf.Sin(t * Mathf.PI);
            attack.transform.position = linear + new Vector3(0f, arcOffset, 0f);

            if (t >= 1f)
            {
                ResolveAttackImpact(attack);
                activeAttackEffects.RemoveAt(i);
                continue;
            }

            activeAttackEffects[i] = attack;
        }
    }

    private void ResolveAttackImpact(ActiveAttackEffect attack)
    {
        if (attack.transform != null)
        {
            attack.transform.position = attack.to;
        }

        TryPlayAttackSfx();
        TriggerEnemyHitFeedback();
        if (attack.gameObject != null)
        {
            Destroy(attack.gameObject);
        }
    }

    private void TriggerEnemyHitFeedback()
    {
        if (enemyTransform == null)
        {
            return;
        }

        enemyHitFeedbackActive = true;
        enemyHitFeedbackDuration = Mathf.Max(0.01f, enemyHitShakeSeconds);
        enemyHitFeedbackTimer = enemyHitFeedbackDuration;
        SetEnemyRenderersFlash(0.55f);
        TriggerEnemyHurtAnimation();
    }

    private void UpdateEnemyHitFeedback()
    {
        if (!enemyHitFeedbackActive)
        {
            return;
        }

        if (enemyTransform == null)
        {
            enemyHitFeedbackActive = false;
            return;
        }

        enemyHitFeedbackTimer -= GetSafeUnscaledDeltaTime();
        float remaining = Mathf.Max(0f, enemyHitFeedbackTimer);
        float progress = 1f - (remaining / Mathf.Max(0.01f, enemyHitFeedbackDuration));
        float damping = Mathf.Clamp01(1f - progress);
        float shakeDistance = cellSize * enemyHitShakeInCells * damping;
        Vector2 jitter = Random.insideUnitCircle * shakeDistance;
        enemyTransform.position = enemyAnchorPosition + new Vector3(jitter.x, jitter.y, 0f);

        if (enemyHitFeedbackTimer <= 0f)
        {
            ResetEnemyHitVisuals();
        }
    }

    private void ResetEnemyHitVisuals()
    {
        enemyHitFeedbackActive = false;
        enemyHitFeedbackTimer = 0f;
        enemyHitFeedbackDuration = 0f;

        int rendererCount = Mathf.Min(enemyRenderers.Length, enemyBaseRendererColors.Length);
        for (int i = 0; i < rendererCount; i++)
        {
            SpriteRenderer renderer = enemyRenderers[i];
            if (renderer == null)
            {
                continue;
            }

            renderer.color = enemyBaseRendererColors[i];
        }

        if (enemyTransform != null)
        {
            enemyTransform.position = enemyAnchorPosition;
        }
    }

    private void SetEnemyRenderersFlash(float whiteBlend)
    {
        int rendererCount = Mathf.Min(enemyRenderers.Length, enemyBaseRendererColors.Length);
        float clampedBlend = Mathf.Clamp01(whiteBlend);
        for (int i = 0; i < rendererCount; i++)
        {
            SpriteRenderer renderer = enemyRenderers[i];
            if (renderer == null)
            {
                continue;
            }

            renderer.color = Color.Lerp(enemyBaseRendererColors[i], Color.white, clampedBlend);
        }
    }

    private void TriggerEnemyHurtAnimation()
    {
        if (enemyAnimator == null || string.IsNullOrEmpty(enemyHurtAnimationState))
        {
            return;
        }

        enemyHurtAnimationTimer = Mathf.Max(0.01f, enemyHurtAnimationSeconds);
        enemyHurtAnimationActive = true;
        PlayEnemyAnimationState(enemyHurtAnimationState);
    }

    private void UpdateEnemyHurtAnimation()
    {
        if (!enemyHurtAnimationActive)
        {
            return;
        }

        if (enemyAnimator == null)
        {
            enemyHurtAnimationActive = false;
            enemyHurtAnimationTimer = 0f;
            return;
        }

        enemyHurtAnimationTimer -= GetSafeUnscaledDeltaTime();
        if (enemyHurtAnimationTimer > 0f)
        {
            return;
        }

        enemyHurtAnimationActive = false;
        enemyHurtAnimationTimer = 0f;
        PlayEnemyAnimationState(enemyIdleAnimationState);
    }

    private void ResetEnemyAnimatorToIdle()
    {
        enemyHurtAnimationActive = false;
        enemyHurtAnimationTimer = 0f;
        PlayEnemyAnimationState(enemyIdleAnimationState);
    }

    private void PlayEnemyAnimationState(string stateName)
    {
        if (enemyAnimator == null || string.IsNullOrEmpty(stateName))
        {
            return;
        }

        if (!enemyAnimator.isActiveAndEnabled || enemyAnimator.runtimeAnimatorController == null)
        {
            return;
        }

        enemyAnimator.Play(stateName, 0, 0f);
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

    private bool HasAnyEmptyCell()
    {
        if (board == null)
        {
            return false;
        }

        for (int x = 0; x < columns; x++)
        {
            for (int y = 0; y < rows; y++)
            {
                if (board[x, y] == null)
                {
                    return true;
                }
            }
        }

        return false;
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
            elapsed += GetSafeUnscaledDeltaTime();
            float t = Mathf.Clamp01(elapsed / safeDuration);
            float eased = t * t * (3f - 2f * t);
            MarkResolveProgress();

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

        MarkResolveProgress();
    }

    private void RecoverFromResolveStallIfNeeded()
    {
        if (ShouldUseImmediateResolve())
        {
            return;
        }

        if (!isResolving || resolveStartedAt < 0f)
        {
            return;
        }

        float timeout = Mathf.Max(1f, resolveStallTimeoutSeconds);
        if (Time.unscaledTime - resolveStartedAt < timeout)
        {
            return;
        }

        Debug.LogWarning(
            "Resolve routine stalled at stage '" + resolveStage + "' with emptyCells=" + CountEmptyCells() + ". Attempting recovery.");
        StopAllCoroutines();
        isResolving = false;
        isDragging = false;
        resolveStartedAt = -1f;
        resolveStage = "idle";
        resolveRecoveryAttempts++;
        FillAnyEmptyCellsImmediate();

        if (resolveRecoveryAttempts > 2)
        {
            Debug.LogWarning("Resolve recovery exceeded retry limit. Resetting round.");
            ResetRound();
            return;
        }

        TriggerResolve();
    }

    private void FillAnyEmptyCellsImmediate()
    {
        if (board == null)
        {
            return;
        }

        for (int x = 0; x < columns; x++)
        {
            for (int y = 0; y < rows; y++)
            {
                if (board[x, y] != null)
                {
                    continue;
                }

                int orbType = GetRandomOrbType();
                board[x, y] = CreateOrb(orbType, CellToWorld(x, y));
            }
        }
    }

    private int BuildCollapseMoves(List<OrbMove> targetMoves)
    {
        targetMoves.Clear();

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
                    targetMoves.Add(new OrbMove(orb, from, to));
                }

                writeY++;
            }
        }

        return targetMoves.Count;
    }

    private int BuildFillMoves(List<OrbMove> targetMoves)
    {
        targetMoves.Clear();

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
                targetMoves.Add(new OrbMove(orb, spawnPosition, settlePosition));
                spawnOffset++;
            }
        }

        return targetMoves.Count;
    }

    private void StartImmediateResolve()
    {
        if (isResolving || roundEnded)
        {
            return;
        }

        isResolving = true;
        ResetImmediateResolveState();
        resolveStage = "collect";
        MarkResolveProgress();
        EvaluateImmediateResolveStep();
    }

    private void UpdateImmediateResolve()
    {
        if (!isResolving)
        {
            return;
        }

        float dt = GetSafeUnscaledDeltaTime();
        switch (immediateResolvePhase)
        {
            case ImmediateResolvePhase.ClearDelay:
                immediatePhaseTimer -= dt;
                MarkResolveProgress();
                if (immediatePhaseTimer <= 0f)
                {
                    BeginImmediateCollapsePhase();
                }
                break;
            case ImmediateResolvePhase.CollapseAnim:
            case ImmediateResolvePhase.FillAnim:
                UpdateImmediateMoveAnimation(dt);
                break;
            default:
                EvaluateImmediateResolveStep();
                break;
        }
    }

    private void EvaluateImmediateResolveStep()
    {
        if (!isResolving || roundEnded)
        {
            return;
        }

        resolveStage = "collect";
        MarkResolveProgress();

        int combos = CollectMatches(out List<Vector2Int> matchedCells);
        if (combos <= 0 || matchedCells.Count == 0)
        {
            if (HasAnyEmptyCell())
            {
                BeginImmediateFillPhase();
                return;
            }

            FinishImmediateResolve();
            return;
        }

        immediateTotalMoveCombos += combos;
        int removed = matchedCells.Count;
        score += CalculateScoreGain(removed, combos, immediateTotalMoveCombos);

        RemoveMatchedCells(matchedCells);
        if (clearDelaySeconds > 0f)
        {
            resolveStage = "clear-delay";
            immediateResolvePhase = ImmediateResolvePhase.ClearDelay;
            immediatePhaseTimer = clearDelaySeconds;
            return;
        }

        BeginImmediateCollapsePhase();
    }

    private void BeginImmediateCollapsePhase()
    {
        resolveStage = "collapse";
        int moveCount = BuildCollapseMoves(moveBuffer);
        if (moveCount <= 0)
        {
            BeginImmediateFillPhase();
            return;
        }

        StartImmediateMoveAnimation(ImmediateResolvePhase.CollapseAnim, fallDurationSeconds);
    }

    private void BeginImmediateFillPhase()
    {
        resolveStage = "fill";
        int moveCount = BuildFillMoves(moveBuffer);
        if (moveCount <= 0)
        {
            EvaluateImmediateResolveStep();
            return;
        }

        StartImmediateMoveAnimation(ImmediateResolvePhase.FillAnim, fallDurationSeconds * 1.15f);
    }

    private void StartImmediateMoveAnimation(ImmediateResolvePhase phase, float duration)
    {
        immediateResolvePhase = phase;
        immediatePhaseTimer = 0f;
        immediateMoveDuration = Mathf.Max(0.01f, duration);
        MarkResolveProgress();
    }

    private void UpdateImmediateMoveAnimation(float dt)
    {
        immediatePhaseTimer += Mathf.Max(0f, dt);
        float t = Mathf.Clamp01(immediatePhaseTimer / immediateMoveDuration);
        float eased = t * t * (3f - 2f * t);

        for (int i = 0; i < moveBuffer.Count; i++)
        {
            OrbMove move = moveBuffer[i];
            if (move.orb == null || move.orb.gameObject == null)
            {
                continue;
            }

            move.orb.transform.position = Vector3.LerpUnclamped(move.from, move.to, eased);
        }

        MarkResolveProgress();
        if (t < 1f)
        {
            return;
        }

        for (int i = 0; i < moveBuffer.Count; i++)
        {
            OrbMove move = moveBuffer[i];
            if (move.orb == null || move.orb.gameObject == null)
            {
                continue;
            }

            move.orb.transform.position = move.to;
        }

        ImmediateResolvePhase completedPhase = immediateResolvePhase;
        immediateResolvePhase = ImmediateResolvePhase.Idle;
        if (completedPhase == ImmediateResolvePhase.CollapseAnim)
        {
            BeginImmediateFillPhase();
            return;
        }

        EvaluateImmediateResolveStep();
    }

    private void FinishImmediateResolve()
    {
        if (HasAnyEmptyCell())
        {
            FillAnyEmptyCellsImmediate();
        }

        lastMoveCombos = immediateTotalMoveCombos;
        isResolving = false;
        resolveStartedAt = -1f;
        resolveStage = "idle";
        resolveRecoveryAttempts = 0;
        ResetImmediateResolveState();
    }

    private void ResetImmediateResolveState()
    {
        immediateResolvePhase = ImmediateResolvePhase.Idle;
        immediatePhaseTimer = 0f;
        immediateMoveDuration = 0f;
        immediateTotalMoveCombos = 0;
        moveBuffer.Clear();
    }

    private void TriggerResolve()
    {
        if (ShouldUseImmediateResolve())
        {
            StartImmediateResolve();
            return;
        }

        StartCoroutine(ResolveBoardRoutine());
    }

    private bool ShouldUseImmediateResolve()
    {
#if UNITY_LUNA
        return true;
#else
        return Application.platform == RuntimePlatform.WebGLPlayer;
#endif
    }

    private int CountEmptyCells()
    {
        if (board == null)
        {
            return 0;
        }

        int count = 0;
        for (int x = 0; x < columns; x++)
        {
            for (int y = 0; y < rows; y++)
            {
                if (board[x, y] == null)
                {
                    count++;
                }
            }
        }

        return count;
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
        ClearAttackEffects();

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

    private void ClearAttackEffects()
    {
        for (int i = 0; i < activeAttackEffects.Count; i++)
        {
            ActiveAttackEffect attack = activeAttackEffects[i];
            if (attack.gameObject != null)
            {
                Destroy(attack.gameObject);
            }
        }
        activeAttackEffects.Clear();

        if (attackEffectsRoot == null)
        {
            return;
        }

        for (int i = attackEffectsRoot.childCount - 1; i >= 0; i--)
        {
            Transform child = attackEffectsRoot.GetChild(i);
            if (child != null)
            {
                Destroy(child.gameObject);
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

        if (attackEffectsRoot == null)
        {
            GameObject attackEffectsObject = new GameObject("AttackEffects");
            attackEffectsObject.transform.SetParent(boardRoot, worldPositionStays: false);
            attackEffectsRoot = attackEffectsObject.transform;
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

        if (enemyTransform == null)
        {
            GameObject enemyObject = new GameObject("EnemyDisplay");
            enemyObject.transform.SetParent(boardRoot, worldPositionStays: false);
            enemyTransform = enemyObject.transform;
        }

        ApplyBackgroundVisuals();
        ApplyBoardFrameVisuals();
        ApplyEnemyVisuals();
    }

    private void ApplyBackgroundVisuals()
    {
        if (backgroundRenderer == null)
        {
            return;
        }

        bool hasConfiguredBackgroundSprite = backgroundSprite != null;
        backgroundRenderer.sprite = GetBackgroundSprite();
        backgroundRenderer.color = hasConfiguredBackgroundSprite ? Color.white : backgroundColor;
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

    private void ApplyEnemyVisuals()
    {
        if (enemyTransform == null)
        {
            return;
        }

        RebuildEnemyVisual();
        ResetEnemyAnimatorToIdle();
        ResetEnemyHitVisuals();
        UpdateEnemyTransform();
    }

    private void RebuildEnemyVisual()
    {
        ClearEnemyVisual();
        enemyTransform.localScale = Vector3.one;
        enemyAnimator = null;
        enemyRenderers = new SpriteRenderer[0];
        enemyBaseRendererColors = new Color[0];
        enemyVisualBaseDiameter = 1f;

        if (enemyPrefab != null)
        {
            GameObject enemyInstance = Instantiate(enemyPrefab);
            enemyInstance.name = enemyPrefab.name;
            enemyInstance.transform.SetParent(enemyTransform, worldPositionStays: false);
            enemyVisualRoot = enemyInstance.transform;
        }
        else
        {
            GameObject fallbackObject = new GameObject("EnemySpriteFallback");
            fallbackObject.transform.SetParent(enemyTransform, worldPositionStays: false);
            SpriteRenderer fallbackRenderer = fallbackObject.AddComponent<SpriteRenderer>();
            Sprite configuredSprite = enemySprite != null ? enemySprite : GetAnyConfiguredOrbSprite();
            fallbackRenderer.sprite = PrepareSpriteForRuntime(configuredSprite != null ? configuredSprite : GetGeneratedFallbackSprite());
            enemyVisualRoot = fallbackObject.transform;
        }

        if (enemyVisualRoot == null)
        {
            return;
        }

        enemyVisualRoot.localPosition = Vector3.zero;
        enemyVisualRoot.localRotation = Quaternion.identity;
        enemyVisualRoot.localScale = Vector3.one;
        enemyAnimator = enemyVisualRoot.GetComponentInChildren<Animator>(includeInactive: true);
        CaptureEnemyRenderers();
        enemyVisualBaseDiameter = Mathf.Max(0.01f, CalculateEnemyVisualBaseDiameter());
    }

    private void ClearEnemyVisual()
    {
        if (enemyTransform == null)
        {
            return;
        }

        for (int i = enemyTransform.childCount - 1; i >= 0; i--)
        {
            Transform child = enemyTransform.GetChild(i);
            if (child != null)
            {
                Destroy(child.gameObject);
            }
        }

        enemyVisualRoot = null;
    }

    private void CaptureEnemyRenderers()
    {
        if (enemyVisualRoot == null)
        {
            enemyRenderers = new SpriteRenderer[0];
            enemyBaseRendererColors = new Color[0];
            return;
        }

        enemyRenderers = enemyVisualRoot.GetComponentsInChildren<SpriteRenderer>(includeInactive: true);
        enemyBaseRendererColors = new Color[enemyRenderers.Length];

        int minSortingOrder = int.MaxValue;
        for (int i = 0; i < enemyRenderers.Length; i++)
        {
            SpriteRenderer renderer = enemyRenderers[i];
            if (renderer == null)
            {
                continue;
            }

            minSortingOrder = Mathf.Min(minSortingOrder, renderer.sortingOrder);
        }

        int sortingOffset = minSortingOrder == int.MaxValue ? 0 : 16 - minSortingOrder;
        for (int i = 0; i < enemyRenderers.Length; i++)
        {
            SpriteRenderer renderer = enemyRenderers[i];
            if (renderer == null)
            {
                continue;
            }

            renderer.sortingOrder += sortingOffset;
            ApplyRendererMaterial(renderer);

            Color baseColor = MultiplyColor(renderer.color, enemyTint);
            enemyBaseRendererColors[i] = baseColor;
            renderer.color = baseColor;
        }
    }

    private float CalculateEnemyVisualBaseDiameter()
    {
        if (enemyRenderers == null || enemyRenderers.Length == 0)
        {
            return 1f;
        }

        Bounds bounds = new Bounds(Vector3.zero, Vector3.zero);
        bool hasBounds = false;
        for (int i = 0; i < enemyRenderers.Length; i++)
        {
            SpriteRenderer renderer = enemyRenderers[i];
            if (renderer == null || renderer.sprite == null)
            {
                continue;
            }

            if (!hasBounds)
            {
                bounds = renderer.bounds;
                hasBounds = true;
            }
            else
            {
                bounds.Encapsulate(renderer.bounds);
            }
        }

        if (!hasBounds)
        {
            return 1f;
        }

        return Mathf.Max(0.01f, Mathf.Max(bounds.size.x, bounds.size.y));
    }

    private static Color MultiplyColor(Color source, Color multiplier)
    {
        return new Color(
            source.r * multiplier.r,
            source.g * multiplier.g,
            source.b * multiplier.b,
            source.a * multiplier.a);
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

    private Sprite GetBackgroundSprite()
    {
        if (backgroundSprite != null)
        {
            return PrepareSpriteForRuntime(backgroundSprite);
        }

        return GetBoardSprite();
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

    private void CreateRuntimeHud()
    {
        if (hudRootTransform != null)
        {
            return;
        }

        EnsureRuntimeEventSystem();

        GameObject canvasObject = new GameObject("RuntimeHud");
        hudRootTransform = canvasObject.transform;

        Canvas canvas = canvasObject.AddComponent<Canvas>();
        canvas.renderMode = RenderMode.ScreenSpaceOverlay;
        canvasObject.AddComponent<CanvasScaler>();
        canvasObject.AddComponent<GraphicRaycaster>();

        Font font = GetHudFont();
        scoreText = CreateHudText(canvasObject.transform, "ScoreText", font, 28, new Vector2(0f, 1f), new Vector2(0f, 1f), new Vector2(0f, 1f), new Vector2(20f, -16f), new Vector2(460f, 42f), TextAnchor.MiddleLeft);
        timeText = CreateHudText(canvasObject.transform, "TimeText", font, 28, new Vector2(0f, 1f), new Vector2(0f, 1f), new Vector2(0f, 1f), new Vector2(20f, -54f), new Vector2(460f, 42f), TextAnchor.MiddleLeft);
        comboText = CreateHudText(canvasObject.transform, "ComboText", font, 28, new Vector2(0f, 1f), new Vector2(0f, 1f), new Vector2(0f, 1f), new Vector2(20f, -92f), new Vector2(560f, 42f), TextAnchor.MiddleLeft);
        resultText = CreateHudText(canvasObject.transform, "ResultText", font, 34, new Vector2(0.5f, 0.5f), new Vector2(0.5f, 0.5f), new Vector2(0.5f, 0.5f), Vector2.zero, new Vector2(700f, 220f), TextAnchor.MiddleCenter);
        CreateAudioSettingsUi(canvasObject.transform, font);
        SetResultVisible(false);
        UpdateAudioSettingsUiState();
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
        if (font != null)
        {
            text.font = font;
        }
        text.fontSize = fontSize;
        text.fontStyle = FontStyle.Bold;
        text.color = Color.white;
#if !UNITY_LUNA
        text.alignment = alignment;
#endif
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

    private static void EnsureRuntimeEventSystem()
    {
        if (EventSystem.current != null)
        {
            return;
        }

        GameObject eventSystemObject = new GameObject("RuntimeEventSystem");
        eventSystemObject.AddComponent<EventSystem>();
        eventSystemObject.AddComponent<StandaloneInputModule>();
    }

    private void CreateAudioSettingsUi(Transform parent, Font font)
    {
        settingsButton = CreateHudButton(
            parent,
            "SettingsButton",
            font,
            24,
            new Vector2(1f, 1f),
            new Vector2(1f, 1f),
            new Vector2(1f, 1f),
            new Vector2(-16f, -18f),
            new Vector2(170f, 42f),
            "Settings");
        if (settingsButton != null)
        {
            settingsButton.onClick.AddListener(ToggleSettingsPanelVisibility);
        }

        GameObject panelObject = new GameObject("SettingsPanel", typeof(RectTransform), typeof(Image), typeof(Outline));
        panelObject.transform.SetParent(parent, false);
        settingsPanelObject = panelObject;

        RectTransform panelRect = panelObject.GetComponent<RectTransform>();
        panelRect.anchorMin = new Vector2(1f, 1f);
        panelRect.anchorMax = new Vector2(1f, 1f);
        panelRect.pivot = new Vector2(1f, 1f);
        panelRect.anchoredPosition = new Vector2(-16f, -64f);
        panelRect.sizeDelta = new Vector2(300f, 184f);

        Image panelImage = panelObject.GetComponent<Image>();
        panelImage.color = new Color(0f, 0f, 0f, 0.72f);
        panelImage.raycastTarget = true;

        Outline panelOutline = panelObject.GetComponent<Outline>();
        panelOutline.effectColor = new Color(1f, 1f, 1f, 0.22f);
        panelOutline.effectDistance = new Vector2(1.5f, -1.5f);

        Text titleText = CreateHudText(
            panelObject.transform,
            "SettingsTitle",
            font,
            23,
            new Vector2(0f, 1f),
            new Vector2(1f, 1f),
            new Vector2(0.5f, 1f),
            new Vector2(0f, -16f),
            new Vector2(-20f, 34f),
            TextAnchor.MiddleCenter);
        if (titleText != null)
        {
            titleText.text = "Audio Settings";
        }

        bgmToggle = CreateAudioToggle(
            panelObject.transform,
            "BgmToggle",
            font,
            "BGM",
            bgmEnabled,
            new Vector2(12f, -56f));
        if (bgmToggle != null)
        {
            bgmToggle.onValueChanged.AddListener(OnBgmToggleChanged);
        }

        attackSfxToggle = CreateAudioToggle(
            panelObject.transform,
            "AttackSfxToggle",
            font,
            "Attack SFX",
            attackSfxEnabled,
            new Vector2(12f, -94f));
        if (attackSfxToggle != null)
        {
            attackSfxToggle.onValueChanged.AddListener(OnAttackSfxToggleChanged);
        }

        match3SfxToggle = CreateAudioToggle(
            panelObject.transform,
            "Match3SfxToggle",
            font,
            "Match-3 SFX",
            match3SfxEnabled,
            new Vector2(12f, -132f));
        if (match3SfxToggle != null)
        {
            match3SfxToggle.onValueChanged.AddListener(OnMatch3SfxToggleChanged);
        }

        SetSettingsPanelVisible(false);
    }

    private static Button CreateHudButton(
        Transform parent,
        string objectName,
        Font font,
        int fontSize,
        Vector2 anchorMin,
        Vector2 anchorMax,
        Vector2 pivot,
        Vector2 anchoredPosition,
        Vector2 sizeDelta,
        string label)
    {
        GameObject buttonObject = new GameObject(objectName, typeof(RectTransform), typeof(Image), typeof(Button));
        buttonObject.transform.SetParent(parent, false);

        RectTransform rectTransform = buttonObject.GetComponent<RectTransform>();
        rectTransform.anchorMin = anchorMin;
        rectTransform.anchorMax = anchorMax;
        rectTransform.pivot = pivot;
        rectTransform.anchoredPosition = anchoredPosition;
        rectTransform.sizeDelta = sizeDelta;

        Image image = buttonObject.GetComponent<Image>();
        image.color = new Color(0f, 0f, 0f, 0.72f);
        image.raycastTarget = true;

        Button button = buttonObject.GetComponent<Button>();
        button.targetGraphic = image;
        ColorBlock colors = button.colors;
        colors.normalColor = Color.white;
        colors.highlightedColor = new Color(1f, 1f, 1f, 0.92f);
        colors.pressedColor = new Color(0.86f, 0.86f, 0.86f, 1f);
        button.colors = colors;

        Text labelText = CreateHudText(
            buttonObject.transform,
            "Label",
            font,
            fontSize,
            new Vector2(0f, 0f),
            new Vector2(1f, 1f),
            new Vector2(0.5f, 0.5f),
            Vector2.zero,
            Vector2.zero,
            TextAnchor.MiddleCenter);
        if (labelText != null)
        {
            labelText.text = label;
            labelText.raycastTarget = false;
        }

        return button;
    }

    private static Toggle CreateAudioToggle(
        Transform parent,
        string objectName,
        Font font,
        string label,
        bool defaultValue,
        Vector2 anchoredPosition)
    {
        GameObject toggleObject = new GameObject(objectName, typeof(RectTransform), typeof(Toggle));
        toggleObject.transform.SetParent(parent, false);

        RectTransform toggleRect = toggleObject.GetComponent<RectTransform>();
        toggleRect.anchorMin = new Vector2(0f, 1f);
        toggleRect.anchorMax = new Vector2(1f, 1f);
        toggleRect.pivot = new Vector2(0f, 1f);
        toggleRect.anchoredPosition = anchoredPosition;
        toggleRect.sizeDelta = new Vector2(-24f, 28f);

        Toggle toggle = toggleObject.GetComponent<Toggle>();

        GameObject backgroundObject = new GameObject("Background", typeof(RectTransform), typeof(Image));
        backgroundObject.transform.SetParent(toggleObject.transform, false);
        RectTransform backgroundRect = backgroundObject.GetComponent<RectTransform>();
        backgroundRect.anchorMin = new Vector2(0f, 0.5f);
        backgroundRect.anchorMax = new Vector2(0f, 0.5f);
        backgroundRect.pivot = new Vector2(0f, 0.5f);
        backgroundRect.anchoredPosition = Vector2.zero;
        backgroundRect.sizeDelta = new Vector2(22f, 22f);

        Image backgroundImage = backgroundObject.GetComponent<Image>();
        backgroundImage.color = new Color(1f, 1f, 1f, 0.9f);
        backgroundImage.raycastTarget = true;

        GameObject checkmarkObject = new GameObject("Checkmark", typeof(RectTransform), typeof(Image));
        checkmarkObject.transform.SetParent(backgroundObject.transform, false);
        RectTransform checkmarkRect = checkmarkObject.GetComponent<RectTransform>();
        checkmarkRect.anchorMin = new Vector2(0.5f, 0.5f);
        checkmarkRect.anchorMax = new Vector2(0.5f, 0.5f);
        checkmarkRect.pivot = new Vector2(0.5f, 0.5f);
        checkmarkRect.anchoredPosition = Vector2.zero;
        checkmarkRect.sizeDelta = new Vector2(14f, 14f);

        Image checkmarkImage = checkmarkObject.GetComponent<Image>();
        checkmarkImage.color = new Color(0.13f, 0.82f, 0.38f, 1f);
        checkmarkImage.raycastTarget = false;

        Text labelText = CreateHudText(
            toggleObject.transform,
            "Label",
            font,
            21,
            new Vector2(0f, 0f),
            new Vector2(1f, 1f),
            new Vector2(0f, 0.5f),
            new Vector2(32f, 0f),
            new Vector2(-32f, 0f),
            TextAnchor.MiddleLeft);
        if (labelText != null)
        {
            labelText.text = label;
            labelText.fontStyle = FontStyle.Normal;
            labelText.raycastTarget = false;
        }

        toggle.targetGraphic = backgroundImage;
        toggle.graphic = checkmarkImage;
        toggle.isOn = defaultValue;
        return toggle;
    }

    private void ToggleSettingsPanelVisibility()
    {
        bool currentlyVisible = settingsPanelObject != null && settingsPanelObject.activeSelf;
        SetSettingsPanelVisible(!currentlyVisible);
    }

    private void SetSettingsPanelVisible(bool visible)
    {
        if (settingsPanelObject != null)
        {
            settingsPanelObject.SetActive(visible);
        }
    }

    private void UpdateAudioSettingsUiState()
    {
        if (bgmToggle != null)
        {
            bgmToggle.SetIsOnWithoutNotify(bgmEnabled);
        }

        if (attackSfxToggle != null)
        {
            attackSfxToggle.SetIsOnWithoutNotify(attackSfxEnabled);
        }

        if (match3SfxToggle != null)
        {
            match3SfxToggle.SetIsOnWithoutNotify(match3SfxEnabled);
        }
    }

    private void OnBgmToggleChanged(bool isOn)
    {
        SetBgmEnabled(isOn, savePreference: true);
    }

    private void OnAttackSfxToggleChanged(bool isOn)
    {
        SetAttackSfxEnabled(isOn, savePreference: true);
    }

    private void OnMatch3SfxToggleChanged(bool isOn)
    {
        SetMatch3SfxEnabled(isOn, savePreference: true);
    }

    private void LoadAudioSettings()
    {
        bgmEnabled = PlayerPrefs.GetInt(PrefKeyBgmEnabled, 1) != 0;
        attackSfxEnabled = PlayerPrefs.GetInt(PrefKeyAttackSfxEnabled, 1) != 0;
        match3SfxEnabled = PlayerPrefs.GetInt(PrefKeyMatch3SfxEnabled, 1) != 0;
    }

    private void CreateAudioSources()
    {
        if (bgmAudioSource == null)
        {
            GameObject bgmObject = new GameObject("BgmAudioSource");
            bgmObject.transform.SetParent(transform, false);
            bgmAudioSource = bgmObject.AddComponent<AudioSource>();
            bgmAudioSource.playOnAwake = false;
            bgmAudioSource.loop = true;
            bgmAudioSource.spatialBlend = 0f;
            TrySetIgnoreListenerPause(bgmAudioSource, true);
        }

        if (sfxAudioSource == null)
        {
            GameObject sfxObject = new GameObject("SfxAudioSource");
            sfxObject.transform.SetParent(transform, false);
            sfxAudioSource = sfxObject.AddComponent<AudioSource>();
            sfxAudioSource.playOnAwake = false;
            sfxAudioSource.loop = false;
            sfxAudioSource.spatialBlend = 0f;
            TrySetIgnoreListenerPause(sfxAudioSource, true);
        }
    }

    private static void TrySetIgnoreListenerPause(AudioSource source, bool ignorePause)
    {
        if (source == null)
        {
            return;
        }

        try
        {
            System.Reflection.PropertyInfo property = source.GetType().GetProperty("ignoreListenerPause");
            if (property == null || !property.CanWrite)
            {
                return;
            }

            property.SetValue(source, ignorePause, null);
        }
        catch
        {
            // Older runtime profile may not expose this property.
        }
    }

    private void ApplyAudioSettingsToRuntime()
    {
        if (bgmAudioSource != null)
        {
            bgmAudioSource.clip = bgmClip;
            bgmAudioSource.volume = Mathf.Clamp01(bgmVolume);
            if (bgmEnabled && bgmClip != null)
            {
                if (!bgmAudioSource.isPlaying)
                {
                    bgmAudioSource.Play();
                }
            }
            else if (bgmAudioSource.isPlaying)
            {
                bgmAudioSource.Stop();
            }
        }

        if (sfxAudioSource != null)
        {
            sfxAudioSource.volume = Mathf.Clamp01(sfxVolume);
        }

        shouldRetryBgmStart = bgmEnabled && bgmClip != null && bgmAudioSource != null && !bgmAudioSource.isPlaying;
    }

    private void SetBgmEnabled(bool enabled, bool savePreference)
    {
        bgmEnabled = enabled;
        if (savePreference)
        {
            PlayerPrefs.SetInt(PrefKeyBgmEnabled, bgmEnabled ? 1 : 0);
        }

        UpdateAudioSettingsUiState();
        ApplyAudioSettingsToRuntime();
    }

    private void SetAttackSfxEnabled(bool enabled, bool savePreference)
    {
        attackSfxEnabled = enabled;
        if (savePreference)
        {
            PlayerPrefs.SetInt(PrefKeyAttackSfxEnabled, attackSfxEnabled ? 1 : 0);
        }

        UpdateAudioSettingsUiState();
    }

    private void SetMatch3SfxEnabled(bool enabled, bool savePreference)
    {
        match3SfxEnabled = enabled;
        if (savePreference)
        {
            PlayerPrefs.SetInt(PrefKeyMatch3SfxEnabled, match3SfxEnabled ? 1 : 0);
        }

        UpdateAudioSettingsUiState();
    }

    private void PlayMatch3Sfx()
    {
        if (!match3SfxEnabled)
        {
            return;
        }

        PlaySfx(match3SfxClip);
    }

    private void TryPlayAttackSfx()
    {
        if (!attackSfxEnabled || Time.unscaledTime < nextAttackSfxAllowedAt)
        {
            return;
        }

        nextAttackSfxAllowedAt = Time.unscaledTime + 0.04f;
        PlaySfx(attackSfxClip);
    }

    private void PlaySfx(AudioClip clip)
    {
        if (clip == null || sfxAudioSource == null)
        {
            return;
        }

        sfxAudioSource.PlayOneShot(clip, Mathf.Clamp01(sfxVolume));
    }

    private void TryStartBgmOnUserGesture()
    {
        if (!shouldRetryBgmStart)
        {
            return;
        }

        if (!PointerPressedThisFrame())
        {
            return;
        }

        ApplyAudioSettingsToRuntime();
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
#if UNITY_LUNA
            resultText.text = "TIME UP\nScore: " + score + "\nTap / Click to install";
#else
            resultText.text = "TIME UP\nScore: " + score + "\nTap / Click to restart";
#endif
        }

    }

    private void SetResultVisible(bool visible)
    {
        if (resultText != null)
        {
            resultText.enabled = visible;
        }
    }

    private Font GetHudFont()
    {
        if (hudFontOverride != null)
        {
            return hudFontOverride;
        }

        Font font = TryLoadResourceFont(HudFontResourceName);
        if (font != null)
        {
            return font;
        }

        Font[] loadedFonts = Resources.FindObjectsOfTypeAll<Font>();
        if (loadedFonts != null)
        {
            for (int i = 0; i < loadedFonts.Length; i++)
            {
                Font candidate = loadedFonts[i];
                if (candidate != null)
                {
                    return candidate;
                }
            }
        }

#if !UNITY_LUNA
        font = TryLoadBuiltinFont("LegacyRuntime.ttf");
        if (font != null)
        {
            return font;
        }

        font = TryLoadBuiltinFont("Arial.ttf");
        if (font != null)
        {
            return font;
        }
#endif

        if (!hasLoggedMissingHudFont)
        {
            hasLoggedMissingHudFont = true;
            Debug.LogWarning("Failed to load HUD font. Assign hudFontOverride or put Font at Assets/Resources/HudFont.ttf.");
        }
        return null;
    }

    private static Font TryLoadResourceFont(string resourceName)
    {
        if (string.IsNullOrEmpty(resourceName))
        {
            return null;
        }

        try
        {
            return Resources.Load<Font>(resourceName);
        }
        catch
        {
            return null;
        }
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
        UpdateEnemyTransform();
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

    private void UpdateEnemyTransform()
    {
        if (enemyTransform == null || gameplayCamera == null || !layoutInitialized)
        {
            return;
        }

        float enemyDiameter = Mathf.Max(0.25f, cellSize * enemySizeInCells * enemyDisplayScale);
        float scale = enemyDiameter / Mathf.Max(0.01f, enemyVisualBaseDiameter);
        enemyTransform.localScale = new Vector3(scale, scale, 1f);

        float boardTopY = boardBottomLeft.y + boardWorldHeight;
        float desiredY = boardTopY + enemyTopMargin + (enemyDiameter * 0.5f);
        float cameraTopY = gameplayCamera.transform.position.y + gameplayCamera.orthographicSize;
        float clampedY = Mathf.Min(desiredY, cameraTopY - (enemyDiameter * 0.5f) - 0.12f);
        float safeY = Mathf.Max(boardTopY + (enemyDiameter * 0.5f), clampedY);
        float centerX = boardBottomLeft.x + (boardWorldWidth * 0.5f);

        enemyAnchorPosition = new Vector3(centerX, safeY, gameplayZ + 0.003f);
        if (!enemyHitFeedbackActive)
        {
            enemyTransform.position = enemyAnchorPosition;
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
        resolveStallTimeoutSeconds = Mathf.Max(1f, resolveStallTimeoutSeconds);
        enemySizeInCells = Mathf.Clamp(enemySizeInCells, 0.8f, 3f);
        enemyDisplayScale = Mathf.Clamp(enemyDisplayScale, 0.25f, 8f);
        enemyTopMargin = Mathf.Max(0f, enemyTopMargin);
        enemyHurtAnimationSeconds = Mathf.Clamp(enemyHurtAnimationSeconds, 0.05f, 2f);
        if (!string.IsNullOrEmpty(enemyIdleAnimationState))
        {
            enemyIdleAnimationState = enemyIdleAnimationState.Trim();
        }

        if (!string.IsNullOrEmpty(enemyHurtAnimationState))
        {
            enemyHurtAnimationState = enemyHurtAnimationState.Trim();
        }

        attackTravelSeconds = Mathf.Max(0.05f, attackTravelSeconds);
        attackArcHeight = Mathf.Max(0f, attackArcHeight);
        attackEffectScale = Mathf.Clamp(attackEffectScale, 0.1f, 1.5f);
        enemyHitShakeInCells = Mathf.Clamp(enemyHitShakeInCells, 0.005f, 0.25f);
        enemyHitShakeSeconds = Mathf.Clamp(enemyHitShakeSeconds, 0.01f, 0.2f);
        bgmVolume = Mathf.Clamp01(bgmVolume);
        sfxVolume = Mathf.Clamp01(sfxVolume);

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

    private IEnumerator WaitForSecondsUnscaled(float seconds)
    {
        float remaining = Mathf.Max(0f, seconds);
        while (remaining > 0f)
        {
            remaining -= GetSafeUnscaledDeltaTime();
            MarkResolveProgress();
            yield return null;
        }
    }

    private void MarkResolveProgress()
    {
        if (!isResolving)
        {
            return;
        }

        resolveStartedAt = Time.unscaledTime;
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
#if UNITY_LUNA
        return false;
#endif

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

    private static float GetSafeUnscaledDeltaTime()
    {
        float delta = Time.unscaledDeltaTime;
        if (delta > 0f && !float.IsNaN(delta) && !float.IsInfinity(delta))
        {
            return delta;
        }

        return 1f / 60f;
    }
}
