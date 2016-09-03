/**
 * Action that finds an user
 */

const getQuery = require('./action-get-query-http');
const callback = require('./action-callback-http-200');

module.exports = (Organism) => {
    return (req, res) => {
        const query = getQuery(req.url);

        Organism.find(query, (err, users) => callback(err, users, res));
    };
};