/**
 * User's Controller
 */

const PokemonModel = require('../models/MyPokemons');

const CRUD = {
    create: PokemonModel.create
    , find: PokemonModel.find
    , findOne: PokemonModel.findOne
    , update: PokemonModel.update
    , remove: PokemonModel.remove
};

module.exports = CRUD;