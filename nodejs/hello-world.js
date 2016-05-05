var http = require('http');

var server = http.createServer(function (request, response) {
    // response.writeHead(200, {"Content-Type": "text/plain"});
    response.writeHead(200, {'Content-Type': 'text/html'});
    // response.write('BE MEAN');
    response.write('<h1>BE MEAN</h1>');
    response.end();
});

server.listen(3000, function () {
    console.log('Server running at localhost:3000');
});

/*
 * OU
 *
 http.createServer(function (request, response) {
 response.writeHead(200, {"Content-Type" : "text/plain"});
 response.write('BE MEAN');
 response.end();
 }).listen(3000, function () {
 console.log('Server running at localhost:3000');
 });
 * */