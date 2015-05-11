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
                .when('/KurskBattle', {templateUrl: 'Battle/Kursk.html'})
                .when('/Poems', {templateUrl : 'WarArt/Poems.html'})
                .when ('/MoscowHero', {templateUrl : "HeroSities/MoscowHero.html"})
                .when ('/LeningradHero', {templateUrl : "HeroSities/Leningrad.html"})
                .when ('/VolgogradHero', {templateUrl : "HeroSities//Volgograd.html"})
                .when ('/BrestHero', {templateUrl : "HeroSities/Brest.html"})
                .when ('/MinskHero', {templateUrl : "HeroSities/Minsk.html"})
                .when ('/KievHero', {templateUrl : "HeroSities/Kiev.html"})
                .when ('/OdessaHero', {templateUrl : "HeroSities/Odessa.html"})
                .when ('/KertchHero', {templateUrl : "HeroSities/Kertch.html"})
                .when ('/SevastopolHero', {templateUrl : "HeroSities/Sevastopol.html"})
                .when ('/NovorossiyskHero', {templateUrl : "HeroSities/Novorossiysk.html"})
                .when ('/MyrmanskHero', {templateUrl : "HeroSities/Myrmansk.html"})
                //.when('/carousel-example-generic', {templateUrl:'#'});
                ;
            //$locationProvider.html5Mode(true);
        }])

    .controller('MainCtrl', ['$route', '$routeParams', '$location',
        function($route, $routeParams, $location) {
          //  this.$route = $route;
          //  this.$location = $location;
          //  this.$routeParams = $routeParams;
        }]) ;

