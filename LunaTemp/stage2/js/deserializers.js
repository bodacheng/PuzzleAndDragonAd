var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.JointSpring' )
  var i1021 = data
  i1020.spring = i1021[0]
  i1020.damper = i1021[1]
  i1020.targetPosition = i1021[2]
  return i1020
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1022 = root || request.c( 'UnityEngine.JointMotor' )
  var i1023 = data
  i1022.m_TargetVelocity = i1023[0]
  i1022.m_Force = i1023[1]
  i1022.m_FreeSpin = i1023[2]
  return i1022
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.JointLimits' )
  var i1025 = data
  i1024.m_Min = i1025[0]
  i1024.m_Max = i1025[1]
  i1024.m_Bounciness = i1025[2]
  i1024.m_BounceMinVelocity = i1025[3]
  i1024.m_ContactDistance = i1025[4]
  i1024.minBounce = i1025[5]
  i1024.maxBounce = i1025[6]
  return i1024
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.JointDrive' )
  var i1027 = data
  i1026.m_PositionSpring = i1027[0]
  i1026.m_PositionDamper = i1027[1]
  i1026.m_MaximumForce = i1027[2]
  i1026.m_UseAcceleration = i1027[3]
  return i1026
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1028 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1029 = data
  i1028.m_Spring = i1029[0]
  i1028.m_Damper = i1029[1]
  return i1028
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1030 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1031 = data
  i1030.m_Limit = i1031[0]
  i1030.m_Bounciness = i1031[1]
  i1030.m_ContactDistance = i1031[2]
  return i1030
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1033 = data
  i1032.m_ExtremumSlip = i1033[0]
  i1032.m_ExtremumValue = i1033[1]
  i1032.m_AsymptoteSlip = i1033[2]
  i1032.m_AsymptoteValue = i1033[3]
  i1032.m_Stiffness = i1033[4]
  return i1032
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1034 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1035 = data
  i1034.m_LowerAngle = i1035[0]
  i1034.m_UpperAngle = i1035[1]
  return i1034
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1036 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1037 = data
  i1036.m_MotorSpeed = i1037[0]
  i1036.m_MaximumMotorTorque = i1037[1]
  return i1036
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1038 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1039 = data
  i1038.m_DampingRatio = i1039[0]
  i1038.m_Frequency = i1039[1]
  i1038.m_Angle = i1039[2]
  return i1038
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1040 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1041 = data
  i1040.m_LowerTranslation = i1041[0]
  i1040.m_UpperTranslation = i1041[1]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1043 = data
  i1042.name = i1043[0]
  i1042.width = i1043[1]
  i1042.height = i1043[2]
  i1042.mipmapCount = i1043[3]
  i1042.anisoLevel = i1043[4]
  i1042.filterMode = i1043[5]
  i1042.hdr = !!i1043[6]
  i1042.format = i1043[7]
  i1042.wrapMode = i1043[8]
  i1042.alphaIsTransparency = !!i1043[9]
  i1042.alphaSource = i1043[10]
  i1042.graphicsFormat = i1043[11]
  i1042.sRGBTexture = !!i1043[12]
  i1042.desiredColorSpace = i1043[13]
  i1042.wrapU = i1043[14]
  i1042.wrapV = i1043[15]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1044 = root || new pc.UnityMaterial()
  var i1045 = data
  i1044.name = i1045[0]
  request.r(i1045[1], i1045[2], 0, i1044, 'shader')
  i1044.renderQueue = i1045[3]
  i1044.enableInstancing = !!i1045[4]
  var i1047 = i1045[5]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1047[i + 0]) );
  }
  i1044.floatParameters = i1046
  var i1049 = i1045[6]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1049[i + 0]) );
  }
  i1044.colorParameters = i1048
  var i1051 = i1045[7]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1051[i + 0]) );
  }
  i1044.vectorParameters = i1050
  var i1053 = i1045[8]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1053[i + 0]) );
  }
  i1044.textureParameters = i1052
  var i1055 = i1045[9]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1055[i + 0]) );
  }
  i1044.materialFlags = i1054
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1059 = data
  i1058.name = i1059[0]
  i1058.value = i1059[1]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1063 = data
  i1062.name = i1063[0]
  i1062.value = new pc.Color(i1063[1], i1063[2], i1063[3], i1063[4])
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1067 = data
  i1066.name = i1067[0]
  i1066.value = new pc.Vec4( i1067[1], i1067[2], i1067[3], i1067[4] )
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1071 = data
  i1070.name = i1071[0]
  request.r(i1071[1], i1071[2], 0, i1070, 'value')
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1075 = data
  i1074.name = i1075[0]
  i1074.enabled = !!i1075[1]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1077 = data
  i1076.name = i1077[0]
  i1076.index = i1077[1]
  i1076.startup = !!i1077[2]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1079 = data
  i1078.aspect = i1079[0]
  i1078.orthographic = !!i1079[1]
  i1078.orthographicSize = i1079[2]
  i1078.backgroundColor = new pc.Color(i1079[3], i1079[4], i1079[5], i1079[6])
  i1078.nearClipPlane = i1079[7]
  i1078.farClipPlane = i1079[8]
  i1078.fieldOfView = i1079[9]
  i1078.depth = i1079[10]
  i1078.clearFlags = i1079[11]
  i1078.cullingMask = i1079[12]
  i1078.rect = i1079[13]
  request.r(i1079[14], i1079[15], 0, i1078, 'targetTexture')
  i1078.usePhysicalProperties = !!i1079[16]
  i1078.focalLength = i1079[17]
  i1078.sensorSize = new pc.Vec2( i1079[18], i1079[19] )
  i1078.lensShift = new pc.Vec2( i1079[20], i1079[21] )
  i1078.gateFit = i1079[22]
  i1078.commandBufferCount = i1079[23]
  i1078.cameraType = i1079[24]
  i1078.enabled = !!i1079[25]
  return i1078
}

