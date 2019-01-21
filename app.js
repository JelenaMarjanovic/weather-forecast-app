// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute']);

// ROUTES
weatherApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './pages/home.htm',
      controller: 'homeController'
    })
    .when('/forecast', {
      templateUrl: './pages/forecast.htm',
      controller: 'forecastController'
    });
});

// CONTROLLERS
weatherApp.controller('homeController', ['$scope', function($scope) {}]);

weatherApp.controller('forecastController', ['$scope', function($scope) {}]);
