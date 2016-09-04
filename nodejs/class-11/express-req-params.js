'use strict';

const express = require('express');
const app = express();

app.get('/users/:name', (req, res)=>{
    const name = req.params.name;
    console.log(name);
    res.send(`username ${name}`);
});

app.listen(3000, (req, res)=>{
    console.log('Server running at port 3000');
});