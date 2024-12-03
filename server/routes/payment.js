const express = require('express');
const router = express.Router();
const Payment = require('../models/payments');
const { body, validationResult } = require('express-validator');

// Add Payment Route
router.post('/add', (req, res) => {
  const { payment_id, user_id, order_id, amount, status } = req.body;

  const payment = { payment_id, user_id, order_id, amount, status };

  Payment.addPayment(payment, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ error: 'Failed to add payment' });
    }
    res.status(201).send({ message: 'Payment added successfully', result });
  });
});

// Add Payment Route with Validation
router.post(
    '/add',
    [
      body('payment_id').notEmpty().withMessage('Payment ID is required'),
      body('user_id').isInt().withMessage('User ID must be an integer'),
      body('amount').isDecimal().withMessage('Amount must be a decimal number'),
      body('status').notEmpty().withMessage('Status is required'),
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { payment_id, user_id, order_id, amount, status } = req.body;
  
      const payment = { payment_id, user_id, order_id, amount, status };
  
      Payment.addPayment(payment, (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).send({ error: 'Failed to add payment' });
        }
        res.status(201).send({ message: 'Payment added successfully', result });
      });
    }
  );


module.exports = router;
