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
      className={`p-4 bg-red-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 