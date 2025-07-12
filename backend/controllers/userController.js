const User = require("../models/User");

// GET /api/users?search=xyz
const getAllUsers = async (req, res) => {
  const keyword = req.query.search
    ? {
      $or: [
        { name: { $regex: req.query.search, $options: "i" } },
        { email: { $regex: req.query.search, $options: "i" } }
      ]
    }
    : {};

  try {
    const users = await User.find({
      ...keyword,
      _id: { $ne: req.user._id } // exclude current user
    }).select("-password");

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getAllUsers };
