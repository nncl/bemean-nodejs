/**
 * CRUD of a pokemon
 */

'use strict';

const PokemonSchema = require('./schema');
const Model = require('./model')('pokemon', PokemonSchema);
const CRUD = {
    create: (data) => {
        const poke = new Model(data);
        poke.save((err, data)=> {
            if (err) return console.error('Error DUDE', err);

            console.log('SUCCESS SAVED LEK', data);
        });
    }
    , read: (query) => {
        Model.find(query, (err, data) => {
            if (err) return console.error('Error DUDE', err);

            console.log('Searched:', data);
        });
    }
    , update: (query, mod, opt) => {
        const options = opt || {multi: true};

        Model.update(query, mod, options, (err, data)=> {
            if (err) return console.error('Error DUDE', err);

            console.log('SUCCESS UPDATED LEK', data);
        });
    }
    , delete: (query) => {
        Model.remove(query, (err, data)=> {
            if (err) return console.error('Error DUDE', err);

            console.log('SUCCESS DELETED LEK', data);
        });
    }
};

module.exports = CRUD;