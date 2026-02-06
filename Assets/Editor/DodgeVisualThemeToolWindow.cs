#if UNITY_EDITOR
using UnityEditor;
using UnityEngine;

public sealed class DodgeVisualThemeToolWindow : EditorWindow
{
    private SimpleDodgeGame targetGame;
    private DodgeVisualTheme themeAsset;
    private Editor themeInspector;

    [MenuItem("Tools/AdGame2/Visual Theme Tool")]
    private static void OpenWindow()
    {
        DodgeVisualThemeToolWindow window = GetWindow<DodgeVisualThemeToolWindow>("Visual Theme Tool");
        window.minSize = new Vector2(420f, 500f);
        window.TryAutoAssignTarget();
    }

    private void OnEnable()
    {
        TryAutoAssignTarget();
    }

    private void OnDisable()
    {
        DestroyThemeInspector();
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
        EditorGUILayout.HelpBox("Edit player, obstacle, and background art from one place.", MessageType.Info);

        DrawTargetSection();
        EditorGUILayout.Space(8f);
        DrawThemeSection();
    }

    private void DrawTargetSection()
    {
        EditorGUILayout.LabelField("Target Scene Object", EditorStyles.boldLabel);
        targetGame = (SimpleDodgeGame)EditorGUILayout.ObjectField("Simple Dodge Game", targetGame, typeof(SimpleDodgeGame), true);

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

        if (targetGame == null)
        {
            EditorGUILayout.HelpBox("No SimpleDodgeGame found in scene. You can still edit a theme asset below.", MessageType.Warning);
            return;
        }

        SerializedObject gameSerializedObject = new SerializedObject(targetGame);
        SerializedProperty themeProperty = gameSerializedObject.FindProperty("visualTheme");
        DodgeVisualTheme assignedTheme = (DodgeVisualTheme)themeProperty.objectReferenceValue;

        EditorGUI.BeginChangeCheck();
        DodgeVisualTheme nextTheme = (DodgeVisualTheme)EditorGUILayout.ObjectField("Assigned Theme", assignedTheme, typeof(DodgeVisualTheme), false);
        if (EditorGUI.EndChangeCheck())
        {
            Undo.RecordObject(targetGame, "Assign Dodge Visual Theme");
            themeProperty.objectReferenceValue = nextTheme;
            gameSerializedObject.ApplyModifiedProperties();
            EditorUtility.SetDirty(targetGame);
            themeAsset = nextTheme;

            if (Application.isPlaying)
            {
                targetGame.RefreshVisualsNow();
            }
        }

        themeAsset = nextTheme;
    }

    private void DrawThemeSection()
    {
        EditorGUILayout.LabelField("Theme Asset", EditorStyles.boldLabel);

        if (targetGame == null || themeAsset == null)
        {
            themeAsset = (DodgeVisualTheme)EditorGUILayout.ObjectField("Theme", themeAsset, typeof(DodgeVisualTheme), false);
        }

        if (themeAsset == null)
        {
            EditorGUILayout.HelpBox("Create a theme asset first, then assign sprites/colors.", MessageType.None);
            if (GUILayout.Button("Create Theme Asset"))
            {
                CreateThemeAsset();
            }

            return;
        }

        EnsureThemeInspector();
        if (themeInspector != null)
        {
            themeInspector.OnInspectorGUI();
        }

        using (new EditorGUILayout.HorizontalScope())
        {
            if (GUILayout.Button("Select Theme Asset"))
            {
                Selection.activeObject = themeAsset;
                EditorGUIUtility.PingObject(themeAsset);
            }

            if (GUILayout.Button("Create New Theme"))
            {
                CreateThemeAsset();
            }
        }

        using (new EditorGUI.DisabledScope(targetGame == null))
        {
            if (GUILayout.Button("Apply Theme To Scene"))
            {
                ApplyThemeToTarget();
            }
        }
    }

    private void TryAutoAssignTarget()
    {
        targetGame = FindObjectOfType<SimpleDodgeGame>();
        if (targetGame == null)
        {
            return;
        }

        SerializedObject gameSerializedObject = new SerializedObject(targetGame);
        SerializedProperty themeProperty = gameSerializedObject.FindProperty("visualTheme");
        themeAsset = (DodgeVisualTheme)themeProperty.objectReferenceValue;
    }

    private void EnsureThemeInspector()
    {
        if (themeInspector != null && themeInspector.target == themeAsset)
        {
            return;
        }

        DestroyThemeInspector();
        if (themeAsset != null)
        {
            themeInspector = Editor.CreateEditor(themeAsset);
        }
    }

    private void DestroyThemeInspector()
    {
        if (themeInspector != null)
        {
            DestroyImmediate(themeInspector);
            themeInspector = null;
        }
    }

    private void ApplyThemeToTarget()
    {
        if (targetGame == null)
        {
            return;
        }

        SerializedObject gameSerializedObject = new SerializedObject(targetGame);
        SerializedProperty themeProperty = gameSerializedObject.FindProperty("visualTheme");
        Undo.RecordObject(targetGame, "Apply Dodge Visual Theme");
        themeProperty.objectReferenceValue = themeAsset;
        gameSerializedObject.ApplyModifiedProperties();
        EditorUtility.SetDirty(targetGame);

        if (Application.isPlaying)
        {
            targetGame.RefreshVisualsNow();
        }
    }

    private void CreateThemeAsset()
    {
        string path = EditorUtility.SaveFilePanelInProject(
            "Create Dodge Visual Theme",
            "DodgeVisualTheme",
            "asset",
            "Choose where to save the new visual theme asset.");

        if (string.IsNullOrEmpty(path))
        {
            return;
        }

        DodgeVisualTheme createdTheme = CreateInstance<DodgeVisualTheme>();
        AssetDatabase.CreateAsset(createdTheme, path);
        AssetDatabase.SaveAssets();
        AssetDatabase.Refresh();

        themeAsset = createdTheme;
        Selection.activeObject = createdTheme;
        EditorGUIUtility.PingObject(createdTheme);

        if (targetGame != null)
        {
            ApplyThemeToTarget();
        }
    }
}
#endif
