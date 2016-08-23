/**
 * Creating methods into schema
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
 * Returns pokemons with the same type
 *
 * @param {String} cb Callback
 * @returns {Object} Returns ALSO a QUERY OBject
 */

PokemonSchema.methods.findSimilarType = function (cb) {
    return this.model('Pokemon').find({type: this.type}, cb);
};

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

const poke = new Pokemon({name: 'Testmon', type: 'electric'});

//
// poke.findSimilarType(function (err, data) {
//     if (err) return console.log('ERROR', err);
//
//     return data.forEach((pokemon)=> console.log('Pokemon:', pokemon));
// });

poke
    .findSimilarType()
    .where('attack').gte(10)
    // .where('defense').gte(110)
    .limit(4)
    .exec((err, data)=> {

        if (err) return console.log('ERROR', err);
        return console.log('data', data);

    });