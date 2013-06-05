var appModule = angular.module( "app", [] );

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

function SomeController($scope) {

  $scope.message = {text: "nothing clicked yet"};

  $scope.clickUnfocused = function() {
    $scope.message.text = "Unfocused button clicked";
  };

  $scope.clickFocused = function() {
    $scope.message.text = "Focused button clicked";
  };
}
