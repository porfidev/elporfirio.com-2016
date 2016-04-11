/**
 * Created by elporfirio on 31/03/16.
 */
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglify      = require('gulp-uglify');
var debug       = require('gulp-debug');
var cleancss    = require('gulp-clean-css');
var inject      = require('gulp-inject');
var clean       = require('gulp-clean');


var config = {
  sassPath: './app/resources/sass',
  bowerDir: './bower_components'
};

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./app"
    }
  });
});

gulp.task('css', function() {
  return gulp.src('./app/resources/sass/main.scss')
      .pipe(debug({verbose: true}))
      .pipe(sass({
        includePaths: ['./bower_components/bootstrap-sass/assets/stylesheets']
      }))
      .pipe(cleancss())
      .pipe(gulp.dest('./app/resources/css'))
});

gulp.task('minimizarJS', function(){
  return gulp.src('./app/resources/js/*.js')
      .pipe(debug({verbose: true}))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/scripts'))
});

gulp.task('watch', function(){
  gulp.watch(['./app/resources/sass/main.scss'], ['css']);
  gulp.watch(['./app/resources/js/app.js'], ['minimizarJS']);
});
/* =========== */

gulp.task('copylibs', function(){
  return gulp.src([
        './bower_components/jquery/dist/jquery.js',
        './bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
        './bower_components/angular/angular.js',
        './bower_components/angular-ui-router/release/angular-ui-router.js'
      ])
      .pipe(debug({verbose: true}))
      //.pipe(uglify())
      .pipe(gulp.dest('./.tmp/libs'))
});

gulp.task('copyjs', function(){
  return gulp.src([
    './app/resources/js/*.js'
  ])
      .pipe(debug({verbose: true}))
      //.pipe(uglify())
      .pipe(gulp.dest('./.tmp/js'))
});

gulp.task('copymodules', function(){
  return gulp.src('./app/modules/**/*.js')
      .pipe(debug({verbose: true}))
      //.pipe(uglify())
      .pipe(gulp.dest('./.tmp/js/modules/'))
});

gulp.task('copycss', function() {
  return gulp.src('./app/resources/sass/main.scss')
      .pipe(debug({verbose: true}))
      .pipe(sass({
        includePaths: ['./bower_components/bootstrap-sass/assets/stylesheets']
      }))
      //.pipe(cleancss())
      .pipe(gulp.dest('./.tmp/css'))
});

gulp.task('copyhtml', function() {
  gulp.src(['./app/*.html', '!./app/index.html'])
      // Perform minification tasks, etc here
      .pipe(gulp.dest('./.tmp'));
});

gulp.task('index', ['copylibs','copyjs', 'copycss', 'copyhtml', 'copymodules'], function () {
  // var target = gulp.src('app/index.html');
  // // It's not necessary to read the files (will speed up things), we're only after their paths:
  // var sources = gulp.src(['.tmp/**/*.js', '!.tmp/js/modules/**/*.js', '.tmp/**/*.css'], {read: false});
  //
  // return target.pipe(inject(sources, { name: 'archivos', relative: true, addRootSlash: false }))
  //     .pipe(gulp.dest('.tmp'));

  return gulp.src('./app/index.html')
      .pipe(inject(gulp.src([
        '.tmp/libs/jquery.js',
        '.tmp/libs/angular.js',
        '.tmp/libs/**/*.js',
        '.tmp/**/*.js', '!.tmp/js/modules/**/*.js', '.tmp/**/*.css'], {read: false}), {ignorePath: '.tmp', relative: false, addRootSlash: false}))
      .pipe(gulp.dest('.tmp'));
});

gulp.task('limpiar', function () {
  return gulp.src('./.tmp')
      .pipe(clean({force: true}));
      //.pipe(gulp.dest('dist'));
});

gulp.task('serve',['index'], function(){
  gulp.watch(['./app/resources/sass/*.scss'], ['copycss']);
  gulp.watch(['./app/resources/js/**/*.js'], ['copyjs']);
  gulp.watch(['./app/**/*.html'], ['copyhtml']);
  browserSync.init({
    startPath: '/',
    server: {
      baseDir: "./.tmp"
    }
  });
});