# Sitira Nasir - Software Engineering Portfolio

A modern, responsive portfolio website built with Next.js, featuring a custom logo design and functional contact system.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/sitra-nasirs-projects/v0-developer-portfolio-website)

## ✨ Features

- **Custom SN Logo**: Professional purple gradient branding
- **Responsive Design**: Works perfectly on all devices
- **Contact Form**: Functional email system with Resend integration
- **Modern UI**: Clean design with smooth animations
- **Fast Performance**: Optimized Next.js application
- **SEO Optimized**: Proper meta tags and structure

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📧 Email Setup (Optional)

To enable contact form emails:

1. Sign up at [Resend](https://resend.com)
2. Get your API key
3. Create `.env.local`:

```bash
RESEND_API_KEY=your_api_key_here
```

**Note**: Contact form works without this - messages are logged to console as fallback.

## 🌐 Deployment

### Recommended: Vercel (Free)

1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Add `RESEND_API_KEY` environment variable
3. Deploy automatically on every push

### Other Options:

- **Netlify**: Great alternative with similar features
- **Railway**: Full-stack hosting platform
- **Heroku**: Traditional cloud platform

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Email Service**: Resend
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
My-portfolio-52/
├── app/                    # Next.js app directory
│   ├── api/contact/       # Contact form API
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── portfolio/        # Portfolio sections
│   └── ui/              # UI components
├── public/               # Static assets
│   └── logo.svg         # Custom SN logo
└── lib/                 # Utilities
```

## 🎨 Customization

### Logo

- Main logo: `/public/logo.svg`
- Favicon: Auto-generated from logo
- Navbar: Includes logo + text

### Colors

- Primary: Purple gradient (#c084fc to #8b5cf6)
- Background: Dark theme optimized
- Fully customizable via Tailwind CSS

### Content

- Update personal information in components
- Modify projects in `components/portfolio/projects.tsx`
- Edit skills in `components/portfolio/skills.tsx`

## 📞 Contact

- **Email**: sitira2022@outlook.com
- **GitHub**: [sitnascode](https://github.com/sitnascode)
- **Portfolio**: [Live Demo](https://your-portfolio-url.vercel.app)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
