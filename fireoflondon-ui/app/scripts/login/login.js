'use strict';

angular.module('fireoflondonApp')
  .config(['$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('login', {
        url: '/login',
        templateUrl: '/scripts/login/login.html',
        data: {
          login: true
        },
        controller: ['$scope', function ($scope) {
        }]
      });
    }
  ]);
