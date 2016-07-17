/**
 * Created by elporfirio on 02/07/16.
 */

var gulp = require('gulp'),
    config = require('./config.js'),
    inject = require('gulp-inject');

gulp.task('compile', [
    'compile-styles',
    'compile-libs',
    'compile-modules',
    'compile-html',
    'compile-fonts',
    'compile-images'
], function(){
    return gulp.src('./app/index.html')
        .pipe(inject(gulp.src([
            config.paths.devfolder + '/libs/jquery.js',
            config.paths.devfolder + '/libs/angular.js',
            config.paths.devfolder + '/libs/**/*.js'
        ], {read: false}),{ignorePath: config.paths.tempfolder, relative: false, addRootSlash: false, starttag: '<!-- libs:js -->'} ))
        .pipe(inject(gulp.src([
            config.paths.devfolder + '/js/**/*.js'
        ], {read: false}),{ignorePath: config.paths.tempfolder, relative: false, addRootSlash: false} ))
        .pipe(inject(gulp.src([
            config.paths.devfolder + '/**/*.css'
        ], {read: false}),{ignorePath: config.paths.tempfolder, relative: false, addRootSlash: false} ))
        .pipe(gulp.dest(config.paths.devfolder));
});