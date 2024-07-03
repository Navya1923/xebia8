const mongoose = require("mongoose");

const employmentSchema = mongoose.Schema({
  employmentStatus: String,
  industry: String,
  occupation: String,
  annualincome: String,
});

module.exports = mongoose.model("employment", employmentSchema);
