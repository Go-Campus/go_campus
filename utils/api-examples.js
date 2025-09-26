// Example usage of the API utilities
import { getData, postData, putData, deleteData, apiUtils } from './api.js';

// Example 1: Using the utility functions
export const exampleUsage = {
  // GET request
  async fetchUser(userId) {
    try {
      const user = await getData(`/users/${userId}`);
      return user;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  },

  // POST request
  async createEvent(eventData) {
    try {
      const newEvent = await postData('/events', eventData);
      return newEvent;
    } catch (error) {
      console.error('Error creating event:', error);
      throw error;
    }
  },

  // PUT request
  async updateEvent(eventId, eventData) {
    try {
      const updatedEvent = await putData(`/events/${eventId}`, eventData);
      return updatedEvent;
    } catch (error) {
      console.error('Error updating event:', error);
      throw error;
    }
  },

  // DELETE request
  async deleteEvent(eventId) {
    try {
      await deleteData(`/events/${eventId}`);
      return true;
    } catch (error) {
      console.error('Error deleting event:', error);
      throw error;
    }
  }
};

// Example 2: Using the apiUtils object
export const exampleApiUtils = {
  async fetchEvents() {
    try {
      const events = await apiUtils.get('/events');
      return events;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  },

  async updateUserProfile(userId, profileData) {
    try {
      const updatedProfile = await apiUtils.patch(`/users/${userId}`, profileData);
      return updatedProfile;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  }
};

// Example 3: Using the axios instance directly
import api from './api.js';

export const exampleDirectApi = {
  async fetchWithCustomConfig() {
    try {
      const response = await api.get('/events', {
        params: { page: 1, limit: 10 },
        timeout: 5000
      });
      return response.data;
    } catch (error) {
      console.error('Error with custom config:', error);
      throw error;
    }
  },

  async uploadFile(file) {
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await api.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }
};
