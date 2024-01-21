const { Timestamp } = require('mongodb');
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
        type: number,
        required: true,
    },
    birthDay: {
        type: date,
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
}, {timestamp: true});

const User = mongoose.model('Guest', guestSchema);

module.exports = User;