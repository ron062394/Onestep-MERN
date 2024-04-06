const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    }
});

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
        type: String, // Changed to string as contact numbers might contain non-numeric characters
        required: true,
    },
    birthDay: {
        type: Date,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    deliveryAddresses: [addressSchema] // Array of delivery addresses
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
