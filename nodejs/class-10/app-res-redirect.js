'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    // res.redirect('http://google.com');
    res.redirect('login');
});

app.get('/login', (req, res)=> {
    res.send('Login route');
});

app.listen(3000, ()=> {
    console.log('Serve running at port 3000');
});
