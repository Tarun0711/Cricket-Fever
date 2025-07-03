import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://wicketfever.onrender.com/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Global error handling
axiosClient.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);


export default axiosClient;
