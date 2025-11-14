import React from 'react'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className="grid gap-6">
      <Card>
        <h1 className="text-2xl font-bold">Welcome</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">This is a starter React app using Vite and Tailwind CSS. Navigate to Tasks to manage tasks, or API to fetch sample data.</p>
      </Card>
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <h2 className="font-semibold">What you'll find</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Reusable components</li>
            <li>Task manager with persistence</li>
            <li>API integration with search and pagination</li>
            <li>Theme switcher (light / dark)</li>
          </ul>
        </Card>
        <Card>
          <h2 className="font-semibold">Simple Application</h2>
          <p className="text-gray-700 dark:text-gray-300">available for use <code>npm run dev</code> to start the dev server.</p>
        </Card>
      </div>
    </div>
  )
}
