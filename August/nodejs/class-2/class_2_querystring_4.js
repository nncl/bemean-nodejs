/**
 * Working w/ parameters via URL
 *
 * We'll show in our return the parameters that come from URL. I.e:
 * http://localhost:3000/?name=caue&age=21
 */

'use strict';

var http = require('http')
    , url = require('url');

var server = http.createServer(function (req, res) {

    /*
    * Receiving the requested url and
    * transforming it in an object
    */

    var result = url.parse(req.url, true);

    res.writeHead(200,
        {'Content-Type' : 'text/html'}
    );

    res.write('<html><body>');
    res.write('<h1>Be MEAN</h1>');
    res.write('<h2>Query String</h2>');
    res.write('<ul>');

    /*
     * Getting the values and displaying in our view
     */

    console.log(result.query);

    for ( var key in result.query) {
        res.write('<li>'+ key +' : ' + result.query[key] + '</li>');
    }

    res.write('</ul>');
    res.write('</body></html>');

    res.end();
});

server.listen(3000, function () {
    console.log('Server running in localhost:3000');
});
