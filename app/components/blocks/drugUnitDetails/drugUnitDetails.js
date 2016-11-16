angular.module('app').component('drugUnitDetails', {
  templateUrl: 'components/blocks/drugUnitDetails/drugUnitDetails.html',
  bindings: {
    unit: '<'
    // reloadItem: '&'
  },
  controller: DrugUnitDetailsController

});

function DrugUnitDetailsController($scope, $resource, $http, appConfig, ngDialog) {
  var ctrl = this;
  $scope.loaded = false;
  $scope.selectedDepot = null;

  $resource(`${appConfig.backend}/depots/lookup` )
    .get()
    .$promise
    .then(function(lookup) {
      $scope.depots =  lookup.DepotsList;
      $scope.loaded = true;
      $scope.selectedDepot = $.grep($scope.depots, function(e){ return e.Value == ctrl.unit.DepotId; })[0];

    });


  $scope.saveDetails = function () {
    var selectedDepot = $scope.selectedDepot;
    ctrl.unit.DepotId = selectedDepot != null ? selectedDepot.Value : null;
    var unit = $resource(
      `${appConfig.backend}/units/:unitId`,
      {
        unitId:ctrl.unit.DrugUnitId
      },
      {
        save: {
          method: 'POST'
        }
      });
    unit
      .save(ctrl.unit).$promise
      .then(function() {
        ngDialog.closeAll();
      });
  };
}

