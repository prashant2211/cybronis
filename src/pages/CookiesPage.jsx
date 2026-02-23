import { motion } from 'framer-motion';
import { 
  Cookie, 
  Settings, 
  Shield, 
  Eye, 
  Database, 
  Target,
  BarChart3,
  CheckCircle,
  Calendar,
  Mail,
  Phone
} from 'lucide-react';

const CookiesPage = () => {
  const lastUpdated = 'January 15, 2024';

  const cookieTypes = [
    {
      category: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      necessary: true,
      cookies: [
        {
          name: 'session_id',
          purpose: 'Maintains your session state and login status',
          duration: 'Session',
          type: 'First-party'
        },
        {
          name: 'csrf_token',
          purpose: 'Protects against cross-site request forgery attacks',
          duration: 'Session',
          type: 'First-party'
        },
        {
          name: 'preferences',
          purpose: 'Stores your basic preferences and settings',
          duration: '1 year',
          type: 'First-party'
        }
      ]
    },
    {
      category: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      necessary: false,
      cookies: [
        {
          name: '_ga',
          purpose: 'Google Analytics - distinguishes unique users',
          duration: '2 years',
          type: 'Third-party'
        },
        {
          name: '_ga_*',
          purpose: 'Google Analytics - stores session state',
          duration: '2 years',
          type: 'Third-party'
        },
        {
          name: '_gid',
          purpose: 'Google Analytics - distinguishes unique users',
          duration: '24 hours',
          type: 'Third-party'
        },
        {
          name: 'hotjar_*',
          purpose: 'Hotjar - user behavior analytics',
          duration: '1 year',
          type: 'Third-party'
        }
      ]
    },
    {
      category: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization, such as videos and live chat.',
      necessary: false,
      cookies: [
        {
          name: 'language_preference',
          purpose: 'Remembers your language selection',
          duration: '1 year',
          type: 'First-party'
        },
        {
          name: 'theme_preference',
          purpose: 'Stores your dark/light mode preference',
          duration: '1 year',
          type: 'First-party'
        },
        {
          name: 'chat_widget',
          purpose: 'Enables live chat functionality',
          duration: 'Session',
          type: 'First-party'
        }
      ]
    },
    {
      category: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites to display relevant and engaging advertisements.',
      necessary: false,
      cookies: [
        {
          name: '_fbp',
          purpose: 'Facebook Pixel - tracks conversions and ad performance',
          duration: '3 months',
          type: 'Third-party'
        },
        {
          name: 'ads_preferences',
          purpose: 'Stores your advertising preferences',
          duration: '1 year',
          type: 'First-party'
        },
        {
          name: 'marketing_consent',
          purpose: 'Tracks your marketing communication preferences',
          duration: '1 year',
          type: 'First-party'
        }
      ]
    }
  ];

  const purposes = [
    {
      icon: Shield,
      title: 'Essential Functionality',
      description: 'Cookies that are strictly necessary for the website to function properly and provide you with our services.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Performance',
      description: 'Cookies that help us understand how you use our website so we can improve its performance and user experience.'
    },
    {
      icon: Settings,
      title: 'Personalization',
      description: 'Cookies that remember your preferences and settings to provide a more personalized experience.'
    },
    {
      icon: Target,
      title: 'Marketing & Advertising',
      description: 'Cookies used to deliver relevant advertisements and measure the effectiveness of our marketing campaigns.'
    }
  ];

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
                <Cookie className="w-8 h-8" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">Cookie Policy</h1>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Learn about how we use cookies and similar technologies to enhance your experience on our website.
            </p>
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Settings className="w-5 h-5 mr-2" />
                <span>Manage Preferences</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {purposes.map((purpose, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <purpose.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{purpose.title}</h3>
                <p className="text-gray-600 text-sm">{purpose.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Types of Cookies We Use</h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              We use different types of cookies for various purposes. You can control which types you accept.
            </p>
          </motion.div>

          <div className="space-y-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                      type.necessary ? 'bg-green-100' : 'bg-blue-100'
                    }`}>
                      {type.necessary ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : (
                        <Settings className="w-6 h-6 text-blue-600" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{type.category}</h3>
                      <p className="text-gray-600">{type.description}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    type.necessary 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {type.necessary ? 'Required' : 'Optional'}
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 font-semibold text-gray-700">Cookie Name</th>
                        <th className="text-left py-3 font-semibold text-gray-700">Purpose</th>
                        <th className="text-left py-3 font-semibold text-gray-700">Duration</th>
                        <th className="text-left py-3 font-semibold text-gray-700">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {type.cookies.map((cookie, cookieIndex) => (
                        <tr key={cookieIndex} className="border-b border-gray-100">
                          <td className="py-3 font-mono text-blue-600">{cookie.name}</td>
                          <td className="py-3 text-gray-600">{cookie.purpose}</td>
                          <td className="py-3 text-gray-600">{cookie.duration}</td>
                          <td className="py-3">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              cookie.type === 'First-party' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-purple-100 text-purple-800'
                            }`}>
                              {cookie.type}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You have control over which cookies you accept. Here's how to manage your preferences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Settings className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Cookie Settings</h3>
              <p className="text-gray-600 mb-6">
                Use our cookie preference center to customize which cookies you accept. You can change your preferences at any time.
              </p>
              <button className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200">
                Manage Cookie Preferences
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Browser Settings</h3>
              <p className="text-gray-600 mb-6">
                You can also control cookies through your browser settings. Most browsers allow you to block or delete cookies.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies</p>
                <p><strong>Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies</p>
                <p><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies</p>
                <p><strong>Edge:</strong> Settings &gt; Cookies and site permissions</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Third-Party Cookies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use third-party services that may set their own cookies. These are subject to their respective privacy policies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Google Analytics',
                purpose: 'Website analytics and performance monitoring',
                privacy: 'https://policies.google.com/privacy',
                cookies: ['_ga', '_ga_*', '_gid']
              },
              {
                name: 'Hotjar',
                purpose: 'User behavior analysis and heatmaps',
                privacy: 'https://www.hotjar.com/legal/policies/privacy',
                cookies: ['hotjar_*']
              },
              {
                name: 'Facebook Pixel',
                purpose: 'Advertising and conversion tracking',
                privacy: 'https://www.facebook.com/privacy/explanation',
                cookies: ['_fbp']
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.purpose}</p>
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Cookies used:</p>
                  <div className="flex flex-wrap gap-1">
                    {service.cookies.map((cookie, cookieIndex) => (
                      <span key={cookieIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {cookie}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={service.privacy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                >
                  Privacy Policy
                  <Eye className="w-3 h-3 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Questions About Cookies?</h2>
            <p className="text-xl text-blue-100 mb-8">
              If you have any questions about our use of cookies, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@cybronis.com"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Privacy Team
              </a>
              <a
                href="tel:+15551234567"
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPage;
