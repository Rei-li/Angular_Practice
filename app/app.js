'use strict';

// Declare app level module which depends on views, and components
const app = angular.module('app', [
    'ngRoute',
    'ngResource',
    'ngDialog',
    'myApp.config',

    'myApp.view1',
    'myApp.view2',
    'myApp.version',

    'myApp.userInfo',
    'myApp.menuBar',
    'myApp.accordionPanel',
    'myApp.accordion'
  ])
  .config(['$locationProvider', '$routeProvider', '$resourceProvider', 'ngDialogProvider', function ($locationProvider, $routeProvider, $resourceProvider, ngDialogProvider) {

    $routeProvider
      .when('/', {
        controller: 'View1Ctrl',
        templateUrl: 'view1/view1.html'
      })
      .when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      })
      .when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
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
