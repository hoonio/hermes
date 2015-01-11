/* global app:true */
/* exported app */
'use strict';

/**
 * @ngdoc overview
 * @name hoonioNewsApp
 * @description
 * # hoonioNewsApp
 *
 * Main module of the application.
 */
var app = angular
  .module('hoonioNewsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .constant('FIREBASE_URL', 'https://hoonio-news.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
