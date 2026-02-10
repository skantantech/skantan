# Production Deployment Guide

## Build and Deploy

### 1. Local Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

### 2. Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### 3. Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

### 4. Deploy to AWS Amplify

1. Connect your GitHub repository
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Deploy

### 5. Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Build Docker image
docker build -t skantan-website .

# Run container
docker run -p 3000:3000 skantan-website
```

## Environment Variables

Create a `.env.local` file for environment-specific settings:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.skantantechcorp.com
NEXT_PUBLIC_API_URL=https://api.skantantechcorp.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X

# Contact Form (optional)
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/your-form-id
```

## Performance Optimization

### Image Optimization
- Use Next.js Image component for automatic optimization
- Compress images before uploading
- Use WebP format when possible

### Code Splitting
- Next.js automatically splits code
- Use dynamic imports for heavy components

### Caching
- Configure CDN caching headers
- Enable browser caching

## SEO Checklist

- [x] Meta tags configured
- [x] Semantic HTML structure
- [ ] Sitemap.xml (generate after deployment)
- [ ] robots.txt (add to public folder)
- [ ] Schema markup (optional enhancement)
- [ ] Open Graph tags (optional enhancement)

## Security

- Keep dependencies updated: `npm audit fix`
- Use HTTPS in production
- Configure CSP headers
- Implement rate limiting on forms

## Monitoring

Consider adding:
- Google Analytics
- Sentry for error tracking
- Lighthouse CI for performance monitoring

## Post-Deployment

1. Test all forms
2. Verify responsive design on multiple devices
3. Check page load times
4. Test SEO with Google Search Console
5. Set up monitoring and analytics
