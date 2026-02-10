# Cybronis - Advanced AI & Automation Platform

A comprehensive Next.js website for Cybronis, featuring advanced AI chat capabilities, deployment automation, and Salesforce integration.

## 🚀 Features

### Core Products
- **CybronisAI**: Multi-LLM AI chat platform with 6 powerful AI models
- **Wise Deployer**: App deployment automation platform
- **Salesforce Automation**: Comprehensive Salesforce operation automation

### Website Features
- 🎨 Modern, responsive design with advanced animations
- 🔍 SEO optimized for AI and automation keywords
- 🔐 Complete authentication system with MongoDB
- 📊 Admin dashboard for product management
- 📱 Mobile-first responsive design
- ⚡ Fast performance with Next.js 14
- 🎭 Beautiful UI/UX with Framer Motion animations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT with bcryptjs
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cybronis-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
MONGODB_URI=mongodb://localhost:27017/cybronis
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
JWT_SECRET=your-jwt-secret-here
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗂️ Project Structure

```
cybronis-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── cybronisai/        # CybronisAI product page
│   │   ├── cybronis-bridge/   # Wise Deployer product page
│   │   ├── salesforce/        # Salesforce automation page
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── features/          # Features page
│   │   ├── login/             # Login page
│   │   ├── register/          # Registration page
│   │   ├── dashboard/         # Admin dashboard
│   │   └── api/               # API routes
│   ├── components/            # Reusable components
│   ├── lib/                   # Utility functions
│   └── models/                # MongoDB models
├── public/                    # Static assets
└── README.md
```

## 🎨 Design Features

### Color Scheme
- Primary: Blue (#0ea5e9)
- Secondary: Purple (#d946ef)
- Accent: Green (#22c55e)
- Background: Gradient combinations

### Animations
- Framer Motion for smooth transitions
- Hover effects and micro-interactions
- Loading states and skeleton screens
- Scroll-triggered animations

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Flexible grid layouts
- Touch-friendly interfaces

## 🔧 Configuration

### MongoDB Setup
1. Install MongoDB locally or use MongoDB Atlas
2. Update `MONGODB_URI` in your environment variables
3. The app will automatically create the necessary collections

### SEO Configuration
- Meta tags optimized for AI and automation keywords
- Open Graph and Twitter Card support
- Structured data (JSON-LD)
- Sitemap and robots.txt
- Performance optimizations

## 📱 Pages Overview

### Homepage
- Hero section with animated background
- Product showcases
- Feature highlights
- Statistics and testimonials
- Call-to-action sections

### Product Pages
- **CybronisAI**: Multi-LLM platform details
- **Wise Deployer**: Deployment automation features
- **Salesforce**: Automation capabilities

### Additional Pages
- **About**: Company story and team
- **Contact**: Contact form and information
- **Features**: Comprehensive feature overview
- **Login/Register**: Authentication pages
- **Dashboard**: Admin product management

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔐 Authentication

The website includes a complete authentication system:
- User registration and login
- JWT token-based authentication
- Password hashing with bcryptjs
- Protected admin dashboard
- MongoDB user storage

## 📊 Admin Dashboard

Features for product management:
- Add/edit/delete products
- MongoDB connection management
- Product feature management
- Real-time statistics
- Search and filtering

## 🎯 SEO Optimization

- Comprehensive meta tags
- Structured data markup
- Sitemap generation
- Robots.txt configuration
- Performance optimizations
- Mobile-friendly design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software owned by Cybronis.

## 📞 Support

For support and questions:
- Email: info@cybronis.com
- Phone: +91 6360252875

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS
- Framer Motion for smooth animations
- Lucide for beautiful icons
- MongoDB for the database solution

---

Built with ❤️ by [Prashant Raj](mailto:info@cybronis.com)