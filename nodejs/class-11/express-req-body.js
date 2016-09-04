/**
 * Verify content-type and returns what is asked
 */

'use strict';

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
// parse app/json(ajax)
app.use(bodyParser.json());
// parse app/x-www-form-urlencoded (form)
app.use(bodyParser.urlencoded({extended: true}));

app.post('/user', (req, res)=> {
    console.log(req.body);
    res.send(req.body);
});

app.get('/', (req, res)=> {
    res.set('Content-Type', 'text/html');
    fs.createReadStream('./index.html').pipe(res);
});

app.listen(3000, ()=> {
    console.log('Server running at port 3000');
});
