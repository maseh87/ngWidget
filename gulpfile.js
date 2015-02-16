var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var bs = require('browser-sync');
var reload = bs.reload;


var sync = require('run-sequence');

// Paths to all src files
var paths = {
  src: ['src/**/*.coffee'],
  dev: ['dev/index.html', 'dev/app.js'],
  dist: './dist'
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
    .pipe($.ngAnnotate())
    .pipe($.sourcemaps.write('./maps'))
    .pipe(gulp.dest(paths.dist));
});

// run dev env for visually inspecting the plugin
gulp.task('dev', ['build'], function(done) {
  bs({
    port: 9500,
    server: {
      baseDir: ['./dev', './dist']
    }
  }, done);

  gulp.watch(paths.dev, reload);
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

gulp.task('build', function(done) {
  sync('lint', 'coffee', done);
});

gulp.task('default', ['build'], function() {
  gulp.watch(paths.src, ['lint', 'coffee']);
});
// bump versions in our pckg.json and bower.json
gulp.task('bump', function() {

});
