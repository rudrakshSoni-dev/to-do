// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connect');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes

app.use('/api/v1/tasks', taskRoutes);

// Start server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Server error:', error.message);
  }
};

start();
