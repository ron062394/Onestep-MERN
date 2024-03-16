const Order = require('../models/order');
const Cart = require('../models/cart');

const createOrder = async (req, res) => {
    try {
        const { user, products, status } = req.body;
        const order = await Order.create({ user, products, status });
        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const checkoutCart = async (req, res) => {
    try {
        const { cartId } = req.params;
        const cart = await Cart.findById(cartId).populate('products.product');
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        const order = new Order({
            user: cart.user,
            products: cart.products.map(item => ({
                product: item.product._id,
                quantity: item.quantity,
                size: item.size
            })),
            status: 'Pending'
        });

        const savedOrder = await order.save();
        cart.products = [];
        await cart.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createOrder,
    checkoutCart
};
