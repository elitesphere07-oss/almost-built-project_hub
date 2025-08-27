import { Router } from 'express'

export const router = Router()

let notifications = Array.from({ length: 6 }).map((_, i) => ({ id: `${i + 1}`, title: `Notification ${i + 1}`, read: i % 2 === 0 }))

router.get('/', (_req, res) => {
  res.json({ notifications })
})

router.get('/unread-count', (_req, res) => {
  const count = notifications.filter(n => !n.read).length
  res.json({ count })
})

router.patch('/:id/read', (req, res) => {
  notifications = notifications.map(n => (n.id === req.params.id ? { ...n, read: true } : n))
  res.json({ success: true })
})


