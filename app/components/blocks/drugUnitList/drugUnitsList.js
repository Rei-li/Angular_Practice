angular.module('app').component('drugUnitsList', {
  templateUrl: 'components/blocks/drugUnitList/drugUnitsList.html',
  controller: DrugUnitsListController
});

function DrugUnitsListController($scope, api) {
  this.$onInit = function () {
    $scope.loaded = false;
    var ctrl = this;
   
    api.getDrugUnits()
      .then(function(list) {
        ctrl.drugUnitsList = list;
        $scope.loaded = true;
      });
  };  
}
