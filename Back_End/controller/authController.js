const User = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
    const { emailId, password } = req.body;

    if (!emailId || !password) {
      return res
        .status(400)
        .json({ message: "Please enter emailId and Password" });
    }

    const user = await User.findOne({ emailId }).select("+password");
    if (!user) {
      return res
        .status(400)
        .json({ message: "please enter a valid emailId & password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "please enter a valid password" });
    }

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
