'use strict';

var Calc = require('./ex_01_mocha');
var assert = require('assert');

describe('Calc', ()=> {

    describe('Sum of two numbers', ()=> {
        it('function sum returns the sum of two numbers', ()=> {
            const sum = Calc.sum(5,5);
            assert.equal(10, sum);
            assert.deepEqual(10, sum);
            assert.deepStrictEqual(10, sum);
        });
    });

    describe('Subtraction of two numbers', ()=> {
        it('function subtraction returns the subtraction of two numbers', ()=> {
            const subtraction = Calc.subtraction(5,5);
            assert.equal(0, subtraction);
            assert.deepEqual(0, subtraction);
            assert.deepStrictEqual(0, subtraction);
        });
    });

});
