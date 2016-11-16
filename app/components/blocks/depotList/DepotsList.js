angular.module('app').component('depotList', {
  templateUrl: 'components/blocks/depotList/depotsList.html',
  controller: DepotListController

});

function DepotListController($scope, api) {
  $scope.loaded = false;
  var ctrl = this;

  api.getDepots()
    .then(function(list) {
      ctrl.depotsList = list;
      $scope.loaded = true;
    });
}
