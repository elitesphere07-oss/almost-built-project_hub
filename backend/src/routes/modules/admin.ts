import { Router } from 'express'

export const router = Router()

router.get('/stats', (_req, res) => {
  res.json({ totalUsers: 5432, totalProjects: 1234, totalOrders: 2345, totalRevenue: 234567, monthlyGrowth: 12.5, activeUsers: 3456 })
})

router.get('/users', (_req, res) => {
  const users = Array.from({ length: 8 }).map((_, i) => ({ id: `${i + 1}`, name: `User ${i + 1}`, email: `user${i + 1}@example.com` }))
  res.json({ users })
})

router.get('/users/:id', (req, res) => {
  res.json({ id: req.params.id, name: `User ${req.params.id}`, email: `user${req.params.id}@example.com` })
})

router.put('/users/:id', (req, res) => {
  res.json({ success: true, user: { id: req.params.id, ...req.body } })
})

router.delete('/users/:id', (req, res) => {
  res.json({ success: true })
})

router.get('/projects', (_req, res) => {
  const projects = Array.from({ length: 5 }).map((_, i) => ({ id: `${i + 1}`, title: `Admin Project ${i + 1}` }))
  res.json({ projects })
})

router.patch('/projects/:id/approve', (_req, res) => {
  res.json({ success: true })
})

router.patch('/projects/:id/reject', (_req, res) => {
  res.json({ success: true })
})


