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

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i365 = data
  i364.name = i365[0]
  i364.index = i365[1]
  i364.startup = !!i365[2]
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i367 = data
  i366.aspect = i367[0]
  i366.orthographic = !!i367[1]
  i366.orthographicSize = i367[2]
  i366.backgroundColor = new pc.Color(i367[3], i367[4], i367[5], i367[6])
  i366.nearClipPlane = i367[7]
  i366.farClipPlane = i367[8]
  i366.fieldOfView = i367[9]
  i366.depth = i367[10]
  i366.clearFlags = i367[11]
  i366.cullingMask = i367[12]
  i366.rect = i367[13]
  request.r(i367[14], i367[15], 0, i366, 'targetTexture')
  i366.usePhysicalProperties = !!i367[16]
  i366.focalLength = i367[17]
  i366.sensorSize = new pc.Vec2( i367[18], i367[19] )
  i366.lensShift = new pc.Vec2( i367[20], i367[21] )
  i366.gateFit = i367[22]
  i366.commandBufferCount = i367[23]
  i366.cameraType = i367[24]
  i366.enabled = !!i367[25]
  return i366
}

Deserializers["PlayworksComplianceHooks"] = function (request, data, root) {
  var i368 = root || request.c( 'PlayworksComplianceHooks' )
  var i369 = data
  i368.iosStoreUrl = i369[0]
  i368.androidStoreUrl = i369[1]
  i368.gameplayVariant = i369[2]
  return i368
}

Deserializers["SimpleDodgeGame"] = function (request, data, root) {
  var i370 = root || request.c( 'SimpleDodgeGame' )
  var i371 = data
  i370.columns = i371[0]
  i370.rows = i371[1]
  i370.boardSidePadding = i371[2]
  i370.boardBottomPadding = i371[3]
  i370.boardTopPadding = i371[4]
  i370.orbScale = i371[5]
  i370.clearDelaySeconds = i371[6]
  i370.fallDurationSeconds = i371[7]
  i370.roundDurationSeconds = i371[8]
  i370.baseScorePerOrb = i371[9]
  i370.backgroundColor = new pc.Color(i371[10], i371[11], i371[12], i371[13])
  i370.boardColor = new pc.Color(i371[14], i371[15], i371[16], i371[17])
  i370.boardOutlineColor = new pc.Color(i371[18], i371[19], i371[20], i371[21])
  var i373 = i371[22]
  var i372 = []
  for(var i = 0; i < i373.length; i += 4) {
    i372.push( new pc.Color(i373[i + 0], i373[i + 1], i373[i + 2], i373[i + 3]) );
  }
  i370.orbColors = i372
  var i375 = i371[23]
  var i374 = []
  for(var i = 0; i < i375.length; i += 2) {
  request.r(i375[i + 0], i375[i + 1], 2, i374, '')
  }
  i370.orbSprites = i374
  request.r(i371[24], i371[25], 0, i370, 'spriteMaterial')
  i370.useCustomMaterialInEditor = !!i371[26]
  i370.useCustomMaterialInWebGl = !!i371[27]
  i370.fallbackToDefaultIfShaderUnsupported = !!i371[28]
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i381 = data
  i380.name = i381[0]
  i380.tagId = i381[1]
  i380.enabled = !!i381[2]
  i380.isStatic = !!i381[3]
  i380.layer = i381[4]
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i383 = data
  i382.ambientIntensity = i383[0]
  i382.reflectionIntensity = i383[1]
  i382.ambientMode = i383[2]
  i382.ambientLight = new pc.Color(i383[3], i383[4], i383[5], i383[6])
  i382.ambientSkyColor = new pc.Color(i383[7], i383[8], i383[9], i383[10])
  i382.ambientGroundColor = new pc.Color(i383[11], i383[12], i383[13], i383[14])
  i382.ambientEquatorColor = new pc.Color(i383[15], i383[16], i383[17], i383[18])
  i382.fogColor = new pc.Color(i383[19], i383[20], i383[21], i383[22])
  i382.fogEndDistance = i383[23]
  i382.fogStartDistance = i383[24]
  i382.fogDensity = i383[25]
  i382.fog = !!i383[26]
  request.r(i383[27], i383[28], 0, i382, 'skybox')
  i382.fogMode = i383[29]
  var i385 = i383[30]
  var i384 = []
  for(var i = 0; i < i385.length; i += 1) {
    i384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i385[i + 0]) );
  }
  i382.lightmaps = i384
  i382.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i383[31], i382.lightProbes)
  i382.lightmapsMode = i383[32]
  i382.mixedBakeMode = i383[33]
  i382.environmentLightingMode = i383[34]
  i382.ambientProbe = new pc.SphericalHarmonicsL2(i383[35])
  i382.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i383[36])
  i382.useReferenceAmbientProbe = !!i383[37]
  request.r(i383[38], i383[39], 0, i382, 'customReflection')
  request.r(i383[40], i383[41], 0, i382, 'defaultReflection')
  i382.defaultReflectionMode = i383[42]
  i382.defaultReflectionResolution = i383[43]
  i382.sunLightObjectId = i383[44]
  i382.pixelLightCount = i383[45]
  i382.defaultReflectionHDR = !!i383[46]
  i382.hasLightDataAsset = !!i383[47]
  i382.hasManualGenerate = !!i383[48]
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i389 = data
  request.r(i389[0], i389[1], 0, i388, 'lightmapColor')
  request.r(i389[2], i389[3], 0, i388, 'lightmapDirection')
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i390 = root || new UnityEngine.LightProbes()
  var i391 = data
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i398 = root || new pc.UnityMaterial()
  var i399 = data
  i398.name = i399[0]
  request.r(i399[1], i399[2], 0, i398, 'shader')
  i398.renderQueue = i399[3]
  i398.enableInstancing = !!i399[4]
  var i401 = i399[5]
  var i400 = []
  for(var i = 0; i < i401.length; i += 1) {
    i400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i401[i + 0]) );
  }
  i398.floatParameters = i400
  var i403 = i399[6]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i403[i + 0]) );
  }
  i398.colorParameters = i402
  var i405 = i399[7]
  var i404 = []
  for(var i = 0; i < i405.length; i += 1) {
    i404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i405[i + 0]) );
  }
  i398.vectorParameters = i404
  var i407 = i399[8]
  var i406 = []
  for(var i = 0; i < i407.length; i += 1) {
    i406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i407[i + 0]) );
  }
  i398.textureParameters = i406
  var i409 = i399[9]
  var i408 = []
  for(var i = 0; i < i409.length; i += 1) {
    i408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i409[i + 0]) );
  }
  i398.materialFlags = i408
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i413 = data
  i412.name = i413[0]
  i412.value = i413[1]
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i417 = data
  i416.name = i417[0]
  i416.value = new pc.Color(i417[1], i417[2], i417[3], i417[4])
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i421 = data
  i420.name = i421[0]
  i420.value = new pc.Vec4( i421[1], i421[2], i421[3], i421[4] )
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i425 = data
  i424.name = i425[0]
  request.r(i425[1], i425[2], 0, i424, 'value')
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i429 = data
  i428.name = i429[0]
  i428.enabled = !!i429[1]
  return i428
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

