
/**
 *
 * Cadastre 3 pokemons **de uma só vez** - pesquisar.
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

const data = [
    {
        name: "dayaramon",
        attack: 76,
        deffense: 2
    },
    {
        name: "cauemon",
        attack: 100,
        deffense: 100
    },
    {
        name: "maylamon",
        attack: 2,
        deffense: 3
    }
];

const Model = mongoose.model('pokemons', pokemonSchema);

// const poke = new Model(data);

Model.create(data, function (err, data) {
    if (err) return console.log('Error mannn:', err);

    console.log('Inserted mannn:', data);
});

// poke.save(function (err, data) {
//     if (err) return console.log('Error mannn:', err);
//
//     console.log('Inserted mannn:', data);
// });
