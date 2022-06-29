(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_mqtt-config_mqtt-config_module_ts"],{

/***/ 4365:
/*!***********************************************************!*\
  !*** ./src/app/mqtt-config/mqtt-config-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MqttConfigPageRoutingModule": () => (/* binding */ MqttConfigPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _mqtt_config_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mqtt-config.page */ 3644);




const routes = [
    {
        path: '',
        component: _mqtt_config_page__WEBPACK_IMPORTED_MODULE_0__.MqttConfigPage
    }
];
let MqttConfigPageRoutingModule = class MqttConfigPageRoutingModule {
};
MqttConfigPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MqttConfigPageRoutingModule);



/***/ }),

/***/ 4670:
/*!***************************************************!*\
  !*** ./src/app/mqtt-config/mqtt-config.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MqttConfigPageModule": () => (/* binding */ MqttConfigPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _mqtt_config_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mqtt-config-routing.module */ 4365);
/* harmony import */ var _mqtt_config_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mqtt-config.page */ 3644);







let MqttConfigPageModule = class MqttConfigPageModule {
};
MqttConfigPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mqtt_config_routing_module__WEBPACK_IMPORTED_MODULE_0__.MqttConfigPageRoutingModule
        ],
        declarations: [_mqtt_config_page__WEBPACK_IMPORTED_MODULE_1__.MqttConfigPage]
    })
], MqttConfigPageModule);



/***/ }),

/***/ 3644:
/*!*************************************************!*\
  !*** ./src/app/mqtt-config/mqtt-config.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MqttConfigPage": () => (/* binding */ MqttConfigPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _mqtt_config_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mqtt-config.page.html?ngResource */ 1218);
/* harmony import */ var _mqtt_config_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mqtt-config.page.scss?ngResource */ 3882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 460);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/local-storage.service */ 17);
/* harmony import */ var rsup_mqtt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rsup-mqtt */ 9829);







let MqttConfigPage = class MqttConfigPage {
    constructor(localSto) {
        this.localSto = localSto;
        this.MQTTSERVER = "127.0.0.1";
        this.MQTTPORT = "1883";
        /**
         * Saving port values to localStorage
         */
        this.saveValues = () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.localSto.saveValuesString('MQTTSERVER', this.MQTTSERVER);
            this.localSto.saveValuesString('MQTTPORT', this.MQTTPORT);
        });
        /**
         * Get the server ip from the local storage
         */
        this.getServer = () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'MQTTSERVER' });
            let server = value;
        });
        /**
         * Get the broker port from the local storage
         */
        this.getPort = () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'MQTTPORT' });
            let port = value;
        });
    }
    ngOnInit() {
        (0,rsup_mqtt__WEBPACK_IMPORTED_MODULE_4__.connect)({ host: '127.0.0.1', port: 1883, ssl: false, path: '/mqtt' })
            .then(client => { this.MQTTClientLocal = client; });
    }
    saveClick() {
        //console.log("clicked:", this.MQTTSERVER,":", this.MQTTPORT);
        this.saveValues();
    }
    pruebaClick() {
        this.getServer();
        this.getPort();
        console.log("clicked:", this.MQTTSERVER, ":", this.MQTTPORT);
        this.MQTTClientLocal.publish('/mensajes', 'hello sistema~');
    }
};
MqttConfigPage.ctorParameters = () => [
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService }
];
MqttConfigPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-mqtt-config',
        template: _mqtt_config_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mqtt_config_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MqttConfigPage);



/***/ }),

/***/ 17:
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageService": () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 460);



let LocalStorageService = class LocalStorageService {
    constructor() { }
    /**
     * Saving a string in the local storage
     * @param keyP key
     * @param valueP value
     */
    saveValuesString(keyP, valueP) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({
                key: keyP,
                value: valueP,
            });
        });
    }
    /**
     * Saving a number to the local storage
     * @param keyP key
     * @param valueP value
     */
    saveValuesNumber(keyP, valueP) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({
                key: keyP,
                value: valueP.toString(),
            });
        });
    } /*
    public async getValuesString (keyP: string) : Promise<string>{
      let value  = await Storage.get({ key: keyP });
      let value2 = JSON.parse(value);
      console.log("value inside:"+value2[2]);
      return value.toString();
    }
    public async getValuesNumber (keyP: string) : Promise<number>{
      let value  = await Storage.get({ key: keyP });
      return parseInt(value.toString(),1);
    }*/
};
LocalStorageService.ctorParameters = () => [];
LocalStorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LocalStorageService);



/***/ }),

/***/ 6867:
/*!**************************************************************!*\
  !*** ./node_modules/@byungi/event-emitter/dist/index.esm.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "EventEmitter": () => (/* binding */ t)
/* harmony export */ });
var t=function(){function t(){this._o={}}var i=t.prototype;return i.on=function(t,o){var i=this;return e(o),(n(this._o,t)?this._o[t]:this._o[t]=[]).push(o),function(){var e=i._o[t];if(e){var n=e.indexOf(o);~n&&(e.splice(n,1),0===e.length&&delete i._o[t])}}},i.off=function(t,i){if(i&&e(i),n(this._o,t))if(i){for(var r=this._o[t],f=[],u=0;u<r.length;u++){var h=r[u];o(h,i)||f.push(h)}f.length>0?this._o[t]=f:delete this._o[t]}else delete this._o[t]},i.once=function(t,n){var o=this;e(n);var i=function e(){o.off(t,e),n.apply(void 0,[].slice.call(arguments))};return i.key=n,this.on(t,i)},i.emit=function(t){if(n(this._o,t))for(var e=this._o[t].slice(),o=0;o<e.length;o++)e[o].apply(e,[].slice.call(arguments,1))},i.has=function(t,i){if(!n(this._o,t))return!1;if(!i)return!0;e(i);for(var r=this._o[t],f=0;f<r.length;f++)if(o(r[f],i))return!0;return!1},t}();function e(t){var e=typeof t;if("function"!==e)throw new TypeError("Expected listener to be a function, but "+e)}function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function o(t,e){return t===e||t.key===e}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (t);


/***/ }),

/***/ 5099:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var _home_gustavo_Documents_UBA_TP_Final_ClientNurse_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);


/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };

  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };

  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };

  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};

const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */


const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;

  const config = webPlugin.config;
  const Plugins = cap.Plugins;

  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  } // TODO: add link to upgrade guide


  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);

  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};

var ExceptionCode;

(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */

  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));

class CapacitorException extends Error {
  constructor(message, code) {
    super(message);
    this.message = message;
    this.code = code;
  }

}

const getPlatformId = win => {
  var _a, _b;

  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};

const createCapacitor = win => {
  var _a, _b, _c, _d, _e;

  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */

  const capPlatforms = win.CapacitorPlatforms;

  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };

  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

  const defaultIsNativePlatform = () => getPlatform() !== 'web';

  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);

    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }

    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }

    return false;
  };

  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

  const defaultGetPluginHeader = pluginName => {
    var _a;

    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };

  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

  const handleError = err => win.console.error(err);

  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };

  const registeredPlugins = new Map();

  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);

    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }

    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;

    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,_home_gustavo_Documents_UBA_TP_Final_ClientNurse_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }

        return jsImplementation;
      });

      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();

    const createPluginMethod = (impl, prop) => {
      var _a, _b;

      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);

        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };

    const createPluginMethodWrapper = prop => {
      let remove;

      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);

          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });

        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,_home_gustavo_Documents_UBA_TP_Final_ClientNurse_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }

        return p;
      }; // Some flair ✨


      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;

      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };

    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');

    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);

      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,_home_gustavo_Documents_UBA_TP_Final_ClientNurse_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });

        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();

      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,_home_gustavo_Documents_UBA_TP_Final_ClientNurse_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };

    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;

          case 'toJSON':
            return () => ({});

          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;

          case 'removeListener':
            return removeListener;

          default:
            return createPluginMethodWrapper(prop);
        }
      }

    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };

  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }

  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};

const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);

const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */

const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */

const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);
/**
 * Base class web plugins should extend.
 */


class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};

    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }

  addListener(eventName, listenerFunc) {
    var _this = this;

    const listeners = this.listeners[eventName];

    if (!listeners) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it

    const windowListener = this.windowListeners[eventName];

    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }

    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,_home_gustavo_Documents_UBA_TP_Final_ClientNurse_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });

      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();

    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,_home_gustavo_Documents_UBA_TP_Final_ClientNurse_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });

        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }

  removeAllListeners() {
    var _this2 = this;

    return (0,_home_gustavo_Documents_UBA_TP_Final_ClientNurse_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};

      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }

      _this2.windowListeners = {};
    })();
  }

  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];

    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }

  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }

  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }

  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }

  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }

  removeListener(eventName, listenerFunc) {
    var _this3 = this;

    return (0,_home_gustavo_Documents_UBA_TP_Final_ClientNurse_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];

      if (!listeners) {
        return;
      }

      const index = listeners.indexOf(listenerFunc);

      _this3.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
      // remove the window listener


      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }

  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }

  removeWindowListener(handle) {
    if (!handle) {
      return;
    }

    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }

}

const WebView = /*#__PURE__*/registerPlugin('WebView');


/***/ }),

/***/ 7394:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/storage/dist/esm/definitions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 460:
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/storage/dist/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Storage": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 7394);

const Storage = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Storage', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_storage_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 9970)).then(m => new m.StorageWeb()),
});




/***/ }),

/***/ 2228:
/*!*****************************************************!*\
  !*** ./node_modules/deep-extend/lib/deep-extend.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
/*!
 * @description Recursive object extending
 * @author Viacheslav Lotsmanov <lotsmanov89@gmail.com>
 * @license MIT
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2013-2018 Viacheslav Lotsmanov
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */



function isSpecificValue(val) {
	return (
		val instanceof Buffer
		|| val instanceof Date
		|| val instanceof RegExp
	) ? true : false;
}

function cloneSpecificValue(val) {
	if (val instanceof Buffer) {
		var x = Buffer.alloc
			? Buffer.alloc(val.length)
			: new Buffer(val.length);
		val.copy(x);
		return x;
	} else if (val instanceof Date) {
		return new Date(val.getTime());
	} else if (val instanceof RegExp) {
		return new RegExp(val);
	} else {
		throw new Error('Unexpected situation');
	}
}

/**
 * Recursive cloning array.
 */
function deepCloneArray(arr) {
	var clone = [];
	arr.forEach(function (item, index) {
		if (typeof item === 'object' && item !== null) {
			if (Array.isArray(item)) {
				clone[index] = deepCloneArray(item);
			} else if (isSpecificValue(item)) {
				clone[index] = cloneSpecificValue(item);
			} else {
				clone[index] = deepExtend({}, item);
			}
		} else {
			clone[index] = item;
		}
	});
	return clone;
}

function safeGetProperty(object, property) {
	return property === '__proto__' ? undefined : object[property];
}

/**
 * Extening object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
var deepExtend = module.exports = function (/*obj_1, [obj_2], [obj_N]*/) {
	if (arguments.length < 1 || typeof arguments[0] !== 'object') {
		return false;
	}

	if (arguments.length < 2) {
		return arguments[0];
	}

	var target = arguments[0];

	// convert arguments to array and cut off target object
	var args = Array.prototype.slice.call(arguments, 1);

	var val, src, clone;

	args.forEach(function (obj) {
		// skip argument if isn't an object, is null, or is an array
		if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
			return;
		}

		Object.keys(obj).forEach(function (key) {
			src = safeGetProperty(target, key); // source value
			val = safeGetProperty(obj, key); // new value

			// recursion prevention
			if (val === target) {
				return;

			/**
			 * if new value isn't object then just overwrite by new value
			 * instead of extending.
			 */
			} else if (typeof val !== 'object' || val === null) {
				target[key] = val;
				return;

			// just clone arrays (and recursive clone objects inside)
			} else if (Array.isArray(val)) {
				target[key] = deepCloneArray(val);
				return;

			// custom cloning and overwrite for specific objects
			} else if (isSpecificValue(val)) {
				target[key] = cloneSpecificValue(val);
				return;

			// overwrite by new value if source isn't object or array
			} else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
				target[key] = deepExtend({}, val);
				return;

			// source value and new value is objects both, extending...
			} else {
				target[key] = deepExtend(src, val);
				return;
			}
		});
	});

	return target;
};


/***/ }),

/***/ 5086:
/*!*********************************************!*\
  !*** ./node_modules/paho-mqtt/paho-mqtt.js ***!
  \*********************************************/
