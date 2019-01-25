// SERVICES
weatherApp.service('cityService', function() {
  this.city = 'Belgrade';
});

// Fetch API data SERVICE
weatherApp.service('weatherService', [
  '$resource',
  function($resource) {
    this.GetWeather = function(city, days) {
      var weatherAPI = $resource(
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

      return weatherAPI.get({
        q: city,
        cnt: days,
        APPID: '279b4be6d54c8bf6ea9b12275a567156'
      });
    };
  }
]);
