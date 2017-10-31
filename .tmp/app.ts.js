/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(3);
	__webpack_require__(2);
	__webpack_require__(4);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(19);
	__webpack_require__(20);
	module.exports = __webpack_require__(21);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	mainConfig.$inject = ["$provide", "$compileProvider", "$locationProvider", "$qProvider", "config"];
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Configures the application (before running).
	 */
	function mainConfig($provide, $compileProvider, $locationProvider, $qProvider, config) {
	    // Extend the $exceptionHandler service to output logs.
	    $provide.decorator('$exceptionHandler', ["$delegate", "$injector", function ($delegate, $injector) {
	        return function (exception, cause) {
	            $delegate(exception, cause);
	            var logger = $injector.get('logger').getLogger('exceptionHandler');
	            logger.error(exception + (cause ? ' (' + cause + ')' : ''));
	        };
	    }]);
	    // Disable debug logs in production version
	    $provide.decorator('$log', ["$delegate", function ($delegate) {
	        if (!config.environment.debug) {
	            $delegate.log = angular.noop;
	            $delegate.debug = angular.noop;
	        }
	        return $delegate;
	    }]);
	    // Disable angular debug info in production version
	    $compileProvider.debugInfoEnabled(config.environment.debug);
	    // Use no hash prefix for routing
	    $locationProvider.hashPrefix('');
	    // Disable exception on unhandled rejections (we have our own handler)
	    $qProvider.errorOnUnhandledRejections(false);
	}
	main_module_1.default.config(mainConfig);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	Object.defineProperty(exports, "__esModule", { value: true });
	// Translations are injected at build phase
	angular.module('translations', []);
	exports.default = angular.module('app', [
	    'translations',
	    'gettext',
	    'ngAnimate',
	    'ngSanitize',
	    'ngCordova',
	    'ui.router',
	    'ionic'
	]);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	// Do not remove the comments below, or change the values. It's the markers used by gulp build task to change the
	// value of the config constant when building the application, while removing the code below for all environments.
	// replace:environment
	var environment = {
	    local: {
	        debug: true,
	        // REST backend configuration, used for all web services using restService
	        server: {
	            url: '',
	            route: 'api'
	        }
	    },
	    production: {
	        debug: false,
	        server: {
	            url: 'http://api.icndb.com',
	            route: ''
	        }
	    }
	};
	// endreplace
	/**
	 * Defines app-level configuration.
	 */
	var config = {
	    // Do not remove the comments below, or change the values. It's the markers used by gulp build task to inject app
	    // version from package.json and environment values.
	    // replace:constant
	    version: 'dev',
	    environment: environment.local,
	    // endreplace
	    // Supported languages
	    supportedLanguages: [
	        'en-US',
	        'fr-FR'
	    ]
	};
	main_module_1.default.constant('config', config);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	routeConfig.$inject = ["$stateProvider", "$urlRouterProvider", "gettext"];
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Configures the application routes.
	 */
	function routeConfig($stateProvider, $urlRouterProvider, gettext) {
	    // Routes configuration
	    $urlRouterProvider.otherwise('/');
	    $stateProvider
	        .state('app', {
	        template: __webpack_require__(5),
	        controller: 'shellController as shell'
	    })
	        .state('app.home', {
	        url: '/',
	        views: {
	            'menuContent': {
	                template: __webpack_require__(6),
	                controller: 'homeController as vm'
	            }
	        },
	        data: { title: gettext('Home') }
	    })
	        .state('app.about', {
	        url: '/about',
	        views: {
	            'menuContent': {
	                template: __webpack_require__(7),
	                controller: 'aboutController as vm'
	            }
	        },
	        data: { title: gettext('About') }
	    });
	}
	main_module_1.default.config(routeConfig);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = "<ion-side-menus id=\"shell\" class=\"shell\" enable-menu-with-back-views=\"true\"><!--View content--><ion-side-menu-content><ion-nav-bar class=\"bar-stable\"><ion-nav-back-button></ion-nav-back-button><ion-nav-buttons side=\"left\"><button class=\"button button-icon button-clear ion-navicon\" menu-toggle=\"left\" ng-hide=\"$exposeAside.active\"></button></ion-nav-buttons></ion-nav-bar><ion-nav-view name=\"menuContent\"></ion-nav-view></ion-side-menu-content><!--Side menu--><ion-side-menu side=\"left\" expose-aside-when=\"(min-width:769px)\"><ion-header-bar class=\"bar-dark\"><h1 class=\"title\" translate>APP_NAME</h1></ion-header-bar><ion-content class=\"dark-bg\"><ion-list><ion-item class=\"item-dark item-icon-left\" menu-close href=\"#/\" ng-class=\"{ active: shell.stateContains('app.home') }\"><span class=\"medium-dark\"><i class=\"icon ion-home icon-large\"></i> <span translate>Home</span></span></ion-item><ion-item class=\"item-dark item-icon-left text-darker\" menu-close href=\"#/about\" ng-class=\"{ active: shell.stateContains('app.about') }\"><span class=\"medium-dark\"><i class=\"icon ion-information-circled icon-large\"></i> <span translate>About</span></span></ion-item></ion-list></ion-content></ion-side-menu></ion-side-menus>"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = "<ion-view id=\"home-screen\" class=\"home-screen\"><ion-nav-title>{{viewTitle}}</ion-nav-title><ion-content><ion-list type=\"card\" class=\"text-center\"><ion-item class=\"item-divider\"><img class=\"logo\" src=\"images/angularjs-logo.png\" alt=\"angularjs logo\"><h1 translate>Hello world !</h1></ion-item><ion-item class=\"item-body\"><div ui-loading=\"vm.isLoading\"></div><em class=\"quote\">{{vm.quote}}</em></ion-item></ion-list></ion-content></ion-view>"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = "<ion-view id=\"about-screen\"><ion-nav-title>{{viewTitle}}</ion-nav-title><ion-content><ion-list type=\"card\"><ion-item class=\"text-center\"><h1><i class=\"icon ion-bookmark\"></i> <span translate>APP_NAME</span></h1><p><span translate>Version</span> {{vm.version}}</p></ion-item></ion-list></ion-content></ion-view>"

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	main.$inject = ["$window", "$locale", "$rootScope", "$state", "$timeout", "$cordovaKeyboard", "$ionicPlatform", "gettextCatalog", "_", "config", "logger", "restService"];
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Entry point of the application.
	 * Initializes application and root controller.
	 */
	function main($window, $locale, $rootScope, $state, $timeout, $cordovaKeyboard, $ionicPlatform, gettextCatalog, _, config, logger, restService) {
	    /*
	     * Root view model
	     */
	    var vm = $rootScope;
	    vm.pageTitle = '';
	    vm.viewTitle = '';
	    /**
	     * Utility method to set the language in the tools requiring it.
	     * The current language is saved to the local storage.
	     * If no parameter is specified, the language is loaded from local storage (if possible).
	     * @param {string=} language The IETF language tag.
	     */
	    vm.setLanguage = function (language) {
	        language = language || $window.localStorage.getItem('language');
	        var isSupportedLanguage = _.includes(config.supportedLanguages, language);
	        // If no exact match is found, search without the region
	        if (!isSupportedLanguage && language) {
	            var languagePart_1 = language.split('-')[0];
	            language = _.find(config.supportedLanguages, function (supportedLanguage) { return _.startsWith(supportedLanguage, languagePart_1); });
	            isSupportedLanguage = !!language;
	        }
	        // Fallback if language is not supported
	        if (!isSupportedLanguage) {
	            language = 'en-US';
	        }
	        // Configure translation with gettext
	        gettextCatalog.setCurrentLanguage(language);
	        $locale.id = language;
	        $window.localStorage.setItem('language', language);
	    };
	    /**
	     * Updates title on view change.
	     */
	    vm.$on('$stateChangeSuccess', function (event, toState) {
	        updateTitle(toState.data ? toState.data.title : null);
	    });
	    /**
	     * Updates title on language change.
	     */
	    vm.$on('gettextLanguageChanged', function () {
	        updateTitle($state.current.data ? $state.current.data.title : null);
	    });
	    init();
	    /*
	     * Internal
	     */
	    /**
	     * Initializes the root controller.
	     */
	    function init() {
	        var _logger = logger.getLogger('main');
	        // Enable debug mode for translations
	        gettextCatalog.debug = config.environment.debug;
	        vm.setLanguage();
	        // Set REST server configuration
	        restService.setServer(config.environment.server);
	        // Cordova platform and plugins init
	        $ionicPlatform.ready(function () {
	            // Hide splash screen
	            var splashScreen = $window.navigator.splashscreen;
	            if (splashScreen) {
	                $timeout(function () {
	                    splashScreen.hide();
	                }, 1000);
	            }
	            // Detect and set default language
	            var globalization = $window.navigator.globalization;
	            if (globalization) {
	                // Use cordova plugin to retrieve device's locale
	                globalization.getPreferredLanguage(function (language) {
	                    _logger.log('Setting device locale "' + language.value + '" as default language');
	                    vm.$apply(function () {
	                        vm.setLanguage(language.value);
	                    });
	                }, null);
	            }
	            if ($window.cordova && $window.cordova.plugins.Keyboard) {
	                $cordovaKeyboard.disableScroll(true);
	            }
	        });
	    }
	    /**
	     * Updates the title.
	     * @param {?string=} stateTitle Title of current state, to be translated.
	     */
	    function updateTitle(stateTitle) {
	        vm.pageTitle = gettextCatalog.getString('APP_NAME');
	        if (stateTitle) {
	            vm.viewTitle = gettextCatalog.getString(stateTitle);
	            vm.pageTitle += ' | ' + vm.viewTitle;
	        }
	    }
	}
	main_module_1.default.run(main);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Wraps external global libraries into AngularJS injection system.
	 * global window: false
	 */
	main_module_1.default.constant('_', _); // Lodash


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Displays the SPA shell.
	 * The shell contains the shared parts of the application: header, footer, navigation...
	 */
	var ShellController = /** @class */ (function () {
	    ShellController.$inject = ["$state", "$locale", "_", "logger"];
	    function ShellController($state, $locale, _, logger) {
	        this.$state = $state;
	        this._ = _;
	        this.currentLocale = $locale;
	        this.logger = logger.getLogger('shell');
	        this.logger.log('init');
	    }
	    /**
	     * Checks if the specified name is contained in the current navigation state.
	     * @param {string} name The state name to check.
	     * @return {boolean} True if the specified name is contained in the current navigation state.
	     */
	    ShellController.prototype.stateContains = function (name) {
	        return this._.startsWith(this.$state.current.name, name);
	    };
	    return ShellController;
	}());
	exports.ShellController = ShellController;
	main_module_1.default.controller('shellController', ShellController);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Cache service: manages cached data for GET requests.
	 * By default, the cache is only persisted in memory, but you can change this behavior using the setPersistence()
	 * method.
	 */
	var CacheService = /** @class */ (function () {
	    CacheService.$inject = ["$window", "logger"];
	    function CacheService($window, logger) {
	        this.$window = $window;
	        this.cachedData = {};
	        this.storage = null;
	        this.logger = logger.getLogger('cacheService');
	        /**
	         * Initializes service.
	         */
	        this.loadCacheData();
	    }
	    /**
	     * Sets the cache data for the specified request.
	     * @param {!string} url URL of the REST service call.
	     * @param {map=} params Map of strings or objects which will be turned to ?key1=value1&key2=value2 after the url. If the value is not a string, it will be
	     *   JSONified.
	     * @param {Object} data The received data.
	     * @param {Date=} date The cache date, now date is used if not specified.
	     */
	    CacheService.prototype.setCacheData = function (url, params, data, date) {
	        var cacheKey = this.getCacheKey(url, params);
	        this.cachedData[cacheKey] = {
	            date: date || new Date(),
	            data: data
	        };
	        this.logger.log('Cache set for key: "' + cacheKey + '"');
	        this.saveCacheData();
	    };
	    /**
	     * Gets the cached data (if possible) for the specified request.
	     * @param {!string} url URL of the REST service call.
	     * @param {?map=} params Map of strings or objects which will be turned to ?key1=value1&key2=value2 after the url. If the value is not a string, it will be
	     *   JSONified.
	     * @return {?Object} The cached data or null if no cached data exists for this request.
	     */
	    CacheService.prototype.getCacheData = function (url, params) {
	        var cacheKey = this.getCacheKey(url, params);
	        var cacheEntry = this.cachedData[cacheKey];
	        if (cacheEntry) {
	            this.logger.log('Cache hit for key: "' + cacheKey + '"');
	            return cacheEntry.data;
	        }
	        return null;
	    };
	    /**
	     * Gets the cached data date (if possible) for the specified request.
	     * @param {!string} url URL of the REST service call.
	     * @param {?map=} params Map of strings or objects which will be turned to ?key1=value1&key2=value2 after the url. If the value is not a string, it will be
	     *   JSONified.
	     * @return {?Object} The cached data date or null if no cached data exists for this request.
	     */
	    CacheService.prototype.getCacheDate = function (url, params) {
	        var cacheKey = this.getCacheKey(url, params);
	        var cacheEntry = this.cachedData[cacheKey];
	        return cacheEntry ? cacheEntry.date : null;
	    };
	    /**
	     * Clears the cached data (if exists) for the specified request.
	     * @param {!string} url URL of the REST service call.
	     * @param {?map=} params Map of strings or objects which will be turned to ?key1=value1&key2=value2 after the url. If the value is not a string, it will be
	     *   JSONified.
	     */
	    CacheService.prototype.clearCacheData = function (url, params) {
	        var cacheKey = this.getCacheKey(url, params);
	        this.cachedData[cacheKey] = undefined;
	        this.logger.log('Cache cleared for key: "' + cacheKey + '"');
	        this.saveCacheData();
	    };
	    /**
	     * Cleans cache entries older than the specified date.
	     * @param {date=} expirationDate The cache expiration date. If no date is specified, all cache is cleared.
	     */
	    CacheService.prototype.cleanCache = function (expirationDate) {
	        var _this = this;
	        if (expirationDate) {
	            angular.forEach(this.cachedData, function (value, key) {
	                if (expirationDate >= value.date) {
	                    _this.cachedData[key] = undefined;
	                }
	            });
	        }
	        else {
	            this.cachedData = {};
	        }
	        this.saveCacheData();
	    };
	    /**
	     * Sets the cache persistence.
	     * Note that changing the cache persistence will also clear the cache from its previous storage.
	     * @param {'local'|'session'=} persistence How the cache should be persisted, it can be either
	     *   in the local or session storage, or if no parameters is provided it will be only in-memory (default).
	     */
	    CacheService.prototype.setPersistence = function (persistence) {
	        this.cleanCache();
	        this.storage = persistence === 'local' || persistence === 'session' ?
	            this.$window[persistence + 'Storage'] : null;
	        this.loadCacheData();
	    };
	    ;
	    /**
	     * Gets the cache key for the specified url and parameters.
	     * @param {!string} url The request URL.
	     * @param {?map=} params Map of strings or objects which will be turned to ?key1=value1&key2=value2 after the url. If the value is not a string, it will be
	     *   JSONified.
	     * @return {string} The corresponding cache key.
	     */
	    CacheService.prototype.getCacheKey = function (url, params) {
	        return url + (params ? angular.toJson(params) : '');
	    };
	    /**
	     * Saves the current cached data into persisted storage.
	     */
	    CacheService.prototype.saveCacheData = function () {
	        if (this.storage) {
	            this.storage.cachedData = angular.toJson(this.cachedData);
	        }
	    };
	    /**
	     * Loads cached data from persisted storage.
	     */
	    CacheService.prototype.loadCacheData = function () {
	        var data = this.storage ? this.storage.cachedData : null;
	        this.cachedData = data ? angular.fromJson(data) : {};
	    };
	    return CacheService;
	}());
	exports.CacheService = CacheService;
	main_module_1.default.service('cacheService', CacheService);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Context service: provides URL context injection based on specified context.
	 */
	var ContextService = /** @class */ (function () {
	    ContextService.$inject = ["logger"];
	    function ContextService(logger) {
	        this.logger = logger.getLogger('contextService');
	    }
	    /**
	     * Injects the specified context into the given REST API.
	     * The REST API should be formatted like "/api/users/:userId".
	     * Any fragment from the REST API starting with ":" will then be replaced by a property from the context with
	     * the same name, i.e. for "/api/users/:userId" and a context object "{ userId: 123 }", the resulting URL will
	     * be "/api/users/123".
	     * @param {!string} restApi The REST API to fill will context values.
	     * @param {Object} context The context to use.
	     * @return {string} The ready-to-use REST API to call.
	     */
	    ContextService.prototype.inject = function (restApi, context) {
	        var _this = this;
	        this.logger.log('Injecting context in: ' + restApi);
	        if (!context) {
	            throw 'inject: context must be defined';
	        }
	        // Search for context properties to inject
	        var properties = restApi.match(/(:\w+)/g);
	        angular.forEach(properties, function (property) {
	            var contextVar = property.substring(1);
	            var contextValue = context[contextVar];
	            if (contextValue !== undefined) {
	                contextValue = encodeURIComponent(contextValue);
	                restApi = restApi.replace(property, contextValue);
	                _this.logger.log('Injected ' + contextValue + ' for ' + property);
	            }
	            else {
	                throw 'inject: context.' + contextVar + ' expected but undefined';
	            }
	        });
	        this.logger.log('Resulting REST API: ' + restApi);
	        return restApi;
	    };
	    return ContextService;
	}());
	exports.ContextService = ContextService;
	main_module_1.default.service('contextService', ContextService);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Provides a simple logging system with the possibility of registering log observers.
	 * In order to track the source module of message logs,
	 * a customized logger should be instanciated using the getLogger() method just after its injection.
	 *
	 * 4 different log levels are provided, via corresponding methods:
	 * - log: for debug information
	 * - info: for informative status of the application (success, ...)
	 * - warning: for non-critical errors that do not prevent normal application behavior
	 * - error: for critical errors that prevent normal application behavior
	 *
	 * Example usage:
	 * angular.module('myService', ['logger']).factory('myService', function (logger) {
	 *   logger = logger.getLogger('myService');
	 *   ...
	 *   logger.log('something happened');
	 * }
	 *
	 * If you want to disable debug logs in production, add this snippet to your app configuration:
	 * angular.module('app').config(function ($provide) {
	 *   // Disable debug logs in production version
	 *   $provide.decorator('$log', ['$delegate', function($delegate) {
	 *     if (!debug) {
	 *       $delegate.log = function() {};
	 *     }
	 *     return $delegate;
	 *   }]);
	 * });
	 *
	 * If you want additional tasks to be performed on log entry (show toast, for example),
	 * you can register observers using the addObserver() method.
	 */
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	var observers = [];
	/**
	 * Logs a message from the specified source.
	 * @param {string} message The message to be logged.
	 * @param {?string=} source The source of the log.
	 * @param {function} logFunc The base log function to use.
	 * @param {'log'|'info'|'warning'|'error'} level The log level.
	 * @param {Object?} options Additional log options.
	 */
	function log(message, source, logFunc, level, options) {
	    logFunc(source ? '[' + source + ']' : '', message, '');
	    angular.forEach(observers, function (observerFunc) {
	        observerFunc(message, source, level, options);
	    });
	}
	var Logger = /** @class */ (function () {
	    function Logger($log, moduleName, logFunc) {
	        this.$log = $log;
	        this.moduleName = moduleName;
	        this.logFunc = logFunc;
	    }
	    Logger.prototype.log = function (message, options) {
	        this.logFunc(message, this.moduleName, this.$log.log, 'log', options);
	    };
	    Logger.prototype.info = function (message, options) {
	        this.logFunc(message, this.moduleName, this.$log.info, 'info', options);
	    };
	    Logger.prototype.warning = function (message, options) {
	        this.logFunc(message, this.moduleName, this.$log.warn, 'warning', options);
	    };
	    Logger.prototype.error = function (message, options) {
	        this.logFunc(message, this.moduleName, this.$log.error, 'error', options);
	    };
	    return Logger;
	}());
	var LoggerService = /** @class */ (function () {
	    LoggerService.$inject = ["$log"];
	    function LoggerService($log) {
	        this.$log = $log;
	    }
	    /**
	     * Gets a customized logger based on the given module name.
	     * @param {string} moduleName The module name.
	     * @return {Logger} A logger object.
	     */
	    LoggerService.prototype.getLogger = function (moduleName) {
	        return new Logger(this.$log, moduleName, log);
	    };
	    /**
	     * Adds a new observer function that will be called for each new log entry.
	     * These parameters are passed to the observer function, in order:
	     * - message {string} message The message to be logged.
	     * - source {?string=} source The source of the log.
	     * - level {'log'|'info'|'warning'|'error'} level The log level.
	     * - options {Object?} options Additional log options.
	     * @param {!function} observerFunc The observer function.
	     */
	    LoggerService.prototype.addObserver = function (observerFunc) {
	        observers.push(observerFunc);
	    };
	    return LoggerService;
	}());
	exports.LoggerService = LoggerService;
	main_module_1.default.service('logger', LoggerService);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * REST service: provides methods to perform REST requests.
	 */
	var RestService = /** @class */ (function () {
	    RestService.$inject = ["$q", "$http", "cacheService", "logger"];
	    function RestService($q, $http, cacheService, logger) {
	        this.$q = $q;
	        this.$http = $http;
	        this.cacheService = cacheService;
	        this.server = null;
	        this.baseUrl = '';
	        this.defaultConfig = {
	            headers: {
	                'content-type': 'application/json',
	                'Access-Control-Allow-Headers': 'content-type'
	            }
	        };
	        /**
	         * Defaults cache handler.
	         * This handler just return the specified cache data and does nothing.
	         * @type {Function}
	         */
	        this.cacheHandler = angular.identity;
	        this.logger = logger.getLogger('restService');
	    }
	    /**
	     * Executes a GET request.
	     * @param {!String} url URL of the REST service call.
	     * @param {?Object.<string|Object>=} params Map of strings or objects which will be turned to ?key1=value1&key2=value2 after the url. If the value is not a string, it will be
	     *   JSONified.
	     * @param {?boolean|'force'} cache If set to true, the first request will be cached, and next request with cache set to true will use the cached response.
	     *   If set to 'force', the request will always be made and cache will be updated.
	     *   If set to false or omitted, no cache will be set or used.
	     * @param {?Object=} options Additional options for request/error handlers.
	     * @return {Object} The promise.
	     */
	    RestService.prototype.get = function (url, params, cache, options) {
	        var _this = this;
	        var apiUrl = this.baseUrl + url;
	        var promiseBuilder = function () { return _this.$http.get(apiUrl, { params: params }); };
	        if (!cache) {
	            // Do not use cache
	            return this.createRequest(promiseBuilder, options);
	        }
	        else {
	            var cachedData = cache === 'force' ? null : this.cacheService.getCacheData(url, params);
	            if (cachedData !== null) {
	                cachedData = this.cacheHandler(cachedData);
	            }
	            if (cachedData === null) {
	                this.logger.log('GET request: ' + url);
	                // Update cache entry
	                return this.createRequest(promiseBuilder, options).then(function (response) {
	                    _this.cacheService.setCacheData(url, params, response, null);
	                    return angular.copy(response);
	                });
	            }
	            else {
	                // Use cached version
	                var deferred = this.$q.defer();
	                deferred.resolve(angular.copy(cachedData));
	                return this.errorHandler(deferred.promise, options);
	            }
	        }
	    };
	    /**
	     * Executes a PUT request.
	     * @param {!String} url URL of the REST service call.
	     * @param {String|Object} data Data to be sent as the request message data.
	     * @param {?Object=} options Additional options for request/error handlers.
	     * @return {Object} The promise.
	     */
	    RestService.prototype.put = function (url, data, options) {
	        var _this = this;
	        this.logger.log('PUT request: ' + url, null);
	        var promise = function () { return _this.$http.put(_this.baseUrl + url, data, _this.defaultConfig); };
	        return this.createRequest(promise, options);
	    };
	    /**
	     * Executes a POST request.
	     * @param {!String} url URL of the REST service call.
	     * @param {String|Object} data Data to be sent as the request message data.
	     * @param {?Object=} options Additional options for request/error handlers.
	     * @return {Object} The promise.
	     */
	    RestService.prototype.post = function (url, data, options) {
	        var _this = this;
	        this.logger.log('POST request: ' + url, null);
	        var promiseBuilder = function () { return _this.$http.post(_this.baseUrl + url, data, _this.defaultConfig); };
	        return this.createRequest(promiseBuilder, options);
	    };
	    /**
	     * Executes a DELETE request.
	     * @param {!String} url URL of the REST service call.
	     * @param {?Object=} options Additional options for request/error handlers.
	     * @return {Object} The promise.
	     */
	    RestService.prototype.delete = function (url, options) {
	        var _this = this;
	        this.logger.log('DELETE request: ' + url, null);
	        var promise = function () { return _this.$http.delete(_this.baseUrl + url, _this.defaultConfig); };
	        return this.createRequest(promise, options);
	    };
	    /**
	     * Sets the current server configuration.
	     * A server parameter must contains at least these two strings:
	     * - url: The base URL of the server
	     * - route: The base route of the REST API
	     * @param {!Object} server The server configuration.
	     */
	    RestService.prototype.setServer = function (server) {
	        this.server = server;
	        this.baseUrl = server.url + server.route;
	    };
	    /**
	     * Returns the current server configuration.
	     * @return {String} The server base URL.
	     */
	    RestService.prototype.getServer = function () {
	        return this.server;
	    };
	    /**
	     * Returns the base URI.
	     * @return {String} The computed base URI.
	     */
	    RestService.prototype.getBaseUrl = function () {
	        return this.baseUrl;
	    };
	    /**
	     * Sets a customized request handler function for all requests.
	     * The function should have the following signature, and return a promise:
	     * function requestHandler(requestBuilder, options) {
	     *   return requestBuilder();
	     * }
	     * The requestBuilder parameter is a function that returns the request promise.
	     * The options parameter is an optional object containing whatever options your handler may needs.
	     * @param {!function} requestHandlerFunc The request handler.
	     */
	    RestService.prototype.setRequestHandler = function (requestHandlerFunc) {
	        this.requestHandler = requestHandlerFunc;
	    };
	    /**
	     * Gets the current request handler function.
	     * @return {function} The request handler.
	     */
	    RestService.prototype.getRequestHandler = function () {
	        return this.requestHandler;
	    };
	    /**
	     * Sets a customized default error handler function for all requests.
	     * The function should have the following signature, and return a promise:
	     * function errorHandler(promise, options) {
	     *   return promise.catch(response, function() {
	     *      ...
	     *      return $q.reject(response);
	     *   });
	     * }
	     * The promise parameter is the request promise.
	     * The options parameter is an optional object containing whatever options your handler may needs.
	     * @param {!function} errorHandlerFunc The error handler.
	     */
	    RestService.prototype.setErrorHandler = function (errorHandlerFunc) {
	        this.errorHandler = errorHandlerFunc;
	    };
	    /**
	     * Gets the current error handler function.
	     * @return {function} The error handler.
	     */
	    RestService.prototype.getErrorHandler = function () {
	        return this.errorHandler;
	    };
	    /**
	     * Sets a customized default cache handler function for all cached requests.
	     * The function should have the following signature, and return an object:
	     * function cacheHandler(cachedData) {
	     *    return isValid(cachedData) ? cachedData : null;
	     * }
	     * This handler is only called before for requests that would return cached data otherwise.
	     * @param {!function} cacheHandlerFunc The cache handler.
	     */
	    RestService.prototype.setCacheHandler = function (cacheHandlerFunc) {
	        this.cacheHandler = cacheHandlerFunc;
	    };
	    /**
	     * Gets the current cache handler function.
	     * @return {function} The cache handler.
	     */
	    RestService.prototype.getCacheHandler = function () {
	        return this.cacheHandler;
	    };
	    /**
	     * Default request handler, that just builds the promise.
	     * @param {!function} requestBuilder A function that return the request's promise.
	     * @param {?Object=} options Options that will be passed to the request builder function.
	     * @return {Object} The promise.
	     * @type {function}
	     */
	    RestService.prototype.requestHandler = function (requestBuilder, options) {
	        // Default request handler just builds the request
	        return requestBuilder(options);
	    };
	    /**
	     * Default error handler.
	     * This handler tries to extract a description of the error and logs and error with it.
	     * @param {!Object} promise The promise to handle errors.
	     * @param {?Object=} options Additional options: if 'skipErrors' property is set to true, errors will not be handled.
	     * @return {Object} The promise.
	     */
	    RestService.prototype.errorHandler = function (promise, options) {
	        var _this = this;
	        if (!options || !options.skipErrors) {
	            promise.catch(function (response) {
	                var error;
	                if (response.status === 404) {
	                    error = 'Server unavailable or URL does not exist';
	                }
	                else if (response.data) {
	                    var message = response.data.message ? response.data.message : null;
	                    var code = response.data.error ? response.data.error : null;
	                    error = message || code || angular.toJson(response.data);
	                }
	                if (error) {
	                    _this.logger.error(error, null);
	                }
	                return _this.$q.reject(response);
	            });
	        }
	        return promise;
	    };
	    /**
	     * Creates the request.
	     * @param {!function} requestBuilder A function that return the request's promise.
	     * @param {?Object=} options Additional options for request/error handlers.
	     * @return {Object} The promise.
	     */
	    RestService.prototype.createRequest = function (requestBuilder, options) {
	        return this.errorHandler(this.requestHandler(requestBuilder, options), options);
	    };
	    return RestService;
	}());
	exports.RestService = RestService;
	main_module_1.default.service('restService', RestService);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Displays the about screen.
	 */
	var AboutController = /** @class */ (function () {
	    AboutController.$inject = ["logger", "config"];
	    function AboutController(logger, config) {
	        this.logger = logger.getLogger('about');
	        this.version = config.version;
	        this.logger.log('init');
	    }
	    return AboutController;
	}());
	exports.AboutController = AboutController;
	main_module_1.default.controller('aboutController', AboutController);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Displays the home screen.
	 */
	var HomeController = /** @class */ (function () {
	    HomeController.$inject = ["logger", "quoteService"];
	    function HomeController(logger, quoteService) {
	        var _this = this;
	        this.isLoading = true;
	        this.quote = null;
	        this.logger = logger.getLogger('home');
	        this.quoteService = quoteService;
	        this.logger.log('init');
	        this.quoteService
	            .getRandomJoke({ category: 'nerdy' })
	            .then(function (quote) {
	            _this.quote = quote;
	        })
	            .finally(function () {
	            _this.isLoading = false;
	        });
	    }
	    return HomeController;
	}());
	exports.HomeController = HomeController;
	main_module_1.default.controller('homeController', HomeController);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Loading directive: displays a loading indicator while data is being loaded.
	 *
	 * Example usage: <div ui-loading="isLoading"></div>
	 * The expected value of the directive attribute is a boolean indicating whether the content
	 * is still loading or not.
	 *
	 * Additional parameter attributes:
	 * - message: the loading message to display (none by default)
	 *
	 * Example: <div ui-loading="isLoading" message="Loading..."></div>
	 */
	var LoadingDirective = /** @class */ (function () {
	    function LoadingDirective() {
	        this.restrict = 'A';
	        this.template = __webpack_require__(18);
	        this.scope = {
	            message: '<',
	            isLoading: '<uiLoading'
	        };
	    }
	    return LoadingDirective;
	}());
	exports.LoadingDirective = LoadingDirective;
	main_module_1.default.directive('uiLoading', function () { return new LoadingDirective(); });


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = "<div ng-show=\"isLoading\" class=\"ui-loading text-center\"><ion-spinner icon=\"crescent\"></ion-spinner><span>{{message}}</span></div>"

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Quote service: allows to get quote of the day.
	 */
	var QuoteService = /** @class */ (function () {
	    QuoteService.$inject = ["$q", "restService", "contextService"];
	    function QuoteService($q, restService, contextService) {
	        this.$q = $q;
	        this.restService = restService;
	        this.contextService = contextService;
	        this.ROUTES = {
	            randomJoke: '/jokes/random?escape=javascript&limitTo=[:category]'
	        };
	    }
	    /**
	     * Get a random Chuck Norris joke.
	     * Used context properties:
	     * - category: the joke's category: 'nerdy', 'explicit'...
	     * @param {!Object} context The context to use.
	     * @return {Object} The promise.
	     */
	    QuoteService.prototype.getRandomJoke = function (context) {
	        var _this = this;
	        return this.restService
	            .get(this.contextService.inject(this.ROUTES.randomJoke, context), null, true)
	            .then(function (response) {
	            if (response.data && response.data.value) {
	                return response.data.value.joke;
	            }
	            return _this.$q.reject();
	        })
	            .catch(function () {
	            return 'Error, could not load joke :-(';
	        });
	    };
	    return QuoteService;
	}());
	exports.QuoteService = QuoteService;
	main_module_1.default.service('quoteService', QuoteService);


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	angular.module('translations').run(['gettextCatalog', function (gettextCatalog) {
	/* jshint -W100 */
	    gettextCatalog.setStrings('en-US', {"About":"About","APP_NAME":"store","Hello world !":"Hello world !","Home":"Home","Version":"Version"});
	/* jshint +W100 */
	}]);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	angular.module('translations').run(['gettextCatalog', function (gettextCatalog) {
	/* jshint -W100 */
	    gettextCatalog.setStrings('fr-FR', {"About":"A propos","APP_NAME":"store","Hello world !":"Bonjour le monde !","Home":"Accueil","Version":"Version"});
	/* jshint +W100 */
	}]);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2svYm9vdHN0cmFwIDU4ODNkYzlmZjU4YmRhNWZkYTI1IiwiLi9zb3VyY2VzL21haW4vbWFpbi5jb25maWcudHMiLCIuL3NvdXJjZXMvbWFpbi9tYWluLm1vZHVsZS50cyIsIi4vc291cmNlcy9tYWluL21haW4uY29uc3RhbnRzLnRzIiwiLi9zb3VyY2VzL21haW4vbWFpbi5yb3V0ZXMudHMiLCIuL3NvdXJjZXMvbWFpbi9zaGVsbC9zaGVsbC5odG1sIiwiLi9zb3VyY2VzL21haW4vc2NyZWVucy9ob21lL2hvbWUuaHRtbCIsIi4vc291cmNlcy9tYWluL3NjcmVlbnMvYWJvdXQvYWJvdXQuaHRtbCIsIi4vc291cmNlcy9tYWluL21haW4ucnVuLnRzIiwiLi9zb3VyY2VzL21haW4vbWFpbi53cmFwcGVycy50cyIsIi4vc291cmNlcy9tYWluL3NoZWxsL3NoZWxsLmNvbnRyb2xsZXIudHMiLCIuL3NvdXJjZXMvbWFpbi9oZWxwZXJzL2NhY2hlL2NhY2hlLnNlcnZpY2UudHMiLCIuL3NvdXJjZXMvbWFpbi9oZWxwZXJzL2NvbnRleHQvY29udGV4dC5zZXJ2aWNlLnRzIiwiLi9zb3VyY2VzL21haW4vaGVscGVycy9sb2dnZXIvbG9nZ2VyLnRzIiwiLi9zb3VyY2VzL21haW4vaGVscGVycy9yZXN0L3Jlc3Quc2VydmljZS50cyIsIi4vc291cmNlcy9tYWluL3NjcmVlbnMvYWJvdXQvYWJvdXQuY29udHJvbGxlci50cyIsIi4vc291cmNlcy9tYWluL3NjcmVlbnMvaG9tZS9ob21lLmNvbnRyb2xsZXIudHMiLCIuL3NvdXJjZXMvbWFpbi91aS1jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5kaXJlY3RpdmUudHMiLCIuL3NvdXJjZXMvbWFpbi91aS1jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5odG1sIiwiLi9zb3VyY2VzL21haW4vd2ViLXNlcnZpY2VzL3F1b3RlL3F1b3RlLnNlcnZpY2UudHMiLCIuL3NvdXJjZXMvdHJhbnNsYXRpb25zL2VuLVVTLnBvIiwiLi9zb3VyY2VzL3RyYW5zbGF0aW9ucy9mci1GUi5wbyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvR0N0Q0E7QUFDQSxRQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUR0RDs7OztBQU9BLHFCQUFvQixVQUNBLGtCQUNBLG1CQUNBLFlBQ0EsUUFBMEI7O0tBRzVDLFNBQVMsVUFBVSxnREFBcUIsVUFBQyxXQUFnQixXQUFjO1NBQ3JFLE9BQU8sVUFBQyxXQUFnQixPQUFVO2FBQ2hDLFVBQVUsV0FBVzthQUVyQixJQUFJLFNBQWtCLFVBQVUsSUFBSSxVQUFVLFVBQVU7YUFDeEQsT0FBTyxNQUFNLGFBQWEsUUFBUSxPQUFPLFFBQVEsTUFBTTs7OztLQUszRCxTQUFTLFVBQVUsc0JBQVEsVUFBQyxXQUFjO1NBQ3hDLElBQUksQ0FBQyxPQUFPLFlBQVksT0FBTzthQUM3QixVQUFVLE1BQU0sUUFBUTthQUN4QixVQUFVLFFBQVEsUUFBUTs7U0FFNUIsT0FBTzs7O0tBSVQsaUJBQWlCLGlCQUFpQixPQUFPLFlBQVk7O0tBR3JELGtCQUFrQixXQUFXOztLQUc3QixXQUFXLDJCQUEyQjs7QUFHeEMsdUJBQUksT0FBTzs7Ozs7OztBQzFDWCxhQUFZLENBQUM7O0FBRWIsNENBQTJDO0FBQzNDLFFBQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRW5DLG1CQUFlLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO0tBQ25DLGNBQWM7S0FDZCxTQUFTO0tBQ1QsV0FBVztLQUNYLFlBQVk7S0FDWixXQUFXO0tBQ1gsV0FBVztLQUNYLE9BQU87RUFDUixDQUFDLENBQUM7Ozs7Ozs7OztBQ2JILDRDQUE4QjtBQWM5QixrSEFBaUg7QUFDakgsbUhBQWtIO0FBQ2xILHVCQUFzQjtBQUN0QixLQUFJLFdBQVcsR0FBRztLQUNoQixLQUFLLEVBQUU7U0FDTCxLQUFLLEVBQUUsSUFBSTtTQUVYLDBFQUEwRTtTQUMxRSxNQUFNLEVBQUU7YUFDTixHQUFHLEVBQUUsRUFBRTthQUNQLEtBQUssRUFBRSxLQUFLO1VBQ2I7TUFDRjtLQUNELFVBQVUsRUFBRTtTQUNWLEtBQUssRUFBRSxLQUFLO1NBQ1osTUFBTSxFQUFFO2FBQ04sR0FBRyxFQUFFLHNCQUFzQjthQUMzQixLQUFLLEVBQUUsRUFBRTtVQUNWO01BQ0Y7RUFDRixDQUFDO0FBQ0YsY0FBYTtBQUViOztJQUVHO0FBQ0gsS0FBSSxNQUFNLEdBQXVCO0tBRS9CLGlIQUFpSDtLQUNqSCxvREFBb0Q7S0FDcEQsbUJBQW1CO0tBQ25CLE9BQU8sRUFBRSxLQUFLO0tBQ2QsV0FBVyxFQUFFLFdBQVcsQ0FBQyxLQUFLO0tBQzlCLGFBQWE7S0FFYixzQkFBc0I7S0FDdEIsa0JBQWtCLEVBQUU7U0FDbEIsT0FBTztTQUNQLE9BQU87TUFDUjtFQUVGLENBQUM7QUFFRixzQkFBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7Ozs7Ozs7OzJFQ3pEL0I7QUFDQSxRQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUR0RDs7OztBQUtBLHNCQUFxQixnQkFDQSxvQkFDQSxTQUF3Qzs7S0FHM0QsbUJBQW1CLFVBQVU7S0FFN0I7VUFDRyxNQUFNLE9BQU87U0FDWixVQUFrQixvQkFBUTtTQUMxQixZQUFZOztVQUViLE1BQU0sWUFBWTtTQUNqQixLQUFLO1NBQ0wsT0FBTzthQUNMLGVBQWU7aUJBQ2IsVUFBa0Isb0JBQVE7aUJBQzFCLFlBQVk7OztTQUdoQixNQUFNLEVBQUMsT0FBTyxRQUFROztVQUV2QixNQUFNLGFBQWE7U0FDbEIsS0FBSztTQUNMLE9BQU87YUFDTCxlQUFlO2lCQUNiLFVBQWtCLG9CQUFRO2lCQUMxQixZQUFZOzs7U0FHaEIsTUFBTSxFQUFDLE9BQU8sUUFBUTs7O0FBSzVCLHVCQUFJLE9BQU87Ozs7Ozs7QUN4Q1gsOHdCQUE2d0IsMENBQTBDLHdOQUF3TiwyQ0FBMkMsa007Ozs7OztBQ0ExakMsdUZBQXNGLFdBQVcsK1RBQStULFVBQVUscUQ7Ozs7OztBQ0ExYSxrRUFBaUUsV0FBVyxxTUFBcU0sWUFBWSxvRDs7Ozs7OzsyS0NBN1I7QUFDQSxRQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUR0RDs7Ozs7QUFTQSxlQUFjLFNBQ0EsU0FDQSxZQUNBLFFBQ0EsVUFDQSxrQkFDQSxnQkFDQSxnQkFDQSxHQUNBLFFBQ0EsUUFDQSxhQUF3Qjs7OztLQU1wQyxJQUFJLEtBQUs7S0FFVCxHQUFHLFlBQVk7S0FDZixHQUFHLFlBQVk7Ozs7Ozs7S0FRZixHQUFHLGNBQWMsVUFBUyxVQUFpQjtTQUN6QyxXQUFXLFlBQVksUUFBUSxhQUFhLFFBQVE7U0FDcEQsSUFBSSxzQkFBc0IsRUFBRSxTQUFTLE9BQU8sb0JBQW9COztTQUdoRSxJQUFJLENBQUMsdUJBQXVCLFVBQVU7YUFDcEMsSUFBSSxpQkFBZSxTQUFTLE1BQU0sS0FBSzthQUN2QyxXQUFXLEVBQUUsS0FBSyxPQUFPLG9CQUN2QixVQUFDLG1CQUF5QixFQUFLLFNBQUUsV0FBVyxtQkFBbUI7YUFDakUsc0JBQXNCLENBQUMsQ0FBQzs7O1NBSTFCLElBQUksQ0FBQyxxQkFBcUI7YUFDeEIsV0FBVzs7O1NBSWIsZUFBZSxtQkFBbUI7U0FDbEMsUUFBUSxLQUFLO1NBQ2IsUUFBUSxhQUFhLFFBQVEsWUFBWTs7Ozs7S0FNM0MsR0FBRyxJQUFJLHVCQUF1QixVQUFDLE9BQVksU0FBMEI7U0FDbkUsWUFBWSxRQUFRLE9BQU8sUUFBUSxLQUFLLFFBQVE7Ozs7O0tBTWxELEdBQUcsSUFBSSwwQkFBMEI7U0FDL0IsWUFBWSxPQUFPLFFBQVEsT0FBTyxPQUFPLFFBQVEsS0FBSyxRQUFROztLQUdoRTs7Ozs7OztLQVNBO1NBQ0UsSUFBSSxVQUFtQixPQUFPLFVBQVU7O1NBRXhDLGVBQWUsUUFBUSxPQUFPLFlBQVk7U0FFMUMsR0FBRzs7U0FHSCxZQUFZLFVBQVUsT0FBTyxZQUFZOztTQUd6QyxlQUFlLE1BQU07O2FBR25CLElBQUksZUFBZSxRQUFRLFVBQVU7YUFDckMsSUFBSSxjQUFjO2lCQUNoQixTQUFTO3FCQUNQLGFBQWE7b0JBQ1o7OzthQUlMLElBQUksZ0JBQWdCLFFBQVEsVUFBVTthQUN0QyxJQUFJLGVBQWU7O2lCQUVqQixjQUFjLHFCQUFxQixVQUFDLFVBQVE7cUJBQzFDLFFBQVEsSUFBSSw0QkFBNEIsU0FBUyxRQUFRO3FCQUN6RCxHQUFHLE9BQU87eUJBQ1IsR0FBRyxZQUFZLFNBQVM7O29CQUV6Qjs7YUFHTCxJQUFJLFFBQVEsV0FBVyxRQUFRLFFBQVEsUUFBUSxVQUFVO2lCQUN2RCxpQkFBaUIsY0FBYzs7Ozs7Ozs7S0FVckMscUJBQXFCLFlBQW1CO1NBQ3RDLEdBQUcsWUFBWSxlQUFlLFVBQVU7U0FFeEMsSUFBSSxZQUFZO2FBQ2QsR0FBRyxZQUFZLGVBQWUsVUFBVTthQUN4QyxHQUFHLGFBQWEsUUFBUSxHQUFHOzs7O0FBTWpDLHVCQUFJLElBQUk7Ozs7Ozs7OztBQzFJUiw0Q0FBOEI7QUFFOUI7OztJQUdHO0FBQ0gsc0JBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7Ozs7OztBQ04vQjtBQUNBLFFBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRHREOzs7Ozs7b0VBT0E7S0FNRSx5QkFBb0IsUUFDUixTQUNRLEdBQ1IsUUFBcUI7U0FIYjtTQUVBO1NBR2xCLEtBQUssZ0JBQWdCO1NBQ3JCLEtBQUssU0FBUyxPQUFPLFVBQVU7U0FFL0IsS0FBSyxPQUFPLElBQUk7Ozs7Ozs7S0FRbEIsb0RBQWMsTUFBWTtTQUN4QixPQUFPLEtBQUssRUFBRSxXQUFXLEtBQUssT0FBTyxRQUFRLE1BQU07O0tBR3ZEOztBQTFCYTtBQTRCYix1QkFBSSxXQUFXLG1CQUFtQjs7Ozs7OztBQ25DbEM7QUFDQSxRQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUR0RDs7Ozs7OztrREFpQkE7S0FNRSxzQkFBb0IsU0FDUixRQUFxQjtTQURiO1NBSFosa0JBQXFCO1NBQ3JCLGVBQWU7U0FLckIsS0FBSyxTQUFTLE9BQU8sVUFBVTs7OztTQUsvQixLQUFLOzs7Ozs7Ozs7O0tBV1AsZ0RBQWEsS0FBYSxRQUFhLE1BQVcsTUFBVztTQUMzRCxJQUFJLFdBQVcsS0FBSyxZQUFZLEtBQUs7U0FFckMsS0FBSyxXQUFXLFlBQVk7YUFDMUIsTUFBTSxRQUFRLElBQUk7YUFDbEIsTUFBTTs7U0FHUixLQUFLLE9BQU8sSUFBSSx5QkFBeUIsV0FBVztTQUVwRCxLQUFLOzs7Ozs7Ozs7S0FVUCxnREFBYSxLQUFhLFFBQVk7U0FDcEMsSUFBSSxXQUFXLEtBQUssWUFBWSxLQUFLO1NBQ3JDLElBQUksYUFBYSxLQUFLLFdBQVc7U0FFakMsSUFBSSxZQUFZO2FBQ2QsS0FBSyxPQUFPLElBQUkseUJBQXlCLFdBQVc7YUFDcEQsT0FBTyxXQUFXOztTQUdwQixPQUFPOzs7Ozs7Ozs7S0FVVCxnREFBYSxLQUFhLFFBQVk7U0FDcEMsSUFBSSxXQUFXLEtBQUssWUFBWSxLQUFLO1NBQ3JDLElBQUksYUFBYSxLQUFLLFdBQVc7U0FDakMsT0FBTyxhQUFhLFdBQVcsT0FBTzs7Ozs7Ozs7S0FTeEMsa0RBQWUsS0FBYSxRQUFZO1NBQ3RDLElBQUksV0FBVyxLQUFLLFlBQVksS0FBSztTQUNyQyxLQUFLLFdBQVcsWUFBWTtTQUM1QixLQUFLLE9BQU8sSUFBSSw2QkFBNkIsV0FBVztTQUN4RCxLQUFLOzs7Ozs7S0FPUCw4Q0FBVyxnQkFBcUI7U0FBaEM7U0FDRSxJQUFJLGdCQUFnQjthQUNsQixRQUFRLFFBQVEsS0FBSyxZQUFZLFVBQUMsT0FBWSxLQUFXO2lCQUN2RCxJQUFJLGtCQUFrQixNQUFNLE1BQU07cUJBQ2hDLE1BQUssV0FBVyxPQUFPOzs7O2NBR3RCO2FBQ0wsS0FBSyxhQUFhOztTQUVwQixLQUFLOzs7Ozs7OztLQVNQLGtEQUFlLGFBQW9CO1NBQ2pDLEtBQUs7U0FDTCxLQUFLLFVBQVUsZ0JBQWdCLFdBQVcsZ0JBQWdCO2FBQ3hELEtBQUssUUFBUSxjQUFjLGFBQWE7U0FFMUMsS0FBSzs7S0FDTjs7Ozs7Ozs7S0FTTyxxQ0FBUixVQUFvQixLQUFhLFFBQVk7U0FDM0MsT0FBTyxPQUFPLFNBQVMsUUFBUSxPQUFPLFVBQVU7Ozs7O0tBTTFDLHVDQUFSO1NBQ0UsSUFBSSxLQUFLLFNBQVM7YUFDaEIsS0FBSyxRQUFRLGFBQWEsUUFBUSxPQUFPLEtBQUs7Ozs7OztLQU8xQyx1Q0FBUjtTQUNFLElBQUksT0FBTyxLQUFLLFVBQVUsS0FBSyxRQUFRLGFBQWE7U0FDcEQsS0FBSyxhQUFhLE9BQU8sUUFBUSxTQUFTLFFBQVE7O0tBR3REOztBQTlJYTtBQWdKYix1QkFBSSxRQUFRLGdCQUFnQjs7Ozs7OztBQ2pLNUI7QUFDQSxRQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUR0RDs7Ozs7eUNBTUE7S0FJRSx3QkFBWSxRQUFxQjtTQUMvQixLQUFLLFNBQVMsT0FBTyxVQUFVOzs7Ozs7Ozs7Ozs7S0FhakMsNENBQU8sU0FBaUIsU0FBYTtTQUFyQztTQUNFLEtBQUssT0FBTyxJQUFJLDJCQUEyQjtTQUUzQyxJQUFJLENBQUMsU0FBUzthQUNaLE1BQU07OztTQUlSLElBQUksYUFBYSxRQUFRLE1BQU07U0FFL0IsUUFBUSxRQUFRLFlBQVksVUFBQyxVQUFnQjthQUMzQyxJQUFJLGFBQWEsU0FBUyxVQUFVO2FBQ3BDLElBQUksZUFBZSxRQUFRO2FBRTNCLElBQUksaUJBQWlCLFdBQVc7aUJBQzlCLGVBQWUsbUJBQW1CO2lCQUNsQyxVQUFVLFFBQVEsUUFBUSxVQUFVO2lCQUNwQyxNQUFLLE9BQU8sSUFBSSxjQUFjLGVBQWUsVUFBVTs7a0JBQ2xEO2lCQUNMLE1BQU0scUJBQXFCLGFBQWE7OztTQUk1QyxLQUFLLE9BQU8sSUFBSSx5QkFBeUI7U0FFekMsT0FBTzs7S0FHWDs7QUE5Q2E7QUFnRGIsdUJBQUksUUFBUSxrQkFBa0I7Ozs7Ozs7QUN0RDlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0EsUUFBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFBdEQ7QUFFQSxLQUFJLFlBQTZCOzs7Ozs7Ozs7QUFVakMsY0FBYSxTQUFpQixRQUFnQixTQUFtQixPQUFlLFNBQVk7S0FDMUYsUUFBUSxTQUFTLE1BQU0sU0FBUyxNQUFNLElBQUksU0FBUztLQUNuRCxRQUFRLFFBQVEsV0FBVyxVQUFDLGNBQWlCO1NBQzNDLGFBQWEsU0FBUyxRQUFRLE9BQU87OztBQXlDekM7S0FFRSxnQkFBb0IsTUFDQSxZQUNBLFNBQVk7U0FGWjtTQUNBO1NBQ0E7O0tBRXBCLGlDQUFJLFNBQWlCLFNBQVk7U0FDL0IsS0FBSyxRQUFRLFNBQVMsS0FBSyxZQUFZLEtBQUssS0FBSyxLQUFLLE9BQU87O0tBRy9ELGtDQUFLLFNBQWlCLFNBQVk7U0FDaEMsS0FBSyxRQUFRLFNBQVMsS0FBSyxZQUFZLEtBQUssS0FBSyxNQUFNLFFBQVE7O0tBR2pFLHFDQUFRLFNBQWlCLFNBQVk7U0FDbkMsS0FBSyxRQUFRLFNBQVMsS0FBSyxZQUFZLEtBQUssS0FBSyxNQUFNLFdBQVc7O0tBR3BFLG1DQUFNLFNBQWlCLFNBQVk7U0FDakMsS0FBSyxRQUFRLFNBQVMsS0FBSyxZQUFZLEtBQUssS0FBSyxPQUFPLFNBQVM7O0tBR3JFOzs7c0NBRUE7S0FFRSx1QkFBb0IsTUFBb0I7U0FBcEI7Ozs7Ozs7S0FPcEIsOENBQVUsWUFBa0I7U0FDMUIsT0FBTyxJQUFJLE9BQU8sS0FBSyxNQUFNLFlBQVk7Ozs7Ozs7Ozs7O0tBWTNDLGdEQUFZLGNBQStCO1NBQ3pDLFVBQVUsS0FBSzs7S0FHbkI7O0FBMUJhO0FBNEJiLHVCQUFJLFFBQVEsVUFBVTs7Ozs7OztBQzdJdEI7QUFDQSxRQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUR0RDs7Ozs7cUVBNEJBO0tBbUJFLHFCQUFvQixJQUNBLE9BQ0EsY0FDUixRQUFxQjtTQUhiO1NBQ0E7U0FDQTtTQW5CWixjQUF3QjtTQUN4QixlQUFrQjtTQUNsQixxQkFBMkM7YUFDakQsU0FBUztpQkFDUCxnQkFBZ0I7aUJBQ2hCLGdDQUFnQzs7Ozs7Ozs7U0FTNUIsb0JBQXNDLFFBQVE7U0FRcEQsS0FBSyxTQUFTLE9BQU8sVUFBVTs7Ozs7Ozs7Ozs7OztLQWNqQyxzQ0FBSSxLQUFhLFFBQWMsT0FBd0IsU0FBYTtTQUFwRTtTQUNFLElBQUksU0FBUyxLQUFLLFVBQVU7U0FDNUIsSUFBSSxpQkFBaUIsY0FBTSxhQUFLLE1BQU0sSUFBSSxRQUFRLEVBQUMsUUFBUTtTQUUzRCxJQUFJLENBQUMsT0FBTzs7YUFFVixPQUFPLEtBQUssY0FBYyxnQkFBZ0I7O2NBQ3JDO2FBQ0wsSUFBSSxhQUFhLFVBQVUsVUFBVSxPQUFPLEtBQUssYUFBYSxhQUFhLEtBQUs7YUFFaEYsSUFBSSxlQUFlLE1BQU07aUJBQ3ZCLGFBQWEsS0FBSyxhQUFhOzthQUdqQyxJQUFJLGVBQWUsTUFBTTtpQkFDdkIsS0FBSyxPQUFPLElBQUksa0JBQWtCOztpQkFHbEMsT0FBTyxLQUFLLGNBQWMsZ0JBQWdCLFNBQVMsS0FBSyxVQUFDLFVBQWE7cUJBQ3BFLE1BQUssYUFBYSxhQUFhLEtBQUssUUFBUSxVQUFVO3FCQUN0RCxPQUFPLFFBQVEsS0FBSzs7O2tCQUVqQjs7aUJBRUwsSUFBSSxXQUFXLEtBQUssR0FBRztpQkFDdkIsU0FBUyxRQUFRLFFBQVEsS0FBSztpQkFFOUIsT0FBTyxLQUFLLGFBQWEsU0FBUyxTQUFTOzs7Ozs7Ozs7OztLQVlqRCxzQ0FBSSxLQUFhLE1BQVcsU0FBYTtTQUF6QztTQUNFLEtBQUssT0FBTyxJQUFJLGtCQUFrQixLQUFLO1NBQ3ZDLElBQUksVUFBVSxjQUFNLGFBQUssTUFBTSxJQUFJLE1BQUssVUFBVSxLQUFLLE1BQU0sTUFBSztTQUNsRSxPQUFPLEtBQUssY0FBYyxTQUFTOzs7Ozs7Ozs7S0FVckMsdUNBQUssS0FBYSxNQUFXLFNBQWE7U0FBMUM7U0FDRSxLQUFLLE9BQU8sSUFBSSxtQkFBbUIsS0FBSztTQUN4QyxJQUFJLGlCQUFpQixjQUFNLGFBQUssTUFBTSxLQUFLLE1BQUssVUFBVSxLQUFLLE1BQU0sTUFBSztTQUMxRSxPQUFPLEtBQUssY0FBYyxnQkFBZ0I7Ozs7Ozs7O0tBUzVDLHlDQUFPLEtBQWEsU0FBYTtTQUFqQztTQUNFLEtBQUssT0FBTyxJQUFJLHFCQUFxQixLQUFLO1NBQzFDLElBQUksVUFBVSxjQUFNLGFBQUssTUFBTSxPQUFPLE1BQUssVUFBVSxLQUFLLE1BQUs7U0FDL0QsT0FBTyxLQUFLLGNBQWMsU0FBUzs7Ozs7Ozs7O0tBVXJDLDRDQUFVLFFBQXFCO1NBQzdCLEtBQUssU0FBUztTQUNkLEtBQUssVUFBVSxPQUFPLE1BQU0sT0FBTzs7Ozs7O0tBT3JDO1NBQ0UsT0FBTyxLQUFLOzs7Ozs7S0FPZDtTQUNFLE9BQU8sS0FBSzs7Ozs7Ozs7Ozs7O0tBYWQsb0RBQWtCLG9CQUEyQztTQUMzRCxLQUFLLGlCQUFpQjs7Ozs7O0tBT3hCO1NBQ0UsT0FBTyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7S0FnQmQsa0RBQWdCLGtCQUF1QztTQUNyRCxLQUFLLGVBQWU7Ozs7OztLQU90QjtTQUNFLE9BQU8sS0FBSzs7Ozs7Ozs7Ozs7S0FZZCxrREFBZ0Isa0JBQXVDO1NBQ3JELEtBQUssZUFBZTs7Ozs7O0tBT3RCO1NBQ0UsT0FBTyxLQUFLOzs7Ozs7Ozs7S0FVTix1Q0FBUixVQUF1QixnQkFBeUMsU0FBYTs7U0FFM0UsT0FBTyxlQUFlOzs7Ozs7Ozs7S0FVaEIscUNBQVIsVUFBcUIsU0FBMkIsU0FBYTtTQUE3RDtTQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxZQUFZO2FBQ25DLFFBQVEsTUFBTSxVQUFDLFVBQWE7aUJBQzFCLElBQUk7aUJBRUosSUFBSSxTQUFTLFdBQVcsS0FBSztxQkFDM0IsUUFBUTs7c0JBQ0gsSUFBSSxTQUFTLE1BQU07cUJBQ3hCLElBQUksVUFBVSxTQUFTLEtBQUssVUFBVSxTQUFTLEtBQUssVUFBVTtxQkFDOUQsSUFBSSxPQUFPLFNBQVMsS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRO3FCQUN2RCxRQUFRLFdBQVcsUUFBUSxRQUFRLE9BQU8sU0FBUzs7aUJBR3JELElBQUksT0FBTztxQkFDVCxNQUFLLE9BQU8sTUFBTSxPQUFPOztpQkFHM0IsT0FBTyxNQUFLLEdBQUcsT0FBTzs7O1NBRzFCLE9BQU87Ozs7Ozs7O0tBU0Qsc0NBQVIsVUFBc0IsZ0JBQXlDLFNBQWE7U0FDMUUsT0FBTyxLQUFLLGFBQWEsS0FBSyxlQUFlLGdCQUFnQixVQUFVOztLQUUzRTs7QUEvUGE7QUFpUWIsdUJBQUksUUFBUSxlQUFlOzs7Ozs7O0FDN1IzQjtBQUNBLFFBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRHREOzs7OztvREFPQTtLQU1FLHlCQUFZLFFBQ0EsUUFBMEI7U0FFcEMsS0FBSyxTQUFTLE9BQU8sVUFBVTtTQUMvQixLQUFLLFVBQVUsT0FBTztTQUV0QixLQUFLLE9BQU8sSUFBSTs7S0FHcEI7O0FBZmE7QUFpQmIsdUJBQUksV0FBVyxtQkFBbUI7Ozs7Ozs7QUN4QmxDO0FBQ0EsUUFBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFEdEQ7Ozs7O3lEQU9BO0tBUUUsd0JBQVksUUFDQSxjQUEwQjtTQUR0QztTQU5BLGlCQUFxQjtTQUNyQixhQUFnQjtTQVFkLEtBQUssU0FBUyxPQUFPLFVBQVU7U0FDL0IsS0FBSyxlQUFlO1NBRXBCLEtBQUssT0FBTyxJQUFJO1NBRWhCLEtBQUs7Y0FDRixjQUFjLEVBQUMsVUFBVTtjQUN6QixLQUFLLFVBQUMsT0FBYTthQUNsQixNQUFLLFFBQVE7O2NBRWQsUUFBUTthQUNQLE1BQUssWUFBWTs7O0tBSXpCOztBQTFCYTtBQTRCYix1QkFBSSxXQUFXLGtCQUFrQjs7Ozs7Ozs7O0FDbkNqQyw0Q0FBOEI7QUFFOUI7Ozs7Ozs7Ozs7O0lBV0c7QUFDSDtLQUFBO1NBQ0UsYUFBUSxHQUFHLEdBQUcsQ0FBQztTQUNmLGFBQVEsR0FBVyxtQkFBTyxDQUFDLEVBQWMsQ0FBQyxDQUFDO1NBQzNDLFVBQUssR0FBRzthQUNOLE9BQU8sRUFBRSxHQUFHO2FBQ1osU0FBUyxFQUFFLFlBQVk7VUFDeEIsQ0FBQztLQUNKLENBQUM7S0FBRCx1QkFBQztBQUFELEVBQUM7QUFQWSw2Q0FBZ0I7QUFTN0Isc0JBQUcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLGNBQU0sV0FBSSxnQkFBZ0IsRUFBRSxFQUF0QixDQUFzQixDQUFDLENBQUM7Ozs7Ozs7QUN2QnpELG9JQUFtSSxTQUFTLGM7Ozs7OztBQ0E1STtBQUNBLFFBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRHREOzs7OztvRUFPQTtLQU1FLHNCQUFvQixJQUNBLGFBQ0EsZ0JBQThCO1NBRjlCO1NBQ0E7U0FDQTtTQU5aLGNBQVM7YUFDZixZQUFZOzs7Ozs7Ozs7O0tBZWQsaURBQWMsU0FBWTtTQUExQjtTQUNFLE9BQU8sS0FBSztjQUNULElBQUksS0FBSyxlQUFlLE9BQU8sS0FBSyxPQUFPLFlBQVksVUFBVSxNQUFNO2NBQ3ZFLEtBQUssVUFBQyxVQUFhO2FBQ2xCLElBQUksU0FBUyxRQUFRLFNBQVMsS0FBSyxPQUFPO2lCQUN4QyxPQUFPLFNBQVMsS0FBSyxNQUFNOzthQUU3QixPQUFPLE1BQUssR0FBRzs7Y0FFaEIsTUFBTTthQUNMLE9BQU87OztLQUlmOztBQWhDYTtBQWtDYix1QkFBSSxRQUFRLGdCQUFnQjs7Ozs7OztBQ3pDNUI7QUFDQTtBQUNBLHlDQUF3QyxxR0FBcUc7QUFDN0k7QUFDQSxFQUFDLEc7Ozs7OztBQ0pEO0FBQ0E7QUFDQSx5Q0FBd0MsZ0hBQWdIO0FBQ3hKO0FBQ0EsRUFBQyxHIiwiZmlsZSI6ImFwcC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU4ODNkYzlmZjU4YmRhNWZkYTI1IiwiaW1wb3J0IGFwcCBmcm9tICdtYWluLm1vZHVsZSc7XG5pbXBvcnQge0lBcHBsaWNhdGlvbkNvbmZpZ30gZnJvbSAnbWFpbi5jb25zdGFudHMnO1xuaW1wb3J0IHtJTG9nZ2VyfSBmcm9tICdoZWxwZXJzL2xvZ2dlci9sb2dnZXInO1xuXG4vKipcbiAqIENvbmZpZ3VyZXMgdGhlIGFwcGxpY2F0aW9uIChiZWZvcmUgcnVubmluZykuXG4gKi9cbmZ1bmN0aW9uIG1haW5Db25maWcoJHByb3ZpZGU6IG5nLmF1dG8uSVByb3ZpZGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAkY29tcGlsZVByb3ZpZGVyOiBuZy5JQ29tcGlsZVByb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb25Qcm92aWRlcjogbmcuSUxvY2F0aW9uUHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgICAgICRxUHJvdmlkZXI6IGFueSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBJQXBwbGljYXRpb25Db25maWcpIHtcblxuICAvLyBFeHRlbmQgdGhlICRleGNlcHRpb25IYW5kbGVyIHNlcnZpY2UgdG8gb3V0cHV0IGxvZ3MuXG4gICRwcm92aWRlLmRlY29yYXRvcignJGV4Y2VwdGlvbkhhbmRsZXInLCAoJGRlbGVnYXRlOiBhbnksICRpbmplY3RvcjogYW55KSA9PiB7XG4gICAgcmV0dXJuIChleGNlcHRpb246IGFueSwgY2F1c2U6IGFueSkgPT4ge1xuICAgICAgJGRlbGVnYXRlKGV4Y2VwdGlvbiwgY2F1c2UpO1xuXG4gICAgICBsZXQgbG9nZ2VyOiBJTG9nZ2VyID0gJGluamVjdG9yLmdldCgnbG9nZ2VyJykuZ2V0TG9nZ2VyKCdleGNlcHRpb25IYW5kbGVyJyk7XG4gICAgICBsb2dnZXIuZXJyb3IoZXhjZXB0aW9uICsgKGNhdXNlID8gJyAoJyArIGNhdXNlICsgJyknIDogJycpKTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBEaXNhYmxlIGRlYnVnIGxvZ3MgaW4gcHJvZHVjdGlvbiB2ZXJzaW9uXG4gICRwcm92aWRlLmRlY29yYXRvcignJGxvZycsICgkZGVsZWdhdGU6IGFueSkgPT4ge1xuICAgIGlmICghY29uZmlnLmVudmlyb25tZW50LmRlYnVnKSB7XG4gICAgICAkZGVsZWdhdGUubG9nID0gYW5ndWxhci5ub29wO1xuICAgICAgJGRlbGVnYXRlLmRlYnVnID0gYW5ndWxhci5ub29wO1xuICAgIH1cbiAgICByZXR1cm4gJGRlbGVnYXRlO1xuICB9KTtcblxuICAvLyBEaXNhYmxlIGFuZ3VsYXIgZGVidWcgaW5mbyBpbiBwcm9kdWN0aW9uIHZlcnNpb25cbiAgJGNvbXBpbGVQcm92aWRlci5kZWJ1Z0luZm9FbmFibGVkKGNvbmZpZy5lbnZpcm9ubWVudC5kZWJ1Zyk7XG5cbiAgLy8gVXNlIG5vIGhhc2ggcHJlZml4IGZvciByb3V0aW5nXG4gICRsb2NhdGlvblByb3ZpZGVyLmhhc2hQcmVmaXgoJycpO1xuXG4gIC8vIERpc2FibGUgZXhjZXB0aW9uIG9uIHVuaGFuZGxlZCByZWplY3Rpb25zICh3ZSBoYXZlIG91ciBvd24gaGFuZGxlcilcbiAgJHFQcm92aWRlci5lcnJvck9uVW5oYW5kbGVkUmVqZWN0aW9ucyhmYWxzZSk7XG59XG5cbmFwcC5jb25maWcobWFpbkNvbmZpZyk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvbWFpbi9tYWluLmNvbmZpZy50cyIsIid1c2Ugc3RyaWN0JztcblxuLy8gVHJhbnNsYXRpb25zIGFyZSBpbmplY3RlZCBhdCBidWlsZCBwaGFzZVxuYW5ndWxhci5tb2R1bGUoJ3RyYW5zbGF0aW9ucycsIFtdKTtcblxuZXhwb3J0IGRlZmF1bHQgYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtcbiAgJ3RyYW5zbGF0aW9ucycsXG4gICdnZXR0ZXh0JyxcbiAgJ25nQW5pbWF0ZScsXG4gICduZ1Nhbml0aXplJyxcbiAgJ25nQ29yZG92YScsXG4gICd1aS5yb3V0ZXInLFxuICAnaW9uaWMnXG5dKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NvdXJjZXMvbWFpbi9tYWluLm1vZHVsZS50cyIsImltcG9ydCBhcHAgZnJvbSAnbWFpbi5tb2R1bGUnO1xuaW1wb3J0IHtJU2VydmVyQ29uZmlnfSBmcm9tICdoZWxwZXJzL3Jlc3QvcmVzdC5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJQXBwbGljYXRpb25Db25maWcge1xuICB2ZXJzaW9uOiBzdHJpbmc7XG4gIGVudmlyb25tZW50OiBJQXBwbGljYXRpb25FbnZpcm9ubWVudDtcbiAgc3VwcG9ydGVkTGFuZ3VhZ2VzOiBBcnJheTxzdHJpbmc+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBcHBsaWNhdGlvbkVudmlyb25tZW50IHtcbiAgZGVidWc6IGJvb2xlYW47XG4gIHNlcnZlcjogSVNlcnZlckNvbmZpZztcbn1cblxuLy8gRG8gbm90IHJlbW92ZSB0aGUgY29tbWVudHMgYmVsb3csIG9yIGNoYW5nZSB0aGUgdmFsdWVzLiBJdCdzIHRoZSBtYXJrZXJzIHVzZWQgYnkgZ3VscCBidWlsZCB0YXNrIHRvIGNoYW5nZSB0aGVcbi8vIHZhbHVlIG9mIHRoZSBjb25maWcgY29uc3RhbnQgd2hlbiBidWlsZGluZyB0aGUgYXBwbGljYXRpb24sIHdoaWxlIHJlbW92aW5nIHRoZSBjb2RlIGJlbG93IGZvciBhbGwgZW52aXJvbm1lbnRzLlxuLy8gcmVwbGFjZTplbnZpcm9ubWVudFxubGV0IGVudmlyb25tZW50ID0ge1xuICBsb2NhbDoge1xuICAgIGRlYnVnOiB0cnVlLFxuXG4gICAgLy8gUkVTVCBiYWNrZW5kIGNvbmZpZ3VyYXRpb24sIHVzZWQgZm9yIGFsbCB3ZWIgc2VydmljZXMgdXNpbmcgcmVzdFNlcnZpY2VcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIHVybDogJycsXG4gICAgICByb3V0ZTogJ2FwaSdcbiAgICB9XG4gIH0sXG4gIHByb2R1Y3Rpb246IHtcbiAgICBkZWJ1ZzogZmFsc2UsXG4gICAgc2VydmVyOiB7XG4gICAgICB1cmw6ICdodHRwOi8vYXBpLmljbmRiLmNvbScsXG4gICAgICByb3V0ZTogJydcbiAgICB9XG4gIH1cbn07XG4vLyBlbmRyZXBsYWNlXG5cbi8qKlxuICogRGVmaW5lcyBhcHAtbGV2ZWwgY29uZmlndXJhdGlvbi5cbiAqL1xubGV0IGNvbmZpZzogSUFwcGxpY2F0aW9uQ29uZmlnID0ge1xuXG4gIC8vIERvIG5vdCByZW1vdmUgdGhlIGNvbW1lbnRzIGJlbG93LCBvciBjaGFuZ2UgdGhlIHZhbHVlcy4gSXQncyB0aGUgbWFya2VycyB1c2VkIGJ5IGd1bHAgYnVpbGQgdGFzayB0byBpbmplY3QgYXBwXG4gIC8vIHZlcnNpb24gZnJvbSBwYWNrYWdlLmpzb24gYW5kIGVudmlyb25tZW50IHZhbHVlcy5cbiAgLy8gcmVwbGFjZTpjb25zdGFudFxuICB2ZXJzaW9uOiAnZGV2JyxcbiAgZW52aXJvbm1lbnQ6IGVudmlyb25tZW50LmxvY2FsLFxuICAvLyBlbmRyZXBsYWNlXG5cbiAgLy8gU3VwcG9ydGVkIGxhbmd1YWdlc1xuICBzdXBwb3J0ZWRMYW5ndWFnZXM6IFtcbiAgICAnZW4tVVMnLFxuICAgICdmci1GUidcbiAgXVxuXG59O1xuXG5hcHAuY29uc3RhbnQoJ2NvbmZpZycsIGNvbmZpZyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zb3VyY2VzL21haW4vbWFpbi5jb25zdGFudHMudHMiLCJpbXBvcnQgYXBwIGZyb20gJ21haW4ubW9kdWxlJztcblxuLyoqXG4gKiBDb25maWd1cmVzIHRoZSBhcHBsaWNhdGlvbiByb3V0ZXMuXG4gKi9cbmZ1bmN0aW9uIHJvdXRlQ29uZmlnKCRzdGF0ZVByb3ZpZGVyOiBhbmd1bGFyLnVpLklTdGF0ZVByb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyOiBhbmd1bGFyLnVpLklVcmxSb3V0ZXJQcm92aWRlcixcbiAgICAgICAgICAgICAgICAgICAgIGdldHRleHQ6IGFuZ3VsYXIuZ2V0dGV4dC5nZXR0ZXh0RnVuY3Rpb24pIHtcblxuICAvLyBSb3V0ZXMgY29uZmlndXJhdGlvblxuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG5cbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ2FwcCcsIHtcbiAgICAgIHRlbXBsYXRlOiA8c3RyaW5nPnJlcXVpcmUoJ3NoZWxsL3NoZWxsLmh0bWwnKSxcbiAgICAgIGNvbnRyb2xsZXI6ICdzaGVsbENvbnRyb2xsZXIgYXMgc2hlbGwnXG4gICAgfSlcbiAgICAuc3RhdGUoJ2FwcC5ob21lJywge1xuICAgICAgdXJsOiAnLycsXG4gICAgICB2aWV3czoge1xuICAgICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgICAgdGVtcGxhdGU6IDxzdHJpbmc+cmVxdWlyZSgnc2NyZWVucy9ob21lL2hvbWUuaHRtbCcpLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdob21lQ29udHJvbGxlciBhcyB2bSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRhdGE6IHt0aXRsZTogZ2V0dGV4dCgnSG9tZScpfVxuICAgIH0pXG4gICAgLnN0YXRlKCdhcHAuYWJvdXQnLCB7XG4gICAgICB1cmw6ICcvYWJvdXQnLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgJ21lbnVDb250ZW50Jzoge1xuICAgICAgICAgIHRlbXBsYXRlOiA8c3RyaW5nPnJlcXVpcmUoJ3NjcmVlbnMvYWJvdXQvYWJvdXQuaHRtbCcpLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdhYm91dENvbnRyb2xsZXIgYXMgdm0nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkYXRhOiB7dGl0bGU6IGdldHRleHQoJ0Fib3V0Jyl9XG4gICAgfSk7XG5cbn1cblxuYXBwLmNvbmZpZyhyb3V0ZUNvbmZpZyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL21haW4vbWFpbi5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGlvbi1zaWRlLW1lbnVzIGlkPVxcXCJzaGVsbFxcXCIgY2xhc3M9XFxcInNoZWxsXFxcIiBlbmFibGUtbWVudS13aXRoLWJhY2stdmlld3M9XFxcInRydWVcXFwiPjwhLS1WaWV3IGNvbnRlbnQtLT48aW9uLXNpZGUtbWVudS1jb250ZW50Pjxpb24tbmF2LWJhciBjbGFzcz1cXFwiYmFyLXN0YWJsZVxcXCI+PGlvbi1uYXYtYmFjay1idXR0b24+PC9pb24tbmF2LWJhY2stYnV0dG9uPjxpb24tbmF2LWJ1dHRvbnMgc2lkZT1cXFwibGVmdFxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGJ1dHRvbi1pY29uIGJ1dHRvbi1jbGVhciBpb24tbmF2aWNvblxcXCIgbWVudS10b2dnbGU9XFxcImxlZnRcXFwiIG5nLWhpZGU9XFxcIiRleHBvc2VBc2lkZS5hY3RpdmVcXFwiPjwvYnV0dG9uPjwvaW9uLW5hdi1idXR0b25zPjwvaW9uLW5hdi1iYXI+PGlvbi1uYXYtdmlldyBuYW1lPVxcXCJtZW51Q29udGVudFxcXCI+PC9pb24tbmF2LXZpZXc+PC9pb24tc2lkZS1tZW51LWNvbnRlbnQ+PCEtLVNpZGUgbWVudS0tPjxpb24tc2lkZS1tZW51IHNpZGU9XFxcImxlZnRcXFwiIGV4cG9zZS1hc2lkZS13aGVuPVxcXCIobWluLXdpZHRoOjc2OXB4KVxcXCI+PGlvbi1oZWFkZXItYmFyIGNsYXNzPVxcXCJiYXItZGFya1xcXCI+PGgxIGNsYXNzPVxcXCJ0aXRsZVxcXCIgdHJhbnNsYXRlPkFQUF9OQU1FPC9oMT48L2lvbi1oZWFkZXItYmFyPjxpb24tY29udGVudCBjbGFzcz1cXFwiZGFyay1iZ1xcXCI+PGlvbi1saXN0Pjxpb24taXRlbSBjbGFzcz1cXFwiaXRlbS1kYXJrIGl0ZW0taWNvbi1sZWZ0XFxcIiBtZW51LWNsb3NlIGhyZWY9XFxcIiMvXFxcIiBuZy1jbGFzcz1cXFwieyBhY3RpdmU6IHNoZWxsLnN0YXRlQ29udGFpbnMoJ2FwcC5ob21lJykgfVxcXCI+PHNwYW4gY2xhc3M9XFxcIm1lZGl1bS1kYXJrXFxcIj48aSBjbGFzcz1cXFwiaWNvbiBpb24taG9tZSBpY29uLWxhcmdlXFxcIj48L2k+IDxzcGFuIHRyYW5zbGF0ZT5Ib21lPC9zcGFuPjwvc3Bhbj48L2lvbi1pdGVtPjxpb24taXRlbSBjbGFzcz1cXFwiaXRlbS1kYXJrIGl0ZW0taWNvbi1sZWZ0IHRleHQtZGFya2VyXFxcIiBtZW51LWNsb3NlIGhyZWY9XFxcIiMvYWJvdXRcXFwiIG5nLWNsYXNzPVxcXCJ7IGFjdGl2ZTogc2hlbGwuc3RhdGVDb250YWlucygnYXBwLmFib3V0JykgfVxcXCI+PHNwYW4gY2xhc3M9XFxcIm1lZGl1bS1kYXJrXFxcIj48aSBjbGFzcz1cXFwiaWNvbiBpb24taW5mb3JtYXRpb24tY2lyY2xlZCBpY29uLWxhcmdlXFxcIj48L2k+IDxzcGFuIHRyYW5zbGF0ZT5BYm91dDwvc3Bhbj48L3NwYW4+PC9pb24taXRlbT48L2lvbi1saXN0PjwvaW9uLWNvbnRlbnQ+PC9pb24tc2lkZS1tZW51PjwvaW9uLXNpZGUtbWVudXM+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvbWFpbi9zaGVsbC9zaGVsbC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8aW9uLXZpZXcgaWQ9XFxcImhvbWUtc2NyZWVuXFxcIiBjbGFzcz1cXFwiaG9tZS1zY3JlZW5cXFwiPjxpb24tbmF2LXRpdGxlPnt7dmlld1RpdGxlfX08L2lvbi1uYXYtdGl0bGU+PGlvbi1jb250ZW50Pjxpb24tbGlzdCB0eXBlPVxcXCJjYXJkXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPjxpb24taXRlbSBjbGFzcz1cXFwiaXRlbS1kaXZpZGVyXFxcIj48aW1nIGNsYXNzPVxcXCJsb2dvXFxcIiBzcmM9XFxcImltYWdlcy9hbmd1bGFyanMtbG9nby5wbmdcXFwiIGFsdD1cXFwiYW5ndWxhcmpzIGxvZ29cXFwiPjxoMSB0cmFuc2xhdGU+SGVsbG8gd29ybGQgITwvaDE+PC9pb24taXRlbT48aW9uLWl0ZW0gY2xhc3M9XFxcIml0ZW0tYm9keVxcXCI+PGRpdiB1aS1sb2FkaW5nPVxcXCJ2bS5pc0xvYWRpbmdcXFwiPjwvZGl2PjxlbSBjbGFzcz1cXFwicXVvdGVcXFwiPnt7dm0ucXVvdGV9fTwvZW0+PC9pb24taXRlbT48L2lvbi1saXN0PjwvaW9uLWNvbnRlbnQ+PC9pb24tdmlldz5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy9tYWluL3NjcmVlbnMvaG9tZS9ob21lLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxpb24tdmlldyBpZD1cXFwiYWJvdXQtc2NyZWVuXFxcIj48aW9uLW5hdi10aXRsZT57e3ZpZXdUaXRsZX19PC9pb24tbmF2LXRpdGxlPjxpb24tY29udGVudD48aW9uLWxpc3QgdHlwZT1cXFwiY2FyZFxcXCI+PGlvbi1pdGVtIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+PGgxPjxpIGNsYXNzPVxcXCJpY29uIGlvbi1ib29rbWFya1xcXCI+PC9pPiA8c3BhbiB0cmFuc2xhdGU+QVBQX05BTUU8L3NwYW4+PC9oMT48cD48c3BhbiB0cmFuc2xhdGU+VmVyc2lvbjwvc3Bhbj4ge3t2bS52ZXJzaW9ufX08L3A+PC9pb24taXRlbT48L2lvbi1saXN0PjwvaW9uLWNvbnRlbnQ+PC9pb24tdmlldz5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy9tYWluL3NjcmVlbnMvYWJvdXQvYWJvdXQuaHRtbFxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYXBwIGZyb20gJ21haW4ubW9kdWxlJztcbmltcG9ydCB7SUFwcGxpY2F0aW9uQ29uZmlnfSBmcm9tICdtYWluLmNvbnN0YW50cyc7XG5pbXBvcnQge1Jlc3RTZXJ2aWNlfSBmcm9tICdoZWxwZXJzL3Jlc3QvcmVzdC5zZXJ2aWNlJztcbmltcG9ydCB7SUxvZ2dlciwgTG9nZ2VyU2VydmljZX0gZnJvbSAnaGVscGVycy9sb2dnZXIvbG9nZ2VyJztcblxuLyoqXG4gKiBFbnRyeSBwb2ludCBvZiB0aGUgYXBwbGljYXRpb24uXG4gKiBJbml0aWFsaXplcyBhcHBsaWNhdGlvbiBhbmQgcm9vdCBjb250cm9sbGVyLlxuICovXG5mdW5jdGlvbiBtYWluKCR3aW5kb3c6IG5nLklXaW5kb3dTZXJ2aWNlLFxuICAgICAgICAgICAgICAkbG9jYWxlOiBuZy5JTG9jYWxlU2VydmljZSxcbiAgICAgICAgICAgICAgJHJvb3RTY29wZTogYW55LFxuICAgICAgICAgICAgICAkc3RhdGU6IGFuZ3VsYXIudWkuSVN0YXRlU2VydmljZSxcbiAgICAgICAgICAgICAgJHRpbWVvdXQ6IG5nLklUaW1lb3V0U2VydmljZSxcbiAgICAgICAgICAgICAgJGNvcmRvdmFLZXlib2FyZDogYW55LFxuICAgICAgICAgICAgICAkaW9uaWNQbGF0Zm9ybTogaW9uaWMucGxhdGZvcm0uSW9uaWNQbGF0Zm9ybVNlcnZpY2UsXG4gICAgICAgICAgICAgIGdldHRleHRDYXRhbG9nOiBhbmd1bGFyLmdldHRleHQuZ2V0dGV4dENhdGFsb2csXG4gICAgICAgICAgICAgIF86IF8uTG9EYXNoU3RhdGljLFxuICAgICAgICAgICAgICBjb25maWc6IElBcHBsaWNhdGlvbkNvbmZpZyxcbiAgICAgICAgICAgICAgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICByZXN0U2VydmljZTogUmVzdFNlcnZpY2UpIHtcblxuICAvKlxuICAgKiBSb290IHZpZXcgbW9kZWxcbiAgICovXG5cbiAgbGV0IHZtID0gJHJvb3RTY29wZTtcblxuICB2bS5wYWdlVGl0bGUgPSAnJztcbiAgdm0udmlld1RpdGxlID0gJyc7XG5cbiAgLyoqXG4gICAqIFV0aWxpdHkgbWV0aG9kIHRvIHNldCB0aGUgbGFuZ3VhZ2UgaW4gdGhlIHRvb2xzIHJlcXVpcmluZyBpdC5cbiAgICogVGhlIGN1cnJlbnQgbGFuZ3VhZ2UgaXMgc2F2ZWQgdG8gdGhlIGxvY2FsIHN0b3JhZ2UuXG4gICAqIElmIG5vIHBhcmFtZXRlciBpcyBzcGVjaWZpZWQsIHRoZSBsYW5ndWFnZSBpcyBsb2FkZWQgZnJvbSBsb2NhbCBzdG9yYWdlIChpZiBwb3NzaWJsZSkuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gbGFuZ3VhZ2UgVGhlIElFVEYgbGFuZ3VhZ2UgdGFnLlxuICAgKi9cbiAgdm0uc2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbihsYW5ndWFnZT86IHN0cmluZykge1xuICAgIGxhbmd1YWdlID0gbGFuZ3VhZ2UgfHwgJHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ3VhZ2UnKTtcbiAgICBsZXQgaXNTdXBwb3J0ZWRMYW5ndWFnZSA9IF8uaW5jbHVkZXMoY29uZmlnLnN1cHBvcnRlZExhbmd1YWdlcywgbGFuZ3VhZ2UpO1xuXG4gICAgLy8gSWYgbm8gZXhhY3QgbWF0Y2ggaXMgZm91bmQsIHNlYXJjaCB3aXRob3V0IHRoZSByZWdpb25cbiAgICBpZiAoIWlzU3VwcG9ydGVkTGFuZ3VhZ2UgJiYgbGFuZ3VhZ2UpIHtcbiAgICAgIGxldCBsYW5ndWFnZVBhcnQgPSBsYW5ndWFnZS5zcGxpdCgnLScpWzBdO1xuICAgICAgbGFuZ3VhZ2UgPSBfLmZpbmQoY29uZmlnLnN1cHBvcnRlZExhbmd1YWdlcyxcbiAgICAgICAgKHN1cHBvcnRlZExhbmd1YWdlOiBzdHJpbmcpID0+IF8uc3RhcnRzV2l0aChzdXBwb3J0ZWRMYW5ndWFnZSwgbGFuZ3VhZ2VQYXJ0KSk7XG4gICAgICBpc1N1cHBvcnRlZExhbmd1YWdlID0gISFsYW5ndWFnZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBpZiBsYW5ndWFnZSBpcyBub3Qgc3VwcG9ydGVkXG4gICAgaWYgKCFpc1N1cHBvcnRlZExhbmd1YWdlKSB7XG4gICAgICBsYW5ndWFnZSA9ICdlbi1VUyc7XG4gICAgfVxuXG4gICAgLy8gQ29uZmlndXJlIHRyYW5zbGF0aW9uIHdpdGggZ2V0dGV4dFxuICAgIGdldHRleHRDYXRhbG9nLnNldEN1cnJlbnRMYW5ndWFnZShsYW5ndWFnZSk7XG4gICAgJGxvY2FsZS5pZCA9IGxhbmd1YWdlO1xuICAgICR3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmd1YWdlJywgbGFuZ3VhZ2UpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRpdGxlIG9uIHZpZXcgY2hhbmdlLlxuICAgKi9cbiAgdm0uJG9uKCckc3RhdGVDaGFuZ2VTdWNjZXNzJywgKGV2ZW50OiBhbnksIHRvU3RhdGU6IGFuZ3VsYXIudWkuSVN0YXRlKSA9PiB7XG4gICAgdXBkYXRlVGl0bGUodG9TdGF0ZS5kYXRhID8gdG9TdGF0ZS5kYXRhLnRpdGxlIDogbnVsbCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRpdGxlIG9uIGxhbmd1YWdlIGNoYW5nZS5cbiAgICovXG4gIHZtLiRvbignZ2V0dGV4dExhbmd1YWdlQ2hhbmdlZCcsICgpID0+IHtcbiAgICB1cGRhdGVUaXRsZSgkc3RhdGUuY3VycmVudC5kYXRhID8gJHN0YXRlLmN1cnJlbnQuZGF0YS50aXRsZSA6IG51bGwpO1xuICB9KTtcblxuICBpbml0KCk7XG5cbiAgLypcbiAgICogSW50ZXJuYWxcbiAgICovXG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSByb290IGNvbnRyb2xsZXIuXG4gICAqL1xuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGxldCBfbG9nZ2VyOiBJTG9nZ2VyID0gbG9nZ2VyLmdldExvZ2dlcignbWFpbicpO1xuICAgIC8vIEVuYWJsZSBkZWJ1ZyBtb2RlIGZvciB0cmFuc2xhdGlvbnNcbiAgICBnZXR0ZXh0Q2F0YWxvZy5kZWJ1ZyA9IGNvbmZpZy5lbnZpcm9ubWVudC5kZWJ1ZztcblxuICAgIHZtLnNldExhbmd1YWdlKCk7XG5cbiAgICAvLyBTZXQgUkVTVCBzZXJ2ZXIgY29uZmlndXJhdGlvblxuICAgIHJlc3RTZXJ2aWNlLnNldFNlcnZlcihjb25maWcuZW52aXJvbm1lbnQuc2VydmVyKTtcblxuICAgIC8vIENvcmRvdmEgcGxhdGZvcm0gYW5kIHBsdWdpbnMgaW5pdFxuICAgICRpb25pY1BsYXRmb3JtLnJlYWR5KCgpID0+IHtcblxuICAgICAgLy8gSGlkZSBzcGxhc2ggc2NyZWVuXG4gICAgICBsZXQgc3BsYXNoU2NyZWVuID0gJHdpbmRvdy5uYXZpZ2F0b3Iuc3BsYXNoc2NyZWVuO1xuICAgICAgaWYgKHNwbGFzaFNjcmVlbikge1xuICAgICAgICAkdGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc3BsYXNoU2NyZWVuLmhpZGUoKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9XG5cbiAgICAgIC8vIERldGVjdCBhbmQgc2V0IGRlZmF1bHQgbGFuZ3VhZ2VcbiAgICAgIGxldCBnbG9iYWxpemF0aW9uID0gJHdpbmRvdy5uYXZpZ2F0b3IuZ2xvYmFsaXphdGlvbjtcbiAgICAgIGlmIChnbG9iYWxpemF0aW9uKSB7XG4gICAgICAgIC8vIFVzZSBjb3Jkb3ZhIHBsdWdpbiB0byByZXRyaWV2ZSBkZXZpY2UncyBsb2NhbGVcbiAgICAgICAgZ2xvYmFsaXphdGlvbi5nZXRQcmVmZXJyZWRMYW5ndWFnZSgobGFuZ3VhZ2UpID0+IHtcbiAgICAgICAgICBfbG9nZ2VyLmxvZygnU2V0dGluZyBkZXZpY2UgbG9jYWxlIFwiJyArIGxhbmd1YWdlLnZhbHVlICsgJ1wiIGFzIGRlZmF1bHQgbGFuZ3VhZ2UnKTtcbiAgICAgICAgICB2bS4kYXBwbHkoKCkgPT4ge1xuICAgICAgICAgICAgdm0uc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UudmFsdWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LCBudWxsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCR3aW5kb3cuY29yZG92YSAmJiAkd2luZG93LmNvcmRvdmEucGx1Z2lucy5LZXlib2FyZCkge1xuICAgICAgICAkY29yZG92YUtleWJvYXJkLmRpc2FibGVTY3JvbGwodHJ1ZSk7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSB0aXRsZS5cbiAgICogQHBhcmFtIHs/c3RyaW5nPX0gc3RhdGVUaXRsZSBUaXRsZSBvZiBjdXJyZW50IHN0YXRlLCB0byBiZSB0cmFuc2xhdGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gdXBkYXRlVGl0bGUoc3RhdGVUaXRsZT86IHN0cmluZykge1xuICAgIHZtLnBhZ2VUaXRsZSA9IGdldHRleHRDYXRhbG9nLmdldFN0cmluZygnQVBQX05BTUUnKTtcblxuICAgIGlmIChzdGF0ZVRpdGxlKSB7XG4gICAgICB2bS52aWV3VGl0bGUgPSBnZXR0ZXh0Q2F0YWxvZy5nZXRTdHJpbmcoc3RhdGVUaXRsZSk7XG4gICAgICB2bS5wYWdlVGl0bGUgKz0gJyB8ICcgKyB2bS52aWV3VGl0bGU7XG4gICAgfVxuICB9XG5cbn1cblxuYXBwLnJ1bihtYWluKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvbWFpbi9tYWluLnJ1bi50cyIsImltcG9ydCBhcHAgZnJvbSAnbWFpbi5tb2R1bGUnO1xuXG4vKipcbiAqIFdyYXBzIGV4dGVybmFsIGdsb2JhbCBsaWJyYXJpZXMgaW50byBBbmd1bGFySlMgaW5qZWN0aW9uIHN5c3RlbS5cbiAqIGdsb2JhbCB3aW5kb3c6IGZhbHNlXG4gKi9cbmFwcC5jb25zdGFudCgnXycsIF8pOyAvLyBMb2Rhc2hcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NvdXJjZXMvbWFpbi9tYWluLndyYXBwZXJzLnRzIiwiaW1wb3J0IGFwcCBmcm9tICdtYWluLm1vZHVsZSc7XG5pbXBvcnQge0lMb2dnZXIsIExvZ2dlclNlcnZpY2V9IGZyb20gJ2hlbHBlcnMvbG9nZ2VyL2xvZ2dlcic7XG5cbi8qKlxuICogRGlzcGxheXMgdGhlIFNQQSBzaGVsbC5cbiAqIFRoZSBzaGVsbCBjb250YWlucyB0aGUgc2hhcmVkIHBhcnRzIG9mIHRoZSBhcHBsaWNhdGlvbjogaGVhZGVyLCBmb290ZXIsIG5hdmlnYXRpb24uLi5cbiAqL1xuZXhwb3J0IGNsYXNzIFNoZWxsQ29udHJvbGxlciB7XG5cbiAgY3VycmVudExvY2FsZTogbmcuSUxvY2FsZVNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBsb2dnZXI6IElMb2dnZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSAkc3RhdGU6IG5nLnVpLklTdGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgICRsb2NhbGU6IG5nLklMb2NhbGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF86IF8uTG9EYXNoU3RhdGljLFxuICAgICAgICAgICAgICBsb2dnZXI6IExvZ2dlclNlcnZpY2UpIHtcblxuICAgIHRoaXMuY3VycmVudExvY2FsZSA9ICRsb2NhbGU7XG4gICAgdGhpcy5sb2dnZXIgPSBsb2dnZXIuZ2V0TG9nZ2VyKCdzaGVsbCcpO1xuXG4gICAgdGhpcy5sb2dnZXIubG9nKCdpbml0Jyk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBzcGVjaWZpZWQgbmFtZSBpcyBjb250YWluZWQgaW4gdGhlIGN1cnJlbnQgbmF2aWdhdGlvbiBzdGF0ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIHN0YXRlIG5hbWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBuYW1lIGlzIGNvbnRhaW5lZCBpbiB0aGUgY3VycmVudCBuYXZpZ2F0aW9uIHN0YXRlLlxuICAgKi9cbiAgc3RhdGVDb250YWlucyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fLnN0YXJ0c1dpdGgodGhpcy4kc3RhdGUuY3VycmVudC5uYW1lLCBuYW1lKTtcbiAgfVxuXG59XG5cbmFwcC5jb250cm9sbGVyKCdzaGVsbENvbnRyb2xsZXInLCBTaGVsbENvbnRyb2xsZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9tYWluL3NoZWxsL3NoZWxsLmNvbnRyb2xsZXIudHMiLCJpbXBvcnQgYXBwIGZyb20gJ21haW4ubW9kdWxlJztcbmltcG9ydCB7SUxvZ2dlciwgTG9nZ2VyU2VydmljZX0gZnJvbSAnaGVscGVycy9sb2dnZXIvbG9nZ2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ2FjaGVEYXRhIHtcbiAgZGF0ZTogRGF0ZTtcbiAgZGF0YTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDYWNoZSB7XG4gIFtuYW1lOiBzdHJpbmddOiBJQ2FjaGVEYXRhO1xufVxuXG4vKipcbiAqIENhY2hlIHNlcnZpY2U6IG1hbmFnZXMgY2FjaGVkIGRhdGEgZm9yIEdFVCByZXF1ZXN0cy5cbiAqIEJ5IGRlZmF1bHQsIHRoZSBjYWNoZSBpcyBvbmx5IHBlcnNpc3RlZCBpbiBtZW1vcnksIGJ1dCB5b3UgY2FuIGNoYW5nZSB0aGlzIGJlaGF2aW9yIHVzaW5nIHRoZSBzZXRQZXJzaXN0ZW5jZSgpXG4gKiBtZXRob2QuXG4gKi9cbmV4cG9ydCBjbGFzcyBDYWNoZVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgbG9nZ2VyOiBJTG9nZ2VyO1xuICBwcml2YXRlIGNhY2hlZERhdGE6IElDYWNoZSA9IHt9O1xuICBwcml2YXRlIHN0b3JhZ2U6IGFueSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSAkd2luZG93OiBuZy5JV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlci5nZXRMb2dnZXIoJ2NhY2hlU2VydmljZScpO1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgc2VydmljZS5cbiAgICAgKi9cbiAgICB0aGlzLmxvYWRDYWNoZURhdGEoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjYWNoZSBkYXRhIGZvciB0aGUgc3BlY2lmaWVkIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7IXN0cmluZ30gdXJsIFVSTCBvZiB0aGUgUkVTVCBzZXJ2aWNlIGNhbGwuXG4gICAqIEBwYXJhbSB7bWFwPX0gcGFyYW1zIE1hcCBvZiBzdHJpbmdzIG9yIG9iamVjdHMgd2hpY2ggd2lsbCBiZSB0dXJuZWQgdG8gP2tleTE9dmFsdWUxJmtleTI9dmFsdWUyIGFmdGVyIHRoZSB1cmwuIElmIHRoZSB2YWx1ZSBpcyBub3QgYSBzdHJpbmcsIGl0IHdpbGwgYmVcbiAgICogICBKU09OaWZpZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSByZWNlaXZlZCBkYXRhLlxuICAgKiBAcGFyYW0ge0RhdGU9fSBkYXRlIFRoZSBjYWNoZSBkYXRlLCBub3cgZGF0ZSBpcyB1c2VkIGlmIG5vdCBzcGVjaWZpZWQuXG4gICAqL1xuICBzZXRDYWNoZURhdGEodXJsOiBzdHJpbmcsIHBhcmFtczogYW55LCBkYXRhOiBhbnksIGRhdGU/OiBEYXRlKTogdm9pZCB7XG4gICAgbGV0IGNhY2hlS2V5ID0gdGhpcy5nZXRDYWNoZUtleSh1cmwsIHBhcmFtcyk7XG5cbiAgICB0aGlzLmNhY2hlZERhdGFbY2FjaGVLZXldID0ge1xuICAgICAgZGF0ZTogZGF0ZSB8fCBuZXcgRGF0ZSgpLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH07XG5cbiAgICB0aGlzLmxvZ2dlci5sb2coJ0NhY2hlIHNldCBmb3Iga2V5OiBcIicgKyBjYWNoZUtleSArICdcIicpO1xuXG4gICAgdGhpcy5zYXZlQ2FjaGVEYXRhKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY2FjaGVkIGRhdGEgKGlmIHBvc3NpYmxlKSBmb3IgdGhlIHNwZWNpZmllZCByZXF1ZXN0LlxuICAgKiBAcGFyYW0geyFzdHJpbmd9IHVybCBVUkwgb2YgdGhlIFJFU1Qgc2VydmljZSBjYWxsLlxuICAgKiBAcGFyYW0gez9tYXA9fSBwYXJhbXMgTWFwIG9mIHN0cmluZ3Mgb3Igb2JqZWN0cyB3aGljaCB3aWxsIGJlIHR1cm5lZCB0byA/a2V5MT12YWx1ZTEma2V5Mj12YWx1ZTIgYWZ0ZXIgdGhlIHVybC4gSWYgdGhlIHZhbHVlIGlzIG5vdCBhIHN0cmluZywgaXQgd2lsbCBiZVxuICAgKiAgIEpTT05pZmllZC5cbiAgICogQHJldHVybiB7P09iamVjdH0gVGhlIGNhY2hlZCBkYXRhIG9yIG51bGwgaWYgbm8gY2FjaGVkIGRhdGEgZXhpc3RzIGZvciB0aGlzIHJlcXVlc3QuXG4gICAqL1xuICBnZXRDYWNoZURhdGEodXJsOiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IGFueSB7XG4gICAgbGV0IGNhY2hlS2V5ID0gdGhpcy5nZXRDYWNoZUtleSh1cmwsIHBhcmFtcyk7XG4gICAgbGV0IGNhY2hlRW50cnkgPSB0aGlzLmNhY2hlZERhdGFbY2FjaGVLZXldO1xuXG4gICAgaWYgKGNhY2hlRW50cnkpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmxvZygnQ2FjaGUgaGl0IGZvciBrZXk6IFwiJyArIGNhY2hlS2V5ICsgJ1wiJyk7XG4gICAgICByZXR1cm4gY2FjaGVFbnRyeS5kYXRhO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGNhY2hlZCBkYXRhIGRhdGUgKGlmIHBvc3NpYmxlKSBmb3IgdGhlIHNwZWNpZmllZCByZXF1ZXN0LlxuICAgKiBAcGFyYW0geyFzdHJpbmd9IHVybCBVUkwgb2YgdGhlIFJFU1Qgc2VydmljZSBjYWxsLlxuICAgKiBAcGFyYW0gez9tYXA9fSBwYXJhbXMgTWFwIG9mIHN0cmluZ3Mgb3Igb2JqZWN0cyB3aGljaCB3aWxsIGJlIHR1cm5lZCB0byA/a2V5MT12YWx1ZTEma2V5Mj12YWx1ZTIgYWZ0ZXIgdGhlIHVybC4gSWYgdGhlIHZhbHVlIGlzIG5vdCBhIHN0cmluZywgaXQgd2lsbCBiZVxuICAgKiAgIEpTT05pZmllZC5cbiAgICogQHJldHVybiB7P09iamVjdH0gVGhlIGNhY2hlZCBkYXRhIGRhdGUgb3IgbnVsbCBpZiBubyBjYWNoZWQgZGF0YSBleGlzdHMgZm9yIHRoaXMgcmVxdWVzdC5cbiAgICovXG4gIGdldENhY2hlRGF0ZSh1cmw6IHN0cmluZywgcGFyYW1zPzogYW55KTogRGF0ZSB7XG4gICAgbGV0IGNhY2hlS2V5ID0gdGhpcy5nZXRDYWNoZUtleSh1cmwsIHBhcmFtcyk7XG4gICAgbGV0IGNhY2hlRW50cnkgPSB0aGlzLmNhY2hlZERhdGFbY2FjaGVLZXldO1xuICAgIHJldHVybiBjYWNoZUVudHJ5ID8gY2FjaGVFbnRyeS5kYXRlIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIGNhY2hlZCBkYXRhIChpZiBleGlzdHMpIGZvciB0aGUgc3BlY2lmaWVkIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7IXN0cmluZ30gdXJsIFVSTCBvZiB0aGUgUkVTVCBzZXJ2aWNlIGNhbGwuXG4gICAqIEBwYXJhbSB7P21hcD19IHBhcmFtcyBNYXAgb2Ygc3RyaW5ncyBvciBvYmplY3RzIHdoaWNoIHdpbGwgYmUgdHVybmVkIHRvID9rZXkxPXZhbHVlMSZrZXkyPXZhbHVlMiBhZnRlciB0aGUgdXJsLiBJZiB0aGUgdmFsdWUgaXMgbm90IGEgc3RyaW5nLCBpdCB3aWxsIGJlXG4gICAqICAgSlNPTmlmaWVkLlxuICAgKi9cbiAgY2xlYXJDYWNoZURhdGEodXJsOiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IHZvaWQge1xuICAgIGxldCBjYWNoZUtleSA9IHRoaXMuZ2V0Q2FjaGVLZXkodXJsLCBwYXJhbXMpO1xuICAgIHRoaXMuY2FjaGVkRGF0YVtjYWNoZUtleV0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2dnZXIubG9nKCdDYWNoZSBjbGVhcmVkIGZvciBrZXk6IFwiJyArIGNhY2hlS2V5ICsgJ1wiJyk7XG4gICAgdGhpcy5zYXZlQ2FjaGVEYXRhKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYW5zIGNhY2hlIGVudHJpZXMgb2xkZXIgdGhhbiB0aGUgc3BlY2lmaWVkIGRhdGUuXG4gICAqIEBwYXJhbSB7ZGF0ZT19IGV4cGlyYXRpb25EYXRlIFRoZSBjYWNoZSBleHBpcmF0aW9uIGRhdGUuIElmIG5vIGRhdGUgaXMgc3BlY2lmaWVkLCBhbGwgY2FjaGUgaXMgY2xlYXJlZC5cbiAgICovXG4gIGNsZWFuQ2FjaGUoZXhwaXJhdGlvbkRhdGU/OiBEYXRlKTogdm9pZCB7XG4gICAgaWYgKGV4cGlyYXRpb25EYXRlKSB7XG4gICAgICBhbmd1bGFyLmZvckVhY2godGhpcy5jYWNoZWREYXRhLCAodmFsdWU6IGFueSwga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKGV4cGlyYXRpb25EYXRlID49IHZhbHVlLmRhdGUpIHtcbiAgICAgICAgICB0aGlzLmNhY2hlZERhdGFba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FjaGVkRGF0YSA9IHt9O1xuICAgIH1cbiAgICB0aGlzLnNhdmVDYWNoZURhdGEoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjYWNoZSBwZXJzaXN0ZW5jZS5cbiAgICogTm90ZSB0aGF0IGNoYW5naW5nIHRoZSBjYWNoZSBwZXJzaXN0ZW5jZSB3aWxsIGFsc28gY2xlYXIgdGhlIGNhY2hlIGZyb20gaXRzIHByZXZpb3VzIHN0b3JhZ2UuXG4gICAqIEBwYXJhbSB7J2xvY2FsJ3wnc2Vzc2lvbic9fSBwZXJzaXN0ZW5jZSBIb3cgdGhlIGNhY2hlIHNob3VsZCBiZSBwZXJzaXN0ZWQsIGl0IGNhbiBiZSBlaXRoZXJcbiAgICogICBpbiB0aGUgbG9jYWwgb3Igc2Vzc2lvbiBzdG9yYWdlLCBvciBpZiBubyBwYXJhbWV0ZXJzIGlzIHByb3ZpZGVkIGl0IHdpbGwgYmUgb25seSBpbi1tZW1vcnkgKGRlZmF1bHQpLlxuICAgKi9cbiAgc2V0UGVyc2lzdGVuY2UocGVyc2lzdGVuY2U/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuQ2FjaGUoKTtcbiAgICB0aGlzLnN0b3JhZ2UgPSBwZXJzaXN0ZW5jZSA9PT0gJ2xvY2FsJyB8fCBwZXJzaXN0ZW5jZSA9PT0gJ3Nlc3Npb24nID9cbiAgICAgIHRoaXMuJHdpbmRvd1twZXJzaXN0ZW5jZSArICdTdG9yYWdlJ10gOiBudWxsO1xuXG4gICAgdGhpcy5sb2FkQ2FjaGVEYXRhKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGNhY2hlIGtleSBmb3IgdGhlIHNwZWNpZmllZCB1cmwgYW5kIHBhcmFtZXRlcnMuXG4gICAqIEBwYXJhbSB7IXN0cmluZ30gdXJsIFRoZSByZXF1ZXN0IFVSTC5cbiAgICogQHBhcmFtIHs/bWFwPX0gcGFyYW1zIE1hcCBvZiBzdHJpbmdzIG9yIG9iamVjdHMgd2hpY2ggd2lsbCBiZSB0dXJuZWQgdG8gP2tleTE9dmFsdWUxJmtleTI9dmFsdWUyIGFmdGVyIHRoZSB1cmwuIElmIHRoZSB2YWx1ZSBpcyBub3QgYSBzdHJpbmcsIGl0IHdpbGwgYmVcbiAgICogICBKU09OaWZpZWQuXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGNvcnJlc3BvbmRpbmcgY2FjaGUga2V5LlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRDYWNoZUtleSh1cmw6IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gdXJsICsgKHBhcmFtcyA/IGFuZ3VsYXIudG9Kc29uKHBhcmFtcykgOiAnJyk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZXMgdGhlIGN1cnJlbnQgY2FjaGVkIGRhdGEgaW50byBwZXJzaXN0ZWQgc3RvcmFnZS5cbiAgICovXG4gIHByaXZhdGUgc2F2ZUNhY2hlRGF0YSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdG9yYWdlKSB7XG4gICAgICB0aGlzLnN0b3JhZ2UuY2FjaGVkRGF0YSA9IGFuZ3VsYXIudG9Kc29uKHRoaXMuY2FjaGVkRGF0YSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIGNhY2hlZCBkYXRhIGZyb20gcGVyc2lzdGVkIHN0b3JhZ2UuXG4gICAqL1xuICBwcml2YXRlIGxvYWRDYWNoZURhdGEoKTogdm9pZCB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLnN0b3JhZ2UgPyB0aGlzLnN0b3JhZ2UuY2FjaGVkRGF0YSA6IG51bGw7XG4gICAgdGhpcy5jYWNoZWREYXRhID0gZGF0YSA/IGFuZ3VsYXIuZnJvbUpzb24oZGF0YSkgOiB7fTtcbiAgfVxuXG59XG5cbmFwcC5zZXJ2aWNlKCdjYWNoZVNlcnZpY2UnLCBDYWNoZVNlcnZpY2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9tYWluL2hlbHBlcnMvY2FjaGUvY2FjaGUuc2VydmljZS50cyIsImltcG9ydCBhcHAgZnJvbSAnbWFpbi5tb2R1bGUnO1xuaW1wb3J0IHtJTG9nZ2VyLCBMb2dnZXJTZXJ2aWNlfSBmcm9tICdoZWxwZXJzL2xvZ2dlci9sb2dnZXInO1xuXG4vKipcbiAqIENvbnRleHQgc2VydmljZTogcHJvdmlkZXMgVVJMIGNvbnRleHQgaW5qZWN0aW9uIGJhc2VkIG9uIHNwZWNpZmllZCBjb250ZXh0LlxuICovXG5leHBvcnQgY2xhc3MgQ29udGV4dFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgbG9nZ2VyOiBJTG9nZ2VyO1xuXG4gIGNvbnN0cnVjdG9yKGxvZ2dlcjogTG9nZ2VyU2VydmljZSkge1xuICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyLmdldExvZ2dlcignY29udGV4dFNlcnZpY2UnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmplY3RzIHRoZSBzcGVjaWZpZWQgY29udGV4dCBpbnRvIHRoZSBnaXZlbiBSRVNUIEFQSS5cbiAgICogVGhlIFJFU1QgQVBJIHNob3VsZCBiZSBmb3JtYXR0ZWQgbGlrZSBcIi9hcGkvdXNlcnMvOnVzZXJJZFwiLlxuICAgKiBBbnkgZnJhZ21lbnQgZnJvbSB0aGUgUkVTVCBBUEkgc3RhcnRpbmcgd2l0aCBcIjpcIiB3aWxsIHRoZW4gYmUgcmVwbGFjZWQgYnkgYSBwcm9wZXJ0eSBmcm9tIHRoZSBjb250ZXh0IHdpdGhcbiAgICogdGhlIHNhbWUgbmFtZSwgaS5lLiBmb3IgXCIvYXBpL3VzZXJzLzp1c2VySWRcIiBhbmQgYSBjb250ZXh0IG9iamVjdCBcInsgdXNlcklkOiAxMjMgfVwiLCB0aGUgcmVzdWx0aW5nIFVSTCB3aWxsXG4gICAqIGJlIFwiL2FwaS91c2Vycy8xMjNcIi5cbiAgICogQHBhcmFtIHshc3RyaW5nfSByZXN0QXBpIFRoZSBSRVNUIEFQSSB0byBmaWxsIHdpbGwgY29udGV4dCB2YWx1ZXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIHVzZS5cbiAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgcmVhZHktdG8tdXNlIFJFU1QgQVBJIHRvIGNhbGwuXG4gICAqL1xuICBpbmplY3QocmVzdEFwaTogc3RyaW5nLCBjb250ZXh0PzogYW55KTogc3RyaW5nIHtcbiAgICB0aGlzLmxvZ2dlci5sb2coJ0luamVjdGluZyBjb250ZXh0IGluOiAnICsgcmVzdEFwaSk7XG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIHRocm93ICdpbmplY3Q6IGNvbnRleHQgbXVzdCBiZSBkZWZpbmVkJztcbiAgICB9XG5cbiAgICAvLyBTZWFyY2ggZm9yIGNvbnRleHQgcHJvcGVydGllcyB0byBpbmplY3RcbiAgICBsZXQgcHJvcGVydGllcyA9IHJlc3RBcGkubWF0Y2goLyg6XFx3KykvZyk7XG5cbiAgICBhbmd1bGFyLmZvckVhY2gocHJvcGVydGllcywgKHByb3BlcnR5OiBzdHJpbmcpID0+IHtcbiAgICAgIGxldCBjb250ZXh0VmFyID0gcHJvcGVydHkuc3Vic3RyaW5nKDEpO1xuICAgICAgbGV0IGNvbnRleHRWYWx1ZSA9IGNvbnRleHRbY29udGV4dFZhcl07XG5cbiAgICAgIGlmIChjb250ZXh0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZXh0VmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQoY29udGV4dFZhbHVlKTtcbiAgICAgICAgcmVzdEFwaSA9IHJlc3RBcGkucmVwbGFjZShwcm9wZXJ0eSwgY29udGV4dFZhbHVlKTtcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKCdJbmplY3RlZCAnICsgY29udGV4dFZhbHVlICsgJyBmb3IgJyArIHByb3BlcnR5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93ICdpbmplY3Q6IGNvbnRleHQuJyArIGNvbnRleHRWYXIgKyAnIGV4cGVjdGVkIGJ1dCB1bmRlZmluZWQnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5sb2dnZXIubG9nKCdSZXN1bHRpbmcgUkVTVCBBUEk6ICcgKyByZXN0QXBpKTtcblxuICAgIHJldHVybiByZXN0QXBpO1xuICB9XG5cbn1cblxuYXBwLnNlcnZpY2UoJ2NvbnRleHRTZXJ2aWNlJywgQ29udGV4dFNlcnZpY2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9tYWluL2hlbHBlcnMvY29udGV4dC9jb250ZXh0LnNlcnZpY2UudHMiLCIvKipcbiAqIFByb3ZpZGVzIGEgc2ltcGxlIGxvZ2dpbmcgc3lzdGVtIHdpdGggdGhlIHBvc3NpYmlsaXR5IG9mIHJlZ2lzdGVyaW5nIGxvZyBvYnNlcnZlcnMuXG4gKiBJbiBvcmRlciB0byB0cmFjayB0aGUgc291cmNlIG1vZHVsZSBvZiBtZXNzYWdlIGxvZ3MsXG4gKiBhIGN1c3RvbWl6ZWQgbG9nZ2VyIHNob3VsZCBiZSBpbnN0YW5jaWF0ZWQgdXNpbmcgdGhlIGdldExvZ2dlcigpIG1ldGhvZCBqdXN0IGFmdGVyIGl0cyBpbmplY3Rpb24uXG4gKlxuICogNCBkaWZmZXJlbnQgbG9nIGxldmVscyBhcmUgcHJvdmlkZWQsIHZpYSBjb3JyZXNwb25kaW5nIG1ldGhvZHM6XG4gKiAtIGxvZzogZm9yIGRlYnVnIGluZm9ybWF0aW9uXG4gKiAtIGluZm86IGZvciBpbmZvcm1hdGl2ZSBzdGF0dXMgb2YgdGhlIGFwcGxpY2F0aW9uIChzdWNjZXNzLCAuLi4pXG4gKiAtIHdhcm5pbmc6IGZvciBub24tY3JpdGljYWwgZXJyb3JzIHRoYXQgZG8gbm90IHByZXZlbnQgbm9ybWFsIGFwcGxpY2F0aW9uIGJlaGF2aW9yXG4gKiAtIGVycm9yOiBmb3IgY3JpdGljYWwgZXJyb3JzIHRoYXQgcHJldmVudCBub3JtYWwgYXBwbGljYXRpb24gYmVoYXZpb3JcbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogYW5ndWxhci5tb2R1bGUoJ215U2VydmljZScsIFsnbG9nZ2VyJ10pLmZhY3RvcnkoJ215U2VydmljZScsIGZ1bmN0aW9uIChsb2dnZXIpIHtcbiAqICAgbG9nZ2VyID0gbG9nZ2VyLmdldExvZ2dlcignbXlTZXJ2aWNlJyk7XG4gKiAgIC4uLlxuICogICBsb2dnZXIubG9nKCdzb21ldGhpbmcgaGFwcGVuZWQnKTtcbiAqIH1cbiAqXG4gKiBJZiB5b3Ugd2FudCB0byBkaXNhYmxlIGRlYnVnIGxvZ3MgaW4gcHJvZHVjdGlvbiwgYWRkIHRoaXMgc25pcHBldCB0byB5b3VyIGFwcCBjb25maWd1cmF0aW9uOlxuICogYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbmZpZyhmdW5jdGlvbiAoJHByb3ZpZGUpIHtcbiAqICAgLy8gRGlzYWJsZSBkZWJ1ZyBsb2dzIGluIHByb2R1Y3Rpb24gdmVyc2lvblxuICogICAkcHJvdmlkZS5kZWNvcmF0b3IoJyRsb2cnLCBbJyRkZWxlZ2F0ZScsIGZ1bmN0aW9uKCRkZWxlZ2F0ZSkge1xuICogICAgIGlmICghZGVidWcpIHtcbiAqICAgICAgICRkZWxlZ2F0ZS5sb2cgPSBmdW5jdGlvbigpIHt9O1xuICogICAgIH1cbiAqICAgICByZXR1cm4gJGRlbGVnYXRlO1xuICogICB9XSk7XG4gKiB9KTtcbiAqXG4gKiBJZiB5b3Ugd2FudCBhZGRpdGlvbmFsIHRhc2tzIHRvIGJlIHBlcmZvcm1lZCBvbiBsb2cgZW50cnkgKHNob3cgdG9hc3QsIGZvciBleGFtcGxlKSxcbiAqIHlvdSBjYW4gcmVnaXN0ZXIgb2JzZXJ2ZXJzIHVzaW5nIHRoZSBhZGRPYnNlcnZlcigpIG1ldGhvZC5cbiAqL1xuXG5pbXBvcnQgYXBwIGZyb20gJ21haW4ubW9kdWxlJztcblxubGV0IG9ic2VydmVyczogQXJyYXk8RnVuY3Rpb24+ID0gW107XG5cbi8qKlxuICogTG9ncyBhIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHNvdXJjZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGJlIGxvZ2dlZC5cbiAqIEBwYXJhbSB7P3N0cmluZz19IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBsb2cuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBsb2dGdW5jIFRoZSBiYXNlIGxvZyBmdW5jdGlvbiB0byB1c2UuXG4gKiBAcGFyYW0geydsb2cnfCdpbmZvJ3wnd2FybmluZyd8J2Vycm9yJ30gbGV2ZWwgVGhlIGxvZyBsZXZlbC5cbiAqIEBwYXJhbSB7T2JqZWN0P30gb3B0aW9ucyBBZGRpdGlvbmFsIGxvZyBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBsb2cobWVzc2FnZTogc3RyaW5nLCBzb3VyY2U6IHN0cmluZywgbG9nRnVuYzogRnVuY3Rpb24sIGxldmVsOiBzdHJpbmcsIG9wdGlvbnM6IGFueSk6IHZvaWQge1xuICBsb2dGdW5jKHNvdXJjZSA/ICdbJyArIHNvdXJjZSArICddJyA6ICcnLCBtZXNzYWdlLCAnJyk7XG4gIGFuZ3VsYXIuZm9yRWFjaChvYnNlcnZlcnMsIChvYnNlcnZlckZ1bmM6IGFueSkgPT4ge1xuICAgIG9ic2VydmVyRnVuYyhtZXNzYWdlLCBzb3VyY2UsIGxldmVsLCBvcHRpb25zKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxvZ2dlciB7XG5cbiAgLyoqXG4gICAqIExvZ3MgYSBtZXNzYWdlIHdpdGggdGhlIGxvZyBsZXZlbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gYmUgbG9nZ2VkLlxuICAgKiBAcGFyYW0ge09iamVjdD99IG9wdGlvbnMgQWRkaXRpb25hbCBsb2cgb3B0aW9ucy5cbiAgICovXG4gIGxvZyhtZXNzYWdlOiBzdHJpbmcsIG9wdGlvbnM/OiBPYmplY3QpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBMb2dzIGEgbWVzc2FnZSB3aXRoIHRoZSBpbmZvIGxldmVsLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBiZSBsb2dnZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0P30gb3B0aW9ucyBBZGRpdGlvbmFsIGxvZyBvcHRpb25zLlxuICAgKi9cblxuICBpbmZvKG1lc3NhZ2U6IHN0cmluZywgb3B0aW9ucz86IE9iamVjdCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIExvZ3MgYSBtZXNzYWdlIHdpdGggdGhlIHdhcm5pbmcgbGV2ZWwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGJlIGxvZ2dlZC5cbiAgICogQHBhcmFtIHtPYmplY3Q/fSBvcHRpb25zIEFkZGl0aW9uYWwgbG9nIG9wdGlvbnMuXG4gICAqL1xuICB3YXJuaW5nKG1lc3NhZ2U6IHN0cmluZywgb3B0aW9ucz86IE9iamVjdCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIExvZ3MgYSBtZXNzYWdlIHdpdGggdGhlIGVycm9yIGxldmVsLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBiZSBsb2dnZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0P30gb3B0aW9ucyBBZGRpdGlvbmFsIGxvZyBvcHRpb25zLlxuICAgKi9cbiAgZXJyb3IobWVzc2FnZTogc3RyaW5nLCBvcHRpb25zPzogT2JqZWN0KTogdm9pZDtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZlckZ1bmN0aW9uIHtcbiAgKG1lc3NhZ2U6IHN0cmluZywgc291cmNlOiBzdHJpbmcsIGxldmVsOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiB2b2lkO1xufVxuXG5jbGFzcyBMb2dnZXIgaW1wbGVtZW50cyBJTG9nZ2VyIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlICRsb2c6IG5nLklMb2dTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIG1vZHVsZU5hbWU6IHN0cmluZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBsb2dGdW5jOiBhbnkpIHt9XG5cbiAgbG9nKG1lc3NhZ2U6IHN0cmluZywgb3B0aW9uczogYW55KTogdm9pZCB7XG4gICAgdGhpcy5sb2dGdW5jKG1lc3NhZ2UsIHRoaXMubW9kdWxlTmFtZSwgdGhpcy4kbG9nLmxvZywgJ2xvZycsIG9wdGlvbnMpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlOiBzdHJpbmcsIG9wdGlvbnM6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubG9nRnVuYyhtZXNzYWdlLCB0aGlzLm1vZHVsZU5hbWUsIHRoaXMuJGxvZy5pbmZvLCAnaW5mbycsIG9wdGlvbnMpO1xuICB9XG5cbiAgd2FybmluZyhtZXNzYWdlOiBzdHJpbmcsIG9wdGlvbnM6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubG9nRnVuYyhtZXNzYWdlLCB0aGlzLm1vZHVsZU5hbWUsIHRoaXMuJGxvZy53YXJuLCAnd2FybmluZycsIG9wdGlvbnMpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZTogc3RyaW5nLCBvcHRpb25zOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ0Z1bmMobWVzc2FnZSwgdGhpcy5tb2R1bGVOYW1lLCB0aGlzLiRsb2cuZXJyb3IsICdlcnJvcicsIG9wdGlvbnMpO1xuICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIExvZ2dlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgJGxvZzogbmcuSUxvZ1NlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBjdXN0b21pemVkIGxvZ2dlciBiYXNlZCBvbiB0aGUgZ2l2ZW4gbW9kdWxlIG5hbWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGVOYW1lIFRoZSBtb2R1bGUgbmFtZS5cbiAgICogQHJldHVybiB7TG9nZ2VyfSBBIGxvZ2dlciBvYmplY3QuXG4gICAqL1xuICBnZXRMb2dnZXIobW9kdWxlTmFtZTogc3RyaW5nKTogSUxvZ2dlciB7XG4gICAgcmV0dXJuIG5ldyBMb2dnZXIodGhpcy4kbG9nLCBtb2R1bGVOYW1lLCBsb2cpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBuZXcgb2JzZXJ2ZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaCBuZXcgbG9nIGVudHJ5LlxuICAgKiBUaGVzZSBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQgdG8gdGhlIG9ic2VydmVyIGZ1bmN0aW9uLCBpbiBvcmRlcjpcbiAgICogLSBtZXNzYWdlIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gYmUgbG9nZ2VkLlxuICAgKiAtIHNvdXJjZSB7P3N0cmluZz19IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBsb2cuXG4gICAqIC0gbGV2ZWwgeydsb2cnfCdpbmZvJ3wnd2FybmluZyd8J2Vycm9yJ30gbGV2ZWwgVGhlIGxvZyBsZXZlbC5cbiAgICogLSBvcHRpb25zIHtPYmplY3Q/fSBvcHRpb25zIEFkZGl0aW9uYWwgbG9nIG9wdGlvbnMuXG4gICAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBvYnNlcnZlckZ1bmMgVGhlIG9ic2VydmVyIGZ1bmN0aW9uLlxuICAgKi9cbiAgYWRkT2JzZXJ2ZXIob2JzZXJ2ZXJGdW5jOiBJT2JzZXJ2ZXJGdW5jdGlvbik6IHZvaWQge1xuICAgIG9ic2VydmVycy5wdXNoKG9ic2VydmVyRnVuYyk7XG4gIH1cblxufVxuXG5hcHAuc2VydmljZSgnbG9nZ2VyJywgTG9nZ2VyU2VydmljZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL21haW4vaGVscGVycy9sb2dnZXIvbG9nZ2VyLnRzIiwiaW1wb3J0IGFwcCBmcm9tICdtYWluLm1vZHVsZSc7XG5pbXBvcnQge0NhY2hlU2VydmljZX0gZnJvbSAnaGVscGVycy9jYWNoZS9jYWNoZS5zZXJ2aWNlJztcbmltcG9ydCB7SUxvZ2dlciwgTG9nZ2VyU2VydmljZX0gZnJvbSAnaGVscGVycy9sb2dnZXIvbG9nZ2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBJU2VydmVyQ29uZmlnIHtcbiAgdXJsOiBzdHJpbmc7XG4gIHJvdXRlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhY2hlSGFuZGxlckZ1bmN0aW9uIHtcbiAgKGNhY2hlZERhdGE6IGFueSk6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUmVxdWVzdEJ1aWxkZXJGdW5jdGlvbiB7XG4gIChvcHRpb25zPzogYW55KTogbmcuSVByb21pc2U8YW55Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUmVxdWVzdEhhbmRsZXJGdW5jdGlvbiB7XG4gIChyZXF1ZXN0QnVpbGRlcjogSVJlcXVlc3RCdWlsZGVyRnVuY3Rpb24sIG9wdGlvbnM/OiBhbnkpOiBuZy5JUHJvbWlzZTxhbnk+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElFcnJvckhhbmRsZXJGdW5jdGlvbiB7XG4gIChwcm9taXNlOiBuZy5JUHJvbWlzZTxhbnk+LCBvcHRpb25zPzogYW55KTogbmcuSVByb21pc2U8YW55Pjtcbn1cblxuLyoqXG4gKiBSRVNUIHNlcnZpY2U6IHByb3ZpZGVzIG1ldGhvZHMgdG8gcGVyZm9ybSBSRVNUIHJlcXVlc3RzLlxuICovXG5leHBvcnQgY2xhc3MgUmVzdFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgc2VydmVyOiBJU2VydmVyQ29uZmlnID0gbnVsbDtcbiAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnOiBuZy5JUmVxdWVzdFNob3J0Y3V0Q29uZmlnID0ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6ICdjb250ZW50LXR5cGUnXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0cyBjYWNoZSBoYW5kbGVyLlxuICAgKiBUaGlzIGhhbmRsZXIganVzdCByZXR1cm4gdGhlIHNwZWNpZmllZCBjYWNoZSBkYXRhIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICovXG4gIHByaXZhdGUgY2FjaGVIYW5kbGVyOiBJQ2FjaGVIYW5kbGVyRnVuY3Rpb24gPSBhbmd1bGFyLmlkZW50aXR5O1xuICBwcml2YXRlIGxvZ2dlcjogSUxvZ2dlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlICRxOiBuZy5JUVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgJGh0dHA6IG5nLklIdHRwU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjYWNoZVNlcnZpY2U6IENhY2hlU2VydmljZSxcbiAgICAgICAgICAgICAgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlci5nZXRMb2dnZXIoJ3Jlc3RTZXJ2aWNlJyk7XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgYSBHRVQgcmVxdWVzdC5cbiAgICogQHBhcmFtIHshU3RyaW5nfSB1cmwgVVJMIG9mIHRoZSBSRVNUIHNlcnZpY2UgY2FsbC5cbiAgICogQHBhcmFtIHs/T2JqZWN0LjxzdHJpbmd8T2JqZWN0Pj19IHBhcmFtcyBNYXAgb2Ygc3RyaW5ncyBvciBvYmplY3RzIHdoaWNoIHdpbGwgYmUgdHVybmVkIHRvID9rZXkxPXZhbHVlMSZrZXkyPXZhbHVlMiBhZnRlciB0aGUgdXJsLiBJZiB0aGUgdmFsdWUgaXMgbm90IGEgc3RyaW5nLCBpdCB3aWxsIGJlXG4gICAqICAgSlNPTmlmaWVkLlxuICAgKiBAcGFyYW0gez9ib29sZWFufCdmb3JjZSd9IGNhY2hlIElmIHNldCB0byB0cnVlLCB0aGUgZmlyc3QgcmVxdWVzdCB3aWxsIGJlIGNhY2hlZCwgYW5kIG5leHQgcmVxdWVzdCB3aXRoIGNhY2hlIHNldCB0byB0cnVlIHdpbGwgdXNlIHRoZSBjYWNoZWQgcmVzcG9uc2UuXG4gICAqICAgSWYgc2V0IHRvICdmb3JjZScsIHRoZSByZXF1ZXN0IHdpbGwgYWx3YXlzIGJlIG1hZGUgYW5kIGNhY2hlIHdpbGwgYmUgdXBkYXRlZC5cbiAgICogICBJZiBzZXQgdG8gZmFsc2Ugb3Igb21pdHRlZCwgbm8gY2FjaGUgd2lsbCBiZSBzZXQgb3IgdXNlZC5cbiAgICogQHBhcmFtIHs/T2JqZWN0PX0gb3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHJlcXVlc3QvZXJyb3IgaGFuZGxlcnMuXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGhlIHByb21pc2UuXG4gICAqL1xuICBnZXQodXJsOiBzdHJpbmcsIHBhcmFtcz86IGFueSwgY2FjaGU/OiBib29sZWFufHN0cmluZywgb3B0aW9ucz86IGFueSk6IG5nLklQcm9taXNlPGFueT4ge1xuICAgIGxldCBhcGlVcmwgPSB0aGlzLmJhc2VVcmwgKyB1cmw7XG4gICAgbGV0IHByb21pc2VCdWlsZGVyID0gKCkgPT4gdGhpcy4kaHR0cC5nZXQoYXBpVXJsLCB7cGFyYW1zOiBwYXJhbXN9KTtcblxuICAgIGlmICghY2FjaGUpIHtcbiAgICAgIC8vIERvIG5vdCB1c2UgY2FjaGVcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlcXVlc3QocHJvbWlzZUJ1aWxkZXIsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY2FjaGVkRGF0YSA9IGNhY2hlID09PSAnZm9yY2UnID8gbnVsbCA6IHRoaXMuY2FjaGVTZXJ2aWNlLmdldENhY2hlRGF0YSh1cmwsIHBhcmFtcyk7XG5cbiAgICAgIGlmIChjYWNoZWREYXRhICE9PSBudWxsKSB7XG4gICAgICAgIGNhY2hlZERhdGEgPSB0aGlzLmNhY2hlSGFuZGxlcihjYWNoZWREYXRhKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhY2hlZERhdGEgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKCdHRVQgcmVxdWVzdDogJyArIHVybCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIGNhY2hlIGVudHJ5XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlcXVlc3QocHJvbWlzZUJ1aWxkZXIsIG9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmNhY2hlU2VydmljZS5zZXRDYWNoZURhdGEodXJsLCBwYXJhbXMsIHJlc3BvbnNlLCBudWxsKTtcbiAgICAgICAgICByZXR1cm4gYW5ndWxhci5jb3B5KHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBVc2UgY2FjaGVkIHZlcnNpb25cbiAgICAgICAgbGV0IGRlZmVycmVkID0gdGhpcy4kcS5kZWZlcigpO1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGFuZ3VsYXIuY29weShjYWNoZWREYXRhKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JIYW5kbGVyKGRlZmVycmVkLnByb21pc2UsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyBhIFBVVCByZXF1ZXN0LlxuICAgKiBAcGFyYW0geyFTdHJpbmd9IHVybCBVUkwgb2YgdGhlIFJFU1Qgc2VydmljZSBjYWxsLlxuICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGRhdGEgRGF0YSB0byBiZSBzZW50IGFzIHRoZSByZXF1ZXN0IG1lc3NhZ2UgZGF0YS5cbiAgICogQHBhcmFtIHs/T2JqZWN0PX0gb3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHJlcXVlc3QvZXJyb3IgaGFuZGxlcnMuXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGhlIHByb21pc2UuXG4gICAqL1xuICBwdXQodXJsOiBzdHJpbmcsIGRhdGE6IGFueSwgb3B0aW9ucz86IGFueSk6IG5nLklQcm9taXNlPGFueT4ge1xuICAgIHRoaXMubG9nZ2VyLmxvZygnUFVUIHJlcXVlc3Q6ICcgKyB1cmwsIG51bGwpO1xuICAgIGxldCBwcm9taXNlID0gKCkgPT4gdGhpcy4kaHR0cC5wdXQodGhpcy5iYXNlVXJsICsgdXJsLCBkYXRhLCB0aGlzLmRlZmF1bHRDb25maWcpO1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlcXVlc3QocHJvbWlzZSwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgYSBQT1NUIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7IVN0cmluZ30gdXJsIFVSTCBvZiB0aGUgUkVTVCBzZXJ2aWNlIGNhbGwuXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZGF0YSBEYXRhIHRvIGJlIHNlbnQgYXMgdGhlIHJlcXVlc3QgbWVzc2FnZSBkYXRhLlxuICAgKiBAcGFyYW0gez9PYmplY3Q9fSBvcHRpb25zIEFkZGl0aW9uYWwgb3B0aW9ucyBmb3IgcmVxdWVzdC9lcnJvciBoYW5kbGVycy5cbiAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgcHJvbWlzZS5cbiAgICovXG4gIHBvc3QodXJsOiBzdHJpbmcsIGRhdGE6IGFueSwgb3B0aW9ucz86IGFueSk6IG5nLklQcm9taXNlPGFueT4ge1xuICAgIHRoaXMubG9nZ2VyLmxvZygnUE9TVCByZXF1ZXN0OiAnICsgdXJsLCBudWxsKTtcbiAgICBsZXQgcHJvbWlzZUJ1aWxkZXIgPSAoKSA9PiB0aGlzLiRodHRwLnBvc3QodGhpcy5iYXNlVXJsICsgdXJsLCBkYXRhLCB0aGlzLmRlZmF1bHRDb25maWcpO1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlcXVlc3QocHJvbWlzZUJ1aWxkZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIGEgREVMRVRFIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7IVN0cmluZ30gdXJsIFVSTCBvZiB0aGUgUkVTVCBzZXJ2aWNlIGNhbGwuXG4gICAqIEBwYXJhbSB7P09iamVjdD19IG9wdGlvbnMgQWRkaXRpb25hbCBvcHRpb25zIGZvciByZXF1ZXN0L2Vycm9yIGhhbmRsZXJzLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBwcm9taXNlLlxuICAgKi9cbiAgZGVsZXRlKHVybDogc3RyaW5nLCBvcHRpb25zPzogYW55KTogbmcuSVByb21pc2U8YW55PiB7XG4gICAgdGhpcy5sb2dnZXIubG9nKCdERUxFVEUgcmVxdWVzdDogJyArIHVybCwgbnVsbCk7XG4gICAgbGV0IHByb21pc2UgPSAoKSA9PiB0aGlzLiRodHRwLmRlbGV0ZSh0aGlzLmJhc2VVcmwgKyB1cmwsIHRoaXMuZGVmYXVsdENvbmZpZyk7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVxdWVzdChwcm9taXNlLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjdXJyZW50IHNlcnZlciBjb25maWd1cmF0aW9uLlxuICAgKiBBIHNlcnZlciBwYXJhbWV0ZXIgbXVzdCBjb250YWlucyBhdCBsZWFzdCB0aGVzZSB0d28gc3RyaW5nczpcbiAgICogLSB1cmw6IFRoZSBiYXNlIFVSTCBvZiB0aGUgc2VydmVyXG4gICAqIC0gcm91dGU6IFRoZSBiYXNlIHJvdXRlIG9mIHRoZSBSRVNUIEFQSVxuICAgKiBAcGFyYW0geyFPYmplY3R9IHNlcnZlciBUaGUgc2VydmVyIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBzZXRTZXJ2ZXIoc2VydmVyOiBJU2VydmVyQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2ZXIgPSBzZXJ2ZXI7XG4gICAgdGhpcy5iYXNlVXJsID0gc2VydmVyLnVybCArIHNlcnZlci5yb3V0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHNlcnZlciBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBzZXJ2ZXIgYmFzZSBVUkwuXG4gICAqL1xuICBnZXRTZXJ2ZXIoKTogSVNlcnZlckNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGJhc2UgVVJJLlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBjb21wdXRlZCBiYXNlIFVSSS5cbiAgICovXG4gIGdldEJhc2VVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5iYXNlVXJsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBjdXN0b21pemVkIHJlcXVlc3QgaGFuZGxlciBmdW5jdGlvbiBmb3IgYWxsIHJlcXVlc3RzLlxuICAgKiBUaGUgZnVuY3Rpb24gc2hvdWxkIGhhdmUgdGhlIGZvbGxvd2luZyBzaWduYXR1cmUsIGFuZCByZXR1cm4gYSBwcm9taXNlOlxuICAgKiBmdW5jdGlvbiByZXF1ZXN0SGFuZGxlcihyZXF1ZXN0QnVpbGRlciwgb3B0aW9ucykge1xuICAgKiAgIHJldHVybiByZXF1ZXN0QnVpbGRlcigpO1xuICAgKiB9XG4gICAqIFRoZSByZXF1ZXN0QnVpbGRlciBwYXJhbWV0ZXIgaXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHJlcXVlc3QgcHJvbWlzZS5cbiAgICogVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9wdGlvbmFsIG9iamVjdCBjb250YWluaW5nIHdoYXRldmVyIG9wdGlvbnMgeW91ciBoYW5kbGVyIG1heSBuZWVkcy5cbiAgICogQHBhcmFtIHshZnVuY3Rpb259IHJlcXVlc3RIYW5kbGVyRnVuYyBUaGUgcmVxdWVzdCBoYW5kbGVyLlxuICAgKi9cbiAgc2V0UmVxdWVzdEhhbmRsZXIocmVxdWVzdEhhbmRsZXJGdW5jOiBJUmVxdWVzdEhhbmRsZXJGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMucmVxdWVzdEhhbmRsZXIgPSByZXF1ZXN0SGFuZGxlckZ1bmM7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCByZXF1ZXN0IGhhbmRsZXIgZnVuY3Rpb24uXG4gICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBUaGUgcmVxdWVzdCBoYW5kbGVyLlxuICAgKi9cbiAgZ2V0UmVxdWVzdEhhbmRsZXIoKTogSVJlcXVlc3RIYW5kbGVyRnVuY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3RIYW5kbGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBjdXN0b21pemVkIGRlZmF1bHQgZXJyb3IgaGFuZGxlciBmdW5jdGlvbiBmb3IgYWxsIHJlcXVlc3RzLlxuICAgKiBUaGUgZnVuY3Rpb24gc2hvdWxkIGhhdmUgdGhlIGZvbGxvd2luZyBzaWduYXR1cmUsIGFuZCByZXR1cm4gYSBwcm9taXNlOlxuICAgKiBmdW5jdGlvbiBlcnJvckhhbmRsZXIocHJvbWlzZSwgb3B0aW9ucykge1xuICAgKiAgIHJldHVybiBwcm9taXNlLmNhdGNoKHJlc3BvbnNlLCBmdW5jdGlvbigpIHtcbiAgICogICAgICAuLi5cbiAgICogICAgICByZXR1cm4gJHEucmVqZWN0KHJlc3BvbnNlKTtcbiAgICogICB9KTtcbiAgICogfVxuICAgKiBUaGUgcHJvbWlzZSBwYXJhbWV0ZXIgaXMgdGhlIHJlcXVlc3QgcHJvbWlzZS5cbiAgICogVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9wdGlvbmFsIG9iamVjdCBjb250YWluaW5nIHdoYXRldmVyIG9wdGlvbnMgeW91ciBoYW5kbGVyIG1heSBuZWVkcy5cbiAgICogQHBhcmFtIHshZnVuY3Rpb259IGVycm9ySGFuZGxlckZ1bmMgVGhlIGVycm9yIGhhbmRsZXIuXG4gICAqL1xuICBzZXRFcnJvckhhbmRsZXIoZXJyb3JIYW5kbGVyRnVuYzogSUVycm9ySGFuZGxlckZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5lcnJvckhhbmRsZXIgPSBlcnJvckhhbmRsZXJGdW5jO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgZXJyb3IgaGFuZGxlciBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSBlcnJvciBoYW5kbGVyLlxuICAgKi9cbiAgZ2V0RXJyb3JIYW5kbGVyKCk6IElFcnJvckhhbmRsZXJGdW5jdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JIYW5kbGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBjdXN0b21pemVkIGRlZmF1bHQgY2FjaGUgaGFuZGxlciBmdW5jdGlvbiBmb3IgYWxsIGNhY2hlZCByZXF1ZXN0cy5cbiAgICogVGhlIGZ1bmN0aW9uIHNob3VsZCBoYXZlIHRoZSBmb2xsb3dpbmcgc2lnbmF0dXJlLCBhbmQgcmV0dXJuIGFuIG9iamVjdDpcbiAgICogZnVuY3Rpb24gY2FjaGVIYW5kbGVyKGNhY2hlZERhdGEpIHtcbiAgICogICAgcmV0dXJuIGlzVmFsaWQoY2FjaGVkRGF0YSkgPyBjYWNoZWREYXRhIDogbnVsbDtcbiAgICogfVxuICAgKiBUaGlzIGhhbmRsZXIgaXMgb25seSBjYWxsZWQgYmVmb3JlIGZvciByZXF1ZXN0cyB0aGF0IHdvdWxkIHJldHVybiBjYWNoZWQgZGF0YSBvdGhlcndpc2UuXG4gICAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBjYWNoZUhhbmRsZXJGdW5jIFRoZSBjYWNoZSBoYW5kbGVyLlxuICAgKi9cbiAgc2V0Q2FjaGVIYW5kbGVyKGNhY2hlSGFuZGxlckZ1bmM6IElDYWNoZUhhbmRsZXJGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMuY2FjaGVIYW5kbGVyID0gY2FjaGVIYW5kbGVyRnVuYztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjdXJyZW50IGNhY2hlIGhhbmRsZXIgZnVuY3Rpb24uXG4gICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBUaGUgY2FjaGUgaGFuZGxlci5cbiAgICovXG4gIGdldENhY2hlSGFuZGxlcigpOiBJQ2FjaGVIYW5kbGVyRnVuY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLmNhY2hlSGFuZGxlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHJlcXVlc3QgaGFuZGxlciwgdGhhdCBqdXN0IGJ1aWxkcyB0aGUgcHJvbWlzZS5cbiAgICogQHBhcmFtIHshZnVuY3Rpb259IHJlcXVlc3RCdWlsZGVyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm4gdGhlIHJlcXVlc3QncyBwcm9taXNlLlxuICAgKiBAcGFyYW0gez9PYmplY3Q9fSBvcHRpb25zIE9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcmVxdWVzdCBidWlsZGVyIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBwcm9taXNlLlxuICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAqL1xuICBwcml2YXRlIHJlcXVlc3RIYW5kbGVyKHJlcXVlc3RCdWlsZGVyOiBJUmVxdWVzdEJ1aWxkZXJGdW5jdGlvbiwgb3B0aW9ucz86IGFueSk6IG5nLklQcm9taXNlPGFueT4ge1xuICAgIC8vIERlZmF1bHQgcmVxdWVzdCBoYW5kbGVyIGp1c3QgYnVpbGRzIHRoZSByZXF1ZXN0XG4gICAgcmV0dXJuIHJlcXVlc3RCdWlsZGVyKG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgZXJyb3IgaGFuZGxlci5cbiAgICogVGhpcyBoYW5kbGVyIHRyaWVzIHRvIGV4dHJhY3QgYSBkZXNjcmlwdGlvbiBvZiB0aGUgZXJyb3IgYW5kIGxvZ3MgYW5kIGVycm9yIHdpdGggaXQuXG4gICAqIEBwYXJhbSB7IU9iamVjdH0gcHJvbWlzZSBUaGUgcHJvbWlzZSB0byBoYW5kbGUgZXJyb3JzLlxuICAgKiBAcGFyYW0gez9PYmplY3Q9fSBvcHRpb25zIEFkZGl0aW9uYWwgb3B0aW9uczogaWYgJ3NraXBFcnJvcnMnIHByb3BlcnR5IGlzIHNldCB0byB0cnVlLCBlcnJvcnMgd2lsbCBub3QgYmUgaGFuZGxlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgcHJvbWlzZS5cbiAgICovXG4gIHByaXZhdGUgZXJyb3JIYW5kbGVyKHByb21pc2U6IG5nLklQcm9taXNlPGFueT4sIG9wdGlvbnM/OiBhbnkpOiBuZy5JUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMuc2tpcEVycm9ycykge1xuICAgICAgcHJvbWlzZS5jYXRjaCgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBsZXQgZXJyb3I7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgZXJyb3IgPSAnU2VydmVyIHVuYXZhaWxhYmxlIG9yIFVSTCBkb2VzIG5vdCBleGlzdCc7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgIGxldCBtZXNzYWdlID0gcmVzcG9uc2UuZGF0YS5tZXNzYWdlID8gcmVzcG9uc2UuZGF0YS5tZXNzYWdlIDogbnVsbDtcbiAgICAgICAgICBsZXQgY29kZSA9IHJlc3BvbnNlLmRhdGEuZXJyb3IgPyByZXNwb25zZS5kYXRhLmVycm9yIDogbnVsbDtcbiAgICAgICAgICBlcnJvciA9IG1lc3NhZ2UgfHwgY29kZSB8fCBhbmd1bGFyLnRvSnNvbihyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yLCBudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLiRxLnJlamVjdChyZXNwb25zZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgcmVxdWVzdC5cbiAgICogQHBhcmFtIHshZnVuY3Rpb259IHJlcXVlc3RCdWlsZGVyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm4gdGhlIHJlcXVlc3QncyBwcm9taXNlLlxuICAgKiBAcGFyYW0gez9PYmplY3Q9fSBvcHRpb25zIEFkZGl0aW9uYWwgb3B0aW9ucyBmb3IgcmVxdWVzdC9lcnJvciBoYW5kbGVycy5cbiAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgcHJvbWlzZS5cbiAgICovXG4gIHByaXZhdGUgY3JlYXRlUmVxdWVzdChyZXF1ZXN0QnVpbGRlcjogSVJlcXVlc3RCdWlsZGVyRnVuY3Rpb24sIG9wdGlvbnM/OiBhbnkpOiBuZy5JUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5lcnJvckhhbmRsZXIodGhpcy5yZXF1ZXN0SGFuZGxlcihyZXF1ZXN0QnVpbGRlciwgb3B0aW9ucyksIG9wdGlvbnMpO1xuICB9XG59XG5cbmFwcC5zZXJ2aWNlKCdyZXN0U2VydmljZScsIFJlc3RTZXJ2aWNlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvbWFpbi9oZWxwZXJzL3Jlc3QvcmVzdC5zZXJ2aWNlLnRzIiwiaW1wb3J0IGFwcCBmcm9tICdtYWluLm1vZHVsZSc7XG5pbXBvcnQge0lBcHBsaWNhdGlvbkNvbmZpZ30gZnJvbSAnbWFpbi5jb25zdGFudHMnO1xuaW1wb3J0IHtJTG9nZ2VyLCBMb2dnZXJTZXJ2aWNlfSBmcm9tICdoZWxwZXJzL2xvZ2dlci9sb2dnZXInO1xuXG4vKipcbiAqIERpc3BsYXlzIHRoZSBhYm91dCBzY3JlZW4uXG4gKi9cbmV4cG9ydCBjbGFzcyBBYm91dENvbnRyb2xsZXIge1xuXG4gIHZlcnNpb246IHN0cmluZztcblxuICBwcml2YXRlIGxvZ2dlcjogSUxvZ2dlcjtcblxuICBjb25zdHJ1Y3Rvcihsb2dnZXI6IExvZ2dlclNlcnZpY2UsXG4gICAgICAgICAgICAgIGNvbmZpZzogSUFwcGxpY2F0aW9uQ29uZmlnKSB7XG5cbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlci5nZXRMb2dnZXIoJ2Fib3V0Jyk7XG4gICAgdGhpcy52ZXJzaW9uID0gY29uZmlnLnZlcnNpb247XG5cbiAgICB0aGlzLmxvZ2dlci5sb2coJ2luaXQnKTtcbiAgfVxuXG59XG5cbmFwcC5jb250cm9sbGVyKCdhYm91dENvbnRyb2xsZXInLCBBYm91dENvbnRyb2xsZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9tYWluL3NjcmVlbnMvYWJvdXQvYWJvdXQuY29udHJvbGxlci50cyIsImltcG9ydCBhcHAgZnJvbSAnbWFpbi5tb2R1bGUnO1xuaW1wb3J0IHtJTG9nZ2VyLCBMb2dnZXJTZXJ2aWNlfSBmcm9tICdoZWxwZXJzL2xvZ2dlci9sb2dnZXInO1xuaW1wb3J0IHtRdW90ZVNlcnZpY2V9IGZyb20gJ3dlYi1zZXJ2aWNlcy9xdW90ZS9xdW90ZS5zZXJ2aWNlJztcblxuLyoqXG4gKiBEaXNwbGF5cyB0aGUgaG9tZSBzY3JlZW4uXG4gKi9cbmV4cG9ydCBjbGFzcyBIb21lQ29udHJvbGxlciB7XG5cbiAgaXNMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgcXVvdGU6IHN0cmluZyA9IG51bGw7XG5cbiAgcHJpdmF0ZSBsb2dnZXI6IElMb2dnZXI7XG4gIHByaXZhdGUgcXVvdGVTZXJ2aWNlOiBRdW90ZVNlcnZpY2U7XG5cbiAgY29uc3RydWN0b3IobG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICBxdW90ZVNlcnZpY2U6IFF1b3RlU2VydmljZSkge1xuXG4gICAgdGhpcy5sb2dnZXIgPSBsb2dnZXIuZ2V0TG9nZ2VyKCdob21lJyk7XG4gICAgdGhpcy5xdW90ZVNlcnZpY2UgPSBxdW90ZVNlcnZpY2U7XG5cbiAgICB0aGlzLmxvZ2dlci5sb2coJ2luaXQnKTtcblxuICAgIHRoaXMucXVvdGVTZXJ2aWNlXG4gICAgICAuZ2V0UmFuZG9tSm9rZSh7Y2F0ZWdvcnk6ICduZXJkeSd9KVxuICAgICAgLnRoZW4oKHF1b3RlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5xdW90ZSA9IHF1b3RlO1xuICAgICAgfSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICB9XG5cbn1cblxuYXBwLmNvbnRyb2xsZXIoJ2hvbWVDb250cm9sbGVyJywgSG9tZUNvbnRyb2xsZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9tYWluL3NjcmVlbnMvaG9tZS9ob21lLmNvbnRyb2xsZXIudHMiLCJpbXBvcnQgYXBwIGZyb20gJ21haW4ubW9kdWxlJztcblxuLyoqXG4gKiBMb2FkaW5nIGRpcmVjdGl2ZTogZGlzcGxheXMgYSBsb2FkaW5nIGluZGljYXRvciB3aGlsZSBkYXRhIGlzIGJlaW5nIGxvYWRlZC5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlOiA8ZGl2IHVpLWxvYWRpbmc9XCJpc0xvYWRpbmdcIj48L2Rpdj5cbiAqIFRoZSBleHBlY3RlZCB2YWx1ZSBvZiB0aGUgZGlyZWN0aXZlIGF0dHJpYnV0ZSBpcyBhIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjb250ZW50XG4gKiBpcyBzdGlsbCBsb2FkaW5nIG9yIG5vdC5cbiAqXG4gKiBBZGRpdGlvbmFsIHBhcmFtZXRlciBhdHRyaWJ1dGVzOlxuICogLSBtZXNzYWdlOiB0aGUgbG9hZGluZyBtZXNzYWdlIHRvIGRpc3BsYXkgKG5vbmUgYnkgZGVmYXVsdClcbiAqXG4gKiBFeGFtcGxlOiA8ZGl2IHVpLWxvYWRpbmc9XCJpc0xvYWRpbmdcIiBtZXNzYWdlPVwiTG9hZGluZy4uLlwiPjwvZGl2PlxuICovXG5leHBvcnQgY2xhc3MgTG9hZGluZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIG5nLklEaXJlY3RpdmUge1xuICByZXN0cmljdCA9ICdBJztcbiAgdGVtcGxhdGUgPSA8c3RyaW5nPnJlcXVpcmUoJ2xvYWRpbmcuaHRtbCcpO1xuICBzY29wZSA9IHtcbiAgICBtZXNzYWdlOiAnPCcsXG4gICAgaXNMb2FkaW5nOiAnPHVpTG9hZGluZydcbiAgfTtcbn1cblxuYXBwLmRpcmVjdGl2ZSgndWlMb2FkaW5nJywgKCkgPT4gbmV3IExvYWRpbmdEaXJlY3RpdmUoKSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NvdXJjZXMvbWFpbi91aS1jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5kaXJlY3RpdmUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBuZy1zaG93PVxcXCJpc0xvYWRpbmdcXFwiIGNsYXNzPVxcXCJ1aS1sb2FkaW5nIHRleHQtY2VudGVyXFxcIj48aW9uLXNwaW5uZXIgaWNvbj1cXFwiY3Jlc2NlbnRcXFwiPjwvaW9uLXNwaW5uZXI+PHNwYW4+e3ttZXNzYWdlfX08L3NwYW4+PC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvbWFpbi91aS1jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5odG1sXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYXBwIGZyb20gJ21haW4ubW9kdWxlJztcbmltcG9ydCB7UmVzdFNlcnZpY2V9IGZyb20gJ2hlbHBlcnMvcmVzdC9yZXN0LnNlcnZpY2UnO1xuaW1wb3J0IHtDb250ZXh0U2VydmljZX0gZnJvbSAnaGVscGVycy9jb250ZXh0L2NvbnRleHQuc2VydmljZSc7XG5cbi8qKlxuICogUXVvdGUgc2VydmljZTogYWxsb3dzIHRvIGdldCBxdW90ZSBvZiB0aGUgZGF5LlxuICovXG5leHBvcnQgY2xhc3MgUXVvdGVTZXJ2aWNlIHtcblxuICBwcml2YXRlIFJPVVRFUyA9IHtcbiAgICByYW5kb21Kb2tlOiAnL2pva2VzL3JhbmRvbT9lc2NhcGU9amF2YXNjcmlwdCZsaW1pdFRvPVs6Y2F0ZWdvcnldJ1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgJHE6IG5nLklRU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZXN0U2VydmljZTogUmVzdFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgY29udGV4dFNlcnZpY2U6IENvbnRleHRTZXJ2aWNlKSB7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcmFuZG9tIENodWNrIE5vcnJpcyBqb2tlLlxuICAgKiBVc2VkIGNvbnRleHQgcHJvcGVydGllczpcbiAgICogLSBjYXRlZ29yeTogdGhlIGpva2UncyBjYXRlZ29yeTogJ25lcmR5JywgJ2V4cGxpY2l0Jy4uLlxuICAgKiBAcGFyYW0geyFPYmplY3R9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gdXNlLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBwcm9taXNlLlxuICAgKi9cbiAgZ2V0UmFuZG9tSm9rZShjb250ZXh0OiBhbnkpOiBuZy5JUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5yZXN0U2VydmljZVxuICAgICAgLmdldCh0aGlzLmNvbnRleHRTZXJ2aWNlLmluamVjdCh0aGlzLlJPVVRFUy5yYW5kb21Kb2tlLCBjb250ZXh0KSwgbnVsbCwgdHJ1ZSlcbiAgICAgIC50aGVuKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS52YWx1ZS5qb2tlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLiRxLnJlamVjdCgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIHJldHVybiAnRXJyb3IsIGNvdWxkIG5vdCBsb2FkIGpva2UgOi0oJztcbiAgICAgIH0pO1xuICB9XG5cbn1cblxuYXBwLnNlcnZpY2UoJ3F1b3RlU2VydmljZScsIFF1b3RlU2VydmljZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL21haW4vd2ViLXNlcnZpY2VzL3F1b3RlL3F1b3RlLnNlcnZpY2UudHMiLCJhbmd1bGFyLm1vZHVsZSgndHJhbnNsYXRpb25zJykucnVuKFsnZ2V0dGV4dENhdGFsb2cnLCBmdW5jdGlvbiAoZ2V0dGV4dENhdGFsb2cpIHtcbi8qIGpzaGludCAtVzEwMCAqL1xuICAgIGdldHRleHRDYXRhbG9nLnNldFN0cmluZ3MoJ2VuLVVTJywge1wiQWJvdXRcIjpcIkFib3V0XCIsXCJBUFBfTkFNRVwiOlwic3RvcmVcIixcIkhlbGxvIHdvcmxkICFcIjpcIkhlbGxvIHdvcmxkICFcIixcIkhvbWVcIjpcIkhvbWVcIixcIlZlcnNpb25cIjpcIlZlcnNpb25cIn0pO1xuLyoganNoaW50ICtXMTAwICovXG59XSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL3RyYW5zbGF0aW9ucy9lbi1VUy5wb1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiYW5ndWxhci5tb2R1bGUoJ3RyYW5zbGF0aW9ucycpLnJ1bihbJ2dldHRleHRDYXRhbG9nJywgZnVuY3Rpb24gKGdldHRleHRDYXRhbG9nKSB7XG4vKiBqc2hpbnQgLVcxMDAgKi9cbiAgICBnZXR0ZXh0Q2F0YWxvZy5zZXRTdHJpbmdzKCdmci1GUicsIHtcIkFib3V0XCI6XCJBIHByb3Bvc1wiLFwiQVBQX05BTUVcIjpcInN0b3JlXCIsXCJIZWxsbyB3b3JsZCAhXCI6XCJCb25qb3VyIGxlIG1vbmRlICFcIixcIkhvbWVcIjpcIkFjY3VlaWxcIixcIlZlcnNpb25cIjpcIlZlcnNpb25cIn0pO1xuLyoganNoaW50ICtXMTAwICovXG59XSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL3RyYW5zbGF0aW9ucy9mci1GUi5wb1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==