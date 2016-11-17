angular.module('app').component('drugUnitDetails', {
  templateUrl: 'components/blocks/drugUnitDetails/drugUnitDetails.html',
  bindings: {
    unit: '<'
    // reloadItem: '&'
  },
  controller: DrugUnitDetailsController

});

function DrugUnitDetailsController(ngDialog, api) {
  var ctrl = this;
  ctrl.loaded = false;
  ctrl.selectedDepot = null;

  api.getDepotsLookup()
    .then(function(lookup) {
      ctrl.depots =  lookup.DepotsList;
      ctrl.loaded = true;
      ctrl.selectedDepot = $.grep(ctrl.depots, function(e){ return e.Value == ctrl.unit.DepotId; })[0];
    });


  ctrl.saveDetails = function () {
    var selectedDepot = ctrl.selectedDepot;
    ctrl.unit.DepotId = selectedDepot != null ? selectedDepot.Value : null;   
    api.saveDrugUnit(ctrl.unit.DrugUnitId, ctrl.unit)
      .then(function() {
        ngDialog.closeAll();
      });
  };
}

