'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Zap, 
  Database, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Clock,
  Sparkles,
  Cpu,
  Network,
  BarChart3,
  Code,
  Settings,
  Users,
  TrendingUp,
  Target,
  Globe,
  Shield,
  Award,
  Lightbulb,
  Rocket,
  Heart,
  Bot,
  Layers,
  GitCommit
} from 'lucide-react';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and automation technology.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Your data and privacy are our top priorities. We implement enterprise-grade security measures.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and building solutions that bring people together.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from product design to customer support.',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const team = [
    {
      name: 'Prashant Raj',
      role: 'Founder',
      description: 'Visionary leader with 5+ years of experience in AI and automation technologies.',
      image: '/api/placeholder/300/300',
      social: {
        email: 'info@cybronis.com',
        phone: '+91 6360252875'
      }
    }
  ];

  const milestones = [
    {
      id: 'company-founded',
      year: '2025',
      title: 'Company Founded',
      description: 'Cybronis was founded with a vision to democratize AI and automation technology.',
      icon: Rocket
    },
    {
      id: 'cybronisai-launch',
      year: '2025',
      title: 'CybronisAI Launch',
      description: 'Launched our flagship multi-LLM AI platform with 6 powerful AI models.',
      icon: Brain
    },
    {
      id: 'cybronis-bridge-release',
      year: '2025',
      title: 'Wise Deployer Release',
      description: 'Introduced deployment automation platform supporting 6+ hosting providers.',
      icon: Zap
    },
    {
      id: 'salesforce-integration',
      year: '2025',
      title: 'Salesforce Integration',
      description: 'Added comprehensive Salesforce automation capabilities to our platform.',
      icon: Database
    },
    {
      id: 'mcp-support',
      year: '2025',
      title: 'MCP Protocol Support',
      description: 'Integrated Model Context Protocol for advanced AI agent communication and tool access.',
      icon: Network
    },
    {
      id: 'ai-agents-launch',
      year: '2025',
      title: 'AI Agents Platform',
      description: 'Launched autonomous AI agents capable of complex task execution and decision-making.',
      icon: Bot
    }
  ];

  const stats = [
    { number: '10K+', label: 'Active Users', icon: Users },
    { number: '6', label: 'AI Models', icon: Brain },
    { number: 'MCP', label: 'Protocol Support', icon: Network },
    { number: '∞', label: 'AI Agents', icon: Bot },
    { number: '6+', label: 'Hosting Providers', icon: Globe },
    { number: '99.9%', label: 'Uptime', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-1000"></div>
          <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                <Heart className="w-4 h-4 mr-2" />
                About Cybronis
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                <span className="block">Building the Future of</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  AI & Automation
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We're on a mission to make <span className="text-blue-400 font-semibold">artificial intelligence</span> and 
                <span className="text-purple-400 font-semibold"> automation</span> accessible to everyone, 
                empowering businesses and individuals to achieve more.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
                <Target className="w-4 h-4 mr-2" />
                Our Mission
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Democratizing AI & Automation
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We believe that artificial intelligence and automation should be accessible to everyone, 
                not just large corporations. Our mission is to break down barriers and provide powerful, 
                easy-to-use tools that empower individuals and businesses of all sizes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By combining cutting-edge AI technology with intuitive design, we're making it possible 
                for anyone to harness the power of automation and artificial intelligence to solve 
                real-world problems and drive innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
                <Lightbulb className="w-4 h-4 mr-2" />
                Our Vision
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                A World Powered by Intelligent Automation
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We envision a future where intelligent automation seamlessly integrates into every aspect 
                of work and life, making complex tasks simple and enabling people to focus on what matters most.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our vision is to create a comprehensive ecosystem of AI-powered tools that work together 
                to solve complex problems, streamline workflows, and unlock human potential like never before.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group text-center"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section - Full Width */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 px-4 sm:px-6 lg:px-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Founder</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The visionary leader behind Cybronis, driving innovation in AI and automation technology.
            </p>
          </motion.div>

          {/* Full Width Founder Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-4 sm:mx-6 lg:mx-8 bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Founder Image/Icon Section */}
              <div className="lg:col-span-1 bg-gradient-to-br from-blue-500 to-purple-600 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-6xl font-bold text-white">PR</span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white">{team[0].name}</h3>
                    <p className="text-blue-100 text-xl font-semibold">{team[0].role}</p>
                  </div>
                </div>
              </div>

              {/* Founder Details Section */}
              <div className="lg:col-span-2 p-12">
                <div className="space-y-8">
                  {/* Description */}
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">About the Founder</h4>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {team[0].description} Prashant is a passionate technologist with deep expertise in artificial intelligence, 
                      machine learning, and automation systems. His vision is to make advanced AI technology accessible 
                      to businesses of all sizes, empowering them to automate complex processes and drive innovation.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">@</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Email</p>
                        <p className="text-gray-900 font-semibold">{team[0].social.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                      <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">📞</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Phone</p>
                        <p className="text-gray-900 font-semibold">{team[0].social.phone}</p>
                      </div>
                    </div>
                  </div>

                  {/* Vision Statement */}
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                    <h4 className="text-2xl font-bold mb-4">Vision Statement</h4>
                    <p className="text-lg leading-relaxed">
                      "To democratize AI and automation technology, making it accessible to every business and individual. 
                      We believe that the future belongs to those who can harness the power of artificial intelligence 
                      to solve real-world problems and create meaningful impact."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to revolutionize AI and automation.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <milestone.icon className="w-6 h-6 text-white" />
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Join Us on This Journey
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Be part of the future of AI and automation. Together, we can build amazing things 
              that make the world more efficient and intelligent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cybronisai"
                className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center">
                  🚀 Try Our Products
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
