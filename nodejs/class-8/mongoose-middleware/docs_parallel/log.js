
/**
 * Saving into the log
 */

'use strict';

const fs = require('fs');
const logStream = fs.createWriteStream(__dirname +
    '/models.log', {'flags': 'a'});

/**
 * Saves into the log
 *
 * @param {Model} model
 * @param value
 * @param {Function} done
 */

var log = (model, value, done) => {
    logStream.write('${model} : ${value} : ${new Date()}\n');
    done();
};

module.exports = log;
