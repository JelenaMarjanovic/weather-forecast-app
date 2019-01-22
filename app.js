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

// SERVICES
weatherApp.service('cityService', function() {
  this.city = 'Belgrade';
});

// CONTROLLERS
weatherApp.controller('homeController', [
  '$scope',
  'cityService',
  function($scope, cityService) {
    $scope.city = cityService.city;

    // EVENT LISTENER
    $scope.$watch('city', function() {
      cityService.city = $scope.city;
    });
  }
]);

weatherApp.controller('forecastController', [
  '$scope',
  'cityService',
  function($scope, cityService) {
    $scope.city = cityService.city;
  }
]);
