'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paginate = require('mongoose-paginate');

const Molecule = {
    name: {
        first: require('../atoms/atom-name')
        , last: require('../atoms/atom-name')
    }
    , email: require('../atoms/atom-email')
    , created_at: require('../atoms/atom-date')
    , updated_at: require('../atoms/atom-date')
    , image: {type: String, default: null}
    , password: {type: String, required: true}
    , reset_password_token: {type: String}
    , reset_password_expires: {type: String}
};

const MoleculeSchema = new Schema(Molecule);
MoleculeSchema.plugin(paginate);

// Virtual name
MoleculeSchema
    .virtual('name.full')
    .get(function () {
        return this.name.first + ' ' + this.name.last
    });

module.exports = MoleculeSchema;
