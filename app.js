// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

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
  '$resource',
  'cityService',
  function($scope, $resource, cityService) {
    $scope.city = cityService.city;
    $scope.days = '3';

    // Fetch API data
    $scope.weatherAPI = $resource(
      'http://api.openweathermap.org/data/2.5/forecast/daily',
      {
        callback: 'JSON_CALLBACK'
      },
      {
        get: {
          method: 'JSONP'
        }
      }
    );

    $scope.weatherResult = $scope.weatherAPI.get({
      q: $scope.city,
      cnt: $scope.days,
      APPID: '279b4be6d54c8bf6ea9b12275a567156'
    });

    console.log($scope.weatherResult);
  }
]);
