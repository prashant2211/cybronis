import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Database, 
  Shield, 
  Rocket, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Clock,
  Sparkles,
  Cpu,
  Network,
  BarChart3,
  Bot,
  Code,
  Cloud,
  Settings,
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
  Volume2
} from 'lucide-react';

const CybronisAIPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const llmModels = [
    { 
      name: 'GPT-4', 
      provider: 'OpenAI', 
      description: 'Most advanced reasoning and creativity', 
      color: 'from-green-500 to-emerald-600'
    },
    { 
      name: 'Claude-3', 
      provider: 'Anthropic', 
      description: 'Superior analysis and safety', 
      color: 'from-orange-500 to-red-600'
    },
    { 
      name: 'Gemini', 
      provider: 'Google', 
      description: 'Multimodal understanding', 
      color: 'from-blue-500 to-cyan-600'
    },
    { 
      name: 'Grok-4', 
      provider: 'xAI', 
      description: 'Real-time information access', 
      color: 'from-purple-500 to-pink-600'
    },
    { 
      name: 'DeepSeek', 
      provider: 'DeepSeek', 
      description: 'Code generation and analysis', 
      color: 'from-indigo-500 to-purple-600'
    },
    { 
      name: 'Ensemble', 
      provider: 'Cybronis', 
      description: 'Custom multi-model fusion', 
      color: 'from-gray-500 to-slate-600'
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'Multi-LLM Support',
      description: 'Access 6 powerful AI models including GPT-4, Claude-3, Gemini, Grok-4, DeepSeek, and our custom ensemble model.',
      details: ['Switch between models instantly', 'Compare responses side-by-side', 'Custom model selection per query', 'Model performance analytics']
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
      ]
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
      ]
    },
    {
      icon: Database,
      title: 'Advanced RAG Technology',
      description: 'Handle massive knowledge bases with our state-of-the-art Retrieval-Augmented Generation technology.',
      details: ['Upload documents of any size', 'Intelligent document parsing', 'Context-aware responses', 'Knowledge base management']
    },
    {
      icon: Zap,
      title: 'Salesforce Automation',
      description: 'Automate any Salesforce operation with our intelligent automation tools and workflows.',
      details: ['Lead management automation', 'Opportunity tracking', 'Custom workflow creation', 'Real-time data sync']
    },
    {
      icon: MessageSquare,
      title: 'Smart Chat Interface',
      description: 'Experience the most intuitive and powerful AI chat interface with advanced features.',
      details: ['Conversation history', 'Export conversations', 'Share chat sessions', 'Custom chat themes']
    },
    {
      icon: Search,
      title: 'AI-Driven Search',
      description: 'Powerful search capabilities that understand context and provide intelligent results.',
      details: ['Semantic search', 'Multi-language support', 'Search within documents', 'Smart suggestions']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to track usage, performance, and optimize your AI interactions.',
      details: ['Usage statistics', 'Model performance metrics', 'Cost tracking', 'Custom reports']
    }
  ];

  const departmentAgents = [
    {
      icon: TrendingUp,
      title: 'Marketing AI Agent',
      description: 'Specialized AI agent for marketing operations, campaign management, and customer engagement.',
      capabilities: [
        'Campaign strategy development',
        'Content creation and optimization',
        'Social media management',
        'Email marketing automation',
        'Lead generation and nurturing',
        'Performance analytics and reporting',
        'A/B testing optimization',
        'Customer segmentation'
      ],
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Users,
      title: 'Sales AI Agent',
      description: 'Intelligent sales assistant for lead qualification, pipeline management, and revenue optimization.',
      capabilities: [
        'Lead scoring and qualification',
        'Sales pipeline management',
        'Proposal and quote generation',
        'Follow-up automation',
        'Customer relationship tracking',
        'Sales forecasting',
        'Competitive analysis',
        'Deal closure optimization'
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'HR AI Agent',
      description: 'Human resources AI agent for recruitment, employee management, and organizational development.',
      capabilities: [
        'Resume screening and candidate matching',
        'Interview scheduling and coordination',
        'Employee onboarding automation',
        'Performance review management',
        'Training and development tracking',
        'Compliance monitoring',
        'Employee engagement analysis',
        'Workforce planning'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: BarChart3,
      title: 'Finance AI Agent',
      description: 'Financial AI agent for accounting, budgeting, financial analysis, and compliance management.',
      capabilities: [
        'Automated bookkeeping and reconciliation',
        'Budget planning and monitoring',
        'Financial reporting and analysis',
        'Invoice processing and payment tracking',
        'Expense management and approval',
        'Tax preparation assistance',
        'Risk assessment and mitigation',
        'Investment analysis and recommendations'
      ],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Settings,
      title: 'Operations AI Agent',
      description: 'Operations AI agent for process optimization, supply chain management, and operational efficiency.',
      capabilities: [
        'Process automation and optimization',
        'Supply chain monitoring',
        'Inventory management',
        'Quality control and assurance',
        'Vendor relationship management',
        'Operational reporting',
        'Resource allocation optimization',
        'Performance monitoring'
      ],
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: MessageSquare,
      title: 'Customer Service AI Agent',
      description: 'Customer service AI agent for support ticket management, customer communication, and satisfaction optimization.',
      capabilities: [
        'Ticket routing and prioritization',
        'Automated response generation',
        'Customer sentiment analysis',
        'Knowledge base management',
        'Escalation handling',
        'Customer feedback analysis',
        'Service level monitoring',
        'Customer satisfaction optimization'
      ],
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        'Access to all 6 AI models',
        'Unlimited conversations',
        'Basic RAG support',
        'MCP protocol support',
        'Basic AI agents',
        'Standard support',
        '5GB document storage'
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Pro',
      price: '$5',
      period: 'per month',
      description: 'For professionals and small teams',
      features: [
        'Everything in Free',
        'Advanced RAG features',
        'Full MCP protocol support',
        'Advanced AI agents',
        'Salesforce integration',
        'Priority support',
        '50GB document storage',
        'API access',
        'Custom workflows'
      ],
      cta: 'Start Pro Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations',
      features: [
        'Everything in Pro',
        'Unlimited document storage',
        'Custom model training',
        'Enterprise MCP support',
        'Custom AI agent development',
        'Dedicated support',
        'On-premise deployment',
        'SLA guarantee',
        'Custom integrations'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-1000"></div>
          <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-2000"></div>
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
                <Brain className="w-4 h-4 mr-2" />
                #1 AI Chat Platform
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                <span className="block">CybronisAI</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Multi-LLM Platform
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Experience the world's most advanced <span className="text-blue-400 font-semibold">AI chat platform</span> with 
                6 powerful LLMs, <span className="text-indigo-400 font-semibold">MCP support</span>, 
                <span className="text-emerald-400 font-semibold"> AI agents</span>, <span className="text-purple-400 font-semibold">RAG technology</span>, and 
                <span className="text-green-400 font-semibold"> Salesforce automation</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://www.cybronisai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center">
                    🚀 Launch CybronisAI
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>

                <Link
                  to="#features"
                  className="group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50 backdrop-blur-md"
                >
                  <span className="flex items-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </span>
                </Link>
              </div>

              <div className="flex items-center justify-center space-x-8 text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>100% Free to Use</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Unlimited Access</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LLM Models Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">6 AI Models</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from the world's most powerful AI models, each optimized for different tasks and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {llmModels.map((model, index) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`h-32 bg-gradient-to-br ${model.color} rounded-t-2xl flex items-center justify-center`}>
                  <Brain className="w-12 h-12 text-white opacity-80" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{model.name}</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {model.provider}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{model.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Available Now</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to harness the power of AI for your business and personal use.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department AI Agents Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Department-Specific <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">AI Agents</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create specialized AI agents for different departments. Each agent is trained and optimized for specific business functions, 
              ensuring maximum efficiency and expertise in their domain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departmentAgents.map((agent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${agent.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${agent.color} flex items-center justify-center mr-4`}>
                      <agent.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{agent.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {agent.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Capabilities:</h4>
                    <ul className="space-y-2">
                      {agent.capabilities.map((capability, capIndex) => (
                        <li key={capIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Department Agents</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Don't see your department? Create custom AI agents tailored to your specific business needs. 
                Our platform allows you to train and deploy specialized agents for any function or industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.cybronisai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  Create Custom Agent
                </a>
                <Link
                  to="/contact"
                  className="px-6 py-3 border-2 border-indigo-500 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-200 transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your needs. All plans include access to all AI models.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-500 font-normal">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.name === 'Enterprise' ? (
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                        : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                ) : (
                  <a
                    href="https://www.cybronisai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                        : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                    }`}
                  >
                    {plan.cta}
                  </a>
                )}
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
              Ready to Experience CybronisAI?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join thousands of users who are already using CybronisAI to boost their productivity. 
              Start your AI journey today - completely free!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.cybronisai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center">
                  🚀 Launch CybronisAI
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CybronisAIPage;

