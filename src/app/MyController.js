var app = angular.module('myApp', ['ngMaterial']);
app.controller('MyController', function($scope, $mdSidenav) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
	console.log("this is a test")
  };
});
