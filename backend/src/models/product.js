const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: { 
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
        image: {
        type: String,
        required: true
    },
        category: {
        type: String,
        required: true
    },
    ratings: {
        type: Number,
        default: 0
    },
    totalRatings: {
        type: Number,
        default: 0
    },
    qtySold: {
        type: Number,
        default: 0
    },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
