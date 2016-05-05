'use strict';

var date = (new Date()).toJSON();

var http = require('http')
    , SUCCESS = {
    version: 1.0
    , name: 'Be MEAN'
    , created_at: date
}
    , ERROR = {
    message: 'NOT FOUND DUDE'
};

http.createServer(function (request, response) {
    if (request.url === '/api/v1') {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(JSON.stringify(SUCCESS));
    } else {
        response.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
        response.write(JSON.stringify(ERROR));
    }

    response.end();
    
}).listen(3000, function () {
    console.log('Server running at port 3000');
});
