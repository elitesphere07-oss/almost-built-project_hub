# Project Hub - Full Stack Student Project Marketplace

A complete, production-ready student project marketplace featuring a modern React frontend with glassmorphism design and a robust Node.js/Express backend with PostgreSQL database.

## 🚀 Features

### Frontend (React + TypeScript + Vite)
- **🎨 Glassmorphism Design**: Beautiful frosted glass effects with neon accents
- **🌓 Dark/Light Mode**: Persistent theme switching with smooth transitions
- **📱 Responsive Design**: Mobile-first approach with perfect desktop experience
- **🔐 Authentication**: Complete login/register flows with form validation
- **📊 Dashboard**: Project browsing with advanced filtering and search
- **💳 Mock Payments**: Razorpay & Stripe integration ready
- **🔔 Notifications**: Real-time notification system
- **📋 Custom Requests**: Rich project request form with file uploads

### Backend (Node.js + Express + TypeScript)
- **🔐 JWT Authentication**: Secure httpOnly cookie-based auth
- **🗄️ PostgreSQL Database**: Robust data persistence with Prisma ORM
- **📡 RESTful API**: Complete CRUD operations for all entities
- **🔒 Security**: Helmet, CORS, rate limiting, and input validation
- **📊 Database Schema**: Users, Projects, Orders, ProjectRequests, Notifications
- **🔄 Real-time Ready**: WebSocket support for live updates

## 🛠️ Tech Stack

### Frontend
- **React 18** + **TypeScript** + **Vite**
- **TailwindCSS** + **CSS Variables**
- **Framer Motion** for animations
- **Shadcn/ui** + **Radix UI** components
- **React Router v6** for routing
- **TanStack Query** for state management
- **Lucide React** for icons

### Backend
- **Node.js** + **Express** + **TypeScript**
- **PostgreSQL** database
- **Prisma** ORM with migrations
- **JWT** authentication with refresh tokens
- **bcryptjs** for password hashing
- **Helmet** for security headers
- **CORS** with credentials support

### Infrastructure
- **Docker** + **Docker Compose** for containerization
- **PostgreSQL 16** for production database
- **Environment-based** configuration

## 📦 Quick Start

### Prerequisites
- Node.js 20+
- Docker & Docker Compose
- Git

### 1. Clone and Setup
```bash
git clone <your-repo-url>
cd project-hub-containerised
```

### 2. Start with Docker Compose (Recommended)
```bash
# Start all services
docker compose up -d

# View logs
docker compose logs -f

# Stop services
docker compose down
```

### 3. Manual Development Setup

#### Backend Setup
```bash
cd backend
npm install
cp .env.example .env  # Configure environment variables
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

#### Frontend Setup
```bash
cd spark-junction
npm install
npm run dev
```

## 🔧 Environment Configuration

### Backend (.env)
```env
DATABASE_URL=postgresql://projecthub:projecthub@localhost:5442/projecthub?schema=public
PORT=4000
JWT_SECRET=your-secret-key
JWT_REFRESH_SECRET=your-refresh-secret
CORS_ORIGIN=http://localhost:8080
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:4000/api
VITE_SOCKET_URL=http://localhost:4000
VITE_RAZORPAY_KEY=your_razorpay_key
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_key
```

## 📱 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh access token

### Projects
- `GET /api/projects` - List projects with filtering
- `GET /api/projects/:id` - Get project details
- `GET /api/projects/featured` - Get featured projects

### Orders
- `GET /api/orders` - List user orders
- `POST /api/orders` - Create new order
- `PATCH /api/orders/:id/status` - Update order status

### Project Requests
- `GET /api/project-requests` - List requests
- `POST /api/project-requests` - Create custom request
- `PATCH /api/project-requests/:id/status` - Update request status

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `POST /api/users/avatar` - Upload avatar

### Payments
- `POST /api/payments/razorpay/create-order` - Create Razorpay order
- `POST /api/payments/stripe/create-session` - Create Stripe session

## 🗄️ Database Schema

### Core Models
- **User**: Authentication, profiles, roles
- **Project**: Project listings, categories, tags
- **Order**: Purchase transactions, status tracking
- **ProjectRequest**: Custom project requests
- **Notification**: User notifications system

## 🚀 Production Deployment

### 1. Build Production Images
```bash
docker compose -f docker-compose.prod.yml build
```

### 2. Set Production Environment Variables
```bash
# Update .env files with production values
DATABASE_URL=postgresql://user:pass@prod-db:5432/projecthub
JWT_SECRET=your-production-secret
CORS_ORIGIN=https://yourdomain.com
```

### 3. Deploy
```bash
docker compose -f docker-compose.prod.yml up -d
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd spark-junction
npm test
```

## 📊 Monitoring & Logs

### View Application Logs
```bash
# All services
docker compose logs -f

# Specific service
docker compose logs -f backend
docker compose logs -f frontend
```

### Database Access
```bash
# Connect to PostgreSQL
docker compose exec db psql -U projecthub -d projecthub
```

## 🔧 Development Commands

### Backend
```bash
cd backend
npm run dev          # Start development server
npm run build        # Build for production
npm run prisma:migrate  # Run database migrations
npm run prisma:seed     # Seed database
npm run lint         # Run ESLint
```

### Frontend
```bash
cd spark-junction
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation in `/docs`
- Review the API specification in `/backend/src/routes`

---

Built with ❤️ using modern web technologies and best practices for scalability and maintainability.
