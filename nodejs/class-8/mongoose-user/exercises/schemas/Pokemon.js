/**
 * User's Schema
 */

'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pokemons');

const Schema = mongoose.Schema;

const _schema = {
    name: {type : String}
    , type : {type : String}
};

const pokemonSchema = new Schema(_schema);

module.exports = pokemonSchema;