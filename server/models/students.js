const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
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
  year_of_study: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Student", StudentSchema);
