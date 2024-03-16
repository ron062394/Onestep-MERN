const Order = require('../models/order');

const createOrder = async (req, res) => {
    try {
        const { user, products, status } = req.body;
        const order = await Order.create({ user, products, status });
        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


module.exports = {
    createOrder,
};
