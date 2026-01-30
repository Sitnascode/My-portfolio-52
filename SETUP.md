# Portfolio Setup Instructions

## 1. Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

## 2. Email Service Setup (Optional)

To enable email functionality in the contact form:

1. Sign up for a free account at [Resend](https://resend.com)
2. Get your API key from the dashboard
3. Create a `.env.local` file in the root directory:

```bash
RESEND_API_KEY=your_resend_api_key_here
```

**Note:** The contact form will work without this setup - messages will be logged to the console instead.

## 3. Domain Configuration (For Production)

When deploying, update the email sender domain in `app/api/contact/route.ts`:

```typescript
from: "Portfolio Contact <noreply@yourdomain.com>",
```

Replace `yourdomain.com` with your actual domain.

## 4. Run the Development Server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Features Implemented

✅ **Custom Logo**: Your SN logo is now used throughout the site
✅ **Email Functionality**: Contact form sends emails to sitira2022@outlook.com
✅ **Responsive Design**: Works on all devices
✅ **Modern UI**: Clean, professional design with animations

## Logo Files

- `/public/logo.svg` - Main logo file
- Used in navbar and browser tab
- Purple gradient design matching your brand

## Contact Form

- Validates email format
- Shows loading states
- Displays success/error messages
- Sends formatted HTML emails
- Falls back gracefully if email service isn't configured
