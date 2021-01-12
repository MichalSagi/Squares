const express = require("express");
const authRouter = express.Router();
const bcrypt = require("bcrypt");
const validator = require("validator").default;
const User = require("../models/User");

authRouter.post("/login", async (req, res) => {
  const { userName, password, userEmail } = req.body;
  console.log(req.body)
  const isUserInDB = await User.find({ userName: userName, userEmail: userEmail });
  // console.log(isUserInDB)
  if (!isUserInDB.length) {
    res.status(401).send("User not found");
  }
  if (isUserInDB) {
    const hash = isUserInDB[0].password;
    (await bcrypt.compare(password, hash))
      ? res.status(202).send({ userId: isUserInDB[0]._id, msg: `Welcome back!` })
      : res.status(401).send("password doesn't match");
  }
});

authRouter.post("/register", async (req, res) => {
  const { userName, password, userEmail, birthday, country, city, street, apartment, zipCode, admin } = req.body;
  if (!validator.isEmail(userEmail)) {
    res.status(400).send("The email address was invalid please try again");
  } else {
    const isUserNameTaken = await User.find({ userName: userName });
    if (isUserNameTaken.length) {
      res.status(409).send("The user name is already taken");
    } else {
      const newUser = new User({
        userName: userName,
        password: await bcrypt.hash(password, 10),
        birthday: birthday,
        userEmail: userEmail,
        address: { country: country, city: city, street: street, apartment: apartment, zipCode: zipCode },
        admin: admin,
      });
      newUser
        .save()
        .then((user) => {
          res.status(201).send({ userId: user._id, msg: "success" });
        })
        .catch((error) => {
          res.status(500).send("Oops the user couldn't be saved please try again");
        });
    }
  }
});

module.exports = authRouter;
