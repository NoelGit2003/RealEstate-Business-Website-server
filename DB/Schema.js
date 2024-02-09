const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const BlogPost = new Schema({
  author: String,
  title: String,
  body: String,
  date: Date
});

module.exports = {BlogPost};