angular.module('calcApp')
    .controller('calcBtnNumCtrl', [function() {
        var btn = this;
    
        btn.$onInit = function() {
            btn.onClick = function() {
                console.log(btn.value);
            };
        };
    }]);