const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  studentId: { type: String, required: true },
  college: { type: String, required: true },
  department: { type: String, required: true },
  contact: { type: String, required: true },
});

const Form = mongoose.model("Form", userSchema);

module.exports = Form;
