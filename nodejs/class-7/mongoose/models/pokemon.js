'use strict';

const mongoose = require('mongoose');
const util = require('util');

// trim: remove blank spaces on values

function pokemonHandler() {
    let Schema = mongoose.Schema;
    const ObjectId = Schema.ObjectId;

    const _schema = new Schema({
        id: ObjectId
        , name: {type: String, trim: true}
        , type: {type: String, trim: true}
        , attack: {type: Number}
        , deffense: {type: Number}
        , height: {type: Number}
        , description: {type: String, trim: true}
    });

    _schema.pre('find', (next) => {
        // this.start = Date.now();
        util.log('Finding...');
        next();
    });

    _schema.post('find', (result) => {
        setTimeout(function () {
            util.log('Finding ended!!');
            util.log(result);
        }, 1000);
    });

    return mongoose.model('Pokemon', _schema);
}

module.exports = pokemonHandler();
// module.exports = exports = pokemonHandler();
