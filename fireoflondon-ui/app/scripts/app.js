'use strict';

/**
 * @ngdoc overview
 * @name fireoflondonApp
 * @description
 * # fireoflondonApp
 *
 * Main module of the application.
 */
angular
  .module('fireoflondonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'configuration',
    'ui.router',
    'UserApp'
  ])
  .run(['$rootScope', '$state', '$stateParams', 'user',
    function ($rootScope, $state, $stateParams, user) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
      //user.init({ appId: '54725ba38d078' });
      $rootScope.$on('$stateChangeSuccess', function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      });
    }
  ])
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');
  }]);

