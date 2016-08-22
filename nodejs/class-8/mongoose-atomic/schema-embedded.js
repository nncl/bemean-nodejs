/**
 * Embedded documents into another document
 */

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    title : String
    , body : String
    , date : Date
});

const BlogPostSchema = new Schema({
    title: String
    , body: String
    , comments: [CommentSchema]
});

const post = {
    title: 'First post'
    , body: 'First blog post DUDEEEEEWWWWWWW cu'
    , date: Date.now()
};

const comment = {
    title: 'First comment'
    , body: 'First comment DUDEEEEEWWWWWWW cus'
    , date: Date.now()
};

const BlogPostModel = mongoose.model('blogpost', BlogPostSchema);
const BlogPost = new BlogPostModel(post);

BlogPost.comments.push(comment);
BlogPost.save((err, data) => {
    if (err) return console.log('Error: ', err);

    return console.log('Data: ', data);
});
