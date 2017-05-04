
var easyWay = angular.module('easyWay', ['ionic','ngRoute','ngSidebarJS']);

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
             .state('/notification', {
                url:'/notification',
                templateUrl: '../src/views/notification.html',
                controller: 'notificationController'
            })      
        $urlRouterProvider.otherwise('/login');
    });
    
 
    
  