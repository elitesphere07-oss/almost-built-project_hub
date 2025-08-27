# Project Hub - Student Project Marketplace

A modern, production-ready frontend for a student project marketplace featuring glassmorphism design, complete authentication flows, and fully functional UI components.

## 🚀 Features

- **🎨 Glassmorphism Design**: Beautiful frosted glass effects with neon accents
- **🌓 Dark/Light Mode**: Persistent theme switching with smooth transitions
- **📱 Responsive Design**: Mobile-first approach with perfect desktop experience
- **🔐 Authentication**: Complete login/register flows with form validation
- **📊 Dashboard**: Project browsing with advanced filtering and search
- **💳 Mock Payments**: Razorpay & Stripe integration ready
- **🔔 Notifications**: Real-time notification system
- **📋 Custom Requests**: Rich project request form with file uploads
- **🎭 Design System**: Comprehensive styleguide and reusable components
- **🧪 MSW Integration**: Fully functional offline development with mock APIs

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: TailwindCSS + CSS Variables
- **Animations**: Framer Motion
- **UI Components**: Shadcn/ui + Radix UI
- **Routing**: React Router v6
- **State Management**: TanStack Query
- **Mock API**: Mock Service Worker (MSW)
- **Icons**: Lucide React
- **Testing**: Vitest + React Testing Library (setup ready)

## 📦 Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd project-hub

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Environment Setup

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update the environment variables as needed:
```env
VITE_API_URL=http://localhost:4000/api
VITE_SOCKET_URL=http://localhost:4000
VITE_RAZORPAY_KEY=your_razorpay_key_here
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
```

## 📱 Pages & Features

### 🏠 Landing Page (`/`)
- Hero section with animated background
- Feature highlights with glassmorphism cards
- Testimonials and call-to-action sections
- Responsive navigation with theme toggle

### 🔐 Authentication
- **Login** (`/login`): Email/password with social login options
- **Register** (`/register`): Comprehensive form with validation
- Password strength indicator and confirmation matching
- Forgot password flow (UI ready)

### 📊 Dashboard (`/dashboard`, `/projects`)
- Project grid/list view toggle
- Advanced filtering (branch, price, search)
- Project cards with ratings, tags, and actions
- Responsive design with hover effects

### 📝 Custom Project Request (`/request-project`)
- Rich form with file upload support
- Dynamic requirements list
- Budget calculator with platform fees
- Priority levels and deadline selection

### 🎨 Design System (`/styleguide`)
- Color palette and gradients
- Typography scales
- Button variants and glass effects
- Form elements and animations

## 🎨 Design System

The design system is built with glassmorphism principles:

### Colors (HSL)
- **Primary**: Cyan blue (`190 100% 50%`)
- **Accent**: Purple (`270 100% 65%`)
- **Neon Effects**: Multiple accent colors for glow effects
- **Glass**: Transparent backgrounds with backdrop blur

### Components
- **Glass Cards**: `glass-card` class for main containers
- **Hover Effects**: `hover-elevate` for micro-interactions
- **Neon Glows**: `neon-glow` and `neon-glow-accent`
- **Gradients**: Primary and secondary gradients

### Button Variants
- `hero`: Primary call-to-action with gradient
- `glass`: Transparent with blur effect
- `glass-primary`/`glass-accent`: Colored glass variants
- `neon`: Glowing gradient button

## 🔌 API Integration

The app uses MSW (Mock Service Worker) for development with realistic API responses:

### Mock Endpoints
- Authentication (login, register, logout)
- Projects (CRUD, search, filtering)
- Orders and payments
- File uploads with signed URLs
- Notifications system
- User profile management

### Switching to Real Backend
1. Update `VITE_API_URL` in `.env`
2. Remove MSW initialization from `main.tsx`
3. The `src/services/api.ts` is ready for real backend integration

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🚀 Backend Requirements

The frontend expects the following backend endpoints:

### Authentication
- `POST /api/auth/login`
- `POST /api/auth/register` 
- `POST /api/auth/logout`
- `POST /api/auth/refresh`

### Projects
- `GET /api/projects` (with filtering)
- `GET /api/projects/:id`
- `GET /api/projects/featured`
- `GET /api/projects/search`

### Orders
- `POST /api/orders`
- `GET /api/orders`
- `PATCH /api/orders/:id/status`

### Payments
- `POST /api/payments/razorpay/create-order`
- `POST /api/payments/stripe/create-session`

### File Uploads
- `POST /api/uploads/signed-url`

See `src/services/api.ts` for complete API specification.

## 📱 Progressive Web App

PWA configuration is ready:
- Service worker registration
- Web app manifest
- Offline functionality (with MSW)

## 🎯 Production Deployment

1. Build the application:
```bash
npm run build
```

2. Deploy the `dist` folder to your preferred hosting service
3. Configure environment variables on your hosting platform
4. Set up your backend API endpoints

## 📄 License

MIT License - feel free to use this project as a starting point for your own applications.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable  
5. Submit a pull request

---

Built with ❤️ using modern web technologies and glassmorphism design principles.