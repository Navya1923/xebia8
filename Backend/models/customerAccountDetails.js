const mongoose = require("mongoose");
const user = require("./userModel");
0;

const accountSchema = mongoose.Schema({
  custId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  username: String,
  password: String,
});

module.exports = mongoose.model("accountModel", accountSchema);
