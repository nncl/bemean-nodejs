'use strict';

/**
 * Data inserted by user will be transformed
 *  to uppercase.
 *
 * @param {String} value
 * @returns {String}
 */

const _get = (value) => {
    return value.toUpperCase();
};

/**
 * Data will be saved in lowercase.
 *
 * @param {String} value
 * @returns {String}
 */

const _set = (value) => value.toLowerCase();

/**
 * Validate name. It needs to be greater than 3 characters.
 *
 * @param {String} name
 * @returns {Boolean}
 */

const _validate = (name) => name.length > 3;

const field = {
    type: String
    , get: _get
    , set: _set
    , validate: [_validate, 'Name needs to be greater than 3 characters']
    , required: true
    , index: true
};

module.exports = field;


