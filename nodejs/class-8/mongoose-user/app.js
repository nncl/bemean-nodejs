/**
 * Main stuff
 */

const http = require('http');
const url = require('url');
const Controller = require('./controller');

var server = http.createServer(function (req, res) {
    var msg = "";
    var url_parts = url.parse(req.url);

    switch (url_parts.pathname) {
        case '/api/users/create' :
            Controller.create(req, res);
            break;
        case '/api/users/retrieve' :
            Controller.retrieve(req, res);
            // msg = "User retrieved successfully";
            break;
        case '/api/users/update' :
            Controller.update();
            // msg = "User updated successfully";
            break;
        case '/api/users/delete' :
            Controller.delete();
            // msg = "User deleted successfully";
            break;
        default :
            // msg = "Path not found";
            res.end('Path not found');
            break;
    }

    // res.end(msg);
});

server.listen(8080, () => {
    console.log('Server running in localhost:8080');
});