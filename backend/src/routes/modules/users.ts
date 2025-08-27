import { Router } from 'express'

export const router = Router()

let profile = {
  id: '2',
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+91 9876543210',
  college: 'IIT Delhi',
  branch: 'Computer Science Engineering',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
}

router.get('/profile', (_req, res) => {
  res.json({ user: profile })
})

router.put('/profile', (req, res) => {
  profile = { ...profile, ...req.body }
  res.json({ success: true, user: profile })
})

router.post('/avatar', (_req, res) => {
  res.json({ success: true })
})


