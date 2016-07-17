/**
 * Created by elporfirio on 02/07/16.
 */

var gulp = require('gulp'),
    config = require('./config.js'),
    inject = require('gulp-inject');

gulp.task('index', function(){
    return gulp.src('./app/index.html')
        .pipe(inject(gulp.src([
            '.tmp/libs/jquery.js',
            '.tmp/libs/angular.js',
            '.tmp/libs/**/*.js',
            '.tmp/**/*.js', '!.tmp/js/modules/**/*.js', '.tmp/**/*.css'], {read: false}), {ignorePath: '.tmp', relative: false, addRootSlash: false}))
        .pipe(gulp.dest('.tmp'));
});
  