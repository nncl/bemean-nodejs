'use strict';

// const _get = (value) => value.toUpperCase();
// const _set = (value) => value.toLowerCase();
const _validate = (name) => name.length > 6 && name.length < 10;

const field = {
    type: String
    // , get: _get
    // , set: _set
    , validate: [_validate, 'Password needs to be greater than 6 characters and lower than 10 characters.']
    , required: true
};

module.exports = field;

