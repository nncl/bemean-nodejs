'use strict';

const Pokemon = require('./app');

const pokemon = new Pokemon({
    name : 'Dunhamon'
    , description : 'dunha pokemon'
    , type : 'dunhones'
    , attack : 40
    , defense: 99
    , height: 1.82
});

pokemon.save((err) => {
    if (err) return console.log('Error', err);
});