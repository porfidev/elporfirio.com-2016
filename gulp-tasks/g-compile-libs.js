/**
 * Created by elporfirio on 02/07/16.
 */
var gulp = require('gulp'),
    config = require('./config.js'),
    debug = require('gulp-debug'),
    uglify = require('gulp-uglify'),
    merge = require('merge-stream'),
    cleancss = require('gulp-clean-css');

gulp.task('compile-libs', function(){
    var js = gulp.src(config.paths.libs.originsjs)
        .pipe(debug({verbose: true}))
        .pipe(gulp.dest(config.paths.libs.destiny));

    var css = gulp.src(config.paths.libs.originscss)
        .pipe(debug({verbose: true}))
        .pipe(gulp.dest(config.paths.libs.destiny));

    return merge(js, css);
});

gulp.task('compile-libs:dist', function(){
    var js = gulp.src(config.paths.libs.originsjs)
        .pipe(debug({verbose: true}))
        .pipe(uglify())
        .pipe(gulp.dest(config.paths.libs.dist));

    var css = gulp.src(config.paths.libs.originscss)
        .pipe(debug({verbose: true}))
        .pipe(cleancss())
        .pipe(gulp.dest(config.paths.libs.dist));

    return merge(js, css);
});