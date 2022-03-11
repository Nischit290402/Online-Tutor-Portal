const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  email: String,
  role: String,
  name: String,
});

module.exports = monoose.model("users", usersSchema);
