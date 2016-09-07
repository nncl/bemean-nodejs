'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Molecule = {
    name: {
        first: require('../atoms/atom-name')
        , last: require('../atoms/atom-name')
    }
    , email: {type: String, unique: true, required: true}
    , created_at: {type: Date, default: Date.now}
    , updated_at: {type: Date, default: Date.now}
};

const MoleculeSchema = new Schema(Molecule);

// Virtual name
MoleculeSchema
    .virtual('name.full')
    .get(function () {
        return this.name.first + ' ' + this.name.last
    });

module.exports = MoleculeSchema;
