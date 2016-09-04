/**
 * GET: returns the HTTP response headers specified by field
 *  i.e.: res.get('Content-Type')
 */

'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.set('Content-Type', 'text/plain').send('Hello World');;
    console.log(res.get('Content-Type')); // => text/html; charset=utf-8
});


app.listen(3000, ()=> {
    console.log('Server running at port 3000');
});
