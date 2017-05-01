(function() {
    'use strict';

    angular
        .module('tabApp')
        .component('tab', TabComponent());


    function TabComponent() {

        function tabController() {
            var vm = this;

            init();

            function init() {
                vm.$onInit = function() {
                    vm.tab = {
                        label: vm.label,
                        selected: false
                    };

                    vm.tabs.addTab(vm.tab);
                }
            }
        }

        return {
            bindings: {
                label: '@'
            },
            require: {
                tabs: '^^tabs'
            },
            transclude: true,
            templateUrl: 'tab.tpl.html',
            controller: tabController,
            controllerAs: 'tabCtrl'
        };
    }

}());