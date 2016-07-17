/**
 * Created by elporfirio on 02/07/16.
 */
var gulp = require('gulp'),
    config = require('./config.js'),
    debug = require('gulp-debug');

gulp.task('compile-fonts', function(){
    return gulp.src(config.paths.fonts.origins)
        .pipe(debug({verbose: true}))
        //.pipe(uglify())
        .pipe(gulp.dest(config.paths.fonts.destiny));
});