/**
 * User's Model
 */

'use strict';

const mongoose = require('mongoose');
const querystring = require('querystring');
const Schema = require('./schema');
const url = require('url');

const User = mongoose.model('User', Schema);

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
        const obj = querystring.parse(queryData);

        User.create(obj, (err, user) => callback(err, user, res));
    });
};

const update = (req, res) => {
    let queryData = '';

    req.on('data', (data) => {
        queryData += data;
    });

    req.on('end', () => {

        /*
         * A query virá como parte da URL - vulgo querystring
         */

        const mod = querystring.parse(queryData);
        const url_parts = url.parse(req.url);
        const query = querystring.parse(url_parts.query);

        User.update(query, mod, {multi: true}, (err, user) => callback(err, user, res));
    });
};

const find = (req, res) => {
    const query = getQuery(req.url);

    User.find(query, (err, users) => callback(err, users, res));
};

const findOne = (req, res) => {
    const query = getQuery(req.url);

    User.findOne(query, (err, user) => callback(err, user, res));
};

const remove = (req, res) => {
    const query = getQuery(req.url);

    User.remove(query, (err, user) => callback(err, user, res));
};

const CRUD = {
    create
    , find
    , findOne
    , update
    , remove
};

module.exports = CRUD;
