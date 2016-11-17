angular.module('app').component('depotList', {
  templateUrl: 'components/blocks/depotList/depotsList.html',
  controller: DepotListController

});

function DepotListController(api) {
  var ctrl = this;
  ctrl.loaded = false;
  
  api.getDepots()
    .then(function(list) {
      ctrl.depotsList = list;
      ctrl.loaded = true;
    });
}
