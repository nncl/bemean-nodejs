'use strict';

const express = require('express');
const app = express();
const router = express.Router();

// Create router module
router.all('*', (req, res, next)=> {
    res.send('Hello World');

    console.log('Hello World');
});

app.use('/hello', router);

app.listen(3000, ()=> {
    console.log('Server running at 3000');
});
