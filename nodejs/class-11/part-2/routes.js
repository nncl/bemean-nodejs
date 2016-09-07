'use strict';

const express = require('express');
const app = express();
const router = express.Router();

// Create router module
router.all('*', (req, res, next)=> {
    res.setHeader('Webschool' , 'FODA');
    console.log('all');

    next();
});

router.get('/', (req, res)=> {
    require('../models/pokemon-list')(req, res);
});

module.exports = router;