'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/be-mean-instagram');
const Pokemon = require('../mongoose/models/pokemon');

let promise = Pokemon.find({}).exec();
promise.then(success, error);

function success(data) {
    console.log('SUCCESS DUDE');
    console.log(data);
}

function error(err) {
    console.log('ERROR DUDE');
    console.error(err);
}
