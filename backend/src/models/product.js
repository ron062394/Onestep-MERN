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
    colors: [{
        type: String
    }],
    category: {
        type: String,
        required: true
    },
    size: {
        type: String
    },
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
        ref: 'Promotion'
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
