const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const image = req.file ? req.file.path : null;
    const newPost = await Post.create({ title, content, image, createdBy: req.user.id });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("createdBy", "name email");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
