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
            .state('/dashboard', {
                url:'/dashboard',
                templateUrl: '../src/views/dashBoard.html',
                controller: 'dashBoardController'
            })      
        $urlRouterProvider.otherwise('/login');
    });
    
   //sidemenu
easyWay.directive("sideMenu",function(){
    return{      
        restrict:'EM',       
        templateUrl:'../src/layouts/sidemenu.html'        
    }
});