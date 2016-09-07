'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    name: String
};

const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

module.exports = (req, res) => {
    PokemonModel.find({}, (err, data) => {
        if (err) return res.json({success: false, msg: err});

        return res.json({success: true, data});
    });
};
