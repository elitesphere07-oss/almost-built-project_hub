import { Router } from 'express'

export const router = Router()

router.post('/razorpay/create-order', (req, res) => {
  const { amount, currency } = req.body as { amount: number; currency?: string }
  res.json({ id: 'order_' + Math.random().toString(36).slice(2), amount: amount * 100, currency: currency || 'INR', key: 'rzp_test_1234567890' })
})

router.post('/razorpay/verify', (_req, res) => {
  res.json({ success: true })
})

router.post('/stripe/create-session', (req, res) => {
  const { successUrl, cancelUrl } = req.body as { items: any[]; successUrl: string; cancelUrl: string }
  res.json({ id: 'cs_' + Math.random().toString(36).slice(2), url: 'https://checkout.stripe.com/mock-session', success_url: successUrl, cancel_url: cancelUrl })
})

router.get('/history', (_req, res) => {
  res.json({ history: [] })
})


