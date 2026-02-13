var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.JointSpring' )
  var i415 = data
  i414.spring = i415[0]
  i414.damper = i415[1]
  i414.targetPosition = i415[2]
  return i414
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.JointMotor' )
  var i417 = data
  i416.m_TargetVelocity = i417[0]
  i416.m_Force = i417[1]
  i416.m_FreeSpin = i417[2]
  return i416
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i418 = root || request.c( 'UnityEngine.JointLimits' )
  var i419 = data
  i418.m_Min = i419[0]
  i418.m_Max = i419[1]
  i418.m_Bounciness = i419[2]
  i418.m_BounceMinVelocity = i419[3]
  i418.m_ContactDistance = i419[4]
  i418.minBounce = i419[5]
  i418.maxBounce = i419[6]
  return i418
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i420 = root || request.c( 'UnityEngine.JointDrive' )
  var i421 = data
  i420.m_PositionSpring = i421[0]
  i420.m_PositionDamper = i421[1]
  i420.m_MaximumForce = i421[2]
  i420.m_UseAcceleration = i421[3]
  return i420
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i423 = data
  i422.m_Spring = i423[0]
  i422.m_Damper = i423[1]
  return i422
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i425 = data
  i424.m_Limit = i425[0]
  i424.m_Bounciness = i425[1]
  i424.m_ContactDistance = i425[2]
  return i424
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i427 = data
  i426.m_ExtremumSlip = i427[0]
  i426.m_ExtremumValue = i427[1]
  i426.m_AsymptoteSlip = i427[2]
  i426.m_AsymptoteValue = i427[3]
  i426.m_Stiffness = i427[4]
  return i426
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i429 = data
  i428.m_LowerAngle = i429[0]
  i428.m_UpperAngle = i429[1]
  return i428
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i431 = data
  i430.m_MotorSpeed = i431[0]
  i430.m_MaximumMotorTorque = i431[1]
  return i430
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i433 = data
  i432.m_DampingRatio = i433[0]
  i432.m_Frequency = i433[1]
  i432.m_Angle = i433[2]
  return i432
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i435 = data
  i434.m_LowerTranslation = i435[0]
  i434.m_UpperTranslation = i435[1]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i437 = data
  i436.name = i437[0]
  i436.width = i437[1]
  i436.height = i437[2]
  i436.mipmapCount = i437[3]
  i436.anisoLevel = i437[4]
  i436.filterMode = i437[5]
  i436.hdr = !!i437[6]
  i436.format = i437[7]
  i436.wrapMode = i437[8]
  i436.alphaIsTransparency = !!i437[9]
  i436.alphaSource = i437[10]
  i436.graphicsFormat = i437[11]
  i436.sRGBTexture = !!i437[12]
  i436.desiredColorSpace = i437[13]
  i436.wrapU = i437[14]
  i436.wrapV = i437[15]
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i438 = root || new pc.UnityMaterial()
  var i439 = data
  i438.name = i439[0]
  request.r(i439[1], i439[2], 0, i438, 'shader')
  i438.renderQueue = i439[3]
  i438.enableInstancing = !!i439[4]
  var i441 = i439[5]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i441[i + 0]) );
  }
  i438.floatParameters = i440
  var i443 = i439[6]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i443[i + 0]) );
  }
  i438.colorParameters = i442
  var i445 = i439[7]
  var i444 = []
  for(var i = 0; i < i445.length; i += 1) {
    i444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i445[i + 0]) );
  }
  i438.vectorParameters = i444
  var i447 = i439[8]
  var i446 = []
  for(var i = 0; i < i447.length; i += 1) {
    i446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i447[i + 0]) );
  }
  i438.textureParameters = i446
  var i449 = i439[9]
  var i448 = []
  for(var i = 0; i < i449.length; i += 1) {
    i448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i449[i + 0]) );
  }
  i438.materialFlags = i448
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i453 = data
  i452.name = i453[0]
  i452.value = i453[1]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i457 = data
  i456.name = i457[0]
  i456.value = new pc.Color(i457[1], i457[2], i457[3], i457[4])
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i461 = data
  i460.name = i461[0]
  i460.value = new pc.Vec4( i461[1], i461[2], i461[3], i461[4] )
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i465 = data
  i464.name = i465[0]
  request.r(i465[1], i465[2], 0, i464, 'value')
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i469 = data
  i468.name = i469[0]
  i468.enabled = !!i469[1]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i471 = data
  i470.position = new pc.Vec3( i471[0], i471[1], i471[2] )
  i470.scale = new pc.Vec3( i471[3], i471[4], i471[5] )
  i470.rotation = new pc.Quat(i471[6], i471[7], i471[8], i471[9])
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i473 = data
  i472.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i473[0], i472.main)
  i472.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i473[1], i472.colorBySpeed)
  i472.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i473[2], i472.colorOverLifetime)
  i472.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i473[3], i472.emission)
  i472.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i473[4], i472.rotationBySpeed)
  i472.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i473[5], i472.rotationOverLifetime)
  i472.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i473[6], i472.shape)
  i472.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i473[7], i472.sizeBySpeed)
  i472.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i473[8], i472.sizeOverLifetime)
  i472.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i473[9], i472.textureSheetAnimation)
  i472.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i473[10], i472.velocityOverLifetime)
  i472.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i473[11], i472.noise)
  i472.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i473[12], i472.inheritVelocity)
  i472.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i473[13], i472.forceOverLifetime)
  i472.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i473[14], i472.limitVelocityOverLifetime)
  i472.useAutoRandomSeed = !!i473[15]
  i472.randomSeed = i473[16]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i474 = root || new pc.ParticleSystemMain()
  var i475 = data
  i474.duration = i475[0]
  i474.loop = !!i475[1]
  i474.prewarm = !!i475[2]
  i474.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i475[3], i474.startDelay)
  i474.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i475[4], i474.startLifetime)
  i474.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i475[5], i474.startSpeed)
  i474.startSize3D = !!i475[6]
  i474.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i475[7], i474.startSizeX)
  i474.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i475[8], i474.startSizeY)
  i474.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i475[9], i474.startSizeZ)
  i474.startRotation3D = !!i475[10]
  i474.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i475[11], i474.startRotationX)
  i474.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i475[12], i474.startRotationY)
  i474.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i475[13], i474.startRotationZ)
  i474.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i475[14], i474.startColor)
  i474.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i475[15], i474.gravityModifier)
  i474.simulationSpace = i475[16]
  request.r(i475[17], i475[18], 0, i474, 'customSimulationSpace')
  i474.simulationSpeed = i475[19]
  i474.useUnscaledTime = !!i475[20]
  i474.scalingMode = i475[21]
  i474.playOnAwake = !!i475[22]
  i474.maxParticles = i475[23]
  i474.emitterVelocityMode = i475[24]
  i474.stopAction = i475[25]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i476 = root || new pc.MinMaxCurve()
  var i477 = data
  i476.mode = i477[0]
  i476.curveMin = new pc.AnimationCurve( { keys_flow: i477[1] } )
  i476.curveMax = new pc.AnimationCurve( { keys_flow: i477[2] } )
  i476.curveMultiplier = i477[3]
  i476.constantMin = i477[4]
  i476.constantMax = i477[5]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i478 = root || new pc.MinMaxGradient()
  var i479 = data
  i478.mode = i479[0]
  i478.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i479[1], i478.gradientMin)
  i478.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i479[2], i478.gradientMax)
  i478.colorMin = new pc.Color(i479[3], i479[4], i479[5], i479[6])
  i478.colorMax = new pc.Color(i479[7], i479[8], i479[9], i479[10])
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i481 = data
  i480.mode = i481[0]
  var i483 = i481[1]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i483[i + 0]) );
  }
  i480.colorKeys = i482
  var i485 = i481[2]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i485[i + 0]) );
  }
  i480.alphaKeys = i484
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i486 = root || new pc.ParticleSystemColorBySpeed()
  var i487 = data
  i486.enabled = !!i487[0]
  i486.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i487[1], i486.color)
  i486.range = new pc.Vec2( i487[2], i487[3] )
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i491 = data
  i490.color = new pc.Color(i491[0], i491[1], i491[2], i491[3])
  i490.time = i491[4]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i495 = data
  i494.alpha = i495[0]
  i494.time = i495[1]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i496 = root || new pc.ParticleSystemColorOverLifetime()
  var i497 = data
  i496.enabled = !!i497[0]
  i496.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i497[1], i496.color)
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i498 = root || new pc.ParticleSystemEmitter()
  var i499 = data
  i498.enabled = !!i499[0]
  i498.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i499[1], i498.rateOverTime)
  i498.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i499[2], i498.rateOverDistance)
  var i501 = i499[3]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i501[i + 0]) );
  }
  i498.bursts = i500
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i504 = root || new pc.ParticleSystemBurst()
  var i505 = data
  i504.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[0], i504.count)
  i504.cycleCount = i505[1]
  i504.minCount = i505[2]
  i504.maxCount = i505[3]
  i504.repeatInterval = i505[4]
  i504.time = i505[5]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i506 = root || new pc.ParticleSystemRotationBySpeed()
  var i507 = data
  i506.enabled = !!i507[0]
  i506.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i507[1], i506.x)
  i506.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i507[2], i506.y)
  i506.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i507[3], i506.z)
  i506.separateAxes = !!i507[4]
  i506.range = new pc.Vec2( i507[5], i507[6] )
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i508 = root || new pc.ParticleSystemRotationOverLifetime()
  var i509 = data
  i508.enabled = !!i509[0]
  i508.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[1], i508.x)
  i508.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[2], i508.y)
  i508.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[3], i508.z)
  i508.separateAxes = !!i509[4]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i510 = root || new pc.ParticleSystemShape()
  var i511 = data
  i510.enabled = !!i511[0]
  i510.shapeType = i511[1]
  i510.randomDirectionAmount = i511[2]
  i510.sphericalDirectionAmount = i511[3]
  i510.randomPositionAmount = i511[4]
  i510.alignToDirection = !!i511[5]
  i510.radius = i511[6]
  i510.radiusMode = i511[7]
  i510.radiusSpread = i511[8]
  i510.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[9], i510.radiusSpeed)
  i510.radiusThickness = i511[10]
  i510.angle = i511[11]
  i510.length = i511[12]
  i510.boxThickness = new pc.Vec3( i511[13], i511[14], i511[15] )
  i510.meshShapeType = i511[16]
  request.r(i511[17], i511[18], 0, i510, 'mesh')
  request.r(i511[19], i511[20], 0, i510, 'meshRenderer')
  request.r(i511[21], i511[22], 0, i510, 'skinnedMeshRenderer')
  i510.useMeshMaterialIndex = !!i511[23]
  i510.meshMaterialIndex = i511[24]
  i510.useMeshColors = !!i511[25]
  i510.normalOffset = i511[26]
  i510.arc = i511[27]
  i510.arcMode = i511[28]
  i510.arcSpread = i511[29]
  i510.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[30], i510.arcSpeed)
  i510.donutRadius = i511[31]
  i510.position = new pc.Vec3( i511[32], i511[33], i511[34] )
  i510.rotation = new pc.Vec3( i511[35], i511[36], i511[37] )
  i510.scale = new pc.Vec3( i511[38], i511[39], i511[40] )
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i512 = root || new pc.ParticleSystemSizeBySpeed()
  var i513 = data
  i512.enabled = !!i513[0]
  i512.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[1], i512.x)
  i512.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[2], i512.y)
  i512.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[3], i512.z)
  i512.separateAxes = !!i513[4]
  i512.range = new pc.Vec2( i513[5], i513[6] )
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i514 = root || new pc.ParticleSystemSizeOverLifetime()
  var i515 = data
  i514.enabled = !!i515[0]
  i514.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[1], i514.x)
  i514.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[2], i514.y)
  i514.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[3], i514.z)
  i514.separateAxes = !!i515[4]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i516 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i517 = data
  i516.enabled = !!i517[0]
  i516.mode = i517[1]
  i516.animation = i517[2]
  i516.numTilesX = i517[3]
  i516.numTilesY = i517[4]
  i516.useRandomRow = !!i517[5]
  i516.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[6], i516.frameOverTime)
  i516.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[7], i516.startFrame)
  i516.cycleCount = i517[8]
  i516.rowIndex = i517[9]
  i516.flipU = i517[10]
  i516.flipV = i517[11]
  i516.spriteCount = i517[12]
  var i519 = i517[13]
  var i518 = []
  for(var i = 0; i < i519.length; i += 2) {
  request.r(i519[i + 0], i519[i + 1], 2, i518, '')
  }
  i516.sprites = i518
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i522 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i523 = data
  i522.enabled = !!i523[0]
  i522.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[1], i522.x)
  i522.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[2], i522.y)
  i522.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[3], i522.z)
  i522.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[4], i522.radial)
  i522.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[5], i522.speedModifier)
  i522.space = i523[6]
  i522.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[7], i522.orbitalX)
  i522.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[8], i522.orbitalY)
  i522.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[9], i522.orbitalZ)
  i522.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[10], i522.orbitalOffsetX)
  i522.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[11], i522.orbitalOffsetY)
  i522.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[12], i522.orbitalOffsetZ)
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i524 = root || new pc.ParticleSystemNoise()
  var i525 = data
  i524.enabled = !!i525[0]
  i524.separateAxes = !!i525[1]
  i524.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[2], i524.strengthX)
  i524.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[3], i524.strengthY)
  i524.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[4], i524.strengthZ)
  i524.frequency = i525[5]
  i524.damping = !!i525[6]
  i524.octaveCount = i525[7]
  i524.octaveMultiplier = i525[8]
  i524.octaveScale = i525[9]
  i524.quality = i525[10]
  i524.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[11], i524.scrollSpeed)
  i524.scrollSpeedMultiplier = i525[12]
  i524.remapEnabled = !!i525[13]
  i524.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[14], i524.remapX)
  i524.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[15], i524.remapY)
  i524.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[16], i524.remapZ)
  i524.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[17], i524.positionAmount)
  i524.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[18], i524.rotationAmount)
  i524.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[19], i524.sizeAmount)
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i526 = root || new pc.ParticleSystemInheritVelocity()
  var i527 = data
  i526.enabled = !!i527[0]
  i526.mode = i527[1]
  i526.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[2], i526.curve)
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i528 = root || new pc.ParticleSystemForceOverLifetime()
  var i529 = data
  i528.enabled = !!i529[0]
  i528.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[1], i528.x)
  i528.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[2], i528.y)
  i528.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[3], i528.z)
  i528.space = i529[4]
  i528.randomized = !!i529[5]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i530 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i531 = data
  i530.enabled = !!i531[0]
  i530.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[1], i530.limit)
  i530.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[2], i530.limitX)
  i530.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[3], i530.limitY)
  i530.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[4], i530.limitZ)
  i530.dampen = i531[5]
  i530.separateAxes = !!i531[6]
  i530.space = i531[7]
  i530.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[8], i530.drag)
  i530.multiplyDragByParticleSize = !!i531[9]
  i530.multiplyDragByParticleVelocity = !!i531[10]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i533 = data
  request.r(i533[0], i533[1], 0, i532, 'mesh')
  i532.meshCount = i533[2]
  i532.activeVertexStreamsCount = i533[3]
  i532.alignment = i533[4]
  i532.renderMode = i533[5]
  i532.sortMode = i533[6]
  i532.lengthScale = i533[7]
  i532.velocityScale = i533[8]
  i532.cameraVelocityScale = i533[9]
  i532.normalDirection = i533[10]
  i532.sortingFudge = i533[11]
  i532.minParticleSize = i533[12]
  i532.maxParticleSize = i533[13]
  i532.pivot = new pc.Vec3( i533[14], i533[15], i533[16] )
  request.r(i533[17], i533[18], 0, i532, 'trailMaterial')
  i532.applyActiveColorSpace = !!i533[19]
  i532.enabled = !!i533[20]
  request.r(i533[21], i533[22], 0, i532, 'sharedMaterial')
  var i535 = i533[23]
  var i534 = []
  for(var i = 0; i < i535.length; i += 2) {
  request.r(i535[i + 0], i535[i + 1], 2, i534, '')
  }
  i532.sharedMaterials = i534
  i532.receiveShadows = !!i533[24]
  i532.shadowCastingMode = i533[25]
  i532.sortingLayerID = i533[26]
  i532.sortingOrder = i533[27]
  i532.lightmapIndex = i533[28]
  i532.lightmapSceneIndex = i533[29]
  i532.lightmapScaleOffset = new pc.Vec4( i533[30], i533[31], i533[32], i533[33] )
  i532.lightProbeUsage = i533[34]
  i532.reflectionProbeUsage = i533[35]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i539 = data
  i538.name = i539[0]
  i538.tagId = i539[1]
  i538.enabled = !!i539[2]
  i538.isStatic = !!i539[3]
  i538.layer = i539[4]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i541 = data
  i540.name = i541[0]
  i540.index = i541[1]
  i540.startup = !!i541[2]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i543 = data
  i542.aspect = i543[0]
  i542.orthographic = !!i543[1]
  i542.orthographicSize = i543[2]
  i542.backgroundColor = new pc.Color(i543[3], i543[4], i543[5], i543[6])
  i542.nearClipPlane = i543[7]
  i542.farClipPlane = i543[8]
  i542.fieldOfView = i543[9]
  i542.depth = i543[10]
  i542.clearFlags = i543[11]
  i542.cullingMask = i543[12]
  i542.rect = i543[13]
  request.r(i543[14], i543[15], 0, i542, 'targetTexture')
  i542.usePhysicalProperties = !!i543[16]
  i542.focalLength = i543[17]
  i542.sensorSize = new pc.Vec2( i543[18], i543[19] )
  i542.lensShift = new pc.Vec2( i543[20], i543[21] )
  i542.gateFit = i543[22]
  i542.commandBufferCount = i543[23]
  i542.cameraType = i543[24]
  i542.enabled = !!i543[25]
  return i542
}

