var appModule = angular.module( "app", ["ngResource"] );

appModule.directive( "ngbkFocus", function() {
  return {link: function(scope, element, attrs, controller) {
    element[0].focus();
  }};
});

function NamesListCtrl($scope, $http) {

  $http.get('http://server/names', {params: {filter: 'none'}}).
      success(function(data) {
        $scope.names = data;
      });

}

function MainCtrl($scope, Posts) {

  Posts.getPosts().success(function(data){
    $scope.posts = data.posts;
  });

}

appModule.directive("boldClick", function() {

  return function(scope, element) {
    var bold = false;
    element.bind( 'click', function(){
      if (bold) {
        element.css('font-weight', 'normal');
      }
      else {
        element.css('font-weight', 'bold');
      }
      bold = !bold;
    });
  };

});

appModule.service( "Posts", function($http) {

  this.getPosts = function() {
    return $http.get("data.json"); 
  };

});

function SomeController($scope, Posts) {

  $scope.message = {text: "nothing clicked yet"};

  $scope.clickUnfocused = function() {
    $scope.message.text = "Super  Unfocused button clicked";
    
    Posts.getPosts().success(function(data){
      $scope.posts = data.posts;
    });

    
  };

  $scope.clickFocused = function() {
    $scope.message.text = "Focused button clicked";
  };
}
