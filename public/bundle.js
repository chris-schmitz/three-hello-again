/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/auto-bind/index.js":
/*!*****************************************!*\
  !*** ./node_modules/auto-bind/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = (self, options) => {\n\toptions = Object.assign({}, options);\n\n\tconst filter = key => {\n\t\tconst match = pattern => typeof pattern === 'string' ? key === pattern : pattern.test(key);\n\n\t\tif (options.include) {\n\t\t\treturn options.include.some(match);\n\t\t}\n\n\t\tif (options.exclude) {\n\t\t\treturn !options.exclude.some(match);\n\t\t}\n\n\t\treturn true;\n\t};\n\n\tfor (const key of Object.getOwnPropertyNames(self.constructor.prototype)) {\n\t\tconst val = self[key];\n\n\t\tif (key !== 'constructor' && typeof val === 'function' && filter(key)) {\n\t\t\tself[key] = val.bind(self);\n\t\t}\n\t}\n\n\treturn self;\n};\n\nconst excludedReactMethods = [\n\t'componentWillMount',\n\t'UNSAFE_componentWillMount',\n\t'render',\n\t'getSnapshotBeforeUpdate',\n\t'componentDidMount',\n\t'componentWillReceiveProps',\n\t'UNSAFE_componentWillReceiveProps',\n\t'shouldComponentUpdate',\n\t'componentWillUpdate',\n\t'UNSAFE_componentWillUpdate',\n\t'componentDidUpdate',\n\t'componentWillUnmount',\n\t'componentDidCatch',\n\t'setState',\n\t'forceUpdate'\n];\n\nmodule.exports.react = (self, options) => {\n\toptions = Object.assign({}, options);\n\toptions.exclude = (options.exclude || []).concat(excludedReactMethods);\n\treturn module.exports(self, options);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXV0by1iaW5kL2luZGV4LmpzP2NkZTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2F1dG8tYmluZC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gKHNlbGYsIG9wdGlvbnMpID0+IHtcblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuXG5cdGNvbnN0IGZpbHRlciA9IGtleSA9PiB7XG5cdFx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuID0+IHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJyA/IGtleSA9PT0gcGF0dGVybiA6IHBhdHRlcm4udGVzdChrZXkpO1xuXG5cdFx0aWYgKG9wdGlvbnMuaW5jbHVkZSkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnMuaW5jbHVkZS5zb21lKG1hdGNoKTtcblx0XHR9XG5cblx0XHRpZiAob3B0aW9ucy5leGNsdWRlKSB7XG5cdFx0XHRyZXR1cm4gIW9wdGlvbnMuZXhjbHVkZS5zb21lKG1hdGNoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzZWxmLmNvbnN0cnVjdG9yLnByb3RvdHlwZSkpIHtcblx0XHRjb25zdCB2YWwgPSBzZWxmW2tleV07XG5cblx0XHRpZiAoa2V5ICE9PSAnY29uc3RydWN0b3InICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicgJiYgZmlsdGVyKGtleSkpIHtcblx0XHRcdHNlbGZba2V5XSA9IHZhbC5iaW5kKHNlbGYpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzZWxmO1xufTtcblxuY29uc3QgZXhjbHVkZWRSZWFjdE1ldGhvZHMgPSBbXG5cdCdjb21wb25lbnRXaWxsTW91bnQnLFxuXHQnVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCcsXG5cdCdyZW5kZXInLFxuXHQnZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUnLFxuXHQnY29tcG9uZW50RGlkTW91bnQnLFxuXHQnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG5cdCdVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG5cdCdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuXHQnY29tcG9uZW50V2lsbFVwZGF0ZScsXG5cdCdVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZScsXG5cdCdjb21wb25lbnREaWRVcGRhdGUnLFxuXHQnY29tcG9uZW50V2lsbFVubW91bnQnLFxuXHQnY29tcG9uZW50RGlkQ2F0Y2gnLFxuXHQnc2V0U3RhdGUnLFxuXHQnZm9yY2VVcGRhdGUnXG5dO1xuXG5tb2R1bGUuZXhwb3J0cy5yZWFjdCA9IChzZWxmLCBvcHRpb25zKSA9PiB7XG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcblx0b3B0aW9ucy5leGNsdWRlID0gKG9wdGlvbnMuZXhjbHVkZSB8fCBbXSkuY29uY2F0KGV4Y2x1ZGVkUmVhY3RNZXRob2RzKTtcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzKHNlbGYsIG9wdGlvbnMpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/auto-bind/index.js\n");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: WebGLRenderTargetCube, WebGLRenderTarget, WebGLRenderer, ShaderLib, UniformsLib, UniformsUtils, ShaderChunk, FogExp2, Fog, Scene, Sprite, LOD, SkinnedMesh, Skeleton, Bone, Mesh, LineSegments, LineLoop, Line, Points, Group, VideoTexture, DataTexture, DataTexture3D, CompressedTexture, CubeTexture, CanvasTexture, DepthTexture, Texture, CompressedTextureLoader, DataTextureLoader, CubeTextureLoader, TextureLoader, ObjectLoader, MaterialLoader, BufferGeometryLoader, DefaultLoadingManager, LoadingManager, JSONLoader, ImageLoader, ImageBitmapLoader, FontLoader, FileLoader, Loader, LoaderUtils, Cache, AudioLoader, SpotLightShadow, SpotLight, PointLight, RectAreaLight, HemisphereLight, DirectionalLightShadow, DirectionalLight, AmbientLight, LightShadow, Light, StereoCamera, PerspectiveCamera, OrthographicCamera, CubeCamera, ArrayCamera, Camera, AudioListener, PositionalAudio, AudioContext, AudioAnalyser, Audio, VectorKeyframeTrack, StringKeyframeTrack, QuaternionKeyframeTrack, NumberKeyframeTrack, ColorKeyframeTrack, BooleanKeyframeTrack, PropertyMixer, PropertyBinding, KeyframeTrack, AnimationUtils, AnimationObjectGroup, AnimationMixer, AnimationClip, Uniform, InstancedBufferGeometry, BufferGeometry, Geometry, InterleavedBufferAttribute, InstancedInterleavedBuffer, InterleavedBuffer, InstancedBufferAttribute, Face3, Object3D, Raycaster, Layers, EventDispatcher, Clock, QuaternionLinearInterpolant, LinearInterpolant, DiscreteInterpolant, CubicInterpolant, Interpolant, Triangle, Math, Spherical, Cylindrical, Plane, Frustum, Sphere, Ray, Matrix4, Matrix3, Box3, Box2, Line3, Euler, Vector4, Vector3, Vector2, Quaternion, Color, ImmediateRenderObject, VertexNormalsHelper, SpotLightHelper, SkeletonHelper, PointLightHelper, RectAreaLightHelper, HemisphereLightHelper, GridHelper, PolarGridHelper, FaceNormalsHelper, DirectionalLightHelper, CameraHelper, BoxHelper, Box3Helper, PlaneHelper, ArrowHelper, AxesHelper, Shape, Path, ShapePath, Font, CurvePath, Curve, ImageUtils, ShapeUtils, WebGLUtils, WireframeGeometry, ParametricGeometry, ParametricBufferGeometry, TetrahedronGeometry, TetrahedronBufferGeometry, OctahedronGeometry, OctahedronBufferGeometry, IcosahedronGeometry, IcosahedronBufferGeometry, DodecahedronGeometry, DodecahedronBufferGeometry, PolyhedronGeometry, PolyhedronBufferGeometry, TubeGeometry, TubeBufferGeometry, TorusKnotGeometry, TorusKnotBufferGeometry, TorusGeometry, TorusBufferGeometry, TextGeometry, TextBufferGeometry, SphereGeometry, SphereBufferGeometry, RingGeometry, RingBufferGeometry, PlaneGeometry, PlaneBufferGeometry, LatheGeometry, LatheBufferGeometry, ShapeGeometry, ShapeBufferGeometry, ExtrudeGeometry, ExtrudeBufferGeometry, EdgesGeometry, ConeGeometry, ConeBufferGeometry, CylinderGeometry, CylinderBufferGeometry, CircleGeometry, CircleBufferGeometry, BoxGeometry, BoxBufferGeometry, ShadowMaterial, SpriteMaterial, RawShaderMaterial, ShaderMaterial, PointsMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshPhongMaterial, MeshToonMaterial, MeshNormalMaterial, MeshLambertMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshBasicMaterial, MeshMatcapMaterial, LineDashedMaterial, LineBasicMaterial, Material, Float64BufferAttribute, Float32BufferAttribute, Uint32BufferAttribute, Int32BufferAttribute, Uint16BufferAttribute, Int16BufferAttribute, Uint8ClampedBufferAttribute, Uint8BufferAttribute, Int8BufferAttribute, BufferAttribute, ArcCurve, CatmullRomCurve3, CubicBezierCurve, CubicBezierCurve3, EllipseCurve, LineCurve, LineCurve3, QuadraticBezierCurve, QuadraticBezierCurve3, SplineCurve, REVISION, MOUSE, CullFaceNone, CullFaceBack, CullFaceFront, CullFaceFrontBack, FrontFaceDirectionCW, FrontFaceDirectionCCW, BasicShadowMap, PCFShadowMap, PCFSoftShadowMap, FrontSide, BackSide, DoubleSide, FlatShading, SmoothShading, NoColors, FaceColors, VertexColors, NoBlending, NormalBlending, AdditiveBlending, SubtractiveBlending, MultiplyBlending, CustomBlending, AddEquation, SubtractEquation, ReverseSubtractEquation, MinEquation, MaxEquation, ZeroFactor, OneFactor, SrcColorFactor, OneMinusSrcColorFactor, SrcAlphaFactor, OneMinusSrcAlphaFactor, DstAlphaFactor, OneMinusDstAlphaFactor, DstColorFactor, OneMinusDstColorFactor, SrcAlphaSaturateFactor, NeverDepth, AlwaysDepth, LessDepth, LessEqualDepth, EqualDepth, GreaterEqualDepth, GreaterDepth, NotEqualDepth, MultiplyOperation, MixOperation, AddOperation, NoToneMapping, LinearToneMapping, ReinhardToneMapping, Uncharted2ToneMapping, CineonToneMapping, UVMapping, CubeReflectionMapping, CubeRefractionMapping, EquirectangularReflectionMapping, EquirectangularRefractionMapping, SphericalReflectionMapping, CubeUVReflectionMapping, CubeUVRefractionMapping, RepeatWrapping, ClampToEdgeWrapping, MirroredRepeatWrapping, NearestFilter, NearestMipMapNearestFilter, NearestMipMapLinearFilter, LinearFilter, LinearMipMapNearestFilter, LinearMipMapLinearFilter, UnsignedByteType, ByteType, ShortType, UnsignedShortType, IntType, UnsignedIntType, FloatType, HalfFloatType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedInt248Type, AlphaFormat, RGBFormat, RGBAFormat, LuminanceFormat, LuminanceAlphaFormat, RGBEFormat, DepthFormat, DepthStencilFormat, RedFormat, RGB_S3TC_DXT1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGB_PVRTC_4BPPV1_Format, RGB_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_PVRTC_2BPPV1_Format, RGB_ETC1_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_10x10_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, LoopOnce, LoopRepeat, LoopPingPong, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, ZeroCurvatureEnding, ZeroSlopeEnding, WrapAroundEnding, TrianglesDrawMode, TriangleStripDrawMode, TriangleFanDrawMode, LinearEncoding, sRGBEncoding, GammaEncoding, RGBEEncoding, LogLuvEncoding, RGBM7Encoding, RGBM16Encoding, RGBDEncoding, BasicDepthPacking, RGBADepthPacking, TangentSpaceNormalMap, ObjectSpaceNormalMap, CubeGeometry, Face4, LineStrip, LinePieces, MeshFaceMaterial, MultiMaterial, PointCloud, Particle, ParticleSystem, PointCloudMaterial, ParticleBasicMaterial, ParticleSystemMaterial, Vertex, DynamicBufferAttribute, Int8Attribute, Uint8Attribute, Uint8ClampedAttribute, Int16Attribute, Uint16Attribute, Int32Attribute, Uint32Attribute, Float32Attribute, Float64Attribute, ClosedSplineCurve3, SplineCurve3, Spline, AxisHelper, BoundingBoxHelper, EdgesHelper, WireframeHelper, XHRLoader, BinaryTextureLoader, GeometryUtils, Projector, CanvasRenderer, SceneUtils, LensFlare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window.THREE = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\") // ! for debugging purposes, remove when done\nconst Experience = __webpack_require__(/*! ./modules/Experience */ \"./src/modules/Experience.js\");\nconst Cube = __webpack_require__(/*! ./modules/Cube.js */ \"./src/modules/Cube.js\")\n\nconst experience = Experience.make()\nif (true) {\n    console.log('adding the experience to the window')\n    window.experience = experience\n}\n\nconst cube = Cube.make()\nexperience.addToScene(cube.object3d)\nexperience.setCameraPosition({\n    z: 5\n})\nexperience.animate()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlLG1CQUFPLENBQUMseURBQU87QUFDOUIsbUJBQW1CLG1CQUFPLENBQUMseURBQXNCO0FBQ2pELGFBQWEsbUJBQU8sQ0FBQyxnREFBbUI7O0FBRXhDO0FBQ0EsSUFBSSxJQUF1QjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuVEhSRUUgPSByZXF1aXJlKCd0aHJlZScpIC8vICEgZm9yIGRlYnVnZ2luZyBwdXJwb3NlcywgcmVtb3ZlIHdoZW4gZG9uZVxuY29uc3QgRXhwZXJpZW5jZSA9IHJlcXVpcmUoJy4vbW9kdWxlcy9FeHBlcmllbmNlJyk7XG5jb25zdCBDdWJlID0gcmVxdWlyZSgnLi9tb2R1bGVzL0N1YmUuanMnKVxuXG5jb25zdCBleHBlcmllbmNlID0gRXhwZXJpZW5jZS5tYWtlKClcbmlmIChwcm9jZXNzLmVudi5ERVZFTE9QTUVOVCkge1xuICAgIGNvbnNvbGUubG9nKCdhZGRpbmcgdGhlIGV4cGVyaWVuY2UgdG8gdGhlIHdpbmRvdycpXG4gICAgd2luZG93LmV4cGVyaWVuY2UgPSBleHBlcmllbmNlXG59XG5cbmNvbnN0IGN1YmUgPSBDdWJlLm1ha2UoKVxuZXhwZXJpZW5jZS5hZGRUb1NjZW5lKGN1YmUub2JqZWN0M2QpXG5leHBlcmllbmNlLnNldENhbWVyYVBvc2l0aW9uKHtcbiAgICB6OiA1XG59KVxuZXhwZXJpZW5jZS5hbmltYXRlKCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/modules/Cube.js":
