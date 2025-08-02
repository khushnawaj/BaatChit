import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Only one /api
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

axiosInstance.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('baatchitUser'));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('baatchitUser');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;