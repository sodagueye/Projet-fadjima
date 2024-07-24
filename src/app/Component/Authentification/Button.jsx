

import React from 'react';

const Button = ({ onClick, children, className }) => {
  return (
    <button
      className={`border border-gray-300 p-2 rounded-md text-black ${className}`} onClick={onClick} >
      {children}
    </button>
  );
}

export default Button;
