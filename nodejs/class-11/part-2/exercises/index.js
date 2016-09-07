'use strict';

require('../../db/config');

const express = require('express');
const app = express();
const PokemonsAPI = require('./routes');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/v1/pokemons', PokemonsAPI);

app.listen(3000, ()=> {
    console.log('Server running at 3000');
});
