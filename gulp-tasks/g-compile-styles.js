/**
 * Created by elporfirio on 02/07/16.
 */

var gulp = require('gulp'),
    config = require('./config.js'),
    debug = require('gulp-debug'),
    sass = require('gulp-sass');

gulp.task('compile-styles', function(){
    return gulp.src(config.paths.sass.main)
        .pipe(debug({verbose: true}))
        .pipe(sass({
            includePaths: [config.paths.bootstrap.all, config.paths.sass.all],
            errLogToConsole: true
        }))
        .pipe(gulp.dest(config.paths.sass.dest));
});
