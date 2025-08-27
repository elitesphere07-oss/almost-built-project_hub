import { Router } from 'express'

export const router = Router()

let requests: any[] = []

router.post('/', (req, res) => {
  const entry = { id: Math.random().toString(36).slice(2), ...req.body, status: 'pending', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
  requests.push(entry)
  res.json({ success: true, request: entry })
})

router.get('/', (_req, res) => {
  res.json({ requests })
})

router.get('/:id', (req, res) => {
  const item = requests.find(r => r.id === req.params.id)
  if (!item) return res.status(404).json({ message: 'Not found' })
  res.json({ request: item })
})

router.post('/:id/respond', (req, res) => {
  const item = requests.find(r => r.id === req.params.id)
  if (!item) return res.status(404).json({ message: 'Not found' })
  item.response = req.body
  item.updatedAt = new Date().toISOString()
  res.json({ success: true })
})

router.patch('/:id/status', (req, res) => {
  const item = requests.find(r => r.id === req.params.id)
  if (!item) return res.status(404).json({ message: 'Not found' })
  item.status = req.body.status
  item.updatedAt = new Date().toISOString()
  res.json({ success: true })
})


