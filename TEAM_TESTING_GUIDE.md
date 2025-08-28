# 🧪 Team Testing Guide - Project Hub

## 🌐 Network Access Configuration

Your Project Hub application is now configured for **team testing** on the same WiFi network.

### 📍 Access URLs

| Service | Local Access | Network Access | Description |
|---------|-------------|----------------|-------------|
| **Frontend** | `http://localhost:8080` | `http://192.168.1.5:8080` | React application |
| **Backend API** | `http://localhost:4000` | `http://192.168.1.5:4000` | Node.js API server |
| **Health Check** | `http://localhost:4000/health` | `http://192.168.1.5:4000/health` | API status |
| **Database** | `localhost:5442` | ❌ Not exposed | PostgreSQL (host only) |

### 🚀 Quick Start for Team Members

1. **Connect to the same WiFi network** as the development machine
2. **Open your browser** and navigate to: `http://192.168.1.5:8080`
3. **Start testing!** The application should load normally

---

## 📋 Testing Checklist

### ✅ Core Functionality Tests

#### 1. **Landing Page** (`/`)
- [ ] Page loads without errors
- [ ] Theme toggle works (dark/light mode)
- [ ] Navigation links work
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Glassmorphism effects display correctly

#### 2. **Authentication**
- [ ] **Login Page** (`/login`)
  - [ ] Form validation works
  - [ ] Error messages display correctly
  - [ ] Success redirect works
- [ ] **Register Page** (`/register`)
  - [ ] Form validation works
  - [ ] Password strength indicator
  - [ ] Success redirect works
- [ ] **Logout** functionality works

#### 3. **Dashboard** (`/dashboard`)
- [ ] Projects grid/list view toggle
- [ ] Filtering by branch works
- [ ] Search functionality works
- [ ] Project cards display correctly
- [ ] Pagination works (if applicable)

#### 4. **Project Details**
- [ ] Click on project cards
- [ ] Project details page loads
- [ ] All project information displays
- [ ] Back navigation works

#### 5. **Custom Project Request** (`/request-project`)
- [ ] Form loads correctly
- [ ] All form fields work
- [ ] File upload functionality
- [ ] Form submission works
- [ ] Success/error messages

#### 6. **User Profile**
- [ ] Profile page loads
- [ ] Edit profile functionality
- [ ] Avatar upload (if implemented)
- [ ] Save changes works

### 🔧 Technical Tests

#### **API Endpoints** (Test via browser or Postman)
```bash
# Health Check
GET http://192.168.1.5:4000/health

# Projects
GET http://192.168.1.5:4000/api/projects?limit=5
GET http://192.168.1.5:4000/api/projects/featured
GET http://192.168.1.5:4000/api/projects/1

# Authentication
POST http://192.168.1.5:4000/api/auth/login
POST http://192.168.1.5:4000/api/auth/register

# User Profile
GET http://192.168.1.5:4000/api/users/profile

# Notifications
GET http://192.168.1.5:4000/api/notifications
```

#### **Cross-Device Testing**
- [ ] **Desktop** (Chrome, Firefox, Safari, Edge)
- [ ] **Tablet** (iPad, Android tablet)
- [ ] **Mobile** (iPhone, Android phone)
- [ ] **Different screen sizes** (responsive design)

#### **Performance Tests**
- [ ] Page load times are reasonable
- [ ] No excessive loading spinners
- [ ] Smooth animations and transitions
- [ ] No memory leaks (test for 10+ minutes)

### 🐛 Bug Reporting Template

When reporting bugs, please include:

```markdown
**Bug Report**

**Device/OS:** [e.g., iPhone 14, Chrome 120, Windows 11]
**Browser:** [e.g., Chrome, Firefox, Safari]
**URL:** [e.g., http://192.168.1.5:8080/dashboard]
**Steps to Reproduce:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Expected Behavior:** [What should happen]
**Actual Behavior:** [What actually happens]
**Screenshots:** [If applicable]
**Console Errors:** [Any error messages in browser console]
```

---

## 🛠️ Development Commands

### For the Development Machine Owner

```bash
# Start all services
docker compose up -d

# View logs
docker compose logs -f

# View specific service logs
docker compose logs -f backend
docker compose logs -f frontend
docker compose logs -f db

# Restart services
docker compose restart backend
docker compose restart frontend

# Stop all services
docker compose down

# Check service status
docker compose ps

# Rebuild and restart
docker compose down
docker compose up -d --build
```

### Network Troubleshooting

```bash
# Check if services are accessible
curl http://192.168.1.5:4000/health
curl http://192.168.1.5:8080

# Check network connectivity
ping 192.168.1.5

# Check if ports are open
netstat -tulpn | grep :4000
netstat -tulpn | grep :8080
```

---

## 🔒 Security Notes

### Development Mode (Current Setup)
- ✅ Database port exposed for development tools
- ✅ CORS allows all local network origins
- ✅ Services bind to all interfaces
- ⚠️ **Not suitable for production**

### Production Mode
- ❌ Database port not exposed
- ❌ CORS restricted to specific domains
- ❌ Services use proper network isolation
- ✅ Reverse proxy with SSL/TLS
- ✅ Environment-specific configurations

---

## 📱 Mobile Testing Tips

### iOS Safari
- Test touch interactions
- Check viewport scaling
- Verify form inputs work correctly
- Test scrolling performance

### Android Chrome
- Test touch interactions
- Check responsive design
- Verify form submissions
- Test file uploads

### Common Mobile Issues to Check
- [ ] Text input zoom on focus
- [ ] Touch target sizes (minimum 44px)
- [ ] Scrolling performance
- [ ] Form submission on mobile
- [ ] Image loading and scaling

---

## 🎯 Testing Priorities

### High Priority (Critical)
1. Authentication flows
2. Core navigation
3. Project browsing
4. Form submissions
5. Responsive design

### Medium Priority (Important)
1. Theme switching
2. Search functionality
3. Filtering options
4. Performance
5. Cross-browser compatibility

### Low Priority (Nice to Have)
1. Animation smoothness
2. Loading states
3. Error handling edge cases
4. Accessibility features

---

## 📞 Support

If you encounter issues:

1. **Check the health endpoint:** `http://192.168.1.5:4000/health`
2. **Check browser console** for JavaScript errors
3. **Check network tab** for failed API requests
4. **Contact the development team** with detailed bug reports

---

**Happy Testing! 🚀**
