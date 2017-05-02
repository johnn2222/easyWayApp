var easyWay = angular.module('easyWay', ['ionic']);

    easyWay.run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Stuff in here
        });
    })
    
    easyWay.config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('/', {
                url:'/login',
                templateUrl: '../src/views/login.html',
                controller: 'loginController'
            })            
        $urlRouterProvider.otherwise('/login');
    });