/***/ (function(module) {

/*******************************************************************************
 * Copyright (c) 2013 IBM Corp.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and Eclipse Distribution License v1.0 which accompany this distribution.
 *
 * The Eclipse Public License is available at
 *    http://www.eclipse.org/legal/epl-v10.html
 * and the Eclipse Distribution License is available at
 *   http://www.eclipse.org/org/documents/edl-v10.php.
 *
 * Contributors:
 *    Andrew Banks - initial API and implementation and initial documentation
 *******************************************************************************/
// Only expose a single object name in the global namespace.
// Everything must go through this module. Global Paho module
// only has a single public function, client, which returns
// a Paho client object given connection details.

/**
 * Send and receive messages using web browsers.
 * <p>
 * This programming interface lets a JavaScript client application use the MQTT V3.1 or
 * V3.1.1 protocol to connect to an MQTT-supporting messaging server.
 *
 * The function supported includes:
 * <ol>
 * <li>Connecting to and disconnecting from a server. The server is identified by its host name and port number.
 * <li>Specifying options that relate to the communications link with the server,
 * for example the frequency of keep-alive heartbeats, and whether SSL/TLS is required.
 * <li>Subscribing to and receiving messages from MQTT Topics.
 * <li>Publishing messages to MQTT Topics.
 * </ol>
 * <p>
 * The API consists of two main objects:
 * <dl>
 * <dt><b>{@link Paho.Client}</b></dt>
 * <dd>This contains methods that provide the functionality of the API,
 * including provision of callbacks that notify the application when a message
 * arrives from or is delivered to the messaging server,
 * or when the status of its connection to the messaging server changes.</dd>
 * <dt><b>{@link Paho.Message}</b></dt>
 * <dd>This encapsulates the payload of the message along with various attributes
 * associated with its delivery, in particular the destination to which it has
 * been (or is about to be) sent.</dd>
 * </dl>
 * <p>
 * The programming interface validates parameters passed to it, and will throw
 * an Error containing an error message intended for developer use, if it detects
 * an error with any parameter.
 * <p>
 * Example:
 *
 * <code><pre>
var client = new Paho.MQTT.Client(location.hostname, Number(location.port), "clientId");
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;
client.connect({onSuccess:onConnect});

function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  client.subscribe("/World");
  var message = new Paho.MQTT.Message("Hello");
  message.destinationName = "/World";
  client.send(message);
};
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0)
	console.log("onConnectionLost:"+responseObject.errorMessage);
};
function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
  client.disconnect();
};
 * </pre></code>
 * @namespace Paho
 */

/* jshint shadow:true */
(function ExportLibrary(root, factory) {
  if (true) {
    module.exports = factory();
  } else {}
})(this, function LibraryFactory() {
  var PahoMQTT = function (global) {
    // Private variables below, these are only visible inside the function closure
    // which is used to define the module.
    var version = "@VERSION@-@BUILDLEVEL@";
    /**
     * @private
     */

    var localStorage = global.localStorage || function () {
      var data = {};
      return {
        setItem: function (key, item) {
          data[key] = item;
        },
        getItem: function (key) {
          return data[key];
        },
        removeItem: function (key) {
          delete data[key];
        }
      };
    }();
    /**
    * Unique message type identifiers, with associated
    * associated integer values.
    * @private
    */


    var MESSAGE_TYPE = {
      CONNECT: 1,
      CONNACK: 2,
      PUBLISH: 3,
      PUBACK: 4,
      PUBREC: 5,
      PUBREL: 6,
      PUBCOMP: 7,
      SUBSCRIBE: 8,
      SUBACK: 9,
      UNSUBSCRIBE: 10,
      UNSUBACK: 11,
      PINGREQ: 12,
      PINGRESP: 13,
      DISCONNECT: 14
    }; // Collection of utility methods used to simplify module code
    // and promote the DRY pattern.

    /**
    * Validate an object's parameter names to ensure they
    * match a list of expected variables name for this option
    * type. Used to ensure option object passed into the API don't
    * contain erroneous parameters.
    * @param {Object} obj - User options object
    * @param {Object} keys - valid keys and types that may exist in obj.
    * @throws {Error} Invalid option parameter found.
    * @private
    */

    var validate = function (obj, keys) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (keys.hasOwnProperty(key)) {
            if (typeof obj[key] !== keys[key]) throw new Error(format(ERROR.INVALID_TYPE, [typeof obj[key], key]));
          } else {
            var errorStr = "Unknown property, " + key + ". Valid properties are:";

            for (var validKey in keys) if (keys.hasOwnProperty(validKey)) errorStr = errorStr + " " + validKey;

            throw new Error(errorStr);
          }
        }
      }
    };
    /**
    * Return a new function which runs the user function bound
    * to a fixed scope.
    * @param {function} User function
    * @param {object} Function scope
    * @return {function} User function bound to another scope
    * @private
    */


    var scope = function (f, scope) {
      return function () {
        return f.apply(scope, arguments);
      };
    };
    /**
    * Unique message type identifiers, with associated
    * associated integer values.
    * @private
    */


    var ERROR = {
      OK: {
        code: 0,
        text: "AMQJSC0000I OK."
      },
      CONNECT_TIMEOUT: {
        code: 1,
        text: "AMQJSC0001E Connect timed out."
      },
      SUBSCRIBE_TIMEOUT: {
        code: 2,
        text: "AMQJS0002E Subscribe timed out."
      },
      UNSUBSCRIBE_TIMEOUT: {
        code: 3,
        text: "AMQJS0003E Unsubscribe timed out."
      },
      PING_TIMEOUT: {
        code: 4,
        text: "AMQJS0004E Ping timed out."
      },
      INTERNAL_ERROR: {
        code: 5,
        text: "AMQJS0005E Internal error. Error Message: {0}, Stack trace: {1}"
      },
      CONNACK_RETURNCODE: {
        code: 6,
        text: "AMQJS0006E Bad Connack return code:{0} {1}."
      },
      SOCKET_ERROR: {
        code: 7,
        text: "AMQJS0007E Socket error:{0}."
      },
      SOCKET_CLOSE: {
        code: 8,
        text: "AMQJS0008I Socket closed."
      },
      MALFORMED_UTF: {
        code: 9,
        text: "AMQJS0009E Malformed UTF data:{0} {1} {2}."
      },
      UNSUPPORTED: {
        code: 10,
        text: "AMQJS0010E {0} is not supported by this browser."
      },
      INVALID_STATE: {
        code: 11,
        text: "AMQJS0011E Invalid state {0}."
      },
      INVALID_TYPE: {
        code: 12,
        text: "AMQJS0012E Invalid type {0} for {1}."
      },
      INVALID_ARGUMENT: {
        code: 13,
        text: "AMQJS0013E Invalid argument {0} for {1}."
      },
      UNSUPPORTED_OPERATION: {
        code: 14,
        text: "AMQJS0014E Unsupported operation."
      },
      INVALID_STORED_DATA: {
        code: 15,
        text: "AMQJS0015E Invalid data in local storage key={0} value={1}."
      },
      INVALID_MQTT_MESSAGE_TYPE: {
        code: 16,
        text: "AMQJS0016E Invalid MQTT message type {0}."
      },
      MALFORMED_UNICODE: {
        code: 17,
        text: "AMQJS0017E Malformed Unicode string:{0} {1}."
      },
      BUFFER_FULL: {
        code: 18,
        text: "AMQJS0018E Message buffer is full, maximum buffer size: {0}."
      }
    };
    /** CONNACK RC Meaning. */

    var CONNACK_RC = {
      0: "Connection Accepted",
      1: "Connection Refused: unacceptable protocol version",
      2: "Connection Refused: identifier rejected",
      3: "Connection Refused: server unavailable",
      4: "Connection Refused: bad user name or password",
      5: "Connection Refused: not authorized"
    };
    /**
     * Format an error message text.
     * @private
     * @param {error} ERROR value above.
     * @param {substitutions} [array] substituted into the text.
     * @return the text with the substitutions made.
     */

    var format = function (error, substitutions) {
      var text = error.text;

      if (substitutions) {
        var field, start;

        for (var i = 0; i < substitutions.length; i++) {
          field = "{" + i + "}";
          start = text.indexOf(field);

          if (start > 0) {
            var part1 = text.substring(0, start);
            var part2 = text.substring(start + field.length);
            text = part1 + substitutions[i] + part2;
          }
        }
      }

      return text;
    }; //MQTT protocol and version          6    M    Q    I    s    d    p    3


    var MqttProtoIdentifierv3 = [0x00, 0x06, 0x4d, 0x51, 0x49, 0x73, 0x64, 0x70, 0x03]; //MQTT proto/version for 311         4    M    Q    T    T    4

    var MqttProtoIdentifierv4 = [0x00, 0x04, 0x4d, 0x51, 0x54, 0x54, 0x04];
    /**
    * Construct an MQTT wire protocol message.
    * @param type MQTT packet type.
    * @param options optional wire message attributes.
    *
    * Optional properties
    *
    * messageIdentifier: message ID in the range [0..65535]
    * payloadMessage:	Application Message - PUBLISH only
    * connectStrings:	array of 0 or more Strings to be put into the CONNECT payload
    * topics:			array of strings (SUBSCRIBE, UNSUBSCRIBE)
    * requestQoS:		array of QoS values [0..2]
    *
    * "Flag" properties
    * cleanSession:	true if present / false if absent (CONNECT)
    * willMessage:  	true if present / false if absent (CONNECT)
    * isRetained:		true if present / false if absent (CONNECT)
    * userName:		true if present / false if absent (CONNECT)
    * password:		true if present / false if absent (CONNECT)
    * keepAliveInterval:	integer [0..65535]  (CONNECT)
    *
    * @private
    * @ignore
    */

    var WireMessage = function (type, options) {
      this.type = type;

      for (var name in options) {
        if (options.hasOwnProperty(name)) {
          this[name] = options[name];
        }
      }
    };

    WireMessage.prototype.encode = function () {
      // Compute the first byte of the fixed header
      var first = (this.type & 0x0f) << 4;
      /*
      * Now calculate the length of the variable header + payload by adding up the lengths
      * of all the component parts
      */

      var remLength = 0;
      var topicStrLength = [];
      var destinationNameLength = 0;
      var willMessagePayloadBytes; // if the message contains a messageIdentifier then we need two bytes for that

      if (this.messageIdentifier !== undefined) remLength += 2;

      switch (this.type) {
        // If this a Connect then we need to include 12 bytes for its header
        case MESSAGE_TYPE.CONNECT:
          switch (this.mqttVersion) {
            case 3:
              remLength += MqttProtoIdentifierv3.length + 3;
              break;

            case 4:
              remLength += MqttProtoIdentifierv4.length + 3;
              break;
          }

          remLength += UTF8Length(this.clientId) + 2;

          if (this.willMessage !== undefined) {
            remLength += UTF8Length(this.willMessage.destinationName) + 2; // Will message is always a string, sent as UTF-8 characters with a preceding length.

            willMessagePayloadBytes = this.willMessage.payloadBytes;
            if (!(willMessagePayloadBytes instanceof Uint8Array)) willMessagePayloadBytes = new Uint8Array(payloadBytes);
            remLength += willMessagePayloadBytes.byteLength + 2;
          }

          if (this.userName !== undefined) remLength += UTF8Length(this.userName) + 2;
          if (this.password !== undefined) remLength += UTF8Length(this.password) + 2;
          break;
        // Subscribe, Unsubscribe can both contain topic strings

        case MESSAGE_TYPE.SUBSCRIBE:
          first |= 0x02; // Qos = 1;

          for (var i = 0; i < this.topics.length; i++) {
            topicStrLength[i] = UTF8Length(this.topics[i]);
            remLength += topicStrLength[i] + 2;
          }

          remLength += this.requestedQos.length; // 1 byte for each topic's Qos
          // QoS on Subscribe only

          break;

        case MESSAGE_TYPE.UNSUBSCRIBE:
          first |= 0x02; // Qos = 1;

          for (var i = 0; i < this.topics.length; i++) {
            topicStrLength[i] = UTF8Length(this.topics[i]);
            remLength += topicStrLength[i] + 2;
          }

          break;

        case MESSAGE_TYPE.PUBREL:
          first |= 0x02; // Qos = 1;

          break;

        case MESSAGE_TYPE.PUBLISH:
          if (this.payloadMessage.duplicate) first |= 0x08;
          first = first |= this.payloadMessage.qos << 1;
          if (this.payloadMessage.retained) first |= 0x01;
          destinationNameLength = UTF8Length(this.payloadMessage.destinationName);
          remLength += destinationNameLength + 2;
          var payloadBytes = this.payloadMessage.payloadBytes;
          remLength += payloadBytes.byteLength;
          if (payloadBytes instanceof ArrayBuffer) payloadBytes = new Uint8Array(payloadBytes);else if (!(payloadBytes instanceof Uint8Array)) payloadBytes = new Uint8Array(payloadBytes.buffer);
          break;

        case MESSAGE_TYPE.DISCONNECT:
          break;

        default:
          break;
      } // Now we can allocate a buffer for the message


      var mbi = encodeMBI(remLength); // Convert the length to MQTT MBI format

      var pos = mbi.length + 1; // Offset of start of variable header

      var buffer = new ArrayBuffer(remLength + pos);
      var byteStream = new Uint8Array(buffer); // view it as a sequence of bytes
      //Write the fixed header into the buffer

      byteStream[0] = first;
      byteStream.set(mbi, 1); // If this is a PUBLISH then the variable header starts with a topic

      if (this.type == MESSAGE_TYPE.PUBLISH) pos = writeString(this.payloadMessage.destinationName, destinationNameLength, byteStream, pos); // If this is a CONNECT then the variable header contains the protocol name/version, flags and keepalive time
      else if (this.type == MESSAGE_TYPE.CONNECT) {
        switch (this.mqttVersion) {
          case 3:
            byteStream.set(MqttProtoIdentifierv3, pos);
            pos += MqttProtoIdentifierv3.length;
            break;

          case 4:
            byteStream.set(MqttProtoIdentifierv4, pos);
            pos += MqttProtoIdentifierv4.length;
            break;
        }

        var connectFlags = 0;
        if (this.cleanSession) connectFlags = 0x02;

        if (this.willMessage !== undefined) {
          connectFlags |= 0x04;
          connectFlags |= this.willMessage.qos << 3;

          if (this.willMessage.retained) {
            connectFlags |= 0x20;
          }
        }

        if (this.userName !== undefined) connectFlags |= 0x80;
        if (this.password !== undefined) connectFlags |= 0x40;
        byteStream[pos++] = connectFlags;
        pos = writeUint16(this.keepAliveInterval, byteStream, pos);
      } // Output the messageIdentifier - if there is one

      if (this.messageIdentifier !== undefined) pos = writeUint16(this.messageIdentifier, byteStream, pos);

      switch (this.type) {
        case MESSAGE_TYPE.CONNECT:
          pos = writeString(this.clientId, UTF8Length(this.clientId), byteStream, pos);

          if (this.willMessage !== undefined) {
            pos = writeString(this.willMessage.destinationName, UTF8Length(this.willMessage.destinationName), byteStream, pos);
            pos = writeUint16(willMessagePayloadBytes.byteLength, byteStream, pos);
            byteStream.set(willMessagePayloadBytes, pos);
            pos += willMessagePayloadBytes.byteLength;
          }

          if (this.userName !== undefined) pos = writeString(this.userName, UTF8Length(this.userName), byteStream, pos);
          if (this.password !== undefined) pos = writeString(this.password, UTF8Length(this.password), byteStream, pos);
          break;

        case MESSAGE_TYPE.PUBLISH:
          // PUBLISH has a text or binary payload, if text do not add a 2 byte length field, just the UTF characters.
          byteStream.set(payloadBytes, pos);
          break;
        //    	    case MESSAGE_TYPE.PUBREC:
        //    	    case MESSAGE_TYPE.PUBREL:
        //    	    case MESSAGE_TYPE.PUBCOMP:
        //    	    	break;

        case MESSAGE_TYPE.SUBSCRIBE:
          // SUBSCRIBE has a list of topic strings and request QoS
          for (var i = 0; i < this.topics.length; i++) {
            pos = writeString(this.topics[i], topicStrLength[i], byteStream, pos);
            byteStream[pos++] = this.requestedQos[i];
          }

          break;

        case MESSAGE_TYPE.UNSUBSCRIBE:
          // UNSUBSCRIBE has a list of topic strings
          for (var i = 0; i < this.topics.length; i++) pos = writeString(this.topics[i], topicStrLength[i], byteStream, pos);

          break;

        default: // Do nothing.

      }

      return buffer;
    };

    function decodeMessage(input, pos) {
      var startingPos = pos;
      var first = input[pos];
      var type = first >> 4;
      var messageInfo = first &= 0x0f;
      pos += 1; // Decode the remaining length (MBI format)

      var digit;
      var remLength = 0;
      var multiplier = 1;

      do {
        if (pos == input.length) {
          return [null, startingPos];
        }

        digit = input[pos++];
        remLength += (digit & 0x7F) * multiplier;
        multiplier *= 128;
      } while ((digit & 0x80) !== 0);

      var endPos = pos + remLength;

      if (endPos > input.length) {
        return [null, startingPos];
      }

      var wireMessage = new WireMessage(type);

      switch (type) {
        case MESSAGE_TYPE.CONNACK:
          var connectAcknowledgeFlags = input[pos++];
          if (connectAcknowledgeFlags & 0x01) wireMessage.sessionPresent = true;
          wireMessage.returnCode = input[pos++];
          break;

        case MESSAGE_TYPE.PUBLISH:
          var qos = messageInfo >> 1 & 0x03;
          var len = readUint16(input, pos);
          pos += 2;
          var topicName = parseUTF8(input, pos, len);
          pos += len; // If QoS 1 or 2 there will be a messageIdentifier

          if (qos > 0) {
            wireMessage.messageIdentifier = readUint16(input, pos);
            pos += 2;
          }

          var message = new Message(input.subarray(pos, endPos));
          if ((messageInfo & 0x01) == 0x01) message.retained = true;
          if ((messageInfo & 0x08) == 0x08) message.duplicate = true;
          message.qos = qos;
          message.destinationName = topicName;
          wireMessage.payloadMessage = message;
          break;

        case MESSAGE_TYPE.PUBACK:
        case MESSAGE_TYPE.PUBREC:
        case MESSAGE_TYPE.PUBREL:
        case MESSAGE_TYPE.PUBCOMP:
        case MESSAGE_TYPE.UNSUBACK:
          wireMessage.messageIdentifier = readUint16(input, pos);
          break;

        case MESSAGE_TYPE.SUBACK:
          wireMessage.messageIdentifier = readUint16(input, pos);
          pos += 2;
          wireMessage.returnCode = input.subarray(pos, endPos);
          break;

        default:
          break;
      }

      return [wireMessage, endPos];
    }

    function writeUint16(input, buffer, offset) {
      buffer[offset++] = input >> 8; //MSB

      buffer[offset++] = input % 256; //LSB

      return offset;
    }

    function writeString(input, utf8Length, buffer, offset) {
      offset = writeUint16(utf8Length, buffer, offset);
      stringToUTF8(input, buffer, offset);
      return offset + utf8Length;
    }

    function readUint16(buffer, offset) {
      return 256 * buffer[offset] + buffer[offset + 1];
    }
    /**
    * Encodes an MQTT Multi-Byte Integer
    * @private
    */


    function encodeMBI(number) {
      var output = new Array(1);
      var numBytes = 0;

      do {
        var digit = number % 128;
        number = number >> 7;

        if (number > 0) {
          digit |= 0x80;
        }

        output[numBytes++] = digit;
      } while (number > 0 && numBytes < 4);

      return output;
    }
    /**
    * Takes a String and calculates its length in bytes when encoded in UTF8.
    * @private
    */


    function UTF8Length(input) {
      var output = 0;

      for (var i = 0; i < input.length; i++) {
        var charCode = input.charCodeAt(i);

        if (charCode > 0x7FF) {
          // Surrogate pair means its a 4 byte character
          if (0xD800 <= charCode && charCode <= 0xDBFF) {
            i++;
            output++;
          }

          output += 3;
        } else if (charCode > 0x7F) output += 2;else output++;
      }

      return output;
    }
    /**
    * Takes a String and writes it into an array as UTF8 encoded bytes.
    * @private
    */


    function stringToUTF8(input, output, start) {
      var pos = start;

      for (var i = 0; i < input.length; i++) {
        var charCode = input.charCodeAt(i); // Check for a surrogate pair.

        if (0xD800 <= charCode && charCode <= 0xDBFF) {
          var lowCharCode = input.charCodeAt(++i);

          if (isNaN(lowCharCode)) {
            throw new Error(format(ERROR.MALFORMED_UNICODE, [charCode, lowCharCode]));
          }

          charCode = (charCode - 0xD800 << 10) + (lowCharCode - 0xDC00) + 0x10000;
        }

        if (charCode <= 0x7F) {
          output[pos++] = charCode;
        } else if (charCode <= 0x7FF) {
          output[pos++] = charCode >> 6 & 0x1F | 0xC0;
          output[pos++] = charCode & 0x3F | 0x80;
        } else if (charCode <= 0xFFFF) {
          output[pos++] = charCode >> 12 & 0x0F | 0xE0;
          output[pos++] = charCode >> 6 & 0x3F | 0x80;
          output[pos++] = charCode & 0x3F | 0x80;
        } else {
          output[pos++] = charCode >> 18 & 0x07 | 0xF0;
          output[pos++] = charCode >> 12 & 0x3F | 0x80;
          output[pos++] = charCode >> 6 & 0x3F | 0x80;
          output[pos++] = charCode & 0x3F | 0x80;
        }
      }

      return output;
    }

    function parseUTF8(input, offset, length) {
      var output = "";
      var utf16;
      var pos = offset;

      while (pos < offset + length) {
        var byte1 = input[pos++];
        if (byte1 < 128) utf16 = byte1;else {
          var byte2 = input[pos++] - 128;
          if (byte2 < 0) throw new Error(format(ERROR.MALFORMED_UTF, [byte1.toString(16), byte2.toString(16), ""]));
          if (byte1 < 0xE0) // 2 byte character
            utf16 = 64 * (byte1 - 0xC0) + byte2;else {
            var byte3 = input[pos++] - 128;
            if (byte3 < 0) throw new Error(format(ERROR.MALFORMED_UTF, [byte1.toString(16), byte2.toString(16), byte3.toString(16)]));
            if (byte1 < 0xF0) // 3 byte character
              utf16 = 4096 * (byte1 - 0xE0) + 64 * byte2 + byte3;else {
              var byte4 = input[pos++] - 128;
              if (byte4 < 0) throw new Error(format(ERROR.MALFORMED_UTF, [byte1.toString(16), byte2.toString(16), byte3.toString(16), byte4.toString(16)]));
              if (byte1 < 0xF8) // 4 byte character
                utf16 = 262144 * (byte1 - 0xF0) + 4096 * byte2 + 64 * byte3 + byte4;else // longer encodings are not supported
                throw new Error(format(ERROR.MALFORMED_UTF, [byte1.toString(16), byte2.toString(16), byte3.toString(16), byte4.toString(16)]));
            }
          }
        }

        if (utf16 > 0xFFFF) // 4 byte character - express as a surrogate pair
          {
            utf16 -= 0x10000;
            output += String.fromCharCode(0xD800 + (utf16 >> 10)); // lead character

            utf16 = 0xDC00 + (utf16 & 0x3FF); // trail character
          }

        output += String.fromCharCode(utf16);
      }

      return output;
    }
    /**
    * Repeat keepalive requests, monitor responses.
    * @ignore
    */


    var Pinger = function (client, keepAliveInterval) {
      this._client = client;
      this._keepAliveInterval = keepAliveInterval * 1000;
      this.isReset = false;
      var pingReq = new WireMessage(MESSAGE_TYPE.PINGREQ).encode();

      var doTimeout = function (pinger) {
        return function () {
          return doPing.apply(pinger);
        };
      };
      /** @ignore */


      var doPing = function () {
        if (!this.isReset) {
          this._client._trace("Pinger.doPing", "Timed out");

          this._client._disconnected(ERROR.PING_TIMEOUT.code, format(ERROR.PING_TIMEOUT));
        } else {
          this.isReset = false;

          this._client._trace("Pinger.doPing", "send PINGREQ");

          this._client.socket.send(pingReq);

          this.timeout = setTimeout(doTimeout(this), this._keepAliveInterval);
        }
      };

      this.reset = function () {
        this.isReset = true;
        clearTimeout(this.timeout);
        if (this._keepAliveInterval > 0) this.timeout = setTimeout(doTimeout(this), this._keepAliveInterval);
      };

      this.cancel = function () {
        clearTimeout(this.timeout);
      };
    };
    /**
    * Monitor request completion.
    * @ignore
    */


    var Timeout = function (client, timeoutSeconds, action, args) {
      if (!timeoutSeconds) timeoutSeconds = 30;

      var doTimeout = function (action, client, args) {
        return function () {
          return action.apply(client, args);
        };
      };

      this.timeout = setTimeout(doTimeout(action, client, args), timeoutSeconds * 1000);

      this.cancel = function () {
        clearTimeout(this.timeout);
      };
    };
    /**
     * Internal implementation of the Websockets MQTT V3.1 client.
     *
     * @name Paho.ClientImpl @constructor
     * @param {String} host the DNS nameof the webSocket host.
     * @param {Number} port the port number for that host.
     * @param {String} clientId the MQ client identifier.
     */


    var ClientImpl = function (uri, host, port, path, clientId) {
      // Check dependencies are satisfied in this browser.
      if (!("WebSocket" in global && global.WebSocket !== null)) {
        throw new Error(format(ERROR.UNSUPPORTED, ["WebSocket"]));
      }

      if (!("ArrayBuffer" in global && global.ArrayBuffer !== null)) {
        throw new Error(format(ERROR.UNSUPPORTED, ["ArrayBuffer"]));
      }

      this._trace("Paho.Client", uri, host, port, path, clientId);

      this.host = host;
      this.port = port;
      this.path = path;
      this.uri = uri;
      this.clientId = clientId;
      this._wsuri = null; // Local storagekeys are qualified with the following string.
      // The conditional inclusion of path in the key is for backward
      // compatibility to when the path was not configurable and assumed to
      // be /mqtt

      this._localKey = host + ":" + port + (path != "/mqtt" ? ":" + path : "") + ":" + clientId + ":"; // Create private instance-only message queue
      // Internal queue of messages to be sent, in sending order.

      this._msg_queue = [];
      this._buffered_msg_queue = []; // Messages we have sent and are expecting a response for, indexed by their respective message ids.

      this._sentMessages = {}; // Messages we have received and acknowleged and are expecting a confirm message for
      // indexed by their respective message ids.

      this._receivedMessages = {}; // Internal list of callbacks to be executed when messages
      // have been successfully sent over web socket, e.g. disconnect
      // when it doesn't have to wait for ACK, just message is dispatched.

      this._notify_msg_sent = {}; // Unique identifier for SEND messages, incrementing
      // counter as messages are sent.

      this._message_identifier = 1; // Used to determine the transmission sequence of stored sent messages.

      this._sequence = 0; // Load the local state, if any, from the saved version, only restore state relevant to this client.

      for (var key in localStorage) if (key.indexOf("Sent:" + this._localKey) === 0 || key.indexOf("Received:" + this._localKey) === 0) this.restore(key);
    }; // Messaging Client public instance members.


    ClientImpl.prototype.host = null;
    ClientImpl.prototype.port = null;
    ClientImpl.prototype.path = null;
    ClientImpl.prototype.uri = null;
    ClientImpl.prototype.clientId = null; // Messaging Client private instance members.

    ClientImpl.prototype.socket = null;
    /* true once we have received an acknowledgement to a CONNECT packet. */

    ClientImpl.prototype.connected = false;
    /* The largest message identifier allowed, may not be larger than 2**16 but
     * if set smaller reduces the maximum number of outbound messages allowed.
     */

    ClientImpl.prototype.maxMessageIdentifier = 65536;
    ClientImpl.prototype.connectOptions = null;
    ClientImpl.prototype.hostIndex = null;
    ClientImpl.prototype.onConnected = null;
    ClientImpl.prototype.onConnectionLost = null;
    ClientImpl.prototype.onMessageDelivered = null;
    ClientImpl.prototype.onMessageArrived = null;
    ClientImpl.prototype.traceFunction = null;
    ClientImpl.prototype._msg_queue = null;
    ClientImpl.prototype._buffered_msg_queue = null;
    ClientImpl.prototype._connectTimeout = null;
    /* The sendPinger monitors how long we allow before we send data to prove to the server that we are alive. */

    ClientImpl.prototype.sendPinger = null;
    /* The receivePinger monitors how long we allow before we require evidence that the server is alive. */

    ClientImpl.prototype.receivePinger = null;
    ClientImpl.prototype._reconnectInterval = 1; // Reconnect Delay, starts at 1 second

    ClientImpl.prototype._reconnecting = false;
    ClientImpl.prototype._reconnectTimeout = null;
    ClientImpl.prototype.disconnectedPublishing = false;
    ClientImpl.prototype.disconnectedBufferSize = 5000;
    ClientImpl.prototype.receiveBuffer = null;
    ClientImpl.prototype._traceBuffer = null;
    ClientImpl.prototype._MAX_TRACE_ENTRIES = 100;

    ClientImpl.prototype.connect = function (connectOptions) {
      var connectOptionsMasked = this._traceMask(connectOptions, "password");

      this._trace("Client.connect", connectOptionsMasked, this.socket, this.connected);

      if (this.connected) throw new Error(format(ERROR.INVALID_STATE, ["already connected"]));
      if (this.socket) throw new Error(format(ERROR.INVALID_STATE, ["already connected"]));

      if (this._reconnecting) {
        // connect() function is called while reconnect is in progress.
        // Terminate the auto reconnect process to use new connect options.
        this._reconnectTimeout.cancel();

        this._reconnectTimeout = null;
        this._reconnecting = false;
      }

      this.connectOptions = connectOptions;
      this._reconnectInterval = 1;
      this._reconnecting = false;

      if (connectOptions.uris) {
        this.hostIndex = 0;

        this._doConnect(connectOptions.uris[0]);
      } else {
        this._doConnect(this.uri);
      }
    };

    ClientImpl.prototype.subscribe = function (filter, subscribeOptions) {
      this._trace("Client.subscribe", filter, subscribeOptions);

      if (!this.connected) throw new Error(format(ERROR.INVALID_STATE, ["not connected"]));
      var wireMessage = new WireMessage(MESSAGE_TYPE.SUBSCRIBE);
      wireMessage.topics = filter.constructor === Array ? filter : [filter];
      if (subscribeOptions.qos === undefined) subscribeOptions.qos = 0;
      wireMessage.requestedQos = [];

      for (var i = 0; i < wireMessage.topics.length; i++) wireMessage.requestedQos[i] = subscribeOptions.qos;

      if (subscribeOptions.onSuccess) {
        wireMessage.onSuccess = function (grantedQos) {
          subscribeOptions.onSuccess({
            invocationContext: subscribeOptions.invocationContext,
            grantedQos: grantedQos
          });
        };
      }

      if (subscribeOptions.onFailure) {
        wireMessage.onFailure = function (errorCode) {
          subscribeOptions.onFailure({
            invocationContext: subscribeOptions.invocationContext,
            errorCode: errorCode,
            errorMessage: format(errorCode)
          });
        };
      }

      if (subscribeOptions.timeout) {
        wireMessage.timeOut = new Timeout(this, subscribeOptions.timeout, subscribeOptions.onFailure, [{
          invocationContext: subscribeOptions.invocationContext,
          errorCode: ERROR.SUBSCRIBE_TIMEOUT.code,
          errorMessage: format(ERROR.SUBSCRIBE_TIMEOUT)
        }]);
      } // All subscriptions return a SUBACK.


      this._requires_ack(wireMessage);

      this._schedule_message(wireMessage);
    };
    /** @ignore */


    ClientImpl.prototype.unsubscribe = function (filter, unsubscribeOptions) {
      this._trace("Client.unsubscribe", filter, unsubscribeOptions);

      if (!this.connected) throw new Error(format(ERROR.INVALID_STATE, ["not connected"]));
      var wireMessage = new WireMessage(MESSAGE_TYPE.UNSUBSCRIBE);
      wireMessage.topics = filter.constructor === Array ? filter : [filter];

      if (unsubscribeOptions.onSuccess) {
        wireMessage.callback = function () {
          unsubscribeOptions.onSuccess({
            invocationContext: unsubscribeOptions.invocationContext
          });
        };
      }

      if (unsubscribeOptions.timeout) {
        wireMessage.timeOut = new Timeout(this, unsubscribeOptions.timeout, unsubscribeOptions.onFailure, [{
          invocationContext: unsubscribeOptions.invocationContext,
          errorCode: ERROR.UNSUBSCRIBE_TIMEOUT.code,
          errorMessage: format(ERROR.UNSUBSCRIBE_TIMEOUT)
        }]);
      } // All unsubscribes return a SUBACK.


      this._requires_ack(wireMessage);

      this._schedule_message(wireMessage);
    };

    ClientImpl.prototype.send = function (message) {
      this._trace("Client.send", message);

      var wireMessage = new WireMessage(MESSAGE_TYPE.PUBLISH);
      wireMessage.payloadMessage = message;

      if (this.connected) {
        // Mark qos 1 & 2 message as "ACK required"
        // For qos 0 message, invoke onMessageDelivered callback if there is one.
        // Then schedule the message.
        if (message.qos > 0) {
          this._requires_ack(wireMessage);
        } else if (this.onMessageDelivered) {
          this._notify_msg_sent[wireMessage] = this.onMessageDelivered(wireMessage.payloadMessage);
        }

        this._schedule_message(wireMessage);
      } else {
        // Currently disconnected, will not schedule this message
        // Check if reconnecting is in progress and disconnected publish is enabled.
        if (this._reconnecting && this.disconnectedPublishing) {
          // Check the limit which include the "required ACK" messages
          var messageCount = Object.keys(this._sentMessages).length + this._buffered_msg_queue.length;

          if (messageCount > this.disconnectedBufferSize) {
            throw new Error(format(ERROR.BUFFER_FULL, [this.disconnectedBufferSize]));
          } else {
            if (message.qos > 0) {
              // Mark this message as "ACK required"
              this._requires_ack(wireMessage);
            } else {
              wireMessage.sequence = ++this._sequence; // Add messages in fifo order to array, by adding to start

              this._buffered_msg_queue.unshift(wireMessage);
            }
          }
        } else {
          throw new Error(format(ERROR.INVALID_STATE, ["not connected"]));
        }
      }
    };

    ClientImpl.prototype.disconnect = function () {
      this._trace("Client.disconnect");

      if (this._reconnecting) {
        // disconnect() function is called while reconnect is in progress.
        // Terminate the auto reconnect process.
        this._reconnectTimeout.cancel();

        this._reconnectTimeout = null;
        this._reconnecting = false;
      }

      if (!this.socket) throw new Error(format(ERROR.INVALID_STATE, ["not connecting or connected"]));
      var wireMessage = new WireMessage(MESSAGE_TYPE.DISCONNECT); // Run the disconnected call back as soon as the message has been sent,
      // in case of a failure later on in the disconnect processing.
      // as a consequence, the _disconected call back may be run several times.

      this._notify_msg_sent[wireMessage] = scope(this._disconnected, this);

      this._schedule_message(wireMessage);
    };

    ClientImpl.prototype.getTraceLog = function () {
      if (this._traceBuffer !== null) {
        this._trace("Client.getTraceLog", new Date());

        this._trace("Client.getTraceLog in flight messages", this._sentMessages.length);

        for (var key in this._sentMessages) this._trace("_sentMessages ", key, this._sentMessages[key]);

        for (var key in this._receivedMessages) this._trace("_receivedMessages ", key, this._receivedMessages[key]);

        return this._traceBuffer;
      }
    };

    ClientImpl.prototype.startTrace = function () {
      if (this._traceBuffer === null) {
        this._traceBuffer = [];
      }

      this._trace("Client.startTrace", new Date(), version);
    };

    ClientImpl.prototype.stopTrace = function () {
      delete this._traceBuffer;
    };

    ClientImpl.prototype._doConnect = function (wsurl) {
      // When the socket is open, this client will send the CONNECT WireMessage using the saved parameters.
      if (this.connectOptions.useSSL) {
        var uriParts = wsurl.split(":");
        uriParts[0] = "wss";
        wsurl = uriParts.join(":");
      }

      this._wsuri = wsurl;
      this.connected = false;

      if (this.connectOptions.mqttVersion < 4) {
        this.socket = new WebSocket(wsurl, ["mqttv3.1"]);
      } else {
        this.socket = new WebSocket(wsurl, ["mqtt"]);
      }

      this.socket.binaryType = "arraybuffer";
      this.socket.onopen = scope(this._on_socket_open, this);
      this.socket.onmessage = scope(this._on_socket_message, this);
      this.socket.onerror = scope(this._on_socket_error, this);
      this.socket.onclose = scope(this._on_socket_close, this);
      this.sendPinger = new Pinger(this, this.connectOptions.keepAliveInterval);
      this.receivePinger = new Pinger(this, this.connectOptions.keepAliveInterval);

      if (this._connectTimeout) {
        this._connectTimeout.cancel();

        this._connectTimeout = null;
      }

      this._connectTimeout = new Timeout(this, this.connectOptions.timeout, this._disconnected, [ERROR.CONNECT_TIMEOUT.code, format(ERROR.CONNECT_TIMEOUT)]);
    }; // Schedule a new message to be sent over the WebSockets
    // connection. CONNECT messages cause WebSocket connection
    // to be started. All other messages are queued internally
    // until this has happened. When WS connection starts, process
    // all outstanding messages.


    ClientImpl.prototype._schedule_message = function (message) {
      // Add messages in fifo order to array, by adding to start
      this._msg_queue.unshift(message); // Process outstanding messages in the queue if we have an  open socket, and have received CONNACK.


      if (this.connected) {
        this._process_queue();
      }
    };

    ClientImpl.prototype.store = function (prefix, wireMessage) {
      var storedMessage = {
        type: wireMessage.type,
        messageIdentifier: wireMessage.messageIdentifier,
        version: 1
      };

      switch (wireMessage.type) {
        case MESSAGE_TYPE.PUBLISH:
          if (wireMessage.pubRecReceived) storedMessage.pubRecReceived = true; // Convert the payload to a hex string.

          storedMessage.payloadMessage = {};
          var hex = "";
          var messageBytes = wireMessage.payloadMessage.payloadBytes;

          for (var i = 0; i < messageBytes.length; i++) {
            if (messageBytes[i] <= 0xF) hex = hex + "0" + messageBytes[i].toString(16);else hex = hex + messageBytes[i].toString(16);
          }

          storedMessage.payloadMessage.payloadHex = hex;
          storedMessage.payloadMessage.qos = wireMessage.payloadMessage.qos;
          storedMessage.payloadMessage.destinationName = wireMessage.payloadMessage.destinationName;
          if (wireMessage.payloadMessage.duplicate) storedMessage.payloadMessage.duplicate = true;
          if (wireMessage.payloadMessage.retained) storedMessage.payloadMessage.retained = true; // Add a sequence number to sent messages.

          if (prefix.indexOf("Sent:") === 0) {
            if (wireMessage.sequence === undefined) wireMessage.sequence = ++this._sequence;
            storedMessage.sequence = wireMessage.sequence;
          }

          break;

        default:
          throw Error(format(ERROR.INVALID_STORED_DATA, [prefix + this._localKey + wireMessage.messageIdentifier, storedMessage]));
      }

      localStorage.setItem(prefix + this._localKey + wireMessage.messageIdentifier, JSON.stringify(storedMessage));
    };

    ClientImpl.prototype.restore = function (key) {
      var value = localStorage.getItem(key);
      var storedMessage = JSON.parse(value);
      var wireMessage = new WireMessage(storedMessage.type, storedMessage);

      switch (storedMessage.type) {
        case MESSAGE_TYPE.PUBLISH:
          // Replace the payload message with a Message object.
          var hex = storedMessage.payloadMessage.payloadHex;
          var buffer = new ArrayBuffer(hex.length / 2);
          var byteStream = new Uint8Array(buffer);
          var i = 0;

          while (hex.length >= 2) {
            var x = parseInt(hex.substring(0, 2), 16);
            hex = hex.substring(2, hex.length);
            byteStream[i++] = x;
          }

          var payloadMessage = new Message(byteStream);
          payloadMessage.qos = storedMessage.payloadMessage.qos;
          payloadMessage.destinationName = storedMessage.payloadMessage.destinationName;
          if (storedMessage.payloadMessage.duplicate) payloadMessage.duplicate = true;
          if (storedMessage.payloadMessage.retained) payloadMessage.retained = true;
          wireMessage.payloadMessage = payloadMessage;
          break;

        default:
          throw Error(format(ERROR.INVALID_STORED_DATA, [key, value]));
      }

      if (key.indexOf("Sent:" + this._localKey) === 0) {
        wireMessage.payloadMessage.duplicate = true;
        this._sentMessages[wireMessage.messageIdentifier] = wireMessage;
      } else if (key.indexOf("Received:" + this._localKey) === 0) {
        this._receivedMessages[wireMessage.messageIdentifier] = wireMessage;
      }
    };

    ClientImpl.prototype._process_queue = function () {
      var message = null; // Send all queued messages down socket connection

      while (message = this._msg_queue.pop()) {
        this._socket_send(message); // Notify listeners that message was successfully sent


        if (this._notify_msg_sent[message]) {
          this._notify_msg_sent[message]();

          delete this._notify_msg_sent[message];
        }
      }
    };
    /**
    * Expect an ACK response for this message. Add message to the set of in progress
    * messages and set an unused identifier in this message.
    * @ignore
    */


    ClientImpl.prototype._requires_ack = function (wireMessage) {
      var messageCount = Object.keys(this._sentMessages).length;
      if (messageCount > this.maxMessageIdentifier) throw Error("Too many messages:" + messageCount);

      while (this._sentMessages[this._message_identifier] !== undefined) {
        this._message_identifier++;
      }

      wireMessage.messageIdentifier = this._message_identifier;
      this._sentMessages[wireMessage.messageIdentifier] = wireMessage;

      if (wireMessage.type === MESSAGE_TYPE.PUBLISH) {
        this.store("Sent:", wireMessage);
      }

      if (this._message_identifier === this.maxMessageIdentifier) {
        this._message_identifier = 1;
      }
    };
    /**
    * Called when the underlying websocket has been opened.
    * @ignore
    */


    ClientImpl.prototype._on_socket_open = function () {
      // Create the CONNECT message object.
      var wireMessage = new WireMessage(MESSAGE_TYPE.CONNECT, this.connectOptions);
      wireMessage.clientId = this.clientId;

      this._socket_send(wireMessage);
    };
    /**
    * Called when the underlying websocket has received a complete packet.
    * @ignore
    */


    ClientImpl.prototype._on_socket_message = function (event) {
      this._trace("Client._on_socket_message", event.data);

      var messages = this._deframeMessages(event.data);

      for (var i = 0; i < messages.length; i += 1) {
        this._handleMessage(messages[i]);
      }
    };

    ClientImpl.prototype._deframeMessages = function (data) {
      var byteArray = new Uint8Array(data);
      var messages = [];

      if (this.receiveBuffer) {
        var newData = new Uint8Array(this.receiveBuffer.length + byteArray.length);
        newData.set(this.receiveBuffer);
        newData.set(byteArray, this.receiveBuffer.length);
        byteArray = newData;
        delete this.receiveBuffer;
      }

      try {
        var offset = 0;

        while (offset < byteArray.length) {
          var result = decodeMessage(byteArray, offset);
          var wireMessage = result[0];
          offset = result[1];

          if (wireMessage !== null) {
            messages.push(wireMessage);
          } else {
            break;
          }
        }

        if (offset < byteArray.length) {
          this.receiveBuffer = byteArray.subarray(offset);
        }
      } catch (error) {
        var errorStack = error.hasOwnProperty("stack") == "undefined" ? error.stack.toString() : "No Error Stack Available";

        this._disconnected(ERROR.INTERNAL_ERROR.code, format(ERROR.INTERNAL_ERROR, [error.message, errorStack]));

        return;
      }

      return messages;
    };

    ClientImpl.prototype._handleMessage = function (wireMessage) {
      this._trace("Client._handleMessage", wireMessage);

      try {
        switch (wireMessage.type) {
          case MESSAGE_TYPE.CONNACK:
            this._connectTimeout.cancel();

            if (this._reconnectTimeout) this._reconnectTimeout.cancel(); // If we have started using clean session then clear up the local state.

            if (this.connectOptions.cleanSession) {
              for (var key in this._sentMessages) {
                var sentMessage = this._sentMessages[key];
                localStorage.removeItem("Sent:" + this._localKey + sentMessage.messageIdentifier);
              }

              this._sentMessages = {};

              for (var key in this._receivedMessages) {
                var receivedMessage = this._receivedMessages[key];
                localStorage.removeItem("Received:" + this._localKey + receivedMessage.messageIdentifier);
              }

              this._receivedMessages = {};
            } // Client connected and ready for business.


            if (wireMessage.returnCode === 0) {
              this.connected = true; // Jump to the end of the list of uris and stop looking for a good host.

              if (this.connectOptions.uris) this.hostIndex = this.connectOptions.uris.length;
            } else {
              this._disconnected(ERROR.CONNACK_RETURNCODE.code, format(ERROR.CONNACK_RETURNCODE, [wireMessage.returnCode, CONNACK_RC[wireMessage.returnCode]]));

              break;
            } // Resend messages.


            var sequencedMessages = [];

            for (var msgId in this._sentMessages) {
              if (this._sentMessages.hasOwnProperty(msgId)) sequencedMessages.push(this._sentMessages[msgId]);
            } // Also schedule qos 0 buffered messages if any


            if (this._buffered_msg_queue.length > 0) {
              var msg = null;

              while (msg = this._buffered_msg_queue.pop()) {
                sequencedMessages.push(msg);
                if (this.onMessageDelivered) this._notify_msg_sent[msg] = this.onMessageDelivered(msg.payloadMessage);
              }
            } // Sort sentMessages into the original sent order.


            var sequencedMessages = sequencedMessages.sort(function (a, b) {
              return a.sequence - b.sequence;
            });

            for (var i = 0, len = sequencedMessages.length; i < len; i++) {
              var sentMessage = sequencedMessages[i];

              if (sentMessage.type == MESSAGE_TYPE.PUBLISH && sentMessage.pubRecReceived) {
                var pubRelMessage = new WireMessage(MESSAGE_TYPE.PUBREL, {
                  messageIdentifier: sentMessage.messageIdentifier
                });

                this._schedule_message(pubRelMessage);
              } else {
                this._schedule_message(sentMessage);
              }
            } // Execute the connectOptions.onSuccess callback if there is one.
            // Will also now return if this connection was the result of an automatic
            // reconnect and which URI was successfully connected to.


            if (this.connectOptions.onSuccess) {
              this.connectOptions.onSuccess({
                invocationContext: this.connectOptions.invocationContext
              });
            }

            var reconnected = false;

            if (this._reconnecting) {
              reconnected = true;
              this._reconnectInterval = 1;
              this._reconnecting = false;
            } // Execute the onConnected callback if there is one.


            this._connected(reconnected, this._wsuri); // Process all queued messages now that the connection is established.


            this._process_queue();

            break;

          case MESSAGE_TYPE.PUBLISH:
            this._receivePublish(wireMessage);

            break;

          case MESSAGE_TYPE.PUBACK:
            var sentMessage = this._sentMessages[wireMessage.messageIdentifier]; // If this is a re flow of a PUBACK after we have restarted receivedMessage will not exist.

            if (sentMessage) {
              delete this._sentMessages[wireMessage.messageIdentifier];
              localStorage.removeItem("Sent:" + this._localKey + wireMessage.messageIdentifier);
              if (this.onMessageDelivered) this.onMessageDelivered(sentMessage.payloadMessage);
            }

            break;

          case MESSAGE_TYPE.PUBREC:
            var sentMessage = this._sentMessages[wireMessage.messageIdentifier]; // If this is a re flow of a PUBREC after we have restarted receivedMessage will not exist.

            if (sentMessage) {
              sentMessage.pubRecReceived = true;
              var pubRelMessage = new WireMessage(MESSAGE_TYPE.PUBREL, {
                messageIdentifier: wireMessage.messageIdentifier
              });
              this.store("Sent:", sentMessage);

              this._schedule_message(pubRelMessage);
            }

            break;

          case MESSAGE_TYPE.PUBREL:
            var receivedMessage = this._receivedMessages[wireMessage.messageIdentifier];
            localStorage.removeItem("Received:" + this._localKey + wireMessage.messageIdentifier); // If this is a re flow of a PUBREL after we have restarted receivedMessage will not exist.

            if (receivedMessage) {
              this._receiveMessage(receivedMessage);

              delete this._receivedMessages[wireMessage.messageIdentifier];
            } // Always flow PubComp, we may have previously flowed PubComp but the server lost it and restarted.


            var pubCompMessage = new WireMessage(MESSAGE_TYPE.PUBCOMP, {
              messageIdentifier: wireMessage.messageIdentifier
            });

            this._schedule_message(pubCompMessage);

            break;

          case MESSAGE_TYPE.PUBCOMP:
            var sentMessage = this._sentMessages[wireMessage.messageIdentifier];
            delete this._sentMessages[wireMessage.messageIdentifier];
            localStorage.removeItem("Sent:" + this._localKey + wireMessage.messageIdentifier);
            if (this.onMessageDelivered) this.onMessageDelivered(sentMessage.payloadMessage);
            break;

          case MESSAGE_TYPE.SUBACK:
            var sentMessage = this._sentMessages[wireMessage.messageIdentifier];

            if (sentMessage) {
              if (sentMessage.timeOut) sentMessage.timeOut.cancel(); // This will need to be fixed when we add multiple topic support

              if (wireMessage.returnCode[0] === 0x80) {
                if (sentMessage.onFailure) {
                  sentMessage.onFailure(wireMessage.returnCode);
                }
              } else if (sentMessage.onSuccess) {
                sentMessage.onSuccess(wireMessage.returnCode);
              }

              delete this._sentMessages[wireMessage.messageIdentifier];
            }

            break;

          case MESSAGE_TYPE.UNSUBACK:
            var sentMessage = this._sentMessages[wireMessage.messageIdentifier];

            if (sentMessage) {
              if (sentMessage.timeOut) sentMessage.timeOut.cancel();

              if (sentMessage.callback) {
                sentMessage.callback();
              }

              delete this._sentMessages[wireMessage.messageIdentifier];
            }

            break;

          case MESSAGE_TYPE.PINGRESP:
            /* The sendPinger or receivePinger may have sent a ping, the receivePinger has already been reset. */
            this.sendPinger.reset();
            break;

          case MESSAGE_TYPE.DISCONNECT:
            // Clients do not expect to receive disconnect packets.
            this._disconnected(ERROR.INVALID_MQTT_MESSAGE_TYPE.code, format(ERROR.INVALID_MQTT_MESSAGE_TYPE, [wireMessage.type]));

            break;

          default:
            this._disconnected(ERROR.INVALID_MQTT_MESSAGE_TYPE.code, format(ERROR.INVALID_MQTT_MESSAGE_TYPE, [wireMessage.type]));

        }
      } catch (error) {
        var errorStack = error.hasOwnProperty("stack") == "undefined" ? error.stack.toString() : "No Error Stack Available";

        this._disconnected(ERROR.INTERNAL_ERROR.code, format(ERROR.INTERNAL_ERROR, [error.message, errorStack]));

        return;
      }
    };
    /** @ignore */


    ClientImpl.prototype._on_socket_error = function (error) {
      if (!this._reconnecting) {
        this._disconnected(ERROR.SOCKET_ERROR.code, format(ERROR.SOCKET_ERROR, [error.data]));
      }
    };
    /** @ignore */


    ClientImpl.prototype._on_socket_close = function () {
      if (!this._reconnecting) {
        this._disconnected(ERROR.SOCKET_CLOSE.code, format(ERROR.SOCKET_CLOSE));
      }
    };
    /** @ignore */


    ClientImpl.prototype._socket_send = function (wireMessage) {
      if (wireMessage.type == 1) {
        var wireMessageMasked = this._traceMask(wireMessage, "password");

        this._trace("Client._socket_send", wireMessageMasked);
      } else this._trace("Client._socket_send", wireMessage);

      this.socket.send(wireMessage.encode());
      /* We have proved to the server we are alive. */

      this.sendPinger.reset();
    };
    /** @ignore */


    ClientImpl.prototype._receivePublish = function (wireMessage) {
      switch (wireMessage.payloadMessage.qos) {
        case "undefined":
        case 0:
          this._receiveMessage(wireMessage);

          break;

        case 1:
          var pubAckMessage = new WireMessage(MESSAGE_TYPE.PUBACK, {
            messageIdentifier: wireMessage.messageIdentifier
          });

          this._schedule_message(pubAckMessage);

          this._receiveMessage(wireMessage);

          break;

        case 2:
          this._receivedMessages[wireMessage.messageIdentifier] = wireMessage;
          this.store("Received:", wireMessage);
          var pubRecMessage = new WireMessage(MESSAGE_TYPE.PUBREC, {
            messageIdentifier: wireMessage.messageIdentifier
          });

          this._schedule_message(pubRecMessage);

          break;

        default:
          throw Error("Invaild qos=" + wireMessage.payloadMessage.qos);
      }
    };
    /** @ignore */


    ClientImpl.prototype._receiveMessage = function (wireMessage) {
      if (this.onMessageArrived) {
        this.onMessageArrived(wireMessage.payloadMessage);
      }
    };
    /**
    * Client has connected.
    * @param {reconnect} [boolean] indicate if this was a result of reconnect operation.
    * @param {uri} [string] fully qualified WebSocket URI of the server.
    */


    ClientImpl.prototype._connected = function (reconnect, uri) {
      // Execute the onConnected callback if there is one.
      if (this.onConnected) this.onConnected(reconnect, uri);
    };
    /**
    * Attempts to reconnect the client to the server.
     * For each reconnect attempt, will double the reconnect interval
     * up to 128 seconds.
    */


    ClientImpl.prototype._reconnect = function () {
      this._trace("Client._reconnect");

      if (!this.connected) {
        this._reconnecting = true;
        this.sendPinger.cancel();
        this.receivePinger.cancel();
        if (this._reconnectInterval < 128) this._reconnectInterval = this._reconnectInterval * 2;

        if (this.connectOptions.uris) {
          this.hostIndex = 0;

          this._doConnect(this.connectOptions.uris[0]);
        } else {
          this._doConnect(this.uri);
        }
      }
    };
    /**
    * Client has disconnected either at its own request or because the server
    * or network disconnected it. Remove all non-durable state.
    * @param {errorCode} [number] the error number.
    * @param {errorText} [string] the error text.
    * @ignore
    */


    ClientImpl.prototype._disconnected = function (errorCode, errorText) {
      this._trace("Client._disconnected", errorCode, errorText);

      if (errorCode !== undefined && this._reconnecting) {
        //Continue automatic reconnect process
        this._reconnectTimeout = new Timeout(this, this._reconnectInterval, this._reconnect);
        return;
      }

      this.sendPinger.cancel();
      this.receivePinger.cancel();

      if (this._connectTimeout) {
        this._connectTimeout.cancel();

        this._connectTimeout = null;
      } // Clear message buffers.


      this._msg_queue = [];
      this._buffered_msg_queue = [];
      this._notify_msg_sent = {};

      if (this.socket) {
        // Cancel all socket callbacks so that they cannot be driven again by this socket.
        this.socket.onopen = null;
        this.socket.onmessage = null;
        this.socket.onerror = null;
        this.socket.onclose = null;
        if (this.socket.readyState === 1) this.socket.close();
        delete this.socket;
      }

      if (this.connectOptions.uris && this.hostIndex < this.connectOptions.uris.length - 1) {
        // Try the next host.
        this.hostIndex++;

        this._doConnect(this.connectOptions.uris[this.hostIndex]);
      } else {
        if (errorCode === undefined) {
          errorCode = ERROR.OK.code;
          errorText = format(ERROR.OK);
        } // Run any application callbacks last as they may attempt to reconnect and hence create a new socket.


        if (this.connected) {
          this.connected = false; // Execute the connectionLostCallback if there is one, and we were connected.

          if (this.onConnectionLost) {
            this.onConnectionLost({
              errorCode: errorCode,
              errorMessage: errorText,
              reconnect: this.connectOptions.reconnect,
              uri: this._wsuri
            });
          }

          if (errorCode !== ERROR.OK.code && this.connectOptions.reconnect) {
            // Start automatic reconnect process for the very first time since last successful connect.
            this._reconnectInterval = 1;

            this._reconnect();

            return;
          }
        } else {
          // Otherwise we never had a connection, so indicate that the connect has failed.
          if (this.connectOptions.mqttVersion === 4 && this.connectOptions.mqttVersionExplicit === false) {
            this._trace("Failed to connect V4, dropping back to V3");

            this.connectOptions.mqttVersion = 3;

            if (this.connectOptions.uris) {
              this.hostIndex = 0;

              this._doConnect(this.connectOptions.uris[0]);
            } else {
              this._doConnect(this.uri);
            }
          } else if (this.connectOptions.onFailure) {
            this.connectOptions.onFailure({
              invocationContext: this.connectOptions.invocationContext,
              errorCode: errorCode,
              errorMessage: errorText
            });
          }
        }
      }
    };
    /** @ignore */


    ClientImpl.prototype._trace = function () {
      // Pass trace message back to client's callback function
      if (this.traceFunction) {
        var args = Array.prototype.slice.call(arguments);

        for (var i in args) {
          if (typeof args[i] !== "undefined") args.splice(i, 1, JSON.stringify(args[i]));
        }

        var record = args.join("");
        this.traceFunction({
          severity: "Debug",
          message: record
        });
      } //buffer style trace


      if (this._traceBuffer !== null) {
        for (var i = 0, max = arguments.length; i < max; i++) {
          if (this._traceBuffer.length == this._MAX_TRACE_ENTRIES) {
            this._traceBuffer.shift();
          }

          if (i === 0) this._traceBuffer.push(arguments[i]);else if (typeof arguments[i] === "undefined") this._traceBuffer.push(arguments[i]);else this._traceBuffer.push("  " + JSON.stringify(arguments[i]));
        }
      }
    };
    /** @ignore */


    ClientImpl.prototype._traceMask = function (traceObject, masked) {
      var traceObjectMasked = {};

      for (var attr in traceObject) {
        if (traceObject.hasOwnProperty(attr)) {
          if (attr == masked) traceObjectMasked[attr] = "******";else traceObjectMasked[attr] = traceObject[attr];
        }
      }

      return traceObjectMasked;
    }; // ------------------------------------------------------------------------
    // Public Programming interface.
    // ------------------------------------------------------------------------

    /**
    * The JavaScript application communicates to the server using a {@link Paho.Client} object.
    * <p>
    * Most applications will create just one Client object and then call its connect() method,
    * however applications can create more than one Client object if they wish.
    * In this case the combination of host, port and clientId attributes must be different for each Client object.
    * <p>
    * The send, subscribe and unsubscribe methods are implemented as asynchronous JavaScript methods
    * (even though the underlying protocol exchange might be synchronous in nature).
    * This means they signal their completion by calling back to the application,
    * via Success or Failure callback functions provided by the application on the method in question.
    * Such callbacks are called at most once per method invocation and do not persist beyond the lifetime
    * of the script that made the invocation.
    * <p>
    * In contrast there are some callback functions, most notably <i>onMessageArrived</i>,
    * that are defined on the {@link Paho.Client} object.
    * These may get called multiple times, and aren't directly related to specific method invocations made by the client.
    *
    * @name Paho.Client
    *
    * @constructor
    *
    * @param {string} host - the address of the messaging server, as a fully qualified WebSocket URI, as a DNS name or dotted decimal IP address.
    * @param {number} port - the port number to connect to - only required if host is not a URI
    * @param {string} path - the path on the host to connect to - only used if host is not a URI. Default: '/mqtt'.
    * @param {string} clientId - the Messaging client identifier, between 1 and 23 characters in length.
    *
    * @property {string} host - <i>read only</i> the server's DNS hostname or dotted decimal IP address.
    * @property {number} port - <i>read only</i> the server's port.
    * @property {string} path - <i>read only</i> the server's path.
    * @property {string} clientId - <i>read only</i> used when connecting to the server.
    * @property {function} onConnectionLost - called when a connection has been lost.
    *                            after a connect() method has succeeded.
    *                            Establish the call back used when a connection has been lost. The connection may be
    *                            lost because the client initiates a disconnect or because the server or network
    *                            cause the client to be disconnected. The disconnect call back may be called without
    *                            the connectionComplete call back being invoked if, for example the client fails to
    *                            connect.
    *                            A single response object parameter is passed to the onConnectionLost callback containing the following fields:
    *                            <ol>
    *                            <li>errorCode
    *                            <li>errorMessage
    *                            </ol>
    * @property {function} onMessageDelivered - called when a message has been delivered.
    *                            All processing that this Client will ever do has been completed. So, for example,
    *                            in the case of a Qos=2 message sent by this client, the PubComp flow has been received from the server
    *                            and the message has been removed from persistent storage before this callback is invoked.
    *                            Parameters passed to the onMessageDelivered callback are:
    *                            <ol>
    *                            <li>{@link Paho.Message} that was delivered.
    *                            </ol>
    * @property {function} onMessageArrived - called when a message has arrived in this Paho.client.
    *                            Parameters passed to the onMessageArrived callback are:
    *                            <ol>
    *                            <li>{@link Paho.Message} that has arrived.
    *                            </ol>
    * @property {function} onConnected - called when a connection is successfully made to the server.
    *                                  after a connect() method.
    *                                  Parameters passed to the onConnected callback are:
    *                                  <ol>
    *                                  <li>reconnect (boolean) - If true, the connection was the result of a reconnect.</li>
    *                                  <li>URI (string) - The URI used to connect to the server.</li>
    *                                  </ol>
    * @property {boolean} disconnectedPublishing - if set, will enable disconnected publishing in
    *                                            in the event that the connection to the server is lost.
    * @property {number} disconnectedBufferSize - Used to set the maximum number of messages that the disconnected
    *                                             buffer will hold before rejecting new messages. Default size: 5000 messages
    * @property {function} trace - called whenever trace is called. TODO
    */


    var Client = function (host, port, path, clientId) {
      var uri;
      if (typeof host !== "string") throw new Error(format(ERROR.INVALID_TYPE, [typeof host, "host"]));

      if (arguments.length == 2) {
        // host: must be full ws:// uri
        // port: clientId
        clientId = port;
        uri = host;
        var match = uri.match(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/);

        if (match) {
          host = match[4] || match[2];
          port = parseInt(match[7]);
          path = match[8];
        } else {
          throw new Error(format(ERROR.INVALID_ARGUMENT, [host, "host"]));
        }
      } else {
        if (arguments.length == 3) {
          clientId = path;
          path = "/mqtt";
        }

        if (typeof port !== "number" || port < 0) throw new Error(format(ERROR.INVALID_TYPE, [typeof port, "port"]));
        if (typeof path !== "string") throw new Error(format(ERROR.INVALID_TYPE, [typeof path, "path"]));
        var ipv6AddSBracket = host.indexOf(":") !== -1 && host.slice(0, 1) !== "[" && host.slice(-1) !== "]";
        uri = "ws://" + (ipv6AddSBracket ? "[" + host + "]" : host) + ":" + port + path;
      }

      var clientIdLength = 0;

      for (var i = 0; i < clientId.length; i++) {
        var charCode = clientId.charCodeAt(i);

        if (0xD800 <= charCode && charCode <= 0xDBFF) {
          i++; // Surrogate pair.
        }

        clientIdLength++;
      }

      if (typeof clientId !== "string" || clientIdLength > 65535) throw new Error(format(ERROR.INVALID_ARGUMENT, [clientId, "clientId"]));
      var client = new ClientImpl(uri, host, port, path, clientId); //Public Properties

      Object.defineProperties(this, {
        "host": {
          get: function () {
            return host;
          },
          set: function () {
            throw new Error(format(ERROR.UNSUPPORTED_OPERATION));
          }
        },
        "port": {
          get: function () {
            return port;
          },
          set: function () {
            throw new Error(format(ERROR.UNSUPPORTED_OPERATION));
          }
        },
        "path": {
          get: function () {
            return path;
          },
          set: function () {
            throw new Error(format(ERROR.UNSUPPORTED_OPERATION));
          }
        },
        "uri": {
          get: function () {
            return uri;
          },
          set: function () {
            throw new Error(format(ERROR.UNSUPPORTED_OPERATION));
          }
        },
        "clientId": {
          get: function () {
            return client.clientId;
          },
          set: function () {
            throw new Error(format(ERROR.UNSUPPORTED_OPERATION));
          }
        },
        "onConnected": {
          get: function () {
            return client.onConnected;
          },
          set: function (newOnConnected) {
            if (typeof newOnConnected === "function") client.onConnected = newOnConnected;else throw new Error(format(ERROR.INVALID_TYPE, [typeof newOnConnected, "onConnected"]));
          }
        },
        "disconnectedPublishing": {
          get: function () {
            return client.disconnectedPublishing;
          },
          set: function (newDisconnectedPublishing) {
            client.disconnectedPublishing = newDisconnectedPublishing;
          }
        },
        "disconnectedBufferSize": {
          get: function () {
            return client.disconnectedBufferSize;
          },
          set: function (newDisconnectedBufferSize) {
            client.disconnectedBufferSize = newDisconnectedBufferSize;
          }
        },
        "onConnectionLost": {
          get: function () {
            return client.onConnectionLost;
          },
          set: function (newOnConnectionLost) {
            if (typeof newOnConnectionLost === "function") client.onConnectionLost = newOnConnectionLost;else throw new Error(format(ERROR.INVALID_TYPE, [typeof newOnConnectionLost, "onConnectionLost"]));
          }
        },
        "onMessageDelivered": {
          get: function () {
            return client.onMessageDelivered;
          },
          set: function (newOnMessageDelivered) {
            if (typeof newOnMessageDelivered === "function") client.onMessageDelivered = newOnMessageDelivered;else throw new Error(format(ERROR.INVALID_TYPE, [typeof newOnMessageDelivered, "onMessageDelivered"]));
          }
        },
        "onMessageArrived": {
          get: function () {
            return client.onMessageArrived;
          },
          set: function (newOnMessageArrived) {
            if (typeof newOnMessageArrived === "function") client.onMessageArrived = newOnMessageArrived;else throw new Error(format(ERROR.INVALID_TYPE, [typeof newOnMessageArrived, "onMessageArrived"]));
          }
        },
        "trace": {
          get: function () {
            return client.traceFunction;
          },
          set: function (trace) {
            if (typeof trace === "function") {
              client.traceFunction = trace;
            } else {
              throw new Error(format(ERROR.INVALID_TYPE, [typeof trace, "onTrace"]));
            }
          }
        }
      });
      /**
      * Connect this Messaging client to its server.
      *
      * @name Paho.Client#connect
      * @function
      * @param {object} connectOptions - Attributes used with the connection.
      * @param {number} connectOptions.timeout - If the connect has not succeeded within this
      *                    number of seconds, it is deemed to have failed.
      *                    The default is 30 seconds.
      * @param {string} connectOptions.userName - Authentication username for this connection.
      * @param {string} connectOptions.password - Authentication password for this connection.
      * @param {Paho.Message} connectOptions.willMessage - sent by the server when the client
      *                    disconnects abnormally.
      * @param {number} connectOptions.keepAliveInterval - the server disconnects this client if
      *                    there is no activity for this number of seconds.
      *                    The default value of 60 seconds is assumed if not set.
      * @param {boolean} connectOptions.cleanSession - if true(default) the client and server
      *                    persistent state is deleted on successful connect.
      * @param {boolean} connectOptions.useSSL - if present and true, use an SSL Websocket connection.
      * @param {object} connectOptions.invocationContext - passed to the onSuccess callback or onFailure callback.
      * @param {function} connectOptions.onSuccess - called when the connect acknowledgement
      *                    has been received from the server.
      * A single response object parameter is passed to the onSuccess callback containing the following fields:
      * <ol>
      * <li>invocationContext as passed in to the onSuccess method in the connectOptions.
      * </ol>
      * @param {function} connectOptions.onFailure - called when the connect request has failed or timed out.
      * A single response object parameter is passed to the onFailure callback containing the following fields:
      * <ol>
      * <li>invocationContext as passed in to the onFailure method in the connectOptions.
      * <li>errorCode a number indicating the nature of the error.
      * <li>errorMessage text describing the error.
      * </ol>
      * @param {array} connectOptions.hosts - If present this contains either a set of hostnames or fully qualified
      * WebSocket URIs (ws://iot.eclipse.org:80/ws), that are tried in order in place
      * of the host and port paramater on the construtor. The hosts are tried one at at time in order until
      * one of then succeeds.
      * @param {array} connectOptions.ports - If present the set of ports matching the hosts. If hosts contains URIs, this property
      * is not used.
      * @param {boolean} connectOptions.reconnect - Sets whether the client will automatically attempt to reconnect
      * to the server if the connection is lost.
      *<ul>
      *<li>If set to false, the client will not attempt to automatically reconnect to the server in the event that the
      * connection is lost.</li>
      *<li>If set to true, in the event that the connection is lost, the client will attempt to reconnect to the server.
      * It will initially wait 1 second before it attempts to reconnect, for every failed reconnect attempt, the delay
      * will double until it is at 2 minutes at which point the delay will stay at 2 minutes.</li>
      *</ul>
      * @param {number} connectOptions.mqttVersion - The version of MQTT to use to connect to the MQTT Broker.
      *<ul>
      *<li>3 - MQTT V3.1</li>
      *<li>4 - MQTT V3.1.1</li>
      *</ul>
      * @param {boolean} connectOptions.mqttVersionExplicit - If set to true, will force the connection to use the
      * selected MQTT Version or will fail to connect.
      * @param {array} connectOptions.uris - If present, should contain a list of fully qualified WebSocket uris
      * (e.g. ws://iot.eclipse.org:80/ws), that are tried in order in place of the host and port parameter of the construtor.
      * The uris are tried one at a time in order until one of them succeeds. Do not use this in conjunction with hosts as
      * the hosts array will be converted to uris and will overwrite this property.
      * @throws {InvalidState} If the client is not in disconnected state. The client must have received connectionLost
      * or disconnected before calling connect for a second or subsequent time.
      */

      this.connect = function (connectOptions) {
        connectOptions = connectOptions || {};
        validate(connectOptions, {
          timeout: "number",
          userName: "string",
          password: "string",
          willMessage: "object",
          keepAliveInterval: "number",
          cleanSession: "boolean",
          useSSL: "boolean",
          invocationContext: "object",
          onSuccess: "function",
          onFailure: "function",
          hosts: "object",
          ports: "object",
          reconnect: "boolean",
          mqttVersion: "number",
          mqttVersionExplicit: "boolean",
          uris: "object"
        }); // If no keep alive interval is set, assume 60 seconds.

        if (connectOptions.keepAliveInterval === undefined) connectOptions.keepAliveInterval = 60;

        if (connectOptions.mqttVersion > 4 || connectOptions.mqttVersion < 3) {
          throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.mqttVersion, "connectOptions.mqttVersion"]));
        }

        if (connectOptions.mqttVersion === undefined) {
          connectOptions.mqttVersionExplicit = false;
          connectOptions.mqttVersion = 4;
        } else {
          connectOptions.mqttVersionExplicit = true;
        } //Check that if password is set, so is username


        if (connectOptions.password !== undefined && connectOptions.userName === undefined) throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.password, "connectOptions.password"]));

        if (connectOptions.willMessage) {
          if (!(connectOptions.willMessage instanceof Message)) throw new Error(format(ERROR.INVALID_TYPE, [connectOptions.willMessage, "connectOptions.willMessage"])); // The will message must have a payload that can be represented as a string.
          // Cause the willMessage to throw an exception if this is not the case.

          connectOptions.willMessage.stringPayload = null;
          if (typeof connectOptions.willMessage.destinationName === "undefined") throw new Error(format(ERROR.INVALID_TYPE, [typeof connectOptions.willMessage.destinationName, "connectOptions.willMessage.destinationName"]));
        }

        if (typeof connectOptions.cleanSession === "undefined") connectOptions.cleanSession = true;

        if (connectOptions.hosts) {
          if (!(connectOptions.hosts instanceof Array)) throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.hosts, "connectOptions.hosts"]));
          if (connectOptions.hosts.length < 1) throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.hosts, "connectOptions.hosts"]));
          var usingURIs = false;

          for (var i = 0; i < connectOptions.hosts.length; i++) {
            if (typeof connectOptions.hosts[i] !== "string") throw new Error(format(ERROR.INVALID_TYPE, [typeof connectOptions.hosts[i], "connectOptions.hosts[" + i + "]"]));

            if (/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/.test(connectOptions.hosts[i])) {
              if (i === 0) {
                usingURIs = true;
              } else if (!usingURIs) {
                throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.hosts[i], "connectOptions.hosts[" + i + "]"]));
              }
            } else if (usingURIs) {
              throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.hosts[i], "connectOptions.hosts[" + i + "]"]));
            }
          }

          if (!usingURIs) {
            if (!connectOptions.ports) throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.ports, "connectOptions.ports"]));
            if (!(connectOptions.ports instanceof Array)) throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.ports, "connectOptions.ports"]));
            if (connectOptions.hosts.length !== connectOptions.ports.length) throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.ports, "connectOptions.ports"]));
            connectOptions.uris = [];

            for (var i = 0; i < connectOptions.hosts.length; i++) {
              if (typeof connectOptions.ports[i] !== "number" || connectOptions.ports[i] < 0) throw new Error(format(ERROR.INVALID_TYPE, [typeof connectOptions.ports[i], "connectOptions.ports[" + i + "]"]));
              var host = connectOptions.hosts[i];
              var port = connectOptions.ports[i];
              var ipv6 = host.indexOf(":") !== -1;
              uri = "ws://" + (ipv6 ? "[" + host + "]" : host) + ":" + port + path;
              connectOptions.uris.push(uri);
            }
          } else {
            connectOptions.uris = connectOptions.hosts;
          }
        }

        client.connect(connectOptions);
      };
      /**
      * Subscribe for messages, request receipt of a copy of messages sent to the destinations described by the filter.
      *
      * @name Paho.Client#subscribe
      * @function
      * @param {string} filter describing the destinations to receive messages from.
      * <br>
      * @param {object} subscribeOptions - used to control the subscription
      *
      * @param {number} subscribeOptions.qos - the maximum qos of any publications sent
      *                                  as a result of making this subscription.
      * @param {object} subscribeOptions.invocationContext - passed to the onSuccess callback
      *                                  or onFailure callback.
      * @param {function} subscribeOptions.onSuccess - called when the subscribe acknowledgement
      *                                  has been received from the server.
      *                                  A single response object parameter is passed to the onSuccess callback containing the following fields:
      *                                  <ol>
      *                                  <li>invocationContext if set in the subscribeOptions.
      *                                  </ol>
      * @param {function} subscribeOptions.onFailure - called when the subscribe request has failed or timed out.
      *                                  A single response object parameter is passed to the onFailure callback containing the following fields:
      *                                  <ol>
      *                                  <li>invocationContext - if set in the subscribeOptions.
      *                                  <li>errorCode - a number indicating the nature of the error.
      *                                  <li>errorMessage - text describing the error.
      *                                  </ol>
      * @param {number} subscribeOptions.timeout - which, if present, determines the number of
      *                                  seconds after which the onFailure calback is called.
      *                                  The presence of a timeout does not prevent the onSuccess
      *                                  callback from being called when the subscribe completes.
      * @throws {InvalidState} if the client is not in connected state.
      */


      this.subscribe = function (filter, subscribeOptions) {
        if (typeof filter !== "string" && filter.constructor !== Array) throw new Error("Invalid argument:" + filter);
        subscribeOptions = subscribeOptions || {};
        validate(subscribeOptions, {
          qos: "number",
          invocationContext: "object",
          onSuccess: "function",
          onFailure: "function",
          timeout: "number"
        });
        if (subscribeOptions.timeout && !subscribeOptions.onFailure) throw new Error("subscribeOptions.timeout specified with no onFailure callback.");
        if (typeof subscribeOptions.qos !== "undefined" && !(subscribeOptions.qos === 0 || subscribeOptions.qos === 1 || subscribeOptions.qos === 2)) throw new Error(format(ERROR.INVALID_ARGUMENT, [subscribeOptions.qos, "subscribeOptions.qos"]));
        client.subscribe(filter, subscribeOptions);
      };
      /**
       * Unsubscribe for messages, stop receiving messages sent to destinations described by the filter.
       *
       * @name Paho.Client#unsubscribe
       * @function
       * @param {string} filter - describing the destinations to receive messages from.
       * @param {object} unsubscribeOptions - used to control the subscription
       * @param {object} unsubscribeOptions.invocationContext - passed to the onSuccess callback
      									  or onFailure callback.
       * @param {function} unsubscribeOptions.onSuccess - called when the unsubscribe acknowledgement has been received from the server.
       *                                    A single response object parameter is passed to the
       *                                    onSuccess callback containing the following fields:
       *                                    <ol>
       *                                    <li>invocationContext - if set in the unsubscribeOptions.
       *                                    </ol>
       * @param {function} unsubscribeOptions.onFailure called when the unsubscribe request has failed or timed out.
       *                                    A single response object parameter is passed to the onFailure callback containing the following fields:
       *                                    <ol>
       *                                    <li>invocationContext - if set in the unsubscribeOptions.
       *                                    <li>errorCode - a number indicating the nature of the error.
       *                                    <li>errorMessage - text describing the error.
       *                                    </ol>
       * @param {number} unsubscribeOptions.timeout - which, if present, determines the number of seconds
       *                                    after which the onFailure callback is called. The presence of
       *                                    a timeout does not prevent the onSuccess callback from being
       *                                    called when the unsubscribe completes
       * @throws {InvalidState} if the client is not in connected state.
       */


      this.unsubscribe = function (filter, unsubscribeOptions) {
        if (typeof filter !== "string" && filter.constructor !== Array) throw new Error("Invalid argument:" + filter);
        unsubscribeOptions = unsubscribeOptions || {};
        validate(unsubscribeOptions, {
          invocationContext: "object",
          onSuccess: "function",
          onFailure: "function",
          timeout: "number"
        });
        if (unsubscribeOptions.timeout && !unsubscribeOptions.onFailure) throw new Error("unsubscribeOptions.timeout specified with no onFailure callback.");
        client.unsubscribe(filter, unsubscribeOptions);
      };
      /**
      * Send a message to the consumers of the destination in the Message.
      *
      * @name Paho.Client#send
      * @function
      * @param {string|Paho.Message} topic - <b>mandatory</b> The name of the destination to which the message is to be sent.
      * 					   - If it is the only parameter, used as Paho.Message object.
      * @param {String|ArrayBuffer} payload - The message data to be sent.
      * @param {number} qos The Quality of Service used to deliver the message.
      * 		<dl>
      * 			<dt>0 Best effort (default).
      *     			<dt>1 At least once.
      *     			<dt>2 Exactly once.
      * 		</dl>
      * @param {Boolean} retained If true, the message is to be retained by the server and delivered
      *                     to both current and future subscriptions.
      *                     If false the server only delivers the message to current subscribers, this is the default for new Messages.
      *                     A received message has the retained boolean set to true if the message was published
      *                     with the retained boolean set to true
      *                     and the subscrption was made after the message has been published.
      * @throws {InvalidState} if the client is not connected.
      */


      this.send = function (topic, payload, qos, retained) {
        var message;

        if (arguments.length === 0) {
          throw new Error("Invalid argument." + "length");
        } else if (arguments.length == 1) {
          if (!(topic instanceof Message) && typeof topic !== "string") throw new Error("Invalid argument:" + typeof topic);
          message = topic;
          if (typeof message.destinationName === "undefined") throw new Error(format(ERROR.INVALID_ARGUMENT, [message.destinationName, "Message.destinationName"]));
          client.send(message);
        } else {
          //parameter checking in Message object
          message = new Message(payload);
          message.destinationName = topic;
          if (arguments.length >= 3) message.qos = qos;
          if (arguments.length >= 4) message.retained = retained;
          client.send(message);
        }
      };
      /**
      * Publish a message to the consumers of the destination in the Message.
      * Synonym for Paho.Mqtt.Client#send
      *
      * @name Paho.Client#publish
      * @function
      * @param {string|Paho.Message} topic - <b>mandatory</b> The name of the topic to which the message is to be published.
      * 					   - If it is the only parameter, used as Paho.Message object.
      * @param {String|ArrayBuffer} payload - The message data to be published.
      * @param {number} qos The Quality of Service used to deliver the message.
      * 		<dl>
      * 			<dt>0 Best effort (default).
      *     			<dt>1 At least once.
      *     			<dt>2 Exactly once.
      * 		</dl>
      * @param {Boolean} retained If true, the message is to be retained by the server and delivered
      *                     to both current and future subscriptions.
      *                     If false the server only delivers the message to current subscribers, this is the default for new Messages.
      *                     A received message has the retained boolean set to true if the message was published
      *                     with the retained boolean set to true
      *                     and the subscrption was made after the message has been published.
      * @throws {InvalidState} if the client is not connected.
      */


      this.publish = function (topic, payload, qos, retained) {
        var message;

        if (arguments.length === 0) {
          throw new Error("Invalid argument." + "length");
        } else if (arguments.length == 1) {
          if (!(topic instanceof Message) && typeof topic !== "string") throw new Error("Invalid argument:" + typeof topic);
          message = topic;
          if (typeof message.destinationName === "undefined") throw new Error(format(ERROR.INVALID_ARGUMENT, [message.destinationName, "Message.destinationName"]));
          client.send(message);
        } else {
          //parameter checking in Message object
          message = new Message(payload);
          message.destinationName = topic;
          if (arguments.length >= 3) message.qos = qos;
          if (arguments.length >= 4) message.retained = retained;
          client.send(message);
        }
      };
      /**
      * Normal disconnect of this Messaging client from its server.
      *
      * @name Paho.Client#disconnect
      * @function
      * @throws {InvalidState} if the client is already disconnected.
      */


      this.disconnect = function () {
        client.disconnect();
      };
      /**
      * Get the contents of the trace log.
      *
      * @name Paho.Client#getTraceLog
      * @function
      * @return {Object[]} tracebuffer containing the time ordered trace records.
      */


      this.getTraceLog = function () {
        return client.getTraceLog();
      };
      /**
      * Start tracing.
      *
      * @name Paho.Client#startTrace
      * @function
      */


      this.startTrace = function () {
        client.startTrace();
      };
      /**
      * Stop tracing.
      *
      * @name Paho.Client#stopTrace
      * @function
      */


      this.stopTrace = function () {
        client.stopTrace();
      };

      this.isConnected = function () {
        return client.connected;
      };
    };
    /**
    * An application message, sent or received.
    * <p>
    * All attributes may be null, which implies the default values.
    *
    * @name Paho.Message
    * @constructor
    * @param {String|ArrayBuffer} payload The message data to be sent.
    * <p>
    * @property {string} payloadString <i>read only</i> The payload as a string if the payload consists of valid UTF-8 characters.
    * @property {ArrayBuffer} payloadBytes <i>read only</i> The payload as an ArrayBuffer.
    * <p>
    * @property {string} destinationName <b>mandatory</b> The name of the destination to which the message is to be sent
    *                    (for messages about to be sent) or the name of the destination from which the message has been received.
    *                    (for messages received by the onMessage function).
    * <p>
    * @property {number} qos The Quality of Service used to deliver the message.
    * <dl>
    *     <dt>0 Best effort (default).
    *     <dt>1 At least once.
    *     <dt>2 Exactly once.
    * </dl>
    * <p>
    * @property {Boolean} retained If true, the message is to be retained by the server and delivered
    *                     to both current and future subscriptions.
    *                     If false the server only delivers the message to current subscribers, this is the default for new Messages.
    *                     A received message has the retained boolean set to true if the message was published
    *                     with the retained boolean set to true
    *                     and the subscrption was made after the message has been published.
    * <p>
    * @property {Boolean} duplicate <i>read only</i> If true, this message might be a duplicate of one which has already been received.
    *                     This is only set on messages received from the server.
    *
    */


    var Message = function (newPayload) {
      var payload;

      if (typeof newPayload === "string" || newPayload instanceof ArrayBuffer || ArrayBuffer.isView(newPayload) && !(newPayload instanceof DataView)) {
        payload = newPayload;
      } else {
        throw format(ERROR.INVALID_ARGUMENT, [newPayload, "newPayload"]);
      }

      var destinationName;
      var qos = 0;
      var retained = false;
      var duplicate = false;
      Object.defineProperties(this, {
        "payloadString": {
          enumerable: true,
          get: function () {
            if (typeof payload === "string") return payload;else return parseUTF8(payload, 0, payload.length);
          }
        },
        "payloadBytes": {
          enumerable: true,
          get: function () {
            if (typeof payload === "string") {
              var buffer = new ArrayBuffer(UTF8Length(payload));
              var byteStream = new Uint8Array(buffer);
              stringToUTF8(payload, byteStream, 0);
              return byteStream;
            } else {
              return payload;
            }
          }
        },
        "destinationName": {
          enumerable: true,
          get: function () {
            return destinationName;
          },
          set: function (newDestinationName) {
            if (typeof newDestinationName === "string") destinationName = newDestinationName;else throw new Error(format(ERROR.INVALID_ARGUMENT, [newDestinationName, "newDestinationName"]));
          }
        },
        "qos": {
          enumerable: true,
          get: function () {
            return qos;
          },
          set: function (newQos) {
            if (newQos === 0 || newQos === 1 || newQos === 2) qos = newQos;else throw new Error("Invalid argument:" + newQos);
          }
        },
        "retained": {
          enumerable: true,
          get: function () {
            return retained;
          },
          set: function (newRetained) {
            if (typeof newRetained === "boolean") retained = newRetained;else throw new Error(format(ERROR.INVALID_ARGUMENT, [newRetained, "newRetained"]));
          }
        },
        "topic": {
          enumerable: true,
          get: function () {
            return destinationName;
          },
          set: function (newTopic) {
            destinationName = newTopic;
          }
        },
        "duplicate": {
          enumerable: true,
          get: function () {
            return duplicate;
          },
          set: function (newDuplicate) {
            duplicate = newDuplicate;
          }
        }
      });
    }; // Module contents.


    return {
      Client: Client,
      Message: Message
    }; // eslint-disable-next-line no-nested-ternary
  }(typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});

  return PahoMQTT;
});

