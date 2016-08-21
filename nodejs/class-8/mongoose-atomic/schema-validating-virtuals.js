/**
 * Virtuals
 *
 * Are not saved on mongodb, so sometimes are eventually needed.
 *
 * I.e.:
 *
 * You have the following object:
 *
 * {name : {fisrt : Caue, last : Almeida}}
 *
 * And you have to show both, so you'd do: log name.first + name.last
 *
 * Would be better if it WERE name.full, isn't it?
 */

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

const Schema = mongoose.Schema;

const _schema = {
    name: {
        first: String
        , last: String
    }
};

const NameSchema = new Schema(_schema);

NameSchema
    .virtual('name.full')
    .get(function () {
        return this.name.first + ' ' + this.name.last
    });

const NameModel = mongoose.model('names', NameSchema);

const nameId = '57ba0e9b2980bb19efe12ccd';

NameModel.findById(nameId, (err, data) => {
    if (err) return console.log('Error', err);

    return console.log('data', data.name.full);
});
