var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i340 = root || request.c( 'UnityEngine.JointSpring' )
  var i341 = data
  i340.spring = i341[0]
  i340.damper = i341[1]
  i340.targetPosition = i341[2]
  return i340
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i342 = root || request.c( 'UnityEngine.JointMotor' )
  var i343 = data
  i342.m_TargetVelocity = i343[0]
  i342.m_Force = i343[1]
  i342.m_FreeSpin = i343[2]
  return i342
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i344 = root || request.c( 'UnityEngine.JointLimits' )
  var i345 = data
  i344.m_Min = i345[0]
  i344.m_Max = i345[1]
  i344.m_Bounciness = i345[2]
  i344.m_BounceMinVelocity = i345[3]
  i344.m_ContactDistance = i345[4]
  i344.minBounce = i345[5]
  i344.maxBounce = i345[6]
  return i344
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i346 = root || request.c( 'UnityEngine.JointDrive' )
  var i347 = data
  i346.m_PositionSpring = i347[0]
  i346.m_PositionDamper = i347[1]
  i346.m_MaximumForce = i347[2]
  i346.m_UseAcceleration = i347[3]
  return i346
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i348 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i349 = data
  i348.m_Spring = i349[0]
  i348.m_Damper = i349[1]
  return i348
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i350 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i351 = data
  i350.m_Limit = i351[0]
  i350.m_Bounciness = i351[1]
  i350.m_ContactDistance = i351[2]
  return i350
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i352 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i353 = data
  i352.m_ExtremumSlip = i353[0]
  i352.m_ExtremumValue = i353[1]
  i352.m_AsymptoteSlip = i353[2]
  i352.m_AsymptoteValue = i353[3]
  i352.m_Stiffness = i353[4]
  return i352
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i354 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i355 = data
  i354.m_LowerAngle = i355[0]
  i354.m_UpperAngle = i355[1]
  return i354
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i356 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i357 = data
  i356.m_MotorSpeed = i357[0]
  i356.m_MaximumMotorTorque = i357[1]
  return i356
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i358 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i359 = data
  i358.m_DampingRatio = i359[0]
  i358.m_Frequency = i359[1]
  i358.m_Angle = i359[2]
  return i358
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i360 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i361 = data
  i360.m_LowerTranslation = i361[0]
  i360.m_UpperTranslation = i361[1]
  return i360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i363 = data
  i362.name = i363[0]
  i362.width = i363[1]
  i362.height = i363[2]
  i362.mipmapCount = i363[3]
  i362.anisoLevel = i363[4]
  i362.filterMode = i363[5]
  i362.hdr = !!i363[6]
  i362.format = i363[7]
  i362.wrapMode = i363[8]
  i362.alphaIsTransparency = !!i363[9]
  i362.alphaSource = i363[10]
  i362.graphicsFormat = i363[11]
  i362.sRGBTexture = !!i363[12]
  i362.desiredColorSpace = i363[13]
  i362.wrapU = i363[14]
  i362.wrapV = i363[15]
  return i362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i364 = root || new pc.UnityMaterial()
  var i365 = data
  i364.name = i365[0]
  request.r(i365[1], i365[2], 0, i364, 'shader')
  i364.renderQueue = i365[3]
  i364.enableInstancing = !!i365[4]
  var i367 = i365[5]
  var i366 = []
  for(var i = 0; i < i367.length; i += 1) {
    i366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i367[i + 0]) );
  }
  i364.floatParameters = i366
  var i369 = i365[6]
  var i368 = []
  for(var i = 0; i < i369.length; i += 1) {
    i368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i369[i + 0]) );
  }
  i364.colorParameters = i368
  var i371 = i365[7]
  var i370 = []
  for(var i = 0; i < i371.length; i += 1) {
    i370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i371[i + 0]) );
  }
  i364.vectorParameters = i370
  var i373 = i365[8]
  var i372 = []
  for(var i = 0; i < i373.length; i += 1) {
    i372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i373[i + 0]) );
  }
  i364.textureParameters = i372
  var i375 = i365[9]
  var i374 = []
  for(var i = 0; i < i375.length; i += 1) {
    i374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i375[i + 0]) );
  }
  i364.materialFlags = i374
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i379 = data
  i378.name = i379[0]
  i378.value = i379[1]
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i383 = data
  i382.name = i383[0]
  i382.value = new pc.Color(i383[1], i383[2], i383[3], i383[4])
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i387 = data
  i386.name = i387[0]
  i386.value = new pc.Vec4( i387[1], i387[2], i387[3], i387[4] )
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i391 = data
  i390.name = i391[0]
  request.r(i391[1], i391[2], 0, i390, 'value')
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i395 = data
  i394.name = i395[0]
  i394.enabled = !!i395[1]
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i397 = data
  i396.name = i397[0]
  i396.index = i397[1]
  i396.startup = !!i397[2]
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i399 = data
  i398.aspect = i399[0]
  i398.orthographic = !!i399[1]
  i398.orthographicSize = i399[2]
  i398.backgroundColor = new pc.Color(i399[3], i399[4], i399[5], i399[6])
  i398.nearClipPlane = i399[7]
  i398.farClipPlane = i399[8]
  i398.fieldOfView = i399[9]
  i398.depth = i399[10]
  i398.clearFlags = i399[11]
  i398.cullingMask = i399[12]
  i398.rect = i399[13]
  request.r(i399[14], i399[15], 0, i398, 'targetTexture')
  i398.usePhysicalProperties = !!i399[16]
  i398.focalLength = i399[17]
  i398.sensorSize = new pc.Vec2( i399[18], i399[19] )
  i398.lensShift = new pc.Vec2( i399[20], i399[21] )
  i398.gateFit = i399[22]
  i398.commandBufferCount = i399[23]
  i398.cameraType = i399[24]
  i398.enabled = !!i399[25]
  return i398
}

