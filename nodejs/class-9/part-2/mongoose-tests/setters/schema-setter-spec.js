'use strict';

const User = require('./schema-setter');
const expect = require('chai').expect;
const _email = 'NNCL@LIVE.com';

describe('User`s Schema test', () => {

    describe('Setter to Uppercase Test', ()=>{
        it('email saved as lowercase on database', ()=>{
            const user = new User({email : _email});
            expect(user.email).to.be.equal(_email.toLowerCase());
        });
    });

});