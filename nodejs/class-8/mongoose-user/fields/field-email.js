'use strict';

/**
 * Vai salvar sempre minúsculo
 */

const _set = (value) => value.toLowerCase();
const _validate = (value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);

const field = {
    type: String
    , set: _set
    , validate: [_validate, 'Invalid email address: ({VALUE})']
    , required: true
    , index: true
};

module.exports = field;