Deserializers["PlayworksComplianceHooks"] = function (request, data, root) {
  var i400 = root || request.c( 'PlayworksComplianceHooks' )
  var i401 = data
  i400.iosStoreUrl = i401[0]
  i400.androidStoreUrl = i401[1]
  i400.gameplayVariant = i401[2]
  return i400
}

Deserializers["SimpleDodgeGame"] = function (request, data, root) {
  var i402 = root || request.c( 'SimpleDodgeGame' )
  var i403 = data
  i402.columns = i403[0]
  i402.rows = i403[1]
  i402.boardSidePadding = i403[2]
  i402.boardBottomPadding = i403[3]
  i402.boardTopPadding = i403[4]
  i402.orbScale = i403[5]
  i402.clearDelaySeconds = i403[6]
  i402.fallDurationSeconds = i403[7]
  i402.roundDurationSeconds = i403[8]
  i402.baseScorePerOrb = i403[9]
  i402.backgroundColor = new pc.Color(i403[10], i403[11], i403[12], i403[13])
  i402.boardColor = new pc.Color(i403[14], i403[15], i403[16], i403[17])
  i402.boardOutlineColor = new pc.Color(i403[18], i403[19], i403[20], i403[21])
  var i405 = i403[22]
  var i404 = []
  for(var i = 0; i < i405.length; i += 4) {
    i404.push( new pc.Color(i405[i + 0], i405[i + 1], i405[i + 2], i405[i + 3]) );
  }
  i402.orbColors = i404
  var i407 = i403[23]
  var i406 = []
  for(var i = 0; i < i407.length; i += 2) {
  request.r(i407[i + 0], i407[i + 1], 2, i406, '')
  }
  i402.orbSprites = i406
  request.r(i403[24], i403[25], 0, i402, 'spriteMaterial')
  i402.useCustomMaterialInEditor = !!i403[26]
  i402.useCustomMaterialInWebGl = !!i403[27]
  i402.fallbackToDefaultIfShaderUnsupported = !!i403[28]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i413 = data
  i412.name = i413[0]
  i412.tagId = i413[1]
  i412.enabled = !!i413[2]
  i412.isStatic = !!i413[3]
  i412.layer = i413[4]
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i415 = data
  i414.ambientIntensity = i415[0]
  i414.reflectionIntensity = i415[1]
  i414.ambientMode = i415[2]
  i414.ambientLight = new pc.Color(i415[3], i415[4], i415[5], i415[6])
  i414.ambientSkyColor = new pc.Color(i415[7], i415[8], i415[9], i415[10])
  i414.ambientGroundColor = new pc.Color(i415[11], i415[12], i415[13], i415[14])
  i414.ambientEquatorColor = new pc.Color(i415[15], i415[16], i415[17], i415[18])
  i414.fogColor = new pc.Color(i415[19], i415[20], i415[21], i415[22])
  i414.fogEndDistance = i415[23]
  i414.fogStartDistance = i415[24]
  i414.fogDensity = i415[25]
  i414.fog = !!i415[26]
  request.r(i415[27], i415[28], 0, i414, 'skybox')
  i414.fogMode = i415[29]
  var i417 = i415[30]
  var i416 = []
  for(var i = 0; i < i417.length; i += 1) {
    i416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i417[i + 0]) );
  }
  i414.lightmaps = i416
  i414.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i415[31], i414.lightProbes)
  i414.lightmapsMode = i415[32]
  i414.mixedBakeMode = i415[33]
  i414.environmentLightingMode = i415[34]
  i414.ambientProbe = new pc.SphericalHarmonicsL2(i415[35])
  i414.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i415[36])
  i414.useReferenceAmbientProbe = !!i415[37]
  request.r(i415[38], i415[39], 0, i414, 'customReflection')
  request.r(i415[40], i415[41], 0, i414, 'defaultReflection')
  i414.defaultReflectionMode = i415[42]
  i414.defaultReflectionResolution = i415[43]
  i414.sunLightObjectId = i415[44]
  i414.pixelLightCount = i415[45]
  i414.defaultReflectionHDR = !!i415[46]
  i414.hasLightDataAsset = !!i415[47]
  i414.hasManualGenerate = !!i415[48]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i421 = data
  request.r(i421[0], i421[1], 0, i420, 'lightmapColor')
  request.r(i421[2], i421[3], 0, i420, 'lightmapDirection')
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i422 = root || new UnityEngine.LightProbes()
  var i423 = data
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i431 = data
  var i433 = i431[0]
  var i432 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i433.length; i += 1) {
    i432.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i433[i + 0]));
  }
  i430.ShaderCompilationErrors = i432
  i430.name = i431[1]
  i430.guid = i431[2]
  var i435 = i431[3]
  var i434 = []
  for(var i = 0; i < i435.length; i += 1) {
    i434.push( i435[i + 0] );
  }
  i430.shaderDefinedKeywords = i434
  var i437 = i431[4]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i437[i + 0]) );
  }
  i430.passes = i436
  var i439 = i431[5]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i439[i + 0]) );
  }
  i430.usePasses = i438
  var i441 = i431[6]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i441[i + 0]) );
  }
  i430.defaultParameterValues = i440
  request.r(i431[7], i431[8], 0, i430, 'unityFallbackShader')
  i430.readDepth = !!i431[9]
  i430.hasDepthOnlyPass = !!i431[10]
  i430.isCreatedByShaderGraph = !!i431[11]
  i430.disableBatching = !!i431[12]
  i430.compiled = !!i431[13]
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i445 = data
  i444.shaderName = i445[0]
  i444.errorMessage = i445[1]
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i450 = root || new pc.UnityShaderPass()
  var i451 = data
  i450.id = i451[0]
  i450.subShaderIndex = i451[1]
  i450.name = i451[2]
  i450.passType = i451[3]
  i450.grabPassTextureName = i451[4]
  i450.usePass = !!i451[5]
  i450.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i451[6], i450.zTest)
  i450.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i451[7], i450.zWrite)
  i450.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i451[8], i450.culling)
  i450.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i451[9], i450.blending)
  i450.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i451[10], i450.alphaBlending)
  i450.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i451[11], i450.colorWriteMask)
  i450.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i451[12], i450.offsetUnits)
  i450.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i451[13], i450.offsetFactor)
  i450.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i451[14], i450.stencilRef)
  i450.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i451[15], i450.stencilReadMask)
  i450.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i451[16], i450.stencilWriteMask)
  i450.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i451[17], i450.stencilOp)
  i450.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i451[18], i450.stencilOpFront)
  i450.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i451[19], i450.stencilOpBack)
  var i453 = i451[20]
  var i452 = []
  for(var i = 0; i < i453.length; i += 1) {
    i452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i453[i + 0]) );
  }
  i450.tags = i452
  var i455 = i451[21]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( i455[i + 0] );
  }
  i450.passDefinedKeywords = i454
  var i457 = i451[22]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i457[i + 0]) );
  }
  i450.passDefinedKeywordGroups = i456
  var i459 = i451[23]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i459[i + 0]) );
  }
  i450.variants = i458
  var i461 = i451[24]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i461[i + 0]) );
  }
  i450.excludedVariants = i460
  i450.hasDepthReader = !!i451[25]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i463 = data
  i462.val = i463[0]
  i462.name = i463[1]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i465 = data
  i464.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i465[0], i464.src)
  i464.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i465[1], i464.dst)
  i464.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i465[2], i464.op)
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i467 = data
  i466.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i467[0], i466.pass)
  i466.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i467[1], i466.fail)
  i466.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i467[2], i466.zFail)
  i466.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i467[3], i466.comp)
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i471 = data
  i470.name = i471[0]
  i470.value = i471[1]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i475 = data
  var i477 = i475[0]
  var i476 = []
  for(var i = 0; i < i477.length; i += 1) {
    i476.push( i477[i + 0] );
  }
  i474.keywords = i476
  i474.hasDiscard = !!i475[1]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i481 = data
  i480.passId = i481[0]
  i480.subShaderIndex = i481[1]
  var i483 = i481[2]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( i483[i + 0] );
  }
  i480.keywords = i482
  i480.vertexProgram = i481[3]
  i480.fragmentProgram = i481[4]
  i480.exportedForWebGl2 = !!i481[5]
  i480.readDepth = !!i481[6]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i487 = data
  request.r(i487[0], i487[1], 0, i486, 'shader')
  i486.pass = i487[2]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i491 = data
  i490.name = i491[0]
  i490.type = i491[1]
  i490.value = new pc.Vec4( i491[2], i491[3], i491[4], i491[5] )
  i490.textureValue = i491[6]
  i490.shaderPropertyFlag = i491[7]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i493 = data
  i492.name = i493[0]
  request.r(i493[1], i493[2], 0, i492, 'texture')
  i492.aabb = i493[3]
  i492.vertices = i493[4]
  i492.triangles = i493[5]
  i492.textureRect = UnityEngine.Rect.MinMaxRect(i493[6], i493[7], i493[8], i493[9])
  i492.packedRect = UnityEngine.Rect.MinMaxRect(i493[10], i493[11], i493[12], i493[13])
  i492.border = new pc.Vec4( i493[14], i493[15], i493[16], i493[17] )
  i492.transparency = i493[18]
  i492.bounds = i493[19]
  i492.pixelsPerUnit = i493[20]
  i492.textureWidth = i493[21]
  i492.textureHeight = i493[22]
  i492.nativeSize = new pc.Vec2( i493[23], i493[24] )
  i492.pivot = new pc.Vec2( i493[25], i493[26] )
  i492.textureRectOffset = new pc.Vec2( i493[27], i493[28] )
  return i492
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i495 = data
  var i497 = i495[0]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('UnityEngine.InputSystem.InputActionMap', i497[i + 0]) );
  }
  i494.m_ActionMaps = i496
  var i499 = i495[1]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('UnityEngine.InputSystem.InputControlScheme', i499[i + 0]) );
  }
  i494.m_ControlSchemes = i498
  i494.m_IsProjectWide = !!i495[2]
  return i494
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i503 = data
  i502.m_Name = i503[0]
  i502.m_Id = i503[1]
  request.r(i503[2], i503[3], 0, i502, 'm_Asset')
  var i505 = i503[4]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('UnityEngine.InputSystem.InputAction', i505[i + 0]) );
  }
  i502.m_Actions = i504
  var i507 = i503[5]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('UnityEngine.InputSystem.InputBinding', i507[i + 0]) );
  }
  i502.m_Bindings = i506
  return i502
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i511 = data
  i510.m_Name = i511[0]
  i510.m_Type = i511[1]
  i510.m_ExpectedControlType = i511[2]
  i510.m_Id = i511[3]
  i510.m_Processors = i511[4]
  i510.m_Interactions = i511[5]
  var i513 = i511[6]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('UnityEngine.InputSystem.InputBinding', i513[i + 0]) );
  }
  i510.m_SingletonActionBindings = i512
  i510.m_Flags = i511[7]
  return i510
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i517 = data
  i516.m_Name = i517[0]
  i516.m_Id = i517[1]
  i516.m_Path = i517[2]
  i516.m_Interactions = i517[3]
  i516.m_Processors = i517[4]
  i516.m_Groups = i517[5]
  i516.m_Action = i517[6]
  i516.m_Flags = i517[7]
  return i516
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i521 = data
  i520.m_Name = i521[0]
  i520.m_BindingGroup = i521[1]
  var i523 = i521[2]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i523[i + 0]) );
  }
  i520.m_DeviceRequirements = i522
  return i520
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i527 = data
  i526.m_ControlPath = i527[0]
  i526.m_Flags = i527[1]
  return i526
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i529 = data
  request.r(i529[0], i529[1], 0, i528, 'm_Asset')
  i528.m_ActionId = i529[2]
  return i528
}

