var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i208 = root || request.c( 'UnityEngine.JointSpring' )
  var i209 = data
  i208.spring = i209[0]
  i208.damper = i209[1]
  i208.targetPosition = i209[2]
  return i208
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i210 = root || request.c( 'UnityEngine.JointMotor' )
  var i211 = data
  i210.m_TargetVelocity = i211[0]
  i210.m_Force = i211[1]
  i210.m_FreeSpin = i211[2]
  return i210
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i212 = root || request.c( 'UnityEngine.JointLimits' )
  var i213 = data
  i212.m_Min = i213[0]
  i212.m_Max = i213[1]
  i212.m_Bounciness = i213[2]
  i212.m_BounceMinVelocity = i213[3]
  i212.m_ContactDistance = i213[4]
  i212.minBounce = i213[5]
  i212.maxBounce = i213[6]
  return i212
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i214 = root || request.c( 'UnityEngine.JointDrive' )
  var i215 = data
  i214.m_PositionSpring = i215[0]
  i214.m_PositionDamper = i215[1]
  i214.m_MaximumForce = i215[2]
  i214.m_UseAcceleration = i215[3]
  return i214
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i216 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i217 = data
  i216.m_Spring = i217[0]
  i216.m_Damper = i217[1]
  return i216
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i218 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i219 = data
  i218.m_Limit = i219[0]
  i218.m_Bounciness = i219[1]
  i218.m_ContactDistance = i219[2]
  return i218
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i220 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i221 = data
  i220.m_ExtremumSlip = i221[0]
  i220.m_ExtremumValue = i221[1]
  i220.m_AsymptoteSlip = i221[2]
  i220.m_AsymptoteValue = i221[3]
  i220.m_Stiffness = i221[4]
  return i220
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i222 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i223 = data
  i222.m_LowerAngle = i223[0]
  i222.m_UpperAngle = i223[1]
  return i222
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i224 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i225 = data
  i224.m_MotorSpeed = i225[0]
  i224.m_MaximumMotorTorque = i225[1]
  return i224
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i226 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i227 = data
  i226.m_DampingRatio = i227[0]
  i226.m_Frequency = i227[1]
  i226.m_Angle = i227[2]
  return i226
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i228 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i229 = data
  i228.m_LowerTranslation = i229[0]
  i228.m_UpperTranslation = i229[1]
  return i228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i231 = data
  i230.name = i231[0]
  i230.width = i231[1]
  i230.height = i231[2]
  i230.mipmapCount = i231[3]
  i230.anisoLevel = i231[4]
  i230.filterMode = i231[5]
  i230.hdr = !!i231[6]
  i230.format = i231[7]
  i230.wrapMode = i231[8]
  i230.alphaIsTransparency = !!i231[9]
  i230.alphaSource = i231[10]
  i230.graphicsFormat = i231[11]
  i230.sRGBTexture = !!i231[12]
  i230.desiredColorSpace = i231[13]
  i230.wrapU = i231[14]
  i230.wrapV = i231[15]
  return i230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i232 = root || new pc.UnityMaterial()
  var i233 = data
  i232.name = i233[0]
  request.r(i233[1], i233[2], 0, i232, 'shader')
  i232.renderQueue = i233[3]
  i232.enableInstancing = !!i233[4]
  var i235 = i233[5]
  var i234 = []
  for(var i = 0; i < i235.length; i += 1) {
    i234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i235[i + 0]) );
  }
  i232.floatParameters = i234
  var i237 = i233[6]
  var i236 = []
  for(var i = 0; i < i237.length; i += 1) {
    i236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i237[i + 0]) );
  }
  i232.colorParameters = i236
  var i239 = i233[7]
  var i238 = []
  for(var i = 0; i < i239.length; i += 1) {
    i238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i239[i + 0]) );
  }
  i232.vectorParameters = i238
  var i241 = i233[8]
  var i240 = []
  for(var i = 0; i < i241.length; i += 1) {
    i240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i241[i + 0]) );
  }
  i232.textureParameters = i240
  var i243 = i233[9]
  var i242 = []
  for(var i = 0; i < i243.length; i += 1) {
    i242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i243[i + 0]) );
  }
  i232.materialFlags = i242
  return i232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i247 = data
  i246.name = i247[0]
  i246.value = i247[1]
  return i246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i251 = data
  i250.name = i251[0]
  i250.value = new pc.Color(i251[1], i251[2], i251[3], i251[4])
  return i250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i255 = data
  i254.name = i255[0]
  i254.value = new pc.Vec4( i255[1], i255[2], i255[3], i255[4] )
  return i254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i259 = data
  i258.name = i259[0]
  request.r(i259[1], i259[2], 0, i258, 'value')
  return i258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i263 = data
  i262.name = i263[0]
  i262.enabled = !!i263[1]
  return i262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i265 = data
  i264.name = i265[0]
  i264.index = i265[1]
  i264.startup = !!i265[2]
  return i264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i267 = data
  i266.aspect = i267[0]
  i266.orthographic = !!i267[1]
  i266.orthographicSize = i267[2]
  i266.backgroundColor = new pc.Color(i267[3], i267[4], i267[5], i267[6])
  i266.nearClipPlane = i267[7]
  i266.farClipPlane = i267[8]
  i266.fieldOfView = i267[9]
  i266.depth = i267[10]
  i266.clearFlags = i267[11]
  i266.cullingMask = i267[12]
  i266.rect = i267[13]
  request.r(i267[14], i267[15], 0, i266, 'targetTexture')
  i266.usePhysicalProperties = !!i267[16]
  i266.focalLength = i267[17]
  i266.sensorSize = new pc.Vec2( i267[18], i267[19] )
  i266.lensShift = new pc.Vec2( i267[20], i267[21] )
  i266.gateFit = i267[22]
  i266.commandBufferCount = i267[23]
  i266.cameraType = i267[24]
  i266.enabled = !!i267[25]
  return i266
}

