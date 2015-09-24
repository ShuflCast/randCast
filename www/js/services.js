angular.module('starter.services')

.service('apiCall', ['$http', function(url) {

  $http.get(url).then(function(response) {
    var results = response.data.body.audio_clips;
  });

}]);