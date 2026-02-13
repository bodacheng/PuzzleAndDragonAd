if ( TRACE ) { TRACE( JSON.parse( '["PlayworksComplianceHooks#init","PlayworksComplianceHooks#Start","PlayworksComplianceHooks#TriggerInstall","PlayworksComplianceHooks#TriggerGameEnded","SimpleDodgeGame#init","SimpleDodgeGame#IsPointerCurrentlyHeld","SimpleDodgeGame#CreateHudText","SimpleDodgeGame#TryLoadResourceFont","SimpleDodgeGame#TryLoadBuiltinFont","SimpleDodgeGame#ClearBoolGrid","SimpleDodgeGame#GetGeneratedFallbackSprite","SimpleDodgeGame#SetTransformDiameter","SimpleDodgeGame#SetTransformSize","SimpleDodgeGame#GetSpriteWorldSize","SimpleDodgeGame#GetSafeUnscaledDeltaTime","SimpleDodgeGame#init","SimpleDodgeGame#Awake","SimpleDodgeGame#Update","SimpleDodgeGame#OnDestroy","SimpleDodgeGame#OnValidate","SimpleDodgeGame#RefreshVisualsNow","SimpleDodgeGame#ConfigureEnemyPresentation","SimpleDodgeGame#ApplyPlaygroundVariant","SimpleDodgeGame#RefreshVisualThemeFromContextMenu","SimpleDodgeGame#ResetRound","SimpleDodgeGame#EndRound","SimpleDodgeGame#HandleDragInput","SimpleDodgeGame#DragHeldOrbToward","SimpleDodgeGame#ResolveBoardRoutine","SimpleDodgeGame#RemoveMatchedCells","SimpleDodgeGame#LaunchAttackAtEnemy","SimpleDodgeGame#CreateAttackEffectObject","SimpleDodgeGame#ApplyAttackEffectTint","SimpleDodgeGame#AnimateAttackEffect","SimpleDodgeGame#TriggerEnemyHitFeedback","SimpleDodgeGame#EnemyHitFlashRoutine","SimpleDodgeGame#CollapseColumns","SimpleDodgeGame#FillEmptyCells","SimpleDodgeGame#HasAnyEmptyCell","SimpleDodgeGame#AnimateMoves","SimpleDodgeGame#RecoverFromResolveStallIfNeeded","SimpleDodgeGame#FillAnyEmptyCellsImmediate","SimpleDodgeGame#BuildCollapseMoves","SimpleDodgeGame#BuildFillMoves","SimpleDodgeGame#StartImmediateResolve","SimpleDodgeGame#UpdateImmediateResolve","SimpleDodgeGame#EvaluateImmediateResolveStep","SimpleDodgeGame#BeginImmediateCollapsePhase","SimpleDodgeGame#BeginImmediateFillPhase","SimpleDodgeGame#StartImmediateMoveAnimation","SimpleDodgeGame#UpdateImmediateMoveAnimation","SimpleDodgeGame#FinishImmediateResolve","SimpleDodgeGame#ResetImmediateResolveState","SimpleDodgeGame#TriggerResolve","SimpleDodgeGame#ShouldUseImmediateResolve","SimpleDodgeGame#CountEmptyCells","SimpleDodgeGame#CollectMatches","SimpleDodgeGame#CalculateScoreGain","SimpleDodgeGame#BuildInitialBoard","SimpleDodgeGame#ClearBoard","SimpleDodgeGame#ClearAttackEffects","SimpleDodgeGame#CreateOrb","SimpleDodgeGame#SwapCells","SimpleDodgeGame#GetInitialOrbType","SimpleDodgeGame#GetRandomOrbType","SimpleDodgeGame#GetOrbColorCount","SimpleDodgeGame#GetOrbColor","SimpleDodgeGame#CreateRuntimeVisuals","SimpleDodgeGame#ApplyBackgroundVisuals","SimpleDodgeGame#ApplyBoardFrameVisuals","SimpleDodgeGame#ApplyEnemyVisuals","SimpleDodgeGame#ApplyOrbVisuals","SimpleDodgeGame#GetOrbSpriteForType","SimpleDodgeGame#GetBoardSprite","SimpleDodgeGame#GetAnyConfiguredOrbSprite","SimpleDodgeGame#PrepareSpriteForRuntime","SimpleDodgeGame#WarnIfMissingSpriteSetup","SimpleDodgeGame#CreateRuntimeHud","SimpleDodgeGame#UpdateHudTexts","SimpleDodgeGame#SetResultVisible","SimpleDodgeGame#GetHudFont","SimpleDodgeGame#UpdateLayout","SimpleDodgeGame#RepositionBoardOrbs","SimpleDodgeGame#UpdateEnemyTransform","SimpleDodgeGame#UpdateBackgroundTransform","SimpleDodgeGame#UpdateBoardFrameTransform","SimpleDodgeGame#CellToWorld","SimpleDodgeGame#TryWorldToCell","SimpleDodgeGame#IsInsideBoard","SimpleDodgeGame#TryGetPointerDownWorld","SimpleDodgeGame#TryGetPointerHeldWorld","SimpleDodgeGame#PointerPressedThisFrame","SimpleDodgeGame#PointerReleasedThisFrame","SimpleDodgeGame#ScreenToWorld","SimpleDodgeGame#ValidateConfig","SimpleDodgeGame#EnsureMatchBuffers","SimpleDodgeGame#WaitForSecondsUnscaled","SimpleDodgeGame#MarkResolveProgress","SimpleDodgeGame#ApplyRendererMaterial","SimpleDodgeGame#GetGameplayZ","SimpleDodgeGame#GetSharedSpriteMaterial","SimpleDodgeGame#ShouldUseCustomMaterialForCurrentPlatform","SimpleDodgeGame.Orb#ctor","SimpleDodgeGame.OrbMove#getDefaultValue","SimpleDodgeGame.OrbMove#init","SimpleDodgeGame.OrbMove#$ctor1","SimpleDodgeGame.OrbMove#ctor","SimpleDodgeGame.OrbMove#getHashCode","SimpleDodgeGame.OrbMove#equals","SimpleDodgeGame.OrbMove#$clone"]' ) ); }
/**
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*PlayworksComplianceHooks start.*/
    Bridge.define("PlayworksComplianceHooks", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            iosStoreUrl: null,
            androidStoreUrl: null,
            gameplayVariant: 0,
            enemySprite: null,
            attackEffectPrefab: null,
            gameEnded: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayworksComplianceHooks#init", this ); }

                this.iosStoreUrl = "";
                this.androidStoreUrl = "";
                this.gameplayVariant = 0;
            }
        },
        methods: {
            /*PlayworksComplianceHooks.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayworksComplianceHooks#Start", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.GetComponent(SimpleDodgeGame), null)) {
                    try {
                        Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.AddComponent(SimpleDodgeGame);
                    } catch (exception2) {
                        exception2 = System.Exception.create(exception2);
                        UnityEngine.Debug.LogError$2("Failed to add SimpleDodgeGame: " + (exception2.Message || ""));
                    }
                }
                var gameplay = this.GetComponent(SimpleDodgeGame);
                if (UnityEngine.MonoBehaviour.op_Inequality(gameplay, null)) {
                    gameplay.ApplyPlaygroundVariant(this.gameplayVariant);
                    gameplay.ConfigureEnemyPresentation(this.enemySprite, this.attackEffectPrefab);
                }
                try {
                    Luna.Unity.Analytics.LogEvent$1("session_start", 1);
                } catch (exception) {
                    exception = System.Exception.create(exception);
                    UnityEngine.Debug.LogWarning$1("Analytics.LogEvent(session_start) failed: " + (exception.Message || ""));
                }
            },
            /*PlayworksComplianceHooks.Start end.*/

            /*PlayworksComplianceHooks.TriggerInstall start.*/
            TriggerInstall: function () {
if ( TRACE ) { TRACE( "PlayworksComplianceHooks#TriggerInstall", this ); }

                Luna.Unity.Playable.InstallFullGame(this.iosStoreUrl, this.androidStoreUrl);
                Luna.Unity.Analytics.LogEvent$1("cta_click", 1);
            },
            /*PlayworksComplianceHooks.TriggerInstall end.*/

            /*PlayworksComplianceHooks.TriggerGameEnded start.*/
            TriggerGameEnded: function () {
if ( TRACE ) { TRACE( "PlayworksComplianceHooks#TriggerGameEnded", this ); }

                if (!this.gameEnded) {
                    this.gameEnded = true;
                    Luna.Unity.LifeCycle.GameEnded(System.Array.init(["completed"], System.Object));
                    Luna.Unity.Analytics.LogEvent$1("game_end", 1);
                }
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
                HudFontResourceName: null,
                NeighborOffsets: null,
                generatedFallbackSprite: null,
                generatedFallbackTexture: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#init", this ); }

                    this.HudFontResourceName = "HudFont";
                    this.NeighborOffsets = System.Array.init([new UnityEngine.Vector2Int.$ctor1(1, 0), new UnityEngine.Vector2Int.$ctor1(-1, 0), new UnityEngine.Vector2Int.$ctor1(0, 1), new UnityEngine.Vector2Int.$ctor1(0, -1)], UnityEngine.Vector2Int);
                }
            },
            methods: {
                /*SimpleDodgeGame.IsPointerCurrentlyHeld:static start.*/
                IsPointerCurrentlyHeld: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#IsPointerCurrentlyHeld", this ); }

                    if (UnityEngine.Input.GetMouseButton(0)) {
                        return true;
                    }
                    for (var i = 0; i < UnityEngine.Input.touchCount; i = (i + 1) | 0) {
                        var phase = UnityEngine.Input.GetTouch(i).phase;
                        if (phase !== UnityEngine.TouchPhase.Ended && phase !== UnityEngine.TouchPhase.Canceled) {
                            return true;
                        }
                    }
                    return false;
                },
                /*SimpleDodgeGame.IsPointerCurrentlyHeld:static end.*/

                /*SimpleDodgeGame.CreateHudText:static start.*/
                CreateHudText: function (parent, objectName, font, fontSize, anchorMin, anchorMax, pivot, anchoredPosition, sizeDelta, alignment) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#CreateHudText", this ); }

                    var textObject = new UnityEngine.GameObject.$ctor2(objectName);
                    textObject.transform.SetParent(parent, false);
                    var text = textObject.AddComponent(UnityEngine.UI.Text);
                    if (font != null) {
                        text.font = font;
                    }
                    text.fontSize = fontSize;
                    text.fontStyle = UnityEngine.FontStyle.Bold;
                    text.color = new pc.Color( 1, 1, 1, 1 );
                    text.horizontalOverflow = UnityEngine.HorizontalWrapMode.Overflow;
                    text.verticalOverflow = UnityEngine.VerticalWrapMode.Overflow;
                    text.raycastTarget = false;
                    var rectTransform = text.rectTransform;
                    rectTransform.anchorMin = anchorMin.$clone();
                    rectTransform.anchorMax = anchorMax.$clone();
                    rectTransform.pivot = pivot.$clone();
                    rectTransform.anchoredPosition = anchoredPosition.$clone();
                    rectTransform.sizeDelta = sizeDelta.$clone();
                    return text;
                },
                /*SimpleDodgeGame.CreateHudText:static end.*/

                /*SimpleDodgeGame.TryLoadResourceFont:static start.*/
                TryLoadResourceFont: function (resourceName) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#TryLoadResourceFont", this ); }

                    if (System.String.isNullOrEmpty(resourceName)) {
                        return null;
                    }
                    try {
                        return UnityEngine.Resources.Load(UnityEngine.Font, resourceName);
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);
                        return null;
                    }
                },
                /*SimpleDodgeGame.TryLoadResourceFont:static end.*/

                /*SimpleDodgeGame.TryLoadBuiltinFont:static start.*/
                TryLoadBuiltinFont: function (fontPath) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#TryLoadBuiltinFont", this ); }

                    try {
                        return Bridge.cast(UnityEngine.Resources.GetBuiltinResource(UnityEngine.Font, fontPath), UnityEngine.Font);
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);
                        return null;
                    }
                },
                /*SimpleDodgeGame.TryLoadBuiltinFont:static end.*/

                /*SimpleDodgeGame.ClearBoolGrid:static start.*/
                ClearBoolGrid: function (grid) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ClearBoolGrid", this ); }

                    if (grid == null) {
                        return;
                    }
                    var width = System.Array.getLength(grid, 0);
                    var height = System.Array.getLength(grid, 1);
                    for (var x = 0; x < width; x = (x + 1) | 0) {
                        for (var y = 0; y < height; y = (y + 1) | 0) {
                            grid.set([x, y], false);
                        }
                    }
                },
                /*SimpleDodgeGame.ClearBoolGrid:static end.*/

                /*SimpleDodgeGame.GetGeneratedFallbackSprite:static start.*/
                GetGeneratedFallbackSprite: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetGeneratedFallbackSprite", this ); }

                    if (SimpleDodgeGame.generatedFallbackSprite != null) {
                        return SimpleDodgeGame.generatedFallbackSprite;
                    }
                    try {
                        if (SimpleDodgeGame.generatedFallbackTexture == null) {
                            SimpleDodgeGame.generatedFallbackTexture = new UnityEngine.Texture2D.$ctor11(2, 2, UnityEngine.TextureFormat.RGBA32, false);
                            SimpleDodgeGame.generatedFallbackTexture.SetPixel(0, 0, new pc.Color( 1, 1, 1, 1 ));
                            SimpleDodgeGame.generatedFallbackTexture.SetPixel(1, 0, new pc.Color( 1, 1, 1, 1 ));
                            SimpleDodgeGame.generatedFallbackTexture.SetPixel(0, 1, new pc.Color( 1, 1, 1, 1 ));
                            SimpleDodgeGame.generatedFallbackTexture.SetPixel(1, 1, new pc.Color( 1, 1, 1, 1 ));
                            SimpleDodgeGame.generatedFallbackTexture.Apply$1(false, true);
                        }
                        SimpleDodgeGame.generatedFallbackSprite = UnityEngine.Sprite.Create$1(SimpleDodgeGame.generatedFallbackTexture, new UnityEngine.Rect.$ctor1(0.0, 0.0, SimpleDodgeGame.generatedFallbackTexture.width, SimpleDodgeGame.generatedFallbackTexture.height), new pc.Vec2( 0.5, 0.5 ), SimpleDodgeGame.generatedFallbackTexture.width);
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);
                        return null;
                    }
                    return SimpleDodgeGame.generatedFallbackSprite;
                },
                /*SimpleDodgeGame.GetGeneratedFallbackSprite:static end.*/

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

                /*SimpleDodgeGame.SetTransformSize:static start.*/
                SetTransformSize: function (targetTransform, sprite, width, height) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#SetTransformSize", this ); }

                    var spriteSize = SimpleDodgeGame.GetSpriteWorldSize(sprite);
                    var scaleX = UnityEngine.Mathf.Max(0.01, width) / spriteSize.x;
                    var scaleY = UnityEngine.Mathf.Max(0.01, height) / spriteSize.y;
                    targetTransform.localScale = new pc.Vec3( scaleX, scaleY, 1.0 );
                },
                /*SimpleDodgeGame.SetTransformSize:static end.*/

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

                /*SimpleDodgeGame.GetSafeUnscaledDeltaTime:static start.*/
                GetSafeUnscaledDeltaTime: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetSafeUnscaledDeltaTime", this ); }

                    var delta = UnityEngine.Time.unscaledDeltaTime;
                    if (delta > 0.0 && !isNaN(delta) && !(Math.abs(delta) === Number.POSITIVE_INFINITY)) {
                        return delta;
                    }
                    return 0.0166666675;
                },
                /*SimpleDodgeGame.GetSafeUnscaledDeltaTime:static end.*/


            }
        },
        fields: {
            columns: 0,
            rows: 0,
            boardSidePadding: 0,
            boardBottomPadding: 0,
            boardTopPadding: 0,
            orbScale: 0,
            clearDelaySeconds: 0,
            fallDurationSeconds: 0,
            resolveStallTimeoutSeconds: 0,
            roundDurationSeconds: 0,
            baseScorePerOrb: 0,
            backgroundColor: null,
            boardColor: null,
            boardOutlineColor: null,
            orbColors: null,
            orbSprites: null,
            spriteMaterial: null,
            useCustomMaterialInEditor: false,
            useCustomMaterialInWebGl: false,
            fallbackToDefaultIfShaderUnsupported: false,
            hudFontOverride: null,
            enemySprite: null,
            enemyTint: null,
            enemySizeInCells: 0,
            enemyTopMargin: 0,
            attackEffectPrefab: null,
            attackEffectSprite: null,
            attackTravelSeconds: 0,
            attackArcHeight: 0,
            attackEffectScale: 0,
            gameplayCamera: null,
            complianceHooks: null,
            boardRoot: null,
            backgroundTransform: null,
            backgroundRenderer: null,
            boardFrameTransform: null,
            boardFrameRenderer: null,
            boardOutlineTransform: null,
            boardOutlineRenderer: null,
            attackEffectsRoot: null,
            enemyTransform: null,
            enemyRenderer: null,
            enemyBaseColor: null,
            enemyHitFlashRoutine: null,
            board: null,
            gameplayZ: 0,
            pointerDepth: 0,
            cellSize: 0,
            boardBottomLeft: null,
            boardWorldWidth: 0,
            boardWorldHeight: 0,
            layoutInitialized: false,
            isDragging: false,
            isResolving: false,
            roundEnded: false,
            hasReportedGameEnded: false,
            heldCell: null,
            timeRemaining: 0,
            score: 0,
            lastMoveCombos: 0,
            hasLoggedMissingSpriteConfig: false,
            hudRootTransform: null,
            scoreText: null,
            timeText: null,
            comboText: null,
            resultText: null,
            moveBuffer: null,
            matchedCellsBuffer: null,
            floodFillStackBuffer: null,
            markedCellsBuffer: null,
            visitedCellsBuffer: null,
            resolveStartedAt: 0,
            resolveRecoveryAttempts: 0,
            resolveStage: null,
            immediateResolvePhase: 0,
            immediatePhaseTimer: 0,
            immediateMoveDuration: 0,
            immediateTotalMoveCombos: 0,
            hasLoggedMissingHudFont: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#init", this ); }

                this.backgroundColor = new UnityEngine.Color();
                this.boardColor = new UnityEngine.Color();
                this.boardOutlineColor = new UnityEngine.Color();
                this.enemyTint = new UnityEngine.Color();
                this.enemyBaseColor = new UnityEngine.Color();
                this.boardBottomLeft = new UnityEngine.Vector2();
                this.heldCell = new UnityEngine.Vector2Int();
                this.columns = 6;
                this.rows = 5;
                this.boardSidePadding = 0.45;
                this.boardBottomPadding = 0.8;
                this.boardTopPadding = 2.15;
                this.orbScale = 0.9;
                this.clearDelaySeconds = 0.08;
                this.fallDurationSeconds = 0.12;
                this.resolveStallTimeoutSeconds = 8.0;
                this.roundDurationSeconds = 35.0;
                this.baseScorePerOrb = 12;
                this.backgroundColor = new pc.Color( 0.12, 0.16, 0.25, 1.0 );
                this.boardColor = new pc.Color( 0.05, 0.07, 0.12, 0.85 );
                this.boardOutlineColor = new pc.Color( 0.72, 0.78, 0.9, 0.4 );
                this.orbColors = System.Array.init([new pc.Color( 0.9, 0.33, 0.3, 1.0 ), new pc.Color( 0.25, 0.66, 0.95, 1.0 ), new pc.Color( 0.42, 0.86, 0.42, 1.0 ), new pc.Color( 0.93, 0.82, 0.31, 1.0 ), new pc.Color( 0.7, 0.48, 0.96, 1.0 ), new pc.Color( 0.96, 0.57, 0.81, 1.0 )], UnityEngine.Color);
                this.useCustomMaterialInEditor = true;
                this.useCustomMaterialInWebGl = false;
                this.fallbackToDefaultIfShaderUnsupported = true;
                this.enemyTint = new pc.Color( 1, 1, 1, 1 );
                this.enemySizeInCells = 1.8;
                this.enemyTopMargin = 0.3;
                this.attackTravelSeconds = 0.18;
                this.attackArcHeight = 0.45;
                this.attackEffectScale = 0.3;
                this.enemyBaseColor = new pc.Color( 1, 1, 1, 1 );
                this.moveBuffer = new (System.Collections.Generic.List$1(SimpleDodgeGame.OrbMove)).$ctor2(64);
                this.matchedCellsBuffer = new (System.Collections.Generic.List$1(UnityEngine.Vector2Int)).$ctor2(64);
                this.floodFillStackBuffer = new (System.Collections.Generic.List$1(UnityEngine.Vector2Int)).$ctor2(64);
                this.resolveStartedAt = -1.0;
                this.resolveStage = "idle";
                this.immediateResolvePhase = SimpleDodgeGame.ImmediateResolvePhase.Idle;
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
                    Bridge.ensureBaseProperty(this, "enabled").$UnityEngine$Component$enabled = false;
                    return;
                }
                if (!this.gameplayCamera.orthographic) {
                    this.gameplayCamera.orthographic = true;
                }
                this.complianceHooks = this.GetComponent(PlayworksComplianceHooks);
                this.ValidateConfig();
                this.WarnIfMissingSpriteSetup();
                this.gameplayZ = this.GetGameplayZ();
                this.pointerDepth = Math.abs(this.gameplayZ - this.gameplayCamera.transform.position.z);
                this.CreateRuntimeVisuals();
                this.CreateRuntimeHud();
                this.UpdateLayout(true);
                this.ResetRound();
            },
            /*SimpleDodgeGame.Awake end.*/

            /*SimpleDodgeGame.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#Update", this ); }

                if (UnityEngine.Component.op_Equality(this.gameplayCamera, null)) {
                    return;
                }
                this.UpdateLayout(false);
                this.RecoverFromResolveStallIfNeeded();
                if (!this.roundEnded && !this.isResolving && this.HasAnyEmptyCell()) {
                    this.TriggerResolve();
                }
                if (this.roundEnded) {
                    if (this.PointerPressedThisFrame()) {
                        if (UnityEngine.MonoBehaviour.op_Inequality(this.complianceHooks, null)) {
                            this.complianceHooks.TriggerInstall();
                        } else {
                            this.ResetRound();
                        }
                    }
                    this.UpdateHudTexts();
                    return;
                }
                this.timeRemaining -= SimpleDodgeGame.GetSafeUnscaledDeltaTime();
                if (this.timeRemaining <= 0.0) {
                    this.timeRemaining = 0.0;
                    this.EndRound();
                    this.UpdateHudTexts();
                    return;
                }
                if (this.ShouldUseImmediateResolve() && this.isResolving) {
                    this.UpdateImmediateResolve();
                }
                if (!this.isResolving) {
                    this.HandleDragInput();
                }
                this.UpdateHudTexts();
            },
            /*SimpleDodgeGame.Update end.*/

            /*SimpleDodgeGame.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#OnDestroy", this ); }

                this.ClearBoard();
                if (UnityEngine.Component.op_Inequality(this.boardRoot, null)) {
                    UnityEngine.Object.Destroy(this.boardRoot.gameObject);
                }
                if (UnityEngine.Component.op_Inequality(this.backgroundTransform, null)) {
                    UnityEngine.Object.Destroy(this.backgroundTransform.gameObject);
                }
                if (UnityEngine.Component.op_Inequality(this.hudRootTransform, null)) {
                    UnityEngine.Object.Destroy(this.hudRootTransform.gameObject);
                }
            },
            /*SimpleDodgeGame.OnDestroy end.*/

            /*SimpleDodgeGame.OnValidate start.*/
            OnValidate: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#OnValidate", this ); }

                this.ValidateConfig();
                this.WarnIfMissingSpriteSetup();
                if (UnityEngine.Application.isPlaying) {
                    this.RefreshVisualsNow();
                }
            },
            /*SimpleDodgeGame.OnValidate end.*/

            /*SimpleDodgeGame.RefreshVisualsNow start.*/
            RefreshVisualsNow: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#RefreshVisualsNow", this ); }

                this.ValidateConfig();
                this.ApplyBackgroundVisuals();
                this.ApplyBoardFrameVisuals();
                this.ApplyEnemyVisuals();
                this.UpdateHudTexts();
                if (this.board == null) {
                    return;
                }
                for (var x = 0; x < this.columns; x = (x + 1) | 0) {
                    for (var y = 0; y < this.rows; y = (y + 1) | 0) {
                        var orb = this.board.get([x, y]);
                        if (orb != null && !(UnityEngine.GameObject.op_Equality(orb.gameObject, null))) {
                            this.ApplyOrbVisuals(orb);
                            orb.transform.position = this.CellToWorld(x, y);
                        }
                    }
                }
                this.UpdateEnemyTransform();
            },
            /*SimpleDodgeGame.RefreshVisualsNow end.*/

            /*SimpleDodgeGame.ConfigureEnemyPresentation start.*/
            ConfigureEnemyPresentation: function (configuredEnemySprite, configuredAttackEffectPrefab) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ConfigureEnemyPresentation", this ); }

                if (configuredEnemySprite != null) {
                    this.enemySprite = configuredEnemySprite;
                }
                if (UnityEngine.GameObject.op_Inequality(configuredAttackEffectPrefab, null)) {
                    this.attackEffectPrefab = configuredAttackEffectPrefab;
                }
                if (UnityEngine.Application.isPlaying) {
                    this.ApplyEnemyVisuals();
                    this.UpdateEnemyTransform();
                }
            },
            /*SimpleDodgeGame.ConfigureEnemyPresentation end.*/

            /*SimpleDodgeGame.ApplyPlaygroundVariant start.*/
            ApplyPlaygroundVariant: function (variantIndex) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ApplyPlaygroundVariant", this ); }

                switch (Math.abs(variantIndex) % 3) {
                    case 1: 
                        this.columns = 6;
                        this.rows = 5;
                        this.boardSidePadding = 0.45;
                        this.boardBottomPadding = 0.8;
                        this.boardTopPadding = 2.15;
                        this.orbScale = 0.88;
                        this.clearDelaySeconds = 0.05;
                        this.fallDurationSeconds = 0.08;
                        this.roundDurationSeconds = 28.0;
                        this.baseScorePerOrb = 16;
                        break;
                    case 2: 
                        this.columns = 5;
                        this.rows = 5;
                        this.boardSidePadding = 0.55;
                        this.boardBottomPadding = 0.8;
                        this.boardTopPadding = 2.2;
                        this.orbScale = 0.92;
                        this.clearDelaySeconds = 0.12;
                        this.fallDurationSeconds = 0.16;
                        this.roundDurationSeconds = 45.0;
                        this.baseScorePerOrb = 10;
                        break;
                    default: 
                        this.columns = 6;
                        this.rows = 5;
                        this.boardSidePadding = 0.45;
                        this.boardBottomPadding = 0.8;
                        this.boardTopPadding = 2.15;
                        this.orbScale = 0.9;
                        this.clearDelaySeconds = 0.08;
                        this.fallDurationSeconds = 0.12;
                        this.roundDurationSeconds = 35.0;
                        this.baseScorePerOrb = 12;
                        break;
                }
                this.ValidateConfig();
                if (UnityEngine.Application.isPlaying) {
                    this.UpdateLayout(true);
                    this.ResetRound();
                }
            },
            /*SimpleDodgeGame.ApplyPlaygroundVariant end.*/

            /*SimpleDodgeGame.RefreshVisualThemeFromContextMenu start.*/
            RefreshVisualThemeFromContextMenu: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#RefreshVisualThemeFromContextMenu", this ); }

                this.RefreshVisualsNow();
            },
            /*SimpleDodgeGame.RefreshVisualThemeFromContextMenu end.*/

            /*SimpleDodgeGame.ResetRound start.*/
            ResetRound: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ResetRound", this ); }

                this.StopAllCoroutines();
                this.isDragging = false;
                this.isResolving = false;
                this.ResetImmediateResolveState();
                this.resolveStartedAt = -1.0;
                this.resolveRecoveryAttempts = 0;
                this.roundEnded = false;
                this.hasReportedGameEnded = false;
                this.score = 0;
                this.lastMoveCombos = 0;
                this.timeRemaining = UnityEngine.Mathf.Max(5.0, this.roundDurationSeconds);
                this.ClearBoard();
                this.BuildInitialBoard();
                this.SetResultVisible(false);
                this.UpdateHudTexts();
            },
            /*SimpleDodgeGame.ResetRound end.*/

            /*SimpleDodgeGame.EndRound start.*/
            EndRound: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#EndRound", this ); }

                if (!this.roundEnded) {
                    this.roundEnded = true;
                    this.isDragging = false;
                    this.isResolving = false;
                    this.ResetImmediateResolveState();
                    this.StopAllCoroutines();
                    if (!this.hasReportedGameEnded && UnityEngine.MonoBehaviour.op_Inequality(this.complianceHooks, null)) {
                        this.hasReportedGameEnded = true;
                        this.complianceHooks.TriggerGameEnded();
                    }
                    this.SetResultVisible(true);
                    this.UpdateHudTexts();
                }
            },
            /*SimpleDodgeGame.EndRound end.*/

            /*SimpleDodgeGame.HandleDragInput start.*/
            HandleDragInput: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#HandleDragInput", this ); }

                if (!this.isDragging) {
                    var worldPosition = { v : new UnityEngine.Vector3() };
                    var pressedCell = { v : new UnityEngine.Vector2Int() };
                    if (this.TryGetPointerDownWorld(worldPosition) && this.TryWorldToCell(worldPosition.v.$clone(), pressedCell)) {
                        this.heldCell = pressedCell.v.$clone();
                        this.isDragging = true;
                    }
                    return;
                }
                var draggedWorld = { v : new UnityEngine.Vector3() };
                var targetCell = { v : new UnityEngine.Vector2Int() };
                if (this.TryGetPointerHeldWorld(draggedWorld) && this.TryWorldToCell(draggedWorld.v.$clone(), targetCell)) {
                    this.DragHeldOrbToward(targetCell.v.$clone());
                }
                var released = this.PointerReleasedThisFrame();
                if (!released && !SimpleDodgeGame.IsPointerCurrentlyHeld()) {
                    released = true;
                }
                if (released) {
                    this.isDragging = false;
                    this.TriggerResolve();
                }
            },
            /*SimpleDodgeGame.HandleDragInput end.*/

            /*SimpleDodgeGame.DragHeldOrbToward start.*/
            DragHeldOrbToward: function (targetCell) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#DragHeldOrbToward", this ); }

                if (UnityEngine.Vector2Int.op_Equality(targetCell.$clone(), this.heldCell.$clone())) {
                    return;
                }
                var guard = 0;
                while (UnityEngine.Vector2Int.op_Inequality(this.heldCell.$clone(), targetCell.$clone()) && guard < ((this.columns + this.rows) | 0)) {
                    var delta = UnityEngine.Vector2Int.op_Subtraction(targetCell.$clone(), this.heldCell.$clone());
                    var step = ((Math.abs(delta.x) < Math.abs(delta.y)) ? new UnityEngine.Vector2Int.$ctor1(0, (delta.y > 0) ? 1 : (-1)) : new UnityEngine.Vector2Int.$ctor1((delta.x > 0) ? 1 : (-1), 0));
                    var next = UnityEngine.Vector2Int.op_Addition(this.heldCell.$clone(), step.$clone());
                    if (!this.IsInsideBoard(next.$clone())) {
                        break;
                    }
                    this.SwapCells(this.heldCell.$clone(), next.$clone());
                    this.heldCell = next.$clone();
                    guard = (guard + 1) | 0;
                }
            },
            /*SimpleDodgeGame.DragHeldOrbToward end.*/

            /*SimpleDodgeGame.ResolveBoardRoutine start.*/
            ResolveBoardRoutine: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ResolveBoardRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    totalMoveCombos,
                    safety,
                    matchedCells,
                    combos,
                    removed,
                    $async_e,
                    $async_e1;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (this.isResolving || this.roundEnded) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    if (this.ShouldUseImmediateResolve()) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 3: {
                                    this.StartImmediateResolve();
                                        return false;
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    this.isResolving = true;
                                        this.MarkResolveProgress();
                                        this.resolveStage = "collect";
                                        totalMoveCombos = 0;
                                        safety = 0;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( safety < 24 ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 12;
                                        continue;
                                }
                                case 6: {
                                    this.MarkResolveProgress();
                                        this.resolveStage = "collect";
                                        matchedCells = { };
                                        combos = this.CollectMatches(matchedCells);
                                        if (combos <= 0 || matchedCells.v.Count === 0) {
                                            $step = 12;
                                            continue;
                                        }
                                        totalMoveCombos = (totalMoveCombos + combos) | 0;
                                        removed = matchedCells.v.Count;
                                        this.score = (this.score + (this.CalculateScoreGain(removed, combos, totalMoveCombos))) | 0;
                                        this.RemoveMatchedCells(matchedCells.v);
                                        if (this.clearDelaySeconds > 0.0) {
                                            $step = 7;
                                            continue;
                                        } 
                                        $step = 9;
                                        continue;
                                }
                                case 7: {
                                    this.resolveStage = "clear-delay";
                                        $enumerator.current = this.WaitForSecondsUnscaled(this.clearDelaySeconds);
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    this.MarkResolveProgress();
                                    $step = 9;
                                    continue;
                                }
                                case 9: {
                                    this.resolveStage = "collapse";
                                        $enumerator.current = this.CollapseColumns();
                                        $step = 10;
                                        return true;
                                }
                                case 10: {
                                    this.MarkResolveProgress();
                                        this.resolveStage = "fill";
                                        $enumerator.current = this.FillEmptyCells();
                                        $step = 11;
                                        return true;
                                }
                                case 11: {
                                    this.MarkResolveProgress();
                                        safety = (safety + 1) | 0;
                                        matchedCells.v = null;

                                        $step = 5;
                                        continue;
                                }
                                case 12: {
                                    if (this.HasAnyEmptyCell()) {
                                            $step = 13;
                                            continue;
                                        } 
                                        $step = 15;
                                        continue;
                                }
                                case 13: {
                                    this.resolveStage = "final-fill";
                                        $enumerator.current = this.FillEmptyCells();
                                        $step = 14;
                                        return true;
                                }
                                case 14: {
                                    this.MarkResolveProgress();
                                    $step = 15;
                                    continue;
                                }
                                case 15: {
                                    $step = 16;
                                    continue;
                                }
                                case 16: {
                                    if (this.HasAnyEmptyCell()) {
                                            this.FillAnyEmptyCellsImmediate();
                                        }
                                        this.lastMoveCombos = totalMoveCombos;
                                        this.isResolving = false;
                                        this.resolveStartedAt = -1.0;
                                        this.resolveStage = "idle";
                                        this.resolveRecoveryAttempts = 0;

                                        if ($jumpFromFinally > -1) {
                                            $step = $jumpFromFinally;
                                            $jumpFromFinally = null;
                                        } else if ($async_e) {
                                            throw $async_e;
                                            return;
                                        } else if (Bridge.isDefined($returnValue)) {
                                            $tcs.setResult($returnValue);
                                            return;
                                        }
                                    $step = 17;
                                    continue;
                                }
                                case 17: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        if ($step >= 5 && $step <= 15){

                            $step = 16;
                            $enumerator.moveNext();
                            return;
                        }
                        throw $async_e;
                    }
                }), function () {
                    if ($step >= 5 && $step <= 15){

                        $step = 16;
                        $enumerator.moveNext();
                        return;
                    }

                });
                return $enumerator;
            },
            /*SimpleDodgeGame.ResolveBoardRoutine end.*/

            /*SimpleDodgeGame.RemoveMatchedCells start.*/
            RemoveMatchedCells: function (matchedCells) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#RemoveMatchedCells", this ); }

                for (var i = 0; i < matchedCells.Count; i = (i + 1) | 0) {
                    var cell = matchedCells.getItem(i).$clone();
                    var orb = this.board.get([cell.x, cell.y]);
                    if (orb != null) {
                        this.LaunchAttackAtEnemy(orb.transform.position.$clone(), orb.type);
                        this.board.set([cell.x, cell.y], null);
                        UnityEngine.Object.Destroy(orb.gameObject);
                    }
                }
            },
            /*SimpleDodgeGame.RemoveMatchedCells end.*/

            /*SimpleDodgeGame.LaunchAttackAtEnemy start.*/
            LaunchAttackAtEnemy: function (fromPosition, orbType) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#LaunchAttackAtEnemy", this ); }

                if (!(UnityEngine.Component.op_Equality(this.enemyTransform, null)) && !this.roundEnded) {
                    var attackObject = this.CreateAttackEffectObject(orbType);
                    if (!(UnityEngine.GameObject.op_Equality(attackObject, null))) {
                        var attackTransform = attackObject.transform;
                        attackTransform.position = fromPosition.$clone();
                        attackTransform.rotation = pc.Quat.IDENTITY.clone();
                        this.StartCoroutine$1(this.AnimateAttackEffect(attackObject, fromPosition.$clone(), this.enemyTransform.position.$clone()));
                    }
                }
            },
            /*SimpleDodgeGame.LaunchAttackAtEnemy end.*/

            /*SimpleDodgeGame.CreateAttackEffectObject start.*/
            CreateAttackEffectObject: function (orbType) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#CreateAttackEffectObject", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.attackEffectPrefab, null)) {
                    var effectObject = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.attackEffectPrefab);
                    if (UnityEngine.GameObject.op_Equality(effectObject, null)) {
                        return null;
                    }
                    if (UnityEngine.Component.op_Inequality(this.boardRoot, null)) {
                        effectObject.transform.SetParent((UnityEngine.Component.op_Inequality(this.attackEffectsRoot, null)) ? this.attackEffectsRoot : this.boardRoot, true);
                    }
                    this.ApplyAttackEffectTint(effectObject, this.GetOrbColor(orbType));
                    return effectObject;
                }
                var fallbackObject = new UnityEngine.GameObject.$ctor2("AttackEffect");
                if (UnityEngine.Component.op_Inequality(this.boardRoot, null)) {
                    fallbackObject.transform.SetParent((UnityEngine.Component.op_Inequality(this.attackEffectsRoot, null)) ? this.attackEffectsRoot : this.boardRoot, true);
                }
                var renderer = fallbackObject.AddComponent(UnityEngine.SpriteRenderer);
                var configuredSprite = ((this.attackEffectSprite != null) ? this.attackEffectSprite : this.GetAnyConfiguredOrbSprite());
                renderer.sprite = this.PrepareSpriteForRuntime((configuredSprite != null) ? configuredSprite : SimpleDodgeGame.GetGeneratedFallbackSprite());
                renderer.color = this.GetOrbColor(orbType);
                renderer.sortingOrder = 18;
                this.ApplyRendererMaterial(renderer);
                SimpleDodgeGame.SetTransformDiameter(fallbackObject.transform, renderer.sprite, this.cellSize * this.attackEffectScale);
                return fallbackObject;
            },
            /*SimpleDodgeGame.CreateAttackEffectObject end.*/

            /*SimpleDodgeGame.ApplyAttackEffectTint start.*/
            ApplyAttackEffectTint: function (effectObject, tint) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ApplyAttackEffectTint", this ); }

                var $t;
                if (UnityEngine.GameObject.op_Equality(effectObject, null)) {
                    return;
                }
                var renderers = effectObject.GetComponentsInChildren(UnityEngine.SpriteRenderer, true);
                $t = Bridge.getEnumerator(renderers);
                try {
                    while ($t.moveNext()) {
                        var renderer = $t.Current;
                        if (!(UnityEngine.Component.op_Equality(renderer, null))) {
                            renderer.color = pc.Color.lerp( renderer.color, tint, 0.8 );
                            renderer.sortingOrder = UnityEngine.Mathf.Max(renderer.sortingOrder, 18);
                            this.ApplyRendererMaterial(renderer);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*SimpleDodgeGame.ApplyAttackEffectTint end.*/

            /*SimpleDodgeGame.AnimateAttackEffect start.*/
            AnimateAttackEffect: function (attackObject, from, to) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#AnimateAttackEffect", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    duration,
                    elapsed,
                    attackTransform,
                    t,
                    eased,
                    linear,
                    arcOffset,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (UnityEngine.GameObject.op_Equality(attackObject, null)) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    duration = UnityEngine.Mathf.Max(0.05, this.attackTravelSeconds);
                                        elapsed = 0.0;
                                        attackTransform = attackObject.transform;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( elapsed < duration ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 4: {
                                    if (UnityEngine.Component.op_Equality(attackTransform, null)) {
                                            $step = 5;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 5: {
                                    return false;
                                }
                                case 6: {
                                    elapsed += SimpleDodgeGame.GetSafeUnscaledDeltaTime();
                                        t = Math.max(0, Math.min(1, elapsed / duration));
                                        eased = t * t * (3.0 - 2.0 * t);
                                        linear = new pc.Vec3().lerpUnclamped( from, to, eased );
                                        arcOffset = this.attackArcHeight * Math.sin(t * 3.14159274);
                                        attackTransform.position = linear.$clone().add( new pc.Vec3( 0.0, arcOffset, 0.0 ) );
                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 8: {
                                    if (UnityEngine.Component.op_Inequality(attackTransform, null)) {
                                            attackTransform.position = to.$clone();
                                        }
                                        this.TriggerEnemyHitFeedback();
                                        if (UnityEngine.GameObject.op_Inequality(attackObject, null)) {
                                            UnityEngine.Object.Destroy(attackObject);
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SimpleDodgeGame.AnimateAttackEffect end.*/

            /*SimpleDodgeGame.TriggerEnemyHitFeedback start.*/
            TriggerEnemyHitFeedback: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#TriggerEnemyHitFeedback", this ); }

                if (!(UnityEngine.Component.op_Equality(this.enemyRenderer, null))) {
                    if (this.enemyHitFlashRoutine != null) {
                        this.StopCoroutine$2(this.enemyHitFlashRoutine);
                    }
                    this.enemyHitFlashRoutine = this.StartCoroutine$1(this.EnemyHitFlashRoutine());
                }
            },
            /*SimpleDodgeGame.TriggerEnemyHitFeedback end.*/

            /*SimpleDodgeGame.EnemyHitFlashRoutine start.*/
            EnemyHitFlashRoutine: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#EnemyHitFlashRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (!(UnityEngine.Component.op_Equality(this.enemyRenderer, null))) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    this.enemyRenderer.color = pc.Color.lerp( this.enemyBaseColor, new pc.Color( 1, 1, 1, 1 ), 0.55 );
                                        $enumerator.current = this.WaitForSecondsUnscaled(0.06);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    if (UnityEngine.Component.op_Inequality(this.enemyRenderer, null)) {
                                            this.enemyRenderer.color = this.enemyBaseColor.$clone();
                                        }
                                        this.enemyHitFlashRoutine = null;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SimpleDodgeGame.EnemyHitFlashRoutine end.*/

            /*SimpleDodgeGame.CollapseColumns start.*/
            CollapseColumns: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#CollapseColumns", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    writeY,
                    orb,
                    from,
                    to,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.moveBuffer.clear();
                                        for (var x = 0; x < this.columns; x = (x + 1) | 0) {
                                            writeY = 0;
                                            for (var readY = 0; readY < this.rows; readY = (readY + 1) | 0) {
                                                orb = this.board.get([x, readY]);
                                                if (orb != null) {
                                                    if (writeY !== readY) {
                                                        this.board.set([x, writeY], orb);
                                                        this.board.set([x, readY], null);
                                                        from = orb.transform.position.$clone();
                                                        to = this.CellToWorld(x, writeY);
                                                        this.moveBuffer.add(new SimpleDodgeGame.OrbMove.$ctor1(orb, from.$clone(), to.$clone()));
                                                    }
                                                    writeY = (writeY + 1) | 0;
                                                }
                                            }
                                        }
                                        $enumerator.current = this.AnimateMoves(this.moveBuffer, this.fallDurationSeconds);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SimpleDodgeGame.CollapseColumns end.*/

            /*SimpleDodgeGame.FillEmptyCells start.*/
            FillEmptyCells: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#FillEmptyCells", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    spawnOffset,
                    orbType,
                    spawnPosition,
                    orb,
                    settlePosition,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.moveBuffer.clear();
                                        for (var x = 0; x < this.columns; x = (x + 1) | 0) {
                                            spawnOffset = 0;
                                            for (var y = 0; y < this.rows; y = (y + 1) | 0) {
                                                if (this.board.get([x, y]) == null) {
                                                    orbType = this.GetRandomOrbType();
                                                    spawnPosition = this.CellToWorld(x, ((this.rows + spawnOffset) | 0));
                                                    orb = this.CreateOrb(orbType, spawnPosition.$clone());
                                                    this.board.set([x, y], orb);
                                                    settlePosition = this.CellToWorld(x, y);
                                                    this.moveBuffer.add(new SimpleDodgeGame.OrbMove.$ctor1(orb, spawnPosition.$clone(), settlePosition.$clone()));
                                                    spawnOffset = (spawnOffset + 1) | 0;
                                                }
                                            }
                                        }
                                        $enumerator.current = this.AnimateMoves(this.moveBuffer, this.fallDurationSeconds * 1.15);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SimpleDodgeGame.FillEmptyCells end.*/

            /*SimpleDodgeGame.HasAnyEmptyCell start.*/
            HasAnyEmptyCell: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#HasAnyEmptyCell", this ); }

                if (this.board == null) {
                    return false;
                }
                for (var x = 0; x < this.columns; x = (x + 1) | 0) {
                    for (var y = 0; y < this.rows; y = (y + 1) | 0) {
                        if (this.board.get([x, y]) == null) {
                            return true;
                        }
                    }
                }
                return false;
            },
            /*SimpleDodgeGame.HasAnyEmptyCell end.*/

            /*SimpleDodgeGame.AnimateMoves start.*/
            AnimateMoves: function (moves, duration) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#AnimateMoves", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    safeDuration,
                    elapsed,
                    t,
                    eased,
                    move,
                    move2,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (moves == null || moves.Count === 0) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    safeDuration = UnityEngine.Mathf.Max(0.01, duration);
                                        elapsed = 0.0;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( elapsed < safeDuration ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    elapsed += SimpleDodgeGame.GetSafeUnscaledDeltaTime();
                                        t = Math.max(0, Math.min(1, elapsed / safeDuration));
                                        eased = t * t * (3.0 - 2.0 * t);
                                        this.MarkResolveProgress();
                                        for (var i = 0; i < moves.Count; i = (i + 1) | 0) {
                                            move = moves.getItem(i).$clone();
                                            if (move.orb != null && !(UnityEngine.GameObject.op_Equality(move.orb.gameObject, null))) {
                                                move.orb.transform.position = new pc.Vec3().lerpUnclamped( move.from, move.to, eased );
                                            }
                                        }
                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    for (var j = 0; j < moves.Count; j = (j + 1) | 0) {
                                            move2 = moves.getItem(j).$clone();
                                            if (move2.orb != null && !(UnityEngine.GameObject.op_Equality(move2.orb.gameObject, null))) {
                                                move2.orb.transform.position = move2.to.$clone();
                                            }
                                        }
                                        this.MarkResolveProgress();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SimpleDodgeGame.AnimateMoves end.*/

            /*SimpleDodgeGame.RecoverFromResolveStallIfNeeded start.*/
            RecoverFromResolveStallIfNeeded: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#RecoverFromResolveStallIfNeeded", this ); }

                if (this.ShouldUseImmediateResolve() || !this.isResolving || this.resolveStartedAt < 0.0) {
                    return;
                }
                var timeout = UnityEngine.Mathf.Max(1.0, this.resolveStallTimeoutSeconds);
                if (!(UnityEngine.Time.unscaledTime - this.resolveStartedAt < timeout)) {
                    UnityEngine.Debug.LogWarning$1("Resolve routine stalled at stage '" + (this.resolveStage || "") + "' with emptyCells=" + this.CountEmptyCells() + ". Attempting recovery.");
                    this.StopAllCoroutines();
                    this.isResolving = false;
                    this.isDragging = false;
                    this.resolveStartedAt = -1.0;
                    this.resolveStage = "idle";
                    this.resolveRecoveryAttempts = (this.resolveRecoveryAttempts + 1) | 0;
                    this.FillAnyEmptyCellsImmediate();
                    if (this.resolveRecoveryAttempts > 2) {
                        UnityEngine.Debug.LogWarning$1("Resolve recovery exceeded retry limit. Resetting round.");
                        this.ResetRound();
                    } else {
                        this.TriggerResolve();
                    }
                }
            },
            /*SimpleDodgeGame.RecoverFromResolveStallIfNeeded end.*/

            /*SimpleDodgeGame.FillAnyEmptyCellsImmediate start.*/
            FillAnyEmptyCellsImmediate: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#FillAnyEmptyCellsImmediate", this ); }

                if (this.board == null) {
                    return;
                }
                for (var x = 0; x < this.columns; x = (x + 1) | 0) {
                    for (var y = 0; y < this.rows; y = (y + 1) | 0) {
                        if (this.board.get([x, y]) == null) {
                            var orbType = this.GetRandomOrbType();
                            this.board.set([x, y], this.CreateOrb(orbType, this.CellToWorld(x, y)));
                        }
                    }
                }
            },
            /*SimpleDodgeGame.FillAnyEmptyCellsImmediate end.*/

            /*SimpleDodgeGame.BuildCollapseMoves start.*/
            BuildCollapseMoves: function (targetMoves) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#BuildCollapseMoves", this ); }

                targetMoves.clear();
                for (var x = 0; x < this.columns; x = (x + 1) | 0) {
                    var writeY = 0;
                    for (var readY = 0; readY < this.rows; readY = (readY + 1) | 0) {
                        var orb = this.board.get([x, readY]);
                        if (orb != null) {
                            if (writeY !== readY) {
                                this.board.set([x, writeY], orb);
                                this.board.set([x, readY], null);
                                var from = orb.transform.position.$clone();
                                var to = this.CellToWorld(x, writeY);
                                targetMoves.add(new SimpleDodgeGame.OrbMove.$ctor1(orb, from.$clone(), to.$clone()));
                            }
                            writeY = (writeY + 1) | 0;
                        }
                    }
                }
                return targetMoves.Count;
            },
            /*SimpleDodgeGame.BuildCollapseMoves end.*/

            /*SimpleDodgeGame.BuildFillMoves start.*/
            BuildFillMoves: function (targetMoves) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#BuildFillMoves", this ); }

                targetMoves.clear();
                for (var x = 0; x < this.columns; x = (x + 1) | 0) {
                    var spawnOffset = 0;
                    for (var y = 0; y < this.rows; y = (y + 1) | 0) {
                        if (this.board.get([x, y]) == null) {
                            var orbType = this.GetRandomOrbType();
                            var spawnPosition = this.CellToWorld(x, ((this.rows + spawnOffset) | 0));
                            var orb = this.CreateOrb(orbType, spawnPosition.$clone());
                            this.board.set([x, y], orb);
                            var settlePosition = this.CellToWorld(x, y);
                            targetMoves.add(new SimpleDodgeGame.OrbMove.$ctor1(orb, spawnPosition.$clone(), settlePosition.$clone()));
                            spawnOffset = (spawnOffset + 1) | 0;
                        }
                    }
                }
                return targetMoves.Count;
            },
            /*SimpleDodgeGame.BuildFillMoves end.*/

            /*SimpleDodgeGame.StartImmediateResolve start.*/
            StartImmediateResolve: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#StartImmediateResolve", this ); }

                if (!this.isResolving && !this.roundEnded) {
                    this.isResolving = true;
                    this.ResetImmediateResolveState();
                    this.resolveStage = "collect";
                    this.MarkResolveProgress();
                    this.EvaluateImmediateResolveStep();
                }
            },
            /*SimpleDodgeGame.StartImmediateResolve end.*/

            /*SimpleDodgeGame.UpdateImmediateResolve start.*/
            UpdateImmediateResolve: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#UpdateImmediateResolve", this ); }

                if (!this.isResolving) {
                    return;
                }
                var dt = SimpleDodgeGame.GetSafeUnscaledDeltaTime();
                switch (this.immediateResolvePhase) {
                    case SimpleDodgeGame.ImmediateResolvePhase.ClearDelay: 
                        this.immediatePhaseTimer -= dt;
                        this.MarkResolveProgress();
                        if (this.immediatePhaseTimer <= 0.0) {
                            this.BeginImmediateCollapsePhase();
                        }
                        break;
                    case SimpleDodgeGame.ImmediateResolvePhase.CollapseAnim: 
                    case SimpleDodgeGame.ImmediateResolvePhase.FillAnim: 
                        this.UpdateImmediateMoveAnimation(dt);
                        break;
                    default: 
                        this.EvaluateImmediateResolveStep();
                        break;
                }
            },
            /*SimpleDodgeGame.UpdateImmediateResolve end.*/

            /*SimpleDodgeGame.EvaluateImmediateResolveStep start.*/
            EvaluateImmediateResolveStep: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#EvaluateImmediateResolveStep", this ); }

                if (!this.isResolving || this.roundEnded) {
                    return;
                }
                this.resolveStage = "collect";
                this.MarkResolveProgress();
                var matchedCells = { };
                var combos = this.CollectMatches(matchedCells);
                if (combos <= 0 || matchedCells.v.Count === 0) {
                    if (this.HasAnyEmptyCell()) {
                        this.BeginImmediateFillPhase();
                    } else {
                        this.FinishImmediateResolve();
                    }
                    return;
                }
                this.immediateTotalMoveCombos = (this.immediateTotalMoveCombos + combos) | 0;
                var removed = matchedCells.v.Count;
                this.score = (this.score + (this.CalculateScoreGain(removed, combos, this.immediateTotalMoveCombos))) | 0;
                this.RemoveMatchedCells(matchedCells.v);
                if (this.clearDelaySeconds > 0.0) {
                    this.resolveStage = "clear-delay";
                    this.immediateResolvePhase = SimpleDodgeGame.ImmediateResolvePhase.ClearDelay;
                    this.immediatePhaseTimer = this.clearDelaySeconds;
                } else {
                    this.BeginImmediateCollapsePhase();
                }
            },
            /*SimpleDodgeGame.EvaluateImmediateResolveStep end.*/

            /*SimpleDodgeGame.BeginImmediateCollapsePhase start.*/
            BeginImmediateCollapsePhase: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#BeginImmediateCollapsePhase", this ); }

                this.resolveStage = "collapse";
                var moveCount = this.BuildCollapseMoves(this.moveBuffer);
                if (moveCount <= 0) {
                    this.BeginImmediateFillPhase();
                } else {
                    this.StartImmediateMoveAnimation(SimpleDodgeGame.ImmediateResolvePhase.CollapseAnim, this.fallDurationSeconds);
                }
            },
            /*SimpleDodgeGame.BeginImmediateCollapsePhase end.*/

            /*SimpleDodgeGame.BeginImmediateFillPhase start.*/
            BeginImmediateFillPhase: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#BeginImmediateFillPhase", this ); }

                this.resolveStage = "fill";
                var moveCount = this.BuildFillMoves(this.moveBuffer);
                if (moveCount <= 0) {
                    this.EvaluateImmediateResolveStep();
                } else {
                    this.StartImmediateMoveAnimation(SimpleDodgeGame.ImmediateResolvePhase.FillAnim, this.fallDurationSeconds * 1.15);
                }
            },
            /*SimpleDodgeGame.BeginImmediateFillPhase end.*/

            /*SimpleDodgeGame.StartImmediateMoveAnimation start.*/
            StartImmediateMoveAnimation: function (phase, duration) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#StartImmediateMoveAnimation", this ); }

                this.immediateResolvePhase = phase;
                this.immediatePhaseTimer = 0.0;
                this.immediateMoveDuration = UnityEngine.Mathf.Max(0.01, duration);
                this.MarkResolveProgress();
            },
            /*SimpleDodgeGame.StartImmediateMoveAnimation end.*/

            /*SimpleDodgeGame.UpdateImmediateMoveAnimation start.*/
            UpdateImmediateMoveAnimation: function (dt) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#UpdateImmediateMoveAnimation", this ); }

                this.immediatePhaseTimer += UnityEngine.Mathf.Max(0.0, dt);
                var t = Math.max(0, Math.min(1, this.immediatePhaseTimer / this.immediateMoveDuration));
                var eased = t * t * (3.0 - 2.0 * t);
                for (var j = 0; j < this.moveBuffer.Count; j = (j + 1) | 0) {
                    var move = this.moveBuffer.getItem(j).$clone();
                    if (move.orb != null && !(UnityEngine.GameObject.op_Equality(move.orb.gameObject, null))) {
                        move.orb.transform.position = new pc.Vec3().lerpUnclamped( move.from, move.to, eased );
                    }
                }
                this.MarkResolveProgress();
                if (t < 1.0) {
                    return;
                }
                for (var i = 0; i < this.moveBuffer.Count; i = (i + 1) | 0) {
                    var move2 = this.moveBuffer.getItem(i).$clone();
                    if (move2.orb != null && !(UnityEngine.GameObject.op_Equality(move2.orb.gameObject, null))) {
                        move2.orb.transform.position = move2.to.$clone();
                    }
                }
                var completedPhase = this.immediateResolvePhase;
                this.immediateResolvePhase = SimpleDodgeGame.ImmediateResolvePhase.Idle;
                if (completedPhase === SimpleDodgeGame.ImmediateResolvePhase.CollapseAnim) {
                    this.BeginImmediateFillPhase();
                } else {
                    this.EvaluateImmediateResolveStep();
                }
            },
            /*SimpleDodgeGame.UpdateImmediateMoveAnimation end.*/

            /*SimpleDodgeGame.FinishImmediateResolve start.*/
            FinishImmediateResolve: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#FinishImmediateResolve", this ); }

                if (this.HasAnyEmptyCell()) {
                    this.FillAnyEmptyCellsImmediate();
                }
                this.lastMoveCombos = this.immediateTotalMoveCombos;
                this.isResolving = false;
                this.resolveStartedAt = -1.0;
                this.resolveStage = "idle";
                this.resolveRecoveryAttempts = 0;
                this.ResetImmediateResolveState();
            },
            /*SimpleDodgeGame.FinishImmediateResolve end.*/

            /*SimpleDodgeGame.ResetImmediateResolveState start.*/
            ResetImmediateResolveState: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ResetImmediateResolveState", this ); }

                this.immediateResolvePhase = SimpleDodgeGame.ImmediateResolvePhase.Idle;
                this.immediatePhaseTimer = 0.0;
                this.immediateMoveDuration = 0.0;
                this.immediateTotalMoveCombos = 0;
                this.moveBuffer.clear();
            },
            /*SimpleDodgeGame.ResetImmediateResolveState end.*/

            /*SimpleDodgeGame.TriggerResolve start.*/
            TriggerResolve: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#TriggerResolve", this ); }

                if (this.ShouldUseImmediateResolve()) {
                    this.StartImmediateResolve();
                } else {
                    this.StartCoroutine$1(this.ResolveBoardRoutine());
                }
            },
            /*SimpleDodgeGame.TriggerResolve end.*/

            /*SimpleDodgeGame.ShouldUseImmediateResolve start.*/
            ShouldUseImmediateResolve: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ShouldUseImmediateResolve", this ); }

                return true;
            },
            /*SimpleDodgeGame.ShouldUseImmediateResolve end.*/

            /*SimpleDodgeGame.CountEmptyCells start.*/
            CountEmptyCells: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#CountEmptyCells", this ); }

                if (this.board == null) {
                    return 0;
                }
                var count = 0;
                for (var x = 0; x < this.columns; x = (x + 1) | 0) {
                    for (var y = 0; y < this.rows; y = (y + 1) | 0) {
                        if (this.board.get([x, y]) == null) {
                            count = (count + 1) | 0;
                        }
                    }
                }
                return count;
            },
            /*SimpleDodgeGame.CountEmptyCells end.*/

            /*SimpleDodgeGame.CollectMatches start.*/
            CollectMatches: function (matchedCells) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#CollectMatches", this ); }

                var $t, $t1, $t2, $t3;
                this.EnsureMatchBuffers();
                SimpleDodgeGame.ClearBoolGrid(this.markedCellsBuffer);
                var marked = this.markedCellsBuffer;
                for (var y = 0; y < this.rows; y = (y + 1) | 0) {
                    var streakType = -1;
                    var streakStart = 0;
                    var streakLength = 0;
                    for (var x = 0; x < this.columns; x = (x + 1) | 0) {
                        var type = ($t = (($t1 = this.board.get([x, y])) != null ? $t1.type : null), $t != null ? $t : (-1));
                        if (type >= 0 && type === streakType) {
                            streakLength = (streakLength + 1) | 0;
                            continue;
                        }
                        if (streakLength >= 3) {
                            for (var markX = streakStart; markX < ((streakStart + streakLength) | 0); markX = (markX + 1) | 0) {
                                marked.set([markX, y], true);
                            }
                        }
                        streakType = type;
                        streakStart = x;
                        streakLength = ((type >= 0) ? 1 : 0);
                    }
                    if (streakLength >= 3) {
                        for (var markX2 = streakStart; markX2 < ((streakStart + streakLength) | 0); markX2 = (markX2 + 1) | 0) {
                            marked.set([markX2, y], true);
                        }
                    }
                }
                for (var x2 = 0; x2 < this.columns; x2 = (x2 + 1) | 0) {
                    var streakType2 = -1;
                    var streakStart2 = 0;
                    var streakLength2 = 0;
                    for (var y2 = 0; y2 < this.rows; y2 = (y2 + 1) | 0) {
                        var type2 = ($t2 = (($t3 = this.board.get([x2, y2])) != null ? $t3.type : null), $t2 != null ? $t2 : (-1));
                        if (type2 >= 0 && type2 === streakType2) {
                            streakLength2 = (streakLength2 + 1) | 0;
                            continue;
                        }
                        if (streakLength2 >= 3) {
                            for (var markY = streakStart2; markY < ((streakStart2 + streakLength2) | 0); markY = (markY + 1) | 0) {
                                marked.set([x2, markY], true);
                            }
                        }
                        streakType2 = type2;
                        streakStart2 = y2;
                        streakLength2 = ((type2 >= 0) ? 1 : 0);
                    }
                    if (streakLength2 >= 3) {
                        for (var markY2 = streakStart2; markY2 < ((streakStart2 + streakLength2) | 0); markY2 = (markY2 + 1) | 0) {
                            marked.set([x2, markY2], true);
                        }
                    }
                }
                matchedCells.v = this.matchedCellsBuffer;
                matchedCells.v.clear();
                for (var x3 = 0; x3 < this.columns; x3 = (x3 + 1) | 0) {
                    for (var y3 = 0; y3 < this.rows; y3 = (y3 + 1) | 0) {
                        if (marked.get([x3, y3])) {
                            matchedCells.v.add(new UnityEngine.Vector2Int.$ctor1(x3, y3));
                        }
                    }
                }
                if (matchedCells.v.Count === 0) {
                    return 0;
                }
                var combos = 0;
                SimpleDodgeGame.ClearBoolGrid(this.visitedCellsBuffer);
                var visited = this.visitedCellsBuffer;
                var stack = this.floodFillStackBuffer;
                stack.clear();
                for (var x4 = 0; x4 < this.columns; x4 = (x4 + 1) | 0) {
                    for (var y4 = 0; y4 < this.rows; y4 = (y4 + 1) | 0) {
                        if (!marked.get([x4, y4]) || visited.get([x4, y4]) || this.board.get([x4, y4]) == null) {
                            continue;
                        }
                        combos = (combos + 1) | 0;
                        var type3 = this.board.get([x4, y4]).type;
                        stack.clear();
                        stack.add(new UnityEngine.Vector2Int.$ctor1(x4, y4));
                        visited.set([x4, y4], true);
                        while (stack.Count > 0) {
                            var lastIndex = (stack.Count - 1) | 0;
                            var cell = stack.getItem(lastIndex).$clone();
                            stack.removeAt(lastIndex);
                            for (var i = 0; i < SimpleDodgeGame.NeighborOffsets.length; i = (i + 1) | 0) {
                                var next = UnityEngine.Vector2Int.op_Addition(cell.$clone(), SimpleDodgeGame.NeighborOffsets[i].$clone());
                                if (this.IsInsideBoard(next.$clone()) && !visited.get([next.x, next.y]) && marked.get([next.x, next.y])) {
                                    var orb = this.board.get([next.x, next.y]);
                                    if (orb != null && orb.type === type3) {
                                        visited.set([next.x, next.y], true);
                                        stack.add(next.$clone());
                                    }
                                }
                            }
                        }
                    }
                }
                return combos;
            },
            /*SimpleDodgeGame.CollectMatches end.*/

            /*SimpleDodgeGame.CalculateScoreGain start.*/
            CalculateScoreGain: function (removedCount, stepCombos, totalCombos) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#CalculateScoreGain", this ); }

                var comboBonus = (1 + UnityEngine.Mathf.Max(0, ((stepCombos - 1) | 0))) | 0;
                var chainBonus = (1 + UnityEngine.Mathf.Max(0, ((totalCombos - 1) | 0))) | 0;
                return Bridge.Int.mul(Bridge.Int.mul(Bridge.Int.mul(removedCount, UnityEngine.Mathf.Max(1, this.baseScorePerOrb)), comboBonus), chainBonus);
            },
            /*SimpleDodgeGame.CalculateScoreGain end.*/

            /*SimpleDodgeGame.BuildInitialBoard start.*/
            BuildInitialBoard: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#BuildInitialBoard", this ); }

                for (var x = 0; x < this.columns; x = (x + 1) | 0) {
                    for (var y = 0; y < this.rows; y = (y + 1) | 0) {
                        var type = this.GetInitialOrbType(x, y);
                        this.board.set([x, y], this.CreateOrb(type, this.CellToWorld(x, y)));
                    }
                }
            },
            /*SimpleDodgeGame.BuildInitialBoard end.*/

            /*SimpleDodgeGame.ClearBoard start.*/
            ClearBoard: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ClearBoard", this ); }

                this.ClearAttackEffects();
                if (this.board == null) {
                    return;
                }
                for (var x = 0; x < this.columns; x = (x + 1) | 0) {
                    for (var y = 0; y < this.rows; y = (y + 1) | 0) {
                        var orb = this.board.get([x, y]);
                        if (orb != null && UnityEngine.GameObject.op_Inequality(orb.gameObject, null)) {
                            UnityEngine.Object.Destroy(orb.gameObject);
                        }
                        this.board.set([x, y], null);
                    }
                }
            },
            /*SimpleDodgeGame.ClearBoard end.*/

            /*SimpleDodgeGame.ClearAttackEffects start.*/
            ClearAttackEffects: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ClearAttackEffects", this ); }

                if (UnityEngine.Component.op_Equality(this.attackEffectsRoot, null)) {
                    return;
                }
                for (var i = (this.attackEffectsRoot.childCount - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    var child = this.attackEffectsRoot.GetChild(i);
                    if (UnityEngine.Component.op_Inequality(child, null)) {
                        UnityEngine.Object.Destroy(child.gameObject);
                    }
                }
            },
            /*SimpleDodgeGame.ClearAttackEffects end.*/

            /*SimpleDodgeGame.CreateOrb start.*/
            CreateOrb: function (type, worldPosition) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#CreateOrb", this ); }

                var orbObject = new UnityEngine.GameObject.$ctor2("Orb");
                orbObject.transform.SetParent(this.boardRoot, true);
                orbObject.transform.position = worldPosition.$clone();
                var renderer = orbObject.AddComponent(UnityEngine.SpriteRenderer);
                var orb = new SimpleDodgeGame.Orb(type, orbObject, renderer);
                this.ApplyOrbVisuals(orb);
                return orb;
            },
            /*SimpleDodgeGame.CreateOrb end.*/

            /*SimpleDodgeGame.SwapCells start.*/
            SwapCells: function (a, b) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#SwapCells", this ); }

                var first = this.board.get([a.x, a.y]);
                var second = this.board.get([b.x, b.y]);
                this.board.set([a.x, a.y], second);
                this.board.set([b.x, b.y], first);
                if (this.board.get([a.x, a.y]) != null) {
                    this.board.get([a.x, a.y]).transform.position = this.CellToWorld(a.x, a.y);
                }
                if (this.board.get([b.x, b.y]) != null) {
                    this.board.get([b.x, b.y]).transform.position = this.CellToWorld(b.x, b.y);
                }
            },
            /*SimpleDodgeGame.SwapCells end.*/

            /*SimpleDodgeGame.GetInitialOrbType start.*/
            GetInitialOrbType: function (x, y) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetInitialOrbType", this ); }

                var colorCount = this.GetOrbColorCount();
                var candidate = UnityEngine.Random.Range(0, colorCount);
                for (var attempts = 0; attempts < 16; attempts = (attempts + 1) | 0) {
                    var horizontalMatch = x >= 2 && this.board.get([((x - 1) | 0), y]) != null && this.board.get([((x - 2) | 0), y]) != null && this.board.get([((x - 1) | 0), y]).type === candidate && this.board.get([((x - 2) | 0), y]).type === candidate;
                    var verticalMatch = y >= 2 && this.board.get([x, ((y - 1) | 0)]) != null && this.board.get([x, ((y - 2) | 0)]) != null && this.board.get([x, ((y - 1) | 0)]).type === candidate && this.board.get([x, ((y - 2) | 0)]).type === candidate;
                    if (!horizontalMatch && !verticalMatch) {
                        return candidate;
                    }
                    candidate = UnityEngine.Random.Range(0, colorCount);
                }
                return candidate;
            },
            /*SimpleDodgeGame.GetInitialOrbType end.*/

            /*SimpleDodgeGame.GetRandomOrbType start.*/
            GetRandomOrbType: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetRandomOrbType", this ); }

                return UnityEngine.Random.Range(0, this.GetOrbColorCount());
            },
            /*SimpleDodgeGame.GetRandomOrbType end.*/

            /*SimpleDodgeGame.GetOrbColorCount start.*/
            GetOrbColorCount: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetOrbColorCount", this ); }

                if (this.orbColors == null || this.orbColors.length === 0) {
                    return 1;
                }
                return this.orbColors.length;
            },
            /*SimpleDodgeGame.GetOrbColorCount end.*/

            /*SimpleDodgeGame.GetOrbColor start.*/
            GetOrbColor: function (type) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetOrbColor", this ); }

                if (this.orbColors == null || this.orbColors.length === 0) {
                    return new pc.Color( 1, 1, 1, 1 );
                }
                var safeIndex = Math.abs(type) % this.orbColors.length;
                return this.orbColors[safeIndex].$clone();
            },
            /*SimpleDodgeGame.GetOrbColor end.*/

            /*SimpleDodgeGame.CreateRuntimeVisuals start.*/
            CreateRuntimeVisuals: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#CreateRuntimeVisuals", this ); }

                if (UnityEngine.Component.op_Equality(this.backgroundTransform, null)) {
                    var backgroundObject = new UnityEngine.GameObject.$ctor2("GameplayBackground");
                    this.backgroundTransform = backgroundObject.transform;
                    this.backgroundRenderer = backgroundObject.AddComponent(UnityEngine.SpriteRenderer);
                    this.backgroundRenderer.sortingOrder = -30;
                }
                if (UnityEngine.Component.op_Equality(this.boardRoot, null)) {
                    var boardRootObject = new UnityEngine.GameObject.$ctor2("PuzzleBoardRoot");
                    this.boardRoot = boardRootObject.transform;
                }
                if (UnityEngine.Component.op_Equality(this.attackEffectsRoot, null)) {
                    var attackEffectsObject = new UnityEngine.GameObject.$ctor2("AttackEffects");
                    attackEffectsObject.transform.SetParent(this.boardRoot, false);
                    this.attackEffectsRoot = attackEffectsObject.transform;
                }
                if (UnityEngine.Component.op_Equality(this.boardFrameTransform, null)) {
                    var frameObject = new UnityEngine.GameObject.$ctor2("PuzzleBoardFrame");
                    frameObject.transform.SetParent(this.boardRoot, false);
                    this.boardFrameTransform = frameObject.transform;
                    this.boardFrameRenderer = frameObject.AddComponent(UnityEngine.SpriteRenderer);
                    this.boardFrameRenderer.sortingOrder = -15;
                }
                if (UnityEngine.Component.op_Equality(this.boardOutlineTransform, null)) {
                    var outlineObject = new UnityEngine.GameObject.$ctor2("PuzzleBoardOutline");
                    outlineObject.transform.SetParent(this.boardRoot, false);
                    this.boardOutlineTransform = outlineObject.transform;
                    this.boardOutlineRenderer = outlineObject.AddComponent(UnityEngine.SpriteRenderer);
                    this.boardOutlineRenderer.sortingOrder = -14;
                }
                if (UnityEngine.Component.op_Equality(this.enemyTransform, null)) {
                    var enemyObject = new UnityEngine.GameObject.$ctor2("EnemyDisplay");
                    enemyObject.transform.SetParent(this.boardRoot, false);
                    this.enemyTransform = enemyObject.transform;
                    this.enemyRenderer = enemyObject.AddComponent(UnityEngine.SpriteRenderer);
                    this.enemyRenderer.sortingOrder = 16;
                }
                this.ApplyBackgroundVisuals();
                this.ApplyBoardFrameVisuals();
                this.ApplyEnemyVisuals();
            },
            /*SimpleDodgeGame.CreateRuntimeVisuals end.*/

            /*SimpleDodgeGame.ApplyBackgroundVisuals start.*/
            ApplyBackgroundVisuals: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ApplyBackgroundVisuals", this ); }

                if (!(UnityEngine.Component.op_Equality(this.backgroundRenderer, null))) {
                    this.backgroundRenderer.sprite = this.GetBoardSprite();
                    this.backgroundRenderer.color = this.backgroundColor.$clone();
                    this.ApplyRendererMaterial(this.backgroundRenderer);
                    this.UpdateBackgroundTransform();
                    if (UnityEngine.Component.op_Inequality(this.gameplayCamera, null)) {
                        this.gameplayCamera.backgroundColor = this.backgroundColor.$clone();
                    }
                }
            },
            /*SimpleDodgeGame.ApplyBackgroundVisuals end.*/

            /*SimpleDodgeGame.ApplyBoardFrameVisuals start.*/
            ApplyBoardFrameVisuals: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ApplyBoardFrameVisuals", this ); }

                if (UnityEngine.Component.op_Inequality(this.boardFrameRenderer, null)) {
                    this.boardFrameRenderer.sprite = this.GetBoardSprite();
                    this.boardFrameRenderer.color = this.boardColor.$clone();
                    this.ApplyRendererMaterial(this.boardFrameRenderer);
                }
                if (UnityEngine.Component.op_Inequality(this.boardOutlineRenderer, null)) {
                    this.boardOutlineRenderer.sprite = this.GetBoardSprite();
                    this.boardOutlineRenderer.color = this.boardOutlineColor.$clone();
                    this.ApplyRendererMaterial(this.boardOutlineRenderer);
                }
                this.UpdateBoardFrameTransform();
            },
            /*SimpleDodgeGame.ApplyBoardFrameVisuals end.*/

            /*SimpleDodgeGame.ApplyEnemyVisuals start.*/
            ApplyEnemyVisuals: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ApplyEnemyVisuals", this ); }

                if (!(UnityEngine.Component.op_Equality(this.enemyRenderer, null))) {
                    var configuredSprite = ((this.enemySprite != null) ? this.enemySprite : this.GetAnyConfiguredOrbSprite());
                    this.enemyRenderer.sprite = this.PrepareSpriteForRuntime((configuredSprite != null) ? configuredSprite : SimpleDodgeGame.GetGeneratedFallbackSprite());
                    this.enemyBaseColor = this.enemyTint.$clone();
                    this.enemyRenderer.color = this.enemyBaseColor.$clone();
                    this.enemyRenderer.sortingOrder = 16;
                    this.ApplyRendererMaterial(this.enemyRenderer);
                    this.UpdateEnemyTransform();
                }
            },
            /*SimpleDodgeGame.ApplyEnemyVisuals end.*/

            /*SimpleDodgeGame.ApplyOrbVisuals start.*/
            ApplyOrbVisuals: function (orb) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ApplyOrbVisuals", this ); }

                if (orb != null && !(UnityEngine.Component.op_Equality(orb.renderer, null)) && !(UnityEngine.Component.op_Equality(orb.transform, null))) {
                    var orbSpriteForType = this.GetOrbSpriteForType(orb.type);
                    orb.renderer.sprite = orbSpriteForType;
                    orb.renderer.color = this.GetOrbColor(orb.type);
                    orb.renderer.sortingOrder = 10;
                    this.ApplyRendererMaterial(orb.renderer);
                    SimpleDodgeGame.SetTransformDiameter(orb.transform, orbSpriteForType, this.cellSize * this.orbScale);
                }
            },
            /*SimpleDodgeGame.ApplyOrbVisuals end.*/

            /*SimpleDodgeGame.GetOrbSpriteForType start.*/
            GetOrbSpriteForType: function (type) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetOrbSpriteForType", this ); }

                if (this.orbSprites != null && this.orbSprites.length !== 0) {
                    var safeIndex = Math.abs(type) % this.orbSprites.length;
                    var configuredSprite = this.orbSprites[safeIndex];
                    if (configuredSprite != null) {
                        return this.PrepareSpriteForRuntime(configuredSprite);
                    }
                }
                var configuredFallback = this.GetAnyConfiguredOrbSprite();
                return this.PrepareSpriteForRuntime((configuredFallback != null) ? configuredFallback : SimpleDodgeGame.GetGeneratedFallbackSprite());
            },
            /*SimpleDodgeGame.GetOrbSpriteForType end.*/

            /*SimpleDodgeGame.GetBoardSprite start.*/
            GetBoardSprite: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetBoardSprite", this ); }

                return SimpleDodgeGame.GetGeneratedFallbackSprite();
            },
            /*SimpleDodgeGame.GetBoardSprite end.*/

            /*SimpleDodgeGame.GetAnyConfiguredOrbSprite start.*/
            GetAnyConfiguredOrbSprite: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetAnyConfiguredOrbSprite", this ); }

                if (this.orbSprites == null) {
                    return null;
                }
                for (var i = 0; i < this.orbSprites.length; i = (i + 1) | 0) {
                    if (this.orbSprites[i] != null) {
                        return this.orbSprites[i];
                    }
                }
                return null;
            },
            /*SimpleDodgeGame.GetAnyConfiguredOrbSprite end.*/

            /*SimpleDodgeGame.PrepareSpriteForRuntime start.*/
            PrepareSpriteForRuntime: function (sourceSprite) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#PrepareSpriteForRuntime", this ); }

                if (sourceSprite == null) {
                    return SimpleDodgeGame.GetGeneratedFallbackSprite();
                }
                return sourceSprite;
            },
            /*SimpleDodgeGame.PrepareSpriteForRuntime end.*/

            /*SimpleDodgeGame.WarnIfMissingSpriteSetup start.*/
            WarnIfMissingSpriteSetup: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#WarnIfMissingSpriteSetup", this ); }

                if (!this.hasLoggedMissingSpriteConfig && !(this.GetAnyConfiguredOrbSprite() != null)) {
                    this.hasLoggedMissingSpriteConfig = true;
                    UnityEngine.Debug.LogWarning$1("SimpleDodgeGame has no configured orb/board Sprite. Playworks visibility may fail if runtime sprite generation is unsupported.");
                }
            },
            /*SimpleDodgeGame.WarnIfMissingSpriteSetup end.*/

            /*SimpleDodgeGame.CreateRuntimeHud start.*/
            CreateRuntimeHud: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#CreateRuntimeHud", this ); }

                if (!(UnityEngine.Component.op_Inequality(this.hudRootTransform, null))) {
                    var canvasObject = new UnityEngine.GameObject.$ctor2("RuntimeHud");
                    this.hudRootTransform = canvasObject.transform;
                    var canvas = canvasObject.AddComponent(UnityEngine.Canvas);
                    canvas.renderMode = UnityEngine.RenderMode.ScreenSpaceOverlay;
                    canvasObject.AddComponent(UnityEngine.UI.CanvasScaler);
                    canvasObject.AddComponent(UnityEngine.UI.GraphicRaycaster);
                    var font = this.GetHudFont();
                    this.scoreText = SimpleDodgeGame.CreateHudText(canvasObject.transform, "ScoreText", font, 28, new pc.Vec2( 0.0, 1.0 ), new pc.Vec2( 0.0, 1.0 ), new pc.Vec2( 0.0, 1.0 ), new pc.Vec2( 20.0, -16.0 ), new pc.Vec2( 460.0, 42.0 ), UnityEngine.TextAnchor.MiddleLeft);
                    this.timeText = SimpleDodgeGame.CreateHudText(canvasObject.transform, "TimeText", font, 28, new pc.Vec2( 0.0, 1.0 ), new pc.Vec2( 0.0, 1.0 ), new pc.Vec2( 0.0, 1.0 ), new pc.Vec2( 20.0, -54.0 ), new pc.Vec2( 460.0, 42.0 ), UnityEngine.TextAnchor.MiddleLeft);
                    this.comboText = SimpleDodgeGame.CreateHudText(canvasObject.transform, "ComboText", font, 28, new pc.Vec2( 0.0, 1.0 ), new pc.Vec2( 0.0, 1.0 ), new pc.Vec2( 0.0, 1.0 ), new pc.Vec2( 20.0, -92.0 ), new pc.Vec2( 560.0, 42.0 ), UnityEngine.TextAnchor.MiddleLeft);
                    this.resultText = SimpleDodgeGame.CreateHudText(canvasObject.transform, "ResultText", font, 34, new pc.Vec2( 0.5, 0.5 ), new pc.Vec2( 0.5, 0.5 ), new pc.Vec2( 0.5, 0.5 ), pc.Vec2.ZERO.clone(), new pc.Vec2( 700.0, 220.0 ), UnityEngine.TextAnchor.MiddleCenter);
                    this.SetResultVisible(false);
                    this.UpdateHudTexts();
                }
            },
            /*SimpleDodgeGame.CreateRuntimeHud end.*/

            /*SimpleDodgeGame.UpdateHudTexts start.*/
            UpdateHudTexts: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#UpdateHudTexts", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.scoreText, null)) {
                    this.scoreText.text = "Score: " + this.score;
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.timeText, null)) {
                    this.timeText.text = "Time: " + (System.Single.format(this.timeRemaining, "0.0") || "");
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.comboText, null)) {
                    this.comboText.text = "Last Combo: x" + this.lastMoveCombos;
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.resultText, null) && this.roundEnded) {
                    this.resultText.text = "TIME UP\nScore: " + this.score + "\nTap / Click to install";
                }
            },
            /*SimpleDodgeGame.UpdateHudTexts end.*/

            /*SimpleDodgeGame.SetResultVisible start.*/
            SetResultVisible: function (visible) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#SetResultVisible", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.resultText, null)) {
                    this.resultText.enabled = visible;
                }
            },
            /*SimpleDodgeGame.SetResultVisible end.*/

            /*SimpleDodgeGame.GetHudFont start.*/
            GetHudFont: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetHudFont", this ); }

                var $t;
                if (this.hudFontOverride != null) {
                    return this.hudFontOverride;
                }
                var font = SimpleDodgeGame.TryLoadResourceFont("HudFont");
                if (font != null) {
                    return font;
                }
                var loadedFonts = UnityEngine.Resources.FindObjectsOfTypeAll(UnityEngine.Font);
                if (loadedFonts != null) {
                    $t = Bridge.getEnumerator(loadedFonts);
                    try {
                        while ($t.moveNext()) {
                            var candidate = $t.Current;
                            if (candidate != null) {
                                return candidate;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
                if (!this.hasLoggedMissingHudFont) {
                    this.hasLoggedMissingHudFont = true;
                    UnityEngine.Debug.LogWarning$1("Failed to load HUD font. Assign hudFontOverride or put Font at Assets/Resources/HudFont.ttf.");
                }
                return null;
            },
            /*SimpleDodgeGame.GetHudFont end.*/

            /*SimpleDodgeGame.UpdateLayout start.*/
            UpdateLayout: function (force) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#UpdateLayout", this ); }

                if (!(UnityEngine.Component.op_Equality(this.gameplayCamera, null)) && this.columns > 0 && this.rows > 0) {
                    var halfHeight = this.gameplayCamera.orthographicSize;
                    var halfWidth = halfHeight * this.gameplayCamera.aspect;
                    var cameraPosition = this.gameplayCamera.transform.position.$clone();
                    var safeBottom = cameraPosition.y - halfHeight + UnityEngine.Mathf.Max(0.0, this.boardBottomPadding);
                    var safeTop = cameraPosition.y + halfHeight - UnityEngine.Mathf.Max(0.5, this.boardTopPadding);
                    var availableHeight = UnityEngine.Mathf.Max(1.0, safeTop - safeBottom);
                    var availableWidth = UnityEngine.Mathf.Max(1.0, halfWidth * 2.0 - this.boardSidePadding * 2.0);
                    var newCellSize = UnityEngine.Mathf.Min(availableWidth / this.columns, availableHeight / this.rows);
                    newCellSize = UnityEngine.Mathf.Max(0.5, newCellSize);
                    var newBoardWidth = newCellSize * this.columns;
                    var newBoardHeight = newCellSize * this.rows;
                    var newLeft = cameraPosition.x - newBoardWidth * 0.5;
                    var newBottom = safeBottom + UnityEngine.Mathf.Max(0.0, (availableHeight - newBoardHeight) * 0.5);
                    if (force || !this.layoutInitialized || Math.abs(newCellSize - this.cellSize) > 0.0001 || Math.abs(newLeft - this.boardBottomLeft.x) > 0.0001 || Math.abs(newBottom - this.boardBottomLeft.y) > 0.0001) {
                        this.cellSize = newCellSize;
                        this.boardBottomLeft = new pc.Vec2( newLeft, newBottom );
                        this.boardWorldWidth = newBoardWidth;
                        this.boardWorldHeight = newBoardHeight;
                        this.layoutInitialized = true;
                        this.UpdateBackgroundTransform();
                        this.UpdateBoardFrameTransform();
                        this.RepositionBoardOrbs();
                        this.UpdateEnemyTransform();
                    }
                }
            },
            /*SimpleDodgeGame.UpdateLayout end.*/

            /*SimpleDodgeGame.RepositionBoardOrbs start.*/
            RepositionBoardOrbs: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#RepositionBoardOrbs", this ); }

                if (this.board == null) {
                    return;
                }
                for (var x = 0; x < this.columns; x = (x + 1) | 0) {
                    for (var y = 0; y < this.rows; y = (y + 1) | 0) {
                        var orb = this.board.get([x, y]);
                        if (orb != null && !(UnityEngine.GameObject.op_Equality(orb.gameObject, null))) {
                            orb.transform.position = this.CellToWorld(x, y);
                            SimpleDodgeGame.SetTransformDiameter(orb.transform, orb.renderer.sprite, this.cellSize * this.orbScale);
                        }
                    }
                }
            },
            /*SimpleDodgeGame.RepositionBoardOrbs end.*/

            /*SimpleDodgeGame.UpdateEnemyTransform start.*/
            UpdateEnemyTransform: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#UpdateEnemyTransform", this ); }

                if (!(UnityEngine.Component.op_Equality(this.enemyTransform, null)) && !(UnityEngine.Component.op_Equality(this.enemyRenderer, null)) && !(UnityEngine.Component.op_Equality(this.gameplayCamera, null)) && this.layoutInitialized) {
                    var enemyDiameter = UnityEngine.Mathf.Max(0.25, this.cellSize * this.enemySizeInCells);
                    SimpleDodgeGame.SetTransformDiameter(this.enemyTransform, this.enemyRenderer.sprite, enemyDiameter);
                    var boardTopY = this.boardBottomLeft.y + this.boardWorldHeight;
                    var desiredY = boardTopY + this.enemyTopMargin + enemyDiameter * 0.5;
                    var cameraTopY = this.gameplayCamera.transform.position.y + this.gameplayCamera.orthographicSize;
                    var clampedY = UnityEngine.Mathf.Min(desiredY, cameraTopY - enemyDiameter * 0.5 - 0.12);
                    var safeY = UnityEngine.Mathf.Max(boardTopY + enemyDiameter * 0.5, clampedY);
                    var centerX = this.boardBottomLeft.x + this.boardWorldWidth * 0.5;
                    this.enemyTransform.position = new pc.Vec3( centerX, safeY, this.gameplayZ + 0.003 );
                }
            },
            /*SimpleDodgeGame.UpdateEnemyTransform end.*/

            /*SimpleDodgeGame.UpdateBackgroundTransform start.*/
            UpdateBackgroundTransform: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#UpdateBackgroundTransform", this ); }

                if (!(UnityEngine.Component.op_Equality(this.backgroundTransform, null)) && !(UnityEngine.Component.op_Equality(this.backgroundRenderer, null)) && !(UnityEngine.Component.op_Equality(this.gameplayCamera, null))) {
                    var worldHeight = this.gameplayCamera.orthographicSize * 2.0;
                    var worldWidth = worldHeight * this.gameplayCamera.aspect;
                    var spriteSize = SimpleDodgeGame.GetSpriteWorldSize(this.backgroundRenderer.sprite);
                    var scaleX = worldWidth / spriteSize.x;
                    var scaleY = worldHeight / spriteSize.y;
                    this.backgroundTransform.position = new pc.Vec3( this.gameplayCamera.transform.position.x, this.gameplayCamera.transform.position.y, this.gameplayZ );
                    this.backgroundTransform.localScale = new pc.Vec3( scaleX, scaleY, 1.0 );
                }
            },
            /*SimpleDodgeGame.UpdateBackgroundTransform end.*/

            /*SimpleDodgeGame.UpdateBoardFrameTransform start.*/
            UpdateBoardFrameTransform: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#UpdateBoardFrameTransform", this ); }

                if (UnityEngine.Component.op_Inequality(this.boardFrameTransform, null) && UnityEngine.Component.op_Inequality(this.boardFrameRenderer, null)) {
                    this.boardFrameTransform.position = new pc.Vec3( this.boardBottomLeft.x + this.boardWorldWidth * 0.5, this.boardBottomLeft.y + this.boardWorldHeight * 0.5, this.gameplayZ );
                    SimpleDodgeGame.SetTransformSize(this.boardFrameTransform, this.boardFrameRenderer.sprite, this.boardWorldWidth * 1.02, this.boardWorldHeight * 1.02);
                }
                if (UnityEngine.Component.op_Inequality(this.boardOutlineTransform, null) && UnityEngine.Component.op_Inequality(this.boardOutlineRenderer, null)) {
                    this.boardOutlineTransform.position = new pc.Vec3( this.boardBottomLeft.x + this.boardWorldWidth * 0.5, this.boardBottomLeft.y + this.boardWorldHeight * 0.5, this.gameplayZ + 0.001 );
                    SimpleDodgeGame.SetTransformSize(this.boardOutlineTransform, this.boardOutlineRenderer.sprite, this.boardWorldWidth * 1.08, this.boardWorldHeight * 1.08);
                }
            },
            /*SimpleDodgeGame.UpdateBoardFrameTransform end.*/

            /*SimpleDodgeGame.CellToWorld start.*/
            CellToWorld: function (x, y) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#CellToWorld", this ); }

                return new pc.Vec3( this.boardBottomLeft.x + (x + 0.5) * this.cellSize, this.boardBottomLeft.y + (y + 0.5) * this.cellSize, this.gameplayZ );
            },
            /*SimpleDodgeGame.CellToWorld end.*/

            /*SimpleDodgeGame.TryWorldToCell start.*/
            TryWorldToCell: function (worldPosition, cell) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#TryWorldToCell", this ); }

                var localX = worldPosition.x - this.boardBottomLeft.x;
                var localY = worldPosition.y - this.boardBottomLeft.y;
                var x = Math.floor(localX / this.cellSize);
                var y = Math.floor(localY / this.cellSize);
                cell.v = new UnityEngine.Vector2Int.$ctor1(x, y);
                return this.IsInsideBoard(cell.v.$clone());
            },
            /*SimpleDodgeGame.TryWorldToCell end.*/

            /*SimpleDodgeGame.IsInsideBoard start.*/
            IsInsideBoard: function (cell) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#IsInsideBoard", this ); }

                return cell.x >= 0 && cell.x < this.columns && cell.y >= 0 && cell.y < this.rows;
            },
            /*SimpleDodgeGame.IsInsideBoard end.*/

            /*SimpleDodgeGame.TryGetPointerDownWorld start.*/
            TryGetPointerDownWorld: function (worldPosition) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#TryGetPointerDownWorld", this ); }

                if (UnityEngine.Input.touchCount > 0) {
                    for (var i = 0; i < UnityEngine.Input.touchCount; i = (i + 1) | 0) {
                        var touch = UnityEngine.Input.GetTouch(i);
                        if (touch.phase === UnityEngine.TouchPhase.Began) {
                            worldPosition.v = this.ScreenToWorld(touch.position.$clone());
                            return true;
                        }
                    }
                }
                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    worldPosition.v = this.ScreenToWorld(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone()));
                    return true;
                }
                worldPosition.v = pc.Vec3.ZERO.clone();
                return false;
            },
            /*SimpleDodgeGame.TryGetPointerDownWorld end.*/

            /*SimpleDodgeGame.TryGetPointerHeldWorld start.*/
            TryGetPointerHeldWorld: function (worldPosition) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#TryGetPointerHeldWorld", this ); }

                if (UnityEngine.Input.touchCount > 0) {
                    var touch = UnityEngine.Input.GetTouch(0);
                    if (touch.phase === UnityEngine.TouchPhase.Canceled || touch.phase === UnityEngine.TouchPhase.Ended) {
                        worldPosition.v = pc.Vec3.ZERO.clone();
                        return false;
                    }
                    worldPosition.v = this.ScreenToWorld(touch.position.$clone());
                    return true;
                }
                if (UnityEngine.Input.GetMouseButton(0)) {
                    worldPosition.v = this.ScreenToWorld(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone()));
                    return true;
                }
                worldPosition.v = pc.Vec3.ZERO.clone();
                return false;
            },
            /*SimpleDodgeGame.TryGetPointerHeldWorld end.*/

            /*SimpleDodgeGame.PointerPressedThisFrame start.*/
            PointerPressedThisFrame: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#PointerPressedThisFrame", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    return true;
                }
                for (var i = 0; i < UnityEngine.Input.touchCount; i = (i + 1) | 0) {
                    if (UnityEngine.Input.GetTouch(i).phase === UnityEngine.TouchPhase.Began) {
                        return true;
                    }
                }
                return false;
            },
            /*SimpleDodgeGame.PointerPressedThisFrame end.*/

            /*SimpleDodgeGame.PointerReleasedThisFrame start.*/
            PointerReleasedThisFrame: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#PointerReleasedThisFrame", this ); }

                if (UnityEngine.Input.GetMouseButtonUp(0)) {
                    return true;
                }
                for (var i = 0; i < UnityEngine.Input.touchCount; i = (i + 1) | 0) {
                    var phase = UnityEngine.Input.GetTouch(i).phase;
                    if (phase === UnityEngine.TouchPhase.Canceled || phase === UnityEngine.TouchPhase.Ended) {
                        return true;
                    }
                }
                return false;
            },
            /*SimpleDodgeGame.PointerReleasedThisFrame end.*/

            /*SimpleDodgeGame.ScreenToWorld start.*/
            ScreenToWorld: function (screenPosition) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ScreenToWorld", this ); }

                var screen = new pc.Vec3( screenPosition.x, screenPosition.y, this.pointerDepth );
                return this.gameplayCamera.ScreenToWorldPoint(screen);
            },
            /*SimpleDodgeGame.ScreenToWorld end.*/

            /*SimpleDodgeGame.ValidateConfig start.*/
            ValidateConfig: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ValidateConfig", this ); }

                this.columns = UnityEngine.Mathf.Max(3, this.columns);
                this.rows = UnityEngine.Mathf.Max(3, this.rows);
                this.roundDurationSeconds = UnityEngine.Mathf.Max(5.0, this.roundDurationSeconds);
                this.baseScorePerOrb = UnityEngine.Mathf.Max(1, this.baseScorePerOrb);
                this.orbScale = Math.max(0.6, Math.min(this.orbScale, 1.0));
                this.clearDelaySeconds = UnityEngine.Mathf.Max(0.0, this.clearDelaySeconds);
                this.fallDurationSeconds = UnityEngine.Mathf.Max(0.01, this.fallDurationSeconds);
                this.resolveStallTimeoutSeconds = UnityEngine.Mathf.Max(1.0, this.resolveStallTimeoutSeconds);
                this.enemySizeInCells = Math.max(0.8, Math.min(this.enemySizeInCells, 3.0));
                this.enemyTopMargin = UnityEngine.Mathf.Max(0.0, this.enemyTopMargin);
                this.attackTravelSeconds = UnityEngine.Mathf.Max(0.05, this.attackTravelSeconds);
                this.attackArcHeight = UnityEngine.Mathf.Max(0.0, this.attackArcHeight);
                this.attackEffectScale = Math.max(0.1, Math.min(this.attackEffectScale, 1.5));
                if (this.orbColors == null || this.orbColors.length < 4) {
                    this.orbColors = System.Array.init([new pc.Color( 0.9, 0.33, 0.3, 1.0 ), new pc.Color( 0.25, 0.66, 0.95, 1.0 ), new pc.Color( 0.42, 0.86, 0.42, 1.0 ), new pc.Color( 0.93, 0.82, 0.31, 1.0 ), new pc.Color( 0.7, 0.48, 0.96, 1.0 ), new pc.Color( 0.96, 0.57, 0.81, 1.0 )], UnityEngine.Color);
                }
                if (this.board == null || System.Array.getLength(this.board, 0) !== this.columns || System.Array.getLength(this.board, 1) !== this.rows) {
                    this.board = System.Array.create(null, null, SimpleDodgeGame.Orb, this.columns, this.rows);
                }
                this.EnsureMatchBuffers();
            },
            /*SimpleDodgeGame.ValidateConfig end.*/

            /*SimpleDodgeGame.EnsureMatchBuffers start.*/
            EnsureMatchBuffers: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#EnsureMatchBuffers", this ); }

                if (this.markedCellsBuffer == null || System.Array.getLength(this.markedCellsBuffer, 0) !== this.columns || System.Array.getLength(this.markedCellsBuffer, 1) !== this.rows) {
                    this.markedCellsBuffer = System.Array.create(false, null, System.Boolean, this.columns, this.rows);
                }
                if (this.visitedCellsBuffer == null || System.Array.getLength(this.visitedCellsBuffer, 0) !== this.columns || System.Array.getLength(this.visitedCellsBuffer, 1) !== this.rows) {
                    this.visitedCellsBuffer = System.Array.create(false, null, System.Boolean, this.columns, this.rows);
                }
            },
            /*SimpleDodgeGame.EnsureMatchBuffers end.*/

            /*SimpleDodgeGame.WaitForSecondsUnscaled start.*/
            WaitForSecondsUnscaled: function (seconds) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#WaitForSecondsUnscaled", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    remaining,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    remaining = UnityEngine.Mathf.Max(0.0, seconds);
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( remaining > 0.0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    remaining -= SimpleDodgeGame.GetSafeUnscaledDeltaTime();
                                        this.MarkResolveProgress();
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SimpleDodgeGame.WaitForSecondsUnscaled end.*/

            /*SimpleDodgeGame.MarkResolveProgress start.*/
            MarkResolveProgress: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#MarkResolveProgress", this ); }

                if (this.isResolving) {
                    this.resolveStartedAt = UnityEngine.Time.unscaledTime;
                }
            },
            /*SimpleDodgeGame.MarkResolveProgress end.*/

            /*SimpleDodgeGame.ApplyRendererMaterial start.*/
            ApplyRendererMaterial: function (renderer) {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ApplyRendererMaterial", this ); }

                if (!(UnityEngine.Component.op_Equality(renderer, null))) {
                    var selectedMaterial = this.GetSharedSpriteMaterial();
                    if (selectedMaterial != null) {
                        renderer.material = selectedMaterial;
                    }
                }
            },
            /*SimpleDodgeGame.ApplyRendererMaterial end.*/

            /*SimpleDodgeGame.GetGameplayZ start.*/
            GetGameplayZ: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetGameplayZ", this ); }

                var distanceFromCamera = UnityEngine.Mathf.Max(this.gameplayCamera.nearClipPlane + 1.0, 5.0);
                var forwardZ = this.gameplayCamera.transform.forward.z;
                if (Math.abs(forwardZ) < 0.0001) {
                    forwardZ = 1.0;
                }
                return this.gameplayCamera.transform.position.z + (forwardZ === 0 ? 1 : Math.sign(forwardZ)) * distanceFromCamera;
            },
            /*SimpleDodgeGame.GetGameplayZ end.*/

            /*SimpleDodgeGame.GetSharedSpriteMaterial start.*/
            GetSharedSpriteMaterial: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#GetSharedSpriteMaterial", this ); }

                if (this.spriteMaterial != null && this.ShouldUseCustomMaterialForCurrentPlatform()) {
                    var shader = this.spriteMaterial.shader;
                    if (!this.fallbackToDefaultIfShaderUnsupported || (shader != null && shader.isSupported)) {
                        return this.spriteMaterial;
                    }
                }
                return null;
            },
            /*SimpleDodgeGame.GetSharedSpriteMaterial end.*/

            /*SimpleDodgeGame.ShouldUseCustomMaterialForCurrentPlatform start.*/
            ShouldUseCustomMaterialForCurrentPlatform: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame#ShouldUseCustomMaterialForCurrentPlatform", this ); }

                return false;
            },
            /*SimpleDodgeGame.ShouldUseCustomMaterialForCurrentPlatform end.*/


        }
    });
    /*SimpleDodgeGame end.*/

    /*SimpleDodgeGame+ImmediateResolvePhase start.*/
    Bridge.define("SimpleDodgeGame.ImmediateResolvePhase", {
        $kind: 1006,
        statics: {
            fields: {
                Idle: 0,
                ClearDelay: 1,
                CollapseAnim: 2,
                FillAnim: 3
            }
        }
    });
    /*SimpleDodgeGame+ImmediateResolvePhase end.*/

    /*SimpleDodgeGame+Orb start.*/
    Bridge.define("SimpleDodgeGame.Orb", {
        $kind: 1002,
        fields: {
            type: 0,
            gameObject: null,
            transform: null,
            renderer: null
        },
        ctors: {
            ctor: function (type, gameObject, renderer) {
if ( TRACE ) { TRACE( "SimpleDodgeGame.Orb#ctor", this ); }

                this.$initialize();
                this.type = type;
                this.gameObject = gameObject;
                this.renderer = renderer;
                this.transform = gameObject.transform;
            }
        }
    });
    /*SimpleDodgeGame+Orb end.*/

    /*SimpleDodgeGame+OrbMove start.*/
    Bridge.define("SimpleDodgeGame.OrbMove", {
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame.OrbMove#getDefaultValue", this ); }
 return new SimpleDodgeGame.OrbMove(); }
            }
        },
        fields: {
            orb: null,
            from: null,
            to: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame.OrbMove#init", this ); }

                this.from = new UnityEngine.Vector3();
                this.to = new UnityEngine.Vector3();
            },
            $ctor1: function (orb, from, to) {
if ( TRACE ) { TRACE( "SimpleDodgeGame.OrbMove#$ctor1", this ); }

                this.$initialize();
                this.orb = orb;
                this.from = from.$clone();
                this.to = to.$clone();
            },
            ctor: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame.OrbMove#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "SimpleDodgeGame.OrbMove#getHashCode", this ); }

                var h = Bridge.addHash([1304946878, this.orb, this.from, this.to]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "SimpleDodgeGame.OrbMove#equals", this ); }

                if (!Bridge.is(o, SimpleDodgeGame.OrbMove)) {
                    return false;
                }
                return Bridge.equals(this.orb, o.orb) && Bridge.equals(this.from, o.from) && Bridge.equals(this.to, o.to);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "SimpleDodgeGame.OrbMove#$clone", this ); }

                var s = to || new SimpleDodgeGame.OrbMove();
                s.orb = this.orb;
                s.from = this.from.$clone();
                s.to = this.to.$clone();
                return s;
            }
        }
    });
    /*SimpleDodgeGame+OrbMove end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections","System.Collections.Generic","UnityEngine.UI"];

    /*PlayworksComplianceHooks start.*/
    $m("PlayworksComplianceHooks", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"TriggerGameEnded","t":8,"sn":"TriggerGameEnded","rt":$n[0].Void},{"a":2,"n":"TriggerInstall","t":8,"sn":"TriggerInstall","rt":$n[0].Void},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Android Store URL", 1, "CTA", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"androidStoreUrl","t":4,"rt":$n[0].String,"sn":"androidStoreUrl"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Attack FX Prefab", 4, "Gameplay", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"attackEffectPrefab","t":4,"rt":$n[1].GameObject,"sn":"attackEffectPrefab"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Enemy Sprite", 3, "Gameplay", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"enemySprite","t":4,"rt":$n[1].Sprite,"sn":"enemySprite"},{"a":1,"n":"gameEnded","t":4,"rt":$n[0].Boolean,"sn":"gameEnded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Gameplay Variant", 2, "Gameplay", false, null),new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.0, 2.0)],"a":1,"n":"gameplayVariant","t":4,"rt":$n[0].Int32,"sn":"gameplayVariant","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("iOS Store URL", 0, "CTA", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"iosStoreUrl","t":4,"rt":$n[0].String,"sn":"iosStoreUrl"}]}; }, $n);
    /*PlayworksComplianceHooks end.*/

    /*SimpleDodgeGame start.*/
    $m("SimpleDodgeGame", function () { return {"nested":[SimpleDodgeGame.Orb,SimpleDodgeGame.OrbMove,SimpleDodgeGame.ImmediateResolvePhase],"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateAttackEffect","t":8,"pi":[{"n":"attackObject","pt":$n[1].GameObject,"ps":0},{"n":"from","pt":$n[1].Vector3,"ps":1},{"n":"to","pt":$n[1].Vector3,"ps":2}],"sn":"AnimateAttackEffect","rt":$n[2].IEnumerator,"p":[$n[1].GameObject,$n[1].Vector3,$n[1].Vector3]},{"a":1,"n":"AnimateMoves","t":8,"pi":[{"n":"moves","pt":$n[3].List$1(SimpleDodgeGame.OrbMove),"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1}],"sn":"AnimateMoves","rt":$n[2].IEnumerator,"p":[$n[3].List$1(SimpleDodgeGame.OrbMove),$n[0].Single]},{"a":1,"n":"ApplyAttackEffectTint","t":8,"pi":[{"n":"effectObject","pt":$n[1].GameObject,"ps":0},{"n":"tint","pt":$n[1].Color,"ps":1}],"sn":"ApplyAttackEffectTint","rt":$n[0].Void,"p":[$n[1].GameObject,$n[1].Color]},{"a":1,"n":"ApplyBackgroundVisuals","t":8,"sn":"ApplyBackgroundVisuals","rt":$n[0].Void},{"a":1,"n":"ApplyBoardFrameVisuals","t":8,"sn":"ApplyBoardFrameVisuals","rt":$n[0].Void},{"a":1,"n":"ApplyEnemyVisuals","t":8,"sn":"ApplyEnemyVisuals","rt":$n[0].Void},{"a":1,"n":"ApplyOrbVisuals","t":8,"pi":[{"n":"orb","pt":SimpleDodgeGame.Orb,"ps":0}],"sn":"ApplyOrbVisuals","rt":$n[0].Void,"p":[SimpleDodgeGame.Orb]},{"a":2,"n":"ApplyPlaygroundVariant","t":8,"pi":[{"n":"variantIndex","pt":$n[0].Int32,"ps":0}],"sn":"ApplyPlaygroundVariant","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"ApplyRendererMaterial","t":8,"pi":[{"n":"renderer","pt":$n[1].SpriteRenderer,"ps":0}],"sn":"ApplyRendererMaterial","rt":$n[0].Void,"p":[$n[1].SpriteRenderer]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"BeginImmediateCollapsePhase","t":8,"sn":"BeginImmediateCollapsePhase","rt":$n[0].Void},{"a":1,"n":"BeginImmediateFillPhase","t":8,"sn":"BeginImmediateFillPhase","rt":$n[0].Void},{"a":1,"n":"BuildCollapseMoves","t":8,"pi":[{"n":"targetMoves","pt":$n[3].List$1(SimpleDodgeGame.OrbMove),"ps":0}],"sn":"BuildCollapseMoves","rt":$n[0].Int32,"p":[$n[3].List$1(SimpleDodgeGame.OrbMove)],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"BuildFillMoves","t":8,"pi":[{"n":"targetMoves","pt":$n[3].List$1(SimpleDodgeGame.OrbMove),"ps":0}],"sn":"BuildFillMoves","rt":$n[0].Int32,"p":[$n[3].List$1(SimpleDodgeGame.OrbMove)],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"BuildInitialBoard","t":8,"sn":"BuildInitialBoard","rt":$n[0].Void},{"a":1,"n":"CalculateScoreGain","t":8,"pi":[{"n":"removedCount","pt":$n[0].Int32,"ps":0},{"n":"stepCombos","pt":$n[0].Int32,"ps":1},{"n":"totalCombos","pt":$n[0].Int32,"ps":2}],"sn":"CalculateScoreGain","rt":$n[0].Int32,"p":[$n[0].Int32,$n[0].Int32,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"CellToWorld","t":8,"pi":[{"n":"x","pt":$n[0].Int32,"ps":0},{"n":"y","pt":$n[0].Int32,"ps":1}],"sn":"CellToWorld","rt":$n[1].Vector3,"p":[$n[0].Int32,$n[0].Int32]},{"a":1,"n":"ClearAttackEffects","t":8,"sn":"ClearAttackEffects","rt":$n[0].Void},{"a":1,"n":"ClearBoard","t":8,"sn":"ClearBoard","rt":$n[0].Void},{"a":1,"n":"ClearBoolGrid","is":true,"t":8,"pi":[{"n":"grid","pt":$n[0].Array.type(System.Boolean, 2),"ps":0}],"sn":"ClearBoolGrid","rt":$n[0].Void,"p":[$n[0].Array.type(System.Boolean, 2)]},{"a":1,"n":"CollapseColumns","t":8,"sn":"CollapseColumns","rt":$n[2].IEnumerator},{"a":1,"n":"CollectMatches","t":8,"pi":[{"n":"matchedCells","out":true,"pt":$n[3].List$1(UnityEngine.Vector2Int),"ps":0}],"sn":"CollectMatches","rt":$n[0].Int32,"p":[$n[3].List$1(UnityEngine.Vector2Int)],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ConfigureEnemyPresentation","t":8,"pi":[{"n":"configuredEnemySprite","pt":$n[1].Sprite,"ps":0},{"n":"configuredAttackEffectPrefab","pt":$n[1].GameObject,"ps":1}],"sn":"ConfigureEnemyPresentation","rt":$n[0].Void,"p":[$n[1].Sprite,$n[1].GameObject]},{"a":1,"n":"CountEmptyCells","t":8,"sn":"CountEmptyCells","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"CreateAttackEffectObject","t":8,"pi":[{"n":"orbType","pt":$n[0].Int32,"ps":0}],"sn":"CreateAttackEffectObject","rt":$n[1].GameObject,"p":[$n[0].Int32]},{"a":1,"n":"CreateHudText","is":true,"t":8,"pi":[{"n":"parent","pt":$n[1].Transform,"ps":0},{"n":"objectName","pt":$n[0].String,"ps":1},{"n":"font","pt":$n[1].Font,"ps":2},{"n":"fontSize","pt":$n[0].Int32,"ps":3},{"n":"anchorMin","pt":$n[1].Vector2,"ps":4},{"n":"anchorMax","pt":$n[1].Vector2,"ps":5},{"n":"pivot","pt":$n[1].Vector2,"ps":6},{"n":"anchoredPosition","pt":$n[1].Vector2,"ps":7},{"n":"sizeDelta","pt":$n[1].Vector2,"ps":8},{"n":"alignment","pt":$n[1].TextAnchor,"ps":9}],"sn":"CreateHudText","rt":$n[4].Text,"p":[$n[1].Transform,$n[0].String,$n[1].Font,$n[0].Int32,$n[1].Vector2,$n[1].Vector2,$n[1].Vector2,$n[1].Vector2,$n[1].Vector2,$n[1].TextAnchor]},{"a":1,"n":"CreateOrb","t":8,"pi":[{"n":"type","pt":$n[0].Int32,"ps":0},{"n":"worldPosition","pt":$n[1].Vector3,"ps":1}],"sn":"CreateOrb","rt":SimpleDodgeGame.Orb,"p":[$n[0].Int32,$n[1].Vector3]},{"a":1,"n":"CreateRuntimeHud","t":8,"sn":"CreateRuntimeHud","rt":$n[0].Void},{"a":1,"n":"CreateRuntimeVisuals","t":8,"sn":"CreateRuntimeVisuals","rt":$n[0].Void},{"a":1,"n":"DragHeldOrbToward","t":8,"pi":[{"n":"targetCell","pt":$n[1].Vector2Int,"ps":0}],"sn":"DragHeldOrbToward","rt":$n[0].Void,"p":[$n[1].Vector2Int]},{"a":1,"n":"EndRound","t":8,"sn":"EndRound","rt":$n[0].Void},{"a":1,"n":"EnemyHitFlashRoutine","t":8,"sn":"EnemyHitFlashRoutine","rt":$n[2].IEnumerator},{"a":1,"n":"EnsureMatchBuffers","t":8,"sn":"EnsureMatchBuffers","rt":$n[0].Void},{"a":1,"n":"EvaluateImmediateResolveStep","t":8,"sn":"EvaluateImmediateResolveStep","rt":$n[0].Void},{"a":1,"n":"FillAnyEmptyCellsImmediate","t":8,"sn":"FillAnyEmptyCellsImmediate","rt":$n[0].Void},{"a":1,"n":"FillEmptyCells","t":8,"sn":"FillEmptyCells","rt":$n[2].IEnumerator},{"a":1,"n":"FinishImmediateResolve","t":8,"sn":"FinishImmediateResolve","rt":$n[0].Void},{"a":1,"n":"GetAnyConfiguredOrbSprite","t":8,"sn":"GetAnyConfiguredOrbSprite","rt":$n[1].Sprite},{"a":1,"n":"GetBoardSprite","t":8,"sn":"GetBoardSprite","rt":$n[1].Sprite},{"a":1,"n":"GetGameplayZ","t":8,"sn":"GetGameplayZ","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"GetGeneratedFallbackSprite","is":true,"t":8,"sn":"GetGeneratedFallbackSprite","rt":$n[1].Sprite},{"a":1,"n":"GetHudFont","t":8,"sn":"GetHudFont","rt":$n[1].Font},{"a":1,"n":"GetInitialOrbType","t":8,"pi":[{"n":"x","pt":$n[0].Int32,"ps":0},{"n":"y","pt":$n[0].Int32,"ps":1}],"sn":"GetInitialOrbType","rt":$n[0].Int32,"p":[$n[0].Int32,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"GetOrbColor","t":8,"pi":[{"n":"type","pt":$n[0].Int32,"ps":0}],"sn":"GetOrbColor","rt":$n[1].Color,"p":[$n[0].Int32]},{"a":1,"n":"GetOrbColorCount","t":8,"sn":"GetOrbColorCount","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"GetOrbSpriteForType","t":8,"pi":[{"n":"type","pt":$n[0].Int32,"ps":0}],"sn":"GetOrbSpriteForType","rt":$n[1].Sprite,"p":[$n[0].Int32]},{"a":1,"n":"GetRandomOrbType","t":8,"sn":"GetRandomOrbType","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"GetSafeUnscaledDeltaTime","is":true,"t":8,"sn":"GetSafeUnscaledDeltaTime","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"GetSharedSpriteMaterial","t":8,"sn":"GetSharedSpriteMaterial","rt":$n[1].Material},{"a":1,"n":"GetSpriteWorldSize","is":true,"t":8,"pi":[{"n":"sprite","pt":$n[1].Sprite,"ps":0}],"sn":"GetSpriteWorldSize","rt":$n[1].Vector2,"p":[$n[1].Sprite]},{"a":1,"n":"HandleDragInput","t":8,"sn":"HandleDragInput","rt":$n[0].Void},{"a":1,"n":"HasAnyEmptyCell","t":8,"sn":"HasAnyEmptyCell","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"IsInsideBoard","t":8,"pi":[{"n":"cell","pt":$n[1].Vector2Int,"ps":0}],"sn":"IsInsideBoard","rt":$n[0].Boolean,"p":[$n[1].Vector2Int],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"IsPointerCurrentlyHeld","is":true,"t":8,"sn":"IsPointerCurrentlyHeld","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"LaunchAttackAtEnemy","t":8,"pi":[{"n":"fromPosition","pt":$n[1].Vector3,"ps":0},{"n":"orbType","pt":$n[0].Int32,"ps":1}],"sn":"LaunchAttackAtEnemy","rt":$n[0].Void,"p":[$n[1].Vector3,$n[0].Int32]},{"a":1,"n":"MarkResolveProgress","t":8,"sn":"MarkResolveProgress","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnValidate","t":8,"sn":"OnValidate","rt":$n[0].Void},{"a":1,"n":"PointerPressedThisFrame","t":8,"sn":"PointerPressedThisFrame","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"PointerReleasedThisFrame","t":8,"sn":"PointerReleasedThisFrame","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"PrepareSpriteForRuntime","t":8,"pi":[{"n":"sourceSprite","pt":$n[1].Sprite,"ps":0}],"sn":"PrepareSpriteForRuntime","rt":$n[1].Sprite,"p":[$n[1].Sprite]},{"a":1,"n":"RecoverFromResolveStallIfNeeded","t":8,"sn":"RecoverFromResolveStallIfNeeded","rt":$n[0].Void},{"at":[new UnityEngine.ContextMenu.ctor("Refresh Visual Theme")],"a":1,"n":"RefreshVisualThemeFromContextMenu","t":8,"sn":"RefreshVisualThemeFromContextMenu","rt":$n[0].Void},{"a":2,"n":"RefreshVisualsNow","t":8,"sn":"RefreshVisualsNow","rt":$n[0].Void},{"a":1,"n":"RemoveMatchedCells","t":8,"pi":[{"n":"matchedCells","pt":$n[3].List$1(UnityEngine.Vector2Int),"ps":0}],"sn":"RemoveMatchedCells","rt":$n[0].Void,"p":[$n[3].List$1(UnityEngine.Vector2Int)]},{"a":1,"n":"RepositionBoardOrbs","t":8,"sn":"RepositionBoardOrbs","rt":$n[0].Void},{"a":1,"n":"ResetImmediateResolveState","t":8,"sn":"ResetImmediateResolveState","rt":$n[0].Void},{"a":1,"n":"ResetRound","t":8,"sn":"ResetRound","rt":$n[0].Void},{"a":1,"n":"ResolveBoardRoutine","t":8,"sn":"ResolveBoardRoutine","rt":$n[2].IEnumerator},{"a":1,"n":"ScreenToWorld","t":8,"pi":[{"n":"screenPosition","pt":$n[1].Vector2,"ps":0}],"sn":"ScreenToWorld","rt":$n[1].Vector3,"p":[$n[1].Vector2]},{"a":1,"n":"SetResultVisible","t":8,"pi":[{"n":"visible","pt":$n[0].Boolean,"ps":0}],"sn":"SetResultVisible","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"SetTransformDiameter","is":true,"t":8,"pi":[{"n":"targetTransform","pt":$n[1].Transform,"ps":0},{"n":"sprite","pt":$n[1].Sprite,"ps":1},{"n":"diameter","pt":$n[0].Single,"ps":2}],"sn":"SetTransformDiameter","rt":$n[0].Void,"p":[$n[1].Transform,$n[1].Sprite,$n[0].Single]},{"a":1,"n":"SetTransformSize","is":true,"t":8,"pi":[{"n":"targetTransform","pt":$n[1].Transform,"ps":0},{"n":"sprite","pt":$n[1].Sprite,"ps":1},{"n":"width","pt":$n[0].Single,"ps":2},{"n":"height","pt":$n[0].Single,"ps":3}],"sn":"SetTransformSize","rt":$n[0].Void,"p":[$n[1].Transform,$n[1].Sprite,$n[0].Single,$n[0].Single]},{"a":1,"n":"ShouldUseCustomMaterialForCurrentPlatform","t":8,"sn":"ShouldUseCustomMaterialForCurrentPlatform","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"ShouldUseImmediateResolve","t":8,"sn":"ShouldUseImmediateResolve","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"StartImmediateMoveAnimation","t":8,"pi":[{"n":"phase","pt":SimpleDodgeGame.ImmediateResolvePhase,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1}],"sn":"StartImmediateMoveAnimation","rt":$n[0].Void,"p":[SimpleDodgeGame.ImmediateResolvePhase,$n[0].Single]},{"a":1,"n":"StartImmediateResolve","t":8,"sn":"StartImmediateResolve","rt":$n[0].Void},{"a":1,"n":"SwapCells","t":8,"pi":[{"n":"a","pt":$n[1].Vector2Int,"ps":0},{"n":"b","pt":$n[1].Vector2Int,"ps":1}],"sn":"SwapCells","rt":$n[0].Void,"p":[$n[1].Vector2Int,$n[1].Vector2Int]},{"a":1,"n":"TriggerEnemyHitFeedback","t":8,"sn":"TriggerEnemyHitFeedback","rt":$n[0].Void},{"a":1,"n":"TriggerResolve","t":8,"sn":"TriggerResolve","rt":$n[0].Void},{"a":1,"n":"TryGetPointerDownWorld","t":8,"pi":[{"n":"worldPosition","out":true,"pt":$n[1].Vector3,"ps":0}],"sn":"TryGetPointerDownWorld","rt":$n[0].Boolean,"p":[$n[1].Vector3],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TryGetPointerHeldWorld","t":8,"pi":[{"n":"worldPosition","out":true,"pt":$n[1].Vector3,"ps":0}],"sn":"TryGetPointerHeldWorld","rt":$n[0].Boolean,"p":[$n[1].Vector3],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TryLoadBuiltinFont","is":true,"t":8,"pi":[{"n":"fontPath","pt":$n[0].String,"ps":0}],"sn":"TryLoadBuiltinFont","rt":$n[1].Font,"p":[$n[0].String]},{"a":1,"n":"TryLoadResourceFont","is":true,"t":8,"pi":[{"n":"resourceName","pt":$n[0].String,"ps":0}],"sn":"TryLoadResourceFont","rt":$n[1].Font,"p":[$n[0].String]},{"a":1,"n":"TryWorldToCell","t":8,"pi":[{"n":"worldPosition","pt":$n[1].Vector3,"ps":0},{"n":"cell","out":true,"pt":$n[1].Vector2Int,"ps":1}],"sn":"TryWorldToCell","rt":$n[0].Boolean,"p":[$n[1].Vector3,$n[1].Vector2Int],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateBackgroundTransform","t":8,"sn":"UpdateBackgroundTransform","rt":$n[0].Void},{"a":1,"n":"UpdateBoardFrameTransform","t":8,"sn":"UpdateBoardFrameTransform","rt":$n[0].Void},{"a":1,"n":"UpdateEnemyTransform","t":8,"sn":"UpdateEnemyTransform","rt":$n[0].Void},{"a":1,"n":"UpdateHudTexts","t":8,"sn":"UpdateHudTexts","rt":$n[0].Void},{"a":1,"n":"UpdateImmediateMoveAnimation","t":8,"pi":[{"n":"dt","pt":$n[0].Single,"ps":0}],"sn":"UpdateImmediateMoveAnimation","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"UpdateImmediateResolve","t":8,"sn":"UpdateImmediateResolve","rt":$n[0].Void},{"a":1,"n":"UpdateLayout","t":8,"pi":[{"n":"force","pt":$n[0].Boolean,"ps":0}],"sn":"UpdateLayout","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"ValidateConfig","t":8,"sn":"ValidateConfig","rt":$n[0].Void},{"a":1,"n":"WaitForSecondsUnscaled","t":8,"pi":[{"n":"seconds","pt":$n[0].Single,"ps":0}],"sn":"WaitForSecondsUnscaled","rt":$n[2].IEnumerator,"p":[$n[0].Single]},{"a":1,"n":"WarnIfMissingSpriteSetup","t":8,"sn":"WarnIfMissingSpriteSetup","rt":$n[0].Void},{"a":1,"n":"HudFontResourceName","is":true,"t":4,"rt":$n[0].String,"sn":"HudFontResourceName"},{"a":1,"n":"NeighborOffsets","is":true,"t":4,"rt":System.Array.type(UnityEngine.Vector2Int),"sn":"NeighborOffsets","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.0, 2.0)],"a":1,"n":"attackArcHeight","t":4,"rt":$n[0].Single,"sn":"attackArcHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"attackEffectPrefab","t":4,"rt":$n[1].GameObject,"sn":"attackEffectPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.1, 1.5)],"a":1,"n":"attackEffectScale","t":4,"rt":$n[0].Single,"sn":"attackEffectScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"attackEffectSprite","t":4,"rt":$n[1].Sprite,"sn":"attackEffectSprite"},{"a":1,"n":"attackEffectsRoot","t":4,"rt":$n[1].Transform,"sn":"attackEffectsRoot"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.05, 0.5)],"a":1,"n":"attackTravelSeconds","t":4,"rt":$n[0].Single,"sn":"attackTravelSeconds","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Colors"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"backgroundColor","t":4,"rt":$n[1].Color,"sn":"backgroundColor"},{"a":1,"n":"backgroundRenderer","t":4,"rt":$n[1].SpriteRenderer,"sn":"backgroundRenderer"},{"a":1,"n":"backgroundTransform","t":4,"rt":$n[1].Transform,"sn":"backgroundTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"baseScorePerOrb","t":4,"rt":$n[0].Int32,"sn":"baseScorePerOrb","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"board","t":4,"rt":System.Array.type(SimpleDodgeGame.Orb, 2),"sn":"board"},{"a":1,"n":"boardBottomLeft","t":4,"rt":$n[1].Vector2,"sn":"boardBottomLeft"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"boardBottomPadding","t":4,"rt":$n[0].Single,"sn":"boardBottomPadding","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"boardColor","t":4,"rt":$n[1].Color,"sn":"boardColor"},{"a":1,"n":"boardFrameRenderer","t":4,"rt":$n[1].SpriteRenderer,"sn":"boardFrameRenderer"},{"a":1,"n":"boardFrameTransform","t":4,"rt":$n[1].Transform,"sn":"boardFrameTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"boardOutlineColor","t":4,"rt":$n[1].Color,"sn":"boardOutlineColor"},{"a":1,"n":"boardOutlineRenderer","t":4,"rt":$n[1].SpriteRenderer,"sn":"boardOutlineRenderer"},{"a":1,"n":"boardOutlineTransform","t":4,"rt":$n[1].Transform,"sn":"boardOutlineTransform"},{"a":1,"n":"boardRoot","t":4,"rt":$n[1].Transform,"sn":"boardRoot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"boardSidePadding","t":4,"rt":$n[0].Single,"sn":"boardSidePadding","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"boardTopPadding","t":4,"rt":$n[0].Single,"sn":"boardTopPadding","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"boardWorldHeight","t":4,"rt":$n[0].Single,"sn":"boardWorldHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"boardWorldWidth","t":4,"rt":$n[0].Single,"sn":"boardWorldWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"cellSize","t":4,"rt":$n[0].Single,"sn":"cellSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clearDelaySeconds","t":4,"rt":$n[0].Single,"sn":"clearDelaySeconds","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Board"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"columns","t":4,"rt":$n[0].Int32,"sn":"columns","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"comboText","t":4,"rt":$n[4].Text,"sn":"comboText"},{"a":1,"n":"complianceHooks","t":4,"rt":PlayworksComplianceHooks,"sn":"complianceHooks"},{"a":1,"n":"enemyBaseColor","t":4,"rt":$n[1].Color,"sn":"enemyBaseColor"},{"a":1,"n":"enemyHitFlashRoutine","t":4,"rt":$n[1].Coroutine,"sn":"enemyHitFlashRoutine"},{"a":1,"n":"enemyRenderer","t":4,"rt":$n[1].SpriteRenderer,"sn":"enemyRenderer"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.8, 3.0)],"a":1,"n":"enemySizeInCells","t":4,"rt":$n[0].Single,"sn":"enemySizeInCells","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Enemy & Attack"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"enemySprite","t":4,"rt":$n[1].Sprite,"sn":"enemySprite"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"enemyTint","t":4,"rt":$n[1].Color,"sn":"enemyTint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"enemyTopMargin","t":4,"rt":$n[0].Single,"sn":"enemyTopMargin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"enemyTransform","t":4,"rt":$n[1].Transform,"sn":"enemyTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fallDurationSeconds","t":4,"rt":$n[0].Single,"sn":"fallDurationSeconds","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fallbackToDefaultIfShaderUnsupported","t":4,"rt":$n[0].Boolean,"sn":"fallbackToDefaultIfShaderUnsupported","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"floodFillStackBuffer","t":4,"rt":$n[3].List$1(UnityEngine.Vector2Int),"sn":"floodFillStackBuffer","ro":true},{"a":1,"n":"gameplayCamera","t":4,"rt":$n[1].Camera,"sn":"gameplayCamera"},{"a":1,"n":"gameplayZ","t":4,"rt":$n[0].Single,"sn":"gameplayZ","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"generatedFallbackSprite","is":true,"t":4,"rt":$n[1].Sprite,"sn":"generatedFallbackSprite"},{"a":1,"n":"generatedFallbackTexture","is":true,"t":4,"rt":$n[1].Texture2D,"sn":"generatedFallbackTexture"},{"a":1,"n":"hasLoggedMissingHudFont","t":4,"rt":$n[0].Boolean,"sn":"hasLoggedMissingHudFont","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"hasLoggedMissingSpriteConfig","t":4,"rt":$n[0].Boolean,"sn":"hasLoggedMissingSpriteConfig","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"hasReportedGameEnded","t":4,"rt":$n[0].Boolean,"sn":"hasReportedGameEnded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"heldCell","t":4,"rt":$n[1].Vector2Int,"sn":"heldCell"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hudFontOverride","t":4,"rt":$n[1].Font,"sn":"hudFontOverride"},{"a":1,"n":"hudRootTransform","t":4,"rt":$n[1].Transform,"sn":"hudRootTransform"},{"a":1,"n":"immediateMoveDuration","t":4,"rt":$n[0].Single,"sn":"immediateMoveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"immediatePhaseTimer","t":4,"rt":$n[0].Single,"sn":"immediatePhaseTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"immediateResolvePhase","t":4,"rt":SimpleDodgeGame.ImmediateResolvePhase,"sn":"immediateResolvePhase","box":function ($v) { return Bridge.box($v, SimpleDodgeGame.ImmediateResolvePhase, System.Enum.toStringFn(SimpleDodgeGame.ImmediateResolvePhase));}},{"a":1,"n":"immediateTotalMoveCombos","t":4,"rt":$n[0].Int32,"sn":"immediateTotalMoveCombos","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"isDragging","t":4,"rt":$n[0].Boolean,"sn":"isDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isResolving","t":4,"rt":$n[0].Boolean,"sn":"isResolving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"lastMoveCombos","t":4,"rt":$n[0].Int32,"sn":"lastMoveCombos","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"layoutInitialized","t":4,"rt":$n[0].Boolean,"sn":"layoutInitialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"markedCellsBuffer","t":4,"rt":$n[0].Array.type(System.Boolean, 2),"sn":"markedCellsBuffer"},{"a":1,"n":"matchedCellsBuffer","t":4,"rt":$n[3].List$1(UnityEngine.Vector2Int),"sn":"matchedCellsBuffer","ro":true},{"a":1,"n":"moveBuffer","t":4,"rt":$n[3].List$1(SimpleDodgeGame.OrbMove),"sn":"moveBuffer","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"orbColors","t":4,"rt":System.Array.type(UnityEngine.Color),"sn":"orbColors"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.6, 1.0)],"a":1,"n":"orbScale","t":4,"rt":$n[0].Single,"sn":"orbScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"orbSprites","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"orbSprites"},{"a":1,"n":"pointerDepth","t":4,"rt":$n[0].Single,"sn":"pointerDepth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"resolveRecoveryAttempts","t":4,"rt":$n[0].Int32,"sn":"resolveRecoveryAttempts","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"resolveStage","t":4,"rt":$n[0].String,"sn":"resolveStage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"resolveStallTimeoutSeconds","t":4,"rt":$n[0].Single,"sn":"resolveStallTimeoutSeconds","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"resolveStartedAt","t":4,"rt":$n[0].Single,"sn":"resolveStartedAt","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"resultText","t":4,"rt":$n[4].Text,"sn":"resultText"},{"at":[new UnityEngine.HeaderAttribute("Round"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"roundDurationSeconds","t":4,"rt":$n[0].Single,"sn":"roundDurationSeconds","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"roundEnded","t":4,"rt":$n[0].Boolean,"sn":"roundEnded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rows","t":4,"rt":$n[0].Int32,"sn":"rows","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"score","t":4,"rt":$n[0].Int32,"sn":"score","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"scoreText","t":4,"rt":$n[4].Text,"sn":"scoreText"},{"at":[new UnityEngine.HeaderAttribute("Rendering"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spriteMaterial","t":4,"rt":$n[1].Material,"sn":"spriteMaterial"},{"a":1,"n":"timeRemaining","t":4,"rt":$n[0].Single,"sn":"timeRemaining","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"timeText","t":4,"rt":$n[4].Text,"sn":"timeText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"useCustomMaterialInEditor","t":4,"rt":$n[0].Boolean,"sn":"useCustomMaterialInEditor","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"useCustomMaterialInWebGl","t":4,"rt":$n[0].Boolean,"sn":"useCustomMaterialInWebGl","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"visitedCellsBuffer","t":4,"rt":$n[0].Array.type(System.Boolean, 2),"sn":"visitedCellsBuffer"}]}; }, $n);
    /*SimpleDodgeGame end.*/

    /*SimpleDodgeGame+Orb start.*/
    $m("SimpleDodgeGame.Orb", function () { return {"td":SimpleDodgeGame,"att":1048835,"a":1,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].Int32,$n[1].GameObject,$n[1].SpriteRenderer],"pi":[{"n":"type","pt":$n[0].Int32,"ps":0},{"n":"gameObject","pt":$n[1].GameObject,"ps":1},{"n":"renderer","pt":$n[1].SpriteRenderer,"ps":2}],"sn":"ctor"},{"a":2,"n":"gameObject","t":4,"rt":$n[1].GameObject,"sn":"gameObject","ro":true},{"a":2,"n":"renderer","t":4,"rt":$n[1].SpriteRenderer,"sn":"renderer","ro":true},{"a":2,"n":"transform","t":4,"rt":$n[1].Transform,"sn":"transform","ro":true},{"a":2,"n":"type","t":4,"rt":$n[0].Int32,"sn":"type","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SimpleDodgeGame+Orb end.*/

    /*SimpleDodgeGame+OrbMove start.*/
    $m("SimpleDodgeGame.OrbMove", function () { return {"td":SimpleDodgeGame,"att":1048843,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[SimpleDodgeGame.Orb,$n[1].Vector3,$n[1].Vector3],"pi":[{"n":"orb","pt":SimpleDodgeGame.Orb,"ps":0},{"n":"from","pt":$n[1].Vector3,"ps":1},{"n":"to","pt":$n[1].Vector3,"ps":2}],"sn":"$ctor1"},{"a":2,"n":"from","t":4,"rt":$n[1].Vector3,"sn":"from"},{"a":2,"n":"orb","t":4,"rt":SimpleDodgeGame.Orb,"sn":"orb"},{"a":2,"n":"to","t":4,"rt":$n[1].Vector3,"sn":"to"}]}; }, $n);
    /*SimpleDodgeGame+OrbMove end.*/

    /*SimpleDodgeGame+ImmediateResolvePhase start.*/
    $m("SimpleDodgeGame.ImmediateResolvePhase", function () { return {"td":SimpleDodgeGame,"att":259,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ClearDelay","is":true,"t":4,"rt":SimpleDodgeGame.ImmediateResolvePhase,"sn":"ClearDelay","box":function ($v) { return Bridge.box($v, SimpleDodgeGame.ImmediateResolvePhase, System.Enum.toStringFn(SimpleDodgeGame.ImmediateResolvePhase));}},{"a":2,"n":"CollapseAnim","is":true,"t":4,"rt":SimpleDodgeGame.ImmediateResolvePhase,"sn":"CollapseAnim","box":function ($v) { return Bridge.box($v, SimpleDodgeGame.ImmediateResolvePhase, System.Enum.toStringFn(SimpleDodgeGame.ImmediateResolvePhase));}},{"a":2,"n":"FillAnim","is":true,"t":4,"rt":SimpleDodgeGame.ImmediateResolvePhase,"sn":"FillAnim","box":function ($v) { return Bridge.box($v, SimpleDodgeGame.ImmediateResolvePhase, System.Enum.toStringFn(SimpleDodgeGame.ImmediateResolvePhase));}},{"a":2,"n":"Idle","is":true,"t":4,"rt":SimpleDodgeGame.ImmediateResolvePhase,"sn":"Idle","box":function ($v) { return Bridge.box($v, SimpleDodgeGame.ImmediateResolvePhase, System.Enum.toStringFn(SimpleDodgeGame.ImmediateResolvePhase));}}]}; }, $n);
    /*SimpleDodgeGame+ImmediateResolvePhase end.*/

    }});
