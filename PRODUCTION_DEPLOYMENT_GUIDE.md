# 🚀 Production Deployment Guide - Project Hub

## 🔒 Security Considerations

### ⚠️ Current Development Setup (NOT for Production)

The current configuration is **NOT suitable for production** because:
- Database port is exposed to the network
- CORS allows all local network origins
- Services bind to all interfaces
- No SSL/TLS encryption
- No proper authentication/authorization
- No rate limiting or security headers

### ✅ Production Requirements

1. **Network Security**
   - No direct database exposure
   - Proper network isolation
   - Firewall configuration
   - VPN access for admin functions

2. **Application Security**
   - SSL/TLS certificates
   - Proper CORS configuration
   - Rate limiting
   - Input validation and sanitization
   - Security headers (Helmet, CSP)

3. **Authentication & Authorization**
   - JWT with proper expiration
   - Refresh token rotation
   - Role-based access control
   - Session management

4. **Data Security**
   - Database encryption at rest
   - Secure connection strings
   - Regular backups
   - Data retention policies

---

## 🏗️ Production Architecture

### Recommended Stack

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Load Balancer │    │   CDN/CloudFlare│    │   SSL/TLS       │
│   (nginx/ALB)   │    │   (Optional)    │    │   Certificates  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Reverse Proxy │    │   Frontend      │    │   Backend API   │
│   (nginx/traefik)│    │   (React SPA)   │    │   (Node.js)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Database      │    │   Redis Cache   │    │   File Storage  │
│   (PostgreSQL)  │    │   (Optional)    │    │   (S3/Cloud)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

---

## 📋 Deployment Checklist

### Pre-Deployment

- [ ] **Domain & DNS**
  - [ ] Register domain name
  - [ ] Configure DNS records
  - [ ] Set up subdomains (api.yourdomain.com, www.yourdomain.com)

