import React from 'react'

const VARIANTS = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
}

export default function Button({ variant = 'primary', className = '', children, ...rest }) {
  const base = 'py-2 px-4 rounded-md transition disabled:opacity-50'
  const variantClass = VARIANTS[variant] || VARIANTS.primary
  return (
    <button className={`${base} ${variantClass} ${className}`} {...rest}>
      {children}
    </button>
  )
}