Deserializers["PlayworksComplianceHooks"] = function (request, data, root) {
  var i544 = root || request.c( 'PlayworksComplianceHooks' )
  var i545 = data
  i544.iosStoreUrl = i545[0]
  i544.androidStoreUrl = i545[1]
  i544.gameplayVariant = i545[2]
  request.r(i545[3], i545[4], 0, i544, 'enemySprite')
  request.r(i545[5], i545[6], 0, i544, 'attackEffectPrefab')
  return i544
}

Deserializers["SimpleDodgeGame"] = function (request, data, root) {
  var i546 = root || request.c( 'SimpleDodgeGame' )
  var i547 = data
  i546.columns = i547[0]
  i546.rows = i547[1]
  i546.boardSidePadding = i547[2]
  i546.boardBottomPadding = i547[3]
  i546.boardTopPadding = i547[4]
  i546.orbScale = i547[5]
  i546.clearDelaySeconds = i547[6]
  i546.fallDurationSeconds = i547[7]
  i546.resolveStallTimeoutSeconds = i547[8]
  i546.roundDurationSeconds = i547[9]
  i546.baseScorePerOrb = i547[10]
  i546.backgroundColor = new pc.Color(i547[11], i547[12], i547[13], i547[14])
  i546.boardColor = new pc.Color(i547[15], i547[16], i547[17], i547[18])
  i546.boardOutlineColor = new pc.Color(i547[19], i547[20], i547[21], i547[22])
  var i549 = i547[23]
  var i548 = []
  for(var i = 0; i < i549.length; i += 4) {
    i548.push( new pc.Color(i549[i + 0], i549[i + 1], i549[i + 2], i549[i + 3]) );
  }
  i546.orbColors = i548
  var i551 = i547[24]
  var i550 = []
  for(var i = 0; i < i551.length; i += 2) {
  request.r(i551[i + 0], i551[i + 1], 2, i550, '')
  }
  i546.orbSprites = i550
  request.r(i547[25], i547[26], 0, i546, 'spriteMaterial')
  i546.useCustomMaterialInEditor = !!i547[27]
  i546.useCustomMaterialInWebGl = !!i547[28]
  i546.fallbackToDefaultIfShaderUnsupported = !!i547[29]
  request.r(i547[30], i547[31], 0, i546, 'hudFontOverride')
  request.r(i547[32], i547[33], 0, i546, 'enemySprite')
  i546.enemyTint = new pc.Color(i547[34], i547[35], i547[36], i547[37])
  i546.enemySizeInCells = i547[38]
  i546.enemyTopMargin = i547[39]
  request.r(i547[40], i547[41], 0, i546, 'attackEffectPrefab')
  request.r(i547[42], i547[43], 0, i546, 'attackEffectSprite')
  i546.attackTravelSeconds = i547[44]
  i546.attackArcHeight = i547[45]
  i546.attackEffectScale = i547[46]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i555 = data
  i554.ambientIntensity = i555[0]
  i554.reflectionIntensity = i555[1]
  i554.ambientMode = i555[2]
  i554.ambientLight = new pc.Color(i555[3], i555[4], i555[5], i555[6])
  i554.ambientSkyColor = new pc.Color(i555[7], i555[8], i555[9], i555[10])
  i554.ambientGroundColor = new pc.Color(i555[11], i555[12], i555[13], i555[14])
  i554.ambientEquatorColor = new pc.Color(i555[15], i555[16], i555[17], i555[18])
  i554.fogColor = new pc.Color(i555[19], i555[20], i555[21], i555[22])
  i554.fogEndDistance = i555[23]
  i554.fogStartDistance = i555[24]
  i554.fogDensity = i555[25]
  i554.fog = !!i555[26]
  request.r(i555[27], i555[28], 0, i554, 'skybox')
  i554.fogMode = i555[29]
  var i557 = i555[30]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i557[i + 0]) );
  }
  i554.lightmaps = i556
  i554.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i555[31], i554.lightProbes)
  i554.lightmapsMode = i555[32]
  i554.mixedBakeMode = i555[33]
  i554.environmentLightingMode = i555[34]
  i554.ambientProbe = new pc.SphericalHarmonicsL2(i555[35])
  i554.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i555[36])
  i554.useReferenceAmbientProbe = !!i555[37]
  request.r(i555[38], i555[39], 0, i554, 'customReflection')
  request.r(i555[40], i555[41], 0, i554, 'defaultReflection')
  i554.defaultReflectionMode = i555[42]
  i554.defaultReflectionResolution = i555[43]
  i554.sunLightObjectId = i555[44]
  i554.pixelLightCount = i555[45]
  i554.defaultReflectionHDR = !!i555[46]
  i554.hasLightDataAsset = !!i555[47]
  i554.hasManualGenerate = !!i555[48]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i561 = data
  request.r(i561[0], i561[1], 0, i560, 'lightmapColor')
  request.r(i561[2], i561[3], 0, i560, 'lightmapDirection')
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i562 = root || new UnityEngine.LightProbes()
  var i563 = data
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i571 = data
  var i573 = i571[0]
  var i572 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i573.length; i += 1) {
    i572.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i573[i + 0]));
  }
  i570.ShaderCompilationErrors = i572
  i570.name = i571[1]
  i570.guid = i571[2]
  var i575 = i571[3]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( i575[i + 0] );
  }
  i570.shaderDefinedKeywords = i574
  var i577 = i571[4]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i577[i + 0]) );
  }
  i570.passes = i576
  var i579 = i571[5]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i579[i + 0]) );
  }
  i570.usePasses = i578
  var i581 = i571[6]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i581[i + 0]) );
  }
  i570.defaultParameterValues = i580
  request.r(i571[7], i571[8], 0, i570, 'unityFallbackShader')
  i570.readDepth = !!i571[9]
  i570.hasDepthOnlyPass = !!i571[10]
  i570.isCreatedByShaderGraph = !!i571[11]
  i570.disableBatching = !!i571[12]
  i570.compiled = !!i571[13]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i585 = data
  i584.shaderName = i585[0]
  i584.errorMessage = i585[1]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i590 = root || new pc.UnityShaderPass()
  var i591 = data
  i590.id = i591[0]
  i590.subShaderIndex = i591[1]
  i590.name = i591[2]
  i590.passType = i591[3]
  i590.grabPassTextureName = i591[4]
  i590.usePass = !!i591[5]
  i590.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i591[6], i590.zTest)
  i590.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i591[7], i590.zWrite)
  i590.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i591[8], i590.culling)
  i590.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i591[9], i590.blending)
  i590.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i591[10], i590.alphaBlending)
  i590.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i591[11], i590.colorWriteMask)
  i590.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i591[12], i590.offsetUnits)
  i590.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i591[13], i590.offsetFactor)
  i590.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i591[14], i590.stencilRef)
  i590.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i591[15], i590.stencilReadMask)
  i590.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i591[16], i590.stencilWriteMask)
  i590.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i591[17], i590.stencilOp)
  i590.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i591[18], i590.stencilOpFront)
  i590.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i591[19], i590.stencilOpBack)
  var i593 = i591[20]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i593[i + 0]) );
  }
  i590.tags = i592
  var i595 = i591[21]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( i595[i + 0] );
  }
  i590.passDefinedKeywords = i594
  var i597 = i591[22]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i597[i + 0]) );
  }
  i590.passDefinedKeywordGroups = i596
  var i599 = i591[23]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i599[i + 0]) );
  }
  i590.variants = i598
  var i601 = i591[24]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i601[i + 0]) );
  }
  i590.excludedVariants = i600
  i590.hasDepthReader = !!i591[25]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i603 = data
  i602.val = i603[0]
  i602.name = i603[1]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i605 = data
  i604.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i605[0], i604.src)
  i604.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i605[1], i604.dst)
  i604.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i605[2], i604.op)
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i607 = data
  i606.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i607[0], i606.pass)
  i606.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i607[1], i606.fail)
  i606.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i607[2], i606.zFail)
  i606.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i607[3], i606.comp)
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i611 = data
  i610.name = i611[0]
  i610.value = i611[1]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i615 = data
  var i617 = i615[0]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( i617[i + 0] );
  }
  i614.keywords = i616
  i614.hasDiscard = !!i615[1]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i621 = data
  i620.passId = i621[0]
  i620.subShaderIndex = i621[1]
  var i623 = i621[2]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( i623[i + 0] );
  }
  i620.keywords = i622
  i620.vertexProgram = i621[3]
  i620.fragmentProgram = i621[4]
  i620.exportedForWebGl2 = !!i621[5]
  i620.readDepth = !!i621[6]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'shader')
  i626.pass = i627[2]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i631 = data
  i630.name = i631[0]
  i630.type = i631[1]
  i630.value = new pc.Vec4( i631[2], i631[3], i631[4], i631[5] )
  i630.textureValue = i631[6]
  i630.shaderPropertyFlag = i631[7]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i633 = data
  i632.name = i633[0]
  request.r(i633[1], i633[2], 0, i632, 'texture')
  i632.aabb = i633[3]
  i632.vertices = i633[4]
  i632.triangles = i633[5]
  i632.textureRect = UnityEngine.Rect.MinMaxRect(i633[6], i633[7], i633[8], i633[9])
  i632.packedRect = UnityEngine.Rect.MinMaxRect(i633[10], i633[11], i633[12], i633[13])
  i632.border = new pc.Vec4( i633[14], i633[15], i633[16], i633[17] )
  i632.transparency = i633[18]
  i632.bounds = i633[19]
  i632.pixelsPerUnit = i633[20]
  i632.textureWidth = i633[21]
  i632.textureHeight = i633[22]
  i632.nativeSize = new pc.Vec2( i633[23], i633[24] )
  i632.pivot = new pc.Vec2( i633[25], i633[26] )
  i632.textureRectOffset = new pc.Vec2( i633[27], i633[28] )
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i635 = data
  i634.name = i635[0]
  i634.ascent = i635[1]
  i634.originalLineHeight = i635[2]
  i634.fontSize = i635[3]
  var i637 = i635[4]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i637[i + 0]) );
  }
  i634.characterInfo = i636
  request.r(i635[5], i635[6], 0, i634, 'texture')
  i634.originalFontSize = i635[7]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i641 = data
  i640.index = i641[0]
  i640.advance = i641[1]
  i640.bearing = i641[2]
  i640.glyphWidth = i641[3]
  i640.glyphHeight = i641[4]
  i640.minX = i641[5]
  i640.maxX = i641[6]
  i640.minY = i641[7]
  i640.maxY = i641[8]
  i640.uvBottomLeftX = i641[9]
  i640.uvBottomLeftY = i641[10]
  i640.uvBottomRightX = i641[11]
  i640.uvBottomRightY = i641[12]
  i640.uvTopLeftX = i641[13]
  i640.uvTopLeftY = i641[14]
  i640.uvTopRightX = i641[15]
  i640.uvTopRightY = i641[16]
  return i640
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i643 = data
  var i645 = i643[0]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('UnityEngine.InputSystem.InputActionMap', i645[i + 0]) );
  }
  i642.m_ActionMaps = i644
  var i647 = i643[1]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('UnityEngine.InputSystem.InputControlScheme', i647[i + 0]) );
  }
  i642.m_ControlSchemes = i646
  i642.m_IsProjectWide = !!i643[2]
  return i642
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i651 = data
  i650.m_Name = i651[0]
  i650.m_Id = i651[1]
  request.r(i651[2], i651[3], 0, i650, 'm_Asset')
  var i653 = i651[4]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('UnityEngine.InputSystem.InputAction', i653[i + 0]) );
  }
  i650.m_Actions = i652
  var i655 = i651[5]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('UnityEngine.InputSystem.InputBinding', i655[i + 0]) );
  }
  i650.m_Bindings = i654
  return i650
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i659 = data
  i658.m_Name = i659[0]
  i658.m_Type = i659[1]
  i658.m_ExpectedControlType = i659[2]
  i658.m_Id = i659[3]
  i658.m_Processors = i659[4]
  i658.m_Interactions = i659[5]
  var i661 = i659[6]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('UnityEngine.InputSystem.InputBinding', i661[i + 0]) );
  }
  i658.m_SingletonActionBindings = i660
  i658.m_Flags = i659[7]
  return i658
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i665 = data
  i664.m_Name = i665[0]
  i664.m_Id = i665[1]
  i664.m_Path = i665[2]
  i664.m_Interactions = i665[3]
  i664.m_Processors = i665[4]
  i664.m_Groups = i665[5]
  i664.m_Action = i665[6]
  i664.m_Flags = i665[7]
  return i664
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i669 = data
  i668.m_Name = i669[0]
  i668.m_BindingGroup = i669[1]
  var i671 = i669[2]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i671[i + 0]) );
  }
  i668.m_DeviceRequirements = i670
  return i668
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i675 = data
  i674.m_ControlPath = i675[0]
  i674.m_Flags = i675[1]
  return i674
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'm_Asset')
  i676.m_ActionId = i677[2]
  return i676
}

