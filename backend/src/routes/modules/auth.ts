import { Router } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const router = Router()

const ACCESS_TOKEN_TTL_SECONDS = 15 * 60
const REFRESH_TOKEN_TTL_SECONDS = 7 * 24 * 60 * 60

function signAccessToken(payload: object) {
  return jwt.sign(payload, process.env.JWT_SECRET || 'dev-secret', {
    expiresIn: ACCESS_TOKEN_TTL_SECONDS,
  })
}

function signRefreshToken(payload: object) {
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET || 'dev-refresh-secret', {
    expiresIn: REFRESH_TOKEN_TTL_SECONDS,
  })
}

router.post('/login', async (req, res) => {
  const { email, password } = req.body as { email: string; password: string }
  if (!email || !password) return res.status(400).json({ message: 'Email and password required' })

  // TODO: Replace with DB lookup
  const mockUser = { id: '1', email, name: 'Demo User', role: 'student', passwordHash: await bcrypt.hash('student123', 10) }
  const isValid = await bcrypt.compare(password, mockUser.passwordHash)
  if (!isValid) return res.status(401).json({ success: false, message: 'Invalid credentials' })

  const accessToken = signAccessToken({ sub: mockUser.id, role: mockUser.role })
  const refreshToken = signRefreshToken({ sub: mockUser.id })

  res.cookie('refresh_token', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/api/auth',
    maxAge: REFRESH_TOKEN_TTL_SECONDS * 1000,
  })

  return res.json({ success: true, user: { id: mockUser.id, email: mockUser.email, name: mockUser.name, role: mockUser.role }, token: accessToken })
})

router.post('/register', async (req, res) => {
  const { email, password, name } = req.body as { email: string; password: string; name?: string }
  if (!email || !password) return res.status(400).json({ message: 'Email and password required' })
  const passwordHash = await bcrypt.hash(password, 10)
  // TODO: Persist in DB
  const user = { id: '2', email, name: name || 'New User', role: 'student', passwordHash }
  const accessToken = signAccessToken({ sub: user.id, role: user.role })
  const refreshToken = signRefreshToken({ sub: user.id })
  res.cookie('refresh_token', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/api/auth',
    maxAge: REFRESH_TOKEN_TTL_SECONDS * 1000,
  })
  return res.json({ success: true, user: { id: user.id, email: user.email, name: user.name, role: user.role }, token: accessToken })
})

router.post('/logout', (req, res) => {
  res.clearCookie('refresh_token', { path: '/api/auth' })
  res.json({ success: true })
})

router.post('/refresh', (req, res) => {
  const token = req.cookies?.refresh_token
  if (!token) return res.status(401).json({ message: 'No refresh token' })
  try {
    const payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET || 'dev-refresh-secret') as any
    const accessToken = signAccessToken({ sub: payload.sub, role: payload.role })
    return res.json({ token: accessToken })
  } catch (e) {
    return res.status(401).json({ message: 'Invalid refresh token' })
  }
})


