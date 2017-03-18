angular.module('calcApp')
    .controller('calcDisplayCtrl', ['$scope', function($scope) {
        var display = this;
        
        display.currentString = "25 \u00F7 5 = 5";

        var displayElmnt = $('#display');
        var lastElmnt    = $('<p id="last" class="displayText">Hello</p>');
        var currentElmnt = $('<p id="current class="displayText"></p>');

        currentElmnt.html(display.currentString);
        displayElmnt.append(currentElmnt);
        displayElmnt.append(lastElmnt);
    }]);