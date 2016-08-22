/**
 * Adds created_at and updated_at fields into a schema
 *
 * @param {Schema} schema
 * @param {Object} options
 *
 * TODO: update updated_at field
 */

'use strict';

var timeStamp = (schema, options) => {
    schema.add({
        created_at: {type: Date, default: Date.now()}
    });

    schema.add({
        updated_at: {type: Date, default: Date.now()}
    });

    var preUpdate = (next) => {
        console.log('Pre update has been called');

        // TODO

        next();
    };

    schema.pre('update', preUpdate);

};

module.exports = timeStamp;
