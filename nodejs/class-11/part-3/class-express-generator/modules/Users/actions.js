'use strict';

const Organism = require('./organisms/organism-user');

const callback = (err, data, res)=> {
    if (err) return res.json(err);

    return res.json(data);
};

const Actions = {};

Actions.list = (req, res) => {
    const query = {};

    Organism.find(query, (err, data)=> {
        callback(err, data, res);
    });
};

Actions.listById = (req, res) => {
    const query = {_id: req.params.id};

    Organism.findOne(query, (err, data)=> {

        if (err) return res.status(404).json({success: false, msg: 'User not found'});

        if (data == null) return res.status(404).json({success: false, msg: 'User not found'});

        var user = {
            full_name: data.name.full
            , name: data.name
            , email: data.email
            , created_at: data.created_at
            , updated_at: data.updated_at
            , _id: data._id
        };

        callback(err, user, res);
    });
};

Actions.create = (req, res) => {
    const body = req.body;
    const user = new Organism(body);

    user.save((err, data)=> {
        callback(err, data, res);
    });
};

Actions.update = (req, res) => {
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
};

Actions.delete = (req, res) => {
    const query = {_id: req.params.id};

    Organism.remove(query, (err, data)=> {
        callback(err, data, res);
    });
};

module.exports = Actions;