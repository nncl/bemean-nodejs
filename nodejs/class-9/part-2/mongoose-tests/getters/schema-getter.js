'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

let onlyUpperCase = (v) => v.toUpperCase();

const CommentsSchema = new Schema({
    title: String,
    body: String,
    date: Date
});

const BlogPostSchema = new Schema({
    title: {type: String, get: onlyUpperCase},
    body: String,
    comments: [CommentsSchema]
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);
