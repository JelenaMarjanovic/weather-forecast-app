// CONTROLLERS
weatherApp.controller('homeController', [
  '$scope',
  '$location',
  'cityService',
  function($scope, $location, cityService) {
    $scope.city = cityService.city;

    // EVENT LISTENERS
    $scope.$watch('city', function() {
      cityService.city = $scope.city;
    });

    $scope.submit = function() {
      $location.path('/forecast');
    };
  }
]);

weatherApp.controller('forecastController', [
  '$scope',
  '$routeParams',
  'cityService',
  'weatherService',
  function($scope, $routeParams, cityService, weatherService) {
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '1';

    // Use our custom (reusable) service to get weather data
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);

    $scope.convertToCelsius = function(degK) {
      return Math.round(degK - 273.15);
    };

    $scope.convertDate = function(dt) {
      return new Date(dt * 1000);
    };
  }
]);
