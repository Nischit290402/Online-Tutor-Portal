const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  tutor_email: {
    type: String,
    trim: true,
    required: true,
  },
  index: Number,
  title: String,
  image: String,
  driveURL: String,
});

module.exports = mongoose.model("Course", CourseSchema);
