const mongoose = require("mongoose");
const config = require("config");

// const dbgr = require("debug")("development:mongoose");

// .connect(`${config.get("MONGODB_URI")}/bank`)
mongoose
  .connect("mongodb://localhost:27017/bank")
  .then(function () {
    console.log("connected");
    // dbgr("connected");
  })
  .catch(function (err) {
    console.log(err);
    // dbgr(err);
  });

module.exports = mongoose.connection;
