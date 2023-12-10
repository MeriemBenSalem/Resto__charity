const Beneficiary = require('../models/beneficiaryModel');

exports.createBeneficiary = async (req, res) => {
  try {
    const newBeneficiary = new Beneficiary(req.body);
    const savedBeneficiary = await newBeneficiary.save();
    res.json(savedBeneficiary);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
