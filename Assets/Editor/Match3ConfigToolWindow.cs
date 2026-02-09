#if UNITY_EDITOR
using UnityEditor;
using UnityEngine;

public sealed class Match3ConfigToolWindow : EditorWindow
{
    private static readonly Color[] DefaultOrbColors =
    {
        new Color(0.90f, 0.33f, 0.30f, 1f),
        new Color(0.25f, 0.66f, 0.95f, 1f),
        new Color(0.42f, 0.86f, 0.42f, 1f),
        new Color(0.93f, 0.82f, 0.31f, 1f),
        new Color(0.70f, 0.48f, 0.96f, 1f),
        new Color(0.96f, 0.57f, 0.81f, 1f),
    };

    private SimpleDodgeGame targetGame;
    private SerializedObject targetSerializedObject;
    private Vector2 scrollPosition;

    [MenuItem("Tools/AdGame2/Match3 Config Panel")]
    private static void OpenWindow()
    {
        Match3ConfigToolWindow window = GetWindow<Match3ConfigToolWindow>("Match3 Config");
        window.minSize = new Vector2(460f, 560f);
        window.TryAutoAssignTarget();
    }

    private void OnEnable()
    {
        TryAutoAssignTarget();
    }

    private void OnHierarchyChange()
    {
        if (targetGame == null)
        {
            TryAutoAssignTarget();
        }
    }

    private void OnGUI()
    {
        EditorGUILayout.HelpBox("Tune the Match-3 board, timing, scoring, and palette on SimpleDodgeGame.", MessageType.Info);
        DrawTargetSection();
        EditorGUILayout.Space(8f);

        if (targetGame == null)
        {
            EditorGUILayout.HelpBox("No SimpleDodgeGame found in the open scene.", MessageType.Warning);
            return;
        }

        EnsureSerializedObject();
        if (targetSerializedObject == null)
        {
            EditorGUILayout.HelpBox("Could not create SerializedObject for SimpleDodgeGame.", MessageType.Error);
            return;
        }

        targetSerializedObject.Update();

        using (EditorGUILayout.ScrollViewScope scrollScope = new EditorGUILayout.ScrollViewScope(scrollPosition))
        {
            scrollPosition = scrollScope.scrollPosition;
            DrawBoardSection();
            EditorGUILayout.Space(8f);
            DrawRoundSection();
            EditorGUILayout.Space(8f);
            DrawColorsSection();
            EditorGUILayout.Space(8f);
            DrawRenderingSection();
            EditorGUILayout.Space(12f);
            DrawPresetSection();
        }

        bool changed = targetSerializedObject.ApplyModifiedProperties();
        if (!changed)
        {
            return;
        }

        EditorUtility.SetDirty(targetGame);
        if (Application.isPlaying)
        {
            targetGame.RefreshVisualsNow();
        }
    }

    private void DrawTargetSection()
    {
        EditorGUILayout.LabelField("Target", EditorStyles.boldLabel);

        EditorGUI.BeginChangeCheck();
        SimpleDodgeGame nextTarget = (SimpleDodgeGame)EditorGUILayout.ObjectField("SimpleDodgeGame", targetGame, typeof(SimpleDodgeGame), true);
        if (EditorGUI.EndChangeCheck())
        {
            SetTarget(nextTarget);
        }

        using (new EditorGUILayout.HorizontalScope())
        {
            if (GUILayout.Button("Find In Scene"))
            {
                TryAutoAssignTarget();
            }

            using (new EditorGUI.DisabledScope(targetGame == null))
            {
                if (GUILayout.Button("Select Target"))
                {
                    Selection.activeObject = targetGame.gameObject;
                    EditorGUIUtility.PingObject(targetGame.gameObject);
                }
            }
        }
    }

    private void DrawBoardSection()
    {
        EditorGUILayout.LabelField("Board", EditorStyles.boldLabel);

        SerializedProperty columns = FindProperty("columns");
        SerializedProperty rows = FindProperty("rows");
        SerializedProperty sidePadding = FindProperty("boardSidePadding");
        SerializedProperty bottomPadding = FindProperty("boardBottomPadding");
        SerializedProperty topPadding = FindProperty("boardTopPadding");
        SerializedProperty orbScale = FindProperty("orbScale");
        SerializedProperty clearDelaySeconds = FindProperty("clearDelaySeconds");
        SerializedProperty fallDurationSeconds = FindProperty("fallDurationSeconds");

        if (columns == null || rows == null || sidePadding == null || bottomPadding == null || topPadding == null ||
            orbScale == null || clearDelaySeconds == null || fallDurationSeconds == null)
        {
            DrawMissingFieldWarning("board settings");
            return;
        }

        using (new EditorGUI.DisabledScope(Application.isPlaying))
        {
            if (Application.isPlaying)
            {
                EditorGUILayout.HelpBox("Board size/padding changes are disabled during Play Mode.", MessageType.None);
            }

            columns.intValue = EditorGUILayout.IntSlider("Columns", columns.intValue, 3, 9);
            rows.intValue = EditorGUILayout.IntSlider("Rows", rows.intValue, 3, 8);
            sidePadding.floatValue = EditorGUILayout.Slider("Side Padding", sidePadding.floatValue, 0f, 2f);
            bottomPadding.floatValue = EditorGUILayout.Slider("Bottom Padding", bottomPadding.floatValue, 0f, 3f);
            topPadding.floatValue = EditorGUILayout.Slider("Top Padding", topPadding.floatValue, 0.5f, 4f);
        }

        orbScale.floatValue = EditorGUILayout.Slider("Orb Scale", orbScale.floatValue, 0.6f, 1f);
        clearDelaySeconds.floatValue = EditorGUILayout.Slider("Clear Delay", clearDelaySeconds.floatValue, 0f, 0.35f);
        fallDurationSeconds.floatValue = EditorGUILayout.Slider("Fall Duration", fallDurationSeconds.floatValue, 0.01f, 0.4f);
    }

