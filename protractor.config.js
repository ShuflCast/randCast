exports.config = {
          capabilities: {
                  'browserName': 'chrome'
          },
          specs: [
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
