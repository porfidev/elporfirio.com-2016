/**
 * Created by elporfirio on 02/07/16.
 */
'use strict';

var gulp = require('gulp'),
    del = require('del'),
    config = require('./config.js');

gulp.task('clean', function () {
    return del([
        config.paths.devfolder
    ]);
});

gulp.task('clean:dist', function(){
    return del([
        config.paths.prodfolder
    ]);
});