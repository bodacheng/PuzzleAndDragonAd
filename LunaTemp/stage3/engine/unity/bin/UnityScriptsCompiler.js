if ( TRACE ) { TRACE( JSON.parse( '["DodgeVisualTheme#OverrideMaterial#get","DodgeVisualTheme#PlayerSprite#get","DodgeVisualTheme#PlayerColor#get","DodgeVisualTheme#PlayerSizeMultiplier#get","DodgeVisualTheme#ObstacleColor#get","DodgeVisualTheme#ObstacleSizeMultiplier#get","DodgeVisualTheme#BackgroundSprite#get","DodgeVisualTheme#BackgroundColor#get","DodgeVisualTheme#PreserveBackgroundAspect#get","DodgeVisualTheme#BackgroundScalePadding#get","DodgeVisualTheme#BackgroundSortingOrder#get","DodgeVisualTheme#init","DodgeVisualTheme#GetObstacleSprite","PlayworksComplianceHooks#init","PlayworksComplianceHooks#Start","PlayworksComplianceHooks#TriggerInstall","PlayworksComplianceHooks#TriggerGameEnded","SimpleDodgeGame#GetGameplaySprite","SimpleDodgeGame#SetTransformDiameter","SimpleDodgeGame#GetSpriteWorldSize","SimpleDodgeGame#HasTouchBegan","SimpleDodgeGame#init","SimpleDodgeGame#Awake","SimpleDodgeGame#Update","SimpleDodgeGame#OnDestroy","SimpleDodgeGame#OnValidate","SimpleDodgeGame#HandlePlayerMovement","SimpleDodgeGame#HandleSpawning","SimpleDodgeGame#SpawnObstacle","SimpleDodgeGame#UpdateObstaclesAndCollision","SimpleDodgeGame#HandleLose","SimpleDodgeGame#ResetRun","SimpleDodgeGame#ClearObstacles","SimpleDodgeGame#UpdateBounds","SimpleDodgeGame#CreatePlayer","SimpleDodgeGame#CreateBackground","SimpleDodgeGame#ApplyPlayerVisuals","SimpleDodgeGame#ApplyObstacleVisuals","SimpleDodgeGame#ApplyBackgroundVisuals","SimpleDodgeGame#UpdateBackgroundTransform","SimpleDodgeGame#RefreshVisualsNow","SimpleDodgeGame#RefreshVisualThemeFromContextMenu","SimpleDodgeGame#RefreshObstacleVisuals","SimpleDodgeGame#ApplyRendererMaterial","SimpleDodgeGame#GetGameplayZ","SimpleDodgeGame#TryGetPointerWorldX","SimpleDodgeGame#GetPlayerCollisionRadius","SimpleDodgeGame#GetPlayerSprite","SimpleDodgeGame#GetPlayerSizeMultiplier","SimpleDodgeGame#GetPlayerColor","SimpleDodgeGame#GetObstacleSprite","SimpleDodgeGame#GetObstacleSizeMultiplier","SimpleDodgeGame#GetObstacleColor","SimpleDodgeGame#GetBackgroundSprite","SimpleDodgeGame#GetBackgroundColor","SimpleDodgeGame#GetBackgroundSortingOrder","SimpleDodgeGame#GetBackgroundScalePadding","SimpleDodgeGame#ShouldPreserveBackgroundAspect","SimpleDodgeGame#GetSharedSpriteMaterial","SimpleDodgeGame#ShouldUseCustomMaterialForCurrentPlatform","SimpleDodgeGame.Obstacle#ctor"]' ) ); }
/**
 * @version 1.0.9533.33243
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*DodgeVisualTheme start.*/
    Bridge.define("DodgeVisualTheme", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            overrideMaterial: null,
            playerSprite: null,
            playerColor: null,
            playerSizeMultiplier: 0,
            obstacleSprite: null,
            obstacleVariants: null,
            randomizeObstacleVariant: false,
            obstacleColor: null,
            obstacleSizeMultiplier: 0,
            backgroundSprite: null,
            backgroundColor: null,
            preserveBackgroundAspect: false,
            backgroundScalePadding: 0,
            backgroundSortingOrder: 0
        },
        props: {
            OverrideMaterial: {
                get: function () {
if ( TRACE ) { TRACE( "DodgeVisualTheme#OverrideMaterial#get", this ); }

                    return this.overrideMaterial;
                }
            },
            PlayerSprite: {
                get: function () {
if ( TRACE ) { TRACE( "DodgeVisualTheme#PlayerSprite#get", this ); }

                    return this.playerSprite;
                }
            },
            PlayerColor: {
                get: function () {
if ( TRACE ) { TRACE( "DodgeVisualTheme#PlayerColor#get", this ); }

                    return this.playerColor.$clone();
                }
            },
            PlayerSizeMultiplier: {
                get: function () {
if ( TRACE ) { TRACE( "DodgeVisualTheme#PlayerSizeMultiplier#get", this ); }

                    return this.playerSizeMultiplier;
                }
            },
            ObstacleColor: {
                get: function () {
if ( TRACE ) { TRACE( "DodgeVisualTheme#ObstacleColor#get", this ); }

                    return this.obstacleColor.$clone();
                }
            },
            ObstacleSizeMultiplier: {
                get: function () {
if ( TRACE ) { TRACE( "DodgeVisualTheme#ObstacleSizeMultiplier#get", this ); }

                    return this.obstacleSizeMultiplier;
                }
            },
            BackgroundSprite: {
                get: function () {
if ( TRACE ) { TRACE( "DodgeVisualTheme#BackgroundSprite#get", this ); }

                    return this.backgroundSprite;
                }
            },
            BackgroundColor: {
                get: function () {
if ( TRACE ) { TRACE( "DodgeVisualTheme#BackgroundColor#get", this ); }

                    return this.backgroundColor.$clone();
                }
            },
            PreserveBackgroundAspect: {
                get: function () {
if ( TRACE ) { TRACE( "DodgeVisualTheme#PreserveBackgroundAspect#get", this ); }

                    return this.preserveBackgroundAspect;
                }
            },
            BackgroundScalePadding: {
                get: function () {
if ( TRACE ) { TRACE( "DodgeVisualTheme#BackgroundScalePadding#get", this ); }

                    return this.backgroundScalePadding;
                }
            },
            BackgroundSortingOrder: {
                get: function () {
if ( TRACE ) { TRACE( "DodgeVisualTheme#BackgroundSortingOrder#get", this ); }

                    return this.backgroundSortingOrder;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DodgeVisualTheme#init", this ); }

                this.playerColor = new UnityEngine.Color();
                this.obstacleColor = new UnityEngine.Color();
                this.backgroundColor = new UnityEngine.Color();
                this.playerColor = new pc.Color( 0.2, 0.85, 1.0, 1.0 );
                this.playerSizeMultiplier = 1.0;
                this.obstacleVariants = new (System.Collections.Generic.List$1(UnityEngine.Sprite)).ctor();
                this.randomizeObstacleVariant = true;
                this.obstacleColor = new pc.Color( 1.0, 0.4, 0.2, 1.0 );
                this.obstacleSizeMultiplier = 1.0;
                this.backgroundColor = new pc.Color( 0.192156866, 0.3019608, 0.4745098, 1.0 );
                this.preserveBackgroundAspect = true;
                this.backgroundScalePadding = 1.02;
                this.backgroundSortingOrder = -20;
            }
        },
        methods: {
            /*DodgeVisualTheme.GetObstacleSprite start.*/
            GetObstacleSprite: function (sequenceIndex) {
if ( TRACE ) { TRACE( "DodgeVisualTheme#GetObstacleSprite", this ); }

                if (this.obstacleVariants != null && this.obstacleVariants.Count > 0) {
                    if (this.randomizeObstacleVariant) {
                        return this.obstacleVariants.getItem(UnityEngine.Random.Range(0, this.obstacleVariants.Count));
                    }

                    var clampedIndex = Math.abs(sequenceIndex) % this.obstacleVariants.Count;
                    return this.obstacleVariants.getItem(clampedIndex);
                }

                return this.obstacleSprite;
            },
            /*DodgeVisualTheme.GetObstacleSprite end.*/


        }
    });
    /*DodgeVisualTheme end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*PlayworksComplianceHooks start.*/
    Bridge.define("PlayworksComplianceHooks", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            iosStoreUrl: null,
            androidStoreUrl: null,
            defaultLevel: 0,
            gameEnded: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayworksComplianceHooks#init", this ); }

                this.iosStoreUrl = "";
                this.androidStoreUrl = "";
                this.defaultLevel = 1;
            }
        },
        methods: {
            /*PlayworksComplianceHooks.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayworksComplianceHooks#Start", this ); }

                // Auto-bootstrap fallback if the scene is missing the gameplay component.
                if (UnityEngine.MonoBehaviour.op_Equality(this.GetComponent(SimpleDodgeGame), null)) {
                    try {
                        this.gameObject.AddComponent(SimpleDodgeGame);
                    } catch (exception) {
                        exception = System.Exception.create(exception);
                        UnityEngine.Debug.LogError$2("Failed to add SimpleDodgeGame: " + (exception.Message || ""));
                    }
                }

                // LP3007 custom event
                // Keep gameplay initialization resilient even if analytics is unavailable in preview/runtime.
                try {
                    Luna.Unity.Analytics.LogEvent$1("session_start", 1);
                } catch (exception1) {
                    exception1 = System.Exception.create(exception1);
                    UnityEngine.Debug.LogWarning$1("Analytics.LogEvent(session_start) failed: " + (exception1.Message || ""));
                }
            },
            /*PlayworksComplianceHooks.Start end.*/

            /*PlayworksComplianceHooks.TriggerInstall start.*/
            TriggerInstall: function () {
if ( TRACE ) { TRACE( "PlayworksComplianceHooks#TriggerInstall", this ); }

                // LP3006 required API
                Luna.Unity.Playable.InstallFullGame(this.iosStoreUrl, this.androidStoreUrl);
                Luna.Unity.Analytics.LogEvent$1("cta_click", 1);
            },
            /*PlayworksComplianceHooks.TriggerInstall end.*/

            /*PlayworksComplianceHooks.TriggerGameEnded start.*/
            TriggerGameEnded: function () {
if ( TRACE ) { TRACE( "PlayworksComplianceHooks#TriggerGameEnded", this ); }

                if (this.gameEnded) {
                    return;
                }

                this.gameEnded = true;
                // LP3015 required API
                Luna.Unity.LifeCycle.GameEnded(System.Array.init(["completed"], System.Object));
                Luna.Unity.Analytics.LogEvent$1("game_end", 1);
            },
            /*PlayworksComplianceHooks.TriggerGameEnded end.*/


        }
    });
    /*PlayworksComplianceHooks end.*/

    /*SimpleDodgeGame start.*/
    Bridge.define("SimpleDodgeGame", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                gameplaySprite: null,
                gameplayTexture: null
            },
            methods: {
                /*SimpleDodgeGame.GetGameplaySprite:static start.*/
                GetGameplaySprite: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetGameplaySprite", this ); }

                    if (SimpleDodgeGame.gameplaySprite != null) {
                        return SimpleDodgeGame.gameplaySprite;
                    }

                    if (SimpleDodgeGame.gameplayTexture == null) {
                        SimpleDodgeGame.gameplayTexture = new UnityEngine.Texture2D.$ctor1(2, 2);
                        SimpleDodgeGame.gameplayTexture.SetPixel(0, 0, new pc.Color( 1, 1, 1, 1 ));
                        SimpleDodgeGame.gameplayTexture.SetPixel(1, 0, new pc.Color( 1, 1, 1, 1 ));
                        SimpleDodgeGame.gameplayTexture.SetPixel(0, 1, new pc.Color( 1, 1, 1, 1 ));
                        SimpleDodgeGame.gameplayTexture.SetPixel(1, 1, new pc.Color( 1, 1, 1, 1 ));
                        SimpleDodgeGame.gameplayTexture.Apply();
                    }

                    SimpleDodgeGame.gameplaySprite = UnityEngine.Sprite.Create$1(SimpleDodgeGame.gameplayTexture, new UnityEngine.Rect.$ctor1(0.0, 0.0, SimpleDodgeGame.gameplayTexture.width, SimpleDodgeGame.gameplayTexture.height), new pc.Vec2( 0.5, 0.5 ), SimpleDodgeGame.gameplayTexture.width);
                    return SimpleDodgeGame.gameplaySprite;
                },
                /*SimpleDodgeGame.GetGameplaySprite:static end.*/

                /*SimpleDodgeGame.SetTransformDiameter:static start.*/
                SetTransformDiameter: function (targetTransform, sprite, diameter) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#SetTransformDiameter", this ); }

                    var spriteSize = SimpleDodgeGame.GetSpriteWorldSize(sprite);
                    var safeDiameter = UnityEngine.Mathf.Max(0.01, diameter);
                    var scaleX = safeDiameter / spriteSize.x;
                    var scaleY = safeDiameter / spriteSize.y;
                    targetTransform.localScale = new pc.Vec3( scaleX, scaleY, 1.0 );
                },
                /*SimpleDodgeGame.SetTransformDiameter:static end.*/

                /*SimpleDodgeGame.GetSpriteWorldSize:static start.*/
                GetSpriteWorldSize: function (sprite) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetSpriteWorldSize", this ); }

                    if (sprite == null) {
                        return pc.Vec2.ONE.clone();
                    }

                    var size = UnityEngine.Vector2.FromVector3(sprite.bounds.halfExtents.$clone().scale( 2 ).$clone());
                    if (size.x <= Number.EPSILON || size.y <= Number.EPSILON) {
                        return pc.Vec2.ONE.clone();
                    }

                    return size.$clone();
                },
                /*SimpleDodgeGame.GetSpriteWorldSize:static end.*/

                /*SimpleDodgeGame.HasTouchBegan:static start.*/
                HasTouchBegan: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#HasTouchBegan", this ); }

                    for (var i = 0; i < UnityEngine.Input.touchCount; i = (i + 1) | 0) {
                        if (UnityEngine.Input.GetTouch(i).phase === UnityEngine.TouchPhase.Began) {
                            return true;
                        }
                    }

                    return false;
                },
                /*SimpleDodgeGame.HasTouchBegan:static end.*/


            }
        },
        fields: {
            playerRadius: 0,
            playerMoveSpeed: 0,
            playerBottomOffset: 0,
            obstacleMinRadius: 0,
            obstacleMaxRadius: 0,
            obstacleMinSpeed: 0,
            obstacleMaxSpeed: 0,
            spawnIntervalStart: 0,
            spawnIntervalEnd: 0,
            difficultyRampSeconds: 0,
            visualTheme: null,
            defaultPlayerColor: null,
            defaultObstacleColor: null,
            defaultBackgroundColor: null,
            sidePadding: 0,
            despawnPadding: 0,
            spriteMaterial: null,
            useCustomMaterialInEditor: false,
            useCustomMaterialInWebGl: false,
            fallbackToDefaultIfShaderUnsupported: false,
            obstacles: null,
            gameplayCamera: null,
            complianceHooks: null,
            playerTransform: null,
            playerRenderer: null,
            backgroundTransform: null,
            backgroundRenderer: null,
            leftBound: 0,
            rightBound: 0,
            topBound: 0,
            bottomBound: 0,
            gameplayZ: 0,
            pointerDepth: 0,
            survivalTime: 0,
            spawnTimer: 0,
            gameOver: false,
            obstacleSpawnCount: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#init", this ); }

                this.defaultPlayerColor = new UnityEngine.Color();
                this.defaultObstacleColor = new UnityEngine.Color();
                this.defaultBackgroundColor = new UnityEngine.Color();
                this.playerRadius = 0.35;
                this.playerMoveSpeed = 9.0;
                this.playerBottomOffset = 1.1;
                this.obstacleMinRadius = 0.2;
                this.obstacleMaxRadius = 0.5;
                this.obstacleMinSpeed = 3.0;
                this.obstacleMaxSpeed = 6.0;
                this.spawnIntervalStart = 0.9;
                this.spawnIntervalEnd = 0.25;
                this.difficultyRampSeconds = 40.0;
                this.defaultPlayerColor = new pc.Color( 0.2, 0.85, 1.0, 1.0 );
                this.defaultObstacleColor = new pc.Color( 1.0, 0.4, 0.2, 1.0 );
                this.defaultBackgroundColor = new pc.Color( 0.192156866, 0.3019608, 0.4745098, 1.0 );
                this.sidePadding = 0.5;
                this.despawnPadding = 1.0;
                this.useCustomMaterialInEditor = true;
                this.useCustomMaterialInWebGl = false;
                this.fallbackToDefaultIfShaderUnsupported = true;
                this.obstacles = new (System.Collections.Generic.List$1(SimpleDodgeGame.Obstacle)).ctor();
            }
        },
        methods: {
            /*SimpleDodgeGame.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#Awake", this ); }

                this.gameplayCamera = this.GetComponent(UnityEngine.Camera);
                if (UnityEngine.Component.op_Equality(this.gameplayCamera, null)) {
                    this.gameplayCamera = UnityEngine.Camera.main;
                }

                if (UnityEngine.Component.op_Equality(this.gameplayCamera, null)) {
                    UnityEngine.Debug.LogError$2("SimpleDodgeGame needs a Camera on scene.");
                    this.enabled = false;
                    return;
                }

                this.complianceHooks = this.GetComponent(PlayworksComplianceHooks);
                this.gameplayZ = this.GetGameplayZ();
                this.pointerDepth = Math.abs(this.gameplayZ - this.gameplayCamera.transform.position.z);
                this.UpdateBounds();
                this.CreateBackground();
                this.CreatePlayer();
                this.ResetRun();
            },
            /*SimpleDodgeGame.Awake end.*/

            /*SimpleDodgeGame.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#Update", this ); }

                this.UpdateBounds();
                this.UpdateBackgroundTransform();

                if (!this.gameOver) {
                    this.survivalTime += UnityEngine.Time.deltaTime;
                    this.HandlePlayerMovement();
                    this.HandleSpawning();
                    this.UpdateObstaclesAndCollision();
                    return;
                }

                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.R) || UnityEngine.Input.GetMouseButtonDown(0) || SimpleDodgeGame.HasTouchBegan()) {
                    this.ResetRun();
                }
            },
            /*SimpleDodgeGame.Update end.*/

            /*SimpleDodgeGame.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#OnDestroy", this ); }

                this.ClearObstacles();

                if (UnityEngine.Component.op_Inequality(this.playerTransform, null)) {
                    UnityEngine.MonoBehaviour.Destroy(this.playerTransform.gameObject);
                }

                if (UnityEngine.Component.op_Inequality(this.backgroundTransform, null)) {
                    UnityEngine.MonoBehaviour.Destroy(this.backgroundTransform.gameObject);
                }
            },
            /*SimpleDodgeGame.OnDestroy end.*/

            /*SimpleDodgeGame.OnValidate start.*/
            OnValidate: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#OnValidate", this ); }

                if (!UnityEngine.Application.isPlaying) {
                    return;
                }

                this.RefreshVisualsNow();
            },
            /*SimpleDodgeGame.OnValidate end.*/

            /*SimpleDodgeGame.HandlePlayerMovement start.*/
            HandlePlayerMovement: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#HandlePlayerMovement", this ); }

                var position = this.playerTransform.position.$clone();
                var playerCollisionRadius = this.GetPlayerCollisionRadius();
                var targetX = position.x;
                var pointerX = { };

                if (this.TryGetPointerWorldX(pointerX)) {
                    targetX = pointerX.v;
                    position.x = pc.math.lerp(position.x, targetX, 20.0 * UnityEngine.Time.deltaTime);
                } else {
                    var axis = UnityEngine.Input.GetAxisRaw("Horizontal");
                    position.x += axis * this.playerMoveSpeed * UnityEngine.Time.deltaTime;
                }

                position.x = Math.max(this.leftBound + playerCollisionRadius, Math.min(position.x, this.rightBound - playerCollisionRadius));
                position.y = this.bottomBound + this.playerBottomOffset;
                position.z = this.gameplayZ;
                this.playerTransform.position = position.$clone();
            },
            /*SimpleDodgeGame.HandlePlayerMovement end.*/

            /*SimpleDodgeGame.HandleSpawning start.*/
            HandleSpawning: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#HandleSpawning", this ); }

                this.spawnTimer -= UnityEngine.Time.deltaTime;
                if (this.spawnTimer > 0.0) {
                    return;
                }

                this.SpawnObstacle();

                var t = Math.max(0, Math.min(1, this.survivalTime / this.difficultyRampSeconds));
                this.spawnTimer = pc.math.lerp(this.spawnIntervalStart, this.spawnIntervalEnd, t);
            },
            /*SimpleDodgeGame.HandleSpawning end.*/

            /*SimpleDodgeGame.SpawnObstacle start.*/
            SpawnObstacle: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#SpawnObstacle", this ); }

                var baseRadius = UnityEngine.Random.Range$1(this.obstacleMinRadius, this.obstacleMaxRadius);
                var radius = baseRadius * this.GetObstacleSizeMultiplier();
                var x = UnityEngine.Random.Range$1(this.leftBound + radius, this.rightBound - radius);
                var y = this.topBound + radius + 0.4;
                var speed = UnityEngine.Random.Range$1(this.obstacleMinSpeed, this.obstacleMaxSpeed) + (this.survivalTime * 0.03);

                var obstacleObject = new UnityEngine.GameObject.$ctor2("Obstacle");
                obstacleObject.transform.position = new pc.Vec3( x, y, this.gameplayZ );

                var renderer = obstacleObject.AddComponent(UnityEngine.SpriteRenderer);
                var obstacle = new SimpleDodgeGame.Obstacle(obstacleObject, renderer, baseRadius, radius, speed);
                this.ApplyObstacleVisuals(obstacle, this.obstacleSpawnCount);
                this.obstacles.add(obstacle);
                this.obstacleSpawnCount = (this.obstacleSpawnCount + 1) | 0;
            },
            /*SimpleDodgeGame.SpawnObstacle end.*/

            /*SimpleDodgeGame.UpdateObstaclesAndCollision start.*/
            UpdateObstaclesAndCollision: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#UpdateObstaclesAndCollision", this ); }

                var playerPosition = this.playerTransform.position.$clone();
                var playerCollisionRadius = this.GetPlayerCollisionRadius();

                for (var i = (this.obstacles.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    var obstacle = this.obstacles.getItem(i);
                    var position = obstacle.transform.position.$clone();
                    position.y -= obstacle.speed * UnityEngine.Time.deltaTime;
                    obstacle.transform.position = position.$clone();

                    if (position.y < this.bottomBound - this.despawnPadding - obstacle.radius) {
                        UnityEngine.MonoBehaviour.Destroy(obstacle.gameObject);
                        this.obstacles.removeAt(i);
                        continue;
                    }

                    var totalRadius = playerCollisionRadius + obstacle.radius;
                    if ((position.$clone().sub( playerPosition )).lengthSq() <= totalRadius * totalRadius) {
                        this.HandleLose();
                        return;
                    }
                }
            },
            /*SimpleDodgeGame.UpdateObstaclesAndCollision end.*/

            /*SimpleDodgeGame.HandleLose start.*/
            HandleLose: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#HandleLose", this ); }

                this.gameOver = true;
                this.playerRenderer.color = pc.Color.lerp( this.GetPlayerColor(), new pc.Color( 1.0, 0.3, 0.3, 1.0 ), 0.9 );

                if (UnityEngine.MonoBehaviour.op_Inequality(this.complianceHooks, null)) {
                    this.complianceHooks.TriggerGameEnded();
                }
            },
            /*SimpleDodgeGame.HandleLose end.*/

            /*SimpleDodgeGame.ResetRun start.*/
            ResetRun: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ResetRun", this ); }

                this.ClearObstacles();
                this.UpdateBounds();

                this.survivalTime = 0.0;
                this.spawnTimer = 0.25;
                this.gameOver = false;
                this.obstacleSpawnCount = 0;

                var playerCollisionRadius = this.GetPlayerCollisionRadius();
                var startX = Math.max(this.leftBound + playerCollisionRadius, Math.min(this.gameplayCamera.transform.position.x, this.rightBound - playerCollisionRadius));
                var start = new pc.Vec3( startX, this.bottomBound + this.playerBottomOffset, this.gameplayZ );
                this.playerTransform.position = start.$clone();
                this.ApplyPlayerVisuals();
            },
            /*SimpleDodgeGame.ResetRun end.*/

            /*SimpleDodgeGame.ClearObstacles start.*/
            ClearObstacles: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ClearObstacles", this ); }

                for (var i = 0; i < this.obstacles.Count; i = (i + 1) | 0) {
                    if (UnityEngine.GameObject.op_Inequality(this.obstacles.getItem(i).gameObject, null)) {
                        UnityEngine.MonoBehaviour.Destroy(this.obstacles.getItem(i).gameObject);
                    }
                }

                this.obstacles.clear();
            },
            /*SimpleDodgeGame.ClearObstacles end.*/

            /*SimpleDodgeGame.UpdateBounds start.*/
            UpdateBounds: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#UpdateBounds", this ); }

                var halfHeight = this.gameplayCamera.orthographicSize;
                var halfWidth = halfHeight * this.gameplayCamera.aspect;
                var cameraPosition = this.gameplayCamera.transform.position.$clone();

                this.leftBound = cameraPosition.x - halfWidth + this.sidePadding;
                this.rightBound = cameraPosition.x + halfWidth - this.sidePadding;
                this.topBound = cameraPosition.y + halfHeight;
                this.bottomBound = cameraPosition.y - halfHeight;
            },
            /*SimpleDodgeGame.UpdateBounds end.*/

            /*SimpleDodgeGame.CreatePlayer start.*/
            CreatePlayer: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#CreatePlayer", this ); }

                var playerObject = new UnityEngine.GameObject.$ctor2("PlayerBall");
                this.playerTransform = playerObject.transform;
                this.playerTransform.position = new pc.Vec3( 0.0, 0.0, this.gameplayZ );

                this.playerRenderer = playerObject.AddComponent(UnityEngine.SpriteRenderer);
                this.playerRenderer.sortingOrder = 10;
                this.ApplyPlayerVisuals();
            },
            /*SimpleDodgeGame.CreatePlayer end.*/

            /*SimpleDodgeGame.CreateBackground start.*/
            CreateBackground: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#CreateBackground", this ); }

                var backgroundObject = new UnityEngine.GameObject.$ctor2("GameplayBackground");
                this.backgroundTransform = backgroundObject.transform;
                this.backgroundRenderer = backgroundObject.AddComponent(UnityEngine.SpriteRenderer);
                this.backgroundRenderer.sortingOrder = -20;
                this.ApplyBackgroundVisuals();
            },
            /*SimpleDodgeGame.CreateBackground end.*/

            /*SimpleDodgeGame.ApplyPlayerVisuals start.*/
            ApplyPlayerVisuals: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ApplyPlayerVisuals", this ); }

                if (UnityEngine.Component.op_Equality(this.playerRenderer, null) || UnityEngine.Component.op_Equality(this.playerTransform, null)) {
                    return;
                }

                var playerSprite = this.GetPlayerSprite();
                this.playerRenderer.sprite = playerSprite;
                this.playerRenderer.color = this.GetPlayerColor();
                this.ApplyRendererMaterial(this.playerRenderer);
                SimpleDodgeGame.SetTransformDiameter(this.playerTransform, playerSprite, this.GetPlayerCollisionRadius() * 2.0);
            },
            /*SimpleDodgeGame.ApplyPlayerVisuals end.*/

            /*SimpleDodgeGame.ApplyObstacleVisuals start.*/
            ApplyObstacleVisuals: function (obstacle, obstacleIndex) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ApplyObstacleVisuals", this ); }

                if (obstacle == null || UnityEngine.Component.op_Equality(obstacle.renderer, null) || UnityEngine.Component.op_Equality(obstacle.transform, null)) {
                    return;
                }

                var obstacleSprite = this.GetObstacleSprite(obstacleIndex);
                obstacle.renderer.sprite = obstacleSprite;
                obstacle.renderer.color = this.GetObstacleColor();
                obstacle.renderer.sortingOrder = 8;
                this.ApplyRendererMaterial(obstacle.renderer);

                obstacle.radius = obstacle.baseRadius * this.GetObstacleSizeMultiplier();
                SimpleDodgeGame.SetTransformDiameter(obstacle.transform, obstacleSprite, obstacle.radius * 2.0);
            },
            /*SimpleDodgeGame.ApplyObstacleVisuals end.*/

            /*SimpleDodgeGame.ApplyBackgroundVisuals start.*/
            ApplyBackgroundVisuals: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ApplyBackgroundVisuals", this ); }

                if (UnityEngine.Component.op_Equality(this.backgroundRenderer, null)) {
                    return;
                }

                var backgroundSprite = this.GetBackgroundSprite();
                this.backgroundRenderer.sprite = backgroundSprite;
                this.backgroundRenderer.color = this.GetBackgroundColor();
                this.backgroundRenderer.sortingOrder = this.GetBackgroundSortingOrder();
                this.ApplyRendererMaterial(this.backgroundRenderer);

                if (UnityEngine.Component.op_Inequality(this.gameplayCamera, null)) {
                    this.gameplayCamera.backgroundColor = this.GetBackgroundColor();
                }

                this.UpdateBackgroundTransform();
            },
            /*SimpleDodgeGame.ApplyBackgroundVisuals end.*/

            /*SimpleDodgeGame.UpdateBackgroundTransform start.*/
            UpdateBackgroundTransform: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#UpdateBackgroundTransform", this ); }

                if (UnityEngine.Component.op_Equality(this.backgroundTransform, null) || UnityEngine.Component.op_Equality(this.backgroundRenderer, null) || UnityEngine.Component.op_Equality(this.gameplayCamera, null)) {
                    return;
                }

                var worldHeight = this.gameplayCamera.orthographicSize * 2.0;
                var worldWidth = worldHeight * this.gameplayCamera.aspect;
                var spriteSize = SimpleDodgeGame.GetSpriteWorldSize(this.backgroundRenderer.sprite);
                var scaleX = worldWidth / spriteSize.x;
                var scaleY = worldHeight / spriteSize.y;

                if (this.ShouldPreserveBackgroundAspect()) {
                    var uniformScale = UnityEngine.Mathf.Max(scaleX, scaleY) * this.GetBackgroundScalePadding();
                    this.backgroundTransform.localScale = new pc.Vec3( uniformScale, uniformScale, 1.0 );
                } else {
                    var padding = this.GetBackgroundScalePadding();
                    this.backgroundTransform.localScale = new pc.Vec3( scaleX * padding, scaleY * padding, 1.0 );
                }

                this.backgroundTransform.position = new pc.Vec3( this.gameplayCamera.transform.position.x, this.gameplayCamera.transform.position.y, this.gameplayZ );
            },
            /*SimpleDodgeGame.UpdateBackgroundTransform end.*/

            /*SimpleDodgeGame.RefreshVisualsNow start.*/
            RefreshVisualsNow: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#RefreshVisualsNow", this ); }

                this.ApplyBackgroundVisuals();
                this.ApplyPlayerVisuals();
                this.RefreshObstacleVisuals();
            },
            /*SimpleDodgeGame.RefreshVisualsNow end.*/

            /*SimpleDodgeGame.RefreshVisualThemeFromContextMenu start.*/
            RefreshVisualThemeFromContextMenu: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#RefreshVisualThemeFromContextMenu", this ); }

                this.RefreshVisualsNow();
            },
            /*SimpleDodgeGame.RefreshVisualThemeFromContextMenu end.*/

            /*SimpleDodgeGame.RefreshObstacleVisuals start.*/
            RefreshObstacleVisuals: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#RefreshObstacleVisuals", this ); }

                for (var i = 0; i < this.obstacles.Count; i = (i + 1) | 0) {
                    var obstacle = this.obstacles.getItem(i);
                    if (obstacle == null || UnityEngine.GameObject.op_Equality(obstacle.gameObject, null)) {
                        continue;
                    }

                    this.ApplyObstacleVisuals(obstacle, i);
                    var position = obstacle.transform.position.$clone();
                    position.x = Math.max(this.leftBound + obstacle.radius, Math.min(position.x, this.rightBound - obstacle.radius));
                    obstacle.transform.position = position.$clone();
                }
            },
            /*SimpleDodgeGame.RefreshObstacleVisuals end.*/

            /*SimpleDodgeGame.ApplyRendererMaterial start.*/
            ApplyRendererMaterial: function (renderer) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ApplyRendererMaterial", this ); }

                var selectedMaterial = this.GetSharedSpriteMaterial();
                if (selectedMaterial != null) {
                    renderer.material = selectedMaterial;
                }
            },
            /*SimpleDodgeGame.ApplyRendererMaterial end.*/

            /*SimpleDodgeGame.GetGameplayZ start.*/
            GetGameplayZ: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetGameplayZ", this ); }

                var distanceFromCamera = UnityEngine.Mathf.Max(this.gameplayCamera.nearClipPlane + 1.0, 5.0);
                return this.gameplayCamera.transform.position.z + distanceFromCamera;
            },
            /*SimpleDodgeGame.GetGameplayZ end.*/

            /*SimpleDodgeGame.TryGetPointerWorldX start.*/
            TryGetPointerWorldX: function (worldX) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#TryGetPointerWorldX", this ); }

                var screen = new UnityEngine.Vector3();
                if (UnityEngine.Input.touchCount > 0) {
                    var touch = UnityEngine.Input.GetTouch(0);
                    if (touch.phase === UnityEngine.TouchPhase.Canceled || touch.phase === UnityEngine.TouchPhase.Ended) {
                        worldX.v = 0.0;
                        return false;
                    }

                    screen = UnityEngine.Vector3.FromVector2(touch.position.$clone());
                } else if (UnityEngine.Input.GetMouseButton(0)) {
                    screen = UnityEngine.Input.mousePosition.$clone();
                } else {
                    worldX.v = 0.0;
                    return false;
                }

                screen.z = this.pointerDepth;
                worldX.v = this.gameplayCamera.ScreenToWorldPoint(screen).x;
                return true;
            },
            /*SimpleDodgeGame.TryGetPointerWorldX end.*/

            /*SimpleDodgeGame.GetPlayerCollisionRadius start.*/
            GetPlayerCollisionRadius: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetPlayerCollisionRadius", this ); }

                return this.playerRadius * this.GetPlayerSizeMultiplier();
            },
            /*SimpleDodgeGame.GetPlayerCollisionRadius end.*/

            /*SimpleDodgeGame.GetPlayerSprite start.*/
            GetPlayerSprite: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetPlayerSprite", this ); }

                if (this.visualTheme != null && this.visualTheme.PlayerSprite != null) {
                    return this.visualTheme.PlayerSprite;
                }

                return SimpleDodgeGame.GetGameplaySprite();
            },
            /*SimpleDodgeGame.GetPlayerSprite end.*/

            /*SimpleDodgeGame.GetPlayerSizeMultiplier start.*/
            GetPlayerSizeMultiplier: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetPlayerSizeMultiplier", this ); }

                if (this.visualTheme != null) {
                    return UnityEngine.Mathf.Max(0.1, this.visualTheme.PlayerSizeMultiplier);
                }

                return 1.0;
            },
            /*SimpleDodgeGame.GetPlayerSizeMultiplier end.*/

            /*SimpleDodgeGame.GetPlayerColor start.*/
            GetPlayerColor: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetPlayerColor", this ); }

                if (this.visualTheme != null) {
                    return this.visualTheme.PlayerColor.$clone();
                }

                return this.defaultPlayerColor.$clone();
            },
            /*SimpleDodgeGame.GetPlayerColor end.*/

            /*SimpleDodgeGame.GetObstacleSprite start.*/
            GetObstacleSprite: function (obstacleIndex) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetObstacleSprite", this ); }

                if (this.visualTheme != null) {
                    var sprite = this.visualTheme.GetObstacleSprite(obstacleIndex);
                    if (sprite != null) {
                        return sprite;
                    }
                }

                return SimpleDodgeGame.GetGameplaySprite();
            },
            /*SimpleDodgeGame.GetObstacleSprite end.*/

            /*SimpleDodgeGame.GetObstacleSizeMultiplier start.*/
            GetObstacleSizeMultiplier: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetObstacleSizeMultiplier", this ); }

                if (this.visualTheme != null) {
                    return UnityEngine.Mathf.Max(0.1, this.visualTheme.ObstacleSizeMultiplier);
                }

                return 1.0;
            },
            /*SimpleDodgeGame.GetObstacleSizeMultiplier end.*/

            /*SimpleDodgeGame.GetObstacleColor start.*/
            GetObstacleColor: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetObstacleColor", this ); }

                if (this.visualTheme != null) {
                    return this.visualTheme.ObstacleColor.$clone();
                }

                return this.defaultObstacleColor.$clone();
            },
            /*SimpleDodgeGame.GetObstacleColor end.*/

            /*SimpleDodgeGame.GetBackgroundSprite start.*/
            GetBackgroundSprite: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetBackgroundSprite", this ); }

                if (this.visualTheme != null && this.visualTheme.BackgroundSprite != null) {
                    return this.visualTheme.BackgroundSprite;
                }

                return SimpleDodgeGame.GetGameplaySprite();
            },
            /*SimpleDodgeGame.GetBackgroundSprite end.*/

            /*SimpleDodgeGame.GetBackgroundColor start.*/
            GetBackgroundColor: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetBackgroundColor", this ); }

                if (this.visualTheme != null) {
                    return this.visualTheme.BackgroundColor.$clone();
                }

                return this.defaultBackgroundColor.$clone();
            },
            /*SimpleDodgeGame.GetBackgroundColor end.*/

            /*SimpleDodgeGame.GetBackgroundSortingOrder start.*/
            GetBackgroundSortingOrder: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetBackgroundSortingOrder", this ); }

                if (this.visualTheme != null) {
                    return this.visualTheme.BackgroundSortingOrder;
                }

                return -20;
            },
            /*SimpleDodgeGame.GetBackgroundSortingOrder end.*/

            /*SimpleDodgeGame.GetBackgroundScalePadding start.*/
            GetBackgroundScalePadding: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetBackgroundScalePadding", this ); }

                if (this.visualTheme != null) {
                    return UnityEngine.Mathf.Max(1.0, this.visualTheme.BackgroundScalePadding);
                }

                return 1.02;
            },
            /*SimpleDodgeGame.GetBackgroundScalePadding end.*/

            /*SimpleDodgeGame.ShouldPreserveBackgroundAspect start.*/
            ShouldPreserveBackgroundAspect: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ShouldPreserveBackgroundAspect", this ); }

                if (this.visualTheme != null) {
                    return this.visualTheme.PreserveBackgroundAspect;
                }

                return true;
            },
            /*SimpleDodgeGame.ShouldPreserveBackgroundAspect end.*/

            /*SimpleDodgeGame.GetSharedSpriteMaterial start.*/
            GetSharedSpriteMaterial: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetSharedSpriteMaterial", this ); }

                var selectedMaterial = null;
                if (this.visualTheme != null && this.visualTheme.OverrideMaterial != null) {
                    selectedMaterial = this.visualTheme.OverrideMaterial;
                } else {
                    selectedMaterial = this.spriteMaterial;
                }

                if (selectedMaterial == null) {
                    return null;
                }

                if (!this.ShouldUseCustomMaterialForCurrentPlatform()) {
                    return null;
                }

                var shader = selectedMaterial.shader;
                if (this.fallbackToDefaultIfShaderUnsupported && (shader == null || !shader.isSupported)) {
                    return null;
                }

                return selectedMaterial;
            },
            /*SimpleDodgeGame.GetSharedSpriteMaterial end.*/

            /*SimpleDodgeGame.ShouldUseCustomMaterialForCurrentPlatform start.*/
            ShouldUseCustomMaterialForCurrentPlatform: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ShouldUseCustomMaterialForCurrentPlatform", this ); }

                if (UnityEngine.Application.platform === UnityEngine.RuntimePlatform.WebGLPlayer) {
                    return this.useCustomMaterialInWebGl;
                }

                return this.useCustomMaterialInEditor;
            },
            /*SimpleDodgeGame.ShouldUseCustomMaterialForCurrentPlatform end.*/


        }
    });
    /*SimpleDodgeGame end.*/

    /*SimpleDodgeGame+Obstacle start.*/
    Bridge.define("SimpleDodgeGame.Obstacle", {
        $kind: 1002,
        fields: {
            gameObject: null,
            transform: null,
            renderer: null,
            baseRadius: 0,
            radius: 0,
            speed: 0
        },
        ctors: {
            ctor: function (gameObject, renderer, baseRadius, radius, speed) {
if ( TRACE ) { TRACE( "SimpleDodgeGame.Obstacle#ctor", this ); }

                this.$initialize();
                this.gameObject = gameObject;
                this.renderer = renderer;
                this.transform = gameObject.transform;
                this.baseRadius = baseRadius;
                this.radius = radius;
                this.speed = speed;
            }
        }
    });
    /*SimpleDodgeGame+Obstacle end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections.Generic"];

    /*DodgeVisualTheme start.*/
    $m("DodgeVisualTheme", function () { return {"att":1048833,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "DodgeVisualTheme", menuName: "AdGame2/Dodge Visual Theme"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetObstacleSprite","t":8,"pi":[{"n":"sequenceIndex","pt":$n[0].Int32,"ps":0}],"sn":"GetObstacleSprite","rt":$n[1].Sprite,"p":[$n[0].Int32]},{"a":2,"n":"BackgroundColor","t":16,"rt":$n[1].Color,"g":{"a":2,"n":"get_BackgroundColor","t":8,"rt":$n[1].Color,"fg":"BackgroundColor"},"fn":"BackgroundColor"},{"a":2,"n":"BackgroundScalePadding","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_BackgroundScalePadding","t":8,"rt":$n[0].Single,"fg":"BackgroundScalePadding","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"BackgroundScalePadding"},{"a":2,"n":"BackgroundSortingOrder","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_BackgroundSortingOrder","t":8,"rt":$n[0].Int32,"fg":"BackgroundSortingOrder","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"BackgroundSortingOrder"},{"a":2,"n":"BackgroundSprite","t":16,"rt":$n[1].Sprite,"g":{"a":2,"n":"get_BackgroundSprite","t":8,"rt":$n[1].Sprite,"fg":"BackgroundSprite"},"fn":"BackgroundSprite"},{"a":2,"n":"ObstacleColor","t":16,"rt":$n[1].Color,"g":{"a":2,"n":"get_ObstacleColor","t":8,"rt":$n[1].Color,"fg":"ObstacleColor"},"fn":"ObstacleColor"},{"a":2,"n":"ObstacleSizeMultiplier","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_ObstacleSizeMultiplier","t":8,"rt":$n[0].Single,"fg":"ObstacleSizeMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"ObstacleSizeMultiplier"},{"a":2,"n":"OverrideMaterial","t":16,"rt":$n[1].Material,"g":{"a":2,"n":"get_OverrideMaterial","t":8,"rt":$n[1].Material,"fg":"OverrideMaterial"},"fn":"OverrideMaterial"},{"a":2,"n":"PlayerColor","t":16,"rt":$n[1].Color,"g":{"a":2,"n":"get_PlayerColor","t":8,"rt":$n[1].Color,"fg":"PlayerColor"},"fn":"PlayerColor"},{"a":2,"n":"PlayerSizeMultiplier","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_PlayerSizeMultiplier","t":8,"rt":$n[0].Single,"fg":"PlayerSizeMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"PlayerSizeMultiplier"},{"a":2,"n":"PlayerSprite","t":16,"rt":$n[1].Sprite,"g":{"a":2,"n":"get_PlayerSprite","t":8,"rt":$n[1].Sprite,"fg":"PlayerSprite"},"fn":"PlayerSprite"},{"a":2,"n":"PreserveBackgroundAspect","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_PreserveBackgroundAspect","t":8,"rt":$n[0].Boolean,"fg":"PreserveBackgroundAspect","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"PreserveBackgroundAspect"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"backgroundColor","t":4,"rt":$n[1].Color,"sn":"backgroundColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"backgroundScalePadding","t":4,"rt":$n[0].Single,"sn":"backgroundScalePadding","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"backgroundSortingOrder","t":4,"rt":$n[0].Int32,"sn":"backgroundSortingOrder","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Background"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"backgroundSprite","t":4,"rt":$n[1].Sprite,"sn":"backgroundSprite"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"obstacleColor","t":4,"rt":$n[1].Color,"sn":"obstacleColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"obstacleSizeMultiplier","t":4,"rt":$n[0].Single,"sn":"obstacleSizeMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Obstacle"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"obstacleSprite","t":4,"rt":$n[1].Sprite,"sn":"obstacleSprite"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"obstacleVariants","t":4,"rt":$n[2].List$1(UnityEngine.Sprite),"sn":"obstacleVariants"},{"at":[new UnityEngine.HeaderAttribute("Shared Material"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"overrideMaterial","t":4,"rt":$n[1].Material,"sn":"overrideMaterial"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerColor","t":4,"rt":$n[1].Color,"sn":"playerColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerSizeMultiplier","t":4,"rt":$n[0].Single,"sn":"playerSizeMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Player"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerSprite","t":4,"rt":$n[1].Sprite,"sn":"playerSprite"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"preserveBackgroundAspect","t":4,"rt":$n[0].Boolean,"sn":"preserveBackgroundAspect","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"randomizeObstacleVariant","t":4,"rt":$n[0].Boolean,"sn":"randomizeObstacleVariant","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DodgeVisualTheme end.*/

    /*PlayworksComplianceHooks start.*/
    $m("PlayworksComplianceHooks", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"TriggerGameEnded","t":8,"sn":"TriggerGameEnded","rt":$n[0].Void},{"a":2,"n":"TriggerInstall","t":8,"sn":"TriggerInstall","rt":$n[0].Void},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Android Store URL", 1, "CTA", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"androidStoreUrl","t":4,"rt":$n[0].String,"sn":"androidStoreUrl"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Default Level", 2, "Gameplay", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"defaultLevel","t":4,"rt":$n[0].Int32,"sn":"defaultLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"gameEnded","t":4,"rt":$n[0].Boolean,"sn":"gameEnded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("iOS Store URL", 0, "CTA", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"iosStoreUrl","t":4,"rt":$n[0].String,"sn":"iosStoreUrl"}]}; }, $n);
    /*PlayworksComplianceHooks end.*/

    /*SimpleDodgeGame start.*/
    $m("SimpleDodgeGame", function () { return {"nested":[SimpleDodgeGame.Obstacle],"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyBackgroundVisuals","t":8,"sn":"ApplyBackgroundVisuals","rt":$n[0].Void},{"a":1,"n":"ApplyObstacleVisuals","t":8,"pi":[{"n":"obstacle","pt":SimpleDodgeGame.Obstacle,"ps":0},{"n":"obstacleIndex","pt":$n[0].Int32,"ps":1}],"sn":"ApplyObstacleVisuals","rt":$n[0].Void,"p":[SimpleDodgeGame.Obstacle,$n[0].Int32]},{"a":1,"n":"ApplyPlayerVisuals","t":8,"sn":"ApplyPlayerVisuals","rt":$n[0].Void},{"a":1,"n":"ApplyRendererMaterial","t":8,"pi":[{"n":"renderer","pt":$n[1].SpriteRenderer,"ps":0}],"sn":"ApplyRendererMaterial","rt":$n[0].Void,"p":[$n[1].SpriteRenderer]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"ClearObstacles","t":8,"sn":"ClearObstacles","rt":$n[0].Void},{"a":1,"n":"CreateBackground","t":8,"sn":"CreateBackground","rt":$n[0].Void},{"a":1,"n":"CreatePlayer","t":8,"sn":"CreatePlayer","rt":$n[0].Void},{"a":1,"n":"GetBackgroundColor","t":8,"sn":"GetBackgroundColor","rt":$n[1].Color},{"a":1,"n":"GetBackgroundScalePadding","t":8,"sn":"GetBackgroundScalePadding","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"GetBackgroundSortingOrder","t":8,"sn":"GetBackgroundSortingOrder","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"GetBackgroundSprite","t":8,"sn":"GetBackgroundSprite","rt":$n[1].Sprite},{"a":1,"n":"GetGameplaySprite","is":true,"t":8,"sn":"GetGameplaySprite","rt":$n[1].Sprite},{"a":1,"n":"GetGameplayZ","t":8,"sn":"GetGameplayZ","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"GetObstacleColor","t":8,"sn":"GetObstacleColor","rt":$n[1].Color},{"a":1,"n":"GetObstacleSizeMultiplier","t":8,"sn":"GetObstacleSizeMultiplier","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"GetObstacleSprite","t":8,"pi":[{"n":"obstacleIndex","pt":$n[0].Int32,"ps":0}],"sn":"GetObstacleSprite","rt":$n[1].Sprite,"p":[$n[0].Int32]},{"a":1,"n":"GetPlayerCollisionRadius","t":8,"sn":"GetPlayerCollisionRadius","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"GetPlayerColor","t":8,"sn":"GetPlayerColor","rt":$n[1].Color},{"a":1,"n":"GetPlayerSizeMultiplier","t":8,"sn":"GetPlayerSizeMultiplier","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"GetPlayerSprite","t":8,"sn":"GetPlayerSprite","rt":$n[1].Sprite},{"a":1,"n":"GetSharedSpriteMaterial","t":8,"sn":"GetSharedSpriteMaterial","rt":$n[1].Material},{"a":1,"n":"GetSpriteWorldSize","is":true,"t":8,"pi":[{"n":"sprite","pt":$n[1].Sprite,"ps":0}],"sn":"GetSpriteWorldSize","rt":$n[1].Vector2,"p":[$n[1].Sprite]},{"a":1,"n":"HandleLose","t":8,"sn":"HandleLose","rt":$n[0].Void},{"a":1,"n":"HandlePlayerMovement","t":8,"sn":"HandlePlayerMovement","rt":$n[0].Void},{"a":1,"n":"HandleSpawning","t":8,"sn":"HandleSpawning","rt":$n[0].Void},{"a":1,"n":"HasTouchBegan","is":true,"t":8,"sn":"HasTouchBegan","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnValidate","t":8,"sn":"OnValidate","rt":$n[0].Void},{"a":1,"n":"RefreshObstacleVisuals","t":8,"sn":"RefreshObstacleVisuals","rt":$n[0].Void},{"at":[new UnityEngine.ContextMenu.ctor("Refresh Visual Theme")],"a":1,"n":"RefreshVisualThemeFromContextMenu","t":8,"sn":"RefreshVisualThemeFromContextMenu","rt":$n[0].Void},{"a":2,"n":"RefreshVisualsNow","t":8,"sn":"RefreshVisualsNow","rt":$n[0].Void},{"a":1,"n":"ResetRun","t":8,"sn":"ResetRun","rt":$n[0].Void},{"a":1,"n":"SetTransformDiameter","is":true,"t":8,"pi":[{"n":"targetTransform","pt":$n[1].Transform,"ps":0},{"n":"sprite","pt":$n[1].Sprite,"ps":1},{"n":"diameter","pt":$n[0].Single,"ps":2}],"sn":"SetTransformDiameter","rt":$n[0].Void,"p":[$n[1].Transform,$n[1].Sprite,$n[0].Single]},{"a":1,"n":"ShouldPreserveBackgroundAspect","t":8,"sn":"ShouldPreserveBackgroundAspect","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"ShouldUseCustomMaterialForCurrentPlatform","t":8,"sn":"ShouldUseCustomMaterialForCurrentPlatform","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"SpawnObstacle","t":8,"sn":"SpawnObstacle","rt":$n[0].Void},{"a":1,"n":"TryGetPointerWorldX","t":8,"pi":[{"n":"worldX","out":true,"pt":$n[0].Single,"ps":0}],"sn":"TryGetPointerWorldX","rt":$n[0].Boolean,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateBackgroundTransform","t":8,"sn":"UpdateBackgroundTransform","rt":$n[0].Void},{"a":1,"n":"UpdateBounds","t":8,"sn":"UpdateBounds","rt":$n[0].Void},{"a":1,"n":"UpdateObstaclesAndCollision","t":8,"sn":"UpdateObstaclesAndCollision","rt":$n[0].Void},{"a":1,"n":"backgroundRenderer","t":4,"rt":$n[1].SpriteRenderer,"sn":"backgroundRenderer"},{"a":1,"n":"backgroundTransform","t":4,"rt":$n[1].Transform,"sn":"backgroundTransform"},{"a":1,"n":"bottomBound","t":4,"rt":$n[0].Single,"sn":"bottomBound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"complianceHooks","t":4,"rt":PlayworksComplianceHooks,"sn":"complianceHooks"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"defaultBackgroundColor","t":4,"rt":$n[1].Color,"sn":"defaultBackgroundColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"defaultObstacleColor","t":4,"rt":$n[1].Color,"sn":"defaultObstacleColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"defaultPlayerColor","t":4,"rt":$n[1].Color,"sn":"defaultPlayerColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"despawnPadding","t":4,"rt":$n[0].Single,"sn":"despawnPadding","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"difficultyRampSeconds","t":4,"rt":$n[0].Single,"sn":"difficultyRampSeconds","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fallbackToDefaultIfShaderUnsupported","t":4,"rt":$n[0].Boolean,"sn":"fallbackToDefaultIfShaderUnsupported","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"gameOver","t":4,"rt":$n[0].Boolean,"sn":"gameOver","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"gameplayCamera","t":4,"rt":$n[1].Camera,"sn":"gameplayCamera"},{"a":1,"n":"gameplaySprite","is":true,"t":4,"rt":$n[1].Sprite,"sn":"gameplaySprite"},{"a":1,"n":"gameplayTexture","is":true,"t":4,"rt":$n[1].Texture2D,"sn":"gameplayTexture"},{"a":1,"n":"gameplayZ","t":4,"rt":$n[0].Single,"sn":"gameplayZ","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"leftBound","t":4,"rt":$n[0].Single,"sn":"leftBound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"obstacleMaxRadius","t":4,"rt":$n[0].Single,"sn":"obstacleMaxRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"obstacleMaxSpeed","t":4,"rt":$n[0].Single,"sn":"obstacleMaxSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Obstacles"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"obstacleMinRadius","t":4,"rt":$n[0].Single,"sn":"obstacleMinRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"obstacleMinSpeed","t":4,"rt":$n[0].Single,"sn":"obstacleMinSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"obstacleSpawnCount","t":4,"rt":$n[0].Int32,"sn":"obstacleSpawnCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"obstacles","t":4,"rt":$n[2].List$1(SimpleDodgeGame.Obstacle),"sn":"obstacles","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerBottomOffset","t":4,"rt":$n[0].Single,"sn":"playerBottomOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerMoveSpeed","t":4,"rt":$n[0].Single,"sn":"playerMoveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Player"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerRadius","t":4,"rt":$n[0].Single,"sn":"playerRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"playerRenderer","t":4,"rt":$n[1].SpriteRenderer,"sn":"playerRenderer"},{"a":1,"n":"playerTransform","t":4,"rt":$n[1].Transform,"sn":"playerTransform"},{"a":1,"n":"pointerDepth","t":4,"rt":$n[0].Single,"sn":"pointerDepth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rightBound","t":4,"rt":$n[0].Single,"sn":"rightBound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Play Area"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sidePadding","t":4,"rt":$n[0].Single,"sn":"sidePadding","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawnIntervalEnd","t":4,"rt":$n[0].Single,"sn":"spawnIntervalEnd","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawnIntervalStart","t":4,"rt":$n[0].Single,"sn":"spawnIntervalStart","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"spawnTimer","t":4,"rt":$n[0].Single,"sn":"spawnTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Rendering"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spriteMaterial","t":4,"rt":$n[1].Material,"sn":"spriteMaterial"},{"a":1,"n":"survivalTime","t":4,"rt":$n[0].Single,"sn":"survivalTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"topBound","t":4,"rt":$n[0].Single,"sn":"topBound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"useCustomMaterialInEditor","t":4,"rt":$n[0].Boolean,"sn":"useCustomMaterialInEditor","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"useCustomMaterialInWebGl","t":4,"rt":$n[0].Boolean,"sn":"useCustomMaterialInWebGl","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Visual Theme"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"visualTheme","t":4,"rt":DodgeVisualTheme,"sn":"visualTheme"}]}; }, $n);
    /*SimpleDodgeGame end.*/

    /*SimpleDodgeGame+Obstacle start.*/
    $m("SimpleDodgeGame.Obstacle", function () { return {"td":SimpleDodgeGame,"att":1048835,"a":1,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].GameObject,$n[1].SpriteRenderer,$n[0].Single,$n[0].Single,$n[0].Single],"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"renderer","pt":$n[1].SpriteRenderer,"ps":1},{"n":"baseRadius","pt":$n[0].Single,"ps":2},{"n":"radius","pt":$n[0].Single,"ps":3},{"n":"speed","pt":$n[0].Single,"ps":4}],"sn":"ctor"},{"a":2,"n":"baseRadius","t":4,"rt":$n[0].Single,"sn":"baseRadius","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"gameObject","t":4,"rt":$n[1].GameObject,"sn":"gameObject","ro":true},{"a":2,"n":"radius","t":4,"rt":$n[0].Single,"sn":"radius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"renderer","t":4,"rt":$n[1].SpriteRenderer,"sn":"renderer","ro":true},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"transform","t":4,"rt":$n[1].Transform,"sn":"transform","ro":true}]}; }, $n);
    /*SimpleDodgeGame+Obstacle end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
