'use strict';

const express = require('express');
const app = express();
const arr = [
    {name : 'caue'}
    , {name : 'day'}
];

app.get('/', (req, res)=> {
    // res.json(200, {success : false});
    // res.status(200).json({success : false});
    // res.json(null);
    // res.json({name : 'Cauê'});
    // res.json({arr: [1, 2, 3]});
    res.json(arr);
});

app.listen(3000, ()=> {
    console.log('Serve running at port 3000');
});
