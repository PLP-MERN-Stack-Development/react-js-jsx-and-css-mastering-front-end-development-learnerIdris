import React, { useEffect, useState, useRef } from 'react'
import Card from '../components/Card'
import { fetchPosts } from '../services/api'
import Button from '../components/Button'

export default function ApiData() {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const controllerRef = useRef(null)

  useEffect(() => {
    controllerRef.current?.abort()
    const controller = new AbortController()
    controllerRef.current = controller
    setLoading(true)
    setError(null)
    fetchPosts({ page, limit: 10, signal: controller.signal })
      .then(data => {
        setItems(prev => page === 1 ? data : [...prev, ...data])
      })
      .catch(err => {
        if (err.name !== 'AbortError') setError(err.message)
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [page])

  const filtered = items.filter(i => i.title.includes(query) || i.body.includes(query))

  return (
    <div className="grid gap-6">
      <Card>
        <h2 className="text-xl font-semibold">Posts (JSONPlaceholder)</h2>
        <div className="mt-4 flex gap-2">
          <input className="flex-1 px-3 py-2 rounded-md border dark:bg-gray-800 dark:border-gray-700" placeholder="Search title or body" value={query} onChange={e => setQuery(e.target.value)} />
          <Button onClick={() => { setPage(1); setItems([]) }}>Refresh</Button>
        </div>
        {error && <div className="mt-4 text-red-500">Error: {error}</div>}
        <ul className="mt-4 space-y-3">
          {filtered.map(item => (
            <li key={item.id} className="p-3 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-800">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{item.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-center">
          {loading ? (
            <div className="text-gray-600 dark:text-gray-300">Loading...</div>
          ) : (
            <Button onClick={() => setPage(p => p + 1)}>Load more</Button>
          )}
        </div>
      </Card>
    </div>
  )
}
