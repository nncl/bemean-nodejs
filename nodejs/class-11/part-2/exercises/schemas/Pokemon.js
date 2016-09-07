/**
 * Pokemon's Schema
 */

'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
    name: require('../atoms/atom-name')
};

const pokemonSchema = new Schema(_schema);

module.exports = pokemonSchema;
