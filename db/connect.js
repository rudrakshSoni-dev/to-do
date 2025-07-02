// db/connect.js
const mongoose = require('mongoose');

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    throw err;
  }
};

module.exports = connectDB;
