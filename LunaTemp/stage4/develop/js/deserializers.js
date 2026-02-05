var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2156 = root || request.c( 'UnityEngine.JointSpring' )
  var i2157 = data
  i2156.spring = i2157[0]
  i2156.damper = i2157[1]
  i2156.targetPosition = i2157[2]
  return i2156
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2158 = root || request.c( 'UnityEngine.JointMotor' )
  var i2159 = data
  i2158.m_TargetVelocity = i2159[0]
  i2158.m_Force = i2159[1]
  i2158.m_FreeSpin = i2159[2]
  return i2158
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2160 = root || request.c( 'UnityEngine.JointLimits' )
  var i2161 = data
  i2160.m_Min = i2161[0]
  i2160.m_Max = i2161[1]
  i2160.m_Bounciness = i2161[2]
  i2160.m_BounceMinVelocity = i2161[3]
  i2160.m_ContactDistance = i2161[4]
  i2160.minBounce = i2161[5]
  i2160.maxBounce = i2161[6]
  return i2160
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2162 = root || request.c( 'UnityEngine.JointDrive' )
  var i2163 = data
  i2162.m_PositionSpring = i2163[0]
  i2162.m_PositionDamper = i2163[1]
  i2162.m_MaximumForce = i2163[2]
  i2162.m_UseAcceleration = i2163[3]
  return i2162
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2164 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2165 = data
  i2164.m_Spring = i2165[0]
  i2164.m_Damper = i2165[1]
  return i2164
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2166 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2167 = data
  i2166.m_Limit = i2167[0]
  i2166.m_Bounciness = i2167[1]
  i2166.m_ContactDistance = i2167[2]
  return i2166
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2168 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2169 = data
  i2168.m_ExtremumSlip = i2169[0]
  i2168.m_ExtremumValue = i2169[1]
  i2168.m_AsymptoteSlip = i2169[2]
  i2168.m_AsymptoteValue = i2169[3]
  i2168.m_Stiffness = i2169[4]
  return i2168
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2170 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2171 = data
  i2170.m_LowerAngle = i2171[0]
  i2170.m_UpperAngle = i2171[1]
  return i2170
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2172 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2173 = data
  i2172.m_MotorSpeed = i2173[0]
  i2172.m_MaximumMotorTorque = i2173[1]
  return i2172
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2174 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2175 = data
  i2174.m_DampingRatio = i2175[0]
  i2174.m_Frequency = i2175[1]
  i2174.m_Angle = i2175[2]
  return i2174
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2176 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2177 = data
  i2176.m_LowerTranslation = i2177[0]
  i2176.m_UpperTranslation = i2177[1]
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2179 = data
  i2178.name = i2179[0]
  i2178.index = i2179[1]
  i2178.startup = !!i2179[2]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2181 = data
  i2180.aspect = i2181[0]
  i2180.orthographic = !!i2181[1]
  i2180.orthographicSize = i2181[2]
  i2180.backgroundColor = new pc.Color(i2181[3], i2181[4], i2181[5], i2181[6])
  i2180.nearClipPlane = i2181[7]
  i2180.farClipPlane = i2181[8]
  i2180.fieldOfView = i2181[9]
  i2180.depth = i2181[10]
  i2180.clearFlags = i2181[11]
  i2180.cullingMask = i2181[12]
  i2180.rect = i2181[13]
  request.r(i2181[14], i2181[15], 0, i2180, 'targetTexture')
  i2180.usePhysicalProperties = !!i2181[16]
  i2180.focalLength = i2181[17]
  i2180.sensorSize = new pc.Vec2( i2181[18], i2181[19] )
  i2180.lensShift = new pc.Vec2( i2181[20], i2181[21] )
  i2180.gateFit = i2181[22]
  i2180.commandBufferCount = i2181[23]
  i2180.cameraType = i2181[24]
  i2180.enabled = !!i2181[25]
  return i2180
}

