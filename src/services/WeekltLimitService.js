import axios from "axios";

export async function setWeeklyLimitService(postData) {
  const url = "/api/user/1/weeklylimit";
  const headers = {
    Authorization: "Bearer myToken",
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.post(url, postData, { headers });
    return response.data;
  } catch (error) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    return error.response.data;
  }
}

export async function resetWeeklyLimitService() {
  const url = "/api/user/1/resetWeeklylimit";
  const headers = {
    Authorization: "Bearer myToken",
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.post(url, {}, { headers });
    return response.data;
  } catch (error) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    return error.response.data;
  }
}
