import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import morgan from 'morgan'

const app = express()

// CORS Configuration
// DEVELOPMENT: Allow requests from any origin on local network for team testing
// PRODUCTION: Restrict to specific domain(s) for security
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:8080', 'http://192.168.1.5:8080'],
    credentials: true,
  })
)

// Security and parsers
app.use(helmet())
app.use(express.json({ limit: '2mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(morgan('dev'))

// Health check endpoint
app.get('/health', (_req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    cors_origins: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:8080']
  })
})

// API router
import { router as apiRouter } from './routes'
app.use('/api', apiRouter)

const port = Number(process.env.PORT) || 4000
const host = process.env.NODE_ENV === 'production' ? 'localhost' : '0.0.0.0'

app.listen(port, host, () => {
  console.log(`🚀 API Server running in ${process.env.NODE_ENV || 'development'} mode`)
  console.log(`📍 Local: http://localhost:${port}`)
  console.log(`🌐 Network: http://192.168.1.5:${port}`)
  console.log(`🔗 Health Check: http://192.168.1.5:${port}/health`)
  console.log(`📡 CORS Origins: ${process.env.CORS_ORIGIN || 'http://localhost:8080'}`)
})


