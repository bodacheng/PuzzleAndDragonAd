using System;
using Luna.Unity;
using UnityEngine;

public sealed class PlayworksComplianceHooks : MonoBehaviour
{
	[LunaPlaygroundField("iOS Store URL", 0, "CTA", false, null)]
	[SerializeField]
	private string iosStoreUrl = "";

	[LunaPlaygroundField("Android Store URL", 1, "CTA", false, null)]
	[SerializeField]
	private string androidStoreUrl = "";

	[LunaPlaygroundField("Gameplay Variant", 2, "Gameplay", false, null)]
	[SerializeField]
	[Range(0f, 2f)]
	private int gameplayVariant = 0;

	[LunaPlaygroundField("Enemy Sprite", 3, "Gameplay", false, null)]
	[SerializeField]
	private Sprite enemySprite;

	[LunaPlaygroundField("Attack FX Prefab", 4, "Gameplay", false, null)]
	[SerializeField]
	private GameObject attackEffectPrefab;

	private bool gameEnded;

	private void Start()
	{
		if (GetComponent<SimpleDodgeGame>() == null)
		{
			try
			{
				base.gameObject.AddComponent<SimpleDodgeGame>();
			}
			catch (Exception exception2)
			{
				Debug.LogError("Failed to add SimpleDodgeGame: " + exception2.Message);
			}
		}
		SimpleDodgeGame gameplay = GetComponent<SimpleDodgeGame>();
		if (gameplay != null)
		{
			gameplay.ApplyPlaygroundVariant(gameplayVariant);
			gameplay.ConfigureEnemyPresentation(enemySprite, attackEffectPrefab);
		}
		try
		{
			Analytics.LogEvent("session_start", 1);
		}
		catch (Exception exception)
		{
			Debug.LogWarning("Analytics.LogEvent(session_start) failed: " + exception.Message);
		}
	}

	public void TriggerInstall()
	{
		Playable.InstallFullGame(iosStoreUrl, androidStoreUrl);
		Analytics.LogEvent("cta_click", 1);
	}

	public void TriggerGameEnded()
	{
		if (!gameEnded)
		{
			gameEnded = true;
			LifeCycle.GameEnded(new object[1] { "completed" });
			Analytics.LogEvent("game_end", 1);
		}
	}
}
