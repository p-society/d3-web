import React from 'react'

const Button = ({ children, onClick, className = '', variant = 'primary' }) => {
  const baseClasses =
    'px-4 md:px-6 lg:px-8 py-2 md:py-2.5 lg:py-3 rounded-xl md:rounded-2xl font-bold text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 uppercase tracking-wide text-xs md:text-sm lg:text-base'
  const variants = {
    primary: 'bg-[#c6f806] hover:bg-[#b5e605] focus:ring-[#c6f806] border border-black',
    secondary: 'bg-[#c6f806] hover:bg-[#b5e605] focus:ring-[#c6f806] border border-black',
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      aria-label={typeof children === 'string' ? children : 'Button'}
    >
      {children}
    </button>
  )
}

export default Button