Deserializers["PlayworksComplianceHooks"] = function (request, data, root) {
  var i268 = root || request.c( 'PlayworksComplianceHooks' )
  var i269 = data
  i268.iosStoreUrl = i269[0]
  i268.androidStoreUrl = i269[1]
  i268.defaultLevel = i269[2]
  return i268
}

Deserializers["SimpleDodgeGame"] = function (request, data, root) {
  var i270 = root || request.c( 'SimpleDodgeGame' )
  var i271 = data
  i270.playerRadius = i271[0]
  i270.playerMoveSpeed = i271[1]
  i270.playerBottomOffset = i271[2]
  i270.obstacleMinRadius = i271[3]
  i270.obstacleMaxRadius = i271[4]
  i270.obstacleMinSpeed = i271[5]
  i270.obstacleMaxSpeed = i271[6]
  i270.spawnIntervalStart = i271[7]
  i270.spawnIntervalEnd = i271[8]
  i270.difficultyRampSeconds = i271[9]
  request.r(i271[10], i271[11], 0, i270, 'visualTheme')
  i270.defaultPlayerColor = new pc.Color(i271[12], i271[13], i271[14], i271[15])
  i270.defaultObstacleColor = new pc.Color(i271[16], i271[17], i271[18], i271[19])
  i270.defaultBackgroundColor = new pc.Color(i271[20], i271[21], i271[22], i271[23])
  i270.sidePadding = i271[24]
  i270.despawnPadding = i271[25]
  request.r(i271[26], i271[27], 0, i270, 'spriteMaterial')
  i270.useCustomMaterialInEditor = !!i271[28]
  i270.useCustomMaterialInWebGl = !!i271[29]
  i270.fallbackToDefaultIfShaderUnsupported = !!i271[30]
  return i270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i273 = data
  i272.name = i273[0]
  i272.tagId = i273[1]
  i272.enabled = !!i273[2]
  i272.isStatic = !!i273[3]
  i272.layer = i273[4]
  return i272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i275 = data
  i274.ambientIntensity = i275[0]
  i274.reflectionIntensity = i275[1]
  i274.ambientMode = i275[2]
  i274.ambientLight = new pc.Color(i275[3], i275[4], i275[5], i275[6])
  i274.ambientSkyColor = new pc.Color(i275[7], i275[8], i275[9], i275[10])
  i274.ambientGroundColor = new pc.Color(i275[11], i275[12], i275[13], i275[14])
  i274.ambientEquatorColor = new pc.Color(i275[15], i275[16], i275[17], i275[18])
  i274.fogColor = new pc.Color(i275[19], i275[20], i275[21], i275[22])
  i274.fogEndDistance = i275[23]
  i274.fogStartDistance = i275[24]
  i274.fogDensity = i275[25]
  i274.fog = !!i275[26]
  request.r(i275[27], i275[28], 0, i274, 'skybox')
  i274.fogMode = i275[29]
  var i277 = i275[30]
  var i276 = []
  for(var i = 0; i < i277.length; i += 1) {
    i276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i277[i + 0]) );
  }
  i274.lightmaps = i276
  i274.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i275[31], i274.lightProbes)
  i274.lightmapsMode = i275[32]
  i274.mixedBakeMode = i275[33]
  i274.environmentLightingMode = i275[34]
  i274.ambientProbe = new pc.SphericalHarmonicsL2(i275[35])
  i274.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i275[36])
  i274.useReferenceAmbientProbe = !!i275[37]
  request.r(i275[38], i275[39], 0, i274, 'customReflection')
  request.r(i275[40], i275[41], 0, i274, 'defaultReflection')
  i274.defaultReflectionMode = i275[42]
  i274.defaultReflectionResolution = i275[43]
  i274.sunLightObjectId = i275[44]
  i274.pixelLightCount = i275[45]
  i274.defaultReflectionHDR = !!i275[46]
  i274.hasLightDataAsset = !!i275[47]
  i274.hasManualGenerate = !!i275[48]
  return i274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i281 = data
  request.r(i281[0], i281[1], 0, i280, 'lightmapColor')
  request.r(i281[2], i281[3], 0, i280, 'lightmapDirection')
  return i280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i282 = root || new UnityEngine.LightProbes()
  var i283 = data
  return i282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i291 = data
  var i293 = i291[0]
  var i292 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i293.length; i += 1) {
    i292.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i293[i + 0]));
  }
  i290.ShaderCompilationErrors = i292
  i290.name = i291[1]
  i290.guid = i291[2]
  var i295 = i291[3]
  var i294 = []
  for(var i = 0; i < i295.length; i += 1) {
    i294.push( i295[i + 0] );
  }
  i290.shaderDefinedKeywords = i294
  var i297 = i291[4]
  var i296 = []
  for(var i = 0; i < i297.length; i += 1) {
    i296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i297[i + 0]) );
  }
  i290.passes = i296
  var i299 = i291[5]
  var i298 = []
  for(var i = 0; i < i299.length; i += 1) {
    i298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i299[i + 0]) );
  }
  i290.usePasses = i298
  var i301 = i291[6]
  var i300 = []
  for(var i = 0; i < i301.length; i += 1) {
    i300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i301[i + 0]) );
  }
  i290.defaultParameterValues = i300
  request.r(i291[7], i291[8], 0, i290, 'unityFallbackShader')
  i290.readDepth = !!i291[9]
  i290.hasDepthOnlyPass = !!i291[10]
  i290.isCreatedByShaderGraph = !!i291[11]
  i290.disableBatching = !!i291[12]
  i290.compiled = !!i291[13]
  return i290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i305 = data
  i304.shaderName = i305[0]
  i304.errorMessage = i305[1]
  return i304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i310 = root || new pc.UnityShaderPass()
  var i311 = data
  i310.id = i311[0]
  i310.subShaderIndex = i311[1]
  i310.name = i311[2]
  i310.passType = i311[3]
  i310.grabPassTextureName = i311[4]
  i310.usePass = !!i311[5]
  i310.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[6], i310.zTest)
  i310.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[7], i310.zWrite)
  i310.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[8], i310.culling)
  i310.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i311[9], i310.blending)
  i310.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i311[10], i310.alphaBlending)
  i310.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[11], i310.colorWriteMask)
  i310.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[12], i310.offsetUnits)
  i310.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[13], i310.offsetFactor)
  i310.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[14], i310.stencilRef)
  i310.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[15], i310.stencilReadMask)
  i310.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[16], i310.stencilWriteMask)
  i310.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i311[17], i310.stencilOp)
  i310.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i311[18], i310.stencilOpFront)
  i310.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i311[19], i310.stencilOpBack)
  var i313 = i311[20]
  var i312 = []
  for(var i = 0; i < i313.length; i += 1) {
    i312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i313[i + 0]) );
  }
  i310.tags = i312
  var i315 = i311[21]
  var i314 = []
  for(var i = 0; i < i315.length; i += 1) {
    i314.push( i315[i + 0] );
  }
  i310.passDefinedKeywords = i314
  var i317 = i311[22]
  var i316 = []
  for(var i = 0; i < i317.length; i += 1) {
    i316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i317[i + 0]) );
  }
  i310.passDefinedKeywordGroups = i316
  var i319 = i311[23]
  var i318 = []
  for(var i = 0; i < i319.length; i += 1) {
    i318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i319[i + 0]) );
  }
  i310.variants = i318
  var i321 = i311[24]
  var i320 = []
  for(var i = 0; i < i321.length; i += 1) {
    i320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i321[i + 0]) );
  }
  i310.excludedVariants = i320
  i310.hasDepthReader = !!i311[25]
  return i310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i323 = data
  i322.val = i323[0]
  i322.name = i323[1]
  return i322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i325 = data
  i324.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i325[0], i324.src)
  i324.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i325[1], i324.dst)
  i324.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i325[2], i324.op)
  return i324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i327 = data
  i326.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i327[0], i326.pass)
  i326.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i327[1], i326.fail)
  i326.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i327[2], i326.zFail)
  i326.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i327[3], i326.comp)
  return i326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i331 = data
  i330.name = i331[0]
  i330.value = i331[1]
  return i330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i335 = data
  var i337 = i335[0]
  var i336 = []
  for(var i = 0; i < i337.length; i += 1) {
    i336.push( i337[i + 0] );
  }
  i334.keywords = i336
  i334.hasDiscard = !!i335[1]
  return i334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i341 = data
  i340.passId = i341[0]
  i340.subShaderIndex = i341[1]
  var i343 = i341[2]
  var i342 = []
  for(var i = 0; i < i343.length; i += 1) {
    i342.push( i343[i + 0] );
  }
  i340.keywords = i342
  i340.vertexProgram = i341[3]
  i340.fragmentProgram = i341[4]
  i340.exportedForWebGl2 = !!i341[5]
  i340.readDepth = !!i341[6]
  return i340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i347 = data
  request.r(i347[0], i347[1], 0, i346, 'shader')
  i346.pass = i347[2]
  return i346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i351 = data
  i350.name = i351[0]
  i350.type = i351[1]
  i350.value = new pc.Vec4( i351[2], i351[3], i351[4], i351[5] )
  i350.textureValue = i351[6]
  i350.shaderPropertyFlag = i351[7]
  return i350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i353 = data
  i352.name = i353[0]
  request.r(i353[1], i353[2], 0, i352, 'texture')
  i352.aabb = i353[3]
  i352.vertices = i353[4]
  i352.triangles = i353[5]
  i352.textureRect = UnityEngine.Rect.MinMaxRect(i353[6], i353[7], i353[8], i353[9])
  i352.packedRect = UnityEngine.Rect.MinMaxRect(i353[10], i353[11], i353[12], i353[13])
  i352.border = new pc.Vec4( i353[14], i353[15], i353[16], i353[17] )
  i352.transparency = i353[18]
  i352.bounds = i353[19]
  i352.pixelsPerUnit = i353[20]
  i352.textureWidth = i353[21]
  i352.textureHeight = i353[22]
  i352.nativeSize = new pc.Vec2( i353[23], i353[24] )
  i352.pivot = new pc.Vec2( i353[25], i353[26] )
  i352.textureRectOffset = new pc.Vec2( i353[27], i353[28] )
  return i352
}

