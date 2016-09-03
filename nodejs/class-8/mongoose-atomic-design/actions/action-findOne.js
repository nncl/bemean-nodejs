/**
 * Action that finds the first user
 */

const getQuery = require('./action-get-query-http');
const callback = require('./action-callback-http-200');

module.exports = (Organism) => {
    return (req, res) => {
        const query = getQuery(req.url);

        Organism.findOne(query, (err, user) => callback(err, user, res));
    };
};