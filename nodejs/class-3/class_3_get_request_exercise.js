/**
 * Making a GET request and displaying it w/ HTML
 *
 * https://randomuser.me/api/
 * http://webschool-io.herokuapp.com/api/pokemons/
 */

'use strict';

const http = require('http');

const options = {
    host: 'webschool-io.herokuapp.com'
    , path: '/api/pokemons/'
};

let data = "";

function callback(res) {
    res.setEncoding('utf8');

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('Data finished', data);
        display();
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
 * Finish him
 */

req.end();

/**
 * Displaying into HTML
 */

function display() {
    var server = http.createServer(function (request, response) {

        response.writeHead(200,
            {'Content-Type' : 'text/html'}
        );

        response.write('<h1>Pokemon</h1>');

        var pokemons = JSON.parse(data);

        for (var k in pokemons) {
            response.write('<br>' + JSON.stringify(pokemons[k].name));
            response.write('<br>' + JSON.stringify(pokemons[k].type));
        }

        response.end();

    });

    server.listen(3000, function () {
        console.log('Server running on localhost:3000');
    });
}
