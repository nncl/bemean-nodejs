'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/be-mean-instagram');
const Pokemon = require('../mongoose/models/pokemon');

const pokemon = {
    name: "Katemon",
    type: "gay",
    attack: 2,
    deffense: 78,
    height: 2.5,
    description: "jiujitero"
};

Pokemon.create(pokemon).then(
    success, error
);

function success(data) {
    console.log('SUCCESS DUDE');
    console.log(data);
}

function error(err) {
    console.log('ERROR DUDE');
    console.error(err);
}