Deserializers["Luna.Unity.Utils.Shaders.LunaSVC"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.Utils.Shaders.LunaSVC' )
  var i531 = data
  i530._svcLunaVersion = i531[0]
  var i533 = i531[1]
  var i532 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i533.length; i += 1) {
    i532.add(request.d(' . ‵', i533[i + 0]));
  }
  i530._shaderVariants = i532
  var i535 = i531[2]
  var i534 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i535.length; i += 1) {
    i534.add(request.d(' . ‵', i535[i + 0]));
  }
  i530._usedByLunaBuild = i534
  var i537 = i531[3]
  var i536 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i537.length; i += 1) {
    i536.add(request.d(' . ‵', i537[i + 0]));
  }
  i530._includedShaderVariants = i536
  var i539 = i531[4]
  var i538 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i539.length; i += 1) {
    i538.add(request.d(' . ‵', i539[i + 0]));
  }
  i530._excludedShaderVariants = i538
  i530.version = System.Int64(i531[5])
  var i541 = i531[6]
  var i540 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader')))
  for(var i = 0; i < i541.length; i += 1) {
    i540.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader', i541[i + 0]));
  }
  i530._shaderParsedShaders = i540
  var i543 = i531[7]
  var i542 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i543.length; i += 1) {
    i542.add(i543[i + 0]);
  }
  i530._modifiedShaders = i542
  i530.invalidShaders = !!i531[8]
  i530._sceneLightData = request.d('Luna.Editor.Utils.Shaders.SceneLightData', i531[9], i530._sceneLightData)
  return i530
}

