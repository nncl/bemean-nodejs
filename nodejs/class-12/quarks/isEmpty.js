/**
 * @description
 * Check if value is empty
 *
 * @param {String} v Value being checked
 */

'use strict';

module.exports = (v) => {
    const isNull = (v === null);
    const isUndefined = (v === undefined);
    const isEmpty = (v === '');

    if (isNull || isUndefined || isEmpty) return true;

    return false;
};
