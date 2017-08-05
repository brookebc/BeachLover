'use strict';

angular.module('beachLoverApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase',
  'angularfire.firebase',
  'angularfire.login',
  'simpleLoginTools'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/beach', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/beachdetail.html',
        controller: 'MainCtrl'
      })
       .when('/geo', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/geo.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/map', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
