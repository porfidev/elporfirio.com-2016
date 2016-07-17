/**
 * Created by elporfirio on 02/07/16.
 */

var gulp = require('gulp'),
    config = require('./config.js'),
    debug = require('gulp-debug'),
    rename = require('gulp-rename'),
    htmlmin = require('gulp-htmlmin');

gulp.task('compile-html', function(){
    return gulp.src(config.paths.views)
        .pipe(debug({verbose: true}))
        //.pipe(uglify())
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(config.paths.devfolder + '/views'));
});

gulp.task('compile-html:dist', function(){
    return gulp.src(config.paths.views)
        .pipe(debug({verbose: true}))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(config.paths.prodfolder + '/views'));
});