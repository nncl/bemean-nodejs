/**
 * Changes default values, such as content-type, i.e.
 */

'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    // res.set({'Content-Type': 'application/json'});
    res.set({'Auth': '123'});
    res.json({msg: 'Hello World'});
});

app.listen(3000, ()=> {
    console.log('Serve running at port 3000');
});
