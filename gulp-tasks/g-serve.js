/**
 * Created by elporfirio on 02/07/16.
 */

var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    config = require('./config.js');

gulp.task('serve', ['compile'], function() {
    gulp.watch(config.paths.sass.all, ['compile-styles']);
    gulp.watch(config.paths.libs.origins, ['compile-libs']);
    gulp.watch(config.paths.views, ['compile-html']);
    gulp.watch(config.paths.images.all, ['compile-images']);
    gulp.watch(config.paths.modules.origins, ['compile-modules']);

    gulp.src(config.paths.devfolder)
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true,
            fallback: 'index.html'
        }));
});

gulp.task('serve:dist', ['compile:dist'], function() {
    gulp.src(config.paths.prodfolder)
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true,
            fallback: 'index.html'
        }));
});