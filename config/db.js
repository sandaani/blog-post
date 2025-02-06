const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("🔍 Checking MONGO_URI:", process.env.MONGO_URI); // Debug log

    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing in .env file!");
    }

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

