import React from 'react';

const sizeClasses = {
  small: 'px-3 py-2 text-sm w-auto',
  medium: 'px-5 py-2 text-base w-auto',
  large: 'px-6 py-3 text-lg w-auto',
  full: 'w-full py-3 px-4 text-base',
};

const Button = ({
  type = 'button',
  onClick,
  className = '',
  children,
  size = 'medium', // new prop
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
      className={`group relative flex justify-center items-center border border-transparent font-medium rounded-lg text-white bg-[#FF5F4A] hover:bg-[#FF5F4A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
