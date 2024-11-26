const express = require('express')
const { paymentGateway } = require('../../controller/paymentController');
const router = express.Router();

// PAYMENT ROUTES
router.post('/payment', paymentGateway);
 
module.exports = router;
