'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Home, 
  ArrowLeft, 
  Search, 
  Brain, 
  Zap, 
  Database,
  Settings,
  HelpCircle,
  RefreshCw,
  ExternalLink
} from 'lucide-react';
import { useState, useEffect } from 'react';

const NotFoundPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const quickLinks = [
    { name: 'CybronisAI', href: '/cybronisai', icon: Brain, description: 'AI Platform' },
    { name: 'Wise Deployer', href: '/cybronis-bridge', icon: Zap, description: 'Deployment Tool' },
    { name: 'Salesforce', href: '/salesforce', icon: Database, description: 'Automation' },
    { name: 'Features', href: '/features', icon: Settings, description: 'Platform Features' },
    { name: 'About', href: '/about', icon: HelpCircle, description: 'About Us' },
    { name: 'Contact', href: '/contact', icon: ExternalLink, description: 'Get in Touch' }
  ];

  const popularPages = [
    { name: 'API Documentation', href: '/api-docs', description: 'Complete API reference' },
    { name: 'Pricing', href: '/pricing', description: 'View our plans' },
    { name: 'Help Center', href: '/help', description: 'Get support' },
    { name: 'Community', href: '/community', description: 'Join discussions' },
    { name: 'Status', href: '/status', description: 'System status' },
    { name: 'Blog', href: '/blog', description: 'Latest articles' }
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            {/* Floating AI Elements */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center"
            >
              <Brain className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute -top-2 -right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center"
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 3, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center"
            >
              <Database className="w-5 h-5 text-white" />
            </motion.div>

            {/* Main 404 Text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-9xl md:text-[12rem] font-bold text-white mb-4 relative"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                404
              </span>
            </motion.h1>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-6">
            The page you're looking for seems to have vanished into the digital void. 
            Don't worry, our AI is on the case!
          </p>
          <div className="flex items-center justify-center space-x-4 text-blue-200">
            <RefreshCw className="w-5 h-5 animate-spin" />
            <span>Scanning the multiverse for your page...</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link
            href="/"
            className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Popular Pages</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className="block bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-200 group"
                >
                  <link.icon className="w-8 h-8 text-white mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
                  <h4 className="text-white font-semibold text-sm mb-1">{link.name}</h4>
                  <p className="text-blue-200 text-xs">{link.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Need Help?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularPages.map((page, index) => (
              <motion.div
                key={page.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <Link
                  href={page.href}
                  className="block bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-blue-300 transition-colors duration-200">
                        {page.name}
                      </h4>
                      <p className="text-blue-200 text-sm">{page.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-blue-300 group-hover:text-white transition-colors duration-200" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Search Suggestion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-8"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
            <div className="flex items-center space-x-3">
              <Search className="w-5 h-5 text-blue-300" />
              <span className="text-blue-100">Try searching for what you need:</span>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Search Cybronis..."
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    // Implement search functionality
                    console.log('Search:', e.currentTarget.value);
                  }
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Fun AI Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3">
            <Brain className="w-5 h-5 text-blue-300 animate-pulse" />
            <span className="text-blue-200 text-sm">
              "Even our AI couldn't find this page. It must be really well hidden! 🤖"
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
