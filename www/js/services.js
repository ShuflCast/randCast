angular.module('starter.services', [])

.factory('ApiCall', function($http) {

  var results = [];
  var track = [];
  var duration_options = [
    {
      'name': '0-4 minutes',
      'min': 0,
      'max': 299
    },
    {
      'name': '5-10 minutes',
      'min': 300,
      'max': 659
    },
    {
      'name': '11-20 minutes',
      'min': 660,
      'max': 1259
    },
    {
      'name': '21-30 minutes',
      'min': 1260,
      'max': 1800
    }
  ];

  var filter_duration = function(duration) {
    var min = null;
    var max = null;

    for (i = 0; i < duration_options.length; i++ ) {
      if (duration_options[i].name === duration) {
        min = duration_options[i].min;
        max = duration_options[i].max;
      };
    };

    for (i = 0; i < results.length; i++ ) {
      if (results[i].duration < min || results[i].duration > max) {
        results.splice(i, 1);
        // console.log(results);
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
  }

  var searchResults = function(search_term) {
    var index = findIndexInData(categories, 'category', search_term);
    var params_string ='filters%5Bcategories.id%5D=' + categories[index]['id'];
    return params_string;
  };

  return {

    makeCall: function(search_term, duration) {
      searchResults(search_term);
      var url = 'https://api.audioboom.com/tag/' + search_term + '/audio_clips';
      return $http.get(url).then(function(response) {
        results = response.data.body.audio_clips;
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