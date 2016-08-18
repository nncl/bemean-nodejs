
/**
 * Connecting to MongoDB with Mongoose
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema Creation
const pokemonSchema = new Schema({
    name : String,
    description : String,
    type : String,
    attack : Number,
    defense : Number,
    height : Number
});

// ????????????
module.exports = pokemonSchema;