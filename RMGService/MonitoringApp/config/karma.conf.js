var webpackConfig = require('./webpack.test');

module.exports = function (config) {
  var _config = {
    basePath: '',

    frameworks: ['jasmine'],

    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },

    files: [
      { pattern: './config/karma-test-shim.js', watched: false }
    ],

    preprocessors: {
      './config/karma-test-shim.js': ['webpack', 'sourcemap']
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['progress', 'kjhtml'],
    port: 8099,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    reporters: ['progress', 'karma-remap-istanbul'],
    remapIstanbulReporter: {
      reports: {
        html: 'src/test/coverage'
      }
    }
  };

  config.set(_config);
};
