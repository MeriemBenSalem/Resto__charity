const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');
const validateDonation = require('../middlewares/validateDonation');

router.post('/donations', validateDonation, donationController.createDonation);

module.exports = router;
