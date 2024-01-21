const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['owner', 'staff'],
        default: 'staff',
    },
    canAddStaff: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