Deserializers["Luna.Unity.Utils.Shaders.LunaSVC"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.Utils.Shaders.LunaSVC' )
  var i679 = data
  i678._svcLunaVersion = i679[0]
  var i681 = i679[1]
  var i680 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i681.length; i += 1) {
    i680.add(request.d(' . ‵', i681[i + 0]));
  }
  i678._shaderVariants = i680
  var i683 = i679[2]
  var i682 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i683.length; i += 1) {
    i682.add(request.d(' . ‵', i683[i + 0]));
  }
  i678._usedByLunaBuild = i682
  var i685 = i679[3]
  var i684 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i685.length; i += 1) {
    i684.add(request.d(' . ‵', i685[i + 0]));
  }
  i678._includedShaderVariants = i684
  var i687 = i679[4]
  var i686 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i687.length; i += 1) {
    i686.add(request.d(' . ‵', i687[i + 0]));
  }
  i678._excludedShaderVariants = i686
  i678.version = System.Int64(i679[5])
  var i689 = i679[6]
  var i688 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader')))
  for(var i = 0; i < i689.length; i += 1) {
    i688.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader', i689[i + 0]));
  }
  i678._shaderParsedShaders = i688
  var i691 = i679[7]
  var i690 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i691.length; i += 1) {
    i690.add(i691[i + 0]);
  }
  i678._modifiedShaders = i690
  i678.invalidShaders = !!i679[8]
  i678._sceneLightData = request.d('Luna.Editor.Utils.Shaders.SceneLightData', i679[9], i678._sceneLightData)
  return i678
}

