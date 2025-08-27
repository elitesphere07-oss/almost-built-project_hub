import { Router } from 'express'

export const router = Router()

router.get('/', (_req, res) => {
  res.json({ ok: true })
})

// Mount feature routers
import { router as authRouter } from './modules/auth'
import { router as projectsRouter } from './modules/projects'
import { router as ordersRouter } from './modules/orders'
import { router as uploadsRouter } from './modules/uploads'
import { router as usersRouter } from './modules/users'
import { router as notificationsRouter } from './modules/notifications'
import { router as adminRouter } from './modules/admin'
import { router as paymentsRouter } from './modules/payments'
import { router as projectRequestsRouter } from './modules/projectRequests'

router.use('/auth', authRouter)
router.use('/projects', projectsRouter)
router.use('/orders', ordersRouter)
router.use('/uploads', uploadsRouter)
router.use('/users', usersRouter)
router.use('/notifications', notificationsRouter)
router.use('/admin', adminRouter)
router.use('/payments', paymentsRouter)
router.use('/project-requests', projectRequestsRouter)


