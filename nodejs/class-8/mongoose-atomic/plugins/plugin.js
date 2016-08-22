/**
 * Plugins
 *
 *  Reusable
 *  What plugs into something - in this case, in our system.
 */

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Schema = mongoose.Schema;
const timestamp = require('./plugins/timestamp');

const _schema = {
    title: {type: String, required: true}
    , body: {type: String, requred: true}
};

const BlogPostSchema = new Schema(_schema);

BlogPostSchema.plugin(timestamp);

const BlogModel = mongoose.model('names', BlogPostSchema);
const name = {
    title : 'Temer'
    , body : 'Primeiramente fora nois'
};

BlogModel.create(name, (err, data) => {
    if (err) return console.error(err);

    return console.log('Created:' + data);
});

module.exports = BlogModel;