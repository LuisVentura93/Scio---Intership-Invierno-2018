var app=angular.module("MyFirstApp", [])
app.controller("FirstController", function($scope){
    $scope.name="Luis";
    $scope.points = [1, 15, 19, 2, 40];
})