'use strict';

const path = require('path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/users', (req, res)=> {
    const users = [
        {name: 'caue'}
        , {name: 'day'}
        , {name: 'caique'}
        , {name: 'mae'}
        , {name: 'pai'}
        , {name: 'vó'}
        , {name: 'mayla'}
        , {name: 'kate'}
    ];

    res.render('list', {users});
});

app.listen(3000, () => {
    console.log('Server running at port 3000');
});
