/**
 * Action that finds an user
 */

const callback = require('./action-callback-http-200');

module.exports = (Organism) => {
    return (req, res) => {
        const query = getQuery(req.url);

        Organism.find({}, (err, data) => callback(err, data, res));
    };
};
