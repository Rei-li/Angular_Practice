angular.module('app').component('drugUnitsListItem', {
  templateUrl: 'components/blocks/drugUnitList/__item/drugUnitsList__item.html',
  bindings: {
    unit: '<'
  },
  controller:DrugUnitsListItemController 
});

function DrugUnitsListItemController($scope,ngDialog, $rootScope, $resource, appConfig ){
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
        var unit = $resource(
          `${appConfig.backend}/units/:unitId`,
          {
            unitId:ctrl.unit.DrugUnitId
          },
          {
            save: {
              method: 'POST'
            },
            get: {
              method: 'GET'
            }
          });
        unit.get().$promise
          .then(function(result) {
            ctrl.unit = result;
          });
      });
    };
  };
} 
