'use strict';

const mongoose = require('mongoose');
const util = require('util');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const log = require('./log');

mongoose.connect('mongodb://localhost/test');

function pokemonHandler() {
    const schema = new Schema({
        id: ObjectId
        , name: {type: String, trim: true}
        , type: {type: String, trim: true}
        , attack: {type: Number}
        , defense: {type: Number}
        , height: {type: Number}
        , description: {type: String, trim: true}
    });

    schema.pre('save', true, function (next, done) {
        util.log('before save');
        log('model', '${this.name} ${this.id} has been saved.', done);
        next();
    });

    schema.post('save', true, function (doc) {
        util.log('%s has been saved', doc.name);
    });

    schema.post('remove', true, function (doc) {
        util.log('%s has been removed', doc.name);
        log('model', '${doc.name} ${doc.id} has been removed.');
    });

    return mongoose.model('Pokemon', schema);
}

module.exports = pokemonHandler;