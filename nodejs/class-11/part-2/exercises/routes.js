'use strict';

const express = require('express');
const router = express.Router();
const pokemonSchema = require('../schemas/Pokemon');
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

router.get('/', (req, res)=> {
    require('./models/pokemon-list')(req, res);
});

router.get('/:id', (req, res)=> {
    require('./models/pokemon-find')(req, res);
});

router.post('/', (req, res)=> {
    require('./models/pokemon-create')(req, res);
});

router.put('/:id', (req, res)=> {
    require('./models/pokemon-update')(req, res);
});

router.delete('/:id', (req, res)=> {
    require('./models/pokemon-remove')(req, res);
});

module.exports = router;