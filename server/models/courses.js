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
  title:{
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    trim: true,
    required: true,
  },
  driveURL: String,
  gmeet: {
    type: String,
    trim: true,
  }
});

module.exports = mongoose.model("Course", CourseSchema);
