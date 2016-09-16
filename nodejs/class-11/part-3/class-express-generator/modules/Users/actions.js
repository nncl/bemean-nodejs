'use strict';

const Organism = require('./organisms/organism-user');
const paginate = require('express-paginate');
const multer = require('multer');

const callback = (err, data, res)=> {
    if (err) return res.status(403).json(err);

    return res.json(data);
};

const Actions = {};

Actions.list = (req, res) => {
    const query = {};

    Organism.paginate(query, {page: req.query.page, limit: req.query.limit}, (err, data, pageCount, itemCount)=> {
        var obj = {
            has_next_page: data.page < data.pages ? true : false
            , data: data
        };
        callback(err, obj, res);
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
            , image: data.image
        };

        callback(err, user, res);
    });
};

Actions.create = (req, res) => {

    // upload configuration
    let file_name = null;
    const storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, __dirname + '/uploads/')
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            file_name = file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1];
            cb(null, file_name)
        }
    });
    const upload = multer({ //multer settings
        storage: storage
    }).single('image');

    // request from angularjs
    upload(req, res, (err)=> {

        if (err) return res.status(403).json(err);

        const body = req.body;

        const name = {
            "first" : body.name.first
            , "last" : body.name.last
        };

        const _schema = {
            "name" : name
            , "email" : body.email
            , "image" : __dirname + '/uploads/' + file_name
        };

        const user = new Organism(_schema);

        user.save((err, data)=> {
            callback(err, data, res);
        });
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