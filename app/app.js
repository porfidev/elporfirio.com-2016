/**
 * Created by elporfirio on 01/04/2016.
 */

angular.module('elporfirioApp', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('hola', {
        url: '/inicio',
        template: "<h2>Bienvenidos a elporfirio.com</h2>"
      })
});