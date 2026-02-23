import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Cloud, 
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
  Play,
  Pause,
  RefreshCw,
  Download,
  Upload,
  Shield,
  Globe,
  Terminal,
  Layers,
  Workflow,
  Monitor,
  Activity,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Users,
  TrendingUp,
  Target,
  FileText,
  MessageSquare,
  Calendar,
  Mail,
  Phone,
  Building,
  DollarSign,
  PieChart,
  BarChart,
  LineChart
} from 'lucide-react';

const SalesforcePage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const automationFeatures = [
    {
      icon: Users,
      title: 'Lead Management Automation',
      description: 'Automate lead capture, qualification, and nurturing processes with intelligent workflows.',
      details: [
        'Automatic lead scoring',
        'Lead assignment rules',
        'Follow-up automation',
        'Lead conversion tracking',
        'Duplicate detection',
        'Lead enrichment'
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Target,
      title: 'Opportunity Tracking',
      description: 'Streamline your sales pipeline with automated opportunity management and tracking.',
      details: [
        'Pipeline automation',
        'Stage progression rules',
        'Forecasting automation',
        'Deal closure tracking',
        'Revenue reporting',
        'Win/loss analysis'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: MessageSquare,
      title: 'Customer Communication',
      description: 'Automate customer interactions across multiple channels with personalized messaging.',
      details: [
        'Email automation',
        'SMS campaigns',
        'Chat integration',
        'Social media automation',
        'Personalized content',
        'Multi-channel tracking'
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Calendar,
      title: 'Task & Activity Management',
      description: 'Automate task creation, assignment, and tracking to improve team productivity.',
      details: [
        'Task automation',
        'Calendar integration',
        'Meeting scheduling',
        'Follow-up reminders',
        'Activity tracking',
        'Performance metrics'
      ],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Automate document generation, sharing, and tracking for better collaboration.',
      details: [
        'Contract generation',
        'Proposal automation',
        'Document approval',
        'Version control',
        'Digital signatures',
        'Compliance tracking'
      ],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: BarChart,
      title: 'Reporting & Analytics',
      description: 'Generate automated reports and insights to drive better business decisions.',
      details: [
        'Custom dashboards',
        'Automated reports',
        'Real-time analytics',
        'Performance tracking',
        'Trend analysis',
        'Predictive insights'
      ],
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  const integrationCapabilities = [
    {
      name: 'CRM Integration',
      description: 'Seamlessly integrate with Salesforce CRM for unified data management',
      icon: Database,
      features: ['Data synchronization', 'Real-time updates', 'Custom field mapping', 'Bulk operations']
    },
    {
      name: 'Email Marketing',
      description: 'Connect with popular email marketing platforms for automated campaigns',
      icon: Mail,
      features: ['Campaign automation', 'List management', 'A/B testing', 'Performance tracking']
    },
    {
      name: 'Social Media',
      description: 'Automate social media posting and engagement across platforms',
      icon: Globe,
      features: ['Content scheduling', 'Engagement tracking', 'Social listening', 'Brand monitoring']
    },
    {
      name: 'Calendar & Scheduling',
      description: 'Integrate with calendar systems for automated scheduling and reminders',
      icon: Calendar,
      features: ['Meeting scheduling', 'Availability management', 'Reminder automation', 'Time tracking']
    },
    {
      name: 'Document Management',
      description: 'Connect with document storage and management systems',
      icon: FileText,
      features: ['Document automation', 'Version control', 'Collaboration tools', 'Access management']
    },
    {
      name: 'Analytics & BI',
      description: 'Integrate with business intelligence tools for advanced analytics',
      icon: BarChart3,
      features: ['Data visualization', 'Custom reports', 'Predictive analytics', 'Performance dashboards']
    }
  ];

  const useCases = [
    {
      title: 'Sales Process Automation',
      description: 'Automate your entire sales process from lead generation to deal closure',
      icon: TrendingUp,
      benefits: [
        'Reduce manual work by 80%',
        'Increase conversion rates by 35%',
        'Improve response time by 90%',
        'Boost team productivity by 50%'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Customer Support Automation',
      description: 'Streamline customer support with intelligent ticket routing and responses',
      icon: MessageSquare,
      benefits: [
        'Faster response times',
        'Consistent service quality',
        'Reduced support costs',
        'Improved customer satisfaction'
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Marketing Campaign Automation',
      description: 'Automate marketing campaigns across multiple channels and touchpoints',
      icon: Target,
      benefits: [
        'Personalized customer journeys',
        'Higher engagement rates',
        'Better lead qualification',
        'Improved ROI tracking'
      ],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Data Management Automation',
      description: 'Automate data entry, validation, and synchronization processes',
      icon: Database,
      benefits: [
        'Eliminate data entry errors',
        'Ensure data consistency',
        'Reduce processing time',
        'Improve data quality'
      ],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$0',
      period: 'per month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 automation workflows',
        'Basic Salesforce integration',
        'Email support',
        'Standard templates',
        '1,000 automation runs/month',
        'Basic reporting'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$2',
      period: 'per month',
      description: 'For growing businesses',
      features: [
        'Unlimited automation workflows',
        'Advanced Salesforce integration',
        'Priority support',
        'Custom templates',
        '10,000 automation runs/month',
        'Advanced reporting & analytics',
        'Multi-user access',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Custom integrations',
        'Dedicated support',
        'White-label options',
        'Unlimited automation runs',
        'Custom reporting',
        'On-premise deployment',
        'SLA guarantee'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
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
                <Zap className="w-4 h-4 mr-2" />
                #1 Salesforce Automation Platform
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                <span className="block">Salesforce</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Automation
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Automate <span className="text-blue-400 font-semibold">any Salesforce operation</span> with our 
                <span className="text-purple-400 font-semibold"> intelligent automation tools</span> and 
                <span className="text-green-400 font-semibold"> custom workflows</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/cybronisai"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center">
                    🚀 Start Automating
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

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
                  <span>Any Salesforce Operation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Custom Workflows</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Real-time Automation</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Automation Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Automation Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automate every aspect of your Salesforce operations with our powerful automation tools and workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
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

      {/* Integration Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Integrations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect Salesforce with your favorite tools and platforms for seamless automation across your entire tech stack.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationCapabilities.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <integration.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{integration.name}</h3>
                <p className="text-gray-600 mb-6">{integration.description}</p>
                <ul className="space-y-2">
                  {integration.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Use Cases</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses are using our Salesforce automation to transform their operations and drive growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-gradient-to-br ${useCase.color} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-white`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                <p className="text-white/90 mb-6 leading-relaxed">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-white/90">
                      <CheckCircle className="w-4 h-4 text-green-300 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
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
              Choose the perfect plan for your Salesforce automation needs. All plans include access to our AI platform.
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

                <Link
                  to={plan.name === 'Enterprise' ? '/contact' : '/cybronisai'}
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  {plan.cta}
                </Link>
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
              Ready to Automate Your Salesforce?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join thousands of businesses who are already using our Salesforce automation to streamline their operations. 
              Start your automation journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/cybronisai"
                className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center">
                  🚀 Start Automating
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
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

export default SalesforcePage;
