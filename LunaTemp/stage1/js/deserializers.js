var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i348 = root || request.c( 'UnityEngine.JointSpring' )
  var i349 = data
  i348.spring = i349[0]
  i348.damper = i349[1]
  i348.targetPosition = i349[2]
  return i348
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i350 = root || request.c( 'UnityEngine.JointMotor' )
  var i351 = data
  i350.m_TargetVelocity = i351[0]
  i350.m_Force = i351[1]
  i350.m_FreeSpin = i351[2]
  return i350
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i352 = root || request.c( 'UnityEngine.JointLimits' )
  var i353 = data
  i352.m_Min = i353[0]
  i352.m_Max = i353[1]
  i352.m_Bounciness = i353[2]
  i352.m_BounceMinVelocity = i353[3]
  i352.m_ContactDistance = i353[4]
  i352.minBounce = i353[5]
  i352.maxBounce = i353[6]
  return i352
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i354 = root || request.c( 'UnityEngine.JointDrive' )
  var i355 = data
  i354.m_PositionSpring = i355[0]
  i354.m_PositionDamper = i355[1]
  i354.m_MaximumForce = i355[2]
  i354.m_UseAcceleration = i355[3]
  return i354
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i356 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i357 = data
  i356.m_Spring = i357[0]
  i356.m_Damper = i357[1]
  return i356
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i358 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i359 = data
  i358.m_Limit = i359[0]
  i358.m_Bounciness = i359[1]
  i358.m_ContactDistance = i359[2]
  return i358
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i360 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i361 = data
  i360.m_ExtremumSlip = i361[0]
  i360.m_ExtremumValue = i361[1]
  i360.m_AsymptoteSlip = i361[2]
  i360.m_AsymptoteValue = i361[3]
  i360.m_Stiffness = i361[4]
  return i360
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i362 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i363 = data
  i362.m_LowerAngle = i363[0]
  i362.m_UpperAngle = i363[1]
  return i362
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i364 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i365 = data
  i364.m_MotorSpeed = i365[0]
  i364.m_MaximumMotorTorque = i365[1]
  return i364
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i366 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i367 = data
  i366.m_DampingRatio = i367[0]
  i366.m_Frequency = i367[1]
  i366.m_Angle = i367[2]
  return i366
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i368 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i369 = data
  i368.m_LowerTranslation = i369[0]
  i368.m_UpperTranslation = i369[1]
  return i368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i371 = data
  i370.name = i371[0]
  i370.width = i371[1]
  i370.height = i371[2]
  i370.mipmapCount = i371[3]
  i370.anisoLevel = i371[4]
  i370.filterMode = i371[5]
  i370.hdr = !!i371[6]
  i370.format = i371[7]
  i370.wrapMode = i371[8]
  i370.alphaIsTransparency = !!i371[9]
  i370.alphaSource = i371[10]
  i370.graphicsFormat = i371[11]
  i370.sRGBTexture = !!i371[12]
  i370.desiredColorSpace = i371[13]
  i370.wrapU = i371[14]
  i370.wrapV = i371[15]
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i372 = root || new pc.UnityMaterial()
  var i373 = data
  i372.name = i373[0]
  request.r(i373[1], i373[2], 0, i372, 'shader')
  i372.renderQueue = i373[3]
  i372.enableInstancing = !!i373[4]
  var i375 = i373[5]
  var i374 = []
  for(var i = 0; i < i375.length; i += 1) {
    i374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i375[i + 0]) );
  }
  i372.floatParameters = i374
  var i377 = i373[6]
  var i376 = []
  for(var i = 0; i < i377.length; i += 1) {
    i376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i377[i + 0]) );
  }
  i372.colorParameters = i376
  var i379 = i373[7]
  var i378 = []
  for(var i = 0; i < i379.length; i += 1) {
    i378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i379[i + 0]) );
  }
  i372.vectorParameters = i378
  var i381 = i373[8]
  var i380 = []
  for(var i = 0; i < i381.length; i += 1) {
    i380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i381[i + 0]) );
  }
  i372.textureParameters = i380
  var i383 = i373[9]
  var i382 = []
  for(var i = 0; i < i383.length; i += 1) {
    i382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i383[i + 0]) );
  }
  i372.materialFlags = i382
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i387 = data
  i386.name = i387[0]
  i386.value = i387[1]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i391 = data
  i390.name = i391[0]
  i390.value = new pc.Color(i391[1], i391[2], i391[3], i391[4])
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i395 = data
  i394.name = i395[0]
  i394.value = new pc.Vec4( i395[1], i395[2], i395[3], i395[4] )
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i399 = data
  i398.name = i399[0]
  request.r(i399[1], i399[2], 0, i398, 'value')
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i403 = data
  i402.name = i403[0]
  i402.enabled = !!i403[1]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i405 = data
  i404.name = i405[0]
  i404.index = i405[1]
  i404.startup = !!i405[2]
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i407 = data
  i406.aspect = i407[0]
  i406.orthographic = !!i407[1]
  i406.orthographicSize = i407[2]
  i406.backgroundColor = new pc.Color(i407[3], i407[4], i407[5], i407[6])
  i406.nearClipPlane = i407[7]
  i406.farClipPlane = i407[8]
  i406.fieldOfView = i407[9]
  i406.depth = i407[10]
  i406.clearFlags = i407[11]
  i406.cullingMask = i407[12]
  i406.rect = i407[13]
  request.r(i407[14], i407[15], 0, i406, 'targetTexture')
  i406.usePhysicalProperties = !!i407[16]
  i406.focalLength = i407[17]
  i406.sensorSize = new pc.Vec2( i407[18], i407[19] )
  i406.lensShift = new pc.Vec2( i407[20], i407[21] )
  i406.gateFit = i407[22]
  i406.commandBufferCount = i407[23]
  i406.cameraType = i407[24]
  i406.enabled = !!i407[25]
  return i406
}

