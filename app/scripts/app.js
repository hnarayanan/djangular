'use strict';

/**
 * @ngdoc overview
 * @name djangularApp
 * @description
 * # djangularApp
 *
 * Main module of the application.
 */
angular
  .module('djangularApp', [
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