Deserializers[" . ‵"] = function (request, data, root) {
  var i546 = root || request.c( ' . ‵' )
  var i547 = data
  i546.shaderCompilerPlatform = i547[0]
  request.r(i547[1], i547[2], 0, i546, 'shader')
  i546.passType = i547[3]
  i546.passId = i547[4]
  i546.subShaderIndex = i547[5]
  i546.upToDate = !!i547[6]
  var i549 = i547[7]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( i549[i + 0] );
  }
  i546.keywords = i548
  return i546
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader' )
  var i553 = data
  var i555 = i553[0]
  var i554 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader')))
  for(var i = 0; i < i555.length; i += 1) {
    i554.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader', i555[i + 0]));
  }
  i552.ParsedSubShaders = i554
  request.r(i553[1], i553[2], 0, i552, 'Shader')
  i552.ShaderPath = i553[3]
  var i557 = i553[4]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( i557[i + 0] );
  }
  i552.ShaderDefinedKeywords = i556
  request.r(i553[5], i553[6], 0, i552, 'fallbackShader')
  var i559 = i553[7]
  var i558 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ShaderCompilationError')))
  for(var i = 0; i < i559.length; i += 1) {
    i558.add(request.d('Luna.Unity.Utils.Shaders.ShaderCompilationError', i559[i + 0]));
  }
  i552.CompilationErrors = i558
  var i561 = i553[8]
  var i560 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i561.length; i += 1) {
    i560.add(request.d(' . ‵', i561[i + 0]));
  }
  i552.Variants = i560
  return i552
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader' )
  var i565 = data
  i564.Index = i565[0]
  var i567 = i565[1]
  var i566 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass')))
  for(var i = 0; i < i567.length; i += 1) {
    i566.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass', i567[i + 0]));
  }
  i564.Passes = i566
  request.r(i565[2], i565[3], 0, i564, 'Shader')
  var i569 = i565[4]
  var i568 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i569.length; i += 1) {
    i568.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i569[i + 0]));
  }
  i564.Tags = i568
  return i564
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass' )
  var i573 = data
  request.r(i573[0], i573[1], 0, i572, 'Shader')
  var i575 = i573[2]
  var i574 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant')))
  for(var i = 0; i < i575.length; i += 1) {
    i574.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant', i575[i + 0]));
  }
  i572.ShaderVariants = i574
  var i577 = i573[3]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( i577[i + 0] );
  }
  i572.DefinedKeywords = i576
  var i579 = i573[4]
  var i578 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup')))
  for(var i = 0; i < i579.length; i += 1) {
    i578.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup', i579[i + 0]));
  }
  i572.KeywordGroups = i578
  i572.KeywordsMinimalCardinality = i573[5]
  i572.ContainsInvalidVariant = !!i573[6]
  var i581 = i573[7]
  var i580 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i581.length; i += 1) {
    i580.add(request.d(' . ‵', i581[i + 0]));
  }
  i572.VariantStructures = i580
  var i583 = i573[8]
  var i582 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ShaderCompilationError')))
  for(var i = 0; i < i583.length; i += 1) {
    i582.add(request.d('Luna.Unity.Utils.Shaders.ShaderCompilationError', i583[i + 0]));
  }
  i572.CompilationErrors = i582
  i572.HasDepthReader = !!i573[9]
  i572.Id = i573[10]
  i572.SubShaderIndex = i573[11]
  i572.SerializedObjectId = i573[12]
  var i585 = i573[13]
  var i584 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i585.length; i += 1) {
    i584.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i585[i + 0]));
  }
  i572.Tags = i584
  i572.UsePass = request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass', i573[14], i572.UsePass)
  i572.GrabPassTextureName = i573[15]
  i572.PlatformMask = i573[16]
  return i572
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant' )
  var i589 = data
  i588.ShaderCompilerPlatform = i589[0]
  i588.NoShaderVariant = !!i589[1]
  i588.VertexProgram = i589[2]
  i588.FragmentProgram = i589[3]
  i588.LOD = i589[4]
  i588.readDepth = !!i589[5]
  i588.PassId = i589[6]
  i588.SubShaderIndex = i589[7]
  var i591 = i589[8]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( i591[i + 0] );
  }
  i588.Keywords = i590
  var i593 = i589[9]
  var i592 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i593.length; i += 1) {
    i592.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i593[i + 0]));
  }
  i588.Tags = i592
  return i588
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag' )
  var i597 = data
  i596.Key = i597[0]
  i596.Value = i597[1]
  return i596
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup' )
  var i601 = data
  var i603 = i601[0]
  var i602 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i603.length; i += 1) {
    i602.add(i603[i + 0]);
  }
  i600.Keywords = i602
  i600.hasDiscard = !!i601[1]
  return i600
}