Deserializers["PlayworksComplianceHooks"] = function (request, data, root) {
  var i1080 = root || request.c( 'PlayworksComplianceHooks' )
  var i1081 = data
  i1080.iosStoreUrl = i1081[0]
  i1080.androidStoreUrl = i1081[1]
  i1080.gameplayVariant = i1081[2]
  return i1080
}

Deserializers["SimpleDodgeGame"] = function (request, data, root) {
  var i1082 = root || request.c( 'SimpleDodgeGame' )
  var i1083 = data
  i1082.columns = i1083[0]
  i1082.rows = i1083[1]
  i1082.boardSidePadding = i1083[2]
  i1082.boardBottomPadding = i1083[3]
  i1082.boardTopPadding = i1083[4]
  i1082.orbScale = i1083[5]
  i1082.clearDelaySeconds = i1083[6]
  i1082.fallDurationSeconds = i1083[7]
  i1082.roundDurationSeconds = i1083[8]
  i1082.baseScorePerOrb = i1083[9]
  i1082.backgroundColor = new pc.Color(i1083[10], i1083[11], i1083[12], i1083[13])
  i1082.boardColor = new pc.Color(i1083[14], i1083[15], i1083[16], i1083[17])
  i1082.boardOutlineColor = new pc.Color(i1083[18], i1083[19], i1083[20], i1083[21])
  var i1085 = i1083[22]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 4) {
    i1084.push( new pc.Color(i1085[i + 0], i1085[i + 1], i1085[i + 2], i1085[i + 3]) );
  }
  i1082.orbColors = i1084
  var i1087 = i1083[23]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 2) {
  request.r(i1087[i + 0], i1087[i + 1], 2, i1086, '')
  }
  i1082.orbSprites = i1086
  request.r(i1083[24], i1083[25], 0, i1082, 'spriteMaterial')
  i1082.useCustomMaterialInEditor = !!i1083[26]
  i1082.useCustomMaterialInWebGl = !!i1083[27]
  i1082.fallbackToDefaultIfShaderUnsupported = !!i1083[28]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1093 = data
  i1092.name = i1093[0]
  i1092.tagId = i1093[1]
  i1092.enabled = !!i1093[2]
  i1092.isStatic = !!i1093[3]
  i1092.layer = i1093[4]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1095 = data
  i1094.ambientIntensity = i1095[0]
  i1094.reflectionIntensity = i1095[1]
  i1094.ambientMode = i1095[2]
  i1094.ambientLight = new pc.Color(i1095[3], i1095[4], i1095[5], i1095[6])
  i1094.ambientSkyColor = new pc.Color(i1095[7], i1095[8], i1095[9], i1095[10])
  i1094.ambientGroundColor = new pc.Color(i1095[11], i1095[12], i1095[13], i1095[14])
  i1094.ambientEquatorColor = new pc.Color(i1095[15], i1095[16], i1095[17], i1095[18])
  i1094.fogColor = new pc.Color(i1095[19], i1095[20], i1095[21], i1095[22])
  i1094.fogEndDistance = i1095[23]
  i1094.fogStartDistance = i1095[24]
  i1094.fogDensity = i1095[25]
  i1094.fog = !!i1095[26]
  request.r(i1095[27], i1095[28], 0, i1094, 'skybox')
  i1094.fogMode = i1095[29]
  var i1097 = i1095[30]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1097[i + 0]) );
  }
  i1094.lightmaps = i1096
  i1094.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1095[31], i1094.lightProbes)
  i1094.lightmapsMode = i1095[32]
  i1094.mixedBakeMode = i1095[33]
  i1094.environmentLightingMode = i1095[34]
  i1094.ambientProbe = new pc.SphericalHarmonicsL2(i1095[35])
  i1094.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1095[36])
  i1094.useReferenceAmbientProbe = !!i1095[37]
  request.r(i1095[38], i1095[39], 0, i1094, 'customReflection')
  request.r(i1095[40], i1095[41], 0, i1094, 'defaultReflection')
  i1094.defaultReflectionMode = i1095[42]
  i1094.defaultReflectionResolution = i1095[43]
  i1094.sunLightObjectId = i1095[44]
  i1094.pixelLightCount = i1095[45]
  i1094.defaultReflectionHDR = !!i1095[46]
  i1094.hasLightDataAsset = !!i1095[47]
  i1094.hasManualGenerate = !!i1095[48]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1101 = data
  request.r(i1101[0], i1101[1], 0, i1100, 'lightmapColor')
  request.r(i1101[2], i1101[3], 0, i1100, 'lightmapDirection')
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1102 = root || new UnityEngine.LightProbes()
  var i1103 = data
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1111 = data
  var i1113 = i1111[0]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1113[i + 0]));
  }
  i1110.ShaderCompilationErrors = i1112
  i1110.name = i1111[1]
  i1110.guid = i1111[2]
  var i1115 = i1111[3]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( i1115[i + 0] );
  }
  i1110.shaderDefinedKeywords = i1114
  var i1117 = i1111[4]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1117[i + 0]) );
  }
  i1110.passes = i1116
  var i1119 = i1111[5]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1119[i + 0]) );
  }
  i1110.usePasses = i1118
  var i1121 = i1111[6]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1121[i + 0]) );
  }
  i1110.defaultParameterValues = i1120
  request.r(i1111[7], i1111[8], 0, i1110, 'unityFallbackShader')
  i1110.readDepth = !!i1111[9]
  i1110.hasDepthOnlyPass = !!i1111[10]
  i1110.isCreatedByShaderGraph = !!i1111[11]
  i1110.disableBatching = !!i1111[12]
  i1110.compiled = !!i1111[13]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1125 = data
  i1124.shaderName = i1125[0]
  i1124.errorMessage = i1125[1]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1130 = root || new pc.UnityShaderPass()
  var i1131 = data
  i1130.id = i1131[0]
  i1130.subShaderIndex = i1131[1]
  i1130.name = i1131[2]
  i1130.passType = i1131[3]
  i1130.grabPassTextureName = i1131[4]
  i1130.usePass = !!i1131[5]
  i1130.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1131[6], i1130.zTest)
  i1130.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1131[7], i1130.zWrite)
  i1130.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1131[8], i1130.culling)
  i1130.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1131[9], i1130.blending)
  i1130.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1131[10], i1130.alphaBlending)
  i1130.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1131[11], i1130.colorWriteMask)
  i1130.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1131[12], i1130.offsetUnits)
  i1130.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1131[13], i1130.offsetFactor)
  i1130.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1131[14], i1130.stencilRef)
  i1130.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1131[15], i1130.stencilReadMask)
  i1130.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1131[16], i1130.stencilWriteMask)
  i1130.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1131[17], i1130.stencilOp)
  i1130.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1131[18], i1130.stencilOpFront)
  i1130.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1131[19], i1130.stencilOpBack)
  var i1133 = i1131[20]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1133[i + 0]) );
  }
  i1130.tags = i1132
  var i1135 = i1131[21]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( i1135[i + 0] );
  }
  i1130.passDefinedKeywords = i1134
  var i1137 = i1131[22]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1137[i + 0]) );
  }
  i1130.passDefinedKeywordGroups = i1136
  var i1139 = i1131[23]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1139[i + 0]) );
  }
  i1130.variants = i1138
  var i1141 = i1131[24]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1141[i + 0]) );
  }
  i1130.excludedVariants = i1140
  i1130.hasDepthReader = !!i1131[25]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1143 = data
  i1142.val = i1143[0]
  i1142.name = i1143[1]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1145 = data
  i1144.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1145[0], i1144.src)
  i1144.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1145[1], i1144.dst)
  i1144.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1145[2], i1144.op)
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1147 = data
  i1146.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[0], i1146.pass)
  i1146.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[1], i1146.fail)
  i1146.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[2], i1146.zFail)
  i1146.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[3], i1146.comp)
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1151 = data
  i1150.name = i1151[0]
  i1150.value = i1151[1]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1155 = data
  var i1157 = i1155[0]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( i1157[i + 0] );
  }
  i1154.keywords = i1156
  i1154.hasDiscard = !!i1155[1]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1161 = data
  i1160.passId = i1161[0]
  i1160.subShaderIndex = i1161[1]
  var i1163 = i1161[2]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( i1163[i + 0] );
  }
  i1160.keywords = i1162
  i1160.vertexProgram = i1161[3]
  i1160.fragmentProgram = i1161[4]
  i1160.exportedForWebGl2 = !!i1161[5]
  i1160.readDepth = !!i1161[6]
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1167 = data
  request.r(i1167[0], i1167[1], 0, i1166, 'shader')
  i1166.pass = i1167[2]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1171 = data
  i1170.name = i1171[0]
  i1170.type = i1171[1]
  i1170.value = new pc.Vec4( i1171[2], i1171[3], i1171[4], i1171[5] )
  i1170.textureValue = i1171[6]
  i1170.shaderPropertyFlag = i1171[7]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1173 = data
  i1172.name = i1173[0]
  request.r(i1173[1], i1173[2], 0, i1172, 'texture')
  i1172.aabb = i1173[3]
  i1172.vertices = i1173[4]
  i1172.triangles = i1173[5]
  i1172.textureRect = UnityEngine.Rect.MinMaxRect(i1173[6], i1173[7], i1173[8], i1173[9])
  i1172.packedRect = UnityEngine.Rect.MinMaxRect(i1173[10], i1173[11], i1173[12], i1173[13])
  i1172.border = new pc.Vec4( i1173[14], i1173[15], i1173[16], i1173[17] )
  i1172.transparency = i1173[18]
  i1172.bounds = i1173[19]
  i1172.pixelsPerUnit = i1173[20]
  i1172.textureWidth = i1173[21]
  i1172.textureHeight = i1173[22]
  i1172.nativeSize = new pc.Vec2( i1173[23], i1173[24] )
  i1172.pivot = new pc.Vec2( i1173[25], i1173[26] )
  i1172.textureRectOffset = new pc.Vec2( i1173[27], i1173[28] )
  return i1172
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i1174 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i1175 = data
  var i1177 = i1175[0]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('UnityEngine.InputSystem.InputActionMap', i1177[i + 0]) );
  }
  i1174.m_ActionMaps = i1176
  var i1179 = i1175[1]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('UnityEngine.InputSystem.InputControlScheme', i1179[i + 0]) );
  }
  i1174.m_ControlSchemes = i1178
  i1174.m_IsProjectWide = !!i1175[2]
  return i1174
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i1182 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i1183 = data
  i1182.m_Name = i1183[0]
  i1182.m_Id = i1183[1]
  request.r(i1183[2], i1183[3], 0, i1182, 'm_Asset')
  var i1185 = i1183[4]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('UnityEngine.InputSystem.InputAction', i1185[i + 0]) );
  }
  i1182.m_Actions = i1184
  var i1187 = i1183[5]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('UnityEngine.InputSystem.InputBinding', i1187[i + 0]) );
  }
  i1182.m_Bindings = i1186
  return i1182
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i1190 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i1191 = data
  i1190.m_Name = i1191[0]
  i1190.m_Type = i1191[1]
  i1190.m_ExpectedControlType = i1191[2]
  i1190.m_Id = i1191[3]
  i1190.m_Processors = i1191[4]
  i1190.m_Interactions = i1191[5]
  var i1193 = i1191[6]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('UnityEngine.InputSystem.InputBinding', i1193[i + 0]) );
  }
  i1190.m_SingletonActionBindings = i1192
  i1190.m_Flags = i1191[7]
  return i1190
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i1196 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i1197 = data
  i1196.m_Name = i1197[0]
  i1196.m_Id = i1197[1]
  i1196.m_Path = i1197[2]
  i1196.m_Interactions = i1197[3]
  i1196.m_Processors = i1197[4]
  i1196.m_Groups = i1197[5]
  i1196.m_Action = i1197[6]
  i1196.m_Flags = i1197[7]
  return i1196
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i1200 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i1201 = data
  i1200.m_Name = i1201[0]
  i1200.m_BindingGroup = i1201[1]
  var i1203 = i1201[2]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i1203[i + 0]) );
  }
  i1200.m_DeviceRequirements = i1202
  return i1200
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i1206 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i1207 = data
  i1206.m_ControlPath = i1207[0]
  i1206.m_Flags = i1207[1]
  return i1206
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i1208 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i1209 = data
  request.r(i1209[0], i1209[1], 0, i1208, 'm_Asset')
  i1208.m_ActionId = i1209[2]
  return i1208
}

