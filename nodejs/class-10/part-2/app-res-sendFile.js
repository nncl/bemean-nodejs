'use strict';

const express = require('express');
const app = express();

app.get('/file/:name', (req, res, next)=> {

    let options = {
        root: __dirname + '/views'
        , dotfiles: 'deny'
        , headers: {
            'x-timestamp': Date.now()
            , 'x-sent': true
            , 'Webschool.io': 'FODA'
        }
    };

    const fileName = req.params.name;

    res.sendFile(fileName, options, (err) => {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.listen(3000, () => {
    console.log('Server running at port 3000');
});
