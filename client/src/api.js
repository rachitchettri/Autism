import axios from 'axios';

// ✅ Base API instance with base URL
export const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Change this for production
});

// ✅ Attach JWT automatically if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Example named exports (optional)
export const register = (payload) => api.post('/auth/register', payload);
export const login = (payload) => api.post('/auth/login', payload);
export const recordGame = (payload) => api.post('/games/record', payload);
export const getMyProgress = () => api.get('/games/my-progress');
export const getAllChildren = () => api.get('/games/all-children');
export const getQuote = () => api.get('/quotes/random');
