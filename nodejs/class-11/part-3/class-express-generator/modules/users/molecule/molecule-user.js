'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Molecule = {
    name: require('../atoms/atom-name')
    , email: {type: String, unique: true, required: true}
    , created_at: {type: Date, default: Date.now}
    , updated_at: {type: Date, default: Date.now}
};

module.exports = new Schema(Molecule);
