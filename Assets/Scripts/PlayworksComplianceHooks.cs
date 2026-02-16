using Luna.Unity;
using UnityEngine;

public sealed class PlayworksComplianceHooks : MonoBehaviour
{
    [LunaPlaygroundField("iOS Store URL", 0, "CTA")]
    [SerializeField] private string iosStoreUrl = "";

    [LunaPlaygroundField("Android Store URL", 1, "CTA")]
    [SerializeField] private string androidStoreUrl = "";

    [LunaPlaygroundField("Gameplay Variant", 2, "Gameplay")]
    [SerializeField] [Range(0, 2)] private int gameplayVariant = 0;

    [LunaPlaygroundField("Enemy Sprite", 3, "Gameplay")]
    [SerializeField] private Sprite enemySprite;

    [LunaPlaygroundField("Attack FX Prefab", 4, "Gameplay")]
    [SerializeField] private GameObject attackEffectPrefab;

    [LunaPlaygroundField("Enemy Prefab", 5, "Gameplay")]
    [SerializeField] private GameObject enemyPrefab;

    private bool gameEnded;

    private void Start()
    {
        // Auto-bootstrap fallback if the scene is missing the gameplay component.
        if (GetComponent<SimpleDodgeGame>() == null)
        {
            try
            {
                gameObject.AddComponent<SimpleDodgeGame>();
            }
            catch (System.Exception exception)
            {
                Debug.LogError("Failed to add SimpleDodgeGame: " + exception.Message);
            }
        }

        SimpleDodgeGame gameplay = GetComponent<SimpleDodgeGame>();
        if (gameplay != null)
        {
            gameplay.ApplyPlaygroundVariant(gameplayVariant);
            gameplay.ConfigureEnemyPresentation(enemyPrefab, enemySprite, attackEffectPrefab);
        }

        // LP3007 custom event
        // Keep gameplay initialization resilient even if analytics is unavailable in preview/runtime.
        try
        {
            Analytics.LogEvent("session_start", 1);
        }
        catch (System.Exception exception)
        {
            Debug.LogWarning("Analytics.LogEvent(session_start) failed: " + exception.Message);
        }
    }

    // Bind this to your CTA button OnClick.
    public void TriggerInstall()
    {
        // LP3006 required API
        Playable.InstallFullGame(iosStoreUrl, androidStoreUrl);
        Analytics.LogEvent("cta_click", 1);
    }

    // Call this when gameplay is finished.
    public void TriggerGameEnded()
    {
        if (gameEnded)
        {
            return;
        }

        gameEnded = true;
        // LP3015 required API
        LifeCycle.GameEnded(new object[] { "completed" });
        Analytics.LogEvent("game_end", 1);
    }
}
