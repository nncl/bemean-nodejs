/**
 * Receives an Array or many values and returns the sum
 */

'use strict';

const slice = Array.prototype.slice;

let add = function () {
    const args = arguments;
    const arr = Array.isArray(args[0]) ? args[0] : slice.call(arguments, 0);

    // 0 cause it's a sum
    return arr.reduce(addArr, 0);
};

const addArr = (a, b) => {
    return a += b;
};

module.exports = add;