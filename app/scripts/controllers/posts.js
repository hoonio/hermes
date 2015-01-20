'use strict';

app.controller('PostsCtrl', function ($scope, $location, Post) {
  // $scope.posts = Post.get();
  $scope.posts = Post.all;
  $scope.post = {url: 'http://', title: ''};

/*
  $scope.submitPost = function () {
    Post.create($scope.post).then(function () {
      $location.path('/posts/' + ref.name());
      $scope.post = {url: 'http://', title: ''};
    });
    // $scope.posts.push($scope.post);
  };
*/

  $scope.deletePost = function (postId) {
    Post.delete(post);
    /*
    Post.delete({id: postId}, function () {
      delete $scope.posts[postId];
    });
    */
    // $scope.posts.splice(index, 1);
  };
});