Deserializers["PlayworksComplianceHooks"] = function (request, data, root) {
  var i408 = root || request.c( 'PlayworksComplianceHooks' )
  var i409 = data
  i408.iosStoreUrl = i409[0]
  i408.androidStoreUrl = i409[1]
  i408.gameplayVariant = i409[2]
  return i408
}

Deserializers["SimpleDodgeGame"] = function (request, data, root) {
  var i410 = root || request.c( 'SimpleDodgeGame' )
  var i411 = data
  i410.columns = i411[0]
  i410.rows = i411[1]
  i410.boardSidePadding = i411[2]
  i410.boardBottomPadding = i411[3]
  i410.boardTopPadding = i411[4]
  i410.orbScale = i411[5]
  i410.clearDelaySeconds = i411[6]
  i410.fallDurationSeconds = i411[7]
  i410.resolveStallTimeoutSeconds = i411[8]
  i410.roundDurationSeconds = i411[9]
  i410.baseScorePerOrb = i411[10]
  i410.backgroundColor = new pc.Color(i411[11], i411[12], i411[13], i411[14])
  i410.boardColor = new pc.Color(i411[15], i411[16], i411[17], i411[18])
  i410.boardOutlineColor = new pc.Color(i411[19], i411[20], i411[21], i411[22])
  var i413 = i411[23]
  var i412 = []
  for(var i = 0; i < i413.length; i += 4) {
    i412.push( new pc.Color(i413[i + 0], i413[i + 1], i413[i + 2], i413[i + 3]) );
  }
  i410.orbColors = i412
  var i415 = i411[24]
  var i414 = []
  for(var i = 0; i < i415.length; i += 2) {
  request.r(i415[i + 0], i415[i + 1], 2, i414, '')
  }
  i410.orbSprites = i414
  request.r(i411[25], i411[26], 0, i410, 'spriteMaterial')
  i410.useCustomMaterialInEditor = !!i411[27]
  i410.useCustomMaterialInWebGl = !!i411[28]
  i410.fallbackToDefaultIfShaderUnsupported = !!i411[29]
  request.r(i411[30], i411[31], 0, i410, 'hudFontOverride')
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i421 = data
  i420.name = i421[0]
  i420.tagId = i421[1]
  i420.enabled = !!i421[2]
  i420.isStatic = !!i421[3]
  i420.layer = i421[4]
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i423 = data
  i422.ambientIntensity = i423[0]
  i422.reflectionIntensity = i423[1]
  i422.ambientMode = i423[2]
  i422.ambientLight = new pc.Color(i423[3], i423[4], i423[5], i423[6])
  i422.ambientSkyColor = new pc.Color(i423[7], i423[8], i423[9], i423[10])
  i422.ambientGroundColor = new pc.Color(i423[11], i423[12], i423[13], i423[14])
  i422.ambientEquatorColor = new pc.Color(i423[15], i423[16], i423[17], i423[18])
  i422.fogColor = new pc.Color(i423[19], i423[20], i423[21], i423[22])
  i422.fogEndDistance = i423[23]
  i422.fogStartDistance = i423[24]
  i422.fogDensity = i423[25]
  i422.fog = !!i423[26]
  request.r(i423[27], i423[28], 0, i422, 'skybox')
  i422.fogMode = i423[29]
  var i425 = i423[30]
  var i424 = []
  for(var i = 0; i < i425.length; i += 1) {
    i424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i425[i + 0]) );
  }
  i422.lightmaps = i424
  i422.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i423[31], i422.lightProbes)
  i422.lightmapsMode = i423[32]
  i422.mixedBakeMode = i423[33]
  i422.environmentLightingMode = i423[34]
  i422.ambientProbe = new pc.SphericalHarmonicsL2(i423[35])
  i422.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i423[36])
  i422.useReferenceAmbientProbe = !!i423[37]
  request.r(i423[38], i423[39], 0, i422, 'customReflection')
  request.r(i423[40], i423[41], 0, i422, 'defaultReflection')
  i422.defaultReflectionMode = i423[42]
  i422.defaultReflectionResolution = i423[43]
  i422.sunLightObjectId = i423[44]
  i422.pixelLightCount = i423[45]
  i422.defaultReflectionHDR = !!i423[46]
  i422.hasLightDataAsset = !!i423[47]
  i422.hasManualGenerate = !!i423[48]
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i429 = data
  request.r(i429[0], i429[1], 0, i428, 'lightmapColor')
  request.r(i429[2], i429[3], 0, i428, 'lightmapDirection')
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i430 = root || new UnityEngine.LightProbes()
  var i431 = data
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i439 = data
  var i441 = i439[0]
  var i440 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i441.length; i += 1) {
    i440.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i441[i + 0]));
  }
  i438.ShaderCompilationErrors = i440
  i438.name = i439[1]
  i438.guid = i439[2]
  var i443 = i439[3]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( i443[i + 0] );
  }
  i438.shaderDefinedKeywords = i442
  var i445 = i439[4]
  var i444 = []
  for(var i = 0; i < i445.length; i += 1) {
    i444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i445[i + 0]) );
  }
  i438.passes = i444
  var i447 = i439[5]
  var i446 = []
  for(var i = 0; i < i447.length; i += 1) {
    i446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i447[i + 0]) );
  }
  i438.usePasses = i446
  var i449 = i439[6]
  var i448 = []
  for(var i = 0; i < i449.length; i += 1) {
    i448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i449[i + 0]) );
  }
  i438.defaultParameterValues = i448
  request.r(i439[7], i439[8], 0, i438, 'unityFallbackShader')
  i438.readDepth = !!i439[9]
  i438.hasDepthOnlyPass = !!i439[10]
  i438.isCreatedByShaderGraph = !!i439[11]
  i438.disableBatching = !!i439[12]
  i438.compiled = !!i439[13]
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i453 = data
  i452.shaderName = i453[0]
  i452.errorMessage = i453[1]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i458 = root || new pc.UnityShaderPass()
  var i459 = data
  i458.id = i459[0]
  i458.subShaderIndex = i459[1]
  i458.name = i459[2]
  i458.passType = i459[3]
  i458.grabPassTextureName = i459[4]
  i458.usePass = !!i459[5]
  i458.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i459[6], i458.zTest)
  i458.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i459[7], i458.zWrite)
  i458.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i459[8], i458.culling)
  i458.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i459[9], i458.blending)
  i458.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i459[10], i458.alphaBlending)
  i458.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i459[11], i458.colorWriteMask)
  i458.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i459[12], i458.offsetUnits)
  i458.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i459[13], i458.offsetFactor)
  i458.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i459[14], i458.stencilRef)
  i458.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i459[15], i458.stencilReadMask)
  i458.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i459[16], i458.stencilWriteMask)
  i458.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i459[17], i458.stencilOp)
  i458.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i459[18], i458.stencilOpFront)
  i458.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i459[19], i458.stencilOpBack)
  var i461 = i459[20]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i461[i + 0]) );
  }
  i458.tags = i460
  var i463 = i459[21]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( i463[i + 0] );
  }
  i458.passDefinedKeywords = i462
  var i465 = i459[22]
  var i464 = []
  for(var i = 0; i < i465.length; i += 1) {
    i464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i465[i + 0]) );
  }
  i458.passDefinedKeywordGroups = i464
  var i467 = i459[23]
  var i466 = []
  for(var i = 0; i < i467.length; i += 1) {
    i466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i467[i + 0]) );
  }
  i458.variants = i466
  var i469 = i459[24]
  var i468 = []
  for(var i = 0; i < i469.length; i += 1) {
    i468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i469[i + 0]) );
  }
  i458.excludedVariants = i468
  i458.hasDepthReader = !!i459[25]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i471 = data
  i470.val = i471[0]
  i470.name = i471[1]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i473 = data
  i472.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i473[0], i472.src)
  i472.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i473[1], i472.dst)
  i472.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i473[2], i472.op)
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i475 = data
  i474.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i475[0], i474.pass)
  i474.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i475[1], i474.fail)
  i474.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i475[2], i474.zFail)
  i474.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i475[3], i474.comp)
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i479 = data
  i478.name = i479[0]
  i478.value = i479[1]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i483 = data
  var i485 = i483[0]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( i485[i + 0] );
  }
  i482.keywords = i484
  i482.hasDiscard = !!i483[1]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i489 = data
  i488.passId = i489[0]
  i488.subShaderIndex = i489[1]
  var i491 = i489[2]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( i491[i + 0] );
  }
  i488.keywords = i490
  i488.vertexProgram = i489[3]
  i488.fragmentProgram = i489[4]
  i488.exportedForWebGl2 = !!i489[5]
  i488.readDepth = !!i489[6]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i495 = data
  request.r(i495[0], i495[1], 0, i494, 'shader')
  i494.pass = i495[2]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i499 = data
  i498.name = i499[0]
  i498.type = i499[1]
  i498.value = new pc.Vec4( i499[2], i499[3], i499[4], i499[5] )
  i498.textureValue = i499[6]
  i498.shaderPropertyFlag = i499[7]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i501 = data
  i500.name = i501[0]
  request.r(i501[1], i501[2], 0, i500, 'texture')
  i500.aabb = i501[3]
  i500.vertices = i501[4]
  i500.triangles = i501[5]
  i500.textureRect = UnityEngine.Rect.MinMaxRect(i501[6], i501[7], i501[8], i501[9])
  i500.packedRect = UnityEngine.Rect.MinMaxRect(i501[10], i501[11], i501[12], i501[13])
  i500.border = new pc.Vec4( i501[14], i501[15], i501[16], i501[17] )
  i500.transparency = i501[18]
  i500.bounds = i501[19]
  i500.pixelsPerUnit = i501[20]
  i500.textureWidth = i501[21]
  i500.textureHeight = i501[22]
  i500.nativeSize = new pc.Vec2( i501[23], i501[24] )
  i500.pivot = new pc.Vec2( i501[25], i501[26] )
  i500.textureRectOffset = new pc.Vec2( i501[27], i501[28] )
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i503 = data
  i502.name = i503[0]
  i502.ascent = i503[1]
  i502.originalLineHeight = i503[2]
  i502.fontSize = i503[3]
  var i505 = i503[4]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i505[i + 0]) );
  }
  i502.characterInfo = i504
  request.r(i503[5], i503[6], 0, i502, 'texture')
  i502.originalFontSize = i503[7]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i509 = data
  i508.index = i509[0]
  i508.advance = i509[1]
  i508.bearing = i509[2]
  i508.glyphWidth = i509[3]
  i508.glyphHeight = i509[4]
  i508.minX = i509[5]
  i508.maxX = i509[6]
  i508.minY = i509[7]
  i508.maxY = i509[8]
  i508.uvBottomLeftX = i509[9]
  i508.uvBottomLeftY = i509[10]
  i508.uvBottomRightX = i509[11]
  i508.uvBottomRightY = i509[12]
  i508.uvTopLeftX = i509[13]
  i508.uvTopLeftY = i509[14]
  i508.uvTopRightX = i509[15]
  i508.uvTopRightY = i509[16]
  return i508
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i511 = data
  var i513 = i511[0]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('UnityEngine.InputSystem.InputActionMap', i513[i + 0]) );
  }
  i510.m_ActionMaps = i512
  var i515 = i511[1]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('UnityEngine.InputSystem.InputControlScheme', i515[i + 0]) );
  }
  i510.m_ControlSchemes = i514
  i510.m_IsProjectWide = !!i511[2]
  return i510
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i519 = data
  i518.m_Name = i519[0]
  i518.m_Id = i519[1]
  request.r(i519[2], i519[3], 0, i518, 'm_Asset')
  var i521 = i519[4]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('UnityEngine.InputSystem.InputAction', i521[i + 0]) );
  }
  i518.m_Actions = i520
  var i523 = i519[5]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('UnityEngine.InputSystem.InputBinding', i523[i + 0]) );
  }
  i518.m_Bindings = i522
  return i518
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i527 = data
  i526.m_Name = i527[0]
  i526.m_Type = i527[1]
  i526.m_ExpectedControlType = i527[2]
  i526.m_Id = i527[3]
  i526.m_Processors = i527[4]
  i526.m_Interactions = i527[5]
  var i529 = i527[6]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('UnityEngine.InputSystem.InputBinding', i529[i + 0]) );
  }
  i526.m_SingletonActionBindings = i528
  i526.m_Flags = i527[7]
  return i526
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i533 = data
  i532.m_Name = i533[0]
  i532.m_Id = i533[1]
  i532.m_Path = i533[2]
  i532.m_Interactions = i533[3]
  i532.m_Processors = i533[4]
  i532.m_Groups = i533[5]
  i532.m_Action = i533[6]
  i532.m_Flags = i533[7]
  return i532
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i537 = data
  i536.m_Name = i537[0]
  i536.m_BindingGroup = i537[1]
  var i539 = i537[2]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i539[i + 0]) );
  }
  i536.m_DeviceRequirements = i538
  return i536
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i543 = data
  i542.m_ControlPath = i543[0]
  i542.m_Flags = i543[1]
  return i542
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i545 = data
  request.r(i545[0], i545[1], 0, i544, 'm_Asset')
  i544.m_ActionId = i545[2]
  return i544
}

