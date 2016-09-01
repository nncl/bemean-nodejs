/**
 * User's Model
 */

'use strict';

const mongoose = require('mongoose');
const querystring = require('querystring');
const Schema = require('../schemas/MyPokemons');
const url = require('url');

const Pokemon = mongoose.model('MyPokemon', Schema);

const callback = (err, data, res) => {
    if (err) {
        res.writeHead(403, {'Content-Type': 'application/json'});
        return res.end(JSON.stringify({error: err}));
    }

    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end(JSON.stringify(data));
};

const getQuery = (_url) => {
    const url_parts = url.parse(_url);
    return querystring.parse(url_parts.query);
};

const create = (req, res) => {
    let queryData = '';

    req.on('data', (data) => {
        queryData += data;
    });

    req.on('end', () => {
        var pokemons = [
            {
                "pokemon": "57c771f97005287706a5d283",
            },
            {
                "pokemon": "57c771f97005287706a5d284",
            },
            {
                "pokemon": "57c771f97005287706a5d285",
            }
        ];

        Pokemon.create(pokemons, (err, user) => callback(err, user, res));
    });
};

const CRUD = {
    create
};

module.exports = CRUD;
