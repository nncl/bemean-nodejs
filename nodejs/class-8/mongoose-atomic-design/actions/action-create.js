/**
 * Action that creates an user
 */

'use strict';

const callback = require('./action-callback-http-200');

module.exports = (Organism) => {
    return (req, res) => {
        let queryData = '';

        req.on('data', (data) => {
            queryData += data;
        });

        req.on('end', () => {
            const obj = querystring.parse(queryData);

            Organism.create(obj, (err, user) => callback(err, user, res));
        });
    };
};
