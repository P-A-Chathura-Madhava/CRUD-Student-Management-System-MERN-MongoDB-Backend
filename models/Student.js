const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  id: String,
  name: String,
  address: String,
  contact: String,
});

const StudentModel = mongoose.model("students", StudentSchema);
module.exports = StudentModel;
