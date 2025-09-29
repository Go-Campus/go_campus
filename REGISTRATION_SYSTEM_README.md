# Registration System Implementation

This document describes the complete ticket registration functionality implemented in the go_campus project, mirroring the eventhex-saas-landing registration system.

## Overview

The registration system provides a comprehensive solution for event ticket registration with dynamic form fields, payment integration, and user feedback. It includes:

- Dynamic form field rendering
- Form validation with Zod-like validation
- Payment integration with Razorpay
- Coupon code functionality
- Success/error handling
- Responsive design

## File Structure

```
go_campus/
├── types/
│   └── index.js                    # Type definitions and interfaces
├── lib/
│   ├── form-validation.js          # Form validation utilities
│   ├── form-fields.js              # Form fields fetching and processing
│   └── razorpay.js                 # Razorpay payment integration
├── components/
│   ├── forms/
│   │   ├── DynamicFormField.jsx    # Dynamic form field component
│   │   └── RegistrationForm.jsx    # Main registration form
│   └── modal/
│       └── TicketBookingModal.jsx  # Updated modal with registration
├── app/
│   ├── event-page/
│   │   └── page.jsx                # Event page with registration
│   └── register/
│       └── [ticketId]/
│           └── page.jsx            # Standalone registration page
└── utils/
    └── api.js                      # API utilities
```

## Key Components

### 1. Types and Interfaces (`types/index.js`)

Defines all the TypeScript-like interfaces for:
- Event data structure
- Ticket data structure
- Form field definitions
- Registration data
- Payment and coupon data

### 2. Form Validation (`lib/form-validation.js`)

Provides comprehensive form validation including:
- Field type validation (text, email, number, mobile, etc.)
- Required field validation
- Conditional field validation
- Form data formatting for submission

### 3. Dynamic Form Field (`components/forms/DynamicFormField.jsx`)

Renders different field types dynamically:
- Text inputs (text, email, password, number)
- Textarea
- Select dropdowns
- Multi-select
- Checkboxes
- File uploads
- Mobile number with country code
- Date/time pickers
- Hidden fields
- Display fields (title, info, HTML, line)

### 4. Registration Form (`components/forms/RegistrationForm.jsx`)

Main registration form component with:
- Form state management
- Validation handling
- Payment integration
- Coupon code functionality
- Success/error feedback
- Responsive design

### 5. Payment Integration (`lib/razorpay.js`)

Handles Razorpay payment processing:
- SDK loading
- Payment initialization
- Payment verification
- Error handling

### 6. Form Fields Management (`lib/form-fields.js`)

Manages form field data:
- Fetching from API
- Processing and validation
- Combining event and ticket fields
- Adding consent fields

## Usage

### 1. Event Page Integration

The registration form is integrated into the event page through the `TicketBookingModal`:

```jsx
<TicketBookingModal
  isOpen={registerModal}
  onClose={closeModal}
  eventTitle={event?.title}
  eventDateTime={formattedDateRange}
  ticketPrice={ticketPrice}
  quantity={quantity}
  onQuantityChange={handleQuantityChange}
  onCheckout={handleCheckout}
  type={modalType}
  event={event}
  ticket={tickets[0]}
/>
```

### 2. Standalone Registration Page

Access the registration form directly at `/register/[ticketId]`:

```jsx
// URL: /register/123456789
// Fetches ticket and event data automatically
// Renders full registration form
```

### 3. Form Field Configuration

Form fields are configured through the API or use defaults:

```javascript
const defaultFormFields = [
  {
    _id: "name",
    name: "name",
    label: "Full Name",
    type: "text",
    required: true,
    orderId: 1,
    customClass: "full"
  },
  // ... more fields
];
```

## API Integration

### Required API Endpoints

1. **Ticket Details**: `GET /ticket/{ticketId}`
2. **Event Details**: `GET /event/{eventId}`
3. **Form Fields**: `GET /event-form-fields?event={eventId}`
4. **Form Fields**: `GET /ticket-form-fields?ticket={ticketId}`
5. **Registration**: `POST /authentication/direct`
6. **Coupon Verification**: `POST /verify-coupon`
7. **Payment Verification**: `POST /verify-payment`

### Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
NEXT_PUBLIC_CDN_URL=https://event-manager.syd1.cdn.digitaloceanspaces.com
```

## Form Field Types

Supported field types:
- `text` - Text input
- `email` - Email input with validation
- `password` - Password input
- `number` - Number input
- `mobilenumber` - Mobile number with country code
- `textarea` - Multi-line text
- `select` - Dropdown selection
- `multiSelect` - Multiple selection
- `checkbox` - Checkbox input
- `date` - Date picker
- `datetime` - Date and time picker
- `time` - Time picker
- `file` - File upload
- `image` - Image upload
- `hidden` - Hidden field
- `title` - Display title
- `info` - Information display
- `html` - HTML content
- `line` - Separator line

## Payment Flow

1. User fills registration form
2. Form validation passes
3. Submit to `/authentication/direct`
4. If payment required, initialize Razorpay
5. User completes payment
6. Verify payment with backend
7. Show success message

## Coupon System

1. User enters coupon code
2. Verify with `/verify-coupon` endpoint
3. Apply discount to final price
4. Update form display
5. Include coupon in registration submission

## Error Handling

Comprehensive error handling for:
- Network errors
- Validation errors
- Payment failures
- API errors
- User feedback with SweetAlert2

## Responsive Design

- Mobile-first approach
- Responsive grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## Dependencies

- React 19
- Next.js 15
- Lucide React (icons)
- SweetAlert2 (notifications)
- Axios (API calls)

## Future Enhancements

- Multi-ticket registration
- Group registration
- Advanced form field types
- Custom validation rules
- Form field dependencies
- Offline support
- Progressive Web App features

## Testing

The system includes comprehensive error handling and user feedback. Test with:
- Different form field configurations
- Various payment scenarios
- Network error conditions
- Invalid data inputs
- Mobile and desktop devices

## Support

For issues or questions about the registration system, refer to the eventhex-saas-landing project documentation or contact the development team.
