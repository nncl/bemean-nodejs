'use strict';

const field = {
    type: String
    , enum: {
        values : ['m', 'f']
        , message : 'Invalid value dude: ({VALUE})'
    }
    , required: true
};

module.exports = field;

