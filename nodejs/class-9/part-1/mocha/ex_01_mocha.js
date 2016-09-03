'use strict';

function Calc() {
    return {
        sum: sum
        , subtraction: subtraction
    };

    function sum(a, b) {
        return a + b;
    }

    function subtraction(a, b) {
        return a - b;
    }
}

module.exports = Calc();
