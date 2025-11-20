const User = require("../models/Users");
const bcrypt = require("bcrypt");
const { validateSignUpData } = require("../utils/validation");

const signup = async (req, res) => {
  try {
    validateSignUpData(req);
    const { firstName, lastName, age, gender, password, emailId } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ emailId });
    if (existingUser) {
      return res.status(400).json({ error: "User Already Exists !.." });
    }

    // hashed the password
    const hashPassword = await bcrypt.hash(password, 10);

    //create User
    const user = await User.create({
      firstName,
      lastName,
      age,
      emailId,
      gender,
      password: hashPassword,
    });

    return res.status(201).json({
      message: "User created succssfully",
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      gender: user.gender,
      photoUrl: user.photoUrl,
      emailId: user.emailId,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { signup };
