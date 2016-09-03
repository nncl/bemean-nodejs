'use strict';

const express = require('express');
const app = express();
const arr = [
    {name: 'Caue'}
    , {name: 'Day'}
];

app.get('/', (req, res)=> {
    res.status(200).jsonp(arr);
    // X-Content-Type-Options →nosniff <- says that it's a JSONP
});

app.listen(3000, ()=> {
    console.log('Serve running at port 3000');
});
