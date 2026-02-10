'use client';

import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Clock, 
  Activity,
  Server,
  Database,
  Globe,
  Zap,
  Brain,
  RefreshCw,
  TrendingUp,
  Users,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { useState, useEffect } from 'react';

const StatusPage = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      name: 'CybronisAI API',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      description: 'Main AI platform API endpoints',
      lastIncident: '2024-01-10',
      icon: Brain,
      color: 'green'
    },
    {
      name: 'Wise Deployer',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '32ms',
      description: 'Deployment automation platform',
      lastIncident: '2024-01-08',
      icon: Zap,
      color: 'green'
    },
    {
      name: 'Authentication Service',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '28ms',
      description: 'User authentication and authorization',
      lastIncident: '2024-01-05',
      icon: Users,
      color: 'green'
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '12ms',
      description: 'MongoDB and data storage services',
      lastIncident: '2024-01-12',
      icon: Database,
      color: 'green'
    },
    {
      name: 'CDN & Static Assets',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '8ms',
      description: 'Content delivery and static file serving',
      lastIncident: '2024-01-15',
      icon: Globe,
      color: 'green'
    },
    {
      name: 'Monitoring & Analytics',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '15ms',
      description: 'System monitoring and analytics',
      lastIncident: '2024-01-03',
      icon: Activity,
      color: 'green'
    }
  ];

  const recentIncidents = [
    {
      id: 1,
      title: 'CybronisAI API Response Time Degradation',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-01-15T14:30:00Z',
      endTime: '2024-01-15T15:45:00Z',
      description: 'Some users experienced slower response times due to increased load. We scaled up our infrastructure and the issue was resolved.',
      affectedServices: ['CybronisAI API'],
      impact: 'Some users may have experienced 2-3 second delays in API responses.'
    },
    {
      id: 2,
      title: 'Database Connection Pool Exhaustion',
      status: 'resolved',
      severity: 'major',
      startTime: '2024-01-12T09:15:00Z',
      endTime: '2024-01-12T11:30:00Z',
      description: 'High traffic caused database connection pool exhaustion. We increased pool size and implemented better connection management.',
      affectedServices: ['Database Services', 'CybronisAI API', 'Wise Deployer'],
      impact: 'Some users experienced intermittent service unavailability for approximately 2 hours.'
    },
    {
      id: 3,
      title: 'CDN Edge Server Maintenance',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-01-10T02:00:00Z',
      endTime: '2024-01-10T04:00:00Z',
      description: 'Scheduled maintenance on CDN edge servers. All services remained operational with minimal impact.',
      affectedServices: ['CDN & Static Assets'],
      impact: 'Slightly slower loading times for static assets during maintenance window.'
    }
  ];

  const metrics = [
    {
      name: 'API Requests',
      value: '2.4M',
      change: '+12.5%',
      trend: 'up',
      icon: TrendingUp
    },
    {
      name: 'Active Users',
      value: '15.2K',
      change: '+8.3%',
      trend: 'up',
      icon: Users
    },
    {
      name: 'Average Response Time',
      value: '45ms',
      change: '-5.2%',
      trend: 'down',
      icon: Clock
    },
    {
      name: 'Uptime (30 days)',
      value: '99.9%',
      change: '+0.1%',
      trend: 'up',
      icon: CheckCircle
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-600 bg-green-100';
      case 'degraded': return 'text-yellow-600 bg-yellow-100';
      case 'outage': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return CheckCircle;
      case 'degraded': return AlertCircle;
      case 'outage': return XCircle;
      default: return Clock;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'minor': return 'text-yellow-600 bg-yellow-100';
      case 'major': return 'text-orange-600 bg-orange-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

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
                <Activity className="w-8 h-8" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">System Status</h1>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Real-time status of all Cybronis services. We're committed to providing reliable, high-performance services.
            </p>
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>All Systems Operational</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Clock className="w-5 h-5 mr-2" />
                <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">System Overview</h2>
            <p className="text-xl text-gray-600">Current status of all Cybronis services</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    metric.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    <metric.icon className={`w-6 h-6 ${
                      metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`} />
                  </div>
                  <div className={`flex items-center text-sm font-semibold ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.trend === 'up' ? (
                      <ArrowUp className="w-4 h-4 mr-1" />
                    ) : (
                      <ArrowDown className="w-4 h-4 mr-1" />
                    )}
                    {metric.change}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
                <p className="text-gray-600">{metric.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Status */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Status</h2>
            <p className="text-xl text-gray-600">Detailed status of each service component</p>
          </motion.div>

          <div className="space-y-4">
            {services.map((service, index) => {
              const StatusIcon = getStatusIcon(service.status);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        service.color === 'green' ? 'bg-green-100' : 
                        service.color === 'yellow' ? 'bg-yellow-100' : 'bg-red-100'
                      }`}>
                        <service.icon className={`w-6 h-6 ${
                          service.color === 'green' ? 'text-green-600' : 
                          service.color === 'yellow' ? 'text-yellow-600' : 'text-red-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(service.status)}`}>
                          <StatusIcon className="w-4 h-4 mr-2" />
                          {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Last incident: {service.lastIncident}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Uptime</p>
                        <p className="text-lg font-semibold text-gray-900">{service.uptime}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Response Time</p>
                        <p className="text-lg font-semibold text-gray-900">{service.responseTime}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Incidents</h2>
            <p className="text-xl text-gray-600">History of service disruptions and maintenance</p>
          </motion.div>

          <div className="space-y-6">
            {recentIncidents.map((incident, index) => (
              <motion.div
                key={incident.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{incident.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(incident.severity)}`}>
                        {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        incident.status === 'resolved' ? 'text-green-600 bg-green-100' : 'text-yellow-600 bg-yellow-100'
                      }`}>
                        {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{incident.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Start Time</p>
                        <p className="font-semibold text-gray-900">
                          {new Date(incident.startTime).toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">End Time</p>
                        <p className="font-semibold text-gray-900">
                          {new Date(incident.endTime).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Affected Services</p>
                      <div className="flex flex-wrap gap-2">
                        {incident.affectedServices.map((service, serviceIndex) => (
                          <span key={serviceIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Impact</p>
                      <p className="text-gray-900">{incident.impact}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get notified about service status changes, incidents, and maintenance windows.
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
              We'll only send you important status updates. No spam.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StatusPage;
