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
    image: {
        type: String,
        required: true
    },
    colors: [{
        type: String
    }],
    category: {
        type: String,
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
    // 'stocks' field is removed as each size will have its own quantity
    promotion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Promotion',
        default: null
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
