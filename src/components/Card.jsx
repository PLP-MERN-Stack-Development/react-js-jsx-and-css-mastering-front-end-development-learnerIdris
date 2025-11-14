import React from 'react'

export default function Card({ children, className = '' }) {
  return (
    <div className={`rounded-lg shadow-sm bg-white dark:bg-gray-800 p-4 ${className}`}>
      {children}
    </div>
  )
}