Deserializers["Luna.Unity.Utils.Shaders.LunaSVC"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.Utils.Shaders.LunaSVC' )
  var i547 = data
  i546._svcLunaVersion = i547[0]
  var i549 = i547[1]
  var i548 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i549.length; i += 1) {
    i548.add(request.d(' . ‵', i549[i + 0]));
  }
  i546._shaderVariants = i548
  var i551 = i547[2]
  var i550 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i551.length; i += 1) {
    i550.add(request.d(' . ‵', i551[i + 0]));
  }
  i546._usedByLunaBuild = i550
  var i553 = i547[3]
  var i552 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i553.length; i += 1) {
    i552.add(request.d(' . ‵', i553[i + 0]));
  }
  i546._includedShaderVariants = i552
  var i555 = i547[4]
  var i554 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i555.length; i += 1) {
    i554.add(request.d(' . ‵', i555[i + 0]));
  }
  i546._excludedShaderVariants = i554
  i546.version = System.Int64(i547[5])
  var i557 = i547[6]
  var i556 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader')))
  for(var i = 0; i < i557.length; i += 1) {
    i556.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader', i557[i + 0]));
  }
  i546._shaderParsedShaders = i556
  var i559 = i547[7]
  var i558 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i559.length; i += 1) {
    i558.add(i559[i + 0]);
  }
  i546._modifiedShaders = i558
  i546.invalidShaders = !!i547[8]
  i546._sceneLightData = request.d('Luna.Editor.Utils.Shaders.SceneLightData', i547[9], i546._sceneLightData)
  return i546
}

