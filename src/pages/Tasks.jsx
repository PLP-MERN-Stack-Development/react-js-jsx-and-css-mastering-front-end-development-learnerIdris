import React, { useMemo, useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import useLocalStorage from '../hooks/useLocalStorage'

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [text, setText] = useState('')
  const [filter, setFilter] = useState('all')

  function addTask(e) {
    e.preventDefault()
    if (!text.trim()) return
    const newTask = { id: Date.now(), text: text.trim(), completed: false }
    setTasks([newTask, ...tasks])
    setText('')
  }

  function toggle(id) {
    setTasks(tasks.map(t => t.id === id ? {...t, completed: !t.completed} : t))
  }

  function removeTask(id) {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const filtered = useMemo(() => {
    if (filter === 'active') return tasks.filter(t => !t.completed)
    if (filter === 'completed') return tasks.filter(t => t.completed)
    return tasks
  }, [tasks, filter])

  return (
    <div className="grid gap-6">
      <Card>
        <h2 className="text-xl font-semibold">Task Manager</h2>
        <form onSubmit={addTask} className="mt-4 flex gap-2">
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="New task" className="flex-1 px-3 py-2 rounded-md border dark:bg-gray-800 dark:border-gray-700" />
          <Button type="submit">Add</Button>
        </form>
        <div className="mt-4 flex gap-2">
          <Button variant={filter==='all'?'primary':'secondary'} onClick={() => setFilter('all')}>All</Button>
          <Button variant={filter==='active'?'primary':'secondary'} onClick={() => setFilter('active')}>Active</Button>
          <Button variant={filter==='completed'?'primary':'secondary'} onClick={() => setFilter('completed')}>Completed</Button>
        </div>
        <ul className="mt-4 space-y-2">
          {filtered.length === 0 && <li className="text-gray-600 dark:text-gray-300">No tasks found.</li>}
          {filtered.map(t => (
            <li key={t.id} className="flex items-center justify-between p-2 rounded-md border dark:border-gray-700">
              <div className="flex items-center gap-3">
                <input type="checkbox" checked={t.completed} onChange={() => toggle(t.id)} />
                <span className={t.completed? 'line-through text-gray-500' : ''}>{t.text}</span>
              </div>
              <div className="flex gap-2">
                <Button variant="danger" onClick={() => removeTask(t.id)}>Delete</Button>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
