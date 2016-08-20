
/**
 *
 * Busque **todos** os pokemons com **attack > 50 e height > 0.5**.
 *
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

const query = {attack : {$gt : 50}, height : {$gt : 1/2}};
const fields = {attack : 1, name : 1};

Model.find(query, fields, function (err, data) {
    if (err) return console.log('Error mannn:', err);

    console.log('Searched for:', data);
});
