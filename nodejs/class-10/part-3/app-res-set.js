'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.set('Content-Type' , 'text/html');
    res.send('<h1>Hello World</h1>');
});

app.get('/*', (req, res)=> {
    res.set({
        'Content-Type' : 'text/plain'
        , 'Content-Length' : '3'
        , 'ETag' : '12345'
    });
    res.send('Not found');
});

app.listen(3000, ()=> {
    console.log('Server running at port 3000');
});