    private void DrawRoundSection()
    {
        EditorGUILayout.LabelField("Round", EditorStyles.boldLabel);

        SerializedProperty roundDurationSeconds = FindProperty("roundDurationSeconds");
        SerializedProperty baseScorePerOrb = FindProperty("baseScorePerOrb");

        if (roundDurationSeconds == null || baseScorePerOrb == null)
        {
            DrawMissingFieldWarning("round settings");
            return;
        }

        roundDurationSeconds.floatValue = EditorGUILayout.Slider("Round Duration", roundDurationSeconds.floatValue, 5f, 120f);
        baseScorePerOrb.intValue = EditorGUILayout.IntSlider("Base Score Per Orb", baseScorePerOrb.intValue, 1, 40);
    }

    private void DrawColorsSection()
    {
        EditorGUILayout.LabelField("Colors", EditorStyles.boldLabel);

        SerializedProperty backgroundColor = FindProperty("backgroundColor");
        SerializedProperty boardColor = FindProperty("boardColor");
        SerializedProperty boardOutlineColor = FindProperty("boardOutlineColor");
        SerializedProperty orbColors = FindProperty("orbColors");
        SerializedProperty orbSprites = FindProperty("orbSprites");

        if (backgroundColor == null || boardColor == null || boardOutlineColor == null || orbColors == null || orbSprites == null)
        {
            DrawMissingFieldWarning("color settings");
            return;
        }

        EditorGUILayout.PropertyField(backgroundColor, new GUIContent("Background"));
        EditorGUILayout.PropertyField(boardColor, new GUIContent("Board Fill"));
        EditorGUILayout.PropertyField(boardOutlineColor, new GUIContent("Board Outline"));
        EditorGUILayout.PropertyField(orbColors, new GUIContent("Orb Colors"), true);
        EditorGUILayout.PropertyField(orbSprites, new GUIContent("Orb Sprites (By Type Index)"), true);
        EditorGUILayout.HelpBox(
            "Type index maps by array position: orbColors[i] + orbSprites[i]. Empty sprite slots fall back to the default round orb.",
            MessageType.None);

        using (new EditorGUILayout.HorizontalScope())
        {
            if (GUILayout.Button("Restore Default Orb Palette"))
            {
                Undo.RecordObject(targetGame, "Restore Orb Palette");
                SetOrbColors(DefaultOrbColors);
            }

            if (GUILayout.Button("Match Sprite Slots To Color Count"))
            {
                SyncSpriteSlotsToColorCount(orbColors, orbSprites);
            }
        }
    }

    private void DrawRenderingSection()
    {
        EditorGUILayout.LabelField("Rendering", EditorStyles.boldLabel);

        SerializedProperty spriteMaterial = FindProperty("spriteMaterial");
        SerializedProperty useMaterialInEditor = FindProperty("useCustomMaterialInEditor");
        SerializedProperty useMaterialInWebGl = FindProperty("useCustomMaterialInWebGl");
        SerializedProperty fallback = FindProperty("fallbackToDefaultIfShaderUnsupported");

        if (spriteMaterial == null || useMaterialInEditor == null || useMaterialInWebGl == null || fallback == null)
        {
            DrawMissingFieldWarning("render settings");
            return;
        }

        EditorGUILayout.PropertyField(spriteMaterial, new GUIContent("Sprite Material"));
        EditorGUILayout.PropertyField(useMaterialInEditor, new GUIContent("Use Material In Editor"));
        EditorGUILayout.PropertyField(useMaterialInWebGl, new GUIContent("Use Material In WebGL"));
        EditorGUILayout.PropertyField(fallback, new GUIContent("Fallback On Unsupported Shader"));
    }

    private void DrawPresetSection()
    {
        EditorGUILayout.LabelField("Quick Presets", EditorStyles.boldLabel);

        using (new EditorGUILayout.HorizontalScope())
        {
            if (GUILayout.Button("Balanced (Default)"))
            {
                ApplyBalancedPreset();
            }

            if (GUILayout.Button("Fast Pace"))
            {
                ApplyFastPreset();
            }

            if (GUILayout.Button("Casual"))
            {
                ApplyCasualPreset();
            }
        }
    }

