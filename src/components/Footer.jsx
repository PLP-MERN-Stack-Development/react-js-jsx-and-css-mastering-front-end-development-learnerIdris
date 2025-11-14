import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-12 border-t dark:border-gray-700 bg-transparent">
      <div className="container py-6 flex items-center justify-between">
        <div className="text-sm text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} MyApp. All rights reserved.</div>
        <div className="flex gap-4 text-sm">
          <a className="text-gray-600 dark:text-gray-300" href="#">Privacy</a>
          <a className="text-gray-600 dark:text-gray-300" href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}