Deserializers["Luna.Unity.Utils.Shaders.LunaSVC"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.Utils.Shaders.LunaSVC' )
  var i1211 = data
  i1210._svcLunaVersion = i1211[0]
  var i1213 = i1211[1]
  var i1212 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.add(request.d(' . ‵', i1213[i + 0]));
  }
  i1210._shaderVariants = i1212
  var i1215 = i1211[2]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.add(request.d(' . ‵', i1215[i + 0]));
  }
  i1210._usedByLunaBuild = i1214
  var i1217 = i1211[3]
  var i1216 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.add(request.d(' . ‵', i1217[i + 0]));
  }
  i1210._includedShaderVariants = i1216
  var i1219 = i1211[4]
  var i1218 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.add(request.d(' . ‵', i1219[i + 0]));
  }
  i1210._excludedShaderVariants = i1218
  i1210.version = System.Int64(i1211[5])
  var i1221 = i1211[6]
  var i1220 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader')))
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader', i1221[i + 0]));
  }
  i1210._shaderParsedShaders = i1220
  var i1223 = i1211[7]
  var i1222 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.add(i1223[i + 0]);
  }
  i1210._modifiedShaders = i1222
  i1210.invalidShaders = !!i1211[8]
  i1210._sceneLightData = request.d('Luna.Editor.Utils.Shaders.SceneLightData', i1211[9], i1210._sceneLightData)
  return i1210
}

