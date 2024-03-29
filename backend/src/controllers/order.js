const Order = require('../models/order');
const Cart = require('../models/cart');
const Product = require('../models/product');

const checkoutSingleItem = async (req, res) => {
    try {
        const { user, products } = req.body;

        // Extract product details from the request body
        const { product: productId, quantity, size } = products[0];

        // Find the product by its ID
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: `Product ${productId} not found` });
        }

        // Find the size object in the product's sizes array
        const sizeObj = product.sizes.find(s => s.size === size);
        if (!sizeObj) {
            return res.status(400).json({ message: `Size ${size} not found for product ${productId}` });
        }

        // If requested quantity exceeds available stock, inform the user
        if (quantity > sizeObj.quantity) {
            return res.status(400).json({ message: `Requested quantity exceeds available stock for product ${product.product} - ${size}` });
        }

        // If available stock is zero, inform the user that the item is no longer available
        if (sizeObj.quantity === 0) {
            return res.status(400).json({ message: `Product ${product.product} - ${size} is out of stock and is no longer available` });
        }

        // Reduce the stock of the product and update qtySold
        sizeObj.quantity -= quantity;
        product.qtySold += quantity;
        await product.save();

        // Proceed with creating the order
        const order = await Order.create({
            user: user,
            products: [{
                product: productId,
                quantity: quantity,
                size: size
            }],
            status: 'Pending'
        });

        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
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

        // Array to store modifications made to the cart
        const modifications = [];

        // Check if there are enough items in stock for each product size in the cart
        for (const item of cart.products) {
            const product = await Product.findById(item.product);
            if (!product) {
                return res.status(404).json({ message: `Product ${item.product} not found` });
            }

            // Find the size object in the product's sizes array
            const sizeObj = product.sizes.find(size => size.size === item.size);
            if (!sizeObj) {
                return res.status(400).json({ message: `Size ${item.size} not found for product ${product._id}` });
            }

            // Check if the requested quantity exceeds the available stock for the size
            if (item.quantity > sizeObj.quantity) {
                // If available stock is zero, remove the item from the cart
                if (sizeObj.quantity === 0) {
                    cart.products = cart.products.filter(cartItem => cartItem.product.toString() !== item.product.toString());
                    modifications.push(`Product ${product.product} - ${item.size} is out of stock and has been removed from the cart`);
                } else {
                    // Update cart item quantity based on available stock
                    item.quantity = sizeObj.quantity;
                    modifications.push(`Quantity updated for product ${product.product} - ${item.size}: ${sizeObj.quantity}`);
                }
                await cart.save();
            } else {
                // Reduce the stock of the product and update qtySold only if no modifications are made to the cart
                sizeObj.quantity -= item.quantity;
                product.qtySold += item.quantity;
                await product.save();
            }
        }

        // If modifications were made to the cart, inform the user and do not proceed with the order
        if (modifications.length > 0) {
            return res.status(400).json({ message: 'Modifications made to your cart:', modifications });
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


const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('user').populate({
            path: 'products.product',
            select: 'product price' // You can select specific fields to populate if needed
        });
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = {
    checkoutSingleItem,
    checkoutCart,
    getAllOrders
};
