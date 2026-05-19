import axios from 'axios';

const API = axios.create({
  // Prefer explicit NEXT_PUBLIC_API_URL when set (e.g. production).
  // In development use same-origin `/api` so Next.js can proxy requests and avoid CORS issues.
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  withCredentials: true,
  timeout: 10000, // ⭐ 10 seconds timeout
});

// Request logger
API.interceptors.request.use((config) => {
  // eslint-disable-next-line no-console
  console.log('[API] Request:', config.method?.toUpperCase(), config.url);
  return config;
});

// Response/error logger
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // eslint-disable-next-line no-console
    if (error.config) {
      console.error('[API] Error:', error.config.method?.toUpperCase(), error.config.url, error.message);
    } else {
      console.error('[API] Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default API;