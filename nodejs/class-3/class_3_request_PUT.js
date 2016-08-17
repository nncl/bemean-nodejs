/**
 * Request to an API with PUT method
 *
 * @param Id Param that goes into path
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
    name: 'Caue'
    , type: 'student'
});

const options = {
    host: 'webschool-io.herokuapp.com'
    , method: 'PUT'
    , path: '/api/pokemons/57abc467269b4d1100d19461'
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
