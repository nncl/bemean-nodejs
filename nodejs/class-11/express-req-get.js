/**
 * Verify content-type and returns what is asked
 */

'use strict';

const util = require('util');
const express = require('express');
const xml = require('xml');
const users = require('./array-query.json');
const app = express();

app.get('/', (req, res)=> {
    const type = req.get('Content-Type');

    if (/text\/xml/i.test(type)) {
        let xmlUsers = xml(users);
        res.set('Content-Type', 'application/xml');
        res.send(xmlUsers);
    } else if (/application\/json/i.test(type)) {
        res.json(users);
    } else {
        res.status(400).send('Header is required');
    }
});

app.listen(3000, (req, res)=> {
    console.log('Server running at port 3000');
});