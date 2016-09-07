'use strict';

const mongoose = require('mongoose');

const pokemonSchema = require('../schemas/Pokemon');
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

module.exports = (req, res) => {
    PokemonModel.remove({_id : req.params.id}, (err, data) => {
        if (err) return res.json({success: false, msg: err});

        return res.json({success: true, data});
    });
};
