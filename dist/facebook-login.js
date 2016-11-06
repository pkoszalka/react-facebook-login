(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["FacebookLogin"] = factory(require("react"));
	else
		root["FacebookLogin"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _facebook = __webpack_require__(2);

	var _facebook2 = _interopRequireDefault(_facebook);

	exports['default'] = _facebook2['default'];
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _stylesFacebookScss = __webpack_require__(4);

	var _stylesFacebookScss2 = _interopRequireDefault(_stylesFacebookScss);

	var FacebookLogin = (function (_React$Component) {
	  _inherits(FacebookLogin, _React$Component);

	  _createClass(FacebookLogin, null, [{
	    key: 'propTypes',
	    value: {
	      callback: _react.PropTypes.func.isRequired,
	      appId: _react.PropTypes.string.isRequired,
	      xfbml: _react.PropTypes.bool,
	      cookie: _react.PropTypes.bool,
	      scope: _react.PropTypes.string,
	      textButton: _react.PropTypes.string,
	      autoLoad: _react.PropTypes.bool,
	      size: _react.PropTypes.string,
	      fields: _react.PropTypes.string,
	      cssClass: _react.PropTypes.string,
	      version: _react.PropTypes.string,
	      icon: _react.PropTypes.string,
	      language: _react.PropTypes.string
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      textButton: 'Login with Facebook',
	      scope: 'public_profile, email',
	      xfbml: false,
	      cookie: false,
	      size: 'metro',
	      fields: 'name',
	      cssClass: 'kep-login-facebook',
	      version: '2.3',
	      language: 'en_US'
	    },
	    enumerable: true
	  }]);

	  function FacebookLogin(props) {
	    var _this = this;

	    _classCallCheck(this, FacebookLogin);

	    _React$Component.call(this, props);

	    this.responseApi = function (authResponse) {
	      FB.api('/me', { fields: _this.props.fields }, function (me) {
	        me.accessToken = authResponse.accessToken;
	        me.signedRequest = authResponse.signedRequest;
	        _this.props.callback(me);
	      });
	    };

	    this.checkLoginState = function (response) {
	      if (response.authResponse) {
	        _this.responseApi(response.authResponse);
	      } else {
	        if (_this.props.callback) {
	          _this.props.callback({ status: response.status });
	        }
	      }
	    };

	    this.click = function () {
	      FB.login(_this.checkLoginState, { scope: _this.props.scope });
	    };
	  }

	  FacebookLogin.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;

	    var fbRoot = document.createElement('div');
	    fbRoot.id = 'fb-root';

	    document.body.appendChild(fbRoot);

	    window.fbAsyncInit = function () {
	      FB.init({
	        appId: _this2.props.appId,
	        xfbml: _this2.props.xfbml,
	        cookie: _this2.props.cookie,
	        version: 'v' + _this2.props.version
	      });

	      if (_this2.props.autoLoad) {
	        FB.getLoginStatus(_this2.checkLoginState);
	      }
	    };

	    // Load the SDK asynchronously
	    (function (d, s, id) {
	      var element = d.getElementsByTagName(s)[0];
	      var fjs = element;
	      var js = element;
	      if (d.getElementById(id)) {
	        return;
	      }
	      js = d.createElement(s);js.id = id;
	      js.src = '//connect.facebook.net/' + _this2.props.language + '/all.js';
	      fjs.parentNode.insertBefore(js, fjs);
	    })(document, 'script', 'facebook-jssdk');
	  };

	  FacebookLogin.prototype.renderWithFontAwesome = function renderWithFontAwesome() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement('link', { rel: 'stylesheet', href: '//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' }),
	      _react2['default'].createElement(
	        'button',
	        {
	          className: this.props.cssClass + ' ' + this.props.size,
	          onClick: this.click },
	        _react2['default'].createElement('i', { className: 'fa ' + this.props.icon }),
	        ' ',
	        this.props.textButton
	      ),
	      _react2['default'].createElement('style', { dangerouslySetInnerHTML: { __html: _stylesFacebookScss2['default'] } })
	    );
	  };

	  FacebookLogin.prototype.render = function render() {
	    if (this.props.icon) {
	      return this.renderWithFontAwesome();
	    }

	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'button',
	        {
	          className: this.props.cssClass + ' ' + this.props.size,
	          onClick: this.click },
	        this.props.textButton
	      ),
	      _react2['default'].createElement('style', { dangerouslySetInnerHTML: { __html: _stylesFacebookScss2['default'] } })
	    );
	  };

	  return FacebookLogin;
	})(_react2['default'].Component);

	exports['default'] = FacebookLogin;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".kep-login-facebook {\n  font-family: \"Helvetica\", sans-serif;\n  font-weight: bold;\n  -webkit-font-smoothing: antialiased;\n  border-width: calc(0.06887vw + 0.67769px);\n  border-style: solid;\n  color: #FFF;\n  cursor: pointer;\n  display: inline-block;\n  font-size: calc(0.27548vw + 12.71074px);\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: background-color .3s, border-color .3s;\n  background-color: #4C69BA;\n  border-color: #4C69BA;\n  padding: calc(0.34435vw + 13.38843px) calc(0.34435vw + 18.38843px); }\n\n.kep-login-facebook.small {\n  padding: calc(0.34435vw + 3.38843px) calc(0.34435vw + 8.38843px); }\n\n.kep-login-facebook.medium {\n  padding: calc(0.34435vw + 8.38843px) calc(0.34435vw + 13.38843px); }\n\n.kep-login-facebook.metro {\n  border-radius: 0; }\n\n.kep-login-facebook .fa {\n  margin-right: calc(0.34435vw + 3.38843px); }\n", ""]);

	// exports
	exports.locals = {
		"kep-login-facebook": "kep-login-facebook",
		"small": "small",
		"medium": "medium",
		"metro": "metro",
		"fa": "fa"
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }
/******/ ])
});
;