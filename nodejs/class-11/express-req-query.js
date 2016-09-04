'use strict';

const util = require('util');
const express = require('express');
const app = express();

// /user?name=caue&age=21
app.get('/user', (req, res)=> {
    util.log(req.query);
    res.json(req.query);
});

const users = require('./array-query.json');

app.get('/find', (req, res)=> {
    const q = req.query.q;

    /*
     * For each user - u - that is equal to q
     *  returns the first one you found
     */

    const user = users.filter(u => q === u.name)[0];

    if (user) {
        res.json({success: true, user});
    } else {
        res.status(404).json({success: false, message: 'User not found'});
    }
});

app.listen(3000, (req, res)=> {
    console.log('Server running at port 3000');
});