/*!*****************************!*\
  !*** ./src/modules/Cube.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const THREE = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\")\n\nclass Cube {\n    constructor() {\n        this.object3d = null\n    }\n\n    static make() {\n        const geometry = new THREE.BoxGeometry(1, 1, 1)\n        const material = new THREE.MeshBasicMaterial({\n            color: 0x00ff00\n        })\n\n        this.object3d = new THREE.Mesh(geometry, material)\n        this.object3d.name = \"test cube\"\n        return this\n    }\n\n    onUpdate() {\n        this.rotation.x += 0.01\n        this.rotation.y += 0.01\n    }\n}\n\nmodule.exports = Cube//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9DdWJlLmpzPzBhNzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxtQkFBTyxDQUFDLHlEQUFPOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIuL3NyYy9tb2R1bGVzL0N1YmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUSFJFRSA9IHJlcXVpcmUoJ3RocmVlJylcblxuY2xhc3MgQ3ViZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub2JqZWN0M2QgPSBudWxsXG4gICAgfVxuXG4gICAgc3RhdGljIG1ha2UoKSB7XG4gICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDEsIDEpXG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgICAgICAgIGNvbG9yOiAweDAwZmYwMFxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMub2JqZWN0M2QgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpXG4gICAgICAgIHRoaXMub2JqZWN0M2QubmFtZSA9IFwidGVzdCBjdWJlXCJcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBvblVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5yb3RhdGlvbi54ICs9IDAuMDFcbiAgICAgICAgdGhpcy5yb3RhdGlvbi55ICs9IDAuMDFcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3ViZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/Cube.js\n");

/***/ }),

