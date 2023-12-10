const express = require('express');
const router = express.Router();
const beneficiaryController = require('../controllers/beneficiaryController');
const validateBeneficiary = require('../middlewares/validateBeneficiary');

router.post('/beneficiaries', validateBeneficiary, beneficiaryController.createBeneficiary);

module.exports = router;
