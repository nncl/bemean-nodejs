'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

const greaterThanEighteen = age => age >= 18;

const UserSchema = new Schema({
    age: {
        type: Number
        , validate: {
            validator: greaterThanEighteen
            , message: 'Your age ({VALUE}) is not permitted'
        }
    }
});

module.exports = mongoose.model('user', UserSchema);