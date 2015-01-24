'use strict';

angular.module('fireoflondonApp')
  .config(['$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('article', {
        url: '/news/article/:articleId/:articleName',
        templateUrl: '/scripts/news/article/article.html',
        data: {
          public: true
        },
        resolve: {
          post: ['$stateParams', 'Post', function ($stateParams, Post) {
              return Post.get({ articleId: $stateParams.articleId }).$promise;
          }],
          posts: ['Posts', function (Posts) {
            return Posts.query();
          }]
        },
        controller: ['$scope', '$stateParams', 'post', 'posts', function ($scope, $stateParams, post, posts) {
          $scope.post = post;
          $scope.posts = posts;
        }]
      });
    }
  ]);
