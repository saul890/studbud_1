// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2kp7o":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "94ad9bd3b13de973";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bYfRn":[function(require,module,exports) {
var _jkanbanMinJs = require("../public/jkanban/jkanban.min.js");
// Empty array of task titles
let titles = [];
// Go through local storage and get titles
for(var i = 0; i <= localStorage.length - 1; i++){
    let key = localStorage.key(i);
    getFromLocalStorage(key);
    updateEmpty();
}
// Push titles to the title array
function getFromLocalStorage(taskId) {
    task = JSON.parse(window.localStorage.getItem(taskId));
    titles.push({
        "title": task.title
    });
}
// Kanban library code from jkanban
var kanban = new jKanban({
    element: '#kanban_container',
    gutter: '15px',
    widthBoard: '250px',
    responsivePercentage: false,
    dragItems: true,
    boards: [
        {
            "id": "_todo",
            "title": "Not Started",
            "item": titles
        },
        {
            "id": "_working",
            "title": "In Progress",
            "item": []
        },
        {
            "id": "_done",
            "title": "Done",
            "item": []
        }
    ],
    dragBoards: true,
    itemAddOptions: {
        enabled: false,
        content: '+',
        class: 'kanban-title-button btn btn-default btn-xs',
        footer: false // position the button on footer
    },
    itemHandleOptions: {
        enabled: false,
        handleClass: "item_handle",
        customCssHandler: "drag_handler",
        customCssIconHandler: "drag_handler_icon",
        customHandler: "<span class='item_handle'>+</span> %title% " // your entirely customized handler. Use %title% to position item title 
    },
    click: function(el) {},
    context: function(el, event) {},
    dragEl: function(el, source) {},
    dragendEl: function(el) {},
    dropEl: function(el, target, source, sibling) {
        const allBoards = document.querySelector(".kanban-container");
        // Select the last board/child in the container
        const lastBoard = allBoards.lastChild;
        // Get the ID of that last board/child
        var dataID = lastBoard.getAttribute('data-id');
        if (target == lastBoard.childNodes[1]) el.classList.add('full');
        else el.classList.remove('full');
    },
    dragBoard: function(el, source) {},
    dragendBoard: function(el) {},
    buttonClick: function(el, boardId) {},
    propagationHandlers: []
});
// Add a board
var addBoardDefault = document.getElementById('addDefault');
addBoardDefault.addEventListener('click', function() {
    kanban.addBoards([
        {
            'id': 'New',
            'title': 'New Title',
            'item': []
        }
    ]);
    const theTitles1 = document.querySelectorAll('.kanban-title-board');
    // Change the text of multiple elements with a loop
    theTitles1.forEach((element)=>{
        element.contentEditable = "true";
    });
});
// Variable for the remove button
var removeButton = document.getElementById('removeButton');
removeButton.addEventListener('click', function() {
    // Select the container/parent of boards
    const allBoards = document.querySelector(".kanban-container");
    // Select the last board/child in the container
    const lastBoard = allBoards.lastChild;
    // Get the ID of that last board/child
    var dataID = lastBoard.getAttribute('data-id');
    // Remove the last board using library function
    kanban.removeBoard(dataID);
});
// Get a NodeList of all .demo elements
const theTitles = document.querySelectorAll('.kanban-title-board');
// Change the text of multiple elements with a loop
theTitles.forEach((element)=>{
    element.contentEditable = "true";
});
function updateEmpty() {
    if (localStorage.length > 0) document.getElementById("whenEmpty").style.display = 'none';
    else document.getElementById("whenEmpty").style.display = 'block';
}

},{"../public/jkanban/jkanban.min.js":"lueMc"}],"lueMc":[function(require,module,exports) {
var global = arguments[3];
(function() {
    return function e1(t, n, o) {
        function i(a, c) {
            if (!n[a]) {
                if (!t[a]) {
                    var d = undefined;
                    if (!c && d) return d(a, !0);
                    if (r) return r(a, !0);
                    var s = new Error("Cannot find module '" + a + "'");
                    throw s.code = "MODULE_NOT_FOUND", s;
                }
                var l = n[a] = {
                    exports: {}
                };
                t[a][0].call(l.exports, function(e) {
                    return i(t[a][1][e] || e);
                }, l, l.exports, e1, t, n, o);
            }
            return n[a].exports;
        }
        for(var r = undefined, a1 = 0; a1 < o.length; a1++)i(o[a1]);
        return i;
    };
})()({
    1: [
        function(e2, t1, n1) {
            var o1 = e2("dragula");
            !function() {
                this.jKanban = function() {
                    var e3 = this, t2 = {
                        enabled: !1
                    }, n2 = {
                        enabled: !1
                    };
                    this._disallowedItemProperties = [
                        "id",
                        "title",
                        "click",
                        "context",
                        "drag",
                        "dragend",
                        "drop",
                        "order"
                    ], this.element = "", this.container = "", this.boardContainer = [], this.handlers = [], this.dragula = o1, this.drake = "", this.drakeBoard = "", this.itemAddOptions = n2, this.itemHandleOptions = t2;
                    var i1 = {
                        element: "",
                        gutter: "15px",
                        widthBoard: "250px",
                        responsive: "700",
                        responsivePercentage: !1,
                        boards: [],
                        dragBoards: !0,
                        dragItems: !0,
                        itemAddOptions: n2,
                        itemHandleOptions: t2,
                        dragEl: function(e, t) {},
                        dragendEl: function(e) {},
                        dropEl: function(e, t, n, o) {},
                        dragBoard: function(e, t) {},
                        dragendBoard: function(e) {},
                        dropBoard: function(e, t, n, o) {},
                        click: function(e) {},
                        context: function(e, t) {},
                        buttonClick: function(e, t) {}
                    };
                    function r1(t3, n) {
                        t3.addEventListener("click", function(t) {
                            t.preventDefault(), e3.options.click(this), "function" == typeof this.clickfn && this.clickfn(this);
                        });
                    }
                    function a(t4, n) {
                        t4.addEventListener ? t4.addEventListener("contextmenu", function(t) {
                            t.preventDefault(), e3.options.context(this, t), "function" == typeof this.contextfn && this.contextfn(this, t);
                        }, !1) : t4.attachEvent("oncontextmenu", function() {
                            e3.options.context(this), "function" == typeof this.contextfn && this.contextfn(this), window.event.returnValue = !1;
                        });
                    }
                    function c(t5, n) {
                        t5.addEventListener("click", function(t) {
                            t.preventDefault(), e3.options.buttonClick(this, n);
                        });
                    }
                    function d1(t) {
                        var n = [];
                        return e3.options.boards.map(function(e) {
                            if (e.id === t) return n.push(e);
                        }), n[0];
                    }
                    function s(t, n) {
                        for(var o in n)e3._disallowedItemProperties.indexOf(o) > -1 || t.setAttribute("data-" + o, n[o]);
                    }
                    function l(t) {
                        var n3 = "title" in t ? t.title : "";
                        if (e3.options.itemHandleOptions.enabled) {
                            if (void 0 !== (e3.options.itemHandleOptions.customHandler || void 0)) return n3 = "<div> " + e3.options.itemHandleOptions.customHandler.replace(/%([^%]+)%/g, (e, n)=>void 0 !== t[n] ? t[n] : ""
                            ) + " </div>";
                            var o = e3.options.itemHandleOptions.customCssHandler, i = e3.options.itemHandleOptions.customCssIconHandler, r = e3.options.itemHandleOptions.customItemLayout;
                            void 0 === (o || void 0) && (o = "drag_handler"), void 0 === (i || void 0) && (i = o + "_icon"), void 0 === (r || void 0) && (r = ""), n3 = "<div class='item_handle " + o + "'><i class='item_handle " + i + "'></i></div><div>" + n3 + "</div>";
                        }
                        return n3;
                    }
                    arguments[0] && "object" == typeof arguments[0] && (this.options = function(e, t) {
                        var n;
                        for(n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
                        return e;
                    }(i1, arguments[0])), this.__getCanMove = function(t) {
                        return e3.options.itemHandleOptions.enabled ? e3.options.itemHandleOptions.handleClass ? t.classList.contains(e3.options.itemHandleOptions.handleClass) : t.classList.contains("item_handle") : !!e3.options.dragItems;
                    }, this.init = function() {
                        !function() {
                            e3.element = document.querySelector(e3.options.element);
                            var t6 = document.createElement("div");
                            t6.classList.add("kanban-container"), e3.container = t6, document.querySelector(e3.options.element).dataset.hasOwnProperty("board") ? (url = document.querySelector(e3.options.element).dataset.board, window.fetch(url, {
                                method: "GET",
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }).then((t7)=>{
                                t7.json().then(function(t) {
                                    e3.options.boards = t, e3.addBoards(e3.options.boards, !0);
                                });
                            }).catch((e)=>{
                                console.log("Error: ", e);
                            })) : e3.addBoards(e3.options.boards, !0);
                            e3.element.appendChild(e3.container);
                        }(), window.innerWidth > e3.options.responsive && (e3.drakeBoard = e3.dragula([
                            e3.container
                        ], {
                            moves: function(t, n, o, i) {
                                return !!e3.options.dragBoards && (o.classList.contains("kanban-board-header") || o.classList.contains("kanban-title-board"));
                            },
                            accepts: function(e, t, n, o) {
                                return t.classList.contains("kanban-container");
                            },
                            revertOnSpill: !0,
                            direction: "horizontal"
                        }).on("drag", function(t, n) {
                            t.classList.add("is-moving"), e3.options.dragBoard(t, n), "function" == typeof t.dragfn && t.dragfn(t, n);
                        }).on("dragend", function(t8) {
                            !function() {
                                for(var t = 1, n = 0; n < e3.container.childNodes.length; n++)e3.container.childNodes[n].dataset.order = t++;
                            }(), t8.classList.remove("is-moving"), e3.options.dragendBoard(t8), "function" == typeof t8.dragendfn && t8.dragendfn(t8);
                        }).on("drop", function(t, n, o, i) {
                            t.classList.remove("is-moving"), e3.options.dropBoard(t, n, o, i), "function" == typeof t.dropfn && t.dropfn(t, n, o, i);
                        }), e3.drake = e3.dragula(e3.boardContainer, {
                            moves: function(t, n, o, i) {
                                return e3.__getCanMove(o);
                            },
                            revertOnSpill: !0
                        }).on("cancel", function(t, n, o) {
                            e3.enableAllBoards();
                        }).on("drag", function(t9, n) {
                            var o = t9.getAttribute("class");
                            if ("" !== o && o.indexOf("not-draggable") > -1) e3.drake.cancel(!0);
                            else {
                                t9.classList.add("is-moving"), e3.options.dragEl(t9, n);
                                var i = d1(n.parentNode.dataset.id);
                                void 0 !== i.dragTo && e3.options.boards.map(function(t) {
                                    -1 === i.dragTo.indexOf(t.id) && t.id !== n.parentNode.dataset.id && e3.findBoard(t.id).classList.add("disabled-board");
                                }), null !== t9 && "function" == typeof t9.dragfn && t9.dragfn(t9, n);
                            }
                        }).on("dragend", function(t) {
                            e3.options.dragendEl(t), null !== t && "function" == typeof t.dragendfn && t.dragendfn(t);
                        }).on("drop", function(t, n, o, i) {
                            e3.enableAllBoards();
                            var r = d1(o.parentNode.dataset.id);
                            (void 0 !== r.dragTo && -1 === r.dragTo.indexOf(n.parentNode.dataset.id) && n.parentNode.dataset.id !== o.parentNode.dataset.id && e3.drake.cancel(!0), null !== t) && (!1 === e3.options.dropEl(t, n, o, i) && e3.drake.cancel(!0), t.classList.remove("is-moving"), "function" == typeof t.dropfn && t.dropfn(t, n, o, i));
                        }));
                    }, this.enableAllBoards = function() {
                        var e = document.querySelectorAll(".kanban-board");
                        if (e.length > 0 && void 0 !== e) for(var t = 0; t < e.length; t++)e[t].classList.remove("disabled-board");
                    }, this.addElement = function(t, n) {
                        var o = e3.element.querySelector('[data-id="' + t + '"] .kanban-drag'), i = document.createElement("div");
                        return i.classList.add("kanban-item"), void 0 !== n.id && "" !== n.id && i.setAttribute("data-eid", n.id), n.class && Array.isArray(n.class) && n.class.forEach(function(e) {
                            i.classList.add(e);
                        }), i.innerHTML = l(n), i.clickfn = n.click, i.contextfn = n.context, i.dragfn = n.drag, i.dragendfn = n.dragend, i.dropfn = n.drop, s(i, n), r1(i), a(i), e3.options.itemHandleOptions.enabled && (i.style.cursor = "default"), o.appendChild(i), e3;
                    }, this.addForm = function(t, n) {
                        var o = e3.element.querySelector('[data-id="' + t + '"] .kanban-drag'), i = n.getAttribute("class");
                        return n.setAttribute("class", i + " not-draggable"), o.appendChild(n), e3;
                    }, this.addBoards = function(t, n) {
                        if (e3.options.responsivePercentage) {
                            if (e3.container.style.width = "100%", e3.options.gutter = "1%", window.innerWidth > e3.options.responsive) var o = (100 - 2 * t.length) / t.length;
                            else o = 100 - 2 * t.length;
                        } else o = e3.options.widthBoard;
                        var i = e3.options.itemAddOptions.enabled, d = e3.options.itemAddOptions.content, u = e3.options.itemAddOptions.class, f = e3.options.itemAddOptions.footer;
                        for(var p in t){
                            var v = t[p];
                            n || e3.options.boards.push(v), e3.options.responsivePercentage || ("" === e3.container.style.width ? e3.container.style.width = parseInt(o) + 2 * parseInt(e3.options.gutter) + "px" : e3.container.style.width = parseInt(e3.container.style.width) + parseInt(o) + 2 * parseInt(e3.options.gutter) + "px");
                            var m = document.createElement("div");
                            m.dataset.id = v.id, m.dataset.order = e3.container.childNodes.length + 1, m.classList.add("kanban-board"), e3.options.responsivePercentage ? m.style.width = o + "%" : m.style.width = o, m.style.marginLeft = e3.options.gutter, m.style.marginRight = e3.options.gutter;
                            var h = document.createElement("header");
                            if ("" !== v.class && void 0 !== v.class) var g = v.class.split(",");
                            else g = [];
                            h.classList.add("kanban-board-header"), g.map(function(e) {
                                e = e.replace(/^[ ]+/g, ""), h.classList.add(e);
                            }), h.innerHTML = '<div class="kanban-title-board">' + v.title + "</div>";
                            var y = document.createElement("main");
                            if (y.classList.add("kanban-drag"), "" !== v.bodyClass && void 0 !== v.bodyClass) var b = v.bodyClass.split(",");
                            else b = [];
                            for(var w in b.map(function(e) {
                                y.classList.add(e);
                            }), e3.boardContainer.push(y), v.item){
                                var E = v.item[w], T = document.createElement("div");
                                T.classList.add("kanban-item"), E.id && (T.dataset.eid = E.id), E.class && Array.isArray(E.class) && E.class.forEach(function(e) {
                                    T.classList.add(e);
                                }), T.innerHTML = l(E), T.clickfn = E.click, T.contextfn = E.context, T.dragfn = E.drag, T.dragendfn = E.dragend, T.dropfn = E.drop, s(T, E), r1(T), a(T), e3.options.itemHandleOptions.enabled && (T.style.cursor = "default"), y.appendChild(T);
                            }
                            var x = document.createElement("footer");
                            if (i) {
                                var C = document.createElement("BUTTON"), O = document.createTextNode(d || "+");
                                C.setAttribute("class", u || "kanban-title-button btn btn-default btn-xs"), C.appendChild(O), f ? x.appendChild(C) : h.appendChild(C), c(C, v.id);
                            }
                            m.appendChild(h), m.appendChild(y), m.appendChild(x), e3.container.appendChild(m);
                        }
                        return e3;
                    }, this.findBoard = function(t) {
                        return e3.element.querySelector('[data-id="' + t + '"]');
                    }, this.getParentBoardID = function(t) {
                        return "string" == typeof t && (t = e3.element.querySelector('[data-eid="' + t + '"]')), null === t ? null : t.parentNode.parentNode.dataset.id;
                    }, this.moveElement = function(e, t, n) {
                        if (e !== this.getParentBoardID(t)) return this.removeElement(t), this.addElement(e, n);
                    }, this.replaceElement = function(t, n) {
                        var o = t;
                        return "string" == typeof o && (o = e3.element.querySelector('[data-eid="' + t + '"]')), o.innerHTML = l(n), o.clickfn = n.click, o.contextfn = n.context, o.dragfn = n.drag, o.dragendfn = n.dragend, o.dropfn = n.drop, s(o, n), r1(o), a(o), e3;
                    }, this.findElement = function(t) {
                        return e3.element.querySelector('[data-eid="' + t + '"]');
                    }, this.getBoardElements = function(t) {
                        return e3.element.querySelector('[data-id="' + t + '"] .kanban-drag').childNodes;
                    }, this.removeElement = function(t) {
                        return "string" == typeof t && (t = e3.element.querySelector('[data-eid="' + t + '"]')), null !== t && ("function" == typeof t.remove ? t.remove() : t.parentNode.removeChild(t)), e3;
                    }, this.removeBoard = function(t) {
                        var n = null;
                        "string" == typeof t && (n = e3.element.querySelector('[data-id="' + t + '"]')), null !== n && ("function" == typeof n.remove ? n.remove() : n.parentNode.removeChild(n));
                        for(var o = 0; o < e3.options.boards.length; o++)if (e3.options.boards[o].id === t) {
                            e3.options.boards.splice(o, 1);
                            break;
                        }
                        return e3;
                    }, this.onButtonClick = function(e) {}, this.init();
                };
            }();
        },
        {
            dragula: 9
        }
    ],
    2: [
        function(e4, t10, n) {
            t10.exports = function(e, t) {
                return Array.prototype.slice.call(e, t);
            };
        },
        {}
    ],
    3: [
        function(e5, t11, n4) {
            "use strict";
            var o = e5("ticky");
            t11.exports = function(e, t, n) {
                e && o(function() {
                    e.apply(n || null, t || []);
                });
            };
        },
        {
            ticky: 11
        }
    ],
    4: [
        function(e6, t12, n5) {
            "use strict";
            var o2 = e6("atoa"), i2 = e6("./debounce");
            t12.exports = function(e, t13) {
                var n6 = t13 || {}, r2 = {};
                return void 0 === e && (e = {}), e.on = function(t, n) {
                    return r2[t] ? r2[t].push(n) : r2[t] = [
                        n
                    ], e;
                }, e.once = function(t, n) {
                    return n._once = !0, e.on(t, n), e;
                }, e.off = function(t, n) {
                    var o = arguments.length;
                    if (1 === o) delete r2[t];
                    else if (0 === o) r2 = {};
                    else {
                        var i = r2[t];
                        if (!i) return e;
                        i.splice(i.indexOf(n), 1);
                    }
                    return e;
                }, e.emit = function() {
                    var t = o2(arguments);
                    return e.emitterSnapshot(t.shift()).apply(this, t);
                }, e.emitterSnapshot = function(t) {
                    var a = (r2[t] || []).slice(0);
                    return function() {
                        var r = o2(arguments), c = this || e;
                        if ("error" === t && !1 !== n6.throws && !a.length) throw 1 === r.length ? r[0] : r;
                        return a.forEach(function(o) {
                            n6.async ? i2(o, r, c) : o.apply(c, r), o._once && e.off(t, o);
                        }), e;
                    };
                }, e;
            };
        },
        {
            "./debounce": 3,
            atoa: 2
        }
    ],
    5: [
        function(e7, t14, n7) {
            (function(n8) {
                (function() {
                    var o3 = e7("custom-event"), i3 = e7("./eventmap"), r = n8.document, a2 = function(e, t, n, o) {
                        return e.addEventListener(t, n, o);
                    }, c = function(e, t, n, o) {
                        return e.removeEventListener(t, n, o);
                    }, d = [];
                    function s(e8, t15, n9) {
                        var o4 = function(e, t, n) {
                            var o, i;
                            for(o = 0; o < d.length; o++)if ((i = d[o]).element === e && i.type === t && i.fn === n) return o;
                        }(e8, t15, n9);
                        if (o4) {
                            var i4 = d[o4].wrapper;
                            return d.splice(o4, 1), i4;
                        }
                    }
                    n8.addEventListener || (a2 = function(e9, t16, o5) {
                        return e9.attachEvent("on" + t16, function(e10, t17, o6) {
                            var i5 = s(e10, t17, o6) || function(e, t18, o) {
                                return function(t) {
                                    var i = t || n8.event;
                                    i.target = i.target || i.srcElement, i.preventDefault = i.preventDefault || function() {
                                        i.returnValue = !1;
                                    }, i.stopPropagation = i.stopPropagation || function() {
                                        i.cancelBubble = !0;
                                    }, i.which = i.which || i.keyCode, o.call(e, i);
                                };
                            }(e10, 0, o6);
                            return d.push({
                                wrapper: i5,
                                element: e10,
                                type: t17,
                                fn: o6
                            }), i5;
                        }(e9, t16, o5));
                    }, c = function(e, t, n) {
                        var o = s(e, t, n);
                        if (o) return e.detachEvent("on" + t, o);
                    }), t14.exports = {
                        add: a2,
                        remove: c,
                        fabricate: function(e11, t, n) {
                            var a = -1 === i3.indexOf(t) ? new o3(t, {
                                detail: n
                            }) : function() {
                                var e;
                                r.createEvent ? (e = r.createEvent("Event")).initEvent(t, !0, !0) : r.createEventObject && (e = r.createEventObject());
                                return e;
                            }();
                            e11.dispatchEvent ? e11.dispatchEvent(a) : e11.fireEvent("on" + t, a);
                        }
                    };
                }).call(this);
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        },
        {
            "./eventmap": 6,
            "custom-event": 7
        }
    ],
    6: [
        function(e12, t, n10) {
            (function(e) {
                (function() {
                    var n = [], o = "", i = /^on/;
                    for(o in e)i.test(o) && n.push(o.slice(2));
                    t.exports = n;
                }).call(this);
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        },
        {}
    ],
    7: [
        function(e13, t19, n11) {
            (function(e14) {
                (function() {
                    var n12 = e14.CustomEvent;
                    t19.exports = function() {
                        try {
                            var e = new n12("cat", {
                                detail: {
                                    foo: "bar"
                                }
                            });
                            return "cat" === e.type && "bar" === e.detail.foo;
                        } catch (e) {}
                        return !1;
                    }() ? n12 : "undefined" != typeof document && "function" == typeof document.createEvent ? function(e, t) {
                        var n = document.createEvent("CustomEvent");
                        return t ? n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail) : n.initCustomEvent(e, !1, !1, void 0), n;
                    } : function(e, t) {
                        var n = document.createEventObject();
                        return n.type = e, t ? (n.bubbles = Boolean(t.bubbles), n.cancelable = Boolean(t.cancelable), n.detail = t.detail) : (n.bubbles = !1, n.cancelable = !1, n.detail = void 0), n;
                    };
                }).call(this);
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        },
        {}
    ],
    8: [
        function(e15, t20, n13) {
            "use strict";
            var o = {}, i = "(?:^|\\s)", r = "(?:\\s|$)";
            function a(e) {
                var t = o[e];
                return t ? t.lastIndex = 0 : o[e] = t = new RegExp(i + e + r, "g"), t;
            }
            t20.exports = {
                add: function(e, t) {
                    var n = e.className;
                    n.length ? a(t).test(n) || (e.className += " " + t) : e.className = t;
                },
                rm: function(e, t) {
                    e.className = e.className.replace(a(t), " ").trim();
                }
            };
        },
        {}
    ],
    9: [
        function(e16, t21, n14) {
            (function(n15) {
                (function() {
                    var o7 = e16("contra/emitter"), i6 = e16("crossvent"), r3 = e16("./classes"), a3 = document, c1 = a3.documentElement;
                    function d2(e, t, o, r) {
                        n15.navigator.pointerEnabled ? i6[t](e, {
                            mouseup: "pointerup",
                            mousedown: "pointerdown",
                            mousemove: "pointermove"
                        }[o], r) : n15.navigator.msPointerEnabled ? i6[t](e, {
                            mouseup: "MSPointerUp",
                            mousedown: "MSPointerDown",
                            mousemove: "MSPointerMove"
                        }[o], r) : (i6[t](e, {
                            mouseup: "touchend",
                            mousedown: "touchstart",
                            mousemove: "touchmove"
                        }[o], r), i6[t](e, o, r));
                    }
                    function s1(e) {
                        if (void 0 !== e.touches) return e.touches.length;
                        if (void 0 !== e.which && 0 !== e.which) return e.which;
                        if (void 0 !== e.buttons) return e.buttons;
                        var t = e.button;
                        return void 0 !== t ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : void 0;
                    }
                    function l1(e, t) {
                        return void 0 !== n15[t] ? n15[t] : c1.clientHeight ? c1[e] : a3.body[e];
                    }
                    function u1(e, t, n) {
                        var o, i = (e = e || {}).className || "";
                        return e.className += " gu-hide", o = a3.elementFromPoint(t, n), e.className = i, o;
                    }
                    function f1() {
                        return !1;
                    }
                    function p1() {
                        return !0;
                    }
                    function v1(e) {
                        return e.width || e.right - e.left;
                    }
                    function m(e) {
                        return e.height || e.bottom - e.top;
                    }
                    function h(e) {
                        return e.parentNode === a3 ? null : e.parentNode;
                    }
                    function g(e17) {
                        return "INPUT" === e17.tagName || "TEXTAREA" === e17.tagName || "SELECT" === e17.tagName || function e(t) {
                            if (!t) return !1;
                            if ("false" === t.contentEditable) return !1;
                            if ("true" === t.contentEditable) return !0;
                            return e(h(t));
                        }(e17);
                    }
                    function y(e) {
                        return e.nextElementSibling || function() {
                            var t = e;
                            do t = t.nextSibling;
                            while (t && 1 !== t.nodeType)
                            return t;
                        }();
                    }
                    function b(e18, t) {
                        var n = function(e) {
                            return e.targetTouches && e.targetTouches.length ? e.targetTouches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e;
                        }(t), o = {
                            pageX: "clientX",
                            pageY: "clientY"
                        };
                        return e18 in o && !(e18 in n) && o[e18] in n && (e18 = o[e18]), n[e18];
                    }
                    t21.exports = function(e19, t22) {
                        var n16, w, E, T, x, C, O, k, S, L, B;
                        1 === arguments.length && !1 === Array.isArray(e19) && (t22 = e19, e19 = []);
                        var N, I = null, A = t22 || {};
                        void 0 === A.moves && (A.moves = p1), void 0 === A.accepts && (A.accepts = p1), void 0 === A.invalid && (A.invalid = function() {
                            return !1;
                        }), void 0 === A.containers && (A.containers = e19 || []), void 0 === A.isContainer && (A.isContainer = f1), void 0 === A.copy && (A.copy = !1), void 0 === A.copySortSource && (A.copySortSource = !1), void 0 === A.revertOnSpill && (A.revertOnSpill = !1), void 0 === A.removeOnSpill && (A.removeOnSpill = !1), void 0 === A.direction && (A.direction = "vertical"), void 0 === A.ignoreInputTextSelection && (A.ignoreInputTextSelection = !0), void 0 === A.mirrorContainer && (A.mirrorContainer = a3.body);
                        var _ = o7({
                            containers: A.containers,
                            start: function(e) {
                                var t = j(e);
                                t && F(t);
                            },
                            end: R,
                            cancel: W,
                            remove: V,
                            destroy: function() {
                                P(!0), K({});
                            },
                            canMove: function(e) {
                                return !!j(e);
                            },
                            dragging: !1
                        });
                        return !0 === A.removeOnSpill && _.on("over", function(e) {
                            r3.rm(e, "gu-hide");
                        }).on("out", function(e) {
                            _.dragging && r3.add(e, "gu-hide");
                        }), P(), _;
                        function H(e) {
                            return -1 !== _.containers.indexOf(e) || A.isContainer(e);
                        }
                        function P(e) {
                            var t = e ? "remove" : "add";
                            d2(c1, t, "mousedown", X), d2(c1, t, "mouseup", K);
                        }
                        function q(e) {
                            d2(c1, e ? "remove" : "add", "mousemove", Y);
                        }
                        function M(e) {
                            var t = e ? "remove" : "add";
                            i6[t](c1, "selectstart", D), i6[t](c1, "click", D);
                        }
                        function D(e) {
                            N && e.preventDefault();
                        }
                        function X(e) {
                            if (C = e.clientX, O = e.clientY, 1 === s1(e) && !e.metaKey && !e.ctrlKey) {
                                var t = e.target, n = j(t);
                                n && (N = n, q(), "mousedown" === e.type && (g(t) ? t.focus() : e.preventDefault()));
                            }
                        }
                        function Y(e20) {
                            if (N) if (0 !== s1(e20)) {
                                if (!(void 0 !== e20.clientX && Math.abs(e20.clientX - C) <= (A.slideFactorX || 0) && void 0 !== e20.clientY && Math.abs(e20.clientY - O) <= (A.slideFactorY || 0))) {
                                    if (A.ignoreInputTextSelection) {
                                        var t = b("clientX", e20) || 0, o = b("clientY", e20) || 0;
                                        if (g(a3.elementFromPoint(t, o))) return;
                                    }
                                    var i = N;
                                    q(!0), M(), R(), F(i);
                                    var u, f = {
                                        left: (u = E.getBoundingClientRect()).left + l1("scrollLeft", "pageXOffset"),
                                        top: u.top + l1("scrollTop", "pageYOffset")
                                    };
                                    T = b("pageX", e20) - f.left, x = b("pageY", e20) - f.top, r3.add(L || E, "gu-transit"), function() {
                                        if (!n16) {
                                            var e = E.getBoundingClientRect();
                                            (n16 = E.cloneNode(!0)).style.width = v1(e) + "px", n16.style.height = m(e) + "px", r3.rm(n16, "gu-transit"), r3.add(n16, "gu-mirror"), A.mirrorContainer.appendChild(n16), d2(c1, "add", "mousemove", Q), r3.add(A.mirrorContainer, "gu-unselectable"), _.emit("cloned", n16, E, "mirror");
                                        }
                                    }(), Q(e20);
                                }
                            } else K({});
                        }
                        function j(e) {
                            if (!(_.dragging && n16 || H(e))) {
                                for(var t = e; h(e) && !1 === H(h(e));){
                                    if (A.invalid(e, t)) return;
                                    if (!(e = h(e))) return;
                                }
                                var o = h(e);
                                if (o && !A.invalid(e, t) && A.moves(e, o, t, y(e))) return {
                                    item: e,
                                    source: o
                                };
                            }
                        }
                        function F(e) {
                            var t, n;
                            t = e.item, n = e.source, ("boolean" == typeof A.copy ? A.copy : A.copy(t, n)) && (L = e.item.cloneNode(!0), _.emit("cloned", L, e.item, "copy")), w = e.source, E = e.item, k = S = y(e.item), _.dragging = !0, _.emit("drag", E, w);
                        }
                        function R() {
                            if (_.dragging) {
                                var e = L || E;
                                z(e, h(e));
                            }
                        }
                        function U() {
                            N = !1, q(!0), M(!0);
                        }
                        function K(e) {
                            if (U(), _.dragging) {
                                var t = L || E, o = b("clientX", e) || 0, i = b("clientY", e) || 0, r = J(u1(n16, o, i), o, i);
                                r && (L && A.copySortSource || !L || r !== w) ? z(t, r) : A.removeOnSpill ? V() : W();
                            }
                        }
                        function z(e, t) {
                            var n = h(e);
                            L && A.copySortSource && t === w && n.removeChild(E), $(t) ? _.emit("cancel", e, w, w) : _.emit("drop", e, t, w, S), G();
                        }
                        function V() {
                            if (_.dragging) {
                                var e = L || E, t = h(e);
                                t && t.removeChild(e), _.emit(L ? "cancel" : "remove", e, t, w), G();
                            }
                        }
                        function W(e) {
                            if (_.dragging) {
                                var t = arguments.length > 0 ? e : A.revertOnSpill, n = L || E, o = h(n), i = $(o);
                                !1 === i && t && (L ? o && o.removeChild(L) : w.insertBefore(n, k)), i || t ? _.emit("cancel", n, w, w) : _.emit("drop", n, o, w, S), G();
                            }
                        }
                        function G() {
                            var e = L || E;
                            U(), n16 && (r3.rm(A.mirrorContainer, "gu-unselectable"), d2(c1, "remove", "mousemove", Q), h(n16).removeChild(n16), n16 = null), e && r3.rm(e, "gu-transit"), B && clearTimeout(B), _.dragging = !1, I && _.emit("out", e, I, w), _.emit("dragend", e), w = E = L = k = S = B = I = null;
                        }
                        function $(e, t) {
                            var o;
                            return o = void 0 !== t ? t : n16 ? S : y(L || E), e === w && o === k;
                        }
                        function J(e, t, n) {
                            for(var o = e; o && !i7();)o = h(o);
                            return o;
                            function i7() {
                                if (!1 === H(o)) return !1;
                                var i = Z(o, e), r = ee(o, i, t, n);
                                return !!$(o, r) || A.accepts(E, o, w, r);
                            }
                        }
                        function Q(e21) {
                            if (n16) {
                                e21.preventDefault();
                                var t = b("clientX", e21) || 0, o = b("clientY", e21) || 0, i = t - T, r = o - x;
                                n16.style.left = i + "px", n16.style.top = r + "px";
                                var a = L || E, c = u1(n16, t, o), d = J(c, t, o), s = null !== d && d !== I;
                                (s || null === d) && (I && v("out"), I = d, s && v("over"));
                                var l = h(a);
                                if (d !== w || !L || A.copySortSource) {
                                    var f, p = Z(d, c);
                                    if (null !== p) f = ee(d, p, t, o);
                                    else {
                                        if (!0 !== A.revertOnSpill || L) return void (L && l && l.removeChild(a));
                                        f = k, d = w;
                                    }
                                    (null === f && s || f !== a && f !== y(a)) && (S = f, d.insertBefore(a, f), _.emit("shadow", a, d, w));
                                } else l && l.removeChild(a);
                            }
                            function v(e) {
                                _.emit(e, a, I, w);
                            }
                        }
                        function Z(e, t) {
                            for(var n = t; n !== e && h(n) !== e;)n = h(n);
                            return n === c1 ? null : n;
                        }
                        function ee(e22, t23, n, o) {
                            var i8, r = "horizontal" === A.direction;
                            return t23 !== e22 ? (i8 = t23.getBoundingClientRect(), a4(r ? n > i8.left + v1(i8) / 2 : o > i8.top + m(i8) / 2)) : function() {
                                var t, i, a, c = e22.children.length;
                                for(t = 0; t < c; t++){
                                    if (i = e22.children[t], a = i.getBoundingClientRect(), r && a.left + a.width / 2 > n) return i;
                                    if (!r && a.top + a.height / 2 > o) return i;
                                }
                                return null;
                            }();
                            function a4(e) {
                                return e ? y(t23) : t23;
                            }
                        }
                    };
                }).call(this);
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        },
        {
            "./classes": 8,
            "contra/emitter": 4,
            crossvent: 5
        }
    ],
    10: [
        function(e23, t24, n17) {
            var o, i, r = t24.exports = {};
            function a() {
                throw new Error("setTimeout has not been defined");
            }
            function c() {
                throw new Error("clearTimeout has not been defined");
            }
            function d(e) {
                if (o === setTimeout) return setTimeout(e, 0);
                if ((o === a || !o) && setTimeout) return o = setTimeout, setTimeout(e, 0);
                try {
                    return o(e, 0);
                } catch (t) {
                    try {
                        return o.call(null, e, 0);
                    } catch (t) {
                        return o.call(this, e, 0);
                    }
                }
            }
            !function() {
                try {
                    o = "function" == typeof setTimeout ? setTimeout : a;
                } catch (e) {
                    o = a;
                }
                try {
                    i = "function" == typeof clearTimeout ? clearTimeout : c;
                } catch (e24) {
                    i = c;
                }
            }();
            var s, l = [], u = !1, f = -1;
            function p() {
                u && s && (u = !1, s.length ? l = s.concat(l) : f = -1, l.length && v());
            }
            function v() {
                if (!u) {
                    var e25 = d(p);
                    u = !0;
                    for(var t = l.length; t;){
                        for(s = l, l = []; ++f < t;)s && s[f].run();
                        f = -1, t = l.length;
                    }
                    s = null, u = !1, function(e) {
                        if (i === clearTimeout) return clearTimeout(e);
                        if ((i === c || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
                        try {
                            i(e);
                        } catch (t) {
                            try {
                                return i.call(null, e);
                            } catch (t) {
                                return i.call(this, e);
                            }
                        }
                    }(e25);
                }
            }
            function m(e, t) {
                this.fun = e, this.array = t;
            }
            function h() {}
            r.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1) for(var n = 1; n < arguments.length; n++)t[n - 1] = arguments[n];
                l.push(new m(e, t)), 1 !== l.length || u || d(v);
            }, m.prototype.run = function() {
                this.fun.apply(null, this.array);
            }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = h, r.addListener = h, r.once = h, r.off = h, r.removeListener = h, r.removeAllListeners = h, r.emit = h, r.prependListener = h, r.prependOnceListener = h, r.listeners = function(e) {
                return [];
            }, r.binding = function(e) {
                throw new Error("process.binding is not supported");
            }, r.cwd = function() {
                return "/";
            }, r.chdir = function(e) {
                throw new Error("process.chdir is not supported");
            }, r.umask = function() {
                return 0;
            };
        },
        {}
    ],
    11: [
        function(e27, t25, n18) {
            (function(e28) {
                (function() {
                    var n;
                    n = "function" == typeof e28 ? function(t) {
                        e28(t);
                    } : function(e) {
                        setTimeout(e, 0);
                    }, t25.exports = n;
                }).call(this);
            }).call(this, e27("timers").setImmediate);
        },
        {
            timers: 12
        }
    ],
    12: [
        function(e29, t26, n) {
            (function(t27, o8) {
                (function() {
                    var i = e29("process/browser.js").nextTick, r = Function.prototype.apply, a = Array.prototype.slice, c = {}, d = 0;
                    function s(e, t) {
                        this._id = e, this._clearFn = t;
                    }
                    n.setTimeout = function() {
                        return new s(r.call(setTimeout, window, arguments), clearTimeout);
                    }, n.setInterval = function() {
                        return new s(r.call(setInterval, window, arguments), clearInterval);
                    }, n.clearTimeout = n.clearInterval = function(e) {
                        e.close();
                    }, s.prototype.unref = s.prototype.ref = function() {}, s.prototype.close = function() {
                        this._clearFn.call(window, this._id);
                    }, n.enroll = function(e, t) {
                        clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
                    }, n.unenroll = function(e) {
                        clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
                    }, n._unrefActive = n.active = function(e) {
                        clearTimeout(e._idleTimeoutId);
                        var t = e._idleTimeout;
                        t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                            e._onTimeout && e._onTimeout();
                        }, t));
                    }, n.setImmediate = "function" == typeof t27 ? t27 : function(e) {
                        var t = d++, o = !(arguments.length < 2) && a.call(arguments, 1);
                        return c[t] = !0, i(function() {
                            c[t] && (o ? e.apply(null, o) : e.call(null), n.clearImmediate(t));
                        }), t;
                    }, n.clearImmediate = "function" == typeof o8 ? o8 : function(e) {
                        delete c[e];
                    };
                }).call(this);
            }).call(this, e29("timers").setImmediate, e29("timers").clearImmediate);
        },
        {
            "process/browser.js": 10,
            timers: 12
        }
    ]
}, {}, [
    1
]);

},{}]},["2kp7o","bYfRn"], "bYfRn", "parcelRequire48b2")

//# sourceMappingURL=kanban.b13de973.js.map
