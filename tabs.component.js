(function() {
    'use strict';

    angular
        .module('tabApp')
        .component('tabs', TabsComponent());


    function TabsComponent() {

        function tabsController() {
            var vm = this;

            init();

            function init() {
                vm.$onInit = function() {
                    vm.tabs = [];
                }

                vm.addTab = function(tab) {
                    vm.tabs.push(tab);
                    if (vm.tabs.length > 0) {
                        vm.tabs[0].selected = true;
                    }
                };

                vm.selectTab = function(index) {
                    for (var i = 0; i < vm.tabs.length; i++) {
                        vm.tabs[i].selected = false;
                    }
                    vm.tabs[index].selected = true;
                };
            }
        }

        return {
            transclude: true,
            templateUrl: 'tabs.tpl.html',
            controller: tabsController,
            controllerAs: 'tabsCtrl'
        };
    }

}());