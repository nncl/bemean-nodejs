/**
 *
 */

'use strict';

const express = require('express');
const util = require('util');
const fs = require('fs');
const formidable = require('formidable');
const app = express();

app.post('/upload', (req, res)=> {
    const form = new formidable.IncomingForm();
    console.log(form.uploadDir);
    form.uploadDir = 'public/images';

    form.parse(req, (err, fields, files)=> {
        res.status(200).set('Content-Type', 'text/plain');
        res.send('Upload received:\n\n' + util.inspect({fields: fields, files: files}));
    });
});

app.get('/', (req, res)=> {
    res.set('Content-Type', 'text/html');
    fs.createReadStream('./index-file.html').pipe(res);
});

app.listen(3000, ()=> {
    console.log('Server running at port 3000');
});
