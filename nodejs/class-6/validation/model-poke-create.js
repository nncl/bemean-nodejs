'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    name: String
};

const pokemonSchema = new Schema(_schema);

const data = {
    name : 'Cauerizard'
};

var PokemonModel = mongoose.model('pokemon', pokemonSchema);

// var poke = new Model(data);

const Cauemon = new PokemonModel(data);

// SAVE DOES NOT SAVE AUTOMATICALLY, CREATE DOES

// Cauemon.save(function (err, data) {
//     if (err) return console.log('error: ' + err);
//
//     console.log('Inserted successfully:', data);
// });

// OR

PokemonModel.create(data, function (err, data) {
    if (err) return console.log('ERROR DUDE' , err);

    console.log('Created successfully:', data);
});

module.exports = pokemonSchema;
