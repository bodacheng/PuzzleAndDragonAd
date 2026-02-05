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

    [Header("Play Area")]
    [SerializeField] private float sidePadding = 0.5f;
    [SerializeField] private float despawnPadding = 1f;

    private sealed class Obstacle
    {
        public readonly GameObject gameObject;
        public readonly Transform transform;
        public readonly float radius;
        public readonly float speed;

        public Obstacle(GameObject gameObject, float radius, float speed)
        {
            this.gameObject = gameObject;
            this.transform = gameObject.transform;
            this.radius = radius;
            this.speed = speed;
        }
    }

    private static Sprite gameplaySprite;

    private readonly List<Obstacle> obstacles = new List<Obstacle>();

    private Camera gameplayCamera;
    private PlayworksComplianceHooks complianceHooks;
    private Transform playerTransform;
    private SpriteRenderer playerRenderer;

    private float leftBound;
    private float rightBound;
    private float topBound;
    private float bottomBound;
    private float gameplayZ;
    private float pointerDepth;

    private float survivalTime;
    private float spawnTimer;
    private bool gameOver;


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
        CreatePlayer();
        ResetRun();
    }

    private void Update()
    {
        UpdateBounds();

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
    }


    private void HandlePlayerMovement()
    {
        Vector3 position = playerTransform.position;
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

        position.x = Mathf.Clamp(position.x, leftBound + playerRadius, rightBound - playerRadius);
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
        float radius = Random.Range(obstacleMinRadius, obstacleMaxRadius);
        float x = Random.Range(leftBound + radius, rightBound - radius);
        float y = topBound + radius + 0.4f;
        float speed = Random.Range(obstacleMinSpeed, obstacleMaxSpeed) + (survivalTime * 0.03f);

        GameObject obstacleObject = new GameObject("Obstacle");
        obstacleObject.transform.position = new Vector3(x, y, gameplayZ);
        obstacleObject.transform.localScale = new Vector3(radius * 2f, radius * 2f, 1f);

        SpriteRenderer renderer = obstacleObject.AddComponent<SpriteRenderer>();
        renderer.sprite = GetGameplaySprite();
        renderer.color = new Color(1f, 0.4f, 0.2f, 1f);
        renderer.sortingOrder = 8;

        obstacles.Add(new Obstacle(obstacleObject, radius, speed));
    }

    private void UpdateObstaclesAndCollision()
    {
        Vector3 playerPosition = playerTransform.position;

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

            float totalRadius = playerRadius + obstacle.radius;
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
        playerRenderer.color = new Color(1f, 0.3f, 0.3f, 1f);

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

        float startX = Mathf.Clamp(gameplayCamera.transform.position.x, leftBound + playerRadius, rightBound - playerRadius);
        Vector3 start = new Vector3(startX, bottomBound + playerBottomOffset, gameplayZ);
        playerTransform.position = start;
        playerRenderer.color = new Color(0.2f, 0.85f, 1f, 1f);
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
        playerTransform.localScale = new Vector3(playerRadius * 2f, playerRadius * 2f, 1f);

        playerRenderer = playerObject.AddComponent<SpriteRenderer>();
        playerRenderer.sprite = GetGameplaySprite();
        playerRenderer.color = new Color(0.2f, 0.85f, 1f, 1f);
        playerRenderer.sortingOrder = 10;
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

        Texture2D white = Texture2D.whiteTexture;
        gameplaySprite = Sprite.Create(
            white,
            new Rect(0f, 0f, white.width, white.height),
            new Vector2(0.5f, 0.5f),
            white.width);
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
