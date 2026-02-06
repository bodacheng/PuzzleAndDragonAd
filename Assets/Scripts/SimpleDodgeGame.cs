using System.Collections.Generic;
using UnityEngine;

public sealed class SimpleDodgeGame : MonoBehaviour
{
    [Header("Player")]
    [SerializeField] private float playerRadius = 0.35f;
    [SerializeField] private float playerMoveSpeed = 9f;
    [SerializeField] private float playerBottomOffset = 1.1f;

    [Header("Obstacles")]
    [SerializeField] private float obstacleMinRadius = 0.2f;
    [SerializeField] private float obstacleMaxRadius = 0.5f;
    [SerializeField] private float obstacleMinSpeed = 3f;
    [SerializeField] private float obstacleMaxSpeed = 6f;
    [SerializeField] private float spawnIntervalStart = 0.9f;
    [SerializeField] private float spawnIntervalEnd = 0.25f;
    [SerializeField] private float difficultyRampSeconds = 40f;

    [Header("Visual Theme")]
    [SerializeField] private DodgeVisualTheme visualTheme;
    [SerializeField] private Color defaultPlayerColor = new Color(0.2f, 0.85f, 1f, 1f);
    [SerializeField] private Color defaultObstacleColor = new Color(1f, 0.4f, 0.2f, 1f);
    [SerializeField] private Color defaultBackgroundColor = new Color(0.19215687f, 0.3019608f, 0.4745098f, 1f);

    [Header("Play Area")]
    [SerializeField] private float sidePadding = 0.5f;
    [SerializeField] private float despawnPadding = 1f;

    [Header("Rendering")]
    [SerializeField] private Material spriteMaterial;
    [SerializeField] private bool useCustomMaterialInEditor = true;
    [SerializeField] private bool useCustomMaterialInWebGl = false;
    [SerializeField] private bool fallbackToDefaultIfShaderUnsupported = true;

    private sealed class Obstacle
    {
        public readonly GameObject gameObject;
        public readonly Transform transform;
        public readonly SpriteRenderer renderer;
        public readonly float baseRadius;
        public float radius;
        public readonly float speed;

        public Obstacle(GameObject gameObject, SpriteRenderer renderer, float baseRadius, float radius, float speed)
        {
            this.gameObject = gameObject;
            this.renderer = renderer;
            transform = gameObject.transform;
            this.baseRadius = baseRadius;
            this.radius = radius;
            this.speed = speed;
        }
    }

    private static Sprite gameplaySprite;
    private static Texture2D gameplayTexture;

    private readonly List<Obstacle> obstacles = new List<Obstacle>();

    private Camera gameplayCamera;
    private PlayworksComplianceHooks complianceHooks;
    private Transform playerTransform;
    private SpriteRenderer playerRenderer;
    private Transform backgroundTransform;
    private SpriteRenderer backgroundRenderer;

    private float leftBound;
    private float rightBound;
    private float topBound;
    private float bottomBound;
    private float gameplayZ;
    private float pointerDepth;

    private float survivalTime;
    private float spawnTimer;
    private bool gameOver;
    private int obstacleSpawnCount;


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

