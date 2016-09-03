'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    // res.send(new Buffer('bufferinggggggg'));
    // res.send({some : 'json'});
    // res.send('<h1>Some HTML</h1>');
    // res.send(404, 'Not found');
    // res.status(404).send('Not found');
    // res.status(500).send('FUUUU');
    // res.send(200);
    res.sendStatus(200);
});

app.listen(3000, ()=> {
    console.log('Serve running at port 3000');
});
