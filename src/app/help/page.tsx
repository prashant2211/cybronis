'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock,
  CheckCircle,
  ArrowRight,
  HelpCircle,
  FileText,
  Video,
  Download,
  Star,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

const HelpPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { name: 'All', value: 'all', count: 45 },
    { name: 'Getting Started', value: 'getting-started', count: 12 },
    { name: 'CybronisAI', value: 'cybronisai', count: 15 },
    { name: 'Wise Deployer', value: 'cybronis-bridge', count: 10 },
    { name: 'Salesforce', value: 'salesforce', count: 5 },
    { name: 'Billing', value: 'billing', count: 3 }
  ];

  const helpArticles = [
    {
      id: 1,
      title: 'How to Get Started with CybronisAI',
      category: 'getting-started',
      type: 'guide',
      readTime: '5 min',
      difficulty: 'beginner',
      description: 'Complete step-by-step guide to set up your first AI automation with CybronisAI.',
      content: 'Welcome to CybronisAI! This guide will walk you through the entire setup process...',
      tags: ['setup', 'tutorial', 'beginner'],
      helpful: 89,
      featured: true
    },
    {
      id: 2,
      title: 'Connecting Multiple LLMs to Your Project',
      category: 'cybronisai',
      type: 'tutorial',
      readTime: '8 min',
      difficulty: 'intermediate',
      description: 'Learn how to integrate and manage multiple large language models in your applications.',
      content: 'CybronisAI supports 6 powerful AI models. Here\'s how to connect them...',
      tags: ['llm', 'integration', 'api'],
      helpful: 156,
      featured: true
    },
    {
      id: 3,
      title: 'Setting Up RAG with Large Knowledge Bases',
      category: 'cybronisai',
      type: 'guide',
      readTime: '12 min',
      difficulty: 'advanced',
      description: 'Configure Retrieval Augmented Generation for enterprise-scale knowledge bases.',
      content: 'RAG allows your AI to access and use your company\'s knowledge base...',
      tags: ['rag', 'knowledge-base', 'enterprise'],
      helpful: 203,
      featured: false
    },
    {
      id: 4,
      title: 'One-Click Deployment with Wise Deployer',
      category: 'cybronis-bridge',
      type: 'tutorial',
      readTime: '6 min',
      difficulty: 'beginner',
      description: 'Deploy your applications to multiple hosting providers with just one click.',
      content: 'Wise Deployer makes deployment simple and automated...',
      tags: ['deployment', 'hosting', 'automation'],
      helpful: 134,
      featured: true
    },
    {
      id: 5,
      title: 'Salesforce Automation: Complete Setup Guide',
      category: 'salesforce',
      type: 'guide',
      readTime: '15 min',
      difficulty: 'intermediate',
      description: 'Automate any Salesforce operation using CybronisAI\'s powerful integration.',
      content: 'Transform your Salesforce workflows with AI-powered automation...',
      tags: ['salesforce', 'automation', 'crm'],
      helpful: 178,
      featured: false
    },
    {
      id: 6,
      title: 'Understanding API Rate Limits and Quotas',
      category: 'cybronisai',
      type: 'reference',
      readTime: '4 min',
      difficulty: 'beginner',
      description: 'Everything you need to know about API limits and how to manage them.',
      content: 'API rate limits help ensure fair usage and system stability...',
      tags: ['api', 'limits', 'quotas'],
      helpful: 67,
      featured: false
    }
  ];

  const faqs = [
    {
      question: "How do I get started with CybronisAI?",
      answer: "Getting started is easy! First, create an account on our platform. Then, choose your preferred AI model from our 6 available options (GPT-4, Claude-3, Gemini, Grok-4, DeepSeek). You can start with our free tier which includes 1,000 API calls per month. Check out our 'Getting Started' guide for detailed instructions.",
      category: 'getting-started'
    },
    {
      question: "What hosting providers does Wise Deployer support?",
      answer: "Wise Deployer supports all major hosting providers including HOSTINGER, GODADDY, GIT AUTOMATION, BLUEHOSTING, NAMECHEAP HOSTING, and many more. We're constantly adding new providers based on user demand. You can also request support for additional providers through our community forum.",
      category: 'cybronis-bridge'
    },
    {
      question: "Can I use multiple AI models simultaneously?",
      answer: "Yes! CybronisAI is designed to work with multiple AI models at the same time. You can route different types of requests to different models based on their strengths, or use ensemble methods to combine outputs from multiple models for better results.",
      category: 'cybronisai'
    },
    {
      question: "How does the RAG system work with large knowledge bases?",
      answer: "Our RAG system uses advanced vector embeddings and similarity search to efficiently retrieve relevant information from your knowledge base. It can handle knowledge bases with millions of documents and provides sub-second response times. The system automatically chunks, indexes, and retrieves the most relevant information for each query.",
      category: 'cybronisai'
    },
    {
      question: "What Salesforce operations can I automate?",
      answer: "You can automate virtually any Salesforce operation including lead management, opportunity tracking, case resolution, data entry, report generation, workflow automation, and custom process automation. Our AI can understand natural language instructions and execute complex multi-step Salesforce operations.",
      category: 'salesforce'
    },
    {
      question: "How do I upgrade or downgrade my plan?",
      answer: "You can change your plan at any time from your dashboard. Go to Settings > Billing > Change Plan. Upgrades take effect immediately, and downgrades take effect at the end of your current billing cycle. We'll prorate any billing differences automatically.",
      category: 'billing'
    },
    {
      question: "Is my data secure with Cybronis?",
      answer: "Absolutely! We take security seriously. All data is encrypted in transit and at rest using industry-standard encryption. We're SOC 2 compliant and follow GDPR guidelines. Your data is never used to train our models, and you can request data deletion at any time.",
      category: 'getting-started'
    },
    {
      question: "Do you offer custom integrations?",
      answer: "Yes! Our Enterprise plan includes custom integration services. Our team can help you integrate Cybronis with your existing systems, create custom workflows, and develop specialized solutions for your unique requirements. Contact our sales team for more information.",
      category: 'cybronisai'
    }
  ];

  const filteredArticles = helpArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

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
                <HelpCircle className="w-8 h-8" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">Help Center</h1>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Find answers, tutorials, and guides to help you get the most out of Cybronis platform.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How can we help you?</h2>
            <p className="text-xl text-gray-600">Choose the best way to get the support you need</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-200"
            >
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600 mb-4">Comprehensive guides and API references</p>
              <button className="text-blue-600 font-semibold hover:text-blue-800">
                Browse Docs
                <ArrowRight className="w-4 h-4 inline ml-1" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-200"
            >
              <Video className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">Step-by-step video guides and demos</p>
              <button className="text-purple-600 font-semibold hover:text-purple-800">
                Watch Videos
                <ArrowRight className="w-4 h-4 inline ml-1" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-200"
            >
              <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Get instant help from our support team</p>
              <button className="text-green-600 font-semibold hover:text-green-800">
                Start Chat
                <ArrowRight className="w-4 h-4 inline ml-1" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-200"
            >
              <Phone className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Speak directly with our experts</p>
              <button className="text-orange-600 font-semibold hover:text-orange-800">
                Call Now
                <ArrowRight className="w-4 h-4 inline ml-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories and Search */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
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

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
              <p className="text-gray-600">Most helpful articles to get you started</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.value === article.category)?.name}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      {article.helpful} found helpful
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Read Article
                      <ArrowRight className="w-4 h-4 inline ml-1" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Articles</h2>
            <p className="text-gray-600">Browse our complete knowledge base</p>
          </motion.div>

          <div className="space-y-4">
            {regularArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {categories.find(cat => cat.value === article.category)?.name}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        article.difficulty === 'beginner' 
                          ? 'bg-green-100 text-green-800'
                          : article.difficulty === 'intermediate'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {article.difficulty}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-3">{article.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        {article.helpful} found helpful
                      </div>
                      <div className="flex space-x-2">
                        {article.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="ml-4 text-blue-600 hover:text-blue-800 font-medium">
                    Read
                    <ArrowRight className="w-4 h-4 inline ml-1" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {regularArticles.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Still need help?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Our support team is here to help you succeed. Get in touch with us through any of these channels.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <MessageCircle className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                <p className="text-blue-100 text-sm mb-4">Get instant help from our support team</p>
                <button className="w-full py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Start Chat
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Mail className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                <p className="text-blue-100 text-sm mb-4">Send us a detailed message</p>
                <button className="w-full py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Send Email
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Phone className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
                <p className="text-blue-100 text-sm mb-4">Speak directly with our experts</p>
                <button className="w-full py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Call Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;
