/**
 * User's Model
 */

'use strict';

const mongoose = require('mongoose');
const querystring = require('querystring');
const Schema = require('./schema');

const User = mongoose.model('User', Schema);

const CRUD = {
    create: (req, res) => {
        let queryData = '';

        req.on('data', (data) => {
            queryData += data;
        });

        req.on('end', () => {
            const obj = querystring.parse(queryData);

            User.create(obj, (err, user)=> {
                if (err) {
                    res.writeHead(403, {'Content-Type': 'application/json'});
                    return res.end(JSON.stringify(err));
                }

                res.writeHead(200, {'Content-Type': 'application/json'});
                return res.end(JSON.stringify({message: 'Created successfullyl', user: user}));
            });
        });
    }
    , retrieve: (req, res) => {
        User.find({}, (err, users) => {
            if (err) return console.log('Error', err);

            res.writeHead(200, {'Content-Type': 'application/json'});
            return res.end(JSON.stringify({users: users}));
        });
    }
    , get: (query) => {
        User.findOne(query, (err, user) => {
            if (err) return console.log('Error', err);

            return console.log('Found', user);
        });
    }
    , update: (query, mod, options) => {
        User.update(query, mod, {multi: true}, (err, user) => {
            if (err) return console.log('Error', err);

            return console.log('Found', user);
        });
    }
    , delete: (query) => {
        User.remove(query, (err, user) => {
            if (err) return console.log('Error', err);

            return console.log('Deleted', user);
        });
    }
};

module.exports = CRUD;

// const u = new User(_userData);
// console.log(u.validateSync());

// User.findOne({}, (err, user) => {
//     if (err) return console.log('Error', err);
//
//     return console.log('Name', user.name);
// });
