const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config()
const router = require("./routes");
const dbConnection = require("./config/dbConnection");

app.use(cors());
app.use(express.json());
app.use(router)
const port = 5000;
dbConnection()

app.get("/", (req, res) => {
    console.log("Hello World");
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`Server is running on localhost http://localhost:${port}`);
})