Deserializers[" . ‵"] = function (request, data, root) {
  var i694 = root || request.c( ' . ‵' )
  var i695 = data
  i694.shaderCompilerPlatform = i695[0]
  request.r(i695[1], i695[2], 0, i694, 'shader')
  i694.passType = i695[3]
  i694.passId = i695[4]
  i694.subShaderIndex = i695[5]
  i694.upToDate = !!i695[6]
  var i697 = i695[7]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( i697[i + 0] );
  }
  i694.keywords = i696
  return i694
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader' )
  var i701 = data
  var i703 = i701[0]
  var i702 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader')))
  for(var i = 0; i < i703.length; i += 1) {
    i702.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader', i703[i + 0]));
  }
  i700.ParsedSubShaders = i702
  request.r(i701[1], i701[2], 0, i700, 'Shader')
  i700.ShaderPath = i701[3]
  var i705 = i701[4]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( i705[i + 0] );
  }
  i700.ShaderDefinedKeywords = i704
  request.r(i701[5], i701[6], 0, i700, 'fallbackShader')
  var i707 = i701[7]
  var i706 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ShaderCompilationError')))
  for(var i = 0; i < i707.length; i += 1) {
    i706.add(request.d('Luna.Unity.Utils.Shaders.ShaderCompilationError', i707[i + 0]));
  }
  i700.CompilationErrors = i706
  var i709 = i701[8]
  var i708 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i709.length; i += 1) {
    i708.add(request.d(' . ‵', i709[i + 0]));
  }
  i700.Variants = i708
  return i700
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedSubShader' )
  var i713 = data
  i712.Index = i713[0]
  var i715 = i713[1]
  var i714 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass')))
  for(var i = 0; i < i715.length; i += 1) {
    i714.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass', i715[i + 0]));
  }
  i712.Passes = i714
  request.r(i713[2], i713[3], 0, i712, 'Shader')
  var i717 = i713[4]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i717.length; i += 1) {
    i716.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i717[i + 0]));
  }
  i712.Tags = i716
  return i712
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderPass' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'Shader')
  var i723 = i721[2]
  var i722 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant')))
  for(var i = 0; i < i723.length; i += 1) {
    i722.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant', i723[i + 0]));
  }
  i720.ShaderVariants = i722
  var i725 = i721[3]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( i725[i + 0] );
  }
  i720.DefinedKeywords = i724
  var i727 = i721[4]
  var i726 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup')))
  for(var i = 0; i < i727.length; i += 1) {
    i726.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup', i727[i + 0]));
  }
  i720.KeywordGroups = i726
  i720.KeywordsMinimalCardinality = i721[5]
  i720.ContainsInvalidVariant = !!i721[6]
  var i729 = i721[7]
  var i728 = new (System.Collections.Generic.List$1(Bridge.ns(' . ‵')))
  for(var i = 0; i < i729.length; i += 1) {
    i728.add(request.d(' . ‵', i729[i + 0]));
  }
  i720.VariantStructures = i728
  var i731 = i721[8]
  var i730 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ShaderCompilationError')))
  for(var i = 0; i < i731.length; i += 1) {
    i730.add(request.d('Luna.Unity.Utils.Shaders.ShaderCompilationError', i731[i + 0]));
  }
  i720.CompilationErrors = i730
  i720.HasDepthReader = !!i721[9]
  i720.Id = i721[10]
  i720.SubShaderIndex = i721[11]
  i720.SerializedObjectId = i721[12]
  var i733 = i721[13]
  var i732 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i733.length; i += 1) {
    i732.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i733[i + 0]));
  }
  i720.Tags = i732
  i720.UsePass = request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass', i721[14], i720.UsePass)
  i720.GrabPassTextureName = i721[15]
  i720.PlatformMask = i721[16]
  return i720
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedShaderVariant' )
  var i737 = data
  i736.ShaderCompilerPlatform = i737[0]
  i736.NoShaderVariant = !!i737[1]
  i736.VertexProgram = i737[2]
  i736.FragmentProgram = i737[3]
  i736.LOD = i737[4]
  i736.readDepth = !!i737[5]
  i736.PassId = i737[6]
  i736.SubShaderIndex = i737[7]
  var i739 = i737[8]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( i739[i + 0] );
  }
  i736.Keywords = i738
  var i741 = i737[9]
  var i740 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag')))
  for(var i = 0; i < i741.length; i += 1) {
    i740.add(request.d('Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag', i741[i + 0]));
  }
  i736.Tags = i740
  return i736
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedTag' )
  var i745 = data
  i744.Key = i745[0]
  i744.Value = i745[1]
  return i744
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedKeywordGroup' )
  var i749 = data
  var i751 = i749[0]
  var i750 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i751.length; i += 1) {
    i750.add(i751[i + 0]);
  }
  i748.Keywords = i750
  i748.hasDiscard = !!i749[1]
  return i748
}

