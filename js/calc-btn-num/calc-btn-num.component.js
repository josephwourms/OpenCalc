angular.module('calcApp')
    .component('calcBtnNum', {
        templateUrl: '/js/calc-btn-num/calc-btn-num.template.html',
        bindings: {
            value: '@'
        },
        controller: 'calcBtnNumCtrl',
    })