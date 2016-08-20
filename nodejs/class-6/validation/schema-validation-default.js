'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    name: String,
    age: Number
};

const pokemonSchema = new Schema(_schema);

// WILL GIVE ERROR
const data = {
    name: {test: 1},
    age: 'bazinga'
};

var Model = mongoose.model('pokemons', pokemonSchema);

var poke = new Model(data);

poke.save(function (err, data) {
    if (err) return console.log('error: ' + err);

    console.log('Inserted successfully:', data);
});

module.exports = pokemonSchema;