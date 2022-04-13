const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema({
  course_id: {
    type: String,
    trim: true,
    required: true,
  },
  folder_name: {
    type: String,
    trim: true,
    required: true,
  },
  file_name: {
    type: String,
    trim: true,
    required: true,
  },
  file_url: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("TResourse", ResourceSchema);
