
/**
 * UPDATE DUDE
 */

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    name: String,
    attack : Number
};

const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('pokemons', pokemonSchema);

const id = '57b4f32ddd251c7a043d9e70';
const query = {_id : id};
const mod = {attack : 66};

/*
* upsert : if the document does not exists,
* it creates a new one w/ those passed values
*
* multi : by default if you want to update more than one data
* you have to say it. So MULTI is this guy.
*
* OBS: REMEMBAHHH? Mongo do not lets you update many data unless you say
* you want,
*
* BUT THE MOTHERFUCKER LETS YOU DELETE o/////
*/

const options = {upsert : true, multi : true};

PokemonModel.update(query, mod, options, function (err, data) {
    if (err) return console.log('Error mannnn:', err);

    console.log('Searched findById for::::', data);
});
