const Address = require("../Models/Address");

// ADD ADDRESS
const addAddress = async (req, res) => {
  try {
    const newAddress = new Address(req.body);
    const savedAddress = await newAddress.save();
    res.status(201).json(savedAddress);
  } catch (error) {
    res.status(500).json({ message: "Address not saved", error });
  }
};

// GET ADDRESS
const getAddress = async (req, res) => {
  try {
    const address = await Address.find({ userId: req.params.userId });
    res.status(200).json(address);
  } catch (error) {
    res.status(500).json({ message: "Address not found", error });
  }
};

module.exports = { addAddress, getAddress };