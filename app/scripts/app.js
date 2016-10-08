'use strict';

/**
 * @ngdoc overview
 * @name cursoAngular20162017App
 * @description
 * # cursoAngular20162017App
 *
 * Main module of the application.
 */
var moduleAngular = angular.module('cursoAngular20162017App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/inicio', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/form', {
        templateUrl: 'views/form.html',
        controller: 'FormCtrl',
        controllerAs: 'form'
      })
      .otherwise({
        redirectTo: '/inicio'
      });      
  }]);
