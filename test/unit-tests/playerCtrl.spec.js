describe('playerCtrl', function() {
  beforeEach(module('starter'));

  var ctrl;
  var $scope;

  beforeEach(module(function ($provide) {
    $scope = {
      $scope.myTrack= function(myTrack) {
        url: '$scope.trackOptions.audio_files[0].mp3',
        episode: '$scope.trackOptions.title',
        show: '$scope.trackOptions.show_title',
        art: '$scope.trackOptions.image_urls.full',
        description: '$scope.trackOptions.description'
      };
    }
    $provide.value('$scope', $scope);
  }));

  beforeEach(inject(function($controller) {
    ctrl = $controller('playerCtrl');
  }));

  it('responds to shareAnywhere', function() {
    expect($scope.shareAnywhere).toBeDefined();
  });

});
