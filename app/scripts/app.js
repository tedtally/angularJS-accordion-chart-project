(function () {
    'use strict';
    
    var app = angular
  .module('teamBuildDashboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
   'common',           // common functions, logger, spinner
    'common.bootstrap', // bootstrap dialog wrapper functions
    'smart-table',
    // 3rd Party Modules
    'ui.bootstrap',
    'nvd3ChartDirectives'      // ui-bootstrap (ex: carousel, pagination, dialog)
  ]).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/mybuildlog', {
        templateUrl: 'views/mybuildlog.html'//,
        //controller: 'buildlogController',
        //controllerAs: 'mybuildlog'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
/*
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/mybuildlog', {
        templateUrl: 'views/mybuildlog.html',
        controller: 'MybuildlogCtrl',
        controllerAs: 'mybuildlog'
      })
      .otherwise({
        redirectTo: '/'
      });
  });*/
})();