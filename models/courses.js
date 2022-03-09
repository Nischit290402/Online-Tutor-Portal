const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: String,
  description: String,
});

module.exports = mongoose.model("Course", CourseSchema);
