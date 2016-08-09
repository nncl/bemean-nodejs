/**
 * Uploading a server
 * And displaying Hello World on its console
 * from and HTML file
 */

/*
* Sync, from readFileSync means Synchronous, so every single code that
* ends w/ sync, it's synchronous
*/

var http = require('http')
    , fs = require('fs')
    , index = fs.readFileSync('data/index.html');

var server = http.createServer(function (request, response) {

    response.writeHead(200,
        {'Content-Type' : 'text/html'}
    );

    response.write(index);

    response.end();

});


/*
 * Listening on localhost:3000
 */

server.listen(3000, function () {
    console.log('Server running on localhost:3000');
});
