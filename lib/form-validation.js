// Form validation utilities using Zod-like validation
import { FormFieldType } from '../types';

// Validation error class
export class ValidationError extends Error {
  constructor(message, field = null) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

// Field validation functions
export const validateField = (field, value) => {
  const errors = [];

  // Required field validation
  if (field.required && isEmpty(value, field.type)) {
    errors.push(`${field.label || field.name} is required.`);
    return errors;
  }

  // Skip validation if field is empty and not required
  if (!field.required && isEmpty(value, field.type)) {
    return errors;
  }

  // Type-specific validation
  switch (field.type) {
    case FormFieldType.EMAIL:
      if (value && !isValidEmail(value)) {
        errors.push('Please enter a valid email address');
      }
      break;

    case FormFieldType.NUMBER:
      if (value && !isValidNumber(value)) {
        errors.push('Please enter a valid number');
      }
      if (field.minimum && value < field.minimum) {
        errors.push(`Value must be at least ${field.minimum}`);
      }
      if (field.maximum && value > field.maximum) {
        errors.push(`Value must be at most ${field.maximum}`);
      }
      break;

    case FormFieldType.MOBILE_NUMBER:
      if (value && typeof value === 'object') {
        if (!value.country || !value.number) {
          errors.push('Country code and phone number are required');
        } else if (field.minimum && value.number.length < field.minimum) {
          errors.push(`Phone number must be at least ${field.minimum} digits`);
        } else if (field.maximum && value.number.length > field.maximum) {
          errors.push(`Phone number must be at most ${field.maximum} digits`);
        }
      }
      break;

    case FormFieldType.TEXT:
    case FormFieldType.TEXTAREA:
      if (field.minimum && value.length < field.minimum) {
        errors.push(`Text must be at least ${field.minimum} characters`);
      }
      if (field.maximum && value.length > field.maximum) {
        errors.push(`Text must be at most ${field.maximum} characters`);
      }
      break;

    case FormFieldType.PASSWORD:
      if (value && value.length < 6) {
        errors.push('Password must be at least 6 characters');
      }
      break;

    case FormFieldType.DATE:
    case FormFieldType.DATETIME:
      if (value && !isValidDate(value)) {
        errors.push('Please enter a valid date');
      }
      if (field.minDate && value && new Date(value) < new Date(field.minDate)) {
        errors.push(`Date must be after ${new Date(field.minDate).toLocaleDateString()}`);
      }
      if (field.maxDate && value && new Date(value) > new Date(field.maxDate)) {
        errors.push(`Date must be before ${new Date(field.maxDate).toLocaleDateString()}`);
      }
      break;

    case FormFieldType.TIME:
      if (value && !isValidTime(value)) {
        errors.push('Please enter a valid time (HH:MM)');
      }
      break;

    case FormFieldType.FILE:
    case FormFieldType.IMAGE:
      if (value && value instanceof File) {
        if (field.allowedFileTypes && field.allowedFileTypes.length > 0) {
          const fileType = value.type;
          const isAllowed = field.allowedFileTypes.some(type => fileType.includes(type));
          if (!isAllowed) {
            errors.push(`File type not allowed. Allowed types: ${field.allowedFileTypes.join(', ')}`);
          }
        }
      }
      break;

    case FormFieldType.CHECKBOX:
      if (field.required && value !== true) {
        errors.push('You must accept the terms to continue');
      }
      break;

    case FormFieldType.SELECT:
      if (value && field.options && !field.options.some(opt => opt.value === value)) {
        errors.push('Please select a valid option');
      }
      break;

    case FormFieldType.MULTI_SELECT:
      if (value && Array.isArray(value)) {
        if (field.options) {
          const validValues = field.options.map(opt => opt.value);
          const invalidValues = value.filter(val => !validValues.includes(val));
          if (invalidValues.length > 0) {
            errors.push('Please select valid options');
          }
        }
      }
      break;
  }

  return errors;
};

// Helper functions
export const isEmpty = (value, fieldType) => {
  if (value === null || value === undefined) return true;
  
  switch (fieldType) {
    case FormFieldType.TEXT:
    case FormFieldType.TEXTAREA:
    case FormFieldType.EMAIL:
    case FormFieldType.PASSWORD:
    case FormFieldType.DATE:
    case FormFieldType.DATETIME:
    case FormFieldType.TIME:
    case FormFieldType.SELECT:
      return String(value).trim() === '';
    
    case FormFieldType.NUMBER:
      return value === null || value === undefined || value === '';
    
    case FormFieldType.CHECKBOX:
      return value !== true;
    
    case FormFieldType.MULTI_SELECT:
      return !Array.isArray(value) || value.length === 0;
    
    case FormFieldType.FILE:
    case FormFieldType.IMAGE:
      return !(value instanceof File);
    
    case FormFieldType.MOBILE_NUMBER:
      if (typeof value === 'object' && value !== null) {
        return !value.country || !value.number || String(value.number).trim() === '';
      }
      return true;
    
    default:
      return String(value).trim() === '';
  }
};

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidNumber = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

export const isValidDate = (value) => {
  const date = new Date(value);
  return date instanceof Date && !isNaN(date);
};

export const isValidTime = (value) => {
  const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
  return timeRegex.test(value);
};

// Form validation function
export const validateForm = (formData, formFields) => {
  const errors = {};
  let isValid = true;

  formFields.forEach(field => {
    if (!field.name) return;
    
    const value = formData[field.name];
    const fieldErrors = validateField(field, value);
    
    if (fieldErrors.length > 0) {
      errors[field.name] = fieldErrors;
      isValid = false;
    }
  });

  return { isValid, errors };
};

// Conditional field validation
export const validateConditionalField = (field, formData) => {
  if (!field.conditionEnabled || !field.conditionWhenField) {
    return true;
  }

  const dependentValue = formData[field.conditionWhenField];
  
  if (field.conditionCheckMatch === 'equals') {
    return dependentValue === field.conditionIfMatch;
  } else if (field.conditionCheckMatch === 'not_equals') {
    return dependentValue !== field.conditionIfMatch;
  } else if (field.conditionCheckMatch === 'contains') {
    return String(dependentValue).includes(field.conditionIfMatch);
  } else if (field.conditionCheckMatch === 'not_contains') {
    return !String(dependentValue).includes(field.conditionIfMatch);
  }

  return true;
};

// Format form data for submission
export const formatFormDataForSubmission = (formData) => {
  const formDataPayload = new FormData();
  
  Object.keys(formData).forEach(key => {
    const value = formData[key];
    
    if (value instanceof File) {
      formDataPayload.append(key, value);
    } else if (typeof value === 'object' && value !== null) {
      formDataPayload.append(key, JSON.stringify(value));
    } else if (value !== null && value !== undefined) {
      formDataPayload.append(key, String(value));
    }
  });
  
  return formDataPayload;
};

// Create form schema (simplified version for JavaScript)
export const createFormSchema = (formFields) => {
  return {
    validate: (data) => {
      return validateForm(data, formFields);
    },
    fields: formFields
  };
};
