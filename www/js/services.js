angular.module('starter.services', [])

.factory('ApiCall', ['$http', function($http, $scope) {

  var results = [];

  return {

    makeCall: function(search_term) {
      var url = 'https://api.audioboom.com/tag/' + search_term + '/audio_clips';

      $http.get(url).then(function(response) {
        results = response.data.body.audio_clips;
        // console.log(results);
        return results;
      });
    },

    getResults: function() {
      // console.log(results);
      return results;
    }
  };

}]);