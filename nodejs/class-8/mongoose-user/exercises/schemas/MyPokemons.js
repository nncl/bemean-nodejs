/**
 * User's Schema
 */

'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
    my_pokemons: [{type: Schema.ObjectId, ref: 'Pokemon'}]
};

const pokemonSchema = new Schema(_schema);

module.exports = pokemonSchema;