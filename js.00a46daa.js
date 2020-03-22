// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/ui/renderDOM.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderDOM = void 0;

const renderDOM = (arrayOfHTMLElements, parent) => {
  if (!Array.isArray(arrayOfHTMLElements)) {
    throw new Error('htmlelements is not array');
  } else {
    arrayOfHTMLElements.forEach((element, currentIndex) => {
      if (Array.isArray(element)) {
        const cannotUsePrevElementAsParent = Array.isArray(arrayOfHTMLElements[currentIndex - 1]);
        renderDOM(element, currentIndex === 0 || cannotUsePrevElementAsParent ? parent : arrayOfHTMLElements[currentIndex - 1]);
      } else {
        parent.appendChild(element);
      }
    });
  }

  ;
  return parent;
};

exports.renderDOM = renderDOM;
},{}],"js/global-state/actionTypes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionTypes = void 0;
const actionTypes = Object.freeze({
  UPDATE_RANDOM_PHOTO_URL: 'UPDATE_RANDOM_PHOTO_URL'
});
exports.actionTypes = actionTypes;
},{}],"js/global-state/reducer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = void 0;

var _actionTypes = require("./actionTypes.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const reducer = (prevState = {
  randomPhotoUrl: undefined
}, action) => {
  switch (action.type) {
    case _actionTypes.actionTypes.UPDATE_RANDOM_PHOTO_URL:
      return _objectSpread({}, prevState, {
        randomPhotoUrl: action.randomPhotoUrl
      });
  }
};

exports.reducer = reducer;
},{"./actionTypes.js":"js/global-state/actionTypes.js"}],"js/global-state/store.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _reducer = require("./reducer.js");

const createStore = reducer => {
  let rootState = {};
  const listenersOnDispatch = [];

  const getState = () => rootState;

  const subscribe = listener => {
    listenersOnDispatch.push(listener);
    const lengthOfListeners = listenersOnDispatch.length;
    return () => {
      const indexToDelete = listenersOnDispatch.indexOf(listener);
      if (index > -1) listenersOnDispatch.splice(indexToDelete, 1);
    };
  };

  const dispatch = action => {
    rootState = reducer(rootState, action);
    listenersOnDispatch.forEach(listener => listener());
  };

  return {
    getState,
    subscribe,
    dispatch
  };
};

const store = createStore(_reducer.reducer);
exports.store = store;
},{"./reducer.js":"js/global-state/reducer.js"}],"js/ui/styled.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styled = void 0;

/**
 * when you use a syntax like styled(`button`)`width: 10px; height: 10px;` instead of
 * styled(`button`)(`width: 10px; height: 10px;`)
 */
const receiveCorrectStringInput = mightBeString => {
  if (Array.isArray(mightBeString)) return mightBeString[0];else return mightBeString;
};

const generateRandomString = length => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < length; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};

const initializeStyled = () => {
  const head = document.getElementsByTagName('head')[0];
  const classCache = {};
  return tagName => {
    const correctTagName = receiveCorrectStringInput(tagName);
    const element = document.createElement(correctTagName);
    return styles => {
      const correctStyles = receiveCorrectStringInput(styles);
      const classNameInCache = classCache[correctStyles];

      if (classNameInCache) {
        element.className = classNameInCache;
        return element;
      }

      const className = generateRandomString(7);
      const style = document.createElement('style');
      style.textContent = `.${className} { ${correctStyles} }`;
      head.appendChild(style);
      element.className = className;
      /**
       * Caveat: you should also write the order of styles the same
       * which is very inconvenient. But it just works now (to keep the simplicity)
       */

      classCache[correctStyles.replace(/\s+/g, '')] = className;
      return element;
    };
  };
};

