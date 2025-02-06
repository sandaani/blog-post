// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  // Add other fields like `author`, `date`, etc. if needed
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
