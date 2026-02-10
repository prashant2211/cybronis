'use client';

import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Tag,
  Search,
  Filter,
  TrendingUp,
  BookOpen,
  MessageCircle,
  Heart,
  Share2
} from 'lucide-react';
import { useState } from 'react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { name: 'All', value: 'all', count: 24 },
    { name: 'AI & Machine Learning', value: 'ai', count: 8 },
    { name: 'Automation', value: 'automation', count: 6 },
    { name: 'Salesforce', value: 'salesforce', count: 4 },
    { name: 'Tutorials', value: 'tutorials', count: 3 },
    { name: 'Case Studies', value: 'case-studies', count: 2 },
    { name: 'News & Updates', value: 'news', count: 1 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI: How Multi-LLM Platforms Are Revolutionizing Business',
      excerpt: 'Explore how combining multiple large language models can unlock unprecedented capabilities for businesses of all sizes.',
      content: 'In the rapidly evolving landscape of artificial intelligence, the concept of multi-LLM platforms has emerged as a game-changer...',
      author: 'Prashant Raj',
      authorAvatar: '/api/placeholder/40/40',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      category: 'ai',
      tags: ['AI', 'Multi-LLM', 'Business', 'Innovation'],
      image: '/api/placeholder/600/300',
      likes: 142,
      comments: 23,
      featured: true
    },
    {
      id: 2,
      title: 'Complete Guide to Salesforce Automation with CybronisAI',
      excerpt: 'Learn how to automate complex Salesforce workflows and boost your team\'s productivity by 300%.',
      content: 'Salesforce automation has become a cornerstone of modern business operations...',
      author: 'Sarah Chen',
      authorAvatar: '/api/placeholder/40/40',
      publishDate: '2024-01-12',
      readTime: '12 min read',
      category: 'salesforce',
      tags: ['Salesforce', 'Automation', 'Productivity', 'CRM'],
      image: '/api/placeholder/600/300',
      likes: 89,
      comments: 15,
      featured: false
    },
    {
      id: 3,
      title: 'Building Scalable RAG Systems: Best Practices and Pitfalls',
      excerpt: 'Discover the secrets to building robust Retrieval Augmented Generation systems that can handle enterprise-scale data.',
      content: 'Retrieval Augmented Generation (RAG) has revolutionized how we interact with large knowledge bases...',
      author: 'Dr. Michael Rodriguez',
      authorAvatar: '/api/placeholder/40/40',
      publishDate: '2024-01-10',
      readTime: '15 min read',
      category: 'ai',
      tags: ['RAG', 'Vector Databases', 'NLP', 'Architecture'],
      image: '/api/placeholder/600/300',
      likes: 156,
      comments: 31,
      featured: false
    },
    {
      id: 4,
      title: 'One-Click Deployment: How Wise Deployer Simplifies DevOps',
      excerpt: 'See how our deployment automation platform reduces deployment time from hours to minutes.',
      content: 'DevOps teams are constantly looking for ways to streamline their deployment processes...',
      author: 'Alex Thompson',
      authorAvatar: '/api/placeholder/40/40',
      publishDate: '2024-01-08',
      readTime: '6 min read',
      category: 'automation',
      tags: ['DevOps', 'Deployment', 'CI/CD', 'Automation'],
      image: '/api/placeholder/600/300',
      likes: 73,
      comments: 12,
      featured: false
    },
    {
      id: 5,
      title: 'Case Study: How TechCorp Increased Efficiency by 400% with AI Automation',
      excerpt: 'A detailed look at how a Fortune 500 company transformed their operations using CybronisAI.',
      content: 'TechCorp, a leading technology company, was struggling with manual processes...',
      author: 'Jennifer Walsh',
      authorAvatar: '/api/placeholder/40/40',
      publishDate: '2024-01-05',
      readTime: '10 min read',
      category: 'case-studies',
      tags: ['Case Study', 'ROI', 'Enterprise', 'Success Story'],
      image: '/api/placeholder/600/300',
      likes: 201,
      comments: 45,
      featured: true
    },
    {
      id: 6,
      title: 'Getting Started with CybronisAI: A Step-by-Step Tutorial',
      excerpt: 'New to CybronisAI? This comprehensive tutorial will get you up and running in no time.',
      content: 'Welcome to CybronisAI! This tutorial will guide you through setting up your first AI automation...',
      author: 'Prashant Raj',
      authorAvatar: '/api/placeholder/40/40',
      publishDate: '2024-01-03',
      readTime: '20 min read',
      category: 'tutorials',
      tags: ['Tutorial', 'Getting Started', 'Guide', 'Beginner'],
      image: '/api/placeholder/600/300',
      likes: 94,
      comments: 18,
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">Cybronis Blog</h1>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Insights, tutorials, and stories from the world of AI and automation. Stay ahead of the curve with our expert content.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span>Latest AI Trends</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <MessageCircle className="w-5 h-5 mr-2" />
                <span>Expert Insights</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <BookOpen className="w-5 h-5 mr-2" />
                <span>Practical Tutorials</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors duration-200 ${
                    selectedCategory === category.value
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
              <p className="text-gray-600">Handpicked articles that showcase the latest in AI and automation</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {categories.find(cat => cat.value === post.category)?.name}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={post.authorAvatar}
                          alt={post.author}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm font-medium text-gray-900">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-500 text-sm">
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {post.likes}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {post.comments}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Articles</h2>
            <p className="text-gray-600">Browse our complete collection of articles and tutorials</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.value === post.category)?.name}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={post.authorAvatar}
                        alt={post.author}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm font-medium text-gray-900">{post.author}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-gray-500 text-sm">
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {post.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {post.comments}
                      </div>
                    </div>
                    <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {regularPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest articles, tutorials, and insights delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
