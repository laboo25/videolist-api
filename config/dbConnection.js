const mongoose = require("mongoose");

function dbConnection() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('Error connecting to DB:', err));
}

module.exports = dbConnection;
