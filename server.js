// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');   // Auth routes
const postRoutes = require('./routes/postRoutes');   // Post routes

dotenv.config(); // Load environment variables from .env

const app = express();
app.use(express.json()); // For parsing JSON bodies
app.use(cors()); // Enable CORS for your app

// Database connection (ensure MongoDB is running)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use the routes
app.use('/api/auth', authRoutes); // Auth routes
app.use('/api/posts', postRoutes); // Post routes

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));