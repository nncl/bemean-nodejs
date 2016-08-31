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

module.exports = userSchema;