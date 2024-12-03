import axios from 'axios';

const API_URL = 'http://localhost:5000/api/payments';

export const addPayment = async (paymentData) => {
  try {
    const response = await axios.post(`${API_URL}/add`, paymentData);
    return response.data;
  } catch (error) {
    console.error('Error adding payment:', error);
    throw error;
  }
};
