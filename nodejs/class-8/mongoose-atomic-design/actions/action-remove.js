/**
 * Action that removes an user
 */

const getQuery = require('./action-get-query-http');
const callback = require('./action-callback-http-200');

module.exports = (Organism) => {
    return (req, res) => {
        const query = getQuery(req.url);

        Organism.remove(query, (err, user) => callback(err, user, res));
    };
};