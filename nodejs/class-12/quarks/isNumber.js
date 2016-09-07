/**
 * @description
 * Check if value is a number
 *
 * @param {String} v Value being checked
 */

'use strict';

module.exports = (v) => {
    if (!isNaN(v) && isFinite(v)) return true;
    return false;
};
