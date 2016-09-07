'use strict';

module.exports = {
    type: String
    , required: true
    , validate: require('../quarks/quark-validate-string-lengthGTE3')
};
