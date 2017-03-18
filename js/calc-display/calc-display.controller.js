angular.module('calcApp')
    .controller('calcDisplayCtrl', [function() {
        var display = this;
        
        display.currentString = "25 \u00F7 5 = 5";
    }]);