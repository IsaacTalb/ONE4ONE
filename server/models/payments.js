const db = require('../config/database');

const Payment = {};

// Add Payment Function
Payment.addPayment = (payment, callback) => {
  const query = `
    INSERT INTO payments (payment_id, user_id, order_id, amount, status) 
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(
    query,
    [payment.payment_id, payment.user_id, payment.order_id || null, payment.amount, payment.status],
    (err, result) => {
      if (err) return callback(err);
      return callback(null, result);
    }
  );
};

module.exports = Payment;
