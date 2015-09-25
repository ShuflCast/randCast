angular.module('starter.services')

.factory('ApiCall', ['$http', function(search_term) {

  var url = 'https://api.audioboom.com/tag/' + search_term + '/audio_clips'

  $http.get(url).then(function(response) {
    var results = response.data.body.audio_clips;
    console.log(results);
  });

}]);