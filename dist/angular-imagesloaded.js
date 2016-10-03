(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("angular-imagesloaded", [], factory);
	else if(typeof exports === 'object')
		exports["angular-imagesloaded"] = factory();
	else
		root["angular-imagesloaded"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _imagesloaded = __webpack_require__(1);
	
	angular.module('bc.imagesloaded', []).directive('bcImagesloaded', _imagesloaded.ImagesLoadedDirective);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ImagesLoadedDirective = ImagesLoadedDirective;
	
	var _imagesloaded = __webpack_require__(2);
	
	function ImagesLoadedDirective() {
	    'ngInject';
	
	    var directive = {
	        restrict: 'A',
	        replace: true,
	        scope: {},
	        bindToController: {
	            bcImagesloaded: '@?', // accepts object or string
	            bcBackground: '@?', // accepts bool or string
	            bcDebug: '@?', // accepts bool
	            bcAlwaysMethod: '&?', // accepts method
	            bcDoneMethod: '&?', // accepts method
	            bcFailMethod: '&?', // accepts method
	            bcProgressMethod: '&?' },
	        link: linkFunction,
	        controller: _imagesloaded.ImagesLoadedController,
	        controllerAs: 'vm'
	    };
	
	    return directive;
	
	    /**
	     * Link
	     */
	    function linkFunction($scope, $element, $attrs, $ctrl) {
	        // Expose the $element to the controller
	        $ctrl.$element = $element;
	
	        // Once we have access to the $element, get everything set up
	        $ctrl.setup();
	    }
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ImagesLoadedController = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _imagesloaded = __webpack_require__(3);
	
	var _imagesloaded2 = _interopRequireDefault(_imagesloaded);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ImagesLoadedController = exports.ImagesLoadedController = function () {
	    function ImagesLoadedController() {
	        'ngInject';
	
	        _classCallCheck(this, ImagesLoadedController);
	    }
	
	    _createClass(ImagesLoadedController, [{
	        key: 'setup',
	        value: function setup() {
	            // Set up default options object
	            this.options = {};
	
	            // If the background option is set to true
	            if (this.bcBackground && this.bcBackground === 'true') {
	                this.options.background = true;
	            } else if (this.bcBackground && typeof this.bcBackground === 'string') {
	                // if the background type is a string, expect it to be a selector
	                this.options.background = this.bcBackground;
	            }
	
	            // If the debug option is set to true
	            if (this.bcDebug && this.bcDebug === 'true') {
	                this.options.debug = true;
	            }
	
	            // Expose imagesLoaded on 'this'
	            this.imagesLoaded = _imagesloaded2.default;
	
	            this._initialize();
	            this._bindEvents();
	        }
	
	        /**
	         * Set up the imagesloaded instance
	         */
	
	    }, {
	        key: '_initialize',
	        value: function _initialize() {
	            // Test for string or object
	            var isValidObject = _typeof(this.bcImagesloaded) === 'object';
	            var isValidString = typeof this.bcImagesloaded === 'string' && this.bcImagesloaded.length > 0;
	
	            // If a selector is passed in
	            if (isValidString) {
	
	                // If a class was passed in
	                if (this.bcImagesloaded.charAt(0) === '.') {
	                    var initElement = this.$element[0].querySelectorAll(this.bcImagesloaded);
	                    this.instance = this.imagesLoaded(initElement, this.options);
	                } else if (this.bcImagesloaded.charAt(0) === '#') {
	                    // If an ID was passed in
	                    var _initElement = this.$element[0].querySelector(this.bcImagesloaded);
	                    this.instance = this.imagesLoaded(_initElement, this.options);
	                }
	            } else if (isValidObject) {
	                // If it's an object, pass it straight in
	                this.instance = this.imagesLoaded(this.bcImagesloaded, this.options);
	            } else {
	                // By default use the element itself
	                this.instance = this.imagesLoaded(this.$element, this.options);
	            }
	        }
	
	        /**
	         * Bind any applicable methods to events
	         */
	
	    }, {
	        key: '_bindEvents',
	        value: function _bindEvents() {
	            var _this = this;
	
	            // If 'always' function was assigned
	            if (typeof this.bcAlwaysMethod === 'function') {
	                // Call the custom method on the event
	                this.instance.on('always', function (instance) {
	                    _this.bcAlwaysMethod({ instance: instance });
	                });
	            }
	
	            // If 'done' function was assigned
	            if (typeof this.bcDoneMethod === 'function') {
	                // Call the custom method on the event
	                this.instance.on('done', function (instance) {
	                    _this.bcDoneMethod({ instance: instance });
	                });
	            }
	
	            // If 'fail' function was assigned
	            if (typeof this.bcFailMethod === 'function') {
	                // Call the custom method on the event
	                this.instance.on('fail', function (instance) {
	                    _this.bcFailMethod({ instance: instance });
	                });
	            }
	
	            // If 'progress' function was assigned
	            if (typeof this.bcProgressMethod === 'function') {
	                // Call the custom method on the event
	                this.instance.on('progress', function (instance, image) {
	                    _this.bcProgressMethod({ instance: instance, image: image });
	                });
	            }
	        }
	    }]);
	
	    return ImagesLoadedController;
	}();

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*!
	 * imagesLoaded v4.1.1
	 * JavaScript is all like "You images are done yet or what?"
	 * MIT License
	 */
	
	(function (window, factory) {
	  'use strict';
	  // universal module definition
	
	  /*global define: false, module: false, require: false */
	
	  if (true) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (EvEmitter) {
	      return factory(window, EvEmitter);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
	    // CommonJS
	    module.exports = factory(window, require('ev-emitter'));
	  } else {
	    // browser global
	    window.imagesLoaded = factory(window, window.EvEmitter);
	  }
	})(window,
	
	// --------------------------  factory -------------------------- //
	
	function factory(window, EvEmitter) {
	
	  'use strict';
	
	  var $ = window.jQuery;
	  var console = window.console;
	
	  // -------------------------- helpers -------------------------- //
	
	  // extend objects
	  function extend(a, b) {
	    for (var prop in b) {
	      a[prop] = b[prop];
	    }
	    return a;
	  }
	
	  // turn element or nodeList into an array
	  function makeArray(obj) {
	    var ary = [];
	    if (Array.isArray(obj)) {
	      // use object if already an array
	      ary = obj;
	    } else if (typeof obj.length == 'number') {
	      // convert nodeList to array
	      for (var i = 0; i < obj.length; i++) {
	        ary.push(obj[i]);
	      }
	    } else {
	      // array of single index
	      ary.push(obj);
	    }
	    return ary;
	  }
	
	  // -------------------------- imagesLoaded -------------------------- //
	
	  /**
	   * @param {Array, Element, NodeList, String} elem
	   * @param {Object or Function} options - if function, use as callback
	   * @param {Function} onAlways - callback function
	   */
	  function ImagesLoaded(elem, options, onAlways) {
	    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
	    if (!(this instanceof ImagesLoaded)) {
	      return new ImagesLoaded(elem, options, onAlways);
	    }
	    // use elem as selector string
	    if (typeof elem == 'string') {
	      elem = document.querySelectorAll(elem);
	    }
	
	    this.elements = makeArray(elem);
	    this.options = extend({}, this.options);
	
	    if (typeof options == 'function') {
	      onAlways = options;
	    } else {
	      extend(this.options, options);
	    }
	
	    if (onAlways) {
	      this.on('always', onAlways);
	    }
	
	    this.getImages();
	
	    if ($) {
	      // add jQuery Deferred object
	      this.jqDeferred = new $.Deferred();
	    }
	
	    // HACK check async to allow time to bind listeners
	    setTimeout(function () {
	      this.check();
	    }.bind(this));
	  }
	
	  ImagesLoaded.prototype = Object.create(EvEmitter.prototype);
	
	  ImagesLoaded.prototype.options = {};
	
	  ImagesLoaded.prototype.getImages = function () {
	    this.images = [];
	
	    // filter & find items if we have an item selector
	    this.elements.forEach(this.addElementImages, this);
	  };
	
	  /**
	   * @param {Node} element
	   */
	  ImagesLoaded.prototype.addElementImages = function (elem) {
	    // filter siblings
	    if (elem.nodeName == 'IMG') {
	      this.addImage(elem);
	    }
	    // get background image on element
	    if (this.options.background === true) {
	      this.addElementBackgroundImages(elem);
	    }
	
	    // find children
	    // no non-element nodes, #143
	    var nodeType = elem.nodeType;
	    if (!nodeType || !elementNodeTypes[nodeType]) {
	      return;
	    }
	    var childImgs = elem.querySelectorAll('img');
	    // concat childElems to filterFound array
	    for (var i = 0; i < childImgs.length; i++) {
	      var img = childImgs[i];
	      this.addImage(img);
	    }
	
	    // get child background images
	    if (typeof this.options.background == 'string') {
	      var children = elem.querySelectorAll(this.options.background);
	      for (i = 0; i < children.length; i++) {
	        var child = children[i];
	        this.addElementBackgroundImages(child);
	      }
	    }
	  };
	
	  var elementNodeTypes = {
	    1: true,
	    9: true,
	    11: true
	  };
	
	  ImagesLoaded.prototype.addElementBackgroundImages = function (elem) {
	    var style = getComputedStyle(elem);
	    if (!style) {
	      // Firefox returns null if in a hidden iframe https://bugzil.la/548397
	      return;
	    }
	    // get url inside url("...")
	    var reURL = /url\((['"])?(.*?)\1\)/gi;
	    var matches = reURL.exec(style.backgroundImage);
	    while (matches !== null) {
	      var url = matches && matches[2];
	      if (url) {
	        this.addBackground(url, elem);
	      }
	      matches = reURL.exec(style.backgroundImage);
	    }
	  };
	
	  /**
	   * @param {Image} img
	   */
	  ImagesLoaded.prototype.addImage = function (img) {
	    var loadingImage = new LoadingImage(img);
	    this.images.push(loadingImage);
	  };
	
	  ImagesLoaded.prototype.addBackground = function (url, elem) {
	    var background = new Background(url, elem);
	    this.images.push(background);
	  };
	
	  ImagesLoaded.prototype.check = function () {
	    var _this = this;
	    this.progressedCount = 0;
	    this.hasAnyBroken = false;
	    // complete if no images
	    if (!this.images.length) {
	      this.complete();
	      return;
	    }
	
	    function onProgress(image, elem, message) {
	      // HACK - Chrome triggers event before object properties have changed. #83
	      setTimeout(function () {
	        _this.progress(image, elem, message);
	      });
	    }
	
	    this.images.forEach(function (loadingImage) {
	      loadingImage.once('progress', onProgress);
	      loadingImage.check();
	    });
	  };
	
	  ImagesLoaded.prototype.progress = function (image, elem, message) {
	    this.progressedCount++;
	    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
	    // progress event
	    this.emitEvent('progress', [this, image, elem]);
	    if (this.jqDeferred && this.jqDeferred.notify) {
	      this.jqDeferred.notify(this, image);
	    }
	    // check if completed
	    if (this.progressedCount == this.images.length) {
	      this.complete();
	    }
	
	    if (this.options.debug && console) {
	      console.log('progress: ' + message, image, elem);
	    }
	  };
	
	  ImagesLoaded.prototype.complete = function () {
	    var eventName = this.hasAnyBroken ? 'fail' : 'done';
	    this.isComplete = true;
	    this.emitEvent(eventName, [this]);
	    this.emitEvent('always', [this]);
	    if (this.jqDeferred) {
	      var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
	      this.jqDeferred[jqMethod](this);
	    }
	  };
	
	  // --------------------------  -------------------------- //
	
	  function LoadingImage(img) {
	    this.img = img;
	  }
	
	  LoadingImage.prototype = Object.create(EvEmitter.prototype);
	
	  LoadingImage.prototype.check = function () {
	    // If complete is true and browser supports natural sizes,
	    // try to check for image status manually.
	    var isComplete = this.getIsImageComplete();
	    if (isComplete) {
	      // report based on naturalWidth
	      this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
	      return;
	    }
	
	    // If none of the checks above matched, simulate loading on detached element.
	    this.proxyImage = new Image();
	    this.proxyImage.addEventListener('load', this);
	    this.proxyImage.addEventListener('error', this);
	    // bind to image as well for Firefox. #191
	    this.img.addEventListener('load', this);
	    this.img.addEventListener('error', this);
	    this.proxyImage.src = this.img.src;
	  };
	
	  LoadingImage.prototype.getIsImageComplete = function () {
	    return this.img.complete && this.img.naturalWidth !== undefined;
	  };
	
	  LoadingImage.prototype.confirm = function (isLoaded, message) {
	    this.isLoaded = isLoaded;
	    this.emitEvent('progress', [this, this.img, message]);
	  };
	
	  // ----- events ----- //
	
	  // trigger specified handler for event type
	  LoadingImage.prototype.handleEvent = function (event) {
	    var method = 'on' + event.type;
	    if (this[method]) {
	      this[method](event);
	    }
	  };
	
	  LoadingImage.prototype.onload = function () {
	    this.confirm(true, 'onload');
	    this.unbindEvents();
	  };
	
	  LoadingImage.prototype.onerror = function () {
	    this.confirm(false, 'onerror');
	    this.unbindEvents();
	  };
	
	  LoadingImage.prototype.unbindEvents = function () {
	    this.proxyImage.removeEventListener('load', this);
	    this.proxyImage.removeEventListener('error', this);
	    this.img.removeEventListener('load', this);
	    this.img.removeEventListener('error', this);
	  };
	
	  // -------------------------- Background -------------------------- //
	
	  function Background(url, element) {
	    this.url = url;
	    this.element = element;
	    this.img = new Image();
	  }
	
	  // inherit LoadingImage prototype
	  Background.prototype = Object.create(LoadingImage.prototype);
	
	  Background.prototype.check = function () {
	    this.img.addEventListener('load', this);
	    this.img.addEventListener('error', this);
	    this.img.src = this.url;
	    // check if image is already complete
	    var isComplete = this.getIsImageComplete();
	    if (isComplete) {
	      this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
	      this.unbindEvents();
	    }
	  };
	
	  Background.prototype.unbindEvents = function () {
	    this.img.removeEventListener('load', this);
	    this.img.removeEventListener('error', this);
	  };
	
	  Background.prototype.confirm = function (isLoaded, message) {
	    this.isLoaded = isLoaded;
	    this.emitEvent('progress', [this, this.element, message]);
	  };
	
	  // -------------------------- jQuery -------------------------- //
	
	  ImagesLoaded.makeJQueryPlugin = function (jQuery) {
	    jQuery = jQuery || window.jQuery;
	    if (!jQuery) {
	      return;
	    }
	    // set local variable
	    $ = jQuery;
	    // $().imagesLoaded()
	    $.fn.imagesLoaded = function (options, callback) {
	      var instance = new ImagesLoaded(this, options, callback);
	      return instance.jqDeferred.promise($(this));
	    };
	  };
	  // try making plugin
	  ImagesLoaded.makeJQueryPlugin();
	
	  // --------------------------  -------------------------- //
	
	  return ImagesLoaded;
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * EvEmitter v1.0.3
	 * Lil' event emitter
	 * MIT License
	 */
	
	/* jshint unused: true, undef: true, strict: true */
	
	(function (global, factory) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, window */
	  if (true) {
	    // AMD - RequireJS
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory();
	  } else {
	    // Browser globals
	    global.EvEmitter = factory();
	  }
	})(typeof window != 'undefined' ? window : undefined, function () {
	
	  "use strict";
	
	  function EvEmitter() {}
	
	  var proto = EvEmitter.prototype;
	
	  proto.on = function (eventName, listener) {
	    if (!eventName || !listener) {
	      return;
	    }
	    // set events hash
	    var events = this._events = this._events || {};
	    // set listeners array
	    var listeners = events[eventName] = events[eventName] || [];
	    // only add once
	    if (listeners.indexOf(listener) == -1) {
	      listeners.push(listener);
	    }
	
	    return this;
	  };
	
	  proto.once = function (eventName, listener) {
	    if (!eventName || !listener) {
	      return;
	    }
	    // add event
	    this.on(eventName, listener);
	    // set once flag
	    // set onceEvents hash
	    var onceEvents = this._onceEvents = this._onceEvents || {};
	    // set onceListeners object
	    var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
	    // set flag
	    onceListeners[listener] = true;
	
	    return this;
	  };
	
	  proto.off = function (eventName, listener) {
	    var listeners = this._events && this._events[eventName];
	    if (!listeners || !listeners.length) {
	      return;
	    }
	    var index = listeners.indexOf(listener);
	    if (index != -1) {
	      listeners.splice(index, 1);
	    }
	
	    return this;
	  };
	
	  proto.emitEvent = function (eventName, args) {
	    var listeners = this._events && this._events[eventName];
	    if (!listeners || !listeners.length) {
	      return;
	    }
	    var i = 0;
	    var listener = listeners[i];
	    args = args || [];
	    // once stuff
	    var onceListeners = this._onceEvents && this._onceEvents[eventName];
	
	    while (listener) {
	      var isOnce = onceListeners && onceListeners[listener];
	      if (isOnce) {
	        // remove listener
	        // remove before trigger to prevent recursion
	        this.off(eventName, listener);
	        // unset once flag
	        delete onceListeners[listener];
	      }
	      // trigger listener
	      listener.apply(this, args);
	      // get next listener
	      i += isOnce ? 0 : 1;
	      listener = listeners[i];
	    }
	
	    return this;
	  };
	
	  return EvEmitter;
	});

/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-imagesloaded.js.map