var app=angular.module("MyFirstApp", ["ngRoute"])
app.controller("FirstController", function($scope, $http){
    $scope.anything="";
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
    $scope.myFunc = function(myE) {
        $scope.x = myE.clientX;
        $scope.y = myE.clientY;
    }
});

app.controller("SecondController", function($scope, $http){
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
            id: $scope.newPost.id,
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
    $scope.showMe = false;
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
});

app.controller('ThirdController', ['$scope', 'notify', function($scope, notify) {
    $scope.callNotify = function(msg) {
      notify(msg);
    };
  }]).
 factory('notify', ['$window', function(win) {
    var msgs = [];
    return function(msg) {
      msgs.push(msg);
      if (msgs.length === 3) {
        win.alert(msgs.join('\n'));
        msgs = [];
      }
    };
  }]);

  it('should test service', function() {
    expect(element(by.id('simple')).element(by.model('message')).getAttribute('value'))
        .toEqual('test');
  });