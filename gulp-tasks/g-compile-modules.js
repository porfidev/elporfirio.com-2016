/**
 * Created by elporfirio on 02/07/16.
 */

var gulp = require('gulp'),
    config = require('./config.js'),
    debug = require('gulp-debug'),
    uglify = require('gulp-uglify');

gulp.task('compile-modules', function(){
    return gulp.src(config.paths.modules.origins)
        .pipe(debug({verbose: true}))
        .pipe(gulp.dest(config.paths.modules.destiny));
});

gulp.task('compile-modules:dist', function(){
    return gulp.src(config.paths.modules.origins)
        .pipe(debug({verbose: true}))
        .pipe(uglify())
        .pipe(gulp.dest(config.paths.modules.dist));
});