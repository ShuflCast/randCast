describe('randCast', function() {

  beforeEach(function() {
    browser.get('http://localhost:8100');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('rand(Cast)');
  });

  it('goes to results page upon searching', function() {
    var slider = element(by.id('durationSelect'))
    browser.actions().dragAndDrop(
      slider, {
        x: 100,
        y: 0
      }
    ).perform();
    element(by.id('comedy')).click();
    element(by.id('searchBtn')).click();
    expect(browser.getTitle()).toEqual('Results');
  });

  it('goes to results page upon searching', function() {
    element(by.id('comedy')).click();
    element(by.id('searchBtn')).click();
    expect(browser.getTitle()).toEqual('Results');
  });

  it('returns a list of results', function() {
    element(by.id('comedy')).click();
    element(by.id('searchBtn')).click();
    var results = element.all(by.repeater('result in results'));
    results.then(function(result) {
      expect(result.length).toBeGreaterThan(1);
    });
  });

  it('returns no more than 5 results', function() {
    element(by.id('comedy')).click();
    element(by.id('searchBtn')).click();
    var results = element.all(by.repeater('result in results'));
    results.then(function(result) {
      expect(result.length).toBeLessThan(6);
    });
  });

  it('goes to player page upon selecting a podcast', function() {
    element(by.id('comedy')).click();
    element(by.id('searchBtn')).click();
    var results = element.all(by.repeater('result in results'));
    results.get(0).click()
    expect(browser.getTitle()).toEqual('Player');
  });

  it('goes straight to player page when searching with lucky button', function() {
    element(by.id('comedy')).click();
    element(by.id('luckyBtn')).click();
    expect(browser.getTitle()).toEqual('Player');
  });
});
