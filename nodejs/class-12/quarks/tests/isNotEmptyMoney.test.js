'use strict';

const valueTRUE = 1;
const valueFALSE = 0;
const value2FALSE = 'a';

const validatedTRUE = require('../isNotEmptyMoney')(valueTRUE);
const validatedFALSE = require('../isNotEmptyMoney')(valueFALSE);
const validated2FALSE = require('../isNotEmptyMoney')(value2FALSE);

console.log(valueTRUE + ' is isNotEmptyMoney?', validatedTRUE);
console.log(valueFALSE + ' is isNotEmptyMoney?', validatedFALSE);
console.log(value2FALSE + ' is isNotEmptyMoney?', validated2FALSE);