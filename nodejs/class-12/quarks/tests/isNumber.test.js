'use strict';

const valueTRUE = 1;
const valueFALSE = 'a';

const validatedTRUE = require('../isNumber')(valueTRUE);
const validatedFALSE = require('../isNumber')(valueFALSE);

console.log(valueTRUE + ' is Number?', validatedTRUE);
console.log(valueFALSE + ' is Number?', validatedFALSE);