/***/ }),

/***/ 9829:
/*!**********************************************!*\
  !*** ./node_modules/rsup-mqtt/dist/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Paho = _interopDefault(__webpack_require__(/*! paho-mqtt */ 5086));
var EventEmitter = _interopDefault(__webpack_require__(/*! @byungi/event-emitter */ 6867));
var deepExtend = _interopDefault(__webpack_require__(/*! deep-extend */ 2228));

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(topic, client) {
    _classCallCheck(this, Subscription);

    this._topic = topic;
    this._client = client;
  }

  _createClass(Subscription, [{
    key: "on",
    value: function on(listener) {
      this._client.onMessage(this._topic, listener);

      return this;
    }
  }, {
    key: "once",
    value: function once(listener) {
      this._client.once("message:".concat(this._topic), listener);

      return this;
    }
  }, {
    key: "off",
    value: function off(listener) {
      this._client.removeMessageListener(this._topic, listener);

      return this;
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      var removeListeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this._client.unsubscribe(this._topic, removeListeners);

      return this;
    }
  }, {
    key: "send",
    value: function send() {
      var _this$_client;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_this$_client = this._client).send.apply(_this$_client, [this._topic].concat(args));

      return this;
    }
  }, {
    key: "publish",
    value: function publish() {
      this.send.apply(this, arguments);
      return this;
    }
  }, {
    key: "topic",
    get: function get() {
      return this._topic;
    }
  }]);

  return Subscription;
}();

