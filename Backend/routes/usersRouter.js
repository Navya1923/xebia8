const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");

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

module.exports = router;
