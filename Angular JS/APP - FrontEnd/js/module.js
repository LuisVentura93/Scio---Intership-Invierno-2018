var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        controller: "FirstController",
        controller: "SecondController",
        controller: "ThirdController",
        templateUrl : "../Index.html"
    })
    .when("/comments", {
        controller: "FirstController",
        templateUrl : "../commentsection.html"
    })
    .when("/register", {
        controller: "SecondController",
        controller: "ThirdController",
        templateUrl : "../register.html"
    })
});