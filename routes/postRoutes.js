const express = require("express");
const multer = require("multer");
const { createPost, getAllPosts } = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", authMiddleware, upload.single("image"), createPost);
router.get("/", getAllPosts);

module.exports = router;
