"use client";

import React, { useState, useRef, useMemo, useEffect } from "react";
import { FormFieldType } from "../../types";
import { validateConditionalField } from "../../lib/form-validation";
import PhoneNumberInput from "./PhoneNumberInput";

// Input component
const Input = ({ 
  type = "text", 
  value, 
  onChange, 
  placeholder, 
  className = "", 
  disabled = false,
  ...props 
}) => (
  <input
    type={type}
    value={value || ""}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    disabled={disabled}
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    {...props}
  />
);

// Textarea component
const Textarea = ({ 
  value, 
  onChange, 
  placeholder, 
  className = "", 
  disabled = false,
  ...props 
}) => (
  <textarea
    value={value || ""}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    disabled={disabled}
    rows={4}
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    {...props}
  />
);

// Select component
const Select = ({ 
  value, 
  onChange, 
  options = [], 
  placeholder, 
  className = "", 
  disabled = false 
}) => (
  <select
    value={value || ""}
    onChange={(e) => onChange(e.target.value)}
    disabled={disabled}
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
  >
    <option value="">{placeholder || "Select an option"}</option>
    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

// Checkbox component
const Checkbox = ({ 
  checked, 
  onChange, 
  label, 
  className = "", 
  disabled = false 
}) => (
  <div className={`flex items-center ${className}`}>
    <input
      type="checkbox"
      checked={checked || false}
      onChange={(e) => onChange(e.target.checked)}
      disabled={disabled}
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
    />
    {label && (
      <label className="ml-2 text-sm text-gray-700">
        {label}
      </label>
    )}
  </div>
);

// File input component
const FileInput = ({ 
  onChange, 
  accept, 
  className = "", 
  disabled = false 
}) => (
  <input
    type="file"
    onChange={(e) => onChange(e.target.files[0])}
    accept={accept}
    disabled={disabled}
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
  />
);


// Multi-select component
const MultiSelect = ({ 
  value = [], 
  onChange, 
  options = [], 
  className = "", 
  disabled = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState(value || []);

  useEffect(() => {
    setSelectedValues(value || []);
  }, [value]);

  const handleToggle = (optionValue) => {
    let newValues;
    if (selectedValues.includes(optionValue)) {
      newValues = selectedValues.filter(v => v !== optionValue);
    } else {
      newValues = [...selectedValues, optionValue];
    }
    setSelectedValues(newValues);
    onChange(newValues);
  };

  return (
    <div className={`relative ${className}`}>
      <div
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        {selectedValues.length > 0 
          ? `${selectedValues.length} selected`
          : "Select options"
        }
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
              onClick={() => handleToggle(option.value)}
            >
              <input
                type="checkbox"
                checked={selectedValues.includes(option.value)}
                onChange={() => {}} // Handled by parent div
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span className="ml-2 text-sm text-gray-700">
                {option.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Main DynamicFormField component
const DynamicFormField = ({ 
  field, 
  value, 
  onChange, 
  error, 
  countries = [], 
  className = "",
  disabled = false,
  formData = {} // For conditional logic
}) => {
  const [isVisible, setIsVisible] = useState(true);

  // Check conditional visibility
  useEffect(() => {
    const shouldShow = validateConditionalField(field, formData);
    setIsVisible(shouldShow);
  }, [field, formData]);

  if (!isVisible) {
    return null;
  }

  const renderField = () => {
    const commonProps = {
      value,
      onChange,
      placeholder: field.placeholder,
      className: field.customClass === 'full' ? 'w-full' : 'w-full',
      disabled
    };

    switch (field.type) {
      case FormFieldType.TEXT:
        return <Input {...commonProps} type="text" />;

      case FormFieldType.EMAIL:
        return <Input {...commonProps} type="email" />;

      case FormFieldType.PASSWORD:
        return <Input {...commonProps} type="password" />;

      case FormFieldType.NUMBER:
        return <Input {...commonProps} type="number" />;

      case FormFieldType.TEXTAREA:
        return <Textarea {...commonProps} />;

      case FormFieldType.SELECT:
        return (
          <Select
            {...commonProps}
            options={field.options || []}
          />
        );

      case FormFieldType.MULTI_SELECT:
        return (
          <MultiSelect
            {...commonProps}
            options={field.options || []}
          />
        );

      case FormFieldType.CHECKBOX:
        return (
          <Checkbox
            checked={value}
            onChange={onChange}
            label={field.label}
            disabled={disabled}
          />
        );

      case FormFieldType.MOBILE_NUMBER:
        return (
          <PhoneNumberInput
            value={value}
            onChange={onChange}
            className={field.customClass === 'full' ? 'w-full' : 'w-full'}
            disabled={disabled}
            placeholder={field.placeholder}
          />
        );

      case FormFieldType.DATE:
        return <Input {...commonProps} type="date" />;

      case FormFieldType.DATETIME:
        return <Input {...commonProps} type="datetime-local" />;

      case FormFieldType.TIME:
        return <Input {...commonProps} type="time" />;

      case FormFieldType.FILE:
      case FormFieldType.IMAGE:
        return (
          <FileInput
            onChange={onChange}
            accept={field.allowedFileTypes?.join(',')}
            disabled={disabled}
          />
        );

      case FormFieldType.HIDDEN:
        return (
          <input
            type="hidden"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
          />
        );

      case FormFieldType.TITLE:
        return (
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {field.title || field.label}
          </h3>
        );

      case FormFieldType.INFO:
        return (
          <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
            <p className="text-sm text-blue-800">
              {field.content || field.label}
            </p>
          </div>
        );

      case FormFieldType.HTML:
        return (
          <div 
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: field.content || "" }}
          />
        );

      case FormFieldType.LINE:
        return <hr className="border-gray-300 my-4" />;

      default:
        return <Input {...commonProps} type="text" />;
    }
  };

  return (
    <div className={`mb-4 ${className}`}>
      {/* Label */}
      {field.label && field.type !== FormFieldType.CHECKBOX && field.type !== FormFieldType.TITLE && field.type !== FormFieldType.INFO && field.type !== FormFieldType.HTML && field.type !== FormFieldType.LINE && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Field */}
      {renderField()}

      {/* Footnote */}
      {field.footnote && (
        <p className="mt-1 text-xs text-gray-500">
          {field.footnote}
        </p>
      )}

      {/* Error message */}
      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default DynamicFormField;