- [ ] **SSL/TLS Certificates**
  - [ ] Obtain SSL certificates (Let's Encrypt, AWS Certificate Manager)
  - [ ] Configure certificate renewal
  - [ ] Set up HTTPS redirects

- [ ] **Environment Variables**
  - [ ] Create production `.env` files
  - [ ] Set secure JWT secrets
  - [ ] Configure database credentials
  - [ ] Set up API keys for external services

- [ ] **Database Setup**
  - [ ] Set up production PostgreSQL instance
  - [ ] Configure database backups
  - [ ] Set up connection pooling
  - [ ] Run migrations

### Infrastructure

- [ ] **Server/Cloud Setup**
  - [ ] Choose cloud provider (AWS, GCP, Azure, DigitalOcean)
  - [ ] Set up VPC/network isolation
  - [ ] Configure security groups/firewall rules
  - [ ] Set up monitoring and logging

- [ ] **Container Orchestration**
  - [ ] Choose platform (Docker Swarm, Kubernetes, ECS)
  - [ ] Set up container registry
  - [ ] Configure auto-scaling
  - [ ] Set up health checks

### Application

- [ ] **Build & Deploy**
  - [ ] Build production Docker images
  - [ ] Set up CI/CD pipeline
  - [ ] Configure blue-green deployment
  - [ ] Set up rollback procedures

- [ ] **Monitoring & Logging**
  - [ ] Set up application monitoring (Prometheus, Grafana)
  - [ ] Configure log aggregation (ELK Stack, CloudWatch)
  - [ ] Set up alerting
  - [ ] Configure error tracking (Sentry)

---

## 🐳 Production Docker Configuration

### 1. Production Dockerfile (Backend)

```dockerfile
# backend/Dockerfile.prod
FROM node:20-slim AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM node:20-slim AS production
WORKDIR /app

# Create non-root user
RUN groupadd -r appuser && useradd -r -g appuser appuser

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

USER appuser

EXPOSE 4000
CMD ["node", "dist/index.js"]
```

### 2. Production Dockerfile (Frontend)

```dockerfile
# spark-junction/Dockerfile.prod
FROM node:20-slim AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 3. Nginx Configuration

```nginx
# nginx/nginx.conf
events {
    worker_connections 1024;
}

http {
    upstream backend {
        server backend:4000;
    }

    server {
        listen 80;
        server_name yourdomain.com www.yourdomain.com;
        return 301 https://$server_name$request_uri;
    }

    server {
        listen 443 ssl http2;
        server_name yourdomain.com www.yourdomain.com;

        ssl_certificate /etc/nginx/ssl/cert.pem;
        ssl_certificate_key /etc/nginx/ssl/key.pem;

        # Security headers
        add_header X-Frame-Options DENY;
        add_header X-Content-Type-Options nosniff;
        add_header X-XSS-Protection "1; mode=block";
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";

        # Frontend
        location / {
            root /usr/share/nginx/html;
            try_files $uri $uri/ /index.html;
        }

        # API
        location /api/ {
            proxy_pass http://backend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # Health check
        location /health {
            proxy_pass http://backend/health;
        }
    }
}
```

---

## 🔧 Environment Configuration

### Production Environment Variables

```bash
# .env.production
NODE_ENV=production
PORT=4000

# Database
DATABASE_URL=postgresql://user:password@prod-db:5432/projecthub?ssl=true
DB_USER=projecthub_prod
DB_PASSWORD=secure_password_here
DB_NAME=projecthub_prod

# JWT
JWT_SECRET=your_super_secure_jwt_secret_here
JWT_REFRESH_SECRET=your_super_secure_refresh_secret_here

# CORS
CORS_ORIGIN=https://yourdomain.com,https://www.yourdomain.com

# External Services
RAZORPAY_KEY=rzp_live_your_key
STRIPE_SECRET_KEY=sk_live_your_key
STRIPE_PUBLISHABLE_KEY=pk_live_your_key

# File Storage
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_REGION=us-east-1
AWS_S3_BUCKET=your-bucket-name

# Monitoring
SENTRY_DSN=your_sentry_dsn
```

---

## 🚀 Deployment Steps

### 1. Prepare Production Environment

```bash
# Clone repository
git clone https://github.com/elitesphere07-oss/almost-built-project_hub.git
cd almost-built-project_hub

# Create production environment file
cp .env.example .env.production
# Edit .env.production with production values

# Build production images
docker compose -f docker-compose.prod.yml build
```

### 2. Database Setup

```bash
# Run migrations
docker compose -f docker-compose.prod.yml run --rm backend npm run prisma:migrate

# Seed initial data (if needed)
docker compose -f docker-compose.prod.yml run --rm backend npm run prisma:seed
```

### 3. Deploy Application

```bash
# Start production services
docker compose -f docker-compose.prod.yml up -d

# Check service status
docker compose -f docker-compose.prod.yml ps

# View logs
docker compose -f docker-compose.prod.yml logs -f
```

### 4. SSL Certificate Setup

```bash
# Using Let's Encrypt with Certbot
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Or using Docker
docker run -it --rm \
  -v /etc/letsencrypt:/etc/letsencrypt \
  -v /var/lib/letsencrypt:/var/lib/letsencrypt \
  certbot/certbot certonly --webroot \
  -w /var/www/html \
  -d yourdomain.com -d www.yourdomain.com
```

---

## 📊 Monitoring & Maintenance

### Health Checks

```bash
# Application health
curl https://yourdomain.com/health

# API health
curl https://api.yourdomain.com/health

# Database connectivity
docker compose -f docker-compose.prod.yml exec db pg_isready
```

### Backup Strategy

```bash
# Database backup
docker compose -f docker-compose.prod.yml exec db \
  pg_dump -U projecthub_prod projecthub_prod > backup_$(date +%Y%m%d_%H%M%S).sql

# Automated backup script
#!/bin/bash
BACKUP_DIR="/backups"
DATE=$(date +%Y%m%d_%H%M%S)
docker compose -f docker-compose.prod.yml exec -T db \
  pg_dump -U projecthub_prod projecthub_prod > $BACKUP_DIR/backup_$DATE.sql
```

### Log Management

```bash
# View application logs
docker compose -f docker-compose.prod.yml logs -f backend
docker compose -f docker-compose.prod.yml logs -f frontend

# Log rotation
docker run --rm -v /var/lib/docker/containers:/var/lib/docker/containers \
  -v /var/log/docker:/var/log/docker \
  alpine/ash -c "find /var/lib/docker/containers -name '*.log' -exec truncate -s 0 {} \;"
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions Example

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Build and push Docker images
        run: |
          docker build -t your-registry/project-hub-backend:${{ github.sha }} ./backend
          docker build -t your-registry/project-hub-frontend:${{ github.sha }} ./spark-junction
          docker push your-registry/project-hub-backend:${{ github.sha }}
          docker push your-registry/project-hub-frontend:${{ github.sha }}
      
      - name: Deploy to server
        run: |
          ssh user@your-server.com << 'EOF'
            cd /path/to/project
            docker compose -f docker-compose.prod.yml pull
            docker compose -f docker-compose.prod.yml up -d
            docker system prune -f
          EOF
```

---

## 🛡️ Security Checklist

### Network Security
- [ ] Firewall rules configured
- [ ] Only necessary ports exposed
- [ ] VPN access for admin functions
- [ ] Network segmentation implemented

### Application Security
- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] CORS properly configured
- [ ] Input validation implemented
- [ ] Rate limiting enabled
- [ ] SQL injection prevention
- [ ] XSS protection enabled

### Authentication & Authorization
- [ ] JWT tokens properly configured
- [ ] Password hashing implemented
- [ ] Session management secure
- [ ] Role-based access control
- [ ] Multi-factor authentication (if applicable)

### Data Security
- [ ] Database encrypted at rest
- [ ] Secure connection strings
- [ ] Regular backups configured
- [ ] Data retention policies
- [ ] PII handling compliant

---

## 📞 Support & Troubleshooting

### Common Issues

1. **SSL Certificate Issues**
   ```bash
   # Check certificate validity
   openssl x509 -in /etc/nginx/ssl/cert.pem -text -noout
   
   # Test SSL connection
   openssl s_client -connect yourdomain.com:443
   ```

2. **Database Connection Issues**
   ```bash
   # Test database connectivity
   docker compose -f docker-compose.prod.yml exec backend \
     npx prisma db push --preview-feature
   ```

3. **Performance Issues**
   ```bash
   # Monitor resource usage
   docker stats
   
   # Check application logs
   docker compose -f docker-compose.prod.yml logs backend
   ```

### Emergency Procedures

1. **Rollback Deployment**
   ```bash
   docker compose -f docker-compose.prod.yml down
   docker image tag your-registry/project-hub-backend:previous_sha your-registry/project-hub-backend:latest
   docker compose -f docker-compose.prod.yml up -d
   ```

2. **Database Recovery**
   ```bash
   # Restore from backup
   docker compose -f docker-compose.prod.yml exec -T db \
     psql -U projecthub_prod projecthub_prod < backup_file.sql
   ```

---

**🎉 Your Project Hub is now ready for production deployment!**

Remember to:
- Test thoroughly in staging environment first
- Monitor application performance and errors
- Keep dependencies updated
- Regularly review security configurations
- Maintain backup and disaster recovery procedures
