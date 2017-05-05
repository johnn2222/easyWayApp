'use strict';
easyWay.controller("dashBoardController",function($scope,$location,$ionicLoading){     
  $scope.title="DashBoard";
  //slider
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
       
       //end
       
       //open module by module name
       $scope.openModule=function(moduleName){          
           switch(moduleName){
               case 'notification':                   
                $location.url('notification');
                break;
           }
           
       }
   
});
