import { useState } from 'react';
import { addPayment } from '../services/paymentService';

const Payment = () => {
  const [formData, setFormData] = useState({
    payment_id: '',
    user_id: '',
    amount: '',
    status: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addPayment(formData);
      alert('Payment added successfully!');
      console.log(response);
    } catch (error) {
      alert('Failed to add payment.');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="payment_id"
        placeholder="Payment ID"
        value={formData.payment_id}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="user_id"
        placeholder="User ID"
        value={formData.user_id}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        step="0.01"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />
      <select name="status" value={formData.status} onChange={handleChange} required>
        <option value="">Select Status</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">Submit Payment</button>
    </form>
  );
};

export default Payment;
