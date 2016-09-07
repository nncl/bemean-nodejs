'use strict';

const express = require('express');
const app = express();
const router = express.Router();

// Create router module
router.use((req, res, next)=> {
    res.send('Hello World');

    next();
});

app.use('/hello', router);

app.listen(3000, ()=> {
    console.log('Server running at 3000');
});