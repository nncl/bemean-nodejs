'use strict';

const mongoose = require('mongoose');
const userSchema = require('../molecule/molecule-user');

const Organism = mongoose.model('User', userSchema);

module.exports = Organism;