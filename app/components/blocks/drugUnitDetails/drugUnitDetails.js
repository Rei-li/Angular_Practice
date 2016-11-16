angular.module('app').component('drugUnitDetails', {
  templateUrl: 'components/blocks/drugUnitDetails/drugUnitDetails.html',
  bindings: {
    unit: '<'
    // reloadItem: '&'
  },
  controller: DrugUnitDetailsController

});

function DrugUnitDetailsController($scope, ngDialog, api) {
  var ctrl = this;
  $scope.loaded = false;
  $scope.selectedDepot = null;

  api.getDepotsLookup()
    .then(function(lookup) {
      $scope.depots =  lookup.DepotsList;
      $scope.loaded = true;
      $scope.selectedDepot = $.grep($scope.depots, function(e){ return e.Value == ctrl.unit.DepotId; })[0];

    });


  $scope.saveDetails = function () {
    var selectedDepot = $scope.selectedDepot;
    ctrl.unit.DepotId = selectedDepot != null ? selectedDepot.Value : null;   
    api.saveDrugUnit(ctrl.unit.DrugUnitId, ctrl.unit)
      .then(function() {
        ngDialog.closeAll();
      });
  };
}

