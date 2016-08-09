/**
 * Working w/ routes
 *
 * If we get the correct route, we'll return a success statement
 * Otherwise the response will be an error
 */

'use strict';

var date = (new Date()).toJSON();

const http = require('http')
    , SUCCESS = {
        version : '1.0'
        , name : 'BE MEAN'
        , returned_at : date
    }
    , ERROR = {
        message : 'ERROR DUDE'
    }

    ;

var server = http.createServer(function (req, res) {
    console.log(req.url);

    if (req.url === '/api/v1') {

        console.log('worked like a charm');

        res.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });

        res.write(JSON.stringify(SUCCESS));

    } else {
        res.writeHead(404, {
            'Content-Type' : 'application/json; charset=utf-8'
        });

        res.write(JSON.stringify(ERROR));
    }

    res.end();
});

server.listen(3000, function () {
    console.log('Server running in localhost:3000');
});
