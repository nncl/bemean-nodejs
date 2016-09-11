/**
 * Atom field user
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Atom = {
    type: Schema.Types.ObjectId
    , ref: 'User'
    , required: true
};

module.exports = Atom;