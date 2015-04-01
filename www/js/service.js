angular.module("starter").service("PagesUtilServ", function($state){
  this.swipeLeft = function(tabsArray, currentIndex){
    //limit the next index , return it to 0
    if(currentIndex < (tabsArray.length - 1)){
      index = currentIndex + 1
    } else if (currentIndex === tabsArray.length -1){
      index = 0
    }
    $state.go(tabsArray[index])
    return index
  }

  this.swipeRight = function( tabsArray, currentIndex){
    //limit the previous index, return the last array.length -1
    if((currentIndex - 1) < (0)){
      index = tabsArray.length - 1
      $state.go(tabsArray[index])

    } else {
      index = currentIndex - 1
      $state.go(tabsArray[index])

    }
    console.log("This is index: " + index)
    return index
  }

})
