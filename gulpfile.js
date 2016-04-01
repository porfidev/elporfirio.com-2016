/**
 * Created by elporfirio on 31/03/16.
 */
var gulp        = require('gulp');
var sass        = require('gulp-ruby-sass');
var browserSync = require('browser-sync').create();


var config = {
  sassPath: './resources/sass',
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
  return gulp.src(config.sassPath + '/style.scss')
    .pipe(sass({
      style: 'compressed',
      loadPath: [
        //'./resources/sass',
        config.bowerDir + '/bootstrap-sass/assets/stylesheets'
        //config.bowerDir + '/fontawesome/scss'
      ]
    })).pipe(gulp.dest('./app/css'));
      // .on("error", notify.onError(function (error) {
      //   return "Error: " + error.message;
      // })))

});


gulp.task('sass', function () {
  return sass({
    loadPath: [
      './bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss'
    ]
  })
    .on('error', sass.logError)
    .pipe(gulp.dest('result'));
});