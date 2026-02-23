import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Cloud, 
  GitBranch, 
  Server, 
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
  Database,
  Terminal,
  Layers,
  Workflow,
  Monitor,
  Activity,
  AlertCircle,
  CheckCircle2,
  XCircle
} from 'lucide-react';

const CybronisBridgePage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const hostingProviders = [
    { name: 'Hostinger', logo: 'H', description: 'Affordable hosting with global CDN', color: 'from-orange-500 to-red-600' },
    { name: 'GoDaddy', logo: 'G', description: 'World\'s largest domain registrar', color: 'from-green-500 to-emerald-600' },
    { name: 'Bluehost', logo: 'B', description: 'WordPress optimized hosting', color: 'from-blue-500 to-cyan-600' },
    { name: 'Namecheap', logo: 'N', description: 'Premium hosting with great support', color: 'from-purple-500 to-pink-600' },
    { name: 'GitHub Pages', logo: 'GH', description: 'Free static site hosting', color: 'from-gray-500 to-slate-600' },
    { name: 'Vercel', logo: 'V', description: 'Next.js optimized deployment', color: 'from-black to-gray-800' }
  ];

  const features = [
    {
      icon: Zap,
      title: 'One-Click Deployment',
      description: 'Deploy your applications to multiple hosting providers with just a single click.',
      details: ['Instant deployment', 'Multi-provider support', 'Zero configuration', 'Automatic scaling']
    },
    {
      icon: GitBranch,
      title: 'Git Integration',
      description: 'Seamlessly integrate with Git repositories for automated deployments.',
      details: ['GitHub integration', 'GitLab support', 'Bitbucket compatibility', 'Branch-based deployment']
    },
    {
      icon: Workflow,
      title: 'CI/CD Pipeline',
      description: 'Build custom CI/CD pipelines for automated testing and deployment.',
      details: ['Custom workflows', 'Automated testing', 'Quality gates', 'Rollback capabilities']
    },
    {
      icon: Monitor,
      title: 'Live Deployment Tracking',
      description: 'Monitor your deployments in real-time with detailed logs and status updates.',
      details: ['Real-time logs', 'Deployment status', 'Performance metrics', 'Error tracking']
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud Support',
      description: 'Deploy across multiple cloud providers and hosting services simultaneously.',
      details: ['AWS integration', 'Google Cloud support', 'Azure compatibility', 'Hybrid deployments']
    },
    {
      icon: Settings,
      title: 'Advanced Configuration',
      description: 'Fine-tune your deployment settings with our powerful configuration options.',
      details: ['Environment variables', 'Custom domains', 'SSL certificates', 'Performance optimization']
    }
  ];

  const deploymentSteps = [
    {
      step: 1,
      title: 'Connect Repository',
      description: 'Link your Git repository or upload your code directly',
      icon: GitBranch,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      step: 2,
      title: 'Choose Hosting',
      description: 'Select from 6+ hosting providers or deploy to multiple',
      icon: Cloud,
      color: 'from-green-500 to-emerald-600'
    },
    {
      step: 3,
      title: 'Configure Pipeline',
      description: 'Set up your CI/CD pipeline with custom workflows',
      icon: Workflow,
      color: 'from-purple-500 to-pink-600'
    },
    {
      step: 4,
      title: 'Deploy & Monitor',
      description: 'Deploy with one click and monitor in real-time',
      icon: Monitor,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2',
      period: 'per month',
      description: 'Perfect for personal projects',
      features: [
        '3 hosting providers',
        '5 deployments/month',
        'Basic CI/CD',
        'Email support',
        '10GB storage'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$5',
      period: 'per month',
      description: 'For growing businesses',
      features: [
        'All hosting providers',
        'Unlimited deployments',
        'Advanced CI/CD',
        'Priority support',
        '100GB storage',
        'Custom domains',
        'Team collaboration'
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
        'On-premise deployment',
        'Dedicated support',
        'Custom integrations',
        'Unlimited storage',
        'SLA guarantee',
        'White-label options'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-1000"></div>
          <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-2000"></div>
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
                #1 Deployment Automation Platform
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                <span className="block">Wise Deployer</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Deployment Automation
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Deploy your applications to <span className="text-green-400 font-semibold">multiple hosting providers</span> with 
                <span className="text-blue-400 font-semibold"> one-click automation</span> and 
                <span className="text-purple-400 font-semibold"> custom CI/CD pipelines</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/services"
                  target="_blank"
                  className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center">
                    🚀 Launch Wise Deployer
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <a
                  href="#features"
                  className="group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50 backdrop-blur-md"
                >
                  <span className="flex items-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </span>
                </a>
              </div>

              <div className="flex items-center justify-center space-x-8 text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>6+ Hosting Providers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>One-Click Deploy</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Live Monitoring</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hosting Providers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Deploy to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">6+ Providers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from the world's most popular hosting providers or deploy to multiple platforms simultaneously.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hostingProviders.map((provider, index) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`h-32 bg-gradient-to-br ${provider.color} rounded-t-2xl flex items-center justify-center`}>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{provider.logo}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{provider.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{provider.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Supported</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">4-Step Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deploy your applications in minutes with our streamlined deployment process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deploymentSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center group"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < deploymentSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to automate your deployment process and manage your applications.
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
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Live Monitoring Demo */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Deployment Monitoring</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor your deployments in real-time with detailed logs, status updates, and performance metrics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-2xl p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Deployment Dashboard</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">Live</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300 text-sm">Active Deployments</span>
                  <Activity className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-white">12</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300 text-sm">Success Rate</span>
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-white">98.5%</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300 text-sm">Avg. Deploy Time</span>
                  <Clock className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white">2.3m</div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-300 font-medium">Recent Deployments</span>
                <RefreshCw className="w-4 h-4 text-gray-400" />
              </div>
              <div className="space-y-3">
                {[
                  { name: 'my-app-frontend', status: 'success', time: '2 minutes ago', provider: 'Vercel' },
                  { name: 'api-backend', status: 'deploying', time: '5 minutes ago', provider: 'AWS' },
                  { name: 'admin-dashboard', status: 'success', time: '1 hour ago', provider: 'Hostinger' }
                ].map((deployment, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        deployment.status === 'success' ? 'bg-green-500' : 
                        deployment.status === 'deploying' ? 'bg-yellow-500 animate-pulse' : 'bg-red-500'
                      }`}></div>
                      <span className="text-white font-medium">{deployment.name}</span>
                      <span className="text-gray-400 text-sm">to {deployment.provider}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{deployment.time}</span>
                  </div>
                ))}
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
              Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your deployment needs. All plans include access to all hosting providers.
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
                  plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  to={plan.name === 'Enterprise' ? '/contact' : '/services'}
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600'
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Automate Your Deployments?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Join thousands of developers who are already using Wise Deployer to streamline their deployment process. 
              Start your automation journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                target="_blank"
                className="group px-8 py-4 bg-white text-green-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center">
                  🚀 Launch Cybronis Bridge
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

export default CybronisBridgePage;
