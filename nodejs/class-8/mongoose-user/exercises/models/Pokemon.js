/**
 * User's Model
 */

'use strict';

const mongoose = require('mongoose');
const querystring = require('querystring');
const Schema = require('../schemas/Pokemon');
const url = require('url');

const Pokemon = mongoose.model('Pokemon', Schema);

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
        // const obj = querystring.parse(queryData);

        var pokemons = [
            {
                name : "Digimon",
                type : "Digitype"
            },
            {
                name : "Pkemon",
                type : "Pkemontype"
            },
            {
                name : "Chrismon",
                type : "Christype"
            },
            {
                name : "Chairmon",
                type : "Chairtype"
            },
            {
                name : "Cumon",
                type : "Cutype"
            }
        ];

        Pokemon.create(pokemons, (err, user) => callback(err, user, res));
    });
};

const find = (req, res) => {
    const query = getQuery(req.url);
    Pokemon.find(query, (err, pokemons) => callback(err, pokemons, res));
};

const CRUD = {
    create
    , find
};

module.exports = CRUD;
