import React from 'react';

/**
 * Reusable Input component with logging for value changes.
 * @param {string} id - The id for the input field.
 * @param {string} label - The label for the input field.
 * @param {string} type - The type of the input field (e.g., 'text', 'email', 'password').
 * @param {string} placeholder - The placeholder text for the input field.
 * @param {string} value - The value of the input field.
 * @param {function} onChange - The change handler for the input field.
 * @param {string} autoComplete - The autocomplete attribute for the input field.
 * @param {boolean} required - Whether the input is required.
 * @param {string} className - Additional classes for the input field.
 */
const Input = ({
  id,
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  autoComplete,
  required = false,
  className = '',
}) => {
  const handleChange = (e) => {
    console.log(`Input '${id}' changed:`, e.target.value);
    onChange && onChange(e);
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        value={value}
        onChange={handleChange}
        className={`appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input; 