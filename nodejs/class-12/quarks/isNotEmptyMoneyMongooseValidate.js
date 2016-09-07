/**
 * @description
 * Check if money is not empty by Mongoose quark
 *
 * @param {String | Number} v Value being checked
 */

'use strict';

module.exports = {
    validator: (v) => {
        return require('./isNotEmptyMoney')(v)
    }
    , 'message': 'The value {VALUE} to the field needs to be a number and greater than 0.'
};
