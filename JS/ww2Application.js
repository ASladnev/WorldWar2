/**
 * Created by user on 03.05.15.
 */
angular.module ("ww2Application", ['ngRoute'])

    .config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {

            $routeProvider
                .when ('/', {
                    templateUrl: 'Main.html'
                })
                .when('/MoscowBattle', {
                    templateUrl: 'Battle/Moscow.html'//,
                    //controller: 'MainCtrl',
                    //controllerAs: 'main'
                })
                .when('/StalingradBattle', {
                    templateUrl: 'Battle/Stalingrad.html'
                    //,controller: 'ChapterCtrl',
                    //controllerAs: 'chapter'
                })
                .when('/KurskBattle', {
                    templateUrl: 'Battle/Kursk.html'
                    //,controller: 'ChapterCtrl',
                    //controllerAs: 'chapter'
                });


            ;

//            $locationProvider.html5Mode(true);
        }])

    .controller('MainCtrl', ['$route', '$routeParams', '$location',
        function($route, $routeParams, $location) {
            this.$route = $route;
            this.$location = $location;
            this.$routeParams = $routeParams;
        }])

        ;

