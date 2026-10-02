# Deployment Guide

Production deployment instructions for D365 Training Website.

## Pre-Deployment Checklist

- [ ] All content reviewed and correct
- [ ] Company contact information updated
- [ ] Form submission configured
- [ ] Custom domain configured
- [ ] SSL certificate ready
- [ ] Analytics tracking ID ready
- [ ] Team access configured

## Option 1: Vercel (Recommended - Easiest)

**Time**: ~5 minutes | **Cost**: Free/Paid plans available | **Uptime**: 99.9%

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: D365 training website"
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel.com](https://vercel.com)
   - Sign in with GitHub account
   - Click "New Project"
   - Select your repository
   - Click "Import"

3. **Configure Environment**
   - Vercel auto-detects Next.js
   - No environment variables needed (for basic setup)
   - Optionally add analytics or API keys

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Get automatic URL (or use custom domain)

5. **Custom Domain** (Optional)
   - In project settings
   - Add domain name
   - Update DNS settings with Vercel records

**Advantages**:
- Automatic deployments on git push
- Built-in analytics
- Zero configuration
- Free HTTPS
- Global CDN
- Easy rollback

**Next Deployments**: Just push to main branch!

---

## Option 2: Traditional Node.js Server

**Time**: ~15 minutes | **Cost**: ~$5-30/month | **Uptime**: Depends on provider

### Prerequisites
- Linux server (Ubuntu 20.04+ recommended)
- Node.js 18+ installed
- npm/yarn
- PM2 (process manager)
- Nginx (reverse proxy)

### Steps

1. **SSH into Server**
   ```bash
   ssh user@your-domain.com
   cd /var/www
   ```

2. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/d365-training.git
   cd d365-training
   ```

3. **Install Dependencies**
   ```bash
   npm install --production
   ```

4. **Build Application**
   ```bash
   npm run build
   ```

5. **Start with PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "d365" -- start
   pm2 startup
   pm2 save
   ```

6. **Configure Nginx**
   ```nginx
   # /etc/nginx/sites-available/d365-training
   
   server {
     listen 80;
     server_name d365training.example.com;
   
     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

7. **Enable Site & Restart**
   ```bash
   sudo ln -s /etc/nginx/sites-available/d365-training /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

8. **Install SSL Certificate** (Free with Let's Encrypt)
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d d365training.example.com
   ```

9. **Auto-update Deployments**
   ```bash
   # Create deployment script
   cat > /var/www/d365-training/deploy.sh << 'EOF'
   #!/bin/bash
   cd /var/www/d365-training
   git pull origin main
   npm install --production
   npm run build
   pm2 restart d365
   EOF
   
   chmod +x deploy.sh
   
   # Set up webhook or cron job to run this script
   ```

### Server Providers
- [DigitalOcean](https://www.digitalocean.com) - $5/month
- [Linode](https://www.linode.com) - $5/month
- [AWS Lightsail](https://aws.amazon.com/lightsail) - $3.50/month
- [Hetzner](https://www.hetzner.com) - $3/month

---

## Option 3: Docker Deployment

**Time**: ~20 minutes | **Cost**: Variable | **Uptime**: 99.9%

### Create Dockerfile

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build Next.js
RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
```

### Docker Hub Deployment

1. **Build Docker Image**
   ```bash
   docker build -t yourusername/d365-training:latest .
   ```

2. **Push to Docker Hub**
   ```bash
   docker login
   docker push yourusername/d365-training:latest
   ```

3. **Deploy on Server**
   ```bash
   docker pull yourusername/d365-training:latest
   docker run -d -p 3000:3000 --name d365-training \
     yourusername/d365-training:latest
   ```

### Docker Compose (For Local Testing)

```yaml
# docker-compose.yml
version: '3.8'

services:
  web:
    image: yourusername/d365-training:latest
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

Run with:
```bash
docker-compose up -d
```

### Docker Hosting Providers
- [Docker Hub](https://hub.docker.com)
- [Render](https://render.com)
- [Railway](https://railway.app)
- [Fly.io](https://fly.io)
- [AWS Elastic Container Service](https://aws.amazon.com/ecs)

---

## Option 4: AWS Deployment

**Time**: ~30 minutes | **Cost**: ~$5-20/month | **Uptime**: 99.99%

### Using Elastic Beanstalk

1. **Install AWS CLI**
   ```bash
   pip install awsebcli
   ```

2. **Initialize Elastic Beanstalk**
   ```bash
   eb init -p node.js-18 d365-training
   ```

3. **Create .ebextensions/01_app.config**
   ```yaml
   option_settings:
     nodejs:
       npm_command: npm install --production
   ```

4. **Deploy**
   ```bash
   eb create d365-training-env
   eb deploy
   ```

### Using CloudFront + S3 (Static Assets Only)

Not recommended for this dynamic site, but good for:
- Static assets (CSS, images)
- Reducing load on main server

---

## Option 5: Netlify

**Time**: ~5 minutes | **Cost**: Free/Paid | **Uptime**: 99.9%

### Steps

1. **Push to GitHub**
2. **Connect to Netlify**
   - Go to [Netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
3. **Deploy**
   - Automatic on git push

---

## Environment Variables

Create `.env.production.local` for production:

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://api.d365training.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Form Service
NEXT_PUBLIC_FORM_SERVICE_URL=https://formspree.io/f/XXXXXXXXX

# Contact Info (optional)
CONTACT_EMAIL=training@d365solutions.com
CONTACT_PHONE=+1234567890
```

---

## Monitoring & Logging

### Vercel
- Built-in analytics dashboard
- Automatic error tracking
- Performance monitoring
- Deployment logs

### Traditional Server
```bash
# View PM2 logs
pm2 logs d365

# View Nginx logs
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log

# Monitor server
htop
```

### Google Analytics
1. Create GA4 property
2. Add tracking code to `app/layout.tsx`
3. Monitor traffic and user behavior

---

## SSL/HTTPS Certificate

### Automatic (Vercel, Netlify)
✅ Automatic HTTPS provided

### Let's Encrypt (Free)
```bash
# On Linux server
sudo apt update
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
sudo certbot renew --dry-run # Test renewal
```

### AWS Certificate Manager
- Free SSL certificates
- Auto-renewal
- Works with CloudFront

---

## CDN Configuration

### Vercel
✅ Built-in global CDN

### Cloudflare (Recommended for all options)
1. Add Cloudflare nameservers to domain
2. Enable caching rules
3. Enable optimization features
4. Get free SSL certificate

Benefits:
- Global edge locations
- Automatic caching
- DDoS protection
- Performance boost

---

## Backup & Recovery

### Git Version Control
```bash
# All code is version controlled
git log --oneline
git revert <commit-hash>  # Rollback
```

### Database Backups (if added)
```bash
# Regular backups
pg_dump dbname > backup.sql
mysqldump -u user -p database > backup.sql
```

### File Backups
```bash
# Archive entire site
tar -czf d365-backup-$(date +%Y%m%d).tar.gz /var/www/d365-training
```

---

## Performance Optimization

### Post-Deployment

1. **Enable Compression**
   ```nginx
   gzip on;
   gzip_types text/plain text/css text/javascript application/json;
   gzip_min_length 1000;
   ```

2. **Cache Headers**
   ```javascript
   // next.config.js - already configured
   ```

3. **Image Optimization**
   - Use Next.js Image component
   - Compress images before upload
   - Use WebP format where possible

4. **Database Queries** (when added)
   - Add indexes
   - Cache frequent queries
   - Use query optimization

---

## CI/CD Pipeline

### GitHub Actions Example

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run lint
      - name: Deploy to Vercel
        run: vercel --prod
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

---

## Troubleshooting Deployment

| Issue | Solution |
|-------|----------|
| Build fails | Check `npm run build` locally first |
| 404 errors | Verify all routes in `next.config.js` |
| Slow performance | Check Lighthouse, enable CDN |
| SSL errors | Renew certificate, check DNS |
| Form not working | Verify API endpoint, check CORS |
| Database connection fails | Check credentials, verify firewall |

---

## Rollback Procedure

### Vercel
1. Go to Deployment History
2. Click deployment to rollback
3. Click "Promote to Production"

### Git-based
```bash
git revert <commit-hash>
git push origin main
# Auto-deploys previous version
```

### Manual Server
```bash
pm2 restart d365  # Restart
pm2 logs d365     # Check logs
```

---

## Post-Deployment

1. ✅ Test all pages
2. ✅ Test form submission
3. ✅ Check mobile responsiveness
4. ✅ Verify SSL certificate
5. ✅ Test from different networks
6. ✅ Set up monitoring
7. ✅ Enable analytics
8. ✅ Configure backups
9. ✅ Document deployment steps
10. ✅ Brief team on maintenance

---

## Support

- **Vercel Issues**: https://vercel.com/help
- **Next.js Issues**: https://github.com/vercel/next.js/issues
- **Server Issues**: Your hosting provider support
- **General Help**: Next.js Discord, Stack Overflow

---

**Deployment Complete! 🚀**

Your D365 Training website is now live and ready to receive training enquiries.
