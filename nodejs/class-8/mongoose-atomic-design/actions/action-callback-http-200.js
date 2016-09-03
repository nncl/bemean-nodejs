/**
 * Action that returns a HTTP 200's response
 */

const Action = (err, data, res) => {
    if (err) {
        res.writeHead(403, {'Content-Type': 'application/json'});
        return res.end(JSON.stringify({error: err}));
    }

    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end(JSON.stringify(data));
};

module.exports = Action;