Deserializers["Luna.Unity.Utils.Shaders.ShaderCompilationError"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.Utils.Shaders.ShaderCompilationError' )
  var i755 = data
  i754.Variant = !!i755[0]
  i754.ShaderName = i755[1]
  var i757 = i755[2]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.Utils.Shaders.ErrorDetails')))
  for(var i = 0; i < i757.length; i += 1) {
    i756.add(request.d('Luna.Unity.Utils.Shaders.ErrorDetails', i757[i + 0]));
  }
  i754.Details = i756
  return i754
}

Deserializers["Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Editor.Utils.Shaders.UnityParsedShader+ParsedUsePass' )
  var i759 = data
  i758.shader = i759[0]
  i758.pass = i759[1]
  return i758
}

Deserializers["Luna.Editor.Utils.Shaders.SceneLightData"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Editor.Utils.Shaders.SceneLightData' )
  var i763 = data
  i762.PointLightCount = i763[0]
  i762.SpotLightCount = i763[1]
  i762.DirectionalLightCount = i763[2]
  i762.LightmapOn = !!i763[3]
  i762.DirlightmapCombined = !!i763[4]
  i762.DirectionalCookieExists = !!i763[5]
  i762.PointCookieExists = !!i763[6]
  i762.SpotCookieExists = !!i763[7]
  i762.AddiitonalLightsKeywordRequired = !!i763[8]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i765 = data
  var i767 = i765[0]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i767[i + 0]) );
  }
  i764.files = i766
  i764.componentToPrefabIds = i765[1]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i771 = data
  i770.path = i771[0]
  request.r(i771[1], i771[2], 0, i770, 'unityObject')
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i773 = data
  var i775 = i773[0]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i775[i + 0]) );
  }
  i772.scriptsExecutionOrder = i774
  var i777 = i773[1]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i777[i + 0]) );
  }
  i772.sortingLayers = i776
  var i779 = i773[2]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i779[i + 0]) );
  }
  i772.cullingLayers = i778
  i772.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i773[3], i772.timeSettings)
  i772.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i773[4], i772.physicsSettings)
  i772.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i773[5], i772.physics2DSettings)
  i772.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i773[6], i772.qualitySettings)
  i772.enableRealtimeShadows = !!i773[7]
  i772.enableAutoInstancing = !!i773[8]
  i772.enableStaticBatching = !!i773[9]
  i772.enableDynamicBatching = !!i773[10]
  i772.lightmapEncodingQuality = i773[11]
  i772.desiredColorSpace = i773[12]
  var i781 = i773[13]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( i781[i + 0] );
  }
  i772.allTags = i780
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i785 = data
  i784.name = i785[0]
  i784.value = i785[1]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i789 = data
  i788.id = i789[0]
  i788.name = i789[1]
  i788.value = i789[2]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i793 = data
  i792.id = i793[0]
  i792.name = i793[1]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i795 = data
  i794.fixedDeltaTime = i795[0]
  i794.maximumDeltaTime = i795[1]
  i794.timeScale = i795[2]
  i794.maximumParticleTimestep = i795[3]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i797 = data
  i796.gravity = new pc.Vec3( i797[0], i797[1], i797[2] )
  i796.defaultSolverIterations = i797[3]
  i796.bounceThreshold = i797[4]
  i796.autoSyncTransforms = !!i797[5]
  i796.autoSimulation = !!i797[6]
  var i799 = i797[7]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i799[i + 0]) );
  }
  i796.collisionMatrix = i798
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i803 = data
  i802.enabled = !!i803[0]
  i802.layerId = i803[1]
  i802.otherLayerId = i803[2]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'material')
  i804.gravity = new pc.Vec2( i805[2], i805[3] )
  i804.positionIterations = i805[4]
  i804.velocityIterations = i805[5]
  i804.velocityThreshold = i805[6]
  i804.maxLinearCorrection = i805[7]
  i804.maxAngularCorrection = i805[8]
  i804.maxTranslationSpeed = i805[9]
  i804.maxRotationSpeed = i805[10]
  i804.baumgarteScale = i805[11]
  i804.baumgarteTOIScale = i805[12]
  i804.timeToSleep = i805[13]
  i804.linearSleepTolerance = i805[14]
  i804.angularSleepTolerance = i805[15]
  i804.defaultContactOffset = i805[16]
  i804.autoSimulation = !!i805[17]
  i804.queriesHitTriggers = !!i805[18]
  i804.queriesStartInColliders = !!i805[19]
  i804.callbacksOnDisable = !!i805[20]
  i804.reuseCollisionCallbacks = !!i805[21]
  i804.autoSyncTransforms = !!i805[22]
  var i807 = i805[23]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i807[i + 0]) );
  }
  i804.collisionMatrix = i806
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i811 = data
  i810.enabled = !!i811[0]
  i810.layerId = i811[1]
  i810.otherLayerId = i811[2]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i813 = data
  var i815 = i813[0]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i815[i + 0]) );
  }
  i812.qualityLevels = i814
  var i817 = i813[1]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( i817[i + 0] );
  }
  i812.names = i816
  i812.shadows = i813[2]
  i812.anisotropicFiltering = i813[3]
  i812.antiAliasing = i813[4]
  i812.lodBias = i813[5]
  i812.shadowCascades = i813[6]
  i812.shadowDistance = i813[7]
  i812.shadowmaskMode = i813[8]
  i812.shadowProjection = i813[9]
  i812.shadowResolution = i813[10]
  i812.softParticles = !!i813[11]
  i812.softVegetation = !!i813[12]
  i812.activeColorSpace = i813[13]
  i812.desiredColorSpace = i813[14]
  i812.masterTextureLimit = i813[15]
  i812.maxQueuedFrames = i813[16]
  i812.particleRaycastBudget = i813[17]
  i812.pixelLightCount = i813[18]
  i812.realtimeReflectionProbes = !!i813[19]
  i812.shadowCascade2Split = i813[20]
  i812.shadowCascade4Split = new pc.Vec3( i813[21], i813[22], i813[23] )
  i812.streamingMipmapsActive = !!i813[24]
  i812.vSyncCount = i813[25]
  i812.asyncUploadBufferSize = i813[26]
  i812.asyncUploadTimeSlice = i813[27]
  i812.billboardsFaceCameraPosition = !!i813[28]
  i812.shadowNearPlaneOffset = i813[29]
  i812.streamingMipmapsMemoryBudget = i813[30]
  i812.maximumLODLevel = i813[31]
  i812.streamingMipmapsAddAllCameras = !!i813[32]
  i812.streamingMipmapsMaxLevelReduction = i813[33]
  i812.streamingMipmapsRenderersPerFrame = i813[34]
  i812.resolutionScalingFixedDPIFactor = i813[35]
  i812.streamingMipmapsMaxFileIORequests = i813[36]
  i812.currentQualityLevel = i813[37]
  return i812
}

