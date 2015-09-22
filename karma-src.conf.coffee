module.exports = (config) ->
  configuration =
    files: [
      'bower/lodash/lodash.js'
      'bower/angular/angular.js'
      'bower/angular-mocks/angular-mocks.js'
      'src/**/*.module.coffee'
      'src/**/*.coffee'
      'test/unit/**/*.coffee'
    ]

    singleRun: true

    autoWatch: false

    frameworks: ['jasmine']

    browsers: ['PhantomJS']

    plugins: [
      'karma-coffee-preprocessor'
      'karma-jasmine'
      'karma-phantomjs-launcher'
    ]

    preprocessors:
      '{src,test/unit}/**/*.coffee': ['coffee']

  config.set configuration
