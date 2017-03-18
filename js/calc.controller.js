angular.module('calcApp')
    .controller('calcCtrl', ['$http', function($http) {
        var calc = this;
        
        calc.num_buttons = [];
        calc.op_buttons = [];
        
        calc.sequence = "12 + 4 - 35 \u00F7 2 \u00D7 2 \n 45";
        
        calc.addToSequence = function(e) {
            var type = e.target.dataset['type'];
            var val = e.target.dataset['char'];
            
            if (type == 'op' && calc.sequence.charAt(calc.sequence.length-1) == val) {
                return;
            }
            
            calc.sequence += val;
        };
    }]);