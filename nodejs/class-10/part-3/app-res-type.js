/**
 * Define Content-Type header
 */

'use strict';

const express = require('express');
const app = express();

app.get('/html', (req, res)=> {
    res.type('html');
    res.send('<h1>Hello World</h1>');
});

app.get('/json', (req, res)=> {
    res.type('json');
    res.send({msg: 'daora'});
});

app.listen(3000, ()=> {
    console.log('Server running at port 3000');
});
