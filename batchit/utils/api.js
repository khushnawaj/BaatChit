
import axiosInstance from './axiosInstance';

export const loginUser = async (data) => {
  const res = await axiosInstance.post('/auth/login', data);
  return res.data;
};

export const registerUser = async (data) => {
  const res = await axiosInstance.post('/auth/register', data);
  return res.data;
};

// export const registerUser = async (data) => {
//   try {
//     const response = await axios.post('/api/auth/register', data);
//     return response.data;
//   } catch (error) {
//     throw error.response?.data?.message || 'Registration failed';
//   }
// };