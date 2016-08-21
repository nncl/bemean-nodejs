/**
 * GETTERS
 *
 * It makes you can transform it to be shown.
 *
 * IT IS LIKE AN ANGULAR FILTER.
 *
 * I.E.: You have to returns a post title to uppercase.
 *  Use Getters man.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var toUpper = (value) => {
    return value.toUpperCase();
};

const _schema = {
    name: {type : String, get : toUpper}
};

const BlogPostSchema = new Schema(_schema);

const BlogPostModel = mongoose.model('names', BlogPostSchema);

const post_id = '57ba083dd6d7e34bbcdf7ae1';

BlogPostModel.findById(post_id, (err, post) => {
    if (err) return console.log('Error', err);

    /*
     * Always when we show the title of the post getting it,
     * it will come in uppercase format, as we've decided.
     */

    console.log('post', post.name);
});
