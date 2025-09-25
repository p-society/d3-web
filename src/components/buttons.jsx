import React from 'react'

const Button = ({ children, onClick, href, className = '' }) => {
  const baseClasses =
    'font-cascadia bg-[#C6F806] text-black px-6 py-3 rounded-full font-bold text-lg transition-all duration-150 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-1'

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${className} inline-block text-center`}
      >
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  )
}

export default Button
