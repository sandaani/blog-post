// controllers/postController.js
const Post = require('../models/Post');  // Import the Post model

// Create a new post
const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Validate input
    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const newPost = new Post({
      title,
      content,
    });

    await newPost.save();  // Save the new post to the database
    res.status(201).json(newPost);  // Send the created post back in the response
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();  // Get all posts from the database
    res.json(posts);  // Send the posts back in the response
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a single post by ID
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);  // Find a post by ID

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json(post);  // Send the found post back in the response
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a post by ID
const updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Validate input
    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }  // Return the updated post
    );

    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json(updatedPost);  // Send the updated post back in the response
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a post by ID
const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);  // Delete the post by ID

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json({ message: 'Post deleted successfully' });  // Send a success message
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createPost, getPosts, getPostById, updatePost, deletePost };
