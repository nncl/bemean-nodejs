'use strict';

const path = require('path');
const express = require('express');
const app = express();

app.get('/users', (req, res)=> {
    res.sendFile(path.join(__dirname, 'views/list.html'));
});

app.listen(3000, () => {
    console.log('Server running at port 3000');
});
