import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: 'Cybronis - Website, Web App & Mobile App Development Studio',
    template: '%s | Cybronis - Website & App Development',
  },
  description:
    'Cybronis is a design and development studio building modern websites, web apps and Android & iOS apps for founders and businesses. We help with project development from idea to launch, including UI/UX, dashboards and custom products.',
  keywords: [
    'Cybronis',
    'website development',
    'web development company',
    'Next.js developer',
    'React developer',
    'web app development',
    'project development services',
    'mobile app development',
    'Android app development',
    'iOS app development',
    'app development company',
    'UI UX design',
    'dashboard development',
    'SaaS product development',
    'software development studio',
  ],
  authors: [{ name: 'Prashant Raj', url: 'mailto:info@cybronis.com' }],
  creator: 'Prashant Raj',
  publisher: 'Cybronis',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cybronis.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cybronis.com',
    title: 'Cybronis - Website, Web App & Mobile App Development Studio',
    description:
      'Cybronis builds modern websites, web apps and mobile apps for founders and businesses, from idea to launch. Custom project development, UI/UX and dashboards.',
    siteName: 'Cybronis',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cybronis - Advanced AI & Automation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cybronis - Website & App Development Studio',
    description:
      'Cybronis builds custom websites, web apps and Android & iOS apps for founders and businesses. End-to-end project development with modern stacks.',
    images: ['/og-image.jpg'],
    creator: '@cybronis',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Cybronis",
              "url": "https://cybronis.com",
              "logo": "https://cybronis.com/logo.png",
              "description": "Advanced AI & Automation Platform with multiple LLM support",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Prashant Raj",
                "email": "info@cybronis.com",
                "telephone": "+91 6360252875"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://cybronis.com",
                "https://www.cybronisai.com"
              ],
              "offers": [
                {
                  "@type": "Product",
                  "name": "CybronisAI",
                  "description": "AI chat platform with multiple LLM support and RAG capabilities"
                },
                {
                  "@type": "Product", 
                  "name": "Wise Deployer",
                  "description": "App deployment automation platform with CI/CD pipeline support"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="min-h-screen w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}