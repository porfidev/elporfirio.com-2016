/**
 * Created by elporfirio on 02/07/16.
 */

var gulp = require('gulp'),
    config = require('./config.js'),
    debug = require('gulp-debug'),
    rename = require('gulp-rename');

gulp.task('compile-html', function(){
    return gulp.src(config.paths.views)
        .pipe(debug({verbose: true}))
        //.pipe(uglify())
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(config.paths.devfolder + '/views'));
});