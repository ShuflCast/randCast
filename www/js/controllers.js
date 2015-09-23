angular.module('starter.controllers', ['ionic'])

.controller('homeCtrl', function($scope, $http) {

  $scope.doSearch = function() {

    // var method = 'GET';
    var url = 'https://www.audiosear.ch/api/search/episodes/filters[categories.name_lc]=Comedy';
    var params = {
      'callback': callback,
      'client_id': app_id,
      'client_secret': secret,
      'code': auth_code
    }

    $http.get(url, {params: params}).then(function(response) {
      $scope.results = response.data;
      console.log($scope.results);
    });

  };

})

.controller('resultsCtrl', function($scope) {

})

.controller('playerCtrl', function($scope) {


})
