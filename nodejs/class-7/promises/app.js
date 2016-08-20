/**
 * Read files asynchronously
 */

'use strict';

// const promiseAll = require('./modules/promise-all');
const readFile = require('./modules/fs-promise');

Promise.all(
    [
        readFile('./data/people.json'),
        readFile('./data/friends.json')
    ]
)

/*
OR USING MINE
promiseAll(
    [
        readFile('./data/people.json'),
        readFile('./data/friends.json')
    ]
)*/
.then(res => console.log(res))
.catch(err => console.log(err));
