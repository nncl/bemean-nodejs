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
const query = {_id : '57bb903504e344c505d77e93'};
const body = {
    body : 'Primeiramente fora nois 4ever'
};

BlogModel.update(query, body, (err, data) => {
    if (err) return console.log(err);

    return console.log('Updated:', data);
});

module.exports = BlogModel;
