const BASE = 'https://jsonplaceholder.typicode.com'

export async function fetchPosts({ page = 1, limit = 10, signal } = {}) {
  const start = (page - 1) * limit
  const res = await fetch(`${BASE}/posts?_start=${start}&_limit=${limit}`, { signal })
  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}

export async function fetchUsers() {
  const res = await fetch(`${BASE}/users`)
  if (!res.ok) throw new Error('Failed to fetch users')
  return res.json()
}
