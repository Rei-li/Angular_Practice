angular.module('app').component('drugUnitsListItem', {
  templateUrl: 'components/blocks/drugUnitList/__item/drugUnitsList__item.html',
  bindings: {
    unit: '<'
  },
  controller:DrugUnitsListItemController 
});

function DrugUnitsListItemController($scope,ngDialog, $rootScope, api ){
  var ctrl = this;
  this.$onInit = function () {
    $scope.showDetails = function (unit) {
      ngDialog.open({
        template: '<drug-unit-details unit="unit" ></drug-unit-details>',
        plain: true,
        controller: function($scope){
          $scope.unit = unit.unit;
        }
      });

      $rootScope.$on('ngDialog.closing', function () {
        api.getDrugUnit(ctrl.unit.DrugUnitId)
          .then(function(result) {
            ctrl.unit = result;
          });
      });
    };
  };
} 
