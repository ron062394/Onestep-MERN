const Cart = require('../models/cart.js');

// Add a product to the cart
const addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        // Check if the product is already in the cart
        let cart = await Cart.findOne({ user: req.user._id });

        if (!cart) {
            // If the cart doesn't exist, create a new one
            cart = new Cart({ user: req.user._id, products: [{ product: productId, quantity }] });
        } else {
            // If the cart exists, check if the product is already in the cart
            const productIndex = cart.products.findIndex(item => item.product === productId);
            if (productIndex !== -1) {
                // If the product is already in the cart, update the quantity
                cart.products[productIndex].quantity += quantity;
            } else {
                // If the product is not in the cart, add it to the cart
                cart.products.push({ product: productId, quantity });
            }
        }

        // Save the updated cart
        await cart.save();

        res.status(201).json(cart);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get the user's cart
const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id }).populate('products.product');
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Remove a product from the cart
const removeFromCart = async (req, res) => {
    try {
        const { productId } = req.params;

        const cart = await Cart.findOne({ user: req.user._id });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Remove the product from the cart
        cart.products = cart.products.filter(item => item.product.toString() !== productId);

        // Save the updated cart
        await cart.save();

        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    addToCart,
    getCart,
    removeFromCart
};
