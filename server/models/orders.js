const db = require('../config/database');

const Order = {
    create: (order, callback) => {
        db.query(
            'INSERT INTO orders (user_id, total_amount, order_status) VALUES (?, ?, ?)',
            [order.user_id, order.total_amount, 'Pending'],
            callback
        );
    },
    getByUserId: (user_id, callback) => {
        db.query('SELECT * FROM orders WHERE user_id = ?', [user_id], callback);
    }
};

module.exports = Order;
