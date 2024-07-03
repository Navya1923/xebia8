const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Firstname required"],
  },
  middlename: String,
  lastname: {
    type: String,
    required: [true, "Lastname required"],
  },
  dob: {
    type: Date,
    required: [true, "Enter Date of Birth"],
  },
  address: {
    houseno: { type: Number },
    buildingno: { type: Number },
    subbuilding: { type: String },
    street: { type: String },
    city: { type: String },
    postalcode: { type: Number },
    state: { type: String },
    country: { type: String },
  },
});

module.exports = mongoose.model("user", userSchema);
