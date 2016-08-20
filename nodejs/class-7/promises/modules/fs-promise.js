/**
 */

'use strict';

const fs = require('fs');

function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, res)=> {
            err ? reject(err) : resolve(res);
        });
    });
}

module.exports = readFile;