'use strict';

const expect = require('chai').expect;
const Person = require('./schema-person');
const util = require('util');

describe('Testing Virtual', () => {
    const user = {first: 'Caue', last: 'Almeida'};

    before(done => {
        Person.create({
            name: user
        }).then(person => {
            util.log(person);
            done();
        });
    });

    after(done => {
        Person.remove({
            name: user
        }).then(removed => {
            util.log(removed.result);
            done();
        });
    });

    describe('Virtual gave a concatenaed full name', () => {
        it('expect that full.name has first and last names', done => {
            Person.findOne({name: user}, (err, data) => {
                /*jshint expr: true*/
                expect(err).to.not.exist; // garantindo que o erro não existe
                expect(data.name.full).to.be.eq(user.first + ' ' + user.last); // garantindo o que o seu virtual tem que fazer
                done();
            });
        });
    });
});
