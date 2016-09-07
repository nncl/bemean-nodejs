'use strict';

const value = null;

const validate = require('./isEmpty')(value);

console.log('Is null?', validate);