const styled = initializeStyled();
exports.styled = styled;
},{}],"js/api/tryCatchWrapper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tryCatchWrapper = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const tryCatchWrapper = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (promise) {
    try {
      const response = yield promise;
      return {
        data: response,
        error: null
      };
    } catch (error) {
      return {
        data: null,
        error
      };
    }
  });

  return function tryCatchWrapper(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.tryCatchWrapper = tryCatchWrapper;
},{}],"js/api/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchSingleRandomPhoto = exports.RANDOM_PHOTO_URL = void 0;

var _tryCatchWrapper = require("./tryCatchWrapper.js");

const RANDOM_PHOTO_URL = 'https://source.unsplash.com/random';
exports.RANDOM_PHOTO_URL = RANDOM_PHOTO_URL;

const fetchSingleRandomPhoto = () => (0, _tryCatchWrapper.tryCatchWrapper)(fetch(RANDOM_PHOTO_URL));

exports.fetchSingleRandomPhoto = fetchSingleRandomPhoto;
},{"./tryCatchWrapper.js":"js/api/tryCatchWrapper.js"}],"js/hooks/useEffect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__useEffect = void 0;

const __useEffect = ({
  renderCount,
  setRenderCount
}) => {
  const depsInClosure = {
    deps: []
  };

  const updateDepsInClosure = deps => {
    depsInClosure.deps = [];
    deps.forEach(dep => depsInClosure.deps.push(dep));
  };

  return (callback, deps) => {
    const isFirstRender = renderCount.value === 0;
    const areDepsChanged = depsInClosure.deps.some((dep, idx) => dep !== deps[idx]);

    if (isFirstRender || areDepsChanged) {
      callback();
      updateDepsInClosure(deps);
      setRenderCount(renderCount.value + 1);
      return;
    }
  };
};

exports.__useEffect = __useEffect;
},{}],"js/hooks/useState.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__useStateInteral = exports.__useState = void 0;

const __useState = ({
  renderCount,
  setRenderCount
}) => {
  const valueInClosure = {
    value: undefined
  };
  const renderInClosure = {
    render: undefined
  };

  const setter = newValue => {
    valueInClosure.value = newValue;

    if (renderCount.value > 0) {
      renderInClosure.render();
      setRenderCount(renderCount.value + 1);
    }
  };

  return (initialValue, render) => {
    if (!renderInClosure.render) {
      renderInClosure.render = render;
      setter(initialValue);
    }

    return [valueInClosure, setter];
  };
};

exports.__useState = __useState;

const __useStateInteral = () => {
  const valueInClosure = {
    value: undefined
  };

  const setter = newValue => {
    valueInClosure.value = newValue;
  };

  return initialValue => {
    setter(initialValue);
    return [valueInClosure, setter];
  };
};

exports.__useStateInteral = __useStateInteral;
},{}],"js/hooks/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeHooks = void 0;

var _useEffect = require("./useEffect.js");

var _useState = require("./useState.js");

const initializeHooks = () => {
  // setState just for internal use
  const useStateInternal = (0, _useState.__useStateInteral)();
  const [renderCount, setRenderCount] = useStateInternal(0); // for external use

  const useEffect = (0, _useEffect.__useEffect)({
    renderCount,
    setRenderCount
  });
  const useState = (0, _useState.__useState)({
    renderCount,
    setRenderCount
  });
  return {
    useEffect,
    useState
  };
};

exports.initializeHooks = initializeHooks;
},{"./useEffect.js":"js/hooks/useEffect.js","./useState.js":"js/hooks/useState.js"}],"js/global-state/actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRandomPhoto = void 0;

var _actionTypes = require("./actionTypes.js");

const updateRandomPhoto = randomPhotoUrl => ({
  type: _actionTypes.actionTypes.UPDATE_RANDOM_PHOTO_URL,
  randomPhotoUrl
});

exports.updateRandomPhoto = updateRandomPhoto;
},{"./actionTypes.js":"js/global-state/actionTypes.js"}],"js/components/RequestRandomPhotoButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styled = require("../ui/styled.js");

var _api = require("../api/api.js");

var _index = require("../hooks/index.js");