var Message =
/*#__PURE__*/
function () {
  function Message(pahoMessage) {
    _classCallCheck(this, Message);

    this._pahoMessage = pahoMessage;
  }

  _createClass(Message, [{
    key: "toString",
    value: function toString() {
      return this._pahoMessage.payloadString;
    }
  }, {
    key: "topic",
    get: function get() {
      return this._pahoMessage.destinationName;
    }
  }, {
    key: "json",
    get: function get() {
      try {
        return JSON.parse(this.string);
      } catch (err) {}
    }
  }, {
    key: "string",
    get: function get() {
      return this._pahoMessage.payloadString;
    }
  }, {
    key: "bytes",
    get: function get() {
      return this._pahoMessage.payloadBytes;
    }
  }, {
    key: "qos",
    get: function get() {
      return this._pahoMessage.qos;
    }
  }, {
    key: "dup",
    get: function get() {
      return this._pahoMessage.duplicate;
    }
  }, {
    key: "retain",
    get: function get() {
      return this._pahoMessage.retained;
    }
  }]);

  return Message;
}();

function makePahoMessage(topic, payload) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (_typeof(payload) === 'object' && !isBuffer(payload)) {
    payload = JSON.stringify(payload);
  }

  var message = new Paho.Message(payload);
  message.destinationName = topic;
  message.qos = opts.qos || 0;
  message.retained = !!(opts.retain || opts.retained);
  return message;
}

