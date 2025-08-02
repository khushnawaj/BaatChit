const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// REGISTER USER
exports.registerUser = async (req, res) => {
  try {
    console.log('Register request body:', req.body);

    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "Request body is missing"
      });
    }

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, and password"
      });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(String(password), 12); // ensure password is string

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      profilePic: req.body.profilePic || "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    });

    res.status(201).json({
      success: true,
      token: generateToken(user._id),
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        profilePic: user.profilePic
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      success: false,
      message: "Server error during registration"
    });
  }
};

// LOGIN USER
exports.loginUser = async (req, res) => {
  try {
    console.log('Login request body:', req.body);

    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "Request body is missing"
      });
    }

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password"
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    const isMatch = await bcrypt.compare(String(password), user.password); // ensure password is string
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    res.json({
      success: true,
      token: generateToken(user._id),
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        profilePic: user.profilePic
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: "Server error during login"
    });
  }
};
