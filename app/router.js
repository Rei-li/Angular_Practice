angular.module('myApp.router', [
    'ngRoute'
  ])
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $routeProvider
      .when('/', {
        template: '<depot-list></depot-list>'
      })
      .when('/depots', {
        template: '<depot-list></depot-list>'
      })
      .when('/units', {
        template: '<drug-units-list></drug-units-list>'
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
  }]);
