const Donation = require('../models/donationModel');

exports.createDonation = async (req, res) => {
  try {
    const newDonation = new Donation(req.body);
    const savedDonation = await newDonation.save();
    res.json(savedDonation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
