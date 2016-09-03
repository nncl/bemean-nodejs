'use strict';

const User = require('./schema-validate-age');
const expect = require('chai').expect;

describe('User Validate', () => {

    describe('Age validator to 18 or older', ()=>{
        it('age only accept 18 or greater', ()=>{
            let u = new User();
            u.age = 24;

            expect(u.validateSync()).to.be.undefined; // do not exist any error
        });
    });

    describe('Age validator 17 or younger', ()=>{
        it('age only accept 17 or younger', ()=>{
            let u = new User();
            u.age = 2;
            const validate = u.validateSync();
            expect(validate.message).to.be.eq('user validation failed');
            expect(validate.errors).to.be.exist; // errors exist
        });
    });

});