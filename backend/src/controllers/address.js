
const User = require('../models/user');

// Controller method to add a new address to a user

const addAddress = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Assuming the address data is passed in the request body
    const { name, address, contact } = req.body;
    user.deliveryAddresses.push({ name, address, contact });
    await user.save();
    
    res.status(201).json({ message: 'Address added successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};


module.exports = {
    addAddress,
};
  