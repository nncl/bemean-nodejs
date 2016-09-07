'use strict';

const express = require('express');
const router = express.Router();
const Organism = require('./organisms/organism-user');

const callback = (err, data, res)=> {
    if (err) return res.json(err);

    return res.json(data);
};

/**
 * @description
 * List all users
 */

router.get('/', function (req, res) {
    const query = {};

    Organism.find(query, (err, data)=> {
        callback(err, data, res);
    });

});

/**
 * @description
 * List user by id
 *
 * @param {int} id User id
 */

router.get('/:id', function (req, res) {
    const query = {_id: req.params.id};

    Organism.findOne(query, (err, data)=> {

        var user = {
            fullname: data.name.full
            , name : data.name
            , email : data.email
            , created_at : data.created_at
            , updated_at : data.updated_at
        };

        callback(err, user, res);
    });

});

/**
 * @description
 * Creates an user
 */

router.post('/', function (req, res) {
    const body = req.body;
    const user = new Organism(body);

    user.save((err, data)=> {
        callback(err, data, res);
    });

});

/**
 * @description
 * Updates an user
 *
 * @param {int} id User id
 */

router.put('/:id', function (req, res) {
    const query = {_id: req.params.id};

    Organism.findOne(query, (err, user)=> {

        user.name.first = req.body.name.first;
        user.name.last = req.body.name.last;
        user.email = req.body.email;
        user.updated_at = Date.now();

        user.save((err, data)=> {
            callback(err, data, res);
        });

    });

});

/**
 * @description
 * Deletes an user
 *
 * @param {int} id User id
 */

router.delete('/:id', function (req, res) {
    const query = {_id: req.params.id};

    Organism.remove(query, (err, data)=> {
        callback(err, data, res);
    });

});

module.exports = router;
