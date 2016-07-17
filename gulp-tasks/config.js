/**
 * Created by elporfirio on 02/07/16.
 */

module.exports = {
    paths : {
        devfolder: './.tmp',
        prodfolder: './dist',
        views: './app/modules/**/*.html',
        libs: {
            originsjs: [
                './bower_components/jquery/dist/jquery.js',
                './bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
                './bower_components/angular/angular.js',
                './bower_components/angular-ui-router/release/angular-ui-router.js',
                './bower_components/angular-loading-bar/build/loading-bar.js'
            ],
            originscss: [
                './bower_components/angular-loading-bar/build/loading-bar.css'
            ],
            destiny: './.tmp/libs',
            dist: './dist/libs'
        },
        modules: {
            origins: [
                './app/*.js',
                './app/modules/**/*.js'
            ],
            destiny: './.tmp/js',
            dist: './dist/js'
        },
        sass: {
            all: './app/resources/sass/*.scss',
            main: './app/resources/sass/main.scss',
            dest: './.tmp/css',
            dist: './dist/css'
        },
        fonts: {
            origins: [
                './bower_components/bootstrap-sass/assets/fonts/**/*.*'
            ],
            destiny: './.tmp/fonts',
            dist: './dist/fonts'
        },
        images: {
            all: './app/resources/img/**/*.*',
            origins: [
                './app/resources/img/**/*.png',
                './app/resources/img/**/*.jpg'
            ],
            destiny: './.tmp/img',
            dist: './dist/img'
        },

        
        serverStart: '/',
        tempfolder: '.tmp',
        distfolder: 'dist',

        
        bower: './bower_components',
        bootstrap: {
            all: './bower_components/bootstrap-sass/assets/stylesheets'
        },
        files: './assets/files',
        shared: {
            views : './app/shared/**/*.html',
            modules: './app/shared/**/*.js'
        },

    }
};