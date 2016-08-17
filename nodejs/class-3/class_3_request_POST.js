/**
 * Request to an API with REQUEST method
 *
 */

'use strict';

const http = require('http');
const querystring = require('querystring');

/*
 * Parse the data into query string
 *
 * I.e.: name=Caue%20Almeida&type=student
 */

const postData = querystring.stringify({
    name: 'Caue Almeida'
    , type: 'student'
});

console.log('postData', postData);
console.log('length', postData.length);

const options = {
    host: 'webschool-io.herokuapp.com'
    , method: 'POST'
    , path: '/api/pokemons'
    , headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        , 'Content-Length': postData.length
    }
};

function callback(res) {
    console.log('STATUS', res.statusCode);
    console.log('HEADERS', JSON.stringify(res.headers));

    let data = "";

    res.setEncoding('utf8');

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('Data finished', data);
    });
}

/**
 * Request
 *
 * @params {Object, Function} options, callback Object and Callback
 */

const req = http.request(options, callback);

/*
 * Handle error
 */

req.on('error', (e)=> {
    console.log('ERRRORRR', e.message);
});

/*
 * Writing data in the request
 *
 * Sending the POST HERE
 */

req.write(postData);

req.end();
