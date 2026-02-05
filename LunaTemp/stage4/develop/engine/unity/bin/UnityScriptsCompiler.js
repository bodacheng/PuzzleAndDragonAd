if ( TRACE ) { TRACE( JSON.parse( '["PlayworksComplianceHooks#init","PlayworksComplianceHooks#Start","PlayworksComplianceHooks#TriggerInstall","PlayworksComplianceHooks#TriggerGameEnded","SimpleDodgeGame#GetCircleSprite","SimpleDodgeGame#HasTouchBegan","SimpleDodgeGame#init","SimpleDodgeGame#Awake","SimpleDodgeGame#Update","SimpleDodgeGame#OnDestroy","SimpleDodgeGame#HandlePlayerMovement","SimpleDodgeGame#HandleSpawning","SimpleDodgeGame#SpawnObstacle","SimpleDodgeGame#UpdateObstaclesAndCollision","SimpleDodgeGame#HandleLose","SimpleDodgeGame#ResetRun","SimpleDodgeGame#ClearObstacles","SimpleDodgeGame#UpdateBounds","SimpleDodgeGame#CreatePlayer","SimpleDodgeGame#TryGetPointerWorldX","SimpleDodgeGame.Obstacle#ctor"]' ) ); }
/**
 * @version 1.0.9532.31710
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

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

                // LP3007 custom event
                Luna.Unity.Analytics.LogEvent$1("session_start", 1);

                // Auto-bootstrap a simple playable loop in SampleScene.
                if (UnityEngine.MonoBehaviour.op_Equality(this.GetComponent(SimpleDodgeGame), null)) {
                    this.gameObject.AddComponent(SimpleDodgeGame);
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
                circleSprite: null
            },
            methods: {
                /*SimpleDodgeGame.GetCircleSprite:static start.*/
                GetCircleSprite: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetCircleSprite", this ); }

                    if (SimpleDodgeGame.circleSprite != null) {
                        return SimpleDodgeGame.circleSprite;
                    }

                    var size = 64;
                    var texture = new UnityEngine.Texture2D.$ctor11(size, size, UnityEngine.TextureFormat.RGBA32, false);
                    texture.name = "RuntimeCircle";
                    texture.filterMode = UnityEngine.FilterMode.Bilinear;
                    texture.wrapMode = UnityEngine.TextureWrapMode.Clamp;

                    var center = 31.5;
                    var radius = 30.72;
                    var radiusSqr = radius * radius;
                    var clear = new pc.Color( 1.0, 1.0, 1.0, 0.0 );

                    for (var y = 0; y < size; y = (y + 1) | 0) {
                        for (var x = 0; x < size; x = (x + 1) | 0) {
                            var dx = x - center;
                            var dy = y - center;
                            var inside = (dx * dx + dy * dy) <= radiusSqr;
                            texture.SetPixel(x, y, inside ? new pc.Color( 1, 1, 1, 1 ) : clear.$clone());
                        }
                    }

                    texture.Apply();
                    SimpleDodgeGame.circleSprite = UnityEngine.Sprite.Create$1(texture, new UnityEngine.Rect.$ctor1(0.0, 0.0, size, size), new pc.Vec2( 0.5, 0.5 ), size);
                    return SimpleDodgeGame.circleSprite;
                },
                /*SimpleDodgeGame.GetCircleSprite:static end.*/

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
            sidePadding: 0,
            despawnPadding: 0,
            obstacles: null,
            gameplayCamera: null,
            complianceHooks: null,
            playerTransform: null,
            playerRenderer: null,
            leftBound: 0,
            rightBound: 0,
            topBound: 0,
            bottomBound: 0,
            survivalTime: 0,
            spawnTimer: 0,
            gameOver: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#init", this ); }

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
                this.sidePadding = 0.5;
                this.despawnPadding = 1.0;
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
                this.UpdateBounds();
                this.CreatePlayer();
                this.ResetRun();
            },
            /*SimpleDodgeGame.Awake end.*/

            /*SimpleDodgeGame.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#Update", this ); }

                this.UpdateBounds();

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
            },
            /*SimpleDodgeGame.OnDestroy end.*/

            /*SimpleDodgeGame.HandlePlayerMovement start.*/
            HandlePlayerMovement: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#HandlePlayerMovement", this ); }

                var position = this.playerTransform.position.$clone();
                var targetX = position.x;
                var pointerX = { };

                if (this.TryGetPointerWorldX(pointerX)) {
                    targetX = pointerX.v;
                    position.x = pc.math.lerp(position.x, targetX, 20.0 * UnityEngine.Time.deltaTime);
                } else {
                    var axis = UnityEngine.Input.GetAxisRaw("Horizontal");
                    position.x += axis * this.playerMoveSpeed * UnityEngine.Time.deltaTime;
                }

                position.x = Math.max(this.leftBound + this.playerRadius, Math.min(position.x, this.rightBound - this.playerRadius));
                position.y = this.bottomBound + this.playerBottomOffset;
                position.z = 0.0;
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

                var radius = UnityEngine.Random.Range$1(this.obstacleMinRadius, this.obstacleMaxRadius);
                var x = UnityEngine.Random.Range$1(this.leftBound + radius, this.rightBound - radius);
                var y = this.topBound + radius + 0.4;
                var speed = UnityEngine.Random.Range$1(this.obstacleMinSpeed, this.obstacleMaxSpeed) + (this.survivalTime * 0.03);

                var obstacleObject = new UnityEngine.GameObject.$ctor2("Obstacle");
                obstacleObject.transform.position = new pc.Vec3( x, y, 0.0 );
                obstacleObject.transform.localScale = new pc.Vec3( radius * 2.0, radius * 2.0, 1.0 );

                var renderer = obstacleObject.AddComponent(UnityEngine.SpriteRenderer);
                renderer.sprite = SimpleDodgeGame.GetCircleSprite();
                renderer.color = new pc.Color( 1.0, 0.4, 0.2, 1.0 );
                renderer.sortingOrder = 8;

                this.obstacles.add(new SimpleDodgeGame.Obstacle(obstacleObject, radius, speed));
            },
            /*SimpleDodgeGame.SpawnObstacle end.*/

            /*SimpleDodgeGame.UpdateObstaclesAndCollision start.*/
            UpdateObstaclesAndCollision: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#UpdateObstaclesAndCollision", this ); }

                var playerPosition = this.playerTransform.position.$clone();

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

                    var totalRadius = this.playerRadius + obstacle.radius;
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
                this.playerRenderer.color = new pc.Color( 1.0, 0.3, 0.3, 1.0 );

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

                var startX = Math.max(this.leftBound + this.playerRadius, Math.min(this.gameplayCamera.transform.position.x, this.rightBound - this.playerRadius));
                var start = new pc.Vec3( startX, this.bottomBound + this.playerBottomOffset, 0.0 );
                this.playerTransform.position = start.$clone();
                this.playerRenderer.color = new pc.Color( 0.2, 0.85, 1.0, 1.0 );
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
                this.playerTransform.position = pc.Vec3.ZERO.clone();
                this.playerTransform.localScale = new pc.Vec3( this.playerRadius * 2.0, this.playerRadius * 2.0, 1.0 );

                this.playerRenderer = playerObject.AddComponent(UnityEngine.SpriteRenderer);
                this.playerRenderer.sprite = SimpleDodgeGame.GetCircleSprite();
                this.playerRenderer.color = new pc.Color( 0.2, 0.85, 1.0, 1.0 );
                this.playerRenderer.sortingOrder = 10;
            },
            /*SimpleDodgeGame.CreatePlayer end.*/

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

                screen.z = Math.abs(this.gameplayCamera.transform.position.z);
                worldX.v = this.gameplayCamera.ScreenToWorldPoint(screen).x;
                return true;
            },
            /*SimpleDodgeGame.TryGetPointerWorldX end.*/


        }
    });
    /*SimpleDodgeGame end.*/

    /*SimpleDodgeGame+Obstacle start.*/
    Bridge.define("SimpleDodgeGame.Obstacle", {
        $kind: 1002,
        fields: {
            gameObject: null,
            transform: null,
            radius: 0,
            speed: 0
        },
        ctors: {
            ctor: function (gameObject, radius, speed) {
if ( TRACE ) { TRACE( "SimpleDodgeGame.Obstacle#ctor", this ); }

                this.$initialize();
                this.gameObject = gameObject;
                this.transform = gameObject.transform;
                this.radius = radius;
                this.speed = speed;
            }
        }
    });
    /*SimpleDodgeGame+Obstacle end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections.Generic"];

    /*PlayworksComplianceHooks start.*/
    $m("PlayworksComplianceHooks", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"TriggerGameEnded","t":8,"sn":"TriggerGameEnded","rt":$n[0].Void},{"a":2,"n":"TriggerInstall","t":8,"sn":"TriggerInstall","rt":$n[0].Void},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Android Store URL", 1, "CTA", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"androidStoreUrl","t":4,"rt":$n[0].String,"sn":"androidStoreUrl"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Default Level", 2, "Gameplay", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"defaultLevel","t":4,"rt":$n[0].Int32,"sn":"defaultLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"gameEnded","t":4,"rt":$n[0].Boolean,"sn":"gameEnded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("iOS Store URL", 0, "CTA", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"iosStoreUrl","t":4,"rt":$n[0].String,"sn":"iosStoreUrl"}]}; }, $n);
    /*PlayworksComplianceHooks end.*/

    /*SimpleDodgeGame start.*/
    $m("SimpleDodgeGame", function () { return {"nested":[SimpleDodgeGame.Obstacle],"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"ClearObstacles","t":8,"sn":"ClearObstacles","rt":$n[0].Void},{"a":1,"n":"CreatePlayer","t":8,"sn":"CreatePlayer","rt":$n[0].Void},{"a":1,"n":"GetCircleSprite","is":true,"t":8,"sn":"GetCircleSprite","rt":$n[1].Sprite},{"a":1,"n":"HandleLose","t":8,"sn":"HandleLose","rt":$n[0].Void},{"a":1,"n":"HandlePlayerMovement","t":8,"sn":"HandlePlayerMovement","rt":$n[0].Void},{"a":1,"n":"HandleSpawning","t":8,"sn":"HandleSpawning","rt":$n[0].Void},{"a":1,"n":"HasTouchBegan","is":true,"t":8,"sn":"HasTouchBegan","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"ResetRun","t":8,"sn":"ResetRun","rt":$n[0].Void},{"a":1,"n":"SpawnObstacle","t":8,"sn":"SpawnObstacle","rt":$n[0].Void},{"a":1,"n":"TryGetPointerWorldX","t":8,"pi":[{"n":"worldX","out":true,"pt":$n[0].Single,"ps":0}],"sn":"TryGetPointerWorldX","rt":$n[0].Boolean,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateBounds","t":8,"sn":"UpdateBounds","rt":$n[0].Void},{"a":1,"n":"UpdateObstaclesAndCollision","t":8,"sn":"UpdateObstaclesAndCollision","rt":$n[0].Void},{"a":1,"n":"bottomBound","t":4,"rt":$n[0].Single,"sn":"bottomBound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"circleSprite","is":true,"t":4,"rt":$n[1].Sprite,"sn":"circleSprite"},{"a":1,"n":"complianceHooks","t":4,"rt":PlayworksComplianceHooks,"sn":"complianceHooks"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"despawnPadding","t":4,"rt":$n[0].Single,"sn":"despawnPadding","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"difficultyRampSeconds","t":4,"rt":$n[0].Single,"sn":"difficultyRampSeconds","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"gameOver","t":4,"rt":$n[0].Boolean,"sn":"gameOver","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"gameplayCamera","t":4,"rt":$n[1].Camera,"sn":"gameplayCamera"},{"a":1,"n":"leftBound","t":4,"rt":$n[0].Single,"sn":"leftBound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"obstacleMaxRadius","t":4,"rt":$n[0].Single,"sn":"obstacleMaxRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"obstacleMaxSpeed","t":4,"rt":$n[0].Single,"sn":"obstacleMaxSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Obstacles"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"obstacleMinRadius","t":4,"rt":$n[0].Single,"sn":"obstacleMinRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"obstacleMinSpeed","t":4,"rt":$n[0].Single,"sn":"obstacleMinSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"obstacles","t":4,"rt":$n[2].List$1(SimpleDodgeGame.Obstacle),"sn":"obstacles","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerBottomOffset","t":4,"rt":$n[0].Single,"sn":"playerBottomOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerMoveSpeed","t":4,"rt":$n[0].Single,"sn":"playerMoveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Player"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerRadius","t":4,"rt":$n[0].Single,"sn":"playerRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"playerRenderer","t":4,"rt":$n[1].SpriteRenderer,"sn":"playerRenderer"},{"a":1,"n":"playerTransform","t":4,"rt":$n[1].Transform,"sn":"playerTransform"},{"a":1,"n":"rightBound","t":4,"rt":$n[0].Single,"sn":"rightBound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Play Area"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sidePadding","t":4,"rt":$n[0].Single,"sn":"sidePadding","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawnIntervalEnd","t":4,"rt":$n[0].Single,"sn":"spawnIntervalEnd","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawnIntervalStart","t":4,"rt":$n[0].Single,"sn":"spawnIntervalStart","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"spawnTimer","t":4,"rt":$n[0].Single,"sn":"spawnTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"survivalTime","t":4,"rt":$n[0].Single,"sn":"survivalTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"topBound","t":4,"rt":$n[0].Single,"sn":"topBound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SimpleDodgeGame end.*/

    /*SimpleDodgeGame+Obstacle start.*/
    $m("SimpleDodgeGame.Obstacle", function () { return {"td":SimpleDodgeGame,"att":1048835,"a":1,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].GameObject,$n[0].Single,$n[0].Single],"pi":[{"n":"gameObject","pt":$n[1].GameObject,"ps":0},{"n":"radius","pt":$n[0].Single,"ps":1},{"n":"speed","pt":$n[0].Single,"ps":2}],"sn":"ctor"},{"a":2,"n":"gameObject","t":4,"rt":$n[1].GameObject,"sn":"gameObject","ro":true},{"a":2,"n":"radius","t":4,"rt":$n[0].Single,"sn":"radius","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"transform","t":4,"rt":$n[1].Transform,"sn":"transform","ro":true}]}; }, $n);
    /*SimpleDodgeGame+Obstacle end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
