import axios from 'axios';

export async function fetchUser() {
  const response = await axios.get('/api/user/1');
  if (response.status>=400) {
    throw new Error("Error setting weekly limit");
  }
  return response.data;
}
