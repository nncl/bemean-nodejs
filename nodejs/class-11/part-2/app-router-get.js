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
    res.json({msg:'Listing'});
    console.log('Listing');
});

app.use('/hello', router);

app.listen(3000, ()=> {
    console.log('Server running at 3000');
});
