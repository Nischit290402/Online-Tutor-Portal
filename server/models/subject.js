const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  index: {
    type: Number,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    trim: true,
    required: true,
  },
  title: {
    type: String,
    trim: true,
    required: true,
  },
  course: {
    type: String,
    trim: true,
    required: true,
  },
  desc: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("Subject", SubjectSchema);