var _actions = require("../global-state/actions.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const {
  useEffect,
  useState
} = (0, _index.initializeHooks)();
const Button = (0, _styled.styled)`button``
  width: max-content;
  min-width: 250px;
  height: 50px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  font-size: 32px;
`;

const RequestRandomPhotoButton = store => {
  const render = () => {
    const [isLoading, setIsLoading] = useState(false, render);

    const getRandomPhoto = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* () {
        setIsLoading(true);
        const {
          data,
          error
        } = yield (0, _api.fetchSingleRandomPhoto)();
        if (error) console.error(error);
        store.dispatch((0, _actions.updateRandomPhoto)(data.url));
        setIsLoading(false);
      });

      return function getRandomPhoto() {
        return _ref.apply(this, arguments);
      };
    }();

    useEffect(() => {
      getRandomPhoto();
    }, []);
    Button.onclick = getRandomPhoto;
    if (isLoading.value) Button.textContent = 'loading';else Button.textContent = 'click the button to request random image';
    return Button;
  };

  return render;
};

var _default = RequestRandomPhotoButton;
exports.default = _default;
},{"../ui/styled.js":"js/ui/styled.js","../api/api.js":"js/api/api.js","../hooks/index.js":"js/hooks/index.js","../global-state/actions.js":"js/global-state/actions.js"}],"js/components/Layout.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styled = require("../ui/styled.js");

const Layout = (0, _styled.styled)`section``
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

var _default = () => () => Layout;

exports.default = _default;
},{"../ui/styled.js":"js/ui/styled.js"}],"js/components/PhotoViewer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styled = require("../ui/styled.js");

var _renderDOM = require("../ui/renderDOM.js");

var _index = require("../hooks/index.js");

const {
  useEffect
} = (0, _index.initializeHooks)();
const PhotoContainer = (0, _styled.styled)`figure``
  border: 1px solid black;
  min-width: 500px;
  min-height: 500px;
  display: flex;
`;
const Photo = (0, _styled.styled)`img``
  max-width: 500px;
  max-height: 500px;
  margin: auto;
`;

var _default = store => {
  const render = () => {
    const randomPhotoUrl = store.getState().randomPhotoUrl;
    useEffect(() => {
      if (randomPhotoUrl) console.log(`The URL has changed to ${randomPhotoUrl}`);
    }, [randomPhotoUrl]);
    Photo.setAttribute('loading', 'lazy');
    if (randomPhotoUrl) Photo.src = randomPhotoUrl;
    return (0, _renderDOM.renderDOM)([Photo], PhotoContainer);
  };

  return render;
};

exports.default = _default;
},{"../ui/styled.js":"js/ui/styled.js","../ui/renderDOM.js":"js/ui/renderDOM.js","../hooks/index.js":"js/hooks/index.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

var _renderDOM = require("./ui/renderDOM.js");

var _store = require("./global-state/store.js");

var _RequestRandomPhotoButton = _interopRequireDefault(require("./components/RequestRandomPhotoButton.js"));

var _Layout = _interopRequireDefault(require("./components/Layout.js"));

var _PhotoViewer = _interopRequireDefault(require("./components/PhotoViewer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const main = () => {
  const root = document.getElementById('root');

  const render = __store => {
    (0, _renderDOM.renderDOM)([(0, _Layout.default)()(), [(0, _PhotoViewer.default)(__store)(), (0, _RequestRandomPhotoButton.default)(__store)()]], root);
  };

  _store.store.subscribe(() => {
    render(_store.store);
  });

  render(_store.store);
};

window.onload = main;
},{"./ui/renderDOM.js":"js/ui/renderDOM.js","./global-state/store.js":"js/global-state/store.js","./components/RequestRandomPhotoButton.js":"js/components/RequestRandomPhotoButton.js","./components/Layout.js":"js/components/Layout.js","./components/PhotoViewer.js":"js/components/PhotoViewer.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49812" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map