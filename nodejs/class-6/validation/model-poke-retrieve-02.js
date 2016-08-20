'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    name: String
};

const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('pokemons', pokemonSchema);

const query = {
    name : 'Cauemon'
};

const callback = function(err, data) {
    if (err) return console.log('Error mannnn:', err);

    return console.log('Searched for::::', data);
};

PokemonModel.find(query).where({_id : '57b4f5d9e408adda04aaa99f'}).exec(callback);
// PokemonModel.find(query).exec(callback);
// PokemonModel.find(query).where().exec(callback);