Deserializers["DodgeVisualTheme"] = function (request, data, root) {
  var i354 = root || request.c( 'DodgeVisualTheme' )
  var i355 = data
  request.r(i355[0], i355[1], 0, i354, 'overrideMaterial')
  request.r(i355[2], i355[3], 0, i354, 'playerSprite')
  i354.playerColor = new pc.Color(i355[4], i355[5], i355[6], i355[7])
  i354.playerSizeMultiplier = i355[8]
  request.r(i355[9], i355[10], 0, i354, 'obstacleSprite')
  var i357 = i355[11]
  var i356 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i357.length; i += 2) {
  request.r(i357[i + 0], i357[i + 1], 1, i356, '')
  }
  i354.obstacleVariants = i356
  i354.randomizeObstacleVariant = !!i355[12]
  i354.obstacleColor = new pc.Color(i355[13], i355[14], i355[15], i355[16])
  i354.obstacleSizeMultiplier = i355[17]
  request.r(i355[18], i355[19], 0, i354, 'backgroundSprite')
  i354.backgroundColor = new pc.Color(i355[20], i355[21], i355[22], i355[23])
  i354.preserveBackgroundAspect = !!i355[24]
  i354.backgroundScalePadding = i355[25]
  i354.backgroundSortingOrder = i355[26]
  return i354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i361 = data
  var i363 = i361[0]
  var i362 = []
  for(var i = 0; i < i363.length; i += 1) {
    i362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i363[i + 0]) );
  }
  i360.files = i362
  i360.componentToPrefabIds = i361[1]
  return i360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i367 = data
  i366.path = i367[0]
  request.r(i367[1], i367[2], 0, i366, 'unityObject')
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i369 = data
  var i371 = i369[0]
  var i370 = []
  for(var i = 0; i < i371.length; i += 1) {
    i370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i371[i + 0]) );
  }
  i368.scriptsExecutionOrder = i370
  var i373 = i369[1]
  var i372 = []
  for(var i = 0; i < i373.length; i += 1) {
    i372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i373[i + 0]) );
  }
  i368.sortingLayers = i372
  var i375 = i369[2]
  var i374 = []
  for(var i = 0; i < i375.length; i += 1) {
    i374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i375[i + 0]) );
  }
  i368.cullingLayers = i374
  i368.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i369[3], i368.timeSettings)
  i368.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i369[4], i368.physicsSettings)
  i368.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i369[5], i368.physics2DSettings)
  i368.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i369[6], i368.qualitySettings)
  i368.enableRealtimeShadows = !!i369[7]
  i368.enableAutoInstancing = !!i369[8]
  i368.enableStaticBatching = !!i369[9]
  i368.enableDynamicBatching = !!i369[10]
  i368.lightmapEncodingQuality = i369[11]
  i368.desiredColorSpace = i369[12]
  var i377 = i369[13]
  var i376 = []
  for(var i = 0; i < i377.length; i += 1) {
    i376.push( i377[i + 0] );
  }
  i368.allTags = i376
  return i368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i381 = data
  i380.name = i381[0]
  i380.value = i381[1]
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i385 = data
  i384.id = i385[0]
  i384.name = i385[1]
  i384.value = i385[2]
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i389 = data
  i388.id = i389[0]
  i388.name = i389[1]
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i391 = data
  i390.fixedDeltaTime = i391[0]
  i390.maximumDeltaTime = i391[1]
  i390.timeScale = i391[2]
  i390.maximumParticleTimestep = i391[3]
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i393 = data
  i392.gravity = new pc.Vec3( i393[0], i393[1], i393[2] )
  i392.defaultSolverIterations = i393[3]
  i392.bounceThreshold = i393[4]
  i392.autoSyncTransforms = !!i393[5]
  i392.autoSimulation = !!i393[6]
  var i395 = i393[7]
  var i394 = []
  for(var i = 0; i < i395.length; i += 1) {
    i394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i395[i + 0]) );
  }
  i392.collisionMatrix = i394
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i399 = data
  i398.enabled = !!i399[0]
  i398.layerId = i399[1]
  i398.otherLayerId = i399[2]
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i401 = data
  request.r(i401[0], i401[1], 0, i400, 'material')
  i400.gravity = new pc.Vec2( i401[2], i401[3] )
  i400.positionIterations = i401[4]
  i400.velocityIterations = i401[5]
  i400.velocityThreshold = i401[6]
  i400.maxLinearCorrection = i401[7]
  i400.maxAngularCorrection = i401[8]
  i400.maxTranslationSpeed = i401[9]
  i400.maxRotationSpeed = i401[10]
  i400.baumgarteScale = i401[11]
  i400.baumgarteTOIScale = i401[12]
  i400.timeToSleep = i401[13]
  i400.linearSleepTolerance = i401[14]
  i400.angularSleepTolerance = i401[15]
  i400.defaultContactOffset = i401[16]
  i400.autoSimulation = !!i401[17]
  i400.queriesHitTriggers = !!i401[18]
  i400.queriesStartInColliders = !!i401[19]
  i400.callbacksOnDisable = !!i401[20]
  i400.reuseCollisionCallbacks = !!i401[21]
  i400.autoSyncTransforms = !!i401[22]
  var i403 = i401[23]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i403[i + 0]) );
  }
  i400.collisionMatrix = i402
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i407 = data
  i406.enabled = !!i407[0]
  i406.layerId = i407[1]
  i406.otherLayerId = i407[2]
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i409 = data
  var i411 = i409[0]
  var i410 = []
  for(var i = 0; i < i411.length; i += 1) {
    i410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i411[i + 0]) );
  }
  i408.qualityLevels = i410
  var i413 = i409[1]
  var i412 = []
  for(var i = 0; i < i413.length; i += 1) {
    i412.push( i413[i + 0] );
  }
  i408.names = i412
  i408.shadows = i409[2]
  i408.anisotropicFiltering = i409[3]
  i408.antiAliasing = i409[4]
  i408.lodBias = i409[5]
  i408.shadowCascades = i409[6]
  i408.shadowDistance = i409[7]
  i408.shadowmaskMode = i409[8]
  i408.shadowProjection = i409[9]
  i408.shadowResolution = i409[10]
  i408.softParticles = !!i409[11]
  i408.softVegetation = !!i409[12]
  i408.activeColorSpace = i409[13]
  i408.desiredColorSpace = i409[14]
  i408.masterTextureLimit = i409[15]
  i408.maxQueuedFrames = i409[16]
  i408.particleRaycastBudget = i409[17]
  i408.pixelLightCount = i409[18]
  i408.realtimeReflectionProbes = !!i409[19]
  i408.shadowCascade2Split = i409[20]
  i408.shadowCascade4Split = new pc.Vec3( i409[21], i409[22], i409[23] )
  i408.streamingMipmapsActive = !!i409[24]
  i408.vSyncCount = i409[25]
  i408.asyncUploadBufferSize = i409[26]
  i408.asyncUploadTimeSlice = i409[27]
  i408.billboardsFaceCameraPosition = !!i409[28]
  i408.shadowNearPlaneOffset = i409[29]
  i408.streamingMipmapsMemoryBudget = i409[30]
  i408.maximumLODLevel = i409[31]
  i408.streamingMipmapsAddAllCameras = !!i409[32]
  i408.streamingMipmapsMaxLevelReduction = i409[33]
  i408.streamingMipmapsRenderersPerFrame = i409[34]
  i408.resolutionScalingFixedDPIFactor = i409[35]
  i408.streamingMipmapsMaxFileIORequests = i409[36]
  i408.currentQualityLevel = i409[37]
  return i408
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"10":[11],"12":[11],"13":[11],"14":[11],"15":[11],"16":[11],"17":[18],"19":[1],"20":[21],"22":[21],"23":[21],"24":[21],"25":[21],"26":[21],"27":[28],"29":[28],"30":[28],"31":[28],"32":[28],"33":[28],"34":[28],"35":[28],"36":[28],"37":[28],"38":[28],"39":[28],"40":[28],"41":[1],"42":[43],"44":[45],"46":[45],"47":[48],"49":[50],"51":[1],"52":[53],"54":[55],"56":[47],"57":[48],"58":[43,48],"59":[48,60],"61":[48],"62":[60,48],"63":[43],"64":[60,48],"65":[48],"66":[48],"67":[48],"68":[47],"69":[60,48],"70":[48],"71":[47],"72":[48],"73":[48],"74":[48],"75":[48],"76":[48],"77":[48],"78":[48],"79":[48],"80":[48],"81":[60,48],"82":[48],"83":[48],"84":[48],"85":[48],"86":[60,48],"87":[48],"88":[55],"89":[55],"90":[55],"91":[55],"92":[1],"93":[1]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","PlayworksComplianceHooks","SimpleDodgeGame","DodgeVisualTheme","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.Sprite","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.58f2";

Deserializers.productName = "AdGame2";

Deserializers.lunaInitializationTime = "02/05/2026 07:16:13";

Deserializers.lunaDaysRunning = "1.1";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "Fish";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1813";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3390";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneOSX";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "a876041a-ef39-4bde-a3ec-facc92eeeafd";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