Deserializers[" . ‵"] = function (request, data, root) {
  var i1226 = root || request.c( ' . ‵' )
  var i1227 = data
  i1226.shaderCompilerPlatform = i1227[0]
  request.r(i1227[1], i1227[2], 0, i1226, 'shader')
  i1226.passType = i1227[3]
  i1226.passId = i1227[4]
  i1226.subShaderIndex = i1227[5]
  i1226.upToDate = !!i1227[6]
  var i1229 = i1227[7]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( i1229[i + 0] );
  }
  i1226.keywords = i1228
  return i1226
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader' )
  var i1233 = data
  var i1235 = i1233[0]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader')))
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader', i1235[i + 0]));
  }
  i1232.ParsedSubShaders = i1234
  request.r(i1233[1], i1233[2], 0, i1232, 'Shader')
  i1232.ShaderPath = i1233[3]
  var i1237 = i1233[4]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( i1237[i + 0] );
  }
  i1232.ShaderDefinedKeywords = i1236
  request.r(i1233[5], i1233[6], 0, i1232, 'fallbackShader')
  var i1239 = i1233[7]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ShaderCompilationError')))
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.add(request.d('Luna.Unity.Utils.Shaders.ShaderCompilationError', i1239[i + 0]));
  }
  i1232.CompilationErrors = i1238
  var i1241 = i1233[8]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.add(request.d(' . ‵', i1241[i + 0]));
  }
  i1232.Variants = i1240
  return i1232
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader' )
  var i1245 = data
  i1244.Index = i1245[0]
  var i1247 = i1245[1]
  var i1246 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass')))
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass', i1247[i + 0]));
  }
  i1244.Passes = i1246
  request.r(i1245[2], i1245[3], 0, i1244, 'Shader')
  var i1249 = i1245[4]
  var i1248 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i1249[i + 0]));
  }
  i1244.Tags = i1248
  return i1244
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass' )
  var i1253 = data
  request.r(i1253[0], i1253[1], 0, i1252, 'Shader')
  var i1255 = i1253[2]
  var i1254 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant')))
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant', i1255[i + 0]));
  }
  i1252.ShaderVariants = i1254
  var i1257 = i1253[3]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( i1257[i + 0] );
  }
  i1252.DefinedKeywords = i1256
  var i1259 = i1253[4]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup')))
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup', i1259[i + 0]));
  }
  i1252.KeywordGroups = i1258
  i1252.KeywordsMinimalCardinality = i1253[5]
  i1252.ContainsInvalidVariant = !!i1253[6]
  var i1261 = i1253[7]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.add(request.d(' . ‵', i1261[i + 0]));
  }
  i1252.VariantStructures = i1260
  var i1263 = i1253[8]
  var i1262 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ShaderCompilationError')))
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.add(request.d('Luna.Unity.Utils.Shaders.ShaderCompilationError', i1263[i + 0]));
  }
  i1252.CompilationErrors = i1262
  i1252.HasDepthReader = !!i1253[9]
  i1252.Id = i1253[10]
  i1252.SubShaderIndex = i1253[11]
  i1252.SerializedObjectId = i1253[12]
  var i1265 = i1253[13]
  var i1264 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i1265[i + 0]));
  }
  i1252.Tags = i1264
  i1252.UsePass = request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass', i1253[14], i1252.UsePass)
  i1252.GrabPassTextureName = i1253[15]
  i1252.PlatformMask = i1253[16]
  return i1252
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant' )
  var i1269 = data
  i1268.ShaderCompilerPlatform = i1269[0]
  i1268.NoShaderVariant = !!i1269[1]
  i1268.VertexProgram = i1269[2]
  i1268.FragmentProgram = i1269[3]
  i1268.LOD = i1269[4]
  i1268.readDepth = !!i1269[5]
  i1268.PassId = i1269[6]
  i1268.SubShaderIndex = i1269[7]
  var i1271 = i1269[8]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.push( i1271[i + 0] );
  }
  i1268.Keywords = i1270
  var i1273 = i1269[9]
  var i1272 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i1273[i + 0]));
  }
  i1268.Tags = i1272
  return i1268
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag' )
  var i1277 = data
  i1276.Key = i1277[0]
  i1276.Value = i1277[1]
  return i1276
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup' )
  var i1281 = data
  var i1283 = i1281[0]
  var i1282 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.add(i1283[i + 0]);
  }
  i1280.Keywords = i1282
  i1280.hasDiscard = !!i1281[1]
  return i1280
}

