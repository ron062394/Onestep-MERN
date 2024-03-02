const Cart = require('../models/cart.js');

// Add a product to the cart
const addToCart = async (req, res) => {
    try {
        const { products } = req.body;

        let cart = await Cart.findOne({ user: req.user._id });

        if (!cart) {
            // If cart doesn't exist, create a new one
            cart = new Cart({ user: req.user._id, products });
        } else {
            // If cart exists, loop through each product to add or update
            products.forEach(({ product, size, quantity }) => {
                const existingProductIndex = cart.products.findIndex(item => 
                    item.product.toString() === product && item.size === size
                );

                if (existingProductIndex !== -1) {
                    // If product with the same ID and size is already in the cart, update its quantity
                    cart.products[existingProductIndex].quantity += quantity;
                } else {
                    // If product is not in the cart, add it
                    cart.products.push({ product, size, quantity });
                }
            });
        }

        // Save the cart
        await cart.save();

        // Respond with the updated cart
        res.status(201).json(cart);
    } catch (err) {
        // Handle errors
        res.status(400).json({ message: err.message });
    }
};



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

const removeFromCart = async (req, res) => {
    try {
        const { productId } = req.params;

        const cart = await Cart.findOne({ user: req.user._id });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        cart.products = cart.products.filter(item => item.product.toString() !== productId);
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
