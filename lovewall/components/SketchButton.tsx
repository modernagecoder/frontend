import React from 'react';

interface SketchButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

const SketchButton: React.FC<SketchButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick 
}) => {
  const baseStyles = "font-marker text-lg px-6 py-2 transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 border-2 border-sketch-black";
  
  let variantStyles = "";
  if (variant === 'primary') {
    variantStyles = "bg-pop-yellow shadow-sketch hover:shadow-sketch-hover rotate-1 hover:rotate-0";
  } else if (variant === 'secondary') {
    variantStyles = "bg-pop-cyan shadow-sketch hover:shadow-sketch-hover -rotate-1 hover:rotate-0";
  } else {
    variantStyles = "bg-transparent border-dashed hover:bg-white hover:border-solid hover:shadow-sketch";
  }

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default SketchButton;