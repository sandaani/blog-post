// routes/postRoutes.js
const express = require('express');
const { createPost, getPosts, getPostById, updatePost, deletePost } = require('../controllers/postController');  // Import controller functions
const router = express.Router();

// Create a new post
router.post('/', createPost);

// Get all posts
router.get('/', getPosts);

// Get a single post by ID
router.get('/:id', getPostById);

// Update a post by ID
router.put('/:id', updatePost);

// Delete a post by ID
router.delete('/:id', deletePost);

module.exports = router;
