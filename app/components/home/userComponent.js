(() => {
  'use strict';

  const app = angular.module('myApp.userInfo', ['ngRoute']);

  app.component('userInfo', {
    // Pass name of the table through attribute name:
    // <user-info name="myTableName"><user-info>
    bindings: {
      name: '<'
    },
    templateUrl: '/components/home/userComponent.html',
    controller: function () {
      this.records = [{
        name: "Alfreds Futterkiste",
        city: "Berlin",
        country: "Germany"
      }, {
        name: "Ana Trujillo Emparedados y helados",
        city: "México D.F.",
        country: "Mexico"
      }, {
        name: "Blondel père et fils",
        city: "Strasbourg",
        country: "France"
      }, {
        name: "Bólido Comidas preparadas",
        city: "Madrid",
        country: "Spain"
      }];

    }
  });
})();