    private void ApplyBalancedPreset()
    {
        ApplyPresetCore(
            columns: 6,
            rows: 5,
            sidePadding: 0.45f,
            bottomPadding: 0.8f,
            topPadding: 2.15f,
            orbScale: 0.9f,
            clearDelaySeconds: 0.08f,
            fallDurationSeconds: 0.12f,
            roundDurationSeconds: 35f,
            baseScorePerOrb: 12);
    }

    private void ApplyFastPreset()
    {
        ApplyPresetCore(
            columns: 6,
            rows: 5,
            sidePadding: 0.45f,
            bottomPadding: 0.8f,
            topPadding: 2.15f,
            orbScale: 0.88f,
            clearDelaySeconds: 0.05f,
            fallDurationSeconds: 0.08f,
            roundDurationSeconds: 28f,
            baseScorePerOrb: 16);
    }

    private void ApplyCasualPreset()
    {
        ApplyPresetCore(
            columns: 5,
            rows: 5,
            sidePadding: 0.55f,
            bottomPadding: 0.8f,
            topPadding: 2.2f,
            orbScale: 0.92f,
            clearDelaySeconds: 0.12f,
            fallDurationSeconds: 0.16f,
            roundDurationSeconds: 45f,
            baseScorePerOrb: 10);
    }

    private void ApplyPresetCore(
        int columns,
        int rows,
        float sidePadding,
        float bottomPadding,
        float topPadding,
        float orbScale,
        float clearDelaySeconds,
        float fallDurationSeconds,
        float roundDurationSeconds,
        int baseScorePerOrb)
    {
        if (targetGame == null || targetSerializedObject == null)
        {
            return;
        }

        Undo.RecordObject(targetGame, "Apply Match3 Preset");

        SetIntProperty("columns", columns);
        SetIntProperty("rows", rows);
        SetFloatProperty("boardSidePadding", sidePadding);
        SetFloatProperty("boardBottomPadding", bottomPadding);
        SetFloatProperty("boardTopPadding", topPadding);
        SetFloatProperty("orbScale", orbScale);
        SetFloatProperty("clearDelaySeconds", clearDelaySeconds);
        SetFloatProperty("fallDurationSeconds", fallDurationSeconds);
        SetFloatProperty("roundDurationSeconds", roundDurationSeconds);
        SetIntProperty("baseScorePerOrb", baseScorePerOrb);
        SetOrbColors(DefaultOrbColors);
    }

    private void SetOrbColors(Color[] colors)
    {
        SerializedProperty orbColors = FindProperty("orbColors");
        if (orbColors == null || !orbColors.isArray)
        {
            return;
        }

        orbColors.arraySize = colors.Length;
        for (int i = 0; i < colors.Length; i++)
        {
            SerializedProperty colorElement = orbColors.GetArrayElementAtIndex(i);
            if (colorElement != null && colorElement.propertyType == SerializedPropertyType.Color)
            {
                colorElement.colorValue = colors[i];
            }
        }
    }

    private void SetIntProperty(string propertyName, int value)
    {
        SerializedProperty property = FindProperty(propertyName);
        if (property != null && property.propertyType == SerializedPropertyType.Integer)
        {
            property.intValue = value;
        }
    }

    private void SetFloatProperty(string propertyName, float value)
    {
        SerializedProperty property = FindProperty(propertyName);
        if (property != null && property.propertyType == SerializedPropertyType.Float)
        {
            property.floatValue = value;
        }
    }

    private SerializedProperty FindProperty(string propertyName)
    {
        if (targetSerializedObject == null)
        {
            return null;
        }

        return targetSerializedObject.FindProperty(propertyName);
    }

    private static void DrawMissingFieldWarning(string sectionName)
    {
        EditorGUILayout.HelpBox(
            "SimpleDodgeGame is missing one or more serialized fields for " + sectionName + ".",
            MessageType.Warning);
    }

    private static void SyncSpriteSlotsToColorCount(SerializedProperty orbColors, SerializedProperty orbSprites)
    {
        if (orbColors == null || orbSprites == null || !orbColors.isArray || !orbSprites.isArray)
        {
            return;
        }

        orbSprites.arraySize = Mathf.Max(0, orbColors.arraySize);
    }

    private void TryAutoAssignTarget()
    {
        SetTarget(FindObjectOfType<SimpleDodgeGame>());
    }

    private void SetTarget(SimpleDodgeGame nextTarget)
    {
        if (targetGame == nextTarget)
        {
            return;
        }

        targetGame = nextTarget;
        targetSerializedObject = targetGame != null ? new SerializedObject(targetGame) : null;
    }

    private void EnsureSerializedObject()
    {
        if (targetGame == null)
        {
            targetSerializedObject = null;
            return;
        }

        if (targetSerializedObject == null || targetSerializedObject.targetObject != targetGame)
        {
            targetSerializedObject = new SerializedObject(targetGame);
        }
    }
}
#endif
