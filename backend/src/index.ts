import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import morgan from 'morgan'

const app = express()

// CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:5173'],
    credentials: true,
  })
)

// Security and parsers
app.use(helmet())
app.use(express.json({ limit: '2mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(morgan('dev'))

// Health
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// API router placeholder
import { router as apiRouter } from './routes'
app.use('/api', apiRouter)

const port = Number(process.env.PORT) || 4000
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`)
})


