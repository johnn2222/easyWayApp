'use strict';
easyWay.controller("dashBoardController",function($scope,$location,$ionicSideMenuDelegate){ 
   //side menu
    $scope.toggleLeftSideMenu = function() {      
      $ionicSideMenuDelegate.toggleLeft();
    };
    
    var mySwiper = new Swiper('.swiper-container', {       
        mode:'horizontal',
        paginationType:'bullets',
        autoResize: true,
        resizeReInit: true,
        keyboardControl: true,
        mousewheelControl: false,
        centeredSlides: true,
        slidesPerView: 'auto',
        speed: 600,
        watchActiveIndex: true,
        loop: true,
        autoplay: 3000,
        pagination: '.swiper-pagination',
        paginationClickable: true,
       
       });
 
   
});
