/**
 * Remove Embedded documents
 */

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    title: String
    , body: String
    , date: Date
});

const BlogPostSchema = new Schema({
    title: String
    , body: String
    , comments: [CommentSchema]
});

const post = {
    title: '2nd post'
    , body: '2nd blog post DUDEEEEEWWWWWWW cu'
    , date: Date.now()
};

const comment = {
    title: '2nd comment'
    , body: '2nd comment DUDEEEEEWWWWWWW cus'
    , date: Date.now()
};

const BlogPostModel = mongoose.model('blogposts', BlogPostSchema);
const BlogPost = new BlogPostModel(post);
const id = '57ba198af4c84ae4080de71f';

BlogPostModel.findById(id, (err, post) => {
    if (err) return console.log('Error: ', err);

    console.log('póst: ', post);

    post.comments[0].remove();

    post.save((err, data)=> {
        if (err) return console.log('Data: ', data);
        return console.log('Data: ', data);
    });
});
