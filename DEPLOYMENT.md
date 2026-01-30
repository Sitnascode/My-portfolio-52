# Portfolio Deployment Guide

## 🚀 Deployment Options

### 1. **Vercel (Recommended - Free & Easy)**

Vercel is the best choice for Next.js apps and offers seamless deployment:

#### Steps:

1. **Connect GitHub Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your `My-portfolio-52` repository

2. **Configure Environment Variables**
   - In Vercel dashboard → Project Settings → Environment Variables
   - Add: `RESEND_API_KEY` = `your_resend_api_key`

3. **Deploy**
   - Vercel automatically builds and deploys
   - Your site will be live at `https://your-project-name.vercel.app`

#### Benefits:

- ✅ Free tier available
- ✅ Automatic deployments on Git push
- ✅ Global CDN
- ✅ Serverless functions for API routes
- ✅ Custom domain support

---

### 2. **Netlify (Alternative)**

#### Steps:

1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Add environment variables in Site Settings

---

### 3. **Railway (Full-Stack Hosting)**

#### Steps:

1. Go to [railway.app](https://railway.app)
2. Connect GitHub repository
3. Railway auto-detects Next.js
4. Add environment variables
5. Deploy automatically

---

## 🔧 Pre-Deployment Checklist

### 1. **Install Dependencies Locally**

```bash
npm install
# or
pnpm install
```

### 2. **Test Build Locally**

```bash
npm run build
npm start
```

### 3. **Set Up Email Service (Optional)**

- Sign up at [resend.com](https://resend.com)
- Get API key from dashboard
- Add to environment variables

### 4. **Update Email Domain (Production)**

In `app/api/contact/route.ts`, update:

```typescript
from: "Portfolio Contact <noreply@yourdomain.com>",
```

---

## 🌐 Custom Domain Setup

### For Vercel:

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### DNS Records Example:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.61
```

---

## 📧 Email Service Setup

### Option 1: Resend (Recommended)

- Free tier: 3,000 emails/month
- Easy setup with Next.js
- Good deliverability

### Option 2: EmailJS (Client-side)

- No server required
- Free tier available
- Less secure (API key exposed)

### Option 3: Nodemailer + Gmail

- Use Gmail SMTP
- Requires app password
- More complex setup

---

## 🔒 Environment Variables

Create these in your deployment platform:

```bash
# Required for email functionality
RESEND_API_KEY=your_resend_api_key_here

# Optional
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## 🚀 Quick Deploy Commands

### Vercel CLI:

```bash
npm i -g vercel
vercel --prod
```

### Netlify CLI:

```bash
npm i -g netlify-cli
netlify deploy --prod
```

---

## 📊 Performance Optimization

Your portfolio is already optimized with:

- ✅ Static generation where possible
- ✅ Image optimization
- ✅ Code splitting
- ✅ CSS optimization
- ✅ Vercel Analytics integration

---

## 🐛 Troubleshooting

### Build Errors:

1. Check Node.js version (use 18+ recommended)
2. Clear cache: `rm -rf .next node_modules && npm install`
3. Check TypeScript errors: `npm run build`

### Email Not Working:

1. Verify RESEND_API_KEY is set
2. Check email domain verification
3. Check console logs for errors

### 404 Errors:

1. Ensure all routes are properly configured
2. Check `next.config.mjs` settings
3. Verify build output

---

## 📈 Monitoring

After deployment, monitor:

- Site performance with Vercel Analytics
- Email delivery rates in Resend dashboard
- Error logs in deployment platform
- Contact form submissions

---

## 🔄 Continuous Deployment

Once connected to GitHub:

1. Push changes to main branch
2. Automatic build triggers
3. Site updates within minutes
4. Rollback available if needed

Your portfolio will be live and professional! 🎉