Deserializers["Luna.Unity.Utils.Shaders.ShaderCompilationError"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.Utils.Shaders.ShaderCompilationError' )
  var i1287 = data
  i1286.Variant = !!i1287[0]
  i1286.ShaderName = i1287[1]
  var i1289 = i1287[2]
  var i1288 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ErrorDetails')))
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.add(request.d('Luna.Unity.Utils.Shaders.ErrorDetails', i1289[i + 0]));
  }
  i1286.Details = i1288
  return i1286
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass' )
  var i1291 = data
  i1290.shader = i1291[0]
  i1290.pass = i1291[1]
  return i1290
}

Deserializers["Luna.Editor.Utils.Shaders.SceneLightData"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Editor.Utils.Shaders.SceneLightData' )
  var i1295 = data
  i1294.PointLightCount = i1295[0]
  i1294.SpotLightCount = i1295[1]
  i1294.DirectionalLightCount = i1295[2]
  i1294.LightmapOn = !!i1295[3]
  i1294.DirlightmapCombined = !!i1295[4]
  i1294.DirectionalCookieExists = !!i1295[5]
  i1294.PointCookieExists = !!i1295[6]
  i1294.SpotCookieExists = !!i1295[7]
  i1294.AddiitonalLightsKeywordRequired = !!i1295[8]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1297 = data
  var i1299 = i1297[0]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1299[i + 0]) );
  }
  i1296.files = i1298
  i1296.componentToPrefabIds = i1297[1]
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1303 = data
  i1302.path = i1303[0]
  request.r(i1303[1], i1303[2], 0, i1302, 'unityObject')
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1305 = data
  var i1307 = i1305[0]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1307[i + 0]) );
  }
  i1304.scriptsExecutionOrder = i1306
  var i1309 = i1305[1]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1309[i + 0]) );
  }
  i1304.sortingLayers = i1308
  var i1311 = i1305[2]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1311[i + 0]) );
  }
  i1304.cullingLayers = i1310
  i1304.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1305[3], i1304.timeSettings)
  i1304.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1305[4], i1304.physicsSettings)
  i1304.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1305[5], i1304.physics2DSettings)
  i1304.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1305[6], i1304.qualitySettings)
  i1304.enableRealtimeShadows = !!i1305[7]
  i1304.enableAutoInstancing = !!i1305[8]
  i1304.enableStaticBatching = !!i1305[9]
  i1304.enableDynamicBatching = !!i1305[10]
  i1304.lightmapEncodingQuality = i1305[11]
  i1304.desiredColorSpace = i1305[12]
  var i1313 = i1305[13]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( i1313[i + 0] );
  }
  i1304.allTags = i1312
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1317 = data
  i1316.name = i1317[0]
  i1316.value = i1317[1]
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1321 = data
  i1320.id = i1321[0]
  i1320.name = i1321[1]
  i1320.value = i1321[2]
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1325 = data
  i1324.id = i1325[0]
  i1324.name = i1325[1]
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1327 = data
  i1326.fixedDeltaTime = i1327[0]
  i1326.maximumDeltaTime = i1327[1]
  i1326.timeScale = i1327[2]
  i1326.maximumParticleTimestep = i1327[3]
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1329 = data
  i1328.gravity = new pc.Vec3( i1329[0], i1329[1], i1329[2] )
  i1328.defaultSolverIterations = i1329[3]
  i1328.bounceThreshold = i1329[4]
  i1328.autoSyncTransforms = !!i1329[5]
  i1328.autoSimulation = !!i1329[6]
  var i1331 = i1329[7]
  var i1330 = []
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1331[i + 0]) );
  }
  i1328.collisionMatrix = i1330
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1335 = data
  i1334.enabled = !!i1335[0]
  i1334.layerId = i1335[1]
  i1334.otherLayerId = i1335[2]
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1337 = data
  request.r(i1337[0], i1337[1], 0, i1336, 'material')
  i1336.gravity = new pc.Vec2( i1337[2], i1337[3] )
  i1336.positionIterations = i1337[4]
  i1336.velocityIterations = i1337[5]
  i1336.velocityThreshold = i1337[6]
  i1336.maxLinearCorrection = i1337[7]
  i1336.maxAngularCorrection = i1337[8]
  i1336.maxTranslationSpeed = i1337[9]
  i1336.maxRotationSpeed = i1337[10]
  i1336.baumgarteScale = i1337[11]
  i1336.baumgarteTOIScale = i1337[12]
  i1336.timeToSleep = i1337[13]
  i1336.linearSleepTolerance = i1337[14]
  i1336.angularSleepTolerance = i1337[15]
  i1336.defaultContactOffset = i1337[16]
  i1336.autoSimulation = !!i1337[17]
  i1336.queriesHitTriggers = !!i1337[18]
  i1336.queriesStartInColliders = !!i1337[19]
  i1336.callbacksOnDisable = !!i1337[20]
  i1336.reuseCollisionCallbacks = !!i1337[21]
  i1336.autoSyncTransforms = !!i1337[22]
  var i1339 = i1337[23]
  var i1338 = []
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1339[i + 0]) );
  }
  i1336.collisionMatrix = i1338
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1343 = data
  i1342.enabled = !!i1343[0]
  i1342.layerId = i1343[1]
  i1342.otherLayerId = i1343[2]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1345 = data
  var i1347 = i1345[0]
  var i1346 = []
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1347[i + 0]) );
  }
  i1344.qualityLevels = i1346
  var i1349 = i1345[1]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( i1349[i + 0] );
  }
  i1344.names = i1348
  i1344.shadows = i1345[2]
  i1344.anisotropicFiltering = i1345[3]
  i1344.antiAliasing = i1345[4]
  i1344.lodBias = i1345[5]
  i1344.shadowCascades = i1345[6]
  i1344.shadowDistance = i1345[7]
  i1344.shadowmaskMode = i1345[8]
  i1344.shadowProjection = i1345[9]
  i1344.shadowResolution = i1345[10]
  i1344.softParticles = !!i1345[11]
  i1344.softVegetation = !!i1345[12]
  i1344.activeColorSpace = i1345[13]
  i1344.desiredColorSpace = i1345[14]
  i1344.masterTextureLimit = i1345[15]
  i1344.maxQueuedFrames = i1345[16]
  i1344.particleRaycastBudget = i1345[17]
  i1344.pixelLightCount = i1345[18]
  i1344.realtimeReflectionProbes = !!i1345[19]
  i1344.shadowCascade2Split = i1345[20]
  i1344.shadowCascade4Split = new pc.Vec3( i1345[21], i1345[22], i1345[23] )
  i1344.streamingMipmapsActive = !!i1345[24]
  i1344.vSyncCount = i1345[25]
  i1344.asyncUploadBufferSize = i1345[26]
  i1344.asyncUploadTimeSlice = i1345[27]
  i1344.billboardsFaceCameraPosition = !!i1345[28]
  i1344.shadowNearPlaneOffset = i1345[29]
  i1344.streamingMipmapsMemoryBudget = i1345[30]
  i1344.maximumLODLevel = i1345[31]
  i1344.streamingMipmapsAddAllCameras = !!i1345[32]
  i1344.streamingMipmapsMaxLevelReduction = i1345[33]
  i1344.streamingMipmapsRenderersPerFrame = i1345[34]
  i1344.resolutionScalingFixedDPIFactor = i1345[35]
  i1344.streamingMipmapsMaxFileIORequests = i1345[36]
  i1344.currentQualityLevel = i1345[37]
  return i1344
}

