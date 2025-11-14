import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-blue-600 dark:text-blue-400 font-semibold'
      : 'text-gray-700 dark:text-gray-300'

  return (
    <nav className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-6">
          <NavLink to="/" className="text-xl font-bold text-gray-900 dark:text-white">MyApp</NavLink>
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/tasks" className={linkClass}>Tasks</NavLink>
          <NavLink to="/api" className={linkClass}>API</NavLink>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
          </Button>
        </div>
      </div>
    </nav>
  )
}
