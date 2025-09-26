# API Utilities Documentation

This directory contains reusable API utilities for making HTTP requests to the backend.

## Files

- `api.js` - Main API utilities with axios instance and helper functions
- `auth.js` - Authentication utility functions for token management
- `api-examples.js` - Usage examples for the API utilities

## Setup

1. Install axios (already done):
   ```bash
   npm install axios
   ```

2. Set environment variable:
   Create `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
   ```

## Usage

### Basic API Functions

```javascript
import { getData, postData, putData, deleteData } from '../utils/api.js';

// GET request
const users = await getData('/users');

// POST request
const newUser = await postData('/users', { name: 'John', email: 'john@example.com' });

// PUT request
const updatedUser = await putData('/users/123', { name: 'John Updated' });

// DELETE request
await deleteData('/users/123');
```

### Using apiUtils Object

```javascript
import { apiUtils } from '../utils/api.js';

// GET request
const events = await apiUtils.get('/events');

// POST request
const newEvent = await apiUtils.post('/events', eventData);

// PATCH request
const updatedEvent = await apiUtils.patch('/events/123', { title: 'New Title' });
```

### Direct Axios Instance

```javascript
import api from '../utils/api.js';

// Custom configuration
const response = await api.get('/events', {
  params: { page: 1, limit: 10 },
  timeout: 5000
});
```

### Authentication

```javascript
import { loginUser, logoutUser, isAuthenticated, getAuthToken } from '../utils/auth.js';

// Login
loginUser(token, userData);

// Check if authenticated
if (isAuthenticated()) {
  // User is logged in
}

// Get token
const token = getAuthToken();

// Logout
logoutUser();
```

## Features

- **Automatic Token Management**: Tokens are automatically added to requests
- **Error Handling**: Common errors (401, network) are handled automatically
- **Request/Response Interceptors**: Automatic token injection and error handling
- **TypeScript Support**: Full type safety (if using TypeScript)
- **SSR Safe**: Works with Next.js server-side rendering

## Error Handling

The API utilities automatically handle:
- 401 Unauthorized: Clears token and redirects to login
- Network errors: Logs error and throws
- Other HTTP errors: Throws with response data

## Backend Integration

The utilities are configured to work with the existing backend API:
- Base URL: `http://localhost:3001/api/v1`
- Authentication: Bearer token in Authorization header
- Content-Type: application/json

## Login Integration

The login page now uses these utilities:
- Calls `/auth/login` endpoint
- Stores token and user data on success
- Handles errors and loading states
- Redirects to home page on success
