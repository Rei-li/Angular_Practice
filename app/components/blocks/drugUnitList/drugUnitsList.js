angular.module('app').component('drugUnitsList', {
  templateUrl: 'components/blocks/drugUnitList/drugUnitsList.html',
  controller: DrugUnitsListController
});

function DrugUnitsListController(api) {
  var ctrl = this;
  this.$onInit = function () {
    ctrl.loaded = false;
    api.getDrugUnits()
      .then(function(list) {
        ctrl.drugUnitsList = list;
        ctrl.loaded = true;
      });
  };  
}
