/******/!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}// webpackBootstrap
/******/
var n={};t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){n(1),n(3),n(2),n(4),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(17),n(19),n(20),e.exports=n(21)},function(e,t,n){"use strict";function o(e,t,n,o,r){e.decorator("$exceptionHandler",["$delegate","$injector",function(e,t){return function(n,o){e(n,o),t.get("logger").getLogger("exceptionHandler").error(n+(o?" ("+o+")":""))}}]),e.decorator("$log",["$delegate",function(e){return r.environment.debug||(e.log=angular.noop,e.debug=angular.noop),e}]),t.debugInfoEnabled(r.environment.debug),n.hashPrefix(""),o.errorOnUnhandledRejections(!1)}o.$inject=["$provide","$compileProvider","$locationProvider","$qProvider","config"],Object.defineProperty(t,"__esModule",{value:!0}),n(2).default.config(o)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),angular.module("translations",[]),t.default=angular.module("app",["translations","gettext","ngAnimate","ngSanitize","ngCordova","ui.router","ionic"])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(2).default.constant("config",{version:"1.0.0",environment:{debug:!1,server:{url:"http://api.icndb.com",route:""}},supportedLanguages:["en-US","fr-FR"]})},function(e,t,n){"use strict";function o(e,t,o){t.otherwise("/"),e.state("app",{template:n(5),controller:"shellController as shell"}).state("app.home",{url:"/",views:{menuContent:{template:n(6),controller:"homeController as vm"}},data:{title:o("Home")}}).state("app.about",{url:"/about",views:{menuContent:{template:n(7),controller:"aboutController as vm"}},data:{title:o("About")}})}o.$inject=["$stateProvider","$urlRouterProvider","gettext"],Object.defineProperty(t,"__esModule",{value:!0}),n(2).default.config(o)},function(e,t){e.exports='<ion-side-menus id="shell" class="shell" enable-menu-with-back-views="true">\x3c!--View content--\x3e<ion-side-menu-content><ion-nav-bar class="bar-stable"><ion-nav-back-button></ion-nav-back-button><ion-nav-buttons side="left"><button class="button button-icon button-clear ion-navicon" menu-toggle="left" ng-hide="$exposeAside.active"></button></ion-nav-buttons></ion-nav-bar><ion-nav-view name="menuContent"></ion-nav-view></ion-side-menu-content>\x3c!--Side menu--\x3e<ion-side-menu side="left" expose-aside-when="(min-width:769px)"><ion-header-bar class="bar-dark"><h1 class="title" translate>APP_NAME</h1></ion-header-bar><ion-content class="dark-bg"><ion-list><ion-item class="item-dark item-icon-left" menu-close href="#/" ng-class="{ active: shell.stateContains(\'app.home\') }"><span class="medium-dark"><i class="icon ion-home icon-large"></i> <span translate>Home</span></span></ion-item><ion-item class="item-dark item-icon-left text-darker" menu-close href="#/about" ng-class="{ active: shell.stateContains(\'app.about\') }"><span class="medium-dark"><i class="icon ion-information-circled icon-large"></i> <span translate>About</span></span></ion-item></ion-list></ion-content></ion-side-menu></ion-side-menus>'},function(e,t){e.exports='<ion-view id="home-screen" class="home-screen"><ion-nav-title>{{viewTitle}}</ion-nav-title><ion-content><ion-list type="card" class="text-center"><ion-item class="item-divider"><img class="logo" src="images/angularjs-logo.png" alt="angularjs logo"><h1 translate>Hello world !</h1></ion-item><ion-item class="item-body"><div ui-loading="vm.isLoading"></div><em class="quote">{{vm.quote}}</em></ion-item></ion-list></ion-content></ion-view>'},function(e,t){e.exports='<ion-view id="about-screen"><ion-nav-title>{{viewTitle}}</ion-nav-title><ion-content><ion-list type="card"><ion-item class="text-center"><h1><i class="icon ion-bookmark"></i> <span translate>APP_NAME</span></h1><p><span translate>Version</span> {{vm.version}}</p></ion-item></ion-list></ion-content></ion-view>'},function(e,t,n){"use strict";function o(e,t,n,o,r,i,a,s,c,l,u,g){function d(e){h.pageTitle=s.getString("APP_NAME"),e&&(h.viewTitle=s.getString(e),h.pageTitle+=" | "+h.viewTitle)}var h=n;h.pageTitle="",h.viewTitle="",h.setLanguage=function(n){n=n||e.localStorage.getItem("language");var o=c.includes(l.supportedLanguages,n);if(!o&&n){var r=n.split("-")[0];o=!!(n=c.find(l.supportedLanguages,function(e){return c.startsWith(e,r)}))}o||(n="en-US"),s.setCurrentLanguage(n),t.id=n,e.localStorage.setItem("language",n)},h.$on("$stateChangeSuccess",function(e,t){d(t.data?t.data.title:null)}),h.$on("gettextLanguageChanged",function(){d(o.current.data?o.current.data.title:null)}),function(){var t=u.getLogger("main");s.debug=l.environment.debug,h.setLanguage(),g.setServer(l.environment.server),a.ready(function(){var n=e.navigator.splashscreen;n&&r(function(){n.hide()},1e3);var o=e.navigator.globalization;o&&o.getPreferredLanguage(function(e){t.log('Setting device locale "'+e.value+'" as default language'),h.$apply(function(){h.setLanguage(e.value)})},null),e.cordova&&e.cordova.plugins.Keyboard&&i.disableScroll(!0)})}()}o.$inject=["$window","$locale","$rootScope","$state","$timeout","$cordovaKeyboard","$ionicPlatform","gettextCatalog","_","config","logger","restService"],Object.defineProperty(t,"__esModule",{value:!0}),n(2).default.run(o)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(2).default.constant("_",_)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=function(){function e(e,t,n,o){this.$state=e,this._=n,this.currentLocale=t,this.logger=o.getLogger("shell"),this.logger.log("init")}return e.$inject=["$state","$locale","_","logger"],e.prototype.stateContains=function(e){return this._.startsWith(this.$state.current.name,e)},e}();t.ShellController=r,o.default.controller("shellController",r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=function(){function e(e,t){this.$window=e,this.cachedData={},this.storage=null,this.logger=t.getLogger("cacheService"),this.loadCacheData()}return e.$inject=["$window","logger"],e.prototype.setCacheData=function(e,t,n,o){var r=this.getCacheKey(e,t);this.cachedData[r]={date:o||new Date,data:n},this.logger.log('Cache set for key: "'+r+'"'),this.saveCacheData()},e.prototype.getCacheData=function(e,t){var n=this.getCacheKey(e,t),o=this.cachedData[n];return o?(this.logger.log('Cache hit for key: "'+n+'"'),o.data):null},e.prototype.getCacheDate=function(e,t){var n=this.getCacheKey(e,t),o=this.cachedData[n];return o?o.date:null},e.prototype.clearCacheData=function(e,t){var n=this.getCacheKey(e,t);this.cachedData[n]=void 0,this.logger.log('Cache cleared for key: "'+n+'"'),this.saveCacheData()},e.prototype.cleanCache=function(e){var t=this;e?angular.forEach(this.cachedData,function(n,o){e>=n.date&&(t.cachedData[o]=void 0)}):this.cachedData={},this.saveCacheData()},e.prototype.setPersistence=function(e){this.cleanCache(),this.storage="local"===e||"session"===e?this.$window[e+"Storage"]:null,this.loadCacheData()},e.prototype.getCacheKey=function(e,t){return e+(t?angular.toJson(t):"")},e.prototype.saveCacheData=function(){this.storage&&(this.storage.cachedData=angular.toJson(this.cachedData))},e.prototype.loadCacheData=function(){var e=this.storage?this.storage.cachedData:null;this.cachedData=e?angular.fromJson(e):{}},e}();t.CacheService=r,o.default.service("cacheService",r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=function(){function e(e){this.logger=e.getLogger("contextService")}return e.$inject=["logger"],e.prototype.inject=function(e,t){var n=this;if(this.logger.log("Injecting context in: "+e),!t)throw"inject: context must be defined";var o=e.match(/(:\w+)/g);return angular.forEach(o,function(o){var r=o.substring(1),i=t[r];if(void 0===i)throw"inject: context."+r+" expected but undefined";i=encodeURIComponent(i),e=e.replace(o,i),n.logger.log("Injected "+i+" for "+o)}),this.logger.log("Resulting REST API: "+e),e},e}();t.ContextService=r,o.default.service("contextService",r)},function(e,t,n){"use strict";function o(e,t,n,o,r){n(t?"["+t+"]":"",e,""),angular.forEach(i,function(n){n(e,t,o,r)})}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=[],a=function(){function e(e,t,n){this.$log=e,this.moduleName=t,this.logFunc=n}return e.prototype.log=function(e,t){this.logFunc(e,this.moduleName,this.$log.log,"log",t)},e.prototype.info=function(e,t){this.logFunc(e,this.moduleName,this.$log.info,"info",t)},e.prototype.warning=function(e,t){this.logFunc(e,this.moduleName,this.$log.warn,"warning",t)},e.prototype.error=function(e,t){this.logFunc(e,this.moduleName,this.$log.error,"error",t)},e}(),s=function(){function e(e){this.$log=e}return e.$inject=["$log"],e.prototype.getLogger=function(e){return new a(this.$log,e,o)},e.prototype.addObserver=function(e){i.push(e)},e}();t.LoggerService=s,r.default.service("logger",s)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=function(){function e(e,t,n,o){this.$q=e,this.$http=t,this.cacheService=n,this.server=null,this.baseUrl="",this.defaultConfig={headers:{"content-type":"application/json","Access-Control-Allow-Headers":"content-type"}},this.cacheHandler=angular.identity,this.logger=o.getLogger("restService")}return e.$inject=["$q","$http","cacheService","logger"],e.prototype.get=function(e,t,n,o){var r=this,i=this.baseUrl+e,a=function(){return r.$http.get(i,{params:t})};if(n){var s="force"===n?null:this.cacheService.getCacheData(e,t);if(null!==s&&(s=this.cacheHandler(s)),null===s)return this.logger.log("GET request: "+e),this.createRequest(a,o).then(function(n){return r.cacheService.setCacheData(e,t,n,null),angular.copy(n)});var c=this.$q.defer();return c.resolve(angular.copy(s)),this.errorHandler(c.promise,o)}return this.createRequest(a,o)},e.prototype.put=function(e,t,n){var o=this;this.logger.log("PUT request: "+e,null);return this.createRequest(function(){return o.$http.put(o.baseUrl+e,t,o.defaultConfig)},n)},e.prototype.post=function(e,t,n){var o=this;this.logger.log("POST request: "+e,null);return this.createRequest(function(){return o.$http.post(o.baseUrl+e,t,o.defaultConfig)},n)},e.prototype.delete=function(e,t){var n=this;this.logger.log("DELETE request: "+e,null);return this.createRequest(function(){return n.$http.delete(n.baseUrl+e,n.defaultConfig)},t)},e.prototype.setServer=function(e){this.server=e,this.baseUrl=e.url+e.route},e.prototype.getServer=function(){return this.server},e.prototype.getBaseUrl=function(){return this.baseUrl},e.prototype.setRequestHandler=function(e){this.requestHandler=e},e.prototype.getRequestHandler=function(){return this.requestHandler},e.prototype.setErrorHandler=function(e){this.errorHandler=e},e.prototype.getErrorHandler=function(){return this.errorHandler},e.prototype.setCacheHandler=function(e){this.cacheHandler=e},e.prototype.getCacheHandler=function(){return this.cacheHandler},e.prototype.requestHandler=function(e,t){return e(t)},e.prototype.errorHandler=function(e,t){var n=this;return t&&t.skipErrors||e.catch(function(e){var t;if(404===e.status)t="Server unavailable or URL does not exist";else if(e.data){var o=e.data.message?e.data.message:null,r=e.data.error?e.data.error:null;t=o||r||angular.toJson(e.data)}return t&&n.logger.error(t,null),n.$q.reject(e)}),e},e.prototype.createRequest=function(e,t){return this.errorHandler(this.requestHandler(e,t),t)},e}();t.RestService=r,o.default.service("restService",r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=function(){function e(e,t){this.logger=e.getLogger("about"),this.version=t.version,this.logger.log("init")}return e.$inject=["logger","config"],e}();t.AboutController=r,o.default.controller("aboutController",r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=function(){function e(e,t){var n=this;this.isLoading=!0,this.quote=null,this.logger=e.getLogger("home"),this.quoteService=t,this.logger.log("init"),this.quoteService.getRandomJoke({category:"nerdy"}).then(function(e){n.quote=e}).finally(function(){n.isLoading=!1})}return e.$inject=["logger","quoteService"],e}();t.HomeController=r,o.default.controller("homeController",r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=function(){return function(){this.restrict="A",this.template=n(18),this.scope={message:"<",isLoading:"<uiLoading"}}}();t.LoadingDirective=r,o.default.directive("uiLoading",function(){return new r})},function(e,t){e.exports='<div ng-show="isLoading" class="ui-loading text-center"><ion-spinner icon="crescent"></ion-spinner><span>{{message}}</span></div>'},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=function(){function e(e,t,n){this.$q=e,this.restService=t,this.contextService=n,this.ROUTES={randomJoke:"/jokes/random?escape=javascript&limitTo=[:category]"}}return e.$inject=["$q","restService","contextService"],e.prototype.getRandomJoke=function(e){var t=this;return this.restService.get(this.contextService.inject(this.ROUTES.randomJoke,e),null,!0).then(function(e){return e.data&&e.data.value?e.data.value.joke:t.$q.reject()}).catch(function(){return"Error, could not load joke :-("})},e}();t.QuoteService=r,o.default.service("quoteService",r)},function(e,t){angular.module("translations").run(["gettextCatalog",function(e){e.setStrings("en-US",{About:"About",APP_NAME:"store","Hello world !":"Hello world !",Home:"Home",Version:"Version"})}])},function(e,t){angular.module("translations").run(["gettextCatalog",function(e){e.setStrings("fr-FR",{About:"A propos",APP_NAME:"store","Hello world !":"Bonjour le monde !",Home:"Accueil",Version:"Version"})}])}]);