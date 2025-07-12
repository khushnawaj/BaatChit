const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database.js');

const app = express();
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Baat-Chit API working");
});

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/messages', require('./routes/message'));

module.exports = app;
