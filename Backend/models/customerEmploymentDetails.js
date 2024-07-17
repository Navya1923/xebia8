const mongoose = require("mongoose");
const user = require("./userModel");

const employmentSchema = mongoose.Schema({
  employmentStatus: String,
  industry: String,
  occupation: String,
  annualincome: String,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("employment", employmentSchema);
