/**
 * Execute content negotiation about Accept's Header of
 *  request object.
 */

'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.format({
        'text/plain': () => {
            res.send('Hey');
        }
        , 'text/html': () => {
            res.send('<p>Hey</p>');
        }
        , 'application/json': () => {
            res.send({msg: 'Hey'});
        }

        // If we pass a non recognized/different one
        , 'default': () => {
            res.status(406).send('Unauthorized');
        }
    });
});

app.listen(3000, ()=> {
    console.log('Server running at port 3000');
});