Deserializers["Luna.Editor.Utils.Shaders.SceneLightData"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Editor.Utils.Shaders.SceneLightData' )
  var i565 = data
  i564.PointLightCount = i565[0]
  i564.SpotLightCount = i565[1]
  i564.DirectionalLightCount = i565[2]
  i564.LightmapOn = !!i565[3]
  i564.DirlightmapCombined = !!i565[4]
  i564.DirectionalCookieExists = !!i565[5]
  i564.PointCookieExists = !!i565[6]
  i564.SpotCookieExists = !!i565[7]
  i564.AddiitonalLightsKeywordRequired = !!i565[8]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i567 = data
  var i569 = i567[0]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i569[i + 0]) );
  }
  i566.files = i568
  i566.componentToPrefabIds = i567[1]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i573 = data
  i572.path = i573[0]
  request.r(i573[1], i573[2], 0, i572, 'unityObject')
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i575 = data
  var i577 = i575[0]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i577[i + 0]) );
  }
  i574.scriptsExecutionOrder = i576
  var i579 = i575[1]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i579[i + 0]) );
  }
  i574.sortingLayers = i578
  var i581 = i575[2]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i581[i + 0]) );
  }
  i574.cullingLayers = i580
  i574.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i575[3], i574.timeSettings)
  i574.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i575[4], i574.physicsSettings)
  i574.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i575[5], i574.physics2DSettings)
  i574.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i575[6], i574.qualitySettings)
  i574.enableRealtimeShadows = !!i575[7]
  i574.enableAutoInstancing = !!i575[8]
  i574.enableStaticBatching = !!i575[9]
  i574.enableDynamicBatching = !!i575[10]
  i574.lightmapEncodingQuality = i575[11]
  i574.desiredColorSpace = i575[12]
  var i583 = i575[13]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( i583[i + 0] );
  }
  i574.allTags = i582
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i587 = data
  i586.name = i587[0]
  i586.value = i587[1]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i591 = data
  i590.id = i591[0]
  i590.name = i591[1]
  i590.value = i591[2]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i595 = data
  i594.id = i595[0]
  i594.name = i595[1]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i597 = data
  i596.fixedDeltaTime = i597[0]
  i596.maximumDeltaTime = i597[1]
  i596.timeScale = i597[2]
  i596.maximumParticleTimestep = i597[3]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i599 = data
  i598.gravity = new pc.Vec3( i599[0], i599[1], i599[2] )
  i598.defaultSolverIterations = i599[3]
  i598.bounceThreshold = i599[4]
  i598.autoSyncTransforms = !!i599[5]
  i598.autoSimulation = !!i599[6]
  var i601 = i599[7]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i601[i + 0]) );
  }
  i598.collisionMatrix = i600
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i605 = data
  i604.enabled = !!i605[0]
  i604.layerId = i605[1]
  i604.otherLayerId = i605[2]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'material')
  i606.gravity = new pc.Vec2( i607[2], i607[3] )
  i606.positionIterations = i607[4]
  i606.velocityIterations = i607[5]
  i606.velocityThreshold = i607[6]
  i606.maxLinearCorrection = i607[7]
  i606.maxAngularCorrection = i607[8]
  i606.maxTranslationSpeed = i607[9]
  i606.maxRotationSpeed = i607[10]
  i606.baumgarteScale = i607[11]
  i606.baumgarteTOIScale = i607[12]
  i606.timeToSleep = i607[13]
  i606.linearSleepTolerance = i607[14]
  i606.angularSleepTolerance = i607[15]
  i606.defaultContactOffset = i607[16]
  i606.autoSimulation = !!i607[17]
  i606.queriesHitTriggers = !!i607[18]
  i606.queriesStartInColliders = !!i607[19]
  i606.callbacksOnDisable = !!i607[20]
  i606.reuseCollisionCallbacks = !!i607[21]
  i606.autoSyncTransforms = !!i607[22]
  var i609 = i607[23]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i609[i + 0]) );
  }
  i606.collisionMatrix = i608
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i613 = data
  i612.enabled = !!i613[0]
  i612.layerId = i613[1]
  i612.otherLayerId = i613[2]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i615 = data
  var i617 = i615[0]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i617[i + 0]) );
  }
  i614.qualityLevels = i616
  var i619 = i615[1]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( i619[i + 0] );
  }
  i614.names = i618
  i614.shadows = i615[2]
  i614.anisotropicFiltering = i615[3]
  i614.antiAliasing = i615[4]
  i614.lodBias = i615[5]
  i614.shadowCascades = i615[6]
  i614.shadowDistance = i615[7]
  i614.shadowmaskMode = i615[8]
  i614.shadowProjection = i615[9]
  i614.shadowResolution = i615[10]
  i614.softParticles = !!i615[11]
  i614.softVegetation = !!i615[12]
  i614.activeColorSpace = i615[13]
  i614.desiredColorSpace = i615[14]
  i614.masterTextureLimit = i615[15]
  i614.maxQueuedFrames = i615[16]
  i614.particleRaycastBudget = i615[17]
  i614.pixelLightCount = i615[18]
  i614.realtimeReflectionProbes = !!i615[19]
  i614.shadowCascade2Split = i615[20]
  i614.shadowCascade4Split = new pc.Vec3( i615[21], i615[22], i615[23] )
  i614.streamingMipmapsActive = !!i615[24]
  i614.vSyncCount = i615[25]
  i614.asyncUploadBufferSize = i615[26]
  i614.asyncUploadTimeSlice = i615[27]
  i614.billboardsFaceCameraPosition = !!i615[28]
  i614.shadowNearPlaneOffset = i615[29]
  i614.streamingMipmapsMemoryBudget = i615[30]
  i614.maximumLODLevel = i615[31]
  i614.streamingMipmapsAddAllCameras = !!i615[32]
  i614.streamingMipmapsMaxLevelReduction = i615[33]
  i614.streamingMipmapsRenderersPerFrame = i615[34]
  i614.resolutionScalingFixedDPIFactor = i615[35]
  i614.streamingMipmapsMaxFileIORequests = i615[36]
  i614.currentQualityLevel = i615[37]
  return i614
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader' )
  var i625 = data
  i624.Index = i625[0]
  var i627 = i625[1]
  var i626 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass')))
  for(var i = 0; i < i627.length; i += 1) {
    i626.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass', i627[i + 0]));
  }
  i624.Passes = i626
  request.r(i625[2], i625[3], 0, i624, 'Shader')
  var i629 = i625[4]
  var i628 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i629.length; i += 1) {
    i628.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i629[i + 0]));
  }
  i624.Tags = i628
  return i624
}

