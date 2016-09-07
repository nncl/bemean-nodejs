'use strict';

/**
 * @description
 * Callback
 *
 * @param {String | Object} err Error
 * @param {String | Object} result Result
 */

var callback = (err, result) => {
    if (err) throw new Error(err);
    console.log('My name is', result);
};

var sayName = (name, callback) => {
    if (typeof name === 'string') return callback(null, name);

    const err = new Error('You need to pass a string to `name`');
    callback(err, null);
};

sayName('Cauê', callback);
sayName(19, callback);
