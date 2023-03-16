import axios from 'axios';

export async function fetchUser() {
  const response = await axios.get('/api/user/1');
  return response.data;
}
