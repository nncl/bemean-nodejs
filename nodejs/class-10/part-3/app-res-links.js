/**
 *
 */

'use strict';

const express = require('express');
const app = express();

app.get('/users', (req, res)=> {
    res.links({
        'next' : 'http://api.example.com/users?page=2'
        , 'last' : 'http://api.example.com/users?page=5'
    });

    res.send('Users` page 1 list');
});

app.listen(3000, ()=> {
    console.log('Server running at port 3000');
});
