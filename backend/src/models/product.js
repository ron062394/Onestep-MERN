const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    brand: {  
        type: String
    },
    description: { 
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: {
        type: [String], // Change type to an array of strings
        required: true
    },
    colors: {
        type: String,
        required: true
    },
    category: {
        type: [String], // Change type to an array of strings for multiple categories
        required: true
    },
    sizes: [{ // Change 'size' to 'sizes' to store quantities for each size
        size: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    collection: {
        type: String
    },
    features: {
        type: String
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
    promotion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Promotion',
        default: null
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
