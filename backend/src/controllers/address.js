const Address = require('../models/address');

// Controller method to add a new address to a user
const addAddress = async (req, res) => {
    try {
        const { street, city, state, postalCode, country } = req.body;
        const address = await Address.findByIdAndUpdate(req.params.addressId, { street, city, state, postalCode, country }, { new: true });
        if (!address) {
          return res.status(404).json({ message: 'Address not found' });
        }
        res.json({ message: 'Address updated successfully', address });
      } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
      }try {
        const { street, city, state, postalCode, country } = req.body;
        const address = await Address.findByIdAndUpdate(req.params.addressId, { street, city, state, postalCode, country }, { new: true });
        if (!address) {
          return res.status(404).json({ message: 'Address not found' });
        }
        res.json({ message: 'Address updated successfully', address });
      } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
      }
};

const editAddress = async (req, res) => {
  try {
    const { street, city, state, postalCode, country } = req.body;
    const address = await Address.findByIdAndUpdate(req.params.addressId, { street, city, state, postalCode, country }, { new: true });
    if (!address) {
      return res.status(404).json({ message: 'Address not found' });
    }
    res.json({ message: 'Address updated successfully', address });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};


module.exports = {
    addAddress,
    editAddress,
};
  