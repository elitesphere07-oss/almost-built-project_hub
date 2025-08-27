import { Router } from 'express'

export const router = Router()

let orders: any[] = []

router.get('/', (_req, res) => {
  res.json({ orders })
})

router.post('/', (req, res) => {
  const order = { id: Math.random().toString(36).slice(2), ...req.body, status: 'pending', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
  orders.push(order)
  res.json({ success: true, order })
})

router.get('/:id', (req, res) => {
  const order = orders.find(o => o.id === req.params.id)
  if (!order) return res.status(404).json({ message: 'Not found' })
  res.json({ order })
})

router.patch('/:id/status', (req, res) => {
  const order = orders.find(o => o.id === req.params.id)
  if (!order) return res.status(404).json({ message: 'Not found' })
  order.status = req.body.status
  order.updatedAt = new Date().toISOString()
  res.json({ success: true })
})

router.patch('/:id/cancel', (req, res) => {
  const order = orders.find(o => o.id === req.params.id)
  if (!order) return res.status(404).json({ message: 'Not found' })
  order.status = 'cancelled'
  order.cancelReason = req.body?.reason
  order.updatedAt = new Date().toISOString()
  res.json({ success: true })
})


