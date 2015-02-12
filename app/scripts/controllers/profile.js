'use strict';

app.controller('profileCtrl', function ($scope, $routeParam, Profile) {
  var uid = $routeParams.userId;

  $scope.profile = Profile.get(uid);
  Profile.getPosts(uid).then(function(posts) {
    $scope.posts = posts;
  });
});
