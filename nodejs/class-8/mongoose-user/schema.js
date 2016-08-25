/**
 * User's Schema
 */

'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-user-test');

const Schema = mongoose.Schema;

const _schema = {
    name: require('./fields/field-name')
    , password: require('./fields/field-password')
    , email: require('./fields/field-email')
    , type: require('./fields/field-type')
    , created_at: require('./fields/field-created_at')
};

const userSchema = new Schema(_schema);

const _userData = {
    name: 'Dayara Tropiani'
    , password : '098765432'
    , email : 'dtropiani@outlook.com'
    , type : ['f']
};

const User = mongoose.model('User', userSchema);

User.create(_userData, (err, user) => {
    if (err) return console.log('Error', err);

    return console.log('Success', user);
});

// User.findOne({}, (err, user) => {
//     if (err) return console.log('Error', err);
//
//     return console.log('Name', user.name);
// });

module.exports = userSchema;
