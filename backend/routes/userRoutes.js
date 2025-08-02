const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../controllers/userController");
const protect = require("../middlewares/authMiddlware");

// Protected route
router.get("/api", protect, getAllUsers);

module.exports = router;
