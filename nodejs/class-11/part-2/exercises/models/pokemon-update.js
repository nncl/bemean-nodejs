'use strict';

const mongoose = require('mongoose');

const pokemonSchema = require('../schemas/Pokemon');
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

module.exports = (req, res) => {
    PokemonModel.update({_id : req.params.id}, {name : req.body.name}, {multi: true}, (err, data) => {
        if (err) return res.json({success: false, msg: err});

        return res.json({success: true, data});
    });
};
