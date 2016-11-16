'use strict';

// Declare app level module which depends on views, and components
const app = angular.module('app', [
    'ngRoute',
    'ngResource',
    'ngDialog',
    'myApp.config',
    'myApp.api',

    // 'myApp.view1',
    // 'myApp.view2',
    'myApp.version',

    'myApp.userInfo',
    'myApp.menuBar',
    'myApp.accordionPanel',
    'myApp.accordion'
  ])
  .config(['$locationProvider', '$routeProvider', '$resourceProvider', 'ngDialogProvider', function ($locationProvider, $routeProvider, $resourceProvider, ngDialogProvider) {

    $routeProvider
      .when('/', {
        template: '<depot-list></depot-list>'
        // templateUrl: 'view1/view1.html'
      })
      .when('/view1', {
        template: '<depot-list></depot-list>'
        // templateUrl: 'view1/view1.html'
      })
      .when('/view2', {
        template: '<drug-units-list></drug-units-list>'
        // templateUrl: 'view2/view2.html'
      })
      .otherwise({
        redirectTo: '/'
      });

    if(window.history && window.history.pushState){
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }

    $resourceProvider.defaults.stripTrailingSlashes = false;
    ngDialogProvider.setForceHtmlReload(true);
  }])
  .component('app', {
    templateUrl: 'app.html'
  });
