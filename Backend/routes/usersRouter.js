const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");
const transactionModel = require("../models/customerTransactions");
const employmentModel = require("../models/customerEmploymentDetails");

router.get("/", function (req, res) {
  res.send("Hello from user");
});

router.post("/register", async function (req, res) {
  res.send("hello user");
  try {
    let {
      firstname,
      middlename,
      lastname,
      dob,
      houseno,
      buildingno,
      subbuilding,
      street,
      city,
      postalcode,
      state,
      country,
    } = req.body;

    let createdUser = await userModel.create({
      firstname,
      middlename,
      lastname,
      dob,
      address: {
        houseno,
        buildingno,
        subbuilding,
        street,
        city,
        postalcode,
        state,
        country,
      },
    });

    // if (middlename) {
    //   createdUser.middlename = middlename;
    // }
    // res.status(201).send(createdUser);
    // console.log("HI");
  } catch (err) {
    console.log(err.message);
  }
});

router.post("/login", function (req, res) {
  try {
    let { username, password } = req.body;
    let account = accountModel.findOne({ email: email });
    if (account) return res.send(401).send("USer already exixting");

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) return res.send(err.message);
        else {
          let account = await accountModel.create({
            username,
            password,
          });
          let token = jwt.sign(
            { password: account.password },
            process.env.JWT_KEY
          );
          res.cookie("token", token);
          res.send("Account made successfully");
        }
      });
    });
  } catch (err) {
    console.log(err.message);
  }
});

router.post("/credit", async function (req, res) {
  const { user_id, credit, account, date } = req.body;

  if (!user_id || !credit || credit <= 0) {
    return res.status(400).json({ error: "Invalid input" });
  }

  try {
    const user = await userModel.findById(user_id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // let transaction = await transactionModel.findOne({ user: user._id });

    // if (!transaction) {
    //   transaction = new transactionModel({ user: user._id });
    // }

    // transaction.credit += amount;
    // transaction.balance = transaction.totalCredited - transaction.totalDebited;

    // await transaction.save();

    let transaction = transactionModel.create({
      user_id: user._id,
      account: account,
      date: date,
      credit: credit,
      debit: 0,
    });

    res.status(200).json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to process transaction" });
  }
});
router.post("/debit", async function (req, res) {
  const { user_id, debit, account, date } = req.body;

  if (!user_id || !debit || debit <= 0) {
    return res.status(400).json({ error: "Invalid input" });
  }

  try {
    const user = await userModel.findById(user_id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // let transaction = await transactionModel.findOne({ user: user._id });

    // if (!transaction) {
    //   transaction = new transactionModel({ user: user._id });
    // }

    // transaction.debit += amount;
    // transaction.balance = transaction.debit - transaction.totalDebited;

    // await transaction.save();

    let transaction = transactionModel.create({
      user_id: user._id,
      account: account,
      date: date,
      credit: 0,
      debit: debit,
    });

    res.status(200).json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to process transaction" });
  }
});

router.put("/update", async function (req, res) {
  const { user_id } = req.params;
  const {
    firstname,
    middlename,
    lastname,
    email,
    houseno,
    buildingno,
    subbuilding,
    street,
    city,
    postalcode,
    state,
    country,
    employmentStatus,
    industry,
    occupation,
    annualincome,
  } = req.body;

  const newDetails1 = {
    firstname,
    middlename,
    lastname,
    middlename,
    houseno,
    buildingno,
    subbuilding,
    street,
    city,
    postalcode,
    state,
    country,
  };

  const newDetails2 = {
    employmentStatus,
    industry,
    occupation,
    annualincome,
  };

  for (const key in otherDetails) {
    if (otherDetails[key] === undefined) {
      delete otherDetails[key];
    }
  }

  // userModel.findOne({ _id: user_id });
  const result1 = await userModel.updateOne;
  ({ _id: user_id }), { $set: newDetails1 };

  // employmentModel.findOne({ _id: user_id });
  const result2 = await employmentModel.updateOne;
  ({ _id: user_id }), { $set: newDetails2 };
});

module.exports = router;
