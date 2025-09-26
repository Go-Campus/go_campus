// Authentication utility functions

/**
 * Store authentication token in localStorage
 * @param {string} token - JWT token
 */
export const setAuthToken = (token) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('authToken', token);
  }
};

/**
 * Get authentication token from localStorage
 * @returns {string|null} - JWT token or null
 */
export const getAuthToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('authToken');
  }
  return null;
};

/**
 * Remove authentication token from localStorage
 */
export const removeAuthToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  }
};

/**
 * Store user data in localStorage
 * @param {object} user - User data object
 */
export const setUser = (user) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(user));
  }
};

/**
 * Get user data from localStorage
 * @returns {object|null} - User data or null
 */
export const getUser = () => {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
  return null;
};

/**
 * Check if user is authenticated
 * @returns {boolean} - True if user is authenticated
 */
export const isAuthenticated = () => {
  const token = getAuthToken();
  const user = getUser();
  return !!(token && user);
};

/**
 * Clear all authentication data
 */
export const clearAuth = () => {
  removeAuthToken();
};

/**
 * Login user and store token and user data
 * @param {string} token - JWT token
 * @param {object} user - User data
 */
export const loginUser = (token, user) => {
  setAuthToken(token);
  setUser(user);
};

/**
 * Logout user and clear all auth data
 */
export const logoutUser = () => {
  clearAuth();
  // Redirect to login page
  if (typeof window !== 'undefined') {
    window.location.href = '/login';
  }
};
