/**
 * @description
 * Check if money is not empty
 *
 * @param {String | Number} v Value being checked
 */

'use strict';

module.exports = (v) => {
    // Base validation
    let validated = require('./isEmpty')(v);
    if (validated) return false;

    // Verify if is number
    validated = require('./isNumber')(v);
    if (validated) {

        // Verify if is greater than 0
        if (v > 0) return true;
        return false;
    }

    return false;
};
