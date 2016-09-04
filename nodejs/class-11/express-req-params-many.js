'use strict';

const util = require('util');
const express = require('express');
const app = express();

app.get('/users/:id/:name/:email/:cpf', (req, res)=> {
    const id = req.params.id;
    util.log(`O id é ${id}`);
    const params = req.params;

    if (util.isObject(req.params)) {
        util.log('It`s an object');
    }

    util.log(
        `Params are
        ${params}`
    );

    res.json(req.params);
});

app.listen(3000, (req, res)=> {
    console.log('Server running at port 3000');
});