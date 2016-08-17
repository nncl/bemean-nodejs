
/**
 * Working w/ Mongoose
 */

'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/be-mean-instagram');

const schema = mongoose.Schema;

// Schema Creation
const pokemonSchema = new Schema({
    name : String,
    description : String,
    type : String,
    attack : Number,
    defense : Number,
    height : Number
});
