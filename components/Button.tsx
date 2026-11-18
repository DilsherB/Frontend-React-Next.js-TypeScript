import React from 'react';

const variants = {
  primary: 'bg-blue-600 text-white hover:text-blue-600 hover:bg-white border border-slate-400 cursor-pointer',
  secondary: 'bg-green-600 text-white hover:bg-white hover:text-green-600 border border-slate-400 cursor-pointer',
  danger: 'bg-red-600 text-white hover:bg-white hover:text-red-600 border border-slate-400 cursor-pointer',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 border border-slate-400 cursor-pointer',
  white: 'bg-white text-black hover:bg-black hover:text-white border border-slate-400 cursor-pointer'
};

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-3 text-sm',
  lg: 'px-6 py-4 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-md font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
