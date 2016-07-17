/**
 * Created by elporfirio on 16/07/16.
 */
angular.module('elporfirio.com')
    .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("inicio");
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
        $stateProvider
            .state('inicio', {
                url: '/inicio',
                templateUrl: 'views/inicio.view.html'
            })
    }]);