        complianceHooks = GetComponent<PlayworksComplianceHooks>();
        gameplayZ = GetGameplayZ();
        pointerDepth = Mathf.Abs(gameplayZ - gameplayCamera.transform.position.z);
        UpdateBounds();
        CreateBackground();
        CreatePlayer();
        ResetRun();
    }

    private void Update()
    {
        UpdateBounds();
        UpdateBackgroundTransform();

        if (!gameOver)
        {
            survivalTime += Time.deltaTime;
            HandlePlayerMovement();
            HandleSpawning();
            UpdateObstaclesAndCollision();
            return;
        }

        if (Input.GetKeyDown(KeyCode.R) || Input.GetMouseButtonDown(0) || HasTouchBegan())
        {
            ResetRun();
        }
    }

    private void OnDestroy()
    {
        ClearObstacles();

        if (playerTransform != null)
        {
            Destroy(playerTransform.gameObject);
        }

        if (backgroundTransform != null)
        {
            Destroy(backgroundTransform.gameObject);
        }
    }

    private void OnValidate()
    {
        if (!Application.isPlaying)
        {
            return;
        }

        RefreshVisualsNow();
    }


    private void HandlePlayerMovement()
    {
        Vector3 position = playerTransform.position;
        float playerCollisionRadius = GetPlayerCollisionRadius();
        float targetX = position.x;

        if (TryGetPointerWorldX(out float pointerX))
        {
            targetX = pointerX;
            position.x = Mathf.Lerp(position.x, targetX, 20f * Time.deltaTime);
        }
        else
        {
            float axis = Input.GetAxisRaw("Horizontal");
            position.x += axis * playerMoveSpeed * Time.deltaTime;
        }

        position.x = Mathf.Clamp(position.x, leftBound + playerCollisionRadius, rightBound - playerCollisionRadius);
        position.y = bottomBound + playerBottomOffset;
        position.z = gameplayZ;
        playerTransform.position = position;
    }

    private void HandleSpawning()
    {
        spawnTimer -= Time.deltaTime;
        if (spawnTimer > 0f)
        {
            return;
        }

        SpawnObstacle();

        float t = Mathf.Clamp01(survivalTime / difficultyRampSeconds);
        spawnTimer = Mathf.Lerp(spawnIntervalStart, spawnIntervalEnd, t);
    }

    private void SpawnObstacle()
    {
        float baseRadius = Random.Range(obstacleMinRadius, obstacleMaxRadius);
        float radius = baseRadius * GetObstacleSizeMultiplier();
        float x = Random.Range(leftBound + radius, rightBound - radius);
        float y = topBound + radius + 0.4f;
        float speed = Random.Range(obstacleMinSpeed, obstacleMaxSpeed) + (survivalTime * 0.03f);

        GameObject obstacleObject = new GameObject("Obstacle");
        obstacleObject.transform.position = new Vector3(x, y, gameplayZ);

        SpriteRenderer renderer = obstacleObject.AddComponent<SpriteRenderer>();
        Obstacle obstacle = new Obstacle(obstacleObject, renderer, baseRadius, radius, speed);
        ApplyObstacleVisuals(obstacle, obstacleSpawnCount);
        obstacles.Add(obstacle);
        obstacleSpawnCount++;
    }

    private void UpdateObstaclesAndCollision()
    {
        Vector3 playerPosition = playerTransform.position;
        float playerCollisionRadius = GetPlayerCollisionRadius();

        for (int i = obstacles.Count - 1; i >= 0; i--)
        {
            Obstacle obstacle = obstacles[i];
            Vector3 position = obstacle.transform.position;
            position.y -= obstacle.speed * Time.deltaTime;
            obstacle.transform.position = position;

            if (position.y < bottomBound - despawnPadding - obstacle.radius)
            {
                Destroy(obstacle.gameObject);
                obstacles.RemoveAt(i);
                continue;
            }

            float totalRadius = playerCollisionRadius + obstacle.radius;
            if ((position - playerPosition).sqrMagnitude <= totalRadius * totalRadius)
            {
                HandleLose();
                return;
            }
        }
    }

    private void HandleLose()
    {
        gameOver = true;
        playerRenderer.color = Color.Lerp(GetPlayerColor(), new Color(1f, 0.3f, 0.3f, 1f), 0.9f);

        if (complianceHooks != null)
        {
            complianceHooks.TriggerGameEnded();
        }
    }

    private void ResetRun()
    {
        ClearObstacles();
        UpdateBounds();

        survivalTime = 0f;
        spawnTimer = 0.25f;
        gameOver = false;
        obstacleSpawnCount = 0;

        float playerCollisionRadius = GetPlayerCollisionRadius();
        float startX = Mathf.Clamp(gameplayCamera.transform.position.x, leftBound + playerCollisionRadius, rightBound - playerCollisionRadius);
        Vector3 start = new Vector3(startX, bottomBound + playerBottomOffset, gameplayZ);
        playerTransform.position = start;
        ApplyPlayerVisuals();
    }

    private void ClearObstacles()
    {
        for (int i = 0; i < obstacles.Count; i++)
        {
            if (obstacles[i].gameObject != null)
            {
                Destroy(obstacles[i].gameObject);
            }
        }

        obstacles.Clear();
    }

    private void UpdateBounds()
    {
        float halfHeight = gameplayCamera.orthographicSize;
        float halfWidth = halfHeight * gameplayCamera.aspect;
        Vector3 cameraPosition = gameplayCamera.transform.position;

        leftBound = cameraPosition.x - halfWidth + sidePadding;
        rightBound = cameraPosition.x + halfWidth - sidePadding;
        topBound = cameraPosition.y + halfHeight;
        bottomBound = cameraPosition.y - halfHeight;
    }

    private void CreatePlayer()
    {
        GameObject playerObject = new GameObject("PlayerBall");
        playerTransform = playerObject.transform;
        playerTransform.position = new Vector3(0f, 0f, gameplayZ);

        playerRenderer = playerObject.AddComponent<SpriteRenderer>();
        playerRenderer.sortingOrder = 10;
        ApplyPlayerVisuals();
    }

    private void CreateBackground()
    {
        GameObject backgroundObject = new GameObject("GameplayBackground");
        backgroundTransform = backgroundObject.transform;
        backgroundRenderer = backgroundObject.AddComponent<SpriteRenderer>();
        backgroundRenderer.sortingOrder = -20;
        ApplyBackgroundVisuals();
    }

    private void ApplyPlayerVisuals()
    {
        if (playerRenderer == null || playerTransform == null)
        {
            return;
        }

        Sprite playerSprite = GetPlayerSprite();
        playerRenderer.sprite = playerSprite;
        playerRenderer.color = GetPlayerColor();
        ApplyRendererMaterial(playerRenderer);
        SetTransformDiameter(playerTransform, playerSprite, GetPlayerCollisionRadius() * 2f);
    }

    private void ApplyObstacleVisuals(Obstacle obstacle, int obstacleIndex)
    {
        if (obstacle == null || obstacle.renderer == null || obstacle.transform == null)
        {
            return;
        }

        Sprite obstacleSprite = GetObstacleSprite(obstacleIndex);
        obstacle.renderer.sprite = obstacleSprite;
        obstacle.renderer.color = GetObstacleColor();
        obstacle.renderer.sortingOrder = 8;
        ApplyRendererMaterial(obstacle.renderer);

        obstacle.radius = obstacle.baseRadius * GetObstacleSizeMultiplier();
        SetTransformDiameter(obstacle.transform, obstacleSprite, obstacle.radius * 2f);
    }

    private void ApplyBackgroundVisuals()
    {
        if (backgroundRenderer == null)
        {
            return;
        }

        Sprite backgroundSprite = GetBackgroundSprite();
        backgroundRenderer.sprite = backgroundSprite;
        backgroundRenderer.color = GetBackgroundColor();
        backgroundRenderer.sortingOrder = GetBackgroundSortingOrder();
        ApplyRendererMaterial(backgroundRenderer);

        if (gameplayCamera != null)
        {
            gameplayCamera.backgroundColor = GetBackgroundColor();
        }

        UpdateBackgroundTransform();
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

        if (ShouldPreserveBackgroundAspect())
        {
            float uniformScale = Mathf.Max(scaleX, scaleY) * GetBackgroundScalePadding();
            backgroundTransform.localScale = new Vector3(uniformScale, uniformScale, 1f);
        }
        else
        {
            float padding = GetBackgroundScalePadding();
            backgroundTransform.localScale = new Vector3(scaleX * padding, scaleY * padding, 1f);
        }

        backgroundTransform.position = new Vector3(gameplayCamera.transform.position.x, gameplayCamera.transform.position.y, gameplayZ);
    }

    public void RefreshVisualsNow()
    {
        ApplyBackgroundVisuals();
        ApplyPlayerVisuals();
        RefreshObstacleVisuals();
    }

    [ContextMenu("Refresh Visual Theme")]
    private void RefreshVisualThemeFromContextMenu()
    {
        RefreshVisualsNow();
    }

    private void RefreshObstacleVisuals()
    {
        for (int i = 0; i < obstacles.Count; i++)
        {
            Obstacle obstacle = obstacles[i];
            if (obstacle == null || obstacle.gameObject == null)
            {
                continue;
            }

            ApplyObstacleVisuals(obstacle, i);
            Vector3 position = obstacle.transform.position;
            position.x = Mathf.Clamp(position.x, leftBound + obstacle.radius, rightBound - obstacle.radius);
            obstacle.transform.position = position;
        }
    }

    private void ApplyRendererMaterial(SpriteRenderer renderer)
    {
        Material selectedMaterial = GetSharedSpriteMaterial();
        if (selectedMaterial != null)
        {
            renderer.material = selectedMaterial;
        }
    }

    private float GetGameplayZ()
    {
        float distanceFromCamera = Mathf.Max(gameplayCamera.nearClipPlane + 1f, 5f);
        return gameplayCamera.transform.position.z + distanceFromCamera;
    }

    private static Sprite GetGameplaySprite()
    {
        if (gameplaySprite != null)
        {
            return gameplaySprite;
        }

        if (gameplayTexture == null)
        {
            gameplayTexture = new Texture2D(2, 2);
            gameplayTexture.SetPixel(0, 0, Color.white);
            gameplayTexture.SetPixel(1, 0, Color.white);
            gameplayTexture.SetPixel(0, 1, Color.white);
            gameplayTexture.SetPixel(1, 1, Color.white);
            gameplayTexture.Apply();
        }

        gameplaySprite = Sprite.Create(
            gameplayTexture,
            new Rect(0f, 0f, gameplayTexture.width, gameplayTexture.height),
            new Vector2(0.5f, 0.5f),
            gameplayTexture.width);
        return gameplaySprite;
    }

    private bool TryGetPointerWorldX(out float worldX)
    {
        Vector3 screen;
        if (Input.touchCount > 0)
        {
            Touch touch = Input.GetTouch(0);
            if (touch.phase == TouchPhase.Canceled || touch.phase == TouchPhase.Ended)
            {
                worldX = 0f;
                return false;
            }

            screen = touch.position;
        }
        else if (Input.GetMouseButton(0))
        {
            screen = Input.mousePosition;
        }
        else
        {
            worldX = 0f;
            return false;
        }

        screen.z = pointerDepth;
        worldX = gameplayCamera.ScreenToWorldPoint(screen).x;
        return true;
    }

    private float GetPlayerCollisionRadius()
    {
        return playerRadius * GetPlayerSizeMultiplier();
    }

    private Sprite GetPlayerSprite()
    {
        if (visualTheme != null && visualTheme.PlayerSprite != null)
        {
            return visualTheme.PlayerSprite;
        }

        return GetGameplaySprite();
    }

    private float GetPlayerSizeMultiplier()
    {
        if (visualTheme != null)
        {
            return Mathf.Max(0.1f, visualTheme.PlayerSizeMultiplier);
        }

        return 1f;
    }

    private Color GetPlayerColor()
    {
        if (visualTheme != null)
        {
            return visualTheme.PlayerColor;
        }

        return defaultPlayerColor;
    }

    private Sprite GetObstacleSprite(int obstacleIndex)
    {
        if (visualTheme != null)
        {
            Sprite sprite = visualTheme.GetObstacleSprite(obstacleIndex);
            if (sprite != null)
            {
                return sprite;
            }
        }

        return GetGameplaySprite();
    }

    private float GetObstacleSizeMultiplier()
    {
        if (visualTheme != null)
        {
            return Mathf.Max(0.1f, visualTheme.ObstacleSizeMultiplier);
        }

        return 1f;
    }

    private Color GetObstacleColor()
    {
        if (visualTheme != null)
        {
            return visualTheme.ObstacleColor;
        }

        return defaultObstacleColor;
    }

    private Sprite GetBackgroundSprite()
    {
        if (visualTheme != null && visualTheme.BackgroundSprite != null)
        {
            return visualTheme.BackgroundSprite;
        }

        return GetGameplaySprite();
    }

    private Color GetBackgroundColor()
    {
        if (visualTheme != null)
        {
            return visualTheme.BackgroundColor;
        }

        return defaultBackgroundColor;
    }

    private int GetBackgroundSortingOrder()
    {
        if (visualTheme != null)
        {
            return visualTheme.BackgroundSortingOrder;
        }

        return -20;
    }

    private float GetBackgroundScalePadding()
    {
        if (visualTheme != null)
        {
            return Mathf.Max(1f, visualTheme.BackgroundScalePadding);
        }

        return 1.02f;
    }

    private bool ShouldPreserveBackgroundAspect()
    {
        if (visualTheme != null)
        {
            return visualTheme.PreserveBackgroundAspect;
        }

        return true;
    }

    private Material GetSharedSpriteMaterial()
    {
        Material selectedMaterial = null;
        if (visualTheme != null && visualTheme.OverrideMaterial != null)
        {
            selectedMaterial = visualTheme.OverrideMaterial;
        }
        else
        {
            selectedMaterial = spriteMaterial;
        }

        if (selectedMaterial == null)
        {
            return null;
        }

        if (!ShouldUseCustomMaterialForCurrentPlatform())
        {
            return null;
        }

        Shader shader = selectedMaterial.shader;
        if (fallbackToDefaultIfShaderUnsupported && (shader == null || !shader.isSupported))
        {
            return null;
        }

        return selectedMaterial;
    }

    private bool ShouldUseCustomMaterialForCurrentPlatform()
    {
        if (Application.platform == RuntimePlatform.WebGLPlayer)
        {
            return useCustomMaterialInWebGl;
        }

        return useCustomMaterialInEditor;
    }

    private static void SetTransformDiameter(Transform targetTransform, Sprite sprite, float diameter)
    {
        Vector2 spriteSize = GetSpriteWorldSize(sprite);
        float safeDiameter = Mathf.Max(0.01f, diameter);
        float scaleX = safeDiameter / spriteSize.x;
        float scaleY = safeDiameter / spriteSize.y;
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

    private static bool HasTouchBegan()
    {
        for (int i = 0; i < Input.touchCount; i++)
        {
            if (Input.GetTouch(i).phase == TouchPhase.Began)
            {
                return true;
            }
        }

        return false;
    }

}
