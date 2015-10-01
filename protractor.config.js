exports.config = {
          capabilities: {
                  // You can use other browsers
                  // like firefox, phantoms, safari, IE (-_-)
                  'browserName': 'chrome'
          },
          specs: [
                   // We are going to make this file in a minute
                'test/e2e/featureTests.spec.js'
          ],
          jasmineNodeOpts: {
                  showColors: true,
                 defaultTimeoutInterval: 300000000,
                isVerbose: true,
          },
        allScriptsTimeout: 200000000,
          onPrepare: function(){
                browser.driver.get('http://localhost:8100');
        }
};
