'use strict';

const express = require('express');
const app = express();

app.set('view engine', 'jade');

app.get('/', (req, res)=> {
    res.render('index', {title: 'Be MEAN', message: 'Welcome to Be MEAN'});
});

app.listen(3000, () => {
    console.log('Server running at port 3000');
});
