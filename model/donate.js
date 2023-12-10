const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  foodType: String,
  quantity: Number,
  donationDate: { type: Date, default: Date.now },
  beneficiary: { type: mongoose.Schema.Types.ObjectId, ref: 'Beneficiary' }
});

module.exports = mongoose.model('Donation', donationSchema);
