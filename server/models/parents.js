const mongoose = require("mongoose");

const ParentSchema = new mongoose.Schema({
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
  student_email: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("Parent", ParentSchema);
