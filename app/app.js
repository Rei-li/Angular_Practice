'use strict';

const app = angular.module('app', [
    'ngDialog',
    'myApp.api',
    'myApp.router'
  ])
  .component('app', {
    templateUrl: 'app.html'
  });