Deserializers["Luna.Unity.Utils.Shaders.ErrorDetails"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.Utils.Shaders.ErrorDetails' )
  var i823 = data
  i822.SubShaderIndex = i823[0]
  i822.PassId = i823[1]
  var i825 = i823[2]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( i825[i + 0] );
  }
  i822.ShaderVariantKeywords = i824
  var i827 = i823[3]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( i827[i + 0] );
  }
  i822.Messages = i826
  return i822
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"17":[18],"19":[18],"20":[18],"21":[18],"22":[18],"23":[18],"24":[25],"26":[6],"27":[28],"29":[28],"30":[28],"31":[28],"32":[28],"33":[28],"34":[35],"36":[35],"37":[35],"38":[35],"39":[35],"40":[35],"41":[35],"42":[35],"43":[35],"44":[35],"45":[35],"46":[35],"47":[35],"48":[6],"49":[50],"51":[52],"53":[52],"54":[55],"56":[57],"58":[6],"59":[60],"61":[62],"63":[54],"64":[55],"65":[50,55],"66":[55,67],"68":[55],"69":[67,55],"70":[50],"71":[67,55],"72":[55],"73":[55],"74":[55],"75":[54],"76":[67,55],"77":[55],"78":[54],"79":[55],"80":[55],"81":[55],"82":[55],"83":[55],"84":[55],"85":[55],"86":[55],"87":[55],"88":[67,55],"89":[55],"90":[55],"91":[55],"92":[55],"93":[67,55],"94":[55],"95":[62],"96":[62],"97":[62],"98":[62],"99":[6],"100":[6]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","PlayworksComplianceHooks","SimpleDodgeGame","UnityEngine.Sprite","UnityEngine.Font","UnityEngine.GameObject","UnityEngine.InputSystem.InputActionAsset","UnityEngine.InputSystem.InputActionReference","Luna.Unity.Utils.Shaders.LunaSVC","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.58f2";

Deserializers.productName = "AdGame2";

Deserializers.lunaInitializationTime = "02/09/2026 07:18:22";

Deserializers.lunaDaysRunning = "4.0";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4361";

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

Deserializers.buildID = "6df1d401-6803-4020-ac60-0ed52eb20520";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

