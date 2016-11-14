angular.module('app').component('menu', {
  templateUrl: 'components/blocks/menu/menu.html',
  controller: MenuController
});

function MenuController($scope, $element, $attrs) {
  var ctrl = this;

  // This would be loaded by $http etc.
  ctrl.linksList = [
    {
      value: '/#/view1',
      text: 'View1'
    },
    {
      value: '/#/view2',
      text: 'View2'
    }
  ];

}
