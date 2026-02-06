using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "DodgeVisualTheme", menuName = "AdGame2/Dodge Visual Theme")]
public sealed class DodgeVisualTheme : ScriptableObject
{
    [Header("Shared Material")]
    [SerializeField] private Material overrideMaterial;

    [Header("Player")]
    [SerializeField] private Sprite playerSprite;
    [SerializeField] private Color playerColor = new Color(0.2f, 0.85f, 1f, 1f);
    [SerializeField] [Min(0.1f)] private float playerSizeMultiplier = 1f;

    [Header("Obstacle")]
    [SerializeField] private Sprite obstacleSprite;
    [SerializeField] private List<Sprite> obstacleVariants = new List<Sprite>();
    [SerializeField] private bool randomizeObstacleVariant = true;
    [SerializeField] private Color obstacleColor = new Color(1f, 0.4f, 0.2f, 1f);
    [SerializeField] [Min(0.1f)] private float obstacleSizeMultiplier = 1f;

    [Header("Background")]
    [SerializeField] private Sprite backgroundSprite;
    [SerializeField] private Color backgroundColor = new Color(0.19215687f, 0.3019608f, 0.4745098f, 1f);
    [SerializeField] private bool preserveBackgroundAspect = true;
    [SerializeField] [Min(1f)] private float backgroundScalePadding = 1.02f;
    [SerializeField] private int backgroundSortingOrder = -20;

    public Material OverrideMaterial
    {
        get { return overrideMaterial; }
    }

    public Sprite PlayerSprite
    {
        get { return playerSprite; }
    }

    public Color PlayerColor
    {
        get { return playerColor; }
    }

    public float PlayerSizeMultiplier
    {
        get { return playerSizeMultiplier; }
    }

    public Color ObstacleColor
    {
        get { return obstacleColor; }
    }

    public float ObstacleSizeMultiplier
    {
        get { return obstacleSizeMultiplier; }
    }

    public Sprite BackgroundSprite
    {
        get { return backgroundSprite; }
    }

    public Color BackgroundColor
    {
        get { return backgroundColor; }
    }

    public bool PreserveBackgroundAspect
    {
        get { return preserveBackgroundAspect; }
    }

    public float BackgroundScalePadding
    {
        get { return backgroundScalePadding; }
    }

    public int BackgroundSortingOrder
    {
        get { return backgroundSortingOrder; }
    }

    public Sprite GetObstacleSprite(int sequenceIndex)
    {
        if (obstacleVariants != null && obstacleVariants.Count > 0)
        {
            if (randomizeObstacleVariant)
            {
                return obstacleVariants[Random.Range(0, obstacleVariants.Count)];
            }

            int clampedIndex = Mathf.Abs(sequenceIndex) % obstacleVariants.Count;
            return obstacleVariants[clampedIndex];
        }

        return obstacleSprite;
    }
}