Deserializers["Luna.Unity.Utils.Shaders.ShaderCompilationError"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.Utils.Shaders.ShaderCompilationError' )
  var i633 = data
  i632.Variant = !!i633[0]
  i632.ShaderName = i633[1]
  var i635 = i633[2]
  var i634 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ErrorDetails')))
  for(var i = 0; i < i635.length; i += 1) {
    i634.add(request.d('Luna.Unity.Utils.Shaders.ErrorDetails', i635[i + 0]));
  }
  i632.Details = i634
  return i632
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'Shader')
  var i641 = i639[2]
  var i640 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant')))
  for(var i = 0; i < i641.length; i += 1) {
    i640.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant', i641[i + 0]));
  }
  i638.ShaderVariants = i640
  var i643 = i639[3]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( i643[i + 0] );
  }
  i638.DefinedKeywords = i642
  var i645 = i639[4]
  var i644 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup')))
  for(var i = 0; i < i645.length; i += 1) {
    i644.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup', i645[i + 0]));
  }
  i638.KeywordGroups = i644
  i638.KeywordsMinimalCardinality = i639[5]
  i638.ContainsInvalidVariant = !!i639[6]
  var i647 = i639[7]
  var i646 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i647.length; i += 1) {
    i646.add(request.d(' . ‵', i647[i + 0]));
  }
  i638.VariantStructures = i646
  var i649 = i639[8]
  var i648 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ShaderCompilationError')))
  for(var i = 0; i < i649.length; i += 1) {
    i648.add(request.d('Luna.Unity.Utils.Shaders.ShaderCompilationError', i649[i + 0]));
  }
  i638.CompilationErrors = i648
  i638.HasDepthReader = !!i639[9]
  i638.Id = i639[10]
  i638.SubShaderIndex = i639[11]
  i638.SerializedObjectId = i639[12]
  var i651 = i639[13]
  var i650 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i651.length; i += 1) {
    i650.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i651[i + 0]));
  }
  i638.Tags = i650
  i638.UsePass = request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass', i639[14], i638.UsePass)
  i638.GrabPassTextureName = i639[15]
  i638.PlatformMask = i639[16]
  return i638
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag' )
  var i655 = data
  i654.Key = i655[0]
  i654.Value = i655[1]
  return i654
}

