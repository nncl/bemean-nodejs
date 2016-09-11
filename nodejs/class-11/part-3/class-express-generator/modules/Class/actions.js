'use strict';

const Organism = require('./organisms/organism-class');
const paginate = require('express-paginate');

const callback = (err, data, res)=> {
    if (err) return res.json(err);

    return res.json(data);
};

const Actions = {};

Actions.list = (req, res) => {
    const query = {};

    // Organism.paginate(query, {page: req.query.page, limit: req.query.limit}, (err, data, pageCount, itemCount)=> {
    //     var obj = {
    //         has_next_page: data.page < data.pages ? true : false
    //         , data: data
    //     };
    //     callback(err, obj, res);
    // });

    Organism
        .find(query)
        .populate('students' , 'name email')
        .exec((err, data)=> {
            callback(err, data, res);
        })
};

Actions.create = (req, res) => {
    const query = {};
    const body = req.body;
    const new_class = new Organism(body);

    new_class.save((err, data)=> {
        callback(err, data, res);
    });
};

module.exports = Actions;