function isBuffer(value) {
  return value instanceof ArrayBuffer || ArrayBuffer.isView(value);
}

function pahoConnect (paho) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Promise(function (resolve, reject) {
    paho.connect(deepExtend(opts, {
      onSuccess: resolve,
      onFailure: function onFailure(error) {
        return reject(error);
      }
    }));
  });
}

var ERROR = {
  OK: 0,
  CONNECT_TIMEOUT: 1,
  SUBSCRIBE_TIMEOUT: 2,
  UNSUBSCRIBE_TIMEOUT: 3,
  PING_TIMEOUT: 4,
  INTERNAL_ERROR: 5,
  CONNACK_RETURNCODE: 6,
  SOCKET_ERROR: 7,
  SOCKET_CLOSE: 8,
  MALFORMED_UTF: 9,
  UNSUPPORTED: 10,
  INVALID_STATE: 11,
  INVALID_TYPE: 12,
  INVALID_ARGUMENT: 13,
  UNSUPPORTED_OPERATION: 14,
  INVALID_STORED_DATA: 15,
  INVALID_MQTT_MESSAGE_TYPE: 16,
  MALFORMED_UNICODE: 17,
  BUFFER_FULL: 18
};

var ClientError =
/*#__PURE__*/
function (_Error) {
  _inherits(ClientError, _Error);

  function ClientError(code, message) {
    var _this;

    _classCallCheck(this, ClientError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ClientError).call(this, message));
    _this.name = 'ClientError';
    _this.code = code;

    _this.is = function (code) {
      return _this.code === code;
    };

    _this.occurred = function () {
      return _this.code !== 0;
    };

    return _this;
  }

  return ClientError;
}(_wrapNativeSuper(Error));

