'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paginate = require('mongoose-paginate');

const Molecule = {
    name: require('../atoms/atom-name')
    , students: [require('../atoms/atom-user')]
};

const MoleculeSchema = new Schema(Molecule);
MoleculeSchema.plugin(paginate);

module.exports = MoleculeSchema;
