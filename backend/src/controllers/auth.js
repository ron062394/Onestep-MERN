const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

const registerUser = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    contactNumber,
    birthDay,
    country,
    password,
  } = req.body;
  console.log(req.body)

  try {
    // Check if email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log()
      return res.status(400).json({ message: "Email already registered" });

    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      contactNumber,
      birthDay,
      country,
      password: hashedPassword,
    });
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);

    res.status(201).json({firstName, token });
  } catch (error) {
    res.status(500).json({ error });
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    console.log(process.env.JWT_SECRET)
    // Send the user's first name along with the token in the response
    res.json({ firstName: user.firstName, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};


const getUserInfo = async (req, res) => {
  const userId = req.user.userId; // Extract user ID from token payload

  try {
    // Fetch user information from the database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserInfo,
};
