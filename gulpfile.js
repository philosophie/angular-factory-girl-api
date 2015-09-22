var gulp        = require('gulp');
var karma       = require('karma').server;

var coffee      = require('gulp-coffee');
var coffeelint  = require('gulp-coffeelint');
var concat      = require('gulp-concat');
var ngAnnotate  = require('gulp-ng-annotate');
var path        = require('path');
var plumber     = require('gulp-plumber');
var rename      = require('gulp-rename');
var runSequence = require('run-sequence');
var sourcemaps  = require('gulp-sourcemaps');
var uglify      = require('gulp-uglify');

/**
 * File patterns
 **/

// Root directory
var rootDirectory = path.resolve('./');

// Source directory for build process
var sourceDirectory = path.join(rootDirectory, './src');

var sourceFiles = [
  // Make sure module files are handled first
  path.join(sourceDirectory, '/**/*.module.coffee'),

  // Then add all CoffeeScript files
  path.join(sourceDirectory, '/**/*.coffee')
];

gulp.task('build', function() {
  gulp.src(sourceFiles)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(coffee())
    .pipe(ngAnnotate())
    .pipe(concat('angular-factory-girl-api.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/'))
    .pipe(uglify())
    .pipe(rename('angular-factory-girl-api.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'));
});

/**
 * Process
 */
gulp.task('process-all', function (done) {
  runSequence('lint', 'build', 'test', done);
});

/**
 * Watch task
 */
gulp.task('watch', function () {
  // Watch JavaScript files
  gulp.watch(sourceFiles, ['process-all']);
});

/**
 * Validate source CoffeeScript
 */
gulp.task('lint', function () {
  return gulp.src(sourceFiles)
    .pipe(plumber())
    .pipe(coffeelint())
    .pipe(coffeelint.reporter('coffeelint-stylish'))
    .pipe(coffeelint.reporter('fail'));
});

/**
 * Run test once and exit
 */
gulp.task('test-src', function (done) {
  karma.start({
    configFile: __dirname + '/karma-src.conf.coffee',
    singleRun: true
  }, done);
});

/**
 * Run test once and exit
 */
gulp.task('test-dist-concatenated', function (done) {
  karma.start({
    configFile: __dirname + '/karma-dist-concatenated.conf.coffee',
    singleRun: true
  }, done);
});

/**
 * Run test once and exit
 */
gulp.task('test-dist-minified', function (done) {
  karma.start({
    configFile: __dirname + '/karma-dist-minified.conf.coffee',
    singleRun: true
  }, done);
});

gulp.task('test', ['build'], function () {
  runSequence('test-src', 'test-dist-concatenated', 'test-dist-minified');
});

gulp.task('default', function () {
  runSequence('process-all', 'watch');
});
