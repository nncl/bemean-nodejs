/**
 * Uploading a server
 * And displaying Hello World on its console
 */

var http = require('http');

var server = http.createServer(function (request, response) {

    /*
    * Writing the code and type of the return
    */

    response.writeHead(200,
        {'Content-Type' : 'text/plain'}
    );

    /*
     * Writing the return's content
     */

    response.write('BE MEAN');

    /*
     * Closing the connection w/ your client
     *
     * IMPORTANT: if you do not close, it'll give you a timeout error
     * Otherwise you work w/ streaming, etc. NOT USING SOCKET, i.e.
     */

    response.end();

});


/*
 * Listening on localhost:3000
 */

server.listen(3000, function () {
    console.log('Server running on localhost:3000');
});
