'use strict';

const readFile = require('../modules/fs-promise');

readFile('../data/people.json')
    .then((data) => {
        success(data);
    })
    .catch((err)=> {
        error(err);
    });

readFile('../data/peopl.json')
    .then(success, error);

function success(data) {
    console.log(data);
}

function error(err) {
    console.error(err);
}