/**
 * Working w/ Indexes
 */

'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Schema = mongoose.Schema;

const _schema = {
    name: String
    , email: String
    , created_at: {type: String, default: Date.now, index: true}
};

const userSchema = new Schema(_schema);

userSchema.index({name : 1, email : -1});

const userModel = mongoose.model('Usuario', userSchema);
const _user = {
    name: 'Dayara Tropiani'
    , email: 'dtropiani@outlook.com'
};

userModel.create(_user, (err, data)=> {
    if (err) return console.log('Error: ', err);

    return console.log('SUCCESS', data);
});