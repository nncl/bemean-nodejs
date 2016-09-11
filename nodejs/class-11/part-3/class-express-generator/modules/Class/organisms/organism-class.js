'use strict';

const mongoose = require('mongoose');
const classSchema = require('../molecule/molecule-class');

const Organism = mongoose.model('Class', classSchema);

module.exports = Organism;