var Client =
/*#__PURE__*/
function () {
  function Client(_ref) {
    var paho = _ref.paho,
        pahoOpts = _ref.pahoOpts;

    _classCallCheck(this, Client);

    this._paho = paho;
    this._pahoOpts = pahoOpts;
    this._subscriptions = {};
    this._emitter = new EventEmitter();
    paho.onMessageArrived = this._handleOnMessage.bind(this);
    paho.onMessageDelivered = this._handleOnSent.bind(this);
    paho.onConnectionLost = this._handleOnClose.bind(this);
  }

  _createClass(Client, [{
    key: "isConnected",
    value: function isConnected() {
      return this._paho.isConnected();
    }
  }, {
    key: "_handleOnMessage",
    value: function _handleOnMessage(pahoMessage) {
      var message = new Message(pahoMessage);
      var topic = message.topic;

      this._emitter.emit("message:".concat(topic), message);

      this._emitter.emit('message', topic, message);
    }
  }, {
    key: "_handleOnSent",
    value: function _handleOnSent(pahoMessage) {
      var message = new Message(pahoMessage);
      var topic = message.topic;

      this._emitter.emit("sent:".concat(topic), message);

      this._emitter.emit('sent', topic, message);
    }
  }, {
    key: "_handleOnClose",
    value: function _handleOnClose(_ref2) {
      var errorCode = _ref2.errorCode,
          errorMessage = _ref2.errorMessage,
          reconnect = _ref2.reconnect;
      var err = new ClientError(errorCode, errorMessage);

      if (reconnect) {
        this._emitter.emit('reconnect', err);
      } else {
        this._emitter.emit('close', err);
      } // for error handling


      if (!err.occurred()) return;

      if (!this._emitter.has('error')) {
        throw err;
      } else {
        this._emitter.emit('error', err);
      }
    }
  }, {
    key: "on",
    value: function on(eventName, listener) {
      this._emitter.on(eventName, listener);
    }
  }, {
    key: "onMessage",
    value: function onMessage(topic, listener) {
      this.on("message:".concat(topic), listener);
    }
  }, {
    key: "onSent",
    value: function onSent(topic, listener) {
      this.on("sent:".concat(topic), listener);
    }
  }, {
    key: "once",
    value: function once(eventName, listener) {
      this._emitter.once(eventName, listener);
    }
  }, {
    key: "off",
    value: function off(eventName, listener) {
      this._emitter.off(eventName, listener);
    }
  }, {
    key: "removeMessageListener",
    value: function removeMessageListener(topic, listener) {
      this.off("message:".concat(topic), listener);
    }
  }, {
    key: "removeSentListener",
    value: function removeSentListener(topic, listener) {
      this.off("sent:".concat(topic), listener);
    }
  }, {
    key: "subscribe",
    value: function subscribe(topic) {
      this._paho.subscribe(topic);

      return this._subscriptions[topic] || (this._subscriptions[topic] = new Subscription(topic, this));
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(topic) {
      var removeListeners = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      this._paho.unsubscribe(topic);

      delete this._subscriptions[topic];
      if (removeListeners) this.removeMessageListener(topic);
    }
  }, {
    key: "subscribed",
    value: function subscribed() {
      return Object.keys(this._subscriptions);
    }
  }, {
    key: "send",
    value: function send(topic, payload, opts) {
      this._paho.send(makePahoMessage(topic, payload, opts));
    }
  }, {
    key: "publish",
    value: function publish() {
      this.send.apply(this, arguments);
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this._paho.disconnect();
    }
  }, {
    key: "reconnect",
    value: function reconnect() {
      var _this = this;

      this._emitter.emit('reconnect', new ClientError(ERROR.OK, 'No error.'));

      return pahoConnect(this._paho, this._pahoOpts).then(function () {
        _this.subscribed().forEach(function (topic) {
          return _this.subscribe(topic);
        });
      });
    }
  }, {
    key: "host",
    get: function get() {
      return this._paho.host;
    }
  }, {
    key: "port",
    get: function get() {
      return this._paho.port;
    }
  }, {
    key: "path",
    get: function get() {
      return this._paho.path;
    }
  }, {
    key: "uri",
    get: function get() {
      return this._paho.uri;
    }
  }, {
    key: "clientId",
    get: function get() {
      return this._paho.clientId;
    }
  }]);

  return Client;
}();

function connect() {
  var userOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var CtorDeprecated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Client;
  if (typeof userOpts === 'string') userOpts = parseUri(userOpts);

  var _userOpts = userOpts,
      host = _userOpts.host,
      _userOpts$path = _userOpts.path,
      path = _userOpts$path === void 0 ? '/' : _userOpts$path,
      _userOpts$ssl = _userOpts.ssl,
      ssl = _userOpts$ssl === void 0 ? false : _userOpts$ssl,
      _userOpts$clientId = _userOpts.clientId,
      clientId = _userOpts$clientId === void 0 ? 'mqtt_' + Math.random().toString(16).substr(2, 8) : _userOpts$clientId,
      _userOpts$keepalive = _userOpts.keepalive,
      keepalive = _userOpts$keepalive === void 0 ? 60 : _userOpts$keepalive,
      _userOpts$port = _userOpts.port,
      port = _userOpts$port === void 0 ? ssl ? 443 : 80 : _userOpts$port,
      _userOpts$Constructor = _userOpts.Constructor,
      Constructor = _userOpts$Constructor === void 0 ? CtorDeprecated || Client : _userOpts$Constructor,
      hosts = _userOpts.hosts,
      will = _userOpts.will,
      username = _userOpts.username,
      etcOpts = _objectWithoutProperties(_userOpts, ["host", "path", "ssl", "clientId", "keepalive", "port", "Constructor", "hosts", "will", "username"]);

  if (typeof Constructor !== 'function') {
    throw new TypeError('The second argument must be a function, or a constructor.');
  }

  var pahoOpts = {
    useSSL: ssl,
    keepAliveInterval: keepalive
  };

  if (!host) {
    if (hosts && hosts.length > 0) {
      host = hosts[0];
    } else {
      throw new TypeError('`host` option is required!');
    }
  }

  if (host.slice(-1) === '/') host = host.slice(0, -1);
  if (path[0] !== '/') path = '/' + path;
  if (will) pahoOpts.willMessage = makePahoMessage(will.topic, will.payload, will);
  if (username) pahoOpts.userName = username;
  if (hosts) pahoOpts.hosts = hosts;
  var paho = new Paho.Client(host, port, path, clientId);
  return pahoConnect(paho, deepExtend(pahoOpts, etcOpts)).then(function () {
    return createClient(Constructor, {
      paho: paho,
      pahoOpts: pahoOpts
    });
  });
}

function createClient(Ctor, setting) {
  return Client === Ctor || Ctor.prototype instanceof Client ? new Ctor(setting) : Ctor(setting);
}

function parseUri(str) {
  var regexp = /^((wss?):\/\/)?([^/]+?)(:(\d+))?(\/.*)?$/;

  var _str$match = str.match(regexp),
      _str$match2 = _slicedToArray(_str$match, 7),
      protocol = _str$match2[2],
      host = _str$match2[3],
      port = _str$match2[5],
      path = _str$match2[6];

  return {
    ssl: protocol === 'wss',
    port: port && parseInt(port),
    host: host,
    path: path
  };
}

exports.Client = Client;
exports.ERROR = ERROR;
exports.connect = connect;


/***/ }),

