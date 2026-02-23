import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  MessageCircle, 
  Star, 
  ThumbsUp, 
  Clock, 
  ArrowRight,
  Search,
  Filter,
  TrendingUp,
  BookOpen,
  Code,
  Lightbulb,
  Award,
  Calendar,
  ExternalLink,
  Plus,
  Heart,
  Share2
} from 'lucide-react';
import { useState } from 'react';

const CommunityPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { name: 'All', value: 'all', count: 1247 },
    { name: 'General Discussion', value: 'general', count: 456 },
    { name: 'CybronisAI', value: 'cybronisai', count: 389 },
    { name: 'Wise Deployer', value: 'cybronis-bridge', count: 234 },
    { name: 'Salesforce', value: 'salesforce', count: 123 },
    { name: 'Showcase', value: 'showcase', count: 45 }
  ];

  const discussions = [
    {
      id: 1,
      title: 'Best practices for implementing RAG with large knowledge bases',
      author: 'Sarah Chen',
      authorAvatar: '/api/placeholder/40/40',
      category: 'cybronisai',
      replies: 23,
      likes: 45,
      views: 234,
      lastActivity: '2 hours ago',
      tags: ['RAG', 'Knowledge Base', 'Best Practices'],
      pinned: true,
      solved: false
    },
    {
      id: 2,
      title: 'Wise Deployer deployment automation - success story',
      author: 'Mike Rodriguez',
      authorAvatar: '/api/placeholder/40/40',
      category: 'cybronis-bridge',
      replies: 18,
      likes: 67,
      views: 189,
      lastActivity: '4 hours ago',
      tags: ['Success Story', 'Deployment', 'Automation'],
      pinned: true,
      solved: false
    },
    {
      id: 3,
      title: 'How to integrate multiple LLMs for better results?',
      author: 'Alex Thompson',
      authorAvatar: '/api/placeholder/40/40',
      category: 'cybronisai',
      replies: 31,
      likes: 89,
      views: 456,
      lastActivity: '6 hours ago',
      tags: ['Multi-LLM', 'Integration', 'Performance'],
      pinned: false,
      solved: true
    },
    {
      id: 4,
      title: 'Salesforce automation: Lead scoring with AI',
      author: 'Jennifer Walsh',
      authorAvatar: '/api/placeholder/40/40',
      category: 'salesforce',
      replies: 15,
      likes: 34,
      views: 167,
      lastActivity: '8 hours ago',
      tags: ['Salesforce', 'Lead Scoring', 'AI'],
      pinned: false,
      solved: false
    },
    {
      id: 5,
      title: 'Building a custom CI/CD pipeline with Wise Deployer',
      author: 'David Kim',
      authorAvatar: '/api/placeholder/40/40',
      category: 'cybronis-bridge',
      replies: 12,
      likes: 28,
      views: 134,
      lastActivity: '12 hours ago',
      tags: ['CI/CD', 'Pipeline', 'Custom'],
      pinned: false,
      solved: false
    },
    {
      id: 6,
      title: 'Showcase: AI-powered customer support chatbot',
      author: 'Emma Wilson',
      authorAvatar: '/api/placeholder/40/40',
      category: 'showcase',
      replies: 8,
      likes: 56,
      views: 298,
      lastActivity: '1 day ago',
      tags: ['Showcase', 'Chatbot', 'Customer Support'],
      pinned: false,
      solved: false
    }
  ];

  const events = [
    {
      id: 1,
      title: 'CybronisAI Advanced Workshop',
      date: '2024-02-15',
      time: '2:00 PM EST',
      type: 'workshop',
      attendees: 45,
      maxAttendees: 50,
      description: 'Learn advanced techniques for building AI-powered applications with CybronisAI.',
      speaker: 'Prashant Raj',
      location: 'Online'
    },
    {
      id: 2,
      title: 'Community Meetup - San Francisco',
      date: '2024-02-20',
      time: '6:00 PM PST',
      type: 'meetup',
      attendees: 23,
      maxAttendees: 30,
      description: 'Join us for an in-person meetup to discuss the latest in AI and automation.',
      speaker: 'Community Team',
      location: 'San Francisco, CA'
    },
    {
      id: 3,
      title: 'Wise Deployer Deep Dive',
      date: '2024-02-25',
      time: '3:00 PM EST',
      type: 'webinar',
      attendees: 78,
      maxAttendees: 100,
      description: 'Explore advanced deployment automation features and best practices.',
      speaker: 'Alex Thompson',
      location: 'Online'
    }
  ];

  const topContributors = [
    {
      name: 'Sarah Chen',
      avatar: '/api/placeholder/40/40',
      points: 2450,
      badges: ['Expert', 'Helper', 'Contributor'],
      posts: 89,
      solutions: 34
    },
    {
      name: 'Mike Rodriguez',
      avatar: '/api/placeholder/40/40',
      points: 2180,
      badges: ['Expert', 'Mentor'],
      posts: 67,
      solutions: 28
    },
    {
      name: 'Alex Thompson',
      avatar: '/api/placeholder/40/40',
      points: 1950,
      badges: ['Helper', 'Contributor'],
      posts: 56,
      solutions: 22
    },
    {
      name: 'Jennifer Walsh',
      avatar: '/api/placeholder/40/40',
      points: 1720,
      badges: ['Helper'],
      posts: 43,
      solutions: 18
    }
  ];

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || discussion.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
                <Users className="w-8 h-8" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">Community</h1>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Connect with developers, share knowledge, and get help from the Cybronis community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <MessageCircle className="w-5 h-5 mr-2" />
                <span>1,247 Discussions</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Users className="w-5 h-5 mr-2" />
                <span>2,456 Members</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Star className="w-5 h-5 mr-2" />
                <span>98% Helpful</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: 'Total Members', value: '2,456', icon: Users, color: 'from-blue-500 to-cyan-500' },
              { label: 'Active Discussions', value: '1,247', icon: MessageCircle, color: 'from-purple-500 to-pink-500' },
              { label: 'Solved Issues', value: '892', icon: ThumbsUp, color: 'from-green-500 to-emerald-500' },
              { label: 'Knowledge Articles', value: '156', icon: BookOpen, color: 'from-orange-500 to-red-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
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
                  placeholder="Search discussions, questions, or topics..."
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Discussions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Recent Discussions</h2>
                <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
                  <Plus className="w-4 h-4 mr-2" />
                  New Discussion
                </button>
              </div>

              <div className="space-y-4">
                {filteredDiscussions.map((discussion, index) => (
                  <motion.div
                    key={discussion.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          {discussion.pinned && (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-semibold">
                              Pinned
                            </span>
                          )}
                          {discussion.solved && (
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-semibold">
                              Solved
                            </span>
                          )}
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                            {categories.find(cat => cat.value === discussion.category)?.name}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                          {discussion.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {discussion.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <img
                            src={discussion.authorAvatar}
                            alt={discussion.author}
                            className="w-8 h-8 rounded-full"
                          />
                          <span className="text-sm font-medium text-gray-900">{discussion.author}</span>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {discussion.lastActivity}
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 text-gray-500 text-sm">
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {discussion.replies}
                        </div>
                        <div className="flex items-center">
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          {discussion.likes}
                        </div>
                        <div className="flex items-center">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          {discussion.views}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 text-sm">{event.title}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        event.type === 'workshop' ? 'bg-blue-100 text-blue-800' :
                        event.type === 'meetup' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{event.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(event.date).toLocaleDateString()} at {event.time}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {event.attendees}/{event.maxAttendees}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 text-blue-600 hover:text-blue-800 font-medium text-sm">
                View All Events
                <ArrowRight className="w-4 h-4 inline ml-1" />
              </button>
            </motion.div>

            {/* Top Contributors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Top Contributors</h3>
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <img
                      src={contributor.avatar}
                      alt={contributor.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm">{contributor.name}</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">{contributor.points} points</span>
                        <div className="flex space-x-1">
                          {contributor.badges.map((badge, badgeIndex) => (
                            <span key={badgeIndex} className="px-1 py-0.5 bg-yellow-100 text-yellow-800 rounded text-xs">
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                  <div className="flex items-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Start Discussion
                  </div>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors duration-200">
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Browse Knowledge Base
                  </div>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors duration-200">
                  <div className="flex items-center">
                    <Code className="w-4 h-4 mr-2" />
                    Share Your Project
                  </div>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Join the Conversation</h2>
            <p className="text-xl text-blue-100 mb-8">
              Connect with thousands of developers, share your projects, and get help from the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Discussion
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
