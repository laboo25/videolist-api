const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config()
const router = require("./routes");
const dbConnection = require("./config/dbConnection");

// Middleware
app.use(cors()); // Allow all origins during development. Configure properly for production.
app.use(express.json());

// Routes
app.use(router);

// Database connection
dbConnection();

// Home route
app.get("/", (req, res) => {
    console.log("Hello World");
    res.send('hello world')
});

// Server setup
const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on localhost http://localhost:${port}`);
});
