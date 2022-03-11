const mongoose = require("mongoose");

const EnrolledSchema = new mongoose.Schema({
  course_ID: {
    type: String,
    trim: true,
    required: true,
  },
  student_email: {
    type: String,
    trim: true,
    required: true,
  },
  date_of_enrollment: {
    type: Date,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("Enrolled", EnrolledSchema);
