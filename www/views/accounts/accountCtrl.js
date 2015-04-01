angular.module('starter.controllers')


.controller('AccountCtrl', function($scope, $state, tabsFact, PagesUtilServ) {
  $scope.settings = {
    enableFriends: true
  };
  tabsArray = tabsFact;
  currentState = $state.current.name
  currentIndex = tabsArray.indexOf(currentState)
  console.log(currentState)
  console.log("index by controller: " + currentIndex)

  $scope.swipeLeft = function(){
    currentIndex = PagesUtilServ.swipeLeft(tabsArray, currentIndex)
    console.log("currentIndex: " + currentIndex)
    console.log(currentState)


  }
  $scope.swipeRight = function(){
    currentIndex = PagesUtilServ.swipeRight(tabsArray, currentIndex)
    
    console.log("currentIndex: " + currentIndex)
    console.log(currentState)


  }
})
