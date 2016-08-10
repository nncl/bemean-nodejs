/**
 * Request to an API with REQUEST method
 */

'use strict';

const http = require('http');

const options = {
    host: 'api.redtube.com'
    , path: '/?data=redtube.Videos.searchVideos&search=Sasha%20Gray'
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

req.end();
