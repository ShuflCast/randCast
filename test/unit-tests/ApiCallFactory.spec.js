describe('factory:ApiCall', function() {
  var apiCall;
  var index = 1;

  var categories  = [
    {
      'category': 'Comedy',
      'id': 1
    },
    {
      'category': 'Sport',
      'id': 2
    }]

  beforeEach(module('starter.services'))

  beforeEach(inject(function(ApiCall) {
    apiCall = ApiCall;
  }))

  beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend
        .expectGET("http://intense-forest-8107.herokuapp.com/search?search_term=filters%5Bcategories.id%5D=1")
        .respond(200);
      }));

  it('responds to makeCall', function() {
    expect(apiCall.makeCall).toBeDefined();
  })

  it('responds to returnMin', function() {
    expect(apiCall.returnMin).toBeDefined();
  })

  it('responds to returnMax', function() {
    expect(apiCall.returnMax).toBeDefined();
  })

  it('responds to getResults', function() {
    expect(apiCall.getResults).toBeDefined();
  })

  it('responds to setTrack', function() {
    expect(apiCall.setTrack).toBeDefined();
  })

  it('responds to getTrack', function() {
    expect(apiCall.getTrack).toBeDefined();
  })

  // it('calls the Audiosear.ch api correctly', function() {
  //   categories[index]['id']=1
  //   apiCall.makeCall()
  //     .then(function(response) {
  //       expect(response.status).toEqual(200);
  //     });
  //     httpBackend.flush();
  // })


})
