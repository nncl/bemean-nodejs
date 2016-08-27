'use strict';

const PokemonModel = require('./schema');

const query = PokemonModel.where({name: /PikaChu/i});

query.count((err, doc)=> {
    if (err) return console.log('Error::::::', err);

    return console.log('Success::::::', doc);
});


// 10m