import axios from 'axios';

export async function fetchUserPayments() {
  const response = await axios.get('api/user/1/payments');
  if (response.status>=400) {
    throw new Error("Error setting weekly limit");
  }
  return response.data;
}
