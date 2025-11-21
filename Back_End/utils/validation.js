const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, emailId, password, age } = req.body;
  if (!firstName) {
    throw new Error(`Please enter your firstName`);
  } else if (firstName.length < 3 || firstName.length > 10) {
    throw new Error("Please enter first name between 3-10 characters");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("please enter valid email");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("please enter a strong password");
  } else if (age < 15) {
    throw new Error("You are too younger too access the poratal ");
  } else if (age > 120) {
    throw new Error("please enter a valid age ");
  }
};

const validateLoginData = (req) => {
  const { emailId, password } = req.body;

  if (!emailId || !validator.isEmail(emailId)) {
    throw new Error("Please enter a valid email");
  }

  if (!password) {
    throw new Error("Password is required");
  }
};

module.exports = { validateSignUpData, validateLoginData };
