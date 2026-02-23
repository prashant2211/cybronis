import { motion } from 'framer-motion';
import { 
  Shield, 
  User, 
  Database, 
  Eye, 
  Trash2, 
  Download,
  Edit,
  Lock,
  CheckCircle,
  FileText,
  Mail,
  Phone,
  Calendar,
  Globe
} from 'lucide-react';

const GDPRPage = () => {
  const lastUpdated = 'January 15, 2024';

  const rights = [
    {
      icon: Eye,
      title: 'Right of Access',
      description: 'You have the right to obtain confirmation as to whether or not personal data concerning you is being processed, and, where that is the case, access to the personal data.',
      details: [
        'Request a copy of all personal data we hold about you',
        'Receive information about how we use your data',
        'Know the purposes of processing and retention periods',
        'Understand who we share your data with'
      ]
    },
    {
      icon: Edit,
      title: 'Right to Rectification',
      description: 'You have the right to obtain the rectification of inaccurate personal data concerning you without undue delay.',
      details: [
        'Correct inaccurate personal information',
        'Complete incomplete personal data',
        'Update your account information',
        'Modify your preferences and settings'
      ]
    },
    {
      icon: Trash2,
      title: 'Right to Erasure',
      description: 'You have the right to obtain the erasure of personal data concerning you without undue delay in certain circumstances.',
      details: [
        'Request deletion of your personal data',
        'Withdraw consent for data processing',
        'Object to processing based on legitimate interests',
        'Data no longer necessary for original purposes'
      ]
    },
    {
      icon: Lock,
      title: 'Right to Restrict Processing',
      description: 'You have the right to obtain restriction of processing where certain conditions apply.',
      details: [
        'Restrict processing while accuracy is verified',
        'Object to processing based on legitimate interests',
        'Data no longer needed but required for legal claims',
        'Object to processing for direct marketing'
      ]
    },
    {
      icon: Download,
      title: 'Right to Data Portability',
      description: 'You have the right to receive the personal data concerning you in a structured, commonly used format.',
      details: [
        'Receive your data in a machine-readable format',
        'Transfer your data to another service provider',
        'Obtain data you provided to us',
        'Data processed based on consent or contract'
      ]
    },
    {
      icon: User,
      title: 'Right to Object',
      description: 'You have the right to object to processing of personal data concerning you at any time.',
      details: [
        'Object to processing for direct marketing',
        'Object to processing for research purposes',
        'Object to automated decision-making',
        'Object to processing based on legitimate interests'
      ]
    }
  ];

  const legalBases = [
    {
      title: 'Consent',
      description: 'You have given clear consent for us to process your personal data for specific purposes.',
      examples: [
        'Marketing communications',
        'Analytics and performance tracking',
        'Non-essential cookies',
        'Third-party data sharing'
      ],
      icon: CheckCircle
    },
    {
      title: 'Contract Performance',
      description: 'Processing is necessary for the performance of a contract with you or to take steps at your request.',
      examples: [
        'Account creation and management',
        'Service delivery and support',
        'Payment processing',
        'API access and usage'
      ],
      icon: FileText
    },
    {
      title: 'Legitimate Interests',
      description: 'Processing is necessary for our legitimate interests or those of a third party.',
      examples: [
        'Service improvement and development',
        'Security and fraud prevention',
        'Business analytics',
        'Customer support'
      ],
      icon: Shield
    },
    {
      title: 'Legal Obligation',
      description: 'Processing is necessary for compliance with a legal obligation.',
      examples: [
        'Tax and accounting records',
        'Regulatory compliance',
        'Law enforcement requests',
        'Audit requirements'
      ],
      icon: Globe
    }
  ];

  const dataCategories = [
    {
      category: 'Identity Data',
      description: 'Information that identifies you personally',
      examples: ['Name', 'Email address', 'Phone number', 'Account credentials'],
      retention: 'Account lifetime + 7 years'
    },
    {
      category: 'Contact Data',
      description: 'Information used to communicate with you',
      examples: ['Email address', 'Phone number', 'Mailing address', 'Communication preferences'],
      retention: 'Account lifetime + 3 years'
    },
    {
      category: 'Technical Data',
      description: 'Information about your use of our services',
      examples: ['IP address', 'Browser type', 'Device information', 'Usage analytics'],
      retention: '2 years'
    },
    {
      category: 'Usage Data',
      description: 'Information about how you use our services',
      examples: ['API calls', 'Feature usage', 'Performance metrics', 'Error logs'],
      retention: '3 years'
    },
    {
      category: 'Marketing Data',
      description: 'Information about your marketing preferences',
      examples: ['Communication preferences', 'Marketing consent', 'Campaign interactions', 'Subscription status'],
      retention: 'Until consent withdrawn + 1 year'
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
                <Shield className="w-8 h-8" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">GDPR Compliance</h1>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              We are committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR).
            </p>
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Globe className="w-5 h-5 mr-2" />
                <span>EU Regulation 2016/679</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Data Protection Rights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Under GDPR, you have specific rights regarding your personal data. Here's how we protect and respect these rights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rights.map((right, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <right.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{right.title}</h3>
                <p className="text-gray-600 mb-6">{right.description}</p>
                <ul className="space-y-2">
                  {right.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Bases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Legal Bases for Processing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We process your personal data based on specific legal grounds as required by GDPR.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {legalBases.map((basis, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <basis.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{basis.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{basis.description}</p>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Examples:</h4>
                  <ul className="space-y-2">
                    {basis.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Categories of Personal Data</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We process different categories of personal data for various purposes and retention periods.
            </p>
          </motion.div>

          <div className="space-y-6">
            {dataCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.category}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Examples:</h4>
                    <ul className="space-y-1">
                      {category.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-gray-600 text-sm">
                          • {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Retention Period:</h4>
                    <p className="text-gray-600 font-medium">{category.retention}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection Officer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Data Protection Officer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have appointed a Data Protection Officer to ensure compliance with GDPR and protect your rights.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">dpo@cybronis.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-start">
                    <FileText className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="text-gray-700 font-medium">Mailing Address:</p>
                      <p className="text-gray-600">
                        123 Innovation Drive<br />
                        Tech City, TC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Responsibilities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Monitor GDPR compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Handle data subject requests</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Conduct privacy impact assessments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Provide privacy training and guidance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Act as point of contact with supervisory authorities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Exercise Your Rights */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Exercise Your Rights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You can exercise your GDPR rights by contacting us. We will respond within 30 days.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Make a Request</h3>
              <p className="text-gray-600 mb-6">
                Contact our Data Protection Officer to exercise any of your rights under GDPR.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">dpo@cybronis.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What to Include</h3>
              <p className="text-gray-600 mb-6">
                When making a request, please include the following information:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Your full name and contact information</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Specific right you wish to exercise</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Account information for verification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Any additional details or preferences</span>
                </li>
              </ul>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-4">Questions About GDPR?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Our Data Protection Officer is here to help with any questions about your data rights and our compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:dpo@cybronis.com"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact DPO
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

export default GDPRPage;