Deserializers["Luna.Unity.Utils.Shaders.ShaderCompilationError"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.Utils.Shaders.ShaderCompilationError' )
  var i607 = data
  i606.Variant = !!i607[0]
  i606.ShaderName = i607[1]
  var i609 = i607[2]
  var i608 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ErrorDetails')))
  for(var i = 0; i < i609.length; i += 1) {
    i608.add(request.d('Luna.Unity.Utils.Shaders.ErrorDetails', i609[i + 0]));
  }
  i606.Details = i608
  return i606
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass' )
  var i611 = data
  i610.shader = i611[0]
  i610.pass = i611[1]
  return i610
}

Deserializers["Luna.Editor.Utils.Shaders.SceneLightData"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Editor.Utils.Shaders.SceneLightData' )
  var i615 = data
  i614.PointLightCount = i615[0]
  i614.SpotLightCount = i615[1]
  i614.DirectionalLightCount = i615[2]
  i614.LightmapOn = !!i615[3]
  i614.DirlightmapCombined = !!i615[4]
  i614.DirectionalCookieExists = !!i615[5]
  i614.PointCookieExists = !!i615[6]
  i614.SpotCookieExists = !!i615[7]
  i614.AddiitonalLightsKeywordRequired = !!i615[8]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i617 = data
  var i619 = i617[0]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i619[i + 0]) );
  }
  i616.files = i618
  i616.componentToPrefabIds = i617[1]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i623 = data
  i622.path = i623[0]
  request.r(i623[1], i623[2], 0, i622, 'unityObject')
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i625 = data
  var i627 = i625[0]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i627[i + 0]) );
  }
  i624.scriptsExecutionOrder = i626
  var i629 = i625[1]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i629[i + 0]) );
  }
  i624.sortingLayers = i628
  var i631 = i625[2]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i631[i + 0]) );
  }
  i624.cullingLayers = i630
  i624.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i625[3], i624.timeSettings)
  i624.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i625[4], i624.physicsSettings)
  i624.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i625[5], i624.physics2DSettings)
  i624.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i625[6], i624.qualitySettings)
  i624.enableRealtimeShadows = !!i625[7]
  i624.enableAutoInstancing = !!i625[8]
  i624.enableStaticBatching = !!i625[9]
  i624.enableDynamicBatching = !!i625[10]
  i624.lightmapEncodingQuality = i625[11]
  i624.desiredColorSpace = i625[12]
  var i633 = i625[13]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( i633[i + 0] );
  }
  i624.allTags = i632
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i637 = data
  i636.name = i637[0]
  i636.value = i637[1]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i641 = data
  i640.id = i641[0]
  i640.name = i641[1]
  i640.value = i641[2]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i645 = data
  i644.id = i645[0]
  i644.name = i645[1]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i647 = data
  i646.fixedDeltaTime = i647[0]
  i646.maximumDeltaTime = i647[1]
  i646.timeScale = i647[2]
  i646.maximumParticleTimestep = i647[3]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i649 = data
  i648.gravity = new pc.Vec3( i649[0], i649[1], i649[2] )
  i648.defaultSolverIterations = i649[3]
  i648.bounceThreshold = i649[4]
  i648.autoSyncTransforms = !!i649[5]
  i648.autoSimulation = !!i649[6]
  var i651 = i649[7]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i651[i + 0]) );
  }
  i648.collisionMatrix = i650
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i655 = data
  i654.enabled = !!i655[0]
  i654.layerId = i655[1]
  i654.otherLayerId = i655[2]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'material')
  i656.gravity = new pc.Vec2( i657[2], i657[3] )
  i656.positionIterations = i657[4]
  i656.velocityIterations = i657[5]
  i656.velocityThreshold = i657[6]
  i656.maxLinearCorrection = i657[7]
  i656.maxAngularCorrection = i657[8]
  i656.maxTranslationSpeed = i657[9]
  i656.maxRotationSpeed = i657[10]
  i656.baumgarteScale = i657[11]
  i656.baumgarteTOIScale = i657[12]
  i656.timeToSleep = i657[13]
  i656.linearSleepTolerance = i657[14]
  i656.angularSleepTolerance = i657[15]
  i656.defaultContactOffset = i657[16]
  i656.autoSimulation = !!i657[17]
  i656.queriesHitTriggers = !!i657[18]
  i656.queriesStartInColliders = !!i657[19]
  i656.callbacksOnDisable = !!i657[20]
  i656.reuseCollisionCallbacks = !!i657[21]
  i656.autoSyncTransforms = !!i657[22]
  var i659 = i657[23]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i659[i + 0]) );
  }
  i656.collisionMatrix = i658
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i663 = data
  i662.enabled = !!i663[0]
  i662.layerId = i663[1]
  i662.otherLayerId = i663[2]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i665 = data
  var i667 = i665[0]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i667[i + 0]) );
  }
  i664.qualityLevels = i666
  var i669 = i665[1]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( i669[i + 0] );
  }
  i664.names = i668
  i664.shadows = i665[2]
  i664.anisotropicFiltering = i665[3]
  i664.antiAliasing = i665[4]
  i664.lodBias = i665[5]
  i664.shadowCascades = i665[6]
  i664.shadowDistance = i665[7]
  i664.shadowmaskMode = i665[8]
  i664.shadowProjection = i665[9]
  i664.shadowResolution = i665[10]
  i664.softParticles = !!i665[11]
  i664.softVegetation = !!i665[12]
  i664.activeColorSpace = i665[13]
  i664.desiredColorSpace = i665[14]
  i664.masterTextureLimit = i665[15]
  i664.maxQueuedFrames = i665[16]
  i664.particleRaycastBudget = i665[17]
  i664.pixelLightCount = i665[18]
  i664.realtimeReflectionProbes = !!i665[19]
  i664.shadowCascade2Split = i665[20]
  i664.shadowCascade4Split = new pc.Vec3( i665[21], i665[22], i665[23] )
  i664.streamingMipmapsActive = !!i665[24]
  i664.vSyncCount = i665[25]
  i664.asyncUploadBufferSize = i665[26]
  i664.asyncUploadTimeSlice = i665[27]
  i664.billboardsFaceCameraPosition = !!i665[28]
  i664.shadowNearPlaneOffset = i665[29]
  i664.streamingMipmapsMemoryBudget = i665[30]
  i664.maximumLODLevel = i665[31]
  i664.streamingMipmapsAddAllCameras = !!i665[32]
  i664.streamingMipmapsMaxLevelReduction = i665[33]
  i664.streamingMipmapsRenderersPerFrame = i665[34]
  i664.resolutionScalingFixedDPIFactor = i665[35]
  i664.streamingMipmapsMaxFileIORequests = i665[36]
  i664.currentQualityLevel = i665[37]
  return i664
}

Deserializers["Luna.Unity.Utils.Shaders.ErrorDetails"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.Utils.Shaders.ErrorDetails' )
  var i675 = data
  i674.SubShaderIndex = i675[0]
  i674.PassId = i675[1]
  var i677 = i675[2]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( i677[i + 0] );
  }
  i674.ShaderVariantKeywords = i676
  var i679 = i675[3]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( i679[i + 0] );
  }
  i674.Messages = i678
  return i674
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

Deserializers.runtimeAnalysisExcludedClassesCount = "1720";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4359";

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

Deserializers.buildID = "d1f7e37d-a197-43c5-96e2-6a376774ef41";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

