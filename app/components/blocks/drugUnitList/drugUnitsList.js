angular.module('app').component('drugUnitsList', {
  templateUrl: 'components/blocks/drugUnitList/drugUnitsList.html',
  controller: DrugUnitsListController

});

function DrugUnitsListController($scope, $resource, appConfig) {
  $scope.loaded = false;
  var ctrl = this;
  $resource(`${appConfig.backend}/units` )
    .query()
    .$promise
    .then(function(list) {
      ctrl.drugUnitsList = list;
      $scope.loaded = true;
    });
}
