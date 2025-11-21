const User = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  validateSignUpData,
  validateLoginData,
} = require("../utils/validation");

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

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.status(201).json({
      message: "User created succssfully",
      token,
      firstName: user.firstName,
      lastName: user.lastName || "",
      age: user.age,
      gender: user.gender,
      photoUrl: user.photoUrl,
      emailId: user.emailId,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const signin = async (req, res) => {
  try {
    validateLoginData(req);

    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // create token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        firstName: user.firstName,
        lastName: user.lastName || "",
        age: user.age,
        gender: user.gender,
        photoUrl: user.photoUrl,
        emailId: user.emailId,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { signup, signin };
