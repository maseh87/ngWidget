var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var sync = require('run-sequence');

// Paths to all src files
var paths = {
  src: ['src/**/*.coffee']
};

// lint the coffee
gulp.task('lint', function() {
  return gulp.src(paths.src)
    .pipe($.coffeelint())
    .pipe($.coffeelint.reporter());
});

// compile to js with sourcemaps
gulp.task('coffee', function() {
  return gulp.src(paths.src)
    .pipe($.sourcemaps.init())
    .pipe($.coffee({ bare: true })).on('error', $.util.log)
    .pipe($.sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dest'));
});

// run dev env for visually inspecting the plugin
gulp.task('dev', function() {

});

// run karma test
gulp.task('test', function() {

});

// for ci, use phantom
gulp.task('test:ci', function(){

});

// generate docs from our comments
gulp.task('docs', function() {

});

gulp.task('build', ['lint', 'coffee']);

gulp.task('default', ['build'], function() {
  gulp.watch(paths.src, ['lint', 'coffee']);
});
// bump versions in our pckg.json and bower.json
gulp.task('bump', function() {

});
