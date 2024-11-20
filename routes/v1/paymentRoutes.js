const express = require('express')
const { paymentGateway } = require('../../controller/paymentController');
const router = express.Router();

router.post('/payment', paymentGateway);
 
module.exports = router;
