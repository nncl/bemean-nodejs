/**
 * User's Schema
 */

'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pokemons');

const Schema = mongoose.Schema;

const _schema = {
    my_pokemons: [{
        pokemon: Schema.Types.ObjectId,
        ref: 'pokemons'
    }]
};

const pokemonSchema = new Schema(_schema);

module.exports = pokemonSchema;