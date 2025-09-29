// Form fields utilities for fetching and processing form field data

import { getData } from "../utils/api";

// Fetch form fields for a specific event
export const fetchEventFormFields = async (eventId) => {
  try {
    const response = await getData(`/event-form-fields?event=${eventId}`);
    if (response.success) {
      return response.data || [];
    }
    return [];
  } catch (error) {
    console.error("Error fetching event form fields:", error);
    return [];
  }
};

// Fetch form fields for a specific ticket
export const fetchTicketFormFields = async (ticketId) => {
  try {
    const response = await getData(`/ticket-form-fields?ticket=${ticketId}`);
    if (response.success) {
      return response.data || [];
    }
    return [];
  } catch (error) {
    console.error("Error fetching ticket form fields:", error);
    return [];
  }
};

// Combine and sort form fields
export const combineFormFields = (eventFields, ticketFields) => {
  // Sort fields by orderId
  const sortedEventFields = eventFields.sort((a, b) => (a.orderId || 0) - (b.orderId || 0));
  const sortedTicketFields = ticketFields.sort((a, b) => (a.orderId || 0) - (b.orderId || 0));
  
  // Combine event fields first, then ticket fields
  return [...sortedEventFields, ...sortedTicketFields];
};

// Process form fields with defaults and validation
export const processFormFields = (fields) => {
  return fields.map((field) => {
    const processedField = { ...field };
    
    // Set default validation for email fields
    if (processedField.type === "email" && !processedField.validation) {
      processedField.validation = "email";
    }
    
    // Process multi-select fields with CSV options
    if (processedField.type === "multiSelect" && 
        processedField.apiType === "CSV" && 
        typeof processedField.selectApi === "string") {
      processedField.options = processedField.selectApi
        .split(",")
        .map((item) => ({ value: item.trim(), label: item.trim() }));
    }
    
    // Set placeholder from label if not provided
    if (["text", "textarea", "select"].includes(processedField.type) && 
        !processedField.placeholder?.length && 
        processedField.label) {
      processedField.placeholder = processedField.placeholder || processedField.label;
    }
    
    return processedField;
  });
};

// Add consent field if ticket requires it
export const addConsentField = (fields, ticket) => {
  if (ticket.consent && ticket.consentLetter) {
    const consentFieldExists = fields.some((f) => f.name === "ticketSpecificConsent");
    if (!consentFieldExists) {
      const consentField = {
        _id: "consent_" + Date.now(),
        orderId: 9999,
        type: "checkbox",
        name: "ticketSpecificConsent",
        label: ticket.consentLetter,
        required: true,
        customClass: "full"
      };
      return [...fields, consentField];
    }
  }
  return fields;
};

// Fetch all form fields for registration
export const fetchRegistrationFormFields = async (eventId, ticketId) => {
  try {
    const [eventFields, ticketFields] = await Promise.all([
      fetchEventFormFields(eventId),
      fetchTicketFormFields(ticketId)
    ]);
    
    const combinedFields = combineFormFields(eventFields, ticketFields);
    const processedFields = processFormFields(combinedFields);
    
    return processedFields;
  } catch (error) {
    console.error("Error fetching registration form fields:", error);
    return [];
  }
};

// Get default form fields
export const getDefaultFormFields = () => [
  {
    _id: "name",
    name: "name",
    label: "Full Name",
    type: "text",
    required: true,
    orderId: 1,
    customClass: "full"
  },
  {
    _id: "email",
    name: "email",
    label: "Email Address",
    type: "email",
    required: true,
    orderId: 2,
    customClass: "full"
  },
  {
    _id: "authenticationId",
    name: "authenticationId",
    label: "Phone Number",
    type: "mobilenumber",
    required: true,
    orderId: 3,
    customClass: "full"
  }
];
