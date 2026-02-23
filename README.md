# Cybronis Frontend - React Application

This is the React.js version of the Cybronis website, converted from Next.js.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file (optional, defaults to localhost:5000):
```
VITE_API_URL=http://localhost:5000
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

- `src/pages/` - All page components
- `src/components/` - Reusable components (Navigation, Footer)
- `src/App.jsx` - Main app component with routing
- `src/main.jsx` - Entry point
- `public/` - Static assets

## Key Differences from Next.js

1. **Routing**: Uses `react-router-dom` instead of Next.js file-based routing
2. **Links**: Uses `<Link to="...">` from react-router-dom instead of Next.js `<Link href="...">`
3. **Images**: Uses regular `<img>` tags instead of Next.js `<Image>` component
4. **API Calls**: All API calls go to `/api/*` which is proxied to the backend (see vite.config.js)
5. **No Server Components**: All components are client-side React components

## Backend Integration

The frontend expects the backend to be running on `http://localhost:5000` (or the URL specified in `.env`).

API endpoints:
- `/api/auth/login` - User login
- `/api/auth/register` - User registration
- `/api/auth/me` - Get current user
- `/api/products` - Get/create products

## Converting Pages from Next.js

When converting pages from Next.js to React:

1. Remove `'use client'` directive
2. Change `import Link from 'next/link'` to `import { Link } from 'react-router-dom'`
3. Change `Link href="..."` to `Link to="..."`
4. Change `import Image from 'next/image'` to regular `<img>` tags
5. Change `useRouter()` from `next/navigation` to `useNavigate()` from `react-router-dom`
6. Change `router.push('/path')` to `navigate('/path')`
7. Remove Next.js specific imports like `next/head`, `next/metadata`
8. API calls should use `/api/*` (proxied to backend)

## Available Pages

All pages from the original Next.js app have been converted:
- Home (`/`)
- About (`/about`)
- Services (`/services`)
- Features (`/features`)
- Products (`/products`)
- Contact (`/contact`)
- Login (`/login`)
- Register (`/register`)
- Dashboard (`/dashboard`)
- CybronisAI (`/cybronisai`)
- Cybronis Bridge (`/cybronis-bridge`)
- Shop Sahayak (`/shop-sahayak`)
- Salesforce (`/salesforce`)
- Pricing (`/pricing`)
- Blog (`/blog`)
- Community (`/community`)
- Help (`/help`)
- Status (`/status`)
- API Docs (`/api-docs`)
- Privacy (`/privacy`)
- Terms (`/terms`)
- Cookies (`/cookies`)
- GDPR (`/gdpr`)
- 404 (`*`)

