'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    name: String
};

const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('pokemons', pokemonSchema);

const query = {
    name : /caUEmon/i
};

const fields = {name : 1};

// findOne: first pokemon we find

PokemonModel.findOne(query, fields, function (err, data) {
    if (err) return console.log('Error mannnn:', err);

    console.log('Searched for::::', data);
});
