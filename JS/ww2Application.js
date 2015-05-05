/**
 * Created by user on 03.05.15.
 */
angular.module ("ww2Application", ['ngRoute', 'ngAnimate'])

    .config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider
                .when ('/', {templateUrl: 'Main.html'})
                .when ('/Battles', {templateUrl: 'Battle/Battles.html'})
                .when('/MoscowBattle', {templateUrl: 'Battle/Moscow.html'})
                .when('/StalingradBattle', {templateUrl: 'Battle/Stalingrad.html'})
                .when('/KurskBattle', {templateUrl: 'Battle/Kursk.html'});


//            $locationProvider.html5Mode(true);
        }])

    .controller('MainCtrl', ['$route', '$routeParams', '$location',
        function($route, $routeParams, $location) {
          //  this.$route = $route;
          //  this.$location = $location;
          //  this.$routeParams = $routeParams;
        }]) ;

