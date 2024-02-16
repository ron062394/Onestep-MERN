const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: Number, // Capitalized "Number"
        required: true,
    },
    birthDay: {
        type: Date, // Capitalized "Date"
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true }); // Correct option for timestamps

const User = mongoose.model('User', userSchema); // Model name is "User"

module.exports = User;
