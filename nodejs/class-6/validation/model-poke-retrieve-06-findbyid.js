
/**
 * findById() is the same as findOne({_id : param})
 *
 * If param is undefined, it converts to null value
 */

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

const id = '57b4f32ddd251c7a043d9e70';

// findOne: first pokemon we find

PokemonModel.findById(id, function (err, data) {
    if (err) return console.log('Error mannnn:', err);

    console.log('Searched findById for::::', data);
});
