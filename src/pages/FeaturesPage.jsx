import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  MessageSquare,
  FileText,
  Search,
  BarChart,
  Lock,
  RefreshCw,
  Download,
  Upload,
  Play,
  Pause,
  Volume2,
  Cloud,
  Server,
  GitBranch,
  Workflow,
  Monitor,
  Activity,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Mail,
  Calendar,
  Bot,
  Layers,
  GitCommit,
  Terminal,
  Wifi,
  Smartphone,
  Laptop,
  PieChart,
  LineChart
} from 'lucide-react';

const FeaturesPage = () => {
  const [activeCategory, setActiveCategory] = useState('ai');

  const categories = [
    { id: 'ai', name: 'AI Features', icon: Brain },
    { id: 'automation', name: 'Automation', icon: Zap },
    { id: 'deployment', name: 'Deployment', icon: Cloud },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 }
  ];

  const aiFeatures = [
    {
      icon: Brain,
      title: 'Multi-LLM Support',
      description: 'Access 6 powerful AI models including GPT-4, Claude-3, Gemini, Grok-4, DeepSeek, and our custom ensemble model.',
      details: [
        'Switch between models instantly',
        'Compare responses side-by-side',
        'Custom model selection per query',
        'Model performance analytics',
        'Cost optimization',
        'Response quality scoring'
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Network,
      title: 'Model Context Protocol (MCP)',
      description: 'Seamless integration with MCP for advanced AI agent communication, tool access, and multi-modal interactions.',
      details: [
        'Standardized AI agent communication',
        'Tool and resource access protocols',
        'Multi-modal data handling',
        'Secure agent-to-agent communication',
        'Context preservation across interactions',
        'Real-time protocol updates',
        'Cross-platform compatibility',
        'Enhanced security and authentication'
      ],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Bot,
      title: 'AI Agents & Autonomous Systems',
      description: 'Deploy intelligent AI agents that can perform complex tasks, make decisions, and interact with external systems autonomously.',
      details: [
        'Autonomous task execution',
        'Multi-step workflow automation',
        'External system integration',
        'Decision-making capabilities',
        'Learning and adaptation',
        'Error handling and recovery',
        'Performance monitoring',
        'Custom agent creation tools'
      ],
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Database,
      title: 'Advanced RAG Technology',
      description: 'Handle massive knowledge bases with our state-of-the-art Retrieval-Augmented Generation technology.',
      details: [
        'Upload documents of any size',
        'Intelligent document parsing',
        'Context-aware responses',
        'Knowledge base management',
        'Vector similarity search',
        'Real-time knowledge updates'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: MessageSquare,
      title: 'Smart Chat Interface',
      description: 'Experience the most intuitive and powerful AI chat interface with advanced features.',
      details: [
        'Conversation history',
        'Export conversations',
        'Share chat sessions',
        'Custom chat themes',
        'Voice input/output',
        'Multi-language support'
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Search,
      title: 'AI-Driven Search',
      description: 'Powerful search capabilities that understand context and provide intelligent results.',
      details: [
        'Semantic search',
        'Multi-language support',
        'Search within documents',
        'Smart suggestions',
        'Search analytics',
        'Custom search filters'
      ],
      color: 'from-orange-500 to-red-600'
    }
  ];

  const automationFeatures = [
    {
      icon: Zap,
      title: 'Salesforce Automation',
      description: 'Automate any Salesforce operation with our intelligent automation tools and workflows.',
      details: [
        'Lead management automation',
        'Opportunity tracking',
        'Custom workflow creation',
        'Real-time data sync',
        'Email automation',
        'Task automation'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Workflow,
      title: 'Custom Workflows',
      description: 'Create complex automation workflows with our visual workflow builder.',
      details: [
        'Drag-and-drop interface',
        'Conditional logic',
        'Multi-step processes',
        'Error handling',
        'Workflow templates',
        'Version control'
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Calendar,
      title: 'Scheduling & Triggers',
      description: 'Automate tasks based on schedules, events, and custom triggers.',
      details: [
        'Cron-based scheduling',
        'Event-driven triggers',
        'Webhook integration',
        'Custom trigger conditions',
        'Time zone support',
        'Recurring tasks'
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Mail,
      title: 'Communication Automation',
      description: 'Automate email, SMS, and other communication channels.',
      details: [
        'Email campaigns',
        'SMS notifications',
        'Social media posting',
        'Personalized messaging',
        'A/B testing',
        'Performance tracking'
      ],
      color: 'from-orange-500 to-red-600'
    }
  ];

  const deploymentFeatures = [
    {
      icon: Cloud,
      title: 'Multi-Cloud Deployment',
      description: 'Deploy your applications to multiple cloud providers and hosting services.',
      details: [
        '6+ hosting providers',
        'One-click deployment',
        'Multi-region support',
        'Auto-scaling',
        'Load balancing',
        'CDN integration'
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: GitBranch,
      title: 'Git Integration',
      description: 'Seamlessly integrate with Git repositories for automated deployments.',
      details: [
        'GitHub integration',
        'GitLab support',
        'Bitbucket compatibility',
        'Branch-based deployment',
        'Pull request previews',
        'Rollback capabilities'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Workflow,
      title: 'CI/CD Pipeline',
      description: 'Build custom CI/CD pipelines for automated testing and deployment.',
      details: [
        'Custom workflows',
        'Automated testing',
        'Quality gates',
        'Parallel builds',
        'Artifact management',
        'Environment promotion'
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Monitor,
      title: 'Live Monitoring',
      description: 'Monitor your deployments in real-time with detailed logs and status updates.',
      details: [
        'Real-time logs',
        'Deployment status',
        'Performance metrics',
        'Error tracking',
        'Alert notifications',
        'Health checks'
      ],
      color: 'from-orange-500 to-red-600'
    }
  ];

  const analyticsFeatures = [
    {
      icon: BarChart3,
      title: 'Usage Analytics',
      description: 'Comprehensive analytics to track usage, performance, and optimize your AI interactions.',
      details: [
        'Usage statistics',
        'Model performance metrics',
        'Cost tracking',
        'Custom reports',
        'Real-time dashboards',
        'Export capabilities'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Performance Insights',
      description: 'Get insights into your automation performance and optimization opportunities.',
      details: [
        'Performance trends',
        'Bottleneck identification',
        'Optimization suggestions',
        'Capacity planning',
        'Resource utilization',
        'Predictive analytics'
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Users,
      title: 'User Analytics',
      description: 'Understand user behavior and engagement with detailed user analytics.',
      details: [
        'User activity tracking',
        'Engagement metrics',
        'Feature adoption',
        'User segmentation',
        'Retention analysis',
        'Churn prediction'
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Target,
      title: 'Business Intelligence',
      description: 'Transform data into actionable business insights with our BI tools.',
      details: [
        'Custom dashboards',
        'KPI tracking',
        'Data visualization',
        'Automated reports',
        'Alert systems',
        'ROI analysis'
      ],
      color: 'from-orange-500 to-red-600'
    }
  ];

  const getFeaturesByCategory = () => {
    switch (activeCategory) {
      case 'ai': return aiFeatures;
      case 'automation': return automationFeatures;
      case 'deployment': return deploymentFeatures;
      case 'analytics': return analyticsFeatures;
      default: return aiFeatures;
    }
  };

  const features = getFeaturesByCategory();

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
                <Sparkles className="w-4 h-4 mr-2" />
                Comprehensive Features
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                <span className="block">Powerful</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Features & Capabilities
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover the comprehensive suite of <span className="text-blue-400 font-semibold">AI tools</span>, 
                <span className="text-indigo-400 font-semibold"> MCP support</span>, 
                <span className="text-emerald-400 font-semibold"> AI agents</span>, 
                <span className="text-purple-400 font-semibold"> automation features</span>, and 
                <span className="text-green-400 font-semibold"> deployment solutions</span> designed to transform your business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Integrations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms for a unified workflow experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'Salesforce', icon: Database, color: 'from-blue-500 to-cyan-600' },
              { name: 'GitHub', icon: GitBranch, color: 'from-gray-500 to-slate-600' },
              { name: 'AWS', icon: Cloud, color: 'from-orange-500 to-red-600' },
              { name: 'Google Cloud', icon: Cloud, color: 'from-blue-500 to-green-600' },
              { name: 'Slack', icon: MessageSquare, color: 'from-purple-500 to-pink-600' },
              { name: 'Zapier', icon: Zap, color: 'from-orange-500 to-yellow-600' }
            ].map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${integration.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <integration.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-600">{integration.name}</p>
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
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Start exploring our comprehensive suite of AI and automation tools today. 
              Experience the power of intelligent technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/cybronisai"
                className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center">
                  🚀 Try CybronisAI
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/cybronis-bridge"
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10"
              >
                Explore Wise Deployer
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
