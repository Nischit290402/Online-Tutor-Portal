const mongoose = require("mongoose");

const TutorSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
  },
  role: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  qualification: {
    type: String,
    trim: true,
    required: true,
  },
  experience: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("Tutor", TutorSchema);
