'use strict';
easyWay.controller("mainController",function($scope,$location,SidebarJS,$window){ 
   //side menu  
  $scope.toggleSidebarJS=function (sidebarName) {
    SidebarJS.toggle(sidebarName);
  }
  
  $scope.isVisibleSidebarJS=function(sidebarName) {
    return SidebarJS.isVisible(sidebarName);
  }

//  $scope.onSidebarOpen=function() {
//    console.log('is open!');
//  }
//
//  $scope.onSidebarClose=function() {
//    console.log('is close!');
//  }

  $scope.changePosition=function(newPosition) {
    SidebarJS.setPosition(newPosition);
  }
     
       // history back buttion 
       $scope.goBack=function(){            
           //$ionicHistory.goBack();
            $window.history.back();
       }
       
       
 
   
});