Deserializers["PlayworksComplianceHooks"] = function (request, data, root) {
  var i2182 = root || request.c( 'PlayworksComplianceHooks' )
  var i2183 = data
  i2182.iosStoreUrl = i2183[0]
  i2182.androidStoreUrl = i2183[1]
  i2182.defaultLevel = i2183[2]
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2185 = data
  i2184.name = i2185[0]
  i2184.tagId = i2185[1]
  i2184.enabled = !!i2185[2]
  i2184.isStatic = !!i2185[3]
  i2184.layer = i2185[4]
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2187 = data
  i2186.ambientIntensity = i2187[0]
  i2186.reflectionIntensity = i2187[1]
  i2186.ambientMode = i2187[2]
  i2186.ambientLight = new pc.Color(i2187[3], i2187[4], i2187[5], i2187[6])
  i2186.ambientSkyColor = new pc.Color(i2187[7], i2187[8], i2187[9], i2187[10])
  i2186.ambientGroundColor = new pc.Color(i2187[11], i2187[12], i2187[13], i2187[14])
  i2186.ambientEquatorColor = new pc.Color(i2187[15], i2187[16], i2187[17], i2187[18])
  i2186.fogColor = new pc.Color(i2187[19], i2187[20], i2187[21], i2187[22])
  i2186.fogEndDistance = i2187[23]
  i2186.fogStartDistance = i2187[24]
  i2186.fogDensity = i2187[25]
  i2186.fog = !!i2187[26]
  request.r(i2187[27], i2187[28], 0, i2186, 'skybox')
  i2186.fogMode = i2187[29]
  var i2189 = i2187[30]
  var i2188 = []
  for(var i = 0; i < i2189.length; i += 1) {
    i2188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2189[i + 0]) );
  }
  i2186.lightmaps = i2188
  i2186.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2187[31], i2186.lightProbes)
  i2186.lightmapsMode = i2187[32]
  i2186.mixedBakeMode = i2187[33]
  i2186.environmentLightingMode = i2187[34]
  i2186.ambientProbe = new pc.SphericalHarmonicsL2(i2187[35])
  i2186.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2187[36])
  i2186.useReferenceAmbientProbe = !!i2187[37]
  request.r(i2187[38], i2187[39], 0, i2186, 'customReflection')
  request.r(i2187[40], i2187[41], 0, i2186, 'defaultReflection')
  i2186.defaultReflectionMode = i2187[42]
  i2186.defaultReflectionResolution = i2187[43]
  i2186.sunLightObjectId = i2187[44]
  i2186.pixelLightCount = i2187[45]
  i2186.defaultReflectionHDR = !!i2187[46]
  i2186.hasLightDataAsset = !!i2187[47]
  i2186.hasManualGenerate = !!i2187[48]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2193 = data
  request.r(i2193[0], i2193[1], 0, i2192, 'lightmapColor')
  request.r(i2193[2], i2193[3], 0, i2192, 'lightmapDirection')
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2194 = root || new UnityEngine.LightProbes()
  var i2195 = data
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2202 = root || new pc.UnityMaterial()
  var i2203 = data
  i2202.name = i2203[0]
  request.r(i2203[1], i2203[2], 0, i2202, 'shader')
  i2202.renderQueue = i2203[3]
  i2202.enableInstancing = !!i2203[4]
  var i2205 = i2203[5]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2205[i + 0]) );
  }
  i2202.floatParameters = i2204
  var i2207 = i2203[6]
  var i2206 = []
  for(var i = 0; i < i2207.length; i += 1) {
    i2206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2207[i + 0]) );
  }
  i2202.colorParameters = i2206
  var i2209 = i2203[7]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 1) {
    i2208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2209[i + 0]) );
  }
  i2202.vectorParameters = i2208
  var i2211 = i2203[8]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2211[i + 0]) );
  }
  i2202.textureParameters = i2210
  var i2213 = i2203[9]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2213[i + 0]) );
  }
  i2202.materialFlags = i2212
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2217 = data
  i2216.name = i2217[0]
  i2216.value = i2217[1]
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2221 = data
  i2220.name = i2221[0]
  i2220.value = new pc.Color(i2221[1], i2221[2], i2221[3], i2221[4])
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2225 = data
  i2224.name = i2225[0]
  i2224.value = new pc.Vec4( i2225[1], i2225[2], i2225[3], i2225[4] )
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2229 = data
  i2228.name = i2229[0]
  request.r(i2229[1], i2229[2], 0, i2228, 'value')
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2233 = data
  i2232.name = i2233[0]
  i2232.enabled = !!i2233[1]
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2235 = data
  var i2237 = i2235[0]
  var i2236 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2237[i + 0]));
  }
  i2234.ShaderCompilationErrors = i2236
  i2234.name = i2235[1]
  i2234.guid = i2235[2]
  var i2239 = i2235[3]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( i2239[i + 0] );
  }
  i2234.shaderDefinedKeywords = i2238
  var i2241 = i2235[4]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2241[i + 0]) );
  }
  i2234.passes = i2240
  var i2243 = i2235[5]
  var i2242 = []
  for(var i = 0; i < i2243.length; i += 1) {
    i2242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2243[i + 0]) );
  }
  i2234.usePasses = i2242
  var i2245 = i2235[6]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 1) {
    i2244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2245[i + 0]) );
  }
  i2234.defaultParameterValues = i2244
  request.r(i2235[7], i2235[8], 0, i2234, 'unityFallbackShader')
  i2234.readDepth = !!i2235[9]
  i2234.hasDepthOnlyPass = !!i2235[10]
  i2234.isCreatedByShaderGraph = !!i2235[11]
  i2234.disableBatching = !!i2235[12]
  i2234.compiled = !!i2235[13]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2249 = data
  i2248.shaderName = i2249[0]
  i2248.errorMessage = i2249[1]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2254 = root || new pc.UnityShaderPass()
  var i2255 = data
  i2254.id = i2255[0]
  i2254.subShaderIndex = i2255[1]
  i2254.name = i2255[2]
  i2254.passType = i2255[3]
  i2254.grabPassTextureName = i2255[4]
  i2254.usePass = !!i2255[5]
  i2254.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[6], i2254.zTest)
  i2254.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[7], i2254.zWrite)
  i2254.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[8], i2254.culling)
  i2254.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2255[9], i2254.blending)
  i2254.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2255[10], i2254.alphaBlending)
  i2254.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[11], i2254.colorWriteMask)
  i2254.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[12], i2254.offsetUnits)
  i2254.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[13], i2254.offsetFactor)
  i2254.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[14], i2254.stencilRef)
  i2254.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[15], i2254.stencilReadMask)
  i2254.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[16], i2254.stencilWriteMask)
  i2254.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2255[17], i2254.stencilOp)
  i2254.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2255[18], i2254.stencilOpFront)
  i2254.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2255[19], i2254.stencilOpBack)
  var i2257 = i2255[20]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 1) {
    i2256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2257[i + 0]) );
  }
  i2254.tags = i2256
  var i2259 = i2255[21]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 1) {
    i2258.push( i2259[i + 0] );
  }
  i2254.passDefinedKeywords = i2258
  var i2261 = i2255[22]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2261[i + 0]) );
  }
  i2254.passDefinedKeywordGroups = i2260
  var i2263 = i2255[23]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2263[i + 0]) );
  }
  i2254.variants = i2262
  var i2265 = i2255[24]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2265[i + 0]) );
  }
  i2254.excludedVariants = i2264
  i2254.hasDepthReader = !!i2255[25]
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2267 = data
  i2266.val = i2267[0]
  i2266.name = i2267[1]
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2269 = data
  i2268.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2269[0], i2268.src)
  i2268.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2269[1], i2268.dst)
  i2268.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2269[2], i2268.op)
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2271 = data
  i2270.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2271[0], i2270.pass)
  i2270.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2271[1], i2270.fail)
  i2270.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2271[2], i2270.zFail)
  i2270.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2271[3], i2270.comp)
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2275 = data
  i2274.name = i2275[0]
  i2274.value = i2275[1]
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2279 = data
  var i2281 = i2279[0]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 1) {
    i2280.push( i2281[i + 0] );
  }
  i2278.keywords = i2280
  i2278.hasDiscard = !!i2279[1]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2285 = data
  i2284.passId = i2285[0]
  i2284.subShaderIndex = i2285[1]
  var i2287 = i2285[2]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.push( i2287[i + 0] );
  }
  i2284.keywords = i2286
  i2284.vertexProgram = i2285[3]
  i2284.fragmentProgram = i2285[4]
  i2284.exportedForWebGl2 = !!i2285[5]
  i2284.readDepth = !!i2285[6]
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2291 = data
  request.r(i2291[0], i2291[1], 0, i2290, 'shader')
  i2290.pass = i2291[2]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2295 = data
  i2294.name = i2295[0]
  i2294.type = i2295[1]
  i2294.value = new pc.Vec4( i2295[2], i2295[3], i2295[4], i2295[5] )
  i2294.textureValue = i2295[6]
  i2294.shaderPropertyFlag = i2295[7]
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2297 = data
  var i2299 = i2297[0]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 1) {
    i2298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2299[i + 0]) );
  }
  i2296.files = i2298
  i2296.componentToPrefabIds = i2297[1]
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2303 = data
  i2302.path = i2303[0]
  request.r(i2303[1], i2303[2], 0, i2302, 'unityObject')
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2305 = data
  var i2307 = i2305[0]
  var i2306 = []
  for(var i = 0; i < i2307.length; i += 1) {
    i2306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2307[i + 0]) );
  }
  i2304.scriptsExecutionOrder = i2306
  var i2309 = i2305[1]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2309[i + 0]) );
  }
  i2304.sortingLayers = i2308
  var i2311 = i2305[2]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2311[i + 0]) );
  }
  i2304.cullingLayers = i2310
  i2304.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2305[3], i2304.timeSettings)
  i2304.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2305[4], i2304.physicsSettings)
  i2304.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2305[5], i2304.physics2DSettings)
  i2304.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2305[6], i2304.qualitySettings)
  i2304.enableRealtimeShadows = !!i2305[7]
  i2304.enableAutoInstancing = !!i2305[8]
  i2304.enableStaticBatching = !!i2305[9]
  i2304.enableDynamicBatching = !!i2305[10]
  i2304.lightmapEncodingQuality = i2305[11]
  i2304.desiredColorSpace = i2305[12]
  var i2313 = i2305[13]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 1) {
    i2312.push( i2313[i + 0] );
  }
  i2304.allTags = i2312
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2317 = data
  i2316.name = i2317[0]
  i2316.value = i2317[1]
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2321 = data
  i2320.id = i2321[0]
  i2320.name = i2321[1]
  i2320.value = i2321[2]
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2325 = data
  i2324.id = i2325[0]
  i2324.name = i2325[1]
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2327 = data
  i2326.fixedDeltaTime = i2327[0]
  i2326.maximumDeltaTime = i2327[1]
  i2326.timeScale = i2327[2]
  i2326.maximumParticleTimestep = i2327[3]
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2329 = data
  i2328.gravity = new pc.Vec3( i2329[0], i2329[1], i2329[2] )
  i2328.defaultSolverIterations = i2329[3]
  i2328.bounceThreshold = i2329[4]
  i2328.autoSyncTransforms = !!i2329[5]
  i2328.autoSimulation = !!i2329[6]
  var i2331 = i2329[7]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 1) {
    i2330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2331[i + 0]) );
  }
  i2328.collisionMatrix = i2330
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2335 = data
  i2334.enabled = !!i2335[0]
  i2334.layerId = i2335[1]
  i2334.otherLayerId = i2335[2]
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2337 = data
  request.r(i2337[0], i2337[1], 0, i2336, 'material')
  i2336.gravity = new pc.Vec2( i2337[2], i2337[3] )
  i2336.positionIterations = i2337[4]
  i2336.velocityIterations = i2337[5]
  i2336.velocityThreshold = i2337[6]
  i2336.maxLinearCorrection = i2337[7]
  i2336.maxAngularCorrection = i2337[8]
  i2336.maxTranslationSpeed = i2337[9]
  i2336.maxRotationSpeed = i2337[10]
  i2336.baumgarteScale = i2337[11]
  i2336.baumgarteTOIScale = i2337[12]
  i2336.timeToSleep = i2337[13]
  i2336.linearSleepTolerance = i2337[14]
  i2336.angularSleepTolerance = i2337[15]
  i2336.defaultContactOffset = i2337[16]
  i2336.autoSimulation = !!i2337[17]
  i2336.queriesHitTriggers = !!i2337[18]
  i2336.queriesStartInColliders = !!i2337[19]
  i2336.callbacksOnDisable = !!i2337[20]
  i2336.reuseCollisionCallbacks = !!i2337[21]
  i2336.autoSyncTransforms = !!i2337[22]
  var i2339 = i2337[23]
  var i2338 = []
  for(var i = 0; i < i2339.length; i += 1) {
    i2338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2339[i + 0]) );
  }
  i2336.collisionMatrix = i2338
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2343 = data
  i2342.enabled = !!i2343[0]
  i2342.layerId = i2343[1]
  i2342.otherLayerId = i2343[2]
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2345 = data
  var i2347 = i2345[0]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2347[i + 0]) );
  }
  i2344.qualityLevels = i2346
  var i2349 = i2345[1]
  var i2348 = []
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.push( i2349[i + 0] );
  }
  i2344.names = i2348
  i2344.shadows = i2345[2]
  i2344.anisotropicFiltering = i2345[3]
  i2344.antiAliasing = i2345[4]
  i2344.lodBias = i2345[5]
  i2344.shadowCascades = i2345[6]
  i2344.shadowDistance = i2345[7]
  i2344.shadowmaskMode = i2345[8]
  i2344.shadowProjection = i2345[9]
  i2344.shadowResolution = i2345[10]
  i2344.softParticles = !!i2345[11]
  i2344.softVegetation = !!i2345[12]
  i2344.activeColorSpace = i2345[13]
  i2344.desiredColorSpace = i2345[14]
  i2344.masterTextureLimit = i2345[15]
  i2344.maxQueuedFrames = i2345[16]
  i2344.particleRaycastBudget = i2345[17]
  i2344.pixelLightCount = i2345[18]
  i2344.realtimeReflectionProbes = !!i2345[19]
  i2344.shadowCascade2Split = i2345[20]
  i2344.shadowCascade4Split = new pc.Vec3( i2345[21], i2345[22], i2345[23] )
  i2344.streamingMipmapsActive = !!i2345[24]
  i2344.vSyncCount = i2345[25]
  i2344.asyncUploadBufferSize = i2345[26]
  i2344.asyncUploadTimeSlice = i2345[27]
  i2344.billboardsFaceCameraPosition = !!i2345[28]
  i2344.shadowNearPlaneOffset = i2345[29]
  i2344.streamingMipmapsMemoryBudget = i2345[30]
  i2344.maximumLODLevel = i2345[31]
  i2344.streamingMipmapsAddAllCameras = !!i2345[32]
  i2344.streamingMipmapsMaxLevelReduction = i2345[33]
  i2344.streamingMipmapsRenderersPerFrame = i2345[34]
  i2344.resolutionScalingFixedDPIFactor = i2345[35]
  i2344.streamingMipmapsMaxFileIORequests = i2345[36]
  i2344.currentQualityLevel = i2345[37]
  return i2344
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"5":[6],"7":[6],"8":[6],"9":[6],"10":[6],"11":[6],"12":[13],"14":[0],"15":[16],"17":[16],"18":[16],"19":[16],"20":[16],"21":[16],"22":[23],"24":[23],"25":[23],"26":[23],"27":[23],"28":[23],"29":[23],"30":[23],"31":[23],"32":[23],"33":[23],"34":[23],"35":[23],"36":[0],"37":[38],"39":[40],"41":[40],"42":[43],"44":[45],"46":[0],"47":[48],"49":[50],"51":[42],"52":[43],"53":[38,43],"54":[43,55],"56":[43],"57":[55,43],"58":[38],"59":[55,43],"60":[43],"61":[43],"62":[43],"63":[42],"64":[55,43],"65":[43],"66":[42],"67":[43],"68":[43],"69":[43],"70":[43],"71":[43],"72":[43],"73":[43],"74":[43],"75":[43],"76":[55,43],"77":[43],"78":[43],"79":[43],"80":[43],"81":[55,43],"82":[43],"83":[50],"84":[50],"85":[50],"86":[50],"87":[0],"88":[0]}

Deserializers.types = ["UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","PlayworksComplianceHooks","UnityEngine.Shader","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.58f2";

Deserializers.productName = "AdGame2";

Deserializers.lunaInitializationTime = "02/05/2026 07:16:13";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "36757";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1819";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3407";

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

Deserializers.linearColorSpace = true;

Deserializers.buildID = "beec3f4e-39cb-43aa-9480-b91ac2097040";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

