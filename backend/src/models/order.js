const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
		products: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Product',
		required: true
	}],
	status: {
		type: String,
		enum: ['Pending', 'Processing', 'Shipped', 'Delivered'],
		default: 'Pending'
	},
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
