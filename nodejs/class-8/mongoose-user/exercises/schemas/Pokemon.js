/**
 * User's Schema
 */

'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
    name: {type : String, required : true}
    , type : {type : String}
};

const pokemonSchema = new Schema(_schema);

module.exports = pokemonSchema;