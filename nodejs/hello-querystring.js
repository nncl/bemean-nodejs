/*
* Tratando valores passados por URL - query strings
* */

var http = require('http')
    , url = require('url')
    ;

http.createServer(function (request, response) {
    var result = url.parse(request.url, true);

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('<html><body>');
    response.write('<h1>Query String </h1>');
    response.write('<ul>');

    for (var key in result.query) {
        response.write('<li>' + key + ':' + result.query[key] + '</li>');
    }

    response.write('</ul>');
    response.write('</html></body>');

    response.end();

}).listen(3000, function () {
    console.log('Server running at port 3000');
});