/***/ "./src/modules/Experience.js":
/*!***********************************!*\
  !*** ./src/modules/Experience.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const THREE = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\")\nconst autoBind = __webpack_require__(/*! auto-bind */ \"./node_modules/auto-bind/index.js\")\n\n\n\nclass Experience {\n    constructor() {\n        this.scene = null\n        this.camera = null\n        this.renderer = null\n\n        autoBind(this)\n    }\n\n    static make(intitalize = true) {\n        const experience = new Experience()\n        if (intitalize) {\n            experience.initalize()\n        }\n        return experience\n    }\n\n    initalize() {\n        this.scene = this.createScene()\n        this.camera = this.createCamera()\n        this.renderer = this.createRenderer()\n\n        document.body.appendChild(this.renderer.domElement)\n    }\n\n    animate() {\n        requestAnimationFrame(this.animate)\n        this.scene.children[0].rotation.x += 0.01\n        this.scene.children[0].rotation.y += 0.01\n        this.renderer.render(this.scene, this.camera)\n\n    }\n\n    createScene() {\n        const scene = new THREE.Scene()\n        scene.name = \"experience-secene\"\n        if (true) {\n            console.log('Adding scene to the window')\n            window.scene = scene\n        }\n        return scene\n    }\n\n    createCamera(type = 'perspective', config = {}) {\n        let camera = null\n        const cameraConfig = Object.assign({\n            fov: 75,\n            aspectRatio: window.innerWidth / window.innerHeight,\n            near: 0.1,\n            far: 1000\n        }, config)\n\n        switch (type) {\n            case 'perspective':\n                camera = new THREE.PerspectiveCamera(cameraConfig.fov, cameraConfig.aspectRatio, cameraConfig.near, cameraConfig.far)\n                break\n            default:\n                throw new Error(`Invalid camera type specified: ${type}`)\n        }\n        return camera\n    }\n\n    createRenderer(width = window.innerWidth, height = window.innerHeight) {\n        const renderer = new THREE.WebGLRenderer()\n        renderer.setSize(width, height)\n\n        return renderer\n    }\n\n    addToScene(thing = null) {\n        // ? what kind of checks would we want here?\n        this.scene.add(thing)\n    }\n\n    setCameraPosition(config = {}) {\n        const position = Object.assign(this.camera.position, config)\n        this.camera.position.set(position.x, position.y, position.z)\n    }\n}\n\nmodule.exports = Experience//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9FeHBlcmllbmNlLmpzP2IxZGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxtQkFBTyxDQUFDLHlEQUFPO0FBQzdCLGlCQUFpQixtQkFBTyxDQUFDLG9EQUFXOzs7O0FBSXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxJQUF1QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsS0FBSztBQUN2RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vc3JjL21vZHVsZXMvRXhwZXJpZW5jZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRIUkVFID0gcmVxdWlyZSgndGhyZWUnKVxuY29uc3QgYXV0b0JpbmQgPSByZXF1aXJlKCdhdXRvLWJpbmQnKVxuXG5cblxuY2xhc3MgRXhwZXJpZW5jZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBudWxsXG4gICAgICAgIHRoaXMuY2FtZXJhID0gbnVsbFxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbnVsbFxuXG4gICAgICAgIGF1dG9CaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgc3RhdGljIG1ha2UoaW50aXRhbGl6ZSA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgZXhwZXJpZW5jZSA9IG5ldyBFeHBlcmllbmNlKClcbiAgICAgICAgaWYgKGludGl0YWxpemUpIHtcbiAgICAgICAgICAgIGV4cGVyaWVuY2UuaW5pdGFsaXplKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhwZXJpZW5jZVxuICAgIH1cblxuICAgIGluaXRhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHRoaXMuY3JlYXRlU2NlbmUoKVxuICAgICAgICB0aGlzLmNhbWVyYSA9IHRoaXMuY3JlYXRlQ2FtZXJhKClcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHRoaXMuY3JlYXRlUmVuZGVyZXIoKVxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KVxuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpXG4gICAgICAgIHRoaXMuc2NlbmUuY2hpbGRyZW5bMF0ucm90YXRpb24ueCArPSAwLjAxXG4gICAgICAgIHRoaXMuc2NlbmUuY2hpbGRyZW5bMF0ucm90YXRpb24ueSArPSAwLjAxXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKVxuXG4gICAgfVxuXG4gICAgY3JlYXRlU2NlbmUoKSB7XG4gICAgICAgIGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKClcbiAgICAgICAgc2NlbmUubmFtZSA9IFwiZXhwZXJpZW5jZS1zZWNlbmVcIlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuREVWRUxPUE1FTlQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGRpbmcgc2NlbmUgdG8gdGhlIHdpbmRvdycpXG4gICAgICAgICAgICB3aW5kb3cuc2NlbmUgPSBzY2VuZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzY2VuZVxuICAgIH1cblxuICAgIGNyZWF0ZUNhbWVyYSh0eXBlID0gJ3BlcnNwZWN0aXZlJywgY29uZmlnID0ge30pIHtcbiAgICAgICAgbGV0IGNhbWVyYSA9IG51bGxcbiAgICAgICAgY29uc3QgY2FtZXJhQ29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBmb3Y6IDc1LFxuICAgICAgICAgICAgYXNwZWN0UmF0aW86IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICAgICAgbmVhcjogMC4xLFxuICAgICAgICAgICAgZmFyOiAxMDAwXG4gICAgICAgIH0sIGNvbmZpZylcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3BlcnNwZWN0aXZlJzpcbiAgICAgICAgICAgICAgICBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoY2FtZXJhQ29uZmlnLmZvdiwgY2FtZXJhQ29uZmlnLmFzcGVjdFJhdGlvLCBjYW1lcmFDb25maWcubmVhciwgY2FtZXJhQ29uZmlnLmZhcilcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgY2FtZXJhIHR5cGUgc3BlY2lmaWVkOiAke3R5cGV9YClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FtZXJhXG4gICAgfVxuXG4gICAgY3JlYXRlUmVuZGVyZXIod2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKVxuICAgICAgICByZW5kZXJlci5zZXRTaXplKHdpZHRoLCBoZWlnaHQpXG5cbiAgICAgICAgcmV0dXJuIHJlbmRlcmVyXG4gICAgfVxuXG4gICAgYWRkVG9TY2VuZSh0aGluZyA9IG51bGwpIHtcbiAgICAgICAgLy8gPyB3aGF0IGtpbmQgb2YgY2hlY2tzIHdvdWxkIHdlIHdhbnQgaGVyZT9cbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpbmcpXG4gICAgfVxuXG4gICAgc2V0Q2FtZXJhUG9zaXRpb24oY29uZmlnID0ge30pIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBPYmplY3QuYXNzaWduKHRoaXMuY2FtZXJhLnBvc2l0aW9uLCBjb25maWcpXG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnNldChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBwb3NpdGlvbi56KVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeHBlcmllbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/Experience.js\n");

/***/ })

/******/ });