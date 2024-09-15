import axios from 'axios';

const API_URL = '/api'; // Adjust based on your API URL

export const fetchSubscriptions = () => {
  return axios.get(`${API_URL}/subscriptions`);
};

export const login = (credentials) => {
  return axios.post(`${API_URL}/login`, credentials);
};

export const signup = (userData) => {
  return axios.post(`${API_URL}/signup`, userData);
};

// Add more API functions as needed
