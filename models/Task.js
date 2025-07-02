// models/Task.js
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);
