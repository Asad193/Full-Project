// ParsedResume.js

const mongoose = require("mongoose");

const parsedResumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  education: [String], // ← change from String to [String]
  skills: [String],
  experience: [String], // ← change from String to [String]
});

module.exports = mongoose.model("ParsedResume", parsedResumeSchema);
