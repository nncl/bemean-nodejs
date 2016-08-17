/**
 * Uploading a server
 * And displaying Hello World on its console w/ HTML
 */

var http = require('http');

var server = http.createServer(function (request, response) {

    /*
    * Now the type is not text/plain, it's a HTML code, so...
    */

    response.writeHead(200,
        {'Content-Type' : 'text/html'}
    );

    response.write('<h1>BE MEAN</h1>');

    response.end();

});


/*
 * Listening on localhost:3000
 */

server.listen(3000, function () {
    console.log('Server running on localhost:3000');
});
