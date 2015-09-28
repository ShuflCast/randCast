angular.module('starter.services', [])

.factory('ApiCall', function($http) {

  var results = [];
  var min = null;
  var max = null;
  var track = [];
  var duration_options = [
    {
      'name': '1 - 15',
      'min': 1,
      'max': 899
    },
    {
      'name': '15 - 45',
      'min': 900,
      'max': 2699
    },
    {
      'name': '45 - 90',
      'min': 2700,
      'max': 5399
    },
    {
      'name': '90 +',
      'min': 5400,
      'max': 999999999
    }
  ];

  var filter_duration = function(duration) {

    for (i = 0; i < duration_options.length; i++ ) {
      if (duration_options[i].name === duration) {
        min = duration_options[i].min;
        max = duration_options[i].max;
      };
    };
  };

  var findIndexInData = function(data, property, value) {
    var result = -1;
    data.some(function (item, i) {
      if (item[property] === value) {
          result = i;
          return true;
      }
    });
    return result;
  };

  var searchResults = function(search_term) {
    var index = findIndexInData(categories, 'category', search_term);
    var params_string ='filters%5Bcategories.id%5D=' + categories[index]['id'];
    return params_string;
  };

  return {

    returnMin: function() {
      return min;
    },

    returnMax: function() {
      return max;
    },

    makeCall: function(search_term, duration) {
      var params = searchResults(search_term);
      var url = 'https://intense-forest-8107.herokuapp.com/search?search_term=' + params;
      return $http.get(url).then(function(response) {
        results = response.data;
        filter_duration(duration);
        return results;
      });
    },

    getResults: function() {
      return results;
    },

    setTrack: function(result) {
      track = result;
      return track;
    },

    getTrack: function() {
      return track;
    }
  };

});
