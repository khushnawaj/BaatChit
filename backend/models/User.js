const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"]
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please enter password"]
  },
  profilePic: {
    type: String,
    default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
