'use strict';

const valueTRUE = 1;
const valueFALSE = 'a';

const Quark = require('../isNotEmptyMoneyMongooseValidate');

const validatedTRUE = Quark.validator(valueTRUE);
const validatedFALSE = Quark.validator(valueFALSE);

console.log(valueTRUE + ' is Not Empty Money?', validatedTRUE);
console.log(valueFALSE + ' is Not Empty Money?', validatedFALSE);