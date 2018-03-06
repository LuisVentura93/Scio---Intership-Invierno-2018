var app=angular.module("MyFirstApp", [])
app.controller("FirstController", function($scope, $http){
    $scope.name="Luis";
    $scope.points = [1, 15, 19, 2, 40];
    $scope.newComment = {};
    $scope.dailymailcommentsection = [
        {
            comment: "I think the Oscars show was very interesting",
            email: "luis.lmd9393@hotmail.com",
            userfirstname: "Luis",
            userlastname: "Ventura"
        },
        {
            comment: "I think politics must be blah, blah, blah...",
            email: "rod94@hotmail.com",
            userfirstname: "Rodrigo",
            userlastname: "Gutierrez"
        }
    ];
    $scope.AddNewComment = function() {
        $scope.dailymailcommentsection.push($scope.newComment);
        $scope.newComment = {};
    }
});

var app=angular.module("MyFirstApp", [])
app.controller("SecondController", function($scope, $http){
    $scope.posts=[];
    $scope.newPosts={};
    $http.get("https://jsonplaceholder.typicode.com/posts")
        .then(function(data){
            console.log(data);
            $scope.posts=data.data;
        },
        function(err){
            console("Error");
        });
    $scope.addPost=function(){
        $http.post("https://jsonplaceholder.typicode.com/posts",{
            title: $scope.newPost.title,
            body:  $scope.newPost.body,
            userId: 1
        })
            .then(function(data, status, headers, config){
                $scope.posts.push($scope.newPost);
                $scope.addPost={};
            },
            function(error, status, headers, config){
                console("Error");
            });
    }
});