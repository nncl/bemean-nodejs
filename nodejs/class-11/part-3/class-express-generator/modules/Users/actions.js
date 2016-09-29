'use strict';

const Organism = require('./organisms/organism-user');
const multer = require('multer');
const async = require('async');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const callback = (err, data, res)=> {
    if (err) return res.status(403).json(err);

    return res.json(data);
};

const Actions = {};

Actions.list = (req, res) => {
    const query = {};

    Organism.paginate(query, {page: req.query.page, limit: req.query.limit}, (err, data, pageCount, itemCount)=> {
        var obj = {
            has_next_page: data.page < data.pages
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
            , password: data.password
            , image: data.image
        };

        callback(err, user, res);
    });
};

Actions.create = (req, res) => {

    /*
     * Validation
     */

    req.checkBody('name', 'Invalid name').notEmpty();
    req.checkBody('email', 'Invalid email').notEmpty().isEmail();

    let errors = req.validationErrors();
    if (errors) {
        res.status(400).json({
            success: false
            , message: errors
        });
        return;
    }

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
            "first": body.name.first
            , "last": body.name.last
        };

        const _schema = {
            "name": name
            , "email": body.email
            , "password": body.password
            , "image": __dirname + '/uploads/' + file_name
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

        if (!user) {
            let error = {
                success : false,
                message : 'User not found'
            };

            return callback(error, null, res);
        }

        user.name.first = req.body.name.first;
        user.name.last = req.body.name.last;
        user.email = req.body.email;
        user.password = req.body.password;
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

/**
 * @description
 * Recover user's password
 *
 * @param {Object} req
 * @param {Object} res
 */

Actions.recover = (req, res) => {
    async.waterfall([
        (done) => {
            crypto.randomBytes(20, function (err, buf) {
                var token = buf.toString('hex');
                done(err, token);
            });
        },
        (token, done) => {
            Organism.findOne(
                {email: req.body.email},
                (err, user) => {

                    if (err) {
                        return callback(err, user, res);
                    }

                    if (!user) {
                        let error = {
                            success: false
                            , message: 'User not found'
                        };

                        return callback(error, null, res);
                    }

                    user.resetPasswordToken = token;
                    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

                    user.save(function (err) {
                        done(err, token, user);
                    });

                }
            );
        },
        (token, user, done) => {
            let smtpTransport = nodemailer.createTransport('SMTP', {
                service: 'SendGrid',
                auth: {
                    user: 'nncl',
                    pass: 'd4y4r444'
                }
            });

            let mailOptions = {
                to: user.email,
                from: 'nncl@live.com',
                subject: 'Node.js Password Reset',
                text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            };

            smtpTransport.sendMail(mailOptions, (err) => {

                console.log('error man');
                console.log(err);

                let error = null;

                if (err) {
                    error = err;
                }

                let succ = {
                    success: true
                    , message: 'An e-mail has been sent to ' + user.email + ' with further instructions.'
                };

                callback(error, succ, res);
            });

        }
    ], (err) => {
        if (err) callback(err, null, res);
    });
};

module.exports = Actions;