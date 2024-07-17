const mongoose = require("mongoose");
const user = require("./userModel");

const transactionSchema = mongoose.Schema({
  account: Number,
  date: Date,
  credit: Number,
  debit: Number,
  balance: Number,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

transactionSchema.pre("save", function (next) {
  this.balance = this.credit - this.debit;
  next();
});

module.exports = mongoose.model("transaction", transactionSchema);
