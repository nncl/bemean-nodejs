
/**
 *
 * Crie um schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desencadeie erros de validação padrão. Criar especificamente:
 * para String: **enum, match, maxlength** e **minlength**
 * para Number: **max** e **min**.
 *
 */

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    email: {type: String, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']}
    , age: {type: Number, max: 99}
    , gender: {type: String, enum: ['m', 'f']}
    , city: {type: String, minlength: 4}
    , province: {type: String, minlength: 1, maxlength : 2}
};

const pokemonSchema = new Schema(_schema);
/*const data = {
    email: 'nncl@live.com',
    age : 21,
    gender : 'm',
    city : 'Dublin',
    province : 'LE'
};*/

const data = {
    email : 'nncl2live.com',
    age : 9999,
    gender : 'macho',
    city : 'sp',
    province : 'leinster'
};

const Model = mongoose.model('pokemons', pokemonSchema);
const poke = new Model(data);

// poke.save(function (err, data) {
//     if (err) return console.log('Error mannn:', err);
//
//     console.log('Inserted mannn:', data);
// });

Model.create(data, function (err, data) {
    if (err) return console.log('Error mannn:', err);

    console.log('Inserted mannn:', data);
});