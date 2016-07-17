/**
 * Created by elporfirio on 16/07/16.
 */
var gulp = require('gulp'),
    config = require('./config.js'),
    debug = require('gulp-debug');

gulp.task('compile-images', function(){
    return gulp.src(config.paths.images.origins)
        .pipe(debug({verbose: true}))
        .pipe(gulp.dest(config.paths.images.destiny));
});

gulp.task('compile-images:dist', function(){
    return gulp.src(config.paths.images.origins)
        .pipe(debug({verbose: true}))
        .pipe(gulp.dest(config.paths.images.dist));
});