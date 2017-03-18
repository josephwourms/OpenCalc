angular.module('calcApp')
    .component('calcBtnOp', {
        templateUrl: '/js/calc-btn-op/calc-btn-op.template.html',
        bindings: {
            value: '@',
        },
        controller: 'calcBtnOpCtrl'
    })