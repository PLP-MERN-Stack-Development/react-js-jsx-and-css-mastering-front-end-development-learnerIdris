import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import ApiData from './pages/ApiData'
import Layout from './layouts/Layout'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="api" element={<ApiData />} />
      </Route>
    </Routes>
  )
}
