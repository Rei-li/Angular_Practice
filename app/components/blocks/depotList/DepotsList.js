angular.module('app').component('depotList', {
  templateUrl: 'components/blocks/depotList/depotsList.html',
  controller: DepotListController

});

function DepotListController($scope, $resource, appConfig) {
  $scope.loaded = false;
  var ctrl = this;
  $resource(`${appConfig.backend}/depots` )
    .query()
    .$promise
    .then(function(list) {
      ctrl.depotsList = list;
      $scope.loaded = true;
    });
}
