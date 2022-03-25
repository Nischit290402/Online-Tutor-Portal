const mongoose = require("mongoose");

const TimeTableSchema = new mongoose.Schema({
  course_id: {
    type: String,
    trim: true,
    required: true,
  },
  day: {
    type: String,
    trim: true,
    required: true,
  },
  time: {
    type: String,
    trim: true,
    required: true,
  },
  meet_link: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("User", TimeTableSchema);
