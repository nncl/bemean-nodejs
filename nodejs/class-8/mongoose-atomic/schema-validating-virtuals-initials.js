/**
 * Virtuals, displaying only initials' name
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

NameSchema
    .virtual('name.initials')
    .get(function () {
        return this.name.first[0] + this.name.last[0]
    });

const NameModel = mongoose.model('names', NameSchema);

const nameId = '57ba0e9b2980bb19efe12ccd';

NameModel.findById(nameId, (err, data) => {
    if (err) return console.log('Error', err);

    return console.log('initials:', data.name.initials);
});
