'use strict';

angular.module('fireoflondonApp')
  .config(['$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('home', {
        url: '/home',
        templateUrl: '/scripts/home/home.html',
        data: {
          public: true
        },
        resolve: {
          posts: ['Posts', function (Posts) {
              return Posts.query();
          }]
        },
        controller: ['$scope', 'posts', function ($scope, posts) {
          $scope.posts = posts;
        }]
      });
    }
  ]);
