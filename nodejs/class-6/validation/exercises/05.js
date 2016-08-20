
/**
 * Remova **todos** os pokemons com **attack > 50**.
 */

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    name: String
    , attack: Number
    , deffense: Number
};

const pokemonSchema = new Schema(_schema);

const Model = mongoose.model('pokemons', pokemonSchema);

const query = {attack : 50};

Model.remove(query, (err, data) => {
    if (err) return console.log('Error mannn:', err);

    console.log('Deleted dude:', data);
});

// Model.find(query, (err, data) => {
//     if (err) return console.log('Error mannn:', err);
//
//     console.log('Found:', data);
// });
