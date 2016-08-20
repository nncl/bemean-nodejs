
/**
 * Reading a file without promise
 */

'use strict';

const fs = require('fs');

fs.readFile('./data/persons.json', 'utf-8', (err, file) => {
    if (!err) {
        console.log(file)
    } else {
        throw err;
    }
});