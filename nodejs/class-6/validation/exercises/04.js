
/**
 * Altere, **inserindo**, o pokemon **Nerdmon** com **attack = 49**
 * e com os valores dos outros campos à sua escolha.
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

const query = {attack : {$gt : 1}};
const mod = {attack : 29};
const options = {upsert : true, multi : true};

Model.update(query, mod, options, (err, data) => {
    if (err) return console.log('Error mannn:', err);

    console.log('Updated to:', data);
});
