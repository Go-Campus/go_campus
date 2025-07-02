import React from 'react';


const Button = ({
  type = 'button',
  onClick,
  className = '',
  children,
  ...props
}) => {
  const handleClick = (e) => {
    console.log(`Button clicked: type='${type}'`);
    onClick && onClick(e);
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 