/***/ 3882:
/*!**************************************************************!*\
  !*** ./src/app/mqtt-config/mqtt-config.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtcXR0LWNvbmZpZy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1218:
/*!**************************************************************!*\
  !*** ./src/app/mqtt-config/mqtt-config.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Configuración </ion-title>\n    \n      <!-- Back button with a default href -->\n      <ion-buttons slot=\"start\">\n        <ion-back-button    defaultHref=\"home\" [text]=\"\"></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content >\n    <div  ion-background-color:blue>    \n      <br>\n      <div class = \"list\">\n        <label class = \"item item-input\">\n           <ion-label color=\"primary\" class = \"input-label\">MQTT SERVER IP:</ion-label>\n           <input type = \"text\" [(ngModel)]=this.MQTTSERVER placeholder = {{MQTTSERVER}} />\n        </label>\n      <br>\n      \n      <label class = \"item item-input \">\n           <ion-label color =\"primary\" class = \"input-label\">MQTT SERVER PORT:</ion-label>\n           <input type = \"text\" [(ngModel)]= this.MQTTPORT placeholder = {{MQTTPORT}} />\n      </label>\n      <br>\n      \n      <ion-button color=\"primary\" (click)=\"pruebaClick()\">Probar</ion-button>\n      <br>\n      <ion-button color=\"primary\" (click)=\"saveClick()\">Guardar</ion-button>\n\n     </div>\n    </div>\n  \n\n\n    \n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_mqtt-config_mqtt-config_module_ts.js.map