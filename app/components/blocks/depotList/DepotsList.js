angular.module('app').component('depotList', {
  templateUrl: 'components/blocks/depotList/depotsList.html',
  controller: DepotListController

});

function DepotListController($resource, appConfig) {
  var ctrl = this;
  $resource(`${appConfig.backend}/depots` )
    .query()
    .$promise
    .then(function(list) {
    ctrl.depotsList = list;
  });
}
