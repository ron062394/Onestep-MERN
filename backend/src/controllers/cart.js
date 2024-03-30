const Cart = require('../models/cart.js');

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
                    item.product.toString() === product.toString() && item.size === size
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


const incrementCartItem = async (req, res) => {
    try {
        const { productId, size } = req.params;

        let cart = await Cart.findOne({ user: req.user._id });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const productIndex = cart.products.findIndex(item => 
            item.product.toString() === productId && item.size === size
        );
        if (productIndex === -1) {
            return res.status(404).json({ message: 'Product not found in cart' });
        }

        // Increment the quantity by 1
        cart.products[productIndex].quantity++;

        // Save the cart
        await cart.save();

        // Respond with the updated cart
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const decrementCartItem = async (req, res) => {
    try {
        const { productId, size } = req.params;

        let cart = await Cart.findOne({ user: req.user._id });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const productIndex = cart.products.findIndex(item => 
            item.product.toString() === productId && item.size === size
        );
        if (productIndex === -1) {
            return res.status(404).json({ message: 'Product not found in cart' });
        }

        // If the quantity is 1, remove the item from the cart
        if (cart.products[productIndex].quantity === 1) {
            cart.products.splice(productIndex, 1);
        } else {
            // Decrement the quantity by 1, ensuring it doesn't go below 1
            cart.products[productIndex].quantity--;
        }

        // Save the cart
        await cart.save();

        // Respond with the updated cart
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



module.exports = {
    addToCart,
    getCart,
    removeFromCart,
    incrementCartItem,
    decrementCartItem
};
