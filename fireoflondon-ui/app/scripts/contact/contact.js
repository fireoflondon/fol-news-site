'use strict';

angular.module('fireoflondonApp')
  .config(['$stateProvider',
      function ($stateProvider) {
          $stateProvider.state('contact', {
              url: '/contact',
              templateUrl: '/scripts/contact/contact.html',
              controller: ['$scope', function ($scope) {

              }]
          });
      }
  ]);
