/**
 * Spec => Expectativo
 */

'use strict';

const assert = require('assert');
const log = require('./log');

/*
 * We want that the 1st string matches 2nd one
 */

assert.equal('hello world', log('hello world'));
assert.equal('hello world!', log('hello world!'));