Deserializers[" . ‵"] = function (request, data, root) {
  var i562 = root || request.c( ' . ‵' )
  var i563 = data
  i562.shaderCompilerPlatform = i563[0]
  request.r(i563[1], i563[2], 0, i562, 'shader')
  i562.passType = i563[3]
  i562.passId = i563[4]
  i562.subShaderIndex = i563[5]
  i562.upToDate = !!i563[6]
  var i565 = i563[7]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( i565[i + 0] );
  }
  i562.keywords = i564
  return i562
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader' )
  var i569 = data
  var i571 = i569[0]
  var i570 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader')))
  for(var i = 0; i < i571.length; i += 1) {
    i570.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader', i571[i + 0]));
  }
  i568.ParsedSubShaders = i570
  request.r(i569[1], i569[2], 0, i568, 'Shader')
  i568.ShaderPath = i569[3]
  var i573 = i569[4]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( i573[i + 0] );
  }
  i568.ShaderDefinedKeywords = i572
  request.r(i569[5], i569[6], 0, i568, 'fallbackShader')
  var i575 = i569[7]
  var i574 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ShaderCompilationError')))
  for(var i = 0; i < i575.length; i += 1) {
    i574.add(request.d('Luna.Unity.Utils.Shaders.ShaderCompilationError', i575[i + 0]));
  }
  i568.CompilationErrors = i574
  var i577 = i569[8]
  var i576 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i577.length; i += 1) {
    i576.add(request.d(' . ‵', i577[i + 0]));
  }
  i568.Variants = i576
  return i568
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader' )
  var i581 = data
  i580.Index = i581[0]
  var i583 = i581[1]
  var i582 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass')))
  for(var i = 0; i < i583.length; i += 1) {
    i582.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass', i583[i + 0]));
  }
  i580.Passes = i582
  request.r(i581[2], i581[3], 0, i580, 'Shader')
  var i585 = i581[4]
  var i584 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i585.length; i += 1) {
    i584.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i585[i + 0]));
  }
  i580.Tags = i584
  return i580
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'Shader')
  var i591 = i589[2]
  var i590 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant')))
  for(var i = 0; i < i591.length; i += 1) {
    i590.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant', i591[i + 0]));
  }
  i588.ShaderVariants = i590
  var i593 = i589[3]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( i593[i + 0] );
  }
  i588.DefinedKeywords = i592
  var i595 = i589[4]
  var i594 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup')))
  for(var i = 0; i < i595.length; i += 1) {
    i594.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup', i595[i + 0]));
  }
  i588.KeywordGroups = i594
  i588.KeywordsMinimalCardinality = i589[5]
  i588.ContainsInvalidVariant = !!i589[6]
  var i597 = i589[7]
  var i596 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i597.length; i += 1) {
    i596.add(request.d(' . ‵', i597[i + 0]));
  }
  i588.VariantStructures = i596
  var i599 = i589[8]
  var i598 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ShaderCompilationError')))
  for(var i = 0; i < i599.length; i += 1) {
    i598.add(request.d('Luna.Unity.Utils.Shaders.ShaderCompilationError', i599[i + 0]));
  }
  i588.CompilationErrors = i598
  i588.HasDepthReader = !!i589[9]
  i588.Id = i589[10]
  i588.SubShaderIndex = i589[11]
  i588.SerializedObjectId = i589[12]
  var i601 = i589[13]
  var i600 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i601.length; i += 1) {
    i600.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i601[i + 0]));
  }
  i588.Tags = i600
  i588.UsePass = request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass', i589[14], i588.UsePass)
  i588.GrabPassTextureName = i589[15]
  i588.PlatformMask = i589[16]
  return i588
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant' )
  var i605 = data
  i604.ShaderCompilerPlatform = i605[0]
  i604.NoShaderVariant = !!i605[1]
  i604.VertexProgram = i605[2]
  i604.FragmentProgram = i605[3]
  i604.LOD = i605[4]
  i604.readDepth = !!i605[5]
  i604.PassId = i605[6]
  i604.SubShaderIndex = i605[7]
  var i607 = i605[8]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( i607[i + 0] );
  }
  i604.Keywords = i606
  var i609 = i605[9]
  var i608 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i609.length; i += 1) {
    i608.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i609[i + 0]));
  }
  i604.Tags = i608
  return i604
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag' )
  var i613 = data
  i612.Key = i613[0]
  i612.Value = i613[1]
  return i612
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup' )
  var i617 = data
  var i619 = i617[0]
  var i618 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i619.length; i += 1) {
    i618.add(i619[i + 0]);
  }
  i616.Keywords = i618
  i616.hasDiscard = !!i617[1]
  return i616
}

Deserializers["Luna.Unity.Utils.Shaders.ShaderCompilationError"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.Utils.Shaders.ShaderCompilationError' )
  var i623 = data
  i622.Variant = !!i623[0]
  i622.ShaderName = i623[1]
  var i625 = i623[2]
  var i624 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ErrorDetails')))
  for(var i = 0; i < i625.length; i += 1) {
    i624.add(request.d('Luna.Unity.Utils.Shaders.ErrorDetails', i625[i + 0]));
  }
  i622.Details = i624
  return i622
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass' )
  var i627 = data
  i626.shader = i627[0]
  i626.pass = i627[1]
  return i626
}

Deserializers["Luna.Editor.Utils.Shaders.SceneLightData"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Editor.Utils.Shaders.SceneLightData' )
  var i631 = data
  i630.PointLightCount = i631[0]
  i630.SpotLightCount = i631[1]
  i630.DirectionalLightCount = i631[2]
  i630.LightmapOn = !!i631[3]
  i630.DirlightmapCombined = !!i631[4]
  i630.DirectionalCookieExists = !!i631[5]
  i630.PointCookieExists = !!i631[6]
  i630.SpotCookieExists = !!i631[7]
  i630.AddiitonalLightsKeywordRequired = !!i631[8]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i633 = data
  var i635 = i633[0]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i635[i + 0]) );
  }
  i632.files = i634
  i632.componentToPrefabIds = i633[1]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i639 = data
  i638.path = i639[0]
  request.r(i639[1], i639[2], 0, i638, 'unityObject')
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i641 = data
  var i643 = i641[0]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i643[i + 0]) );
  }
  i640.scriptsExecutionOrder = i642
  var i645 = i641[1]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i645[i + 0]) );
  }
  i640.sortingLayers = i644
  var i647 = i641[2]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i647[i + 0]) );
  }
  i640.cullingLayers = i646
  i640.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i641[3], i640.timeSettings)
  i640.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i641[4], i640.physicsSettings)
  i640.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i641[5], i640.physics2DSettings)
  i640.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i641[6], i640.qualitySettings)
  i640.enableRealtimeShadows = !!i641[7]
  i640.enableAutoInstancing = !!i641[8]
  i640.enableStaticBatching = !!i641[9]
  i640.enableDynamicBatching = !!i641[10]
  i640.lightmapEncodingQuality = i641[11]
  i640.desiredColorSpace = i641[12]
  var i649 = i641[13]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( i649[i + 0] );
  }
  i640.allTags = i648
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i653 = data
  i652.name = i653[0]
  i652.value = i653[1]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i657 = data
  i656.id = i657[0]
  i656.name = i657[1]
  i656.value = i657[2]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i661 = data
  i660.id = i661[0]
  i660.name = i661[1]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i663 = data
  i662.fixedDeltaTime = i663[0]
  i662.maximumDeltaTime = i663[1]
  i662.timeScale = i663[2]
  i662.maximumParticleTimestep = i663[3]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i665 = data
  i664.gravity = new pc.Vec3( i665[0], i665[1], i665[2] )
  i664.defaultSolverIterations = i665[3]
  i664.bounceThreshold = i665[4]
  i664.autoSyncTransforms = !!i665[5]
  i664.autoSimulation = !!i665[6]
  var i667 = i665[7]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i667[i + 0]) );
  }
  i664.collisionMatrix = i666
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i671 = data
  i670.enabled = !!i671[0]
  i670.layerId = i671[1]
  i670.otherLayerId = i671[2]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'material')
  i672.gravity = new pc.Vec2( i673[2], i673[3] )
  i672.positionIterations = i673[4]
  i672.velocityIterations = i673[5]
  i672.velocityThreshold = i673[6]
  i672.maxLinearCorrection = i673[7]
  i672.maxAngularCorrection = i673[8]
  i672.maxTranslationSpeed = i673[9]
  i672.maxRotationSpeed = i673[10]
  i672.baumgarteScale = i673[11]
  i672.baumgarteTOIScale = i673[12]
  i672.timeToSleep = i673[13]
  i672.linearSleepTolerance = i673[14]
  i672.angularSleepTolerance = i673[15]
  i672.defaultContactOffset = i673[16]
  i672.autoSimulation = !!i673[17]
  i672.queriesHitTriggers = !!i673[18]
  i672.queriesStartInColliders = !!i673[19]
  i672.callbacksOnDisable = !!i673[20]
  i672.reuseCollisionCallbacks = !!i673[21]
  i672.autoSyncTransforms = !!i673[22]
  var i675 = i673[23]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i675[i + 0]) );
  }
  i672.collisionMatrix = i674
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i679 = data
  i678.enabled = !!i679[0]
  i678.layerId = i679[1]
  i678.otherLayerId = i679[2]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i681 = data
  var i683 = i681[0]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i683[i + 0]) );
  }
  i680.qualityLevels = i682
  var i685 = i681[1]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( i685[i + 0] );
  }
  i680.names = i684
  i680.shadows = i681[2]
  i680.anisotropicFiltering = i681[3]
  i680.antiAliasing = i681[4]
  i680.lodBias = i681[5]
  i680.shadowCascades = i681[6]
  i680.shadowDistance = i681[7]
  i680.shadowmaskMode = i681[8]
  i680.shadowProjection = i681[9]
  i680.shadowResolution = i681[10]
  i680.softParticles = !!i681[11]
  i680.softVegetation = !!i681[12]
  i680.activeColorSpace = i681[13]
  i680.desiredColorSpace = i681[14]
  i680.masterTextureLimit = i681[15]
  i680.maxQueuedFrames = i681[16]
  i680.particleRaycastBudget = i681[17]
  i680.pixelLightCount = i681[18]
  i680.realtimeReflectionProbes = !!i681[19]
  i680.shadowCascade2Split = i681[20]
  i680.shadowCascade4Split = new pc.Vec3( i681[21], i681[22], i681[23] )
  i680.streamingMipmapsActive = !!i681[24]
  i680.vSyncCount = i681[25]
  i680.asyncUploadBufferSize = i681[26]
  i680.asyncUploadTimeSlice = i681[27]
  i680.billboardsFaceCameraPosition = !!i681[28]
  i680.shadowNearPlaneOffset = i681[29]
  i680.streamingMipmapsMemoryBudget = i681[30]
  i680.maximumLODLevel = i681[31]
  i680.streamingMipmapsAddAllCameras = !!i681[32]
  i680.streamingMipmapsMaxLevelReduction = i681[33]
  i680.streamingMipmapsRenderersPerFrame = i681[34]
  i680.resolutionScalingFixedDPIFactor = i681[35]
  i680.streamingMipmapsMaxFileIORequests = i681[36]
  i680.currentQualityLevel = i681[37]
  return i680
}

Deserializers["Luna.Unity.Utils.Shaders.ErrorDetails"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.Utils.Shaders.ErrorDetails' )
  var i691 = data
  i690.SubShaderIndex = i691[0]
  i690.PassId = i691[1]
  var i693 = i691[2]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( i693[i + 0] );
  }
  i690.ShaderVariantKeywords = i692
  var i695 = i691[3]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( i695[i + 0] );
  }
  i690.Messages = i694
  return i690
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"13":[14],"15":[14],"16":[14],"17":[14],"18":[14],"19":[14],"20":[21],"22":[1],"23":[24],"25":[24],"26":[24],"27":[24],"28":[24],"29":[24],"30":[31],"32":[31],"33":[31],"34":[31],"35":[31],"36":[31],"37":[31],"38":[31],"39":[31],"40":[31],"41":[31],"42":[31],"43":[31],"44":[1],"45":[46],"47":[48],"49":[48],"50":[51],"52":[53],"54":[1],"55":[56],"57":[58],"59":[50],"60":[51],"61":[46,51],"62":[51,63],"64":[51],"65":[63,51],"66":[46],"67":[63,51],"68":[51],"69":[51],"70":[51],"71":[50],"72":[63,51],"73":[51],"74":[50],"75":[51],"76":[51],"77":[51],"78":[51],"79":[51],"80":[51],"81":[51],"82":[51],"83":[51],"84":[63,51],"85":[51],"86":[51],"87":[51],"88":[51],"89":[63,51],"90":[51],"91":[58],"92":[58],"93":[58],"94":[58],"95":[1],"96":[1]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","PlayworksComplianceHooks","SimpleDodgeGame","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Font","UnityEngine.Texture2D","UnityEngine.InputSystem.InputActionAsset","UnityEngine.InputSystem.InputActionReference","Luna.Unity.Utils.Shaders.LunaSVC","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.58f2";

Deserializers.productName = "AdGame2";

Deserializers.lunaInitializationTime = "02/09/2026 07:18:22";

Deserializers.lunaDaysRunning = "1.1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1717";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4362";

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

Deserializers.buildID = "43a1fc72-52da-4e6d-83df-2363c0f6b9b4";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

