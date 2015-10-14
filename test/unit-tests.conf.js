module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      '../www/lib/ionic/js/ionic.bundle.js',
      '../www/lib/angular-mocks/angular-mocks.js',
      '../www/lib/ionic-audio/dist/ion-audio.js',
      '../www/lib/ngCordova/dist/ng-cordova.js',
      '../www/lib/angular-loading-bar/src/loading-bar.js',
      '../www/lib/angular-animate/angular-animate.js',
      '../www/js/*.js',
      'unit-tests/*.js'
    ],

    exclude: [
    ],

    preprocessors: {
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false
  })
}
