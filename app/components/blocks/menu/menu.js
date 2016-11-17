angular.module('app').component('menu', {
  templateUrl: 'components/blocks/menu/menu.html',
  controller: MenuController
});

function MenuController() {
  var ctrl = this;
  ctrl.linksList = [
    {
      value: '/#/depots',
      text: 'Depots'
    },
    {
      value: '/#/units',
      text: 'Drug Units'
    }
  ];

}
