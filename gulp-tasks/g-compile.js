/**
 * Created by elporfirio on 02/07/16.
 */

var gulp = require('gulp'),
    config = require('./config.js'),
    inject = require('gulp-inject'),
    htmlmin = require('gulp-htmlmin');

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


gulp.task('compile:dist', [
    'compile-styles:dist',
    'compile-libs:dist',
    'compile-modules:dist',
    'compile-html:dist',
    'compile-fonts:dist',
    'compile-images:dist'
], function(){
    return gulp.src('./app/index.html')
        .pipe(inject(gulp.src([
            config.paths.prodfolder + '/libs/jquery.js',
            config.paths.prodfolder + '/libs/angular.js',
            config.paths.prodfolder + '/libs/**/*.js'
        ], {read: false}),{ignorePath: config.paths.distfolder, relative: false, addRootSlash: false, starttag: '<!-- libs:js -->'} ))
        .pipe(inject(gulp.src([
            config.paths.prodfolder + '/js/**/*.js'
        ], {read: false}),{ignorePath: config.paths.distfolder, relative: false, addRootSlash: false} ))
        .pipe(inject(gulp.src([
            config.paths.prodfolder + '/**/*.css'
        ], {read: false}),{ignorePath: config.paths.distfolder, relative: false, addRootSlash: false} ))
        
        .pipe(gulp.dest(config.paths.prodfolder));
});