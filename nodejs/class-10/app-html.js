'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send('<h1>Hello World</h1>');
});

app.listen(3000, ()=> {
    console.log('Serve running at port 3000');
});
