'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/be-mean-instagram');

const Pokemon = require('./models/pokemon');

Pokemon.find({}, (err, data) => {
    if (!err) {
        // data = pokemon
        console.log(data);
    } else {
        throw err;
    }
});
