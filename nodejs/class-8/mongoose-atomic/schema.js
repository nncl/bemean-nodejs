'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const name = require('./fields-name');
const description = require('./fields-description');
const type = require('./fields-type');
const attack = require('./fields-attack');
const deffense = require('./fields-deffense');
const height = require('./fields-height');
const created_at = require('./fields-created_at');

const _schema = {
    name
    , description
    , type
    , attack
    , deffense
    , height
    , created_at
};

const PokemonSchema = new Schema(_schema);

module.exports = PokemonSchema;
