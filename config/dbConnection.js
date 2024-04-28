const mongoose = require("mongoose");

function dbConnection() {
    mongoose.connect('mongodb+srv://laboo:laboo@cluster0.yx4uikx.mongodb.net/videolist?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('Error connecting to DB:', err));
}

module.exports = dbConnection;