Deserializers["Luna.Unity.Utils.Shaders.ErrorDetails"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.Utils.Shaders.ErrorDetails' )
  var i1355 = data
  i1354.SubShaderIndex = i1355[0]
  i1354.PassId = i1355[1]
  var i1357 = i1355[2]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.push( i1357[i + 0] );
  }
  i1354.ShaderVariantKeywords = i1356
  var i1359 = i1355[3]
  var i1358 = []
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.push( i1359[i + 0] );
  }
  i1354.Messages = i1358
  return i1354
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"12":[13],"14":[13],"15":[13],"16":[13],"17":[13],"18":[13],"19":[20],"21":[1],"22":[23],"24":[23],"25":[23],"26":[23],"27":[23],"28":[23],"29":[30],"31":[30],"32":[30],"33":[30],"34":[30],"35":[30],"36":[30],"37":[30],"38":[30],"39":[30],"40":[30],"41":[30],"42":[30],"43":[1],"44":[45],"46":[47],"48":[47],"49":[50],"51":[52],"53":[1],"54":[55],"56":[57],"58":[49],"59":[50],"60":[45,50],"61":[50,62],"63":[50],"64":[62,50],"65":[45],"66":[62,50],"67":[50],"68":[50],"69":[50],"70":[49],"71":[62,50],"72":[50],"73":[49],"74":[50],"75":[50],"76":[50],"77":[50],"78":[50],"79":[50],"80":[50],"81":[50],"82":[50],"83":[62,50],"84":[50],"85":[50],"86":[50],"87":[50],"88":[62,50],"89":[50],"90":[57],"91":[57],"92":[57],"93":[57],"94":[1],"95":[1]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","PlayworksComplianceHooks","SimpleDodgeGame","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.InputSystem.InputActionAsset","UnityEngine.InputSystem.InputActionReference","Luna.Unity.Utils.Shaders.LunaSVC","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.58f2";

Deserializers.productName = "AdGame2";

Deserializers.lunaInitializationTime = "02/09/2026 07:18:22";

Deserializers.lunaDaysRunning = "1.0";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "PuzzleAndDragon";

Deserializers.lunaAppID = "36796";

Deserializers.projectId = "61b95b9034cdb4f8ab822253bfbd2351";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.14.2\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1719";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4357";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "iOS";

Deserializers.applicationIdentifier = "com.DefaultCompany.AdGame2";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "cb878297-7a4d-4cbc-bb31-fb8d41be27a6";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