Deserializers["Luna.Unity.Utils.Shaders.ErrorDetails"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.Utils.Shaders.ErrorDetails' )
  var i659 = data
  i658.SubShaderIndex = i659[0]
  i658.PassId = i659[1]
  var i661 = i659[2]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( i661[i + 0] );
  }
  i658.ShaderVariantKeywords = i660
  var i663 = i659[3]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( i663[i + 0] );
  }
  i658.Messages = i662
  return i658
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant' )
  var i667 = data
  i666.ShaderCompilerPlatform = i667[0]
  i666.NoShaderVariant = !!i667[1]
  i666.VertexProgram = i667[2]
  i666.FragmentProgram = i667[3]
  i666.LOD = i667[4]
  i666.readDepth = !!i667[5]
  i666.PassId = i667[6]
  i666.SubShaderIndex = i667[7]
  var i669 = i667[8]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( i669[i + 0] );
  }
  i666.Keywords = i668
  var i671 = i667[9]
  var i670 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i671.length; i += 1) {
    i670.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i671[i + 0]));
  }
  i666.Tags = i670
  return i666
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup' )
  var i675 = data
  var i677 = i675[0]
  var i676 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i677.length; i += 1) {
    i676.add(i677[i + 0]);
  }
  i674.Keywords = i676
  i674.hasDiscard = !!i675[1]
  return i674
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass' )
  var i679 = data
  i678.shader = i679[0]
  i678.pass = i679[1]
  return i678
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"11":[12],"13":[12],"14":[12],"15":[12],"16":[12],"17":[12],"18":[19],"20":[0],"21":[22],"23":[22],"24":[22],"25":[22],"26":[22],"27":[22],"28":[29],"30":[29],"31":[29],"32":[29],"33":[29],"34":[29],"35":[29],"36":[29],"37":[29],"38":[29],"39":[29],"40":[29],"41":[29],"42":[0],"43":[44],"45":[46],"47":[46],"48":[49],"50":[51],"52":[0],"53":[54],"55":[56],"57":[48],"58":[49],"59":[44,49],"60":[49,61],"62":[49],"63":[61,49],"64":[44],"65":[61,49],"66":[49],"67":[49],"68":[49],"69":[48],"70":[61,49],"71":[49],"72":[48],"73":[49],"74":[49],"75":[49],"76":[49],"77":[49],"78":[49],"79":[49],"80":[49],"81":[49],"82":[61,49],"83":[49],"84":[49],"85":[49],"86":[49],"87":[61,49],"88":[49],"89":[56],"90":[56],"91":[56],"92":[56],"93":[0],"94":[0]}

Deserializers.types = ["UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","PlayworksComplianceHooks","SimpleDodgeGame","UnityEngine.Sprite","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.InputSystem.InputActionAsset","UnityEngine.InputSystem.InputActionReference","Luna.Unity.Utils.Shaders.LunaSVC","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1733";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4305";

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

Deserializers.buildID = "6d226dc2-aff8-42e0-b662-2503b38a14df";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

