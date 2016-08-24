/**
 * Creating static methods
 *
 * Will be available in the MODEL, now in the object instance.
 */

'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Schema = mongoose.Schema;

const _schema = {
    name: String
    , type: String
    , description: String
    , attack: Number
    , defense: Number
    , height: Number
};

const PokemonSchema = new Schema(_schema);

/**
 * Returns searched pokemons
 *
 * @param {String} name To be searched
 * @returns {Object} Returns
 */

PokemonSchema.statics.search = function (name, cb) {
    return this.where('name', new RegExp(name, 'i')).exec(cb);
};

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

Pokemon.search('Squirtle', (err, data)=> {
    if (err) return console.log('ERROR', err);
    return console.log('Searched', data);
});
