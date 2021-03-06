'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// Copy files at root level of 'src' to dist
gulp.task('copy', ['legacy'], function() {
  return gulp.src(['src/*', '!src/_*', '!src/*.jade'], {
      dot: true
    })
    .pipe($.cached('copy'))
    .pipe(gulp.dest('dist'));
});

gulp.task('legacy', function() {
  return gulp.src(['src/legacy/**/*'])
    .pipe(gulp.dest('dist/legacy'));
});
