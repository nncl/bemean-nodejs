
/**
 * With many files the code would looks like shit,
 * So it's better use promises - next js file
 */

'use strict';

const fs = require('fs');

fs.readFile('./data/persons.json', 'utf-8', (err, persons) => {
    let todos = [];

    if (!err) {
        fs.readFile('./data/friends.json', 'utf-8', (err, friends) => {
            if (!err) {
                todos.push(JSON.stringify(persons));
                todos.push(JSON.stringify(friends));
            }

            sendFiles(todos);
        });
    } else {
        throw err;
    }
});

var sendFiles = function (data) {
    // Functional Programming
    // Concat 1st person w/ the 2nd one
    var arr = data.map((person)=> {
        return person.concat(person);
    });

    console.log(arr[0]);
};