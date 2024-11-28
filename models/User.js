const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Teacher", "Student"], // Define acceptable roles
    required: true,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields.

module.exports = mongoose.model("User", userSchema);