angular.module('myApp.api', [
    'ngResource',
    'myApp.config'
  ])
  .service('api', function($resource, appConfig) {
    var depotsResource = $resource(`${appConfig.backend}/depots` );
    var depotsLookupresource = $resource(`${appConfig.backend}/depots/lookup` );      
    var drugUnitsResource = $resource(`${appConfig.backend}/units` );
    var drugUnitResource  = function (id) {
     return $resource(
        `${appConfig.backend}/units/:unitId`,
        {
          unitId:id
        },
        {
          save: {
            method: 'POST'
          }
        });
    };
      
     

    this.getDepots = function () {
      return depotsResource.query().$promise;
    };

    this.getDepotsLookup = function () {
      return depotsLookupresource.get().$promise;
    };
    
    this.getDrugUnits = function () {
      return drugUnitsResource.query().$promise;
    };

    this.getDrugUnit = function (id) {
      return drugUnitResource(id).get().$promise;
    };

    this.saveDrugUnit = function (id, unit) {
      return drugUnitResource(id).save(unit).$promise;
    }

  });
