const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database.js');

const app = express();
dotenv.config();
connectDB();

// Enhanced CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

// Handle preflight requests
app.options('*', cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Baat-Chit API working");
});

// Routes - properly mounted
app.use('/auth', require('./routes/authRoutes'));
app.use('/users', require('./routes/userRoutes'));

module.exports = app;