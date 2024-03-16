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

        // Find the cart by its ID and populate the 'user' field
        const cart = await Cart.findById(cartId).populate('user').populate('products.product');
        
        // Check if the cart exists
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Check if the authenticated user owns the cart
        if (cart.user._id.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Unauthorized access to cart' });
        }

        // Proceed with checkout process
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
