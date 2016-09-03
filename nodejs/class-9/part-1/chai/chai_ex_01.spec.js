'use strict';

var Calc = require('./chai_ex_01');
var expect = require('chai').expect;

describe('Calc', ()=> {

    describe('Sum of two numbers', ()=> {
        it('function sum returns the sum of two numbers', ()=> {
            const sum = Calc.sum(5,5);

            /**
             * Quando temos mais de uma EXPECTATIVA dentro de um teste
             * significa que estamos testando várias coisas, e se estamos
             * testamos várias coisas ao mesmo tempo estamos testando
             * comportamento -> BEHAVIOUR. Então estamos fazendo TDD e
             * BDD <- intro breve aqui.
             */

            expect(sum).to.be.a('number');
            expect(sum).to.equal(10);
            expect(Calc).to.have.property('sum');
        });
    });

    describe('Subtraction of two numbers', ()=> {
        it('function subtraction returns the subtraction of two numbers', ()=> {
            const subtraction = Calc.subtraction(5,5);
            expect(subtraction).to.be.a('number');
            expect(subtraction).to.equal(0);
            expect(Calc).to.have.property('subtraction');
        });
    });

});
