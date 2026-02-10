'use client';

import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  Users, 
  Mail, 
  Phone,
  Calendar,
  CheckCircle,
  AlertCircle,
  FileText,
  Download,
  Globe,
} from 'lucide-react';

const PrivacyPage = () => {
  const lastUpdated = 'January 15, 2024';

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: FileText,
      content: `Cybronis ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI and automation platform services, including CybronisAI and Wise Deployer.

By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our services.`
    },
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Database,
      content: `We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.

Personal Information:
- Name and email address
- Account credentials and profile information
- Payment and billing information
- Communication preferences
- Support requests and communications

Usage Information:
- Service usage data and analytics
- API call logs and performance metrics
- Device information and IP addresses
- Cookies and similar tracking technologies
- Error logs and debugging information

Content Data:
- Data you process through our AI services
- Knowledge base content for RAG functionality
- Configuration and automation settings
- Generated outputs and responses`
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      icon: Eye,
      content: `We use the information we collect to provide, maintain, and improve our services.

Service Provision:
- Provide AI and automation services
- Process and respond to your requests
- Maintain and improve service functionality
- Provide customer support and technical assistance

Communication:
- Send service-related notifications
- Respond to your inquiries and support requests
- Send marketing communications (with your consent)
- Provide important updates about our services

Analytics and Improvement:
- Analyze usage patterns and service performance
- Improve our AI models and algorithms
- Develop new features and capabilities
- Conduct research and development

Security and Compliance:
- Protect against fraud and abuse
- Ensure service security and integrity
- Comply with legal obligations
- Enforce our terms of service`
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      icon: Users,
      content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.

Service Providers:
- Cloud infrastructure providers (AWS, Google Cloud, etc.)
- Payment processors and billing services
- Analytics and monitoring services
- Customer support platforms

Legal Requirements:
- When required by law or legal process
- To protect our rights and property
- To prevent fraud or abuse
- In connection with a business transfer

Business Transfers:
- In the event of a merger, acquisition, or sale
- As part of due diligence processes
- To protect the interests of our users

With Your Consent:
- When you explicitly authorize sharing
- For specific features or integrations
- In response to your requests`
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: `We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.

Security Measures:
- Encryption in transit and at rest
- Secure data centers and infrastructure
- Regular security audits and assessments
- Access controls and authentication
- Incident response procedures

Data Retention:
- We retain your information as long as necessary
- Account data until account deletion
- Usage data for analytics and improvement
- Legal requirements may extend retention periods

Your Responsibilities:
- Use strong, unique passwords
- Keep your account information current
- Report security concerns immediately
- Follow our security guidelines`
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      icon: CheckCircle,
      content: `You have certain rights regarding your personal information, which may vary depending on your location.

Access and Portability:
- Request access to your personal information
- Receive a copy of your data in a portable format
- View your account information and settings

Correction and Updates:
- Correct inaccurate personal information
- Update your account details
- Modify your communication preferences

Deletion and Restriction:
- Request deletion of your personal information
- Restrict processing of your data
- Object to certain uses of your information

Opt-out Options:
- Unsubscribe from marketing communications
- Disable non-essential cookies
- Adjust privacy settings in your account

To exercise these rights, contact us at privacy@cybronis.com`
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking Technologies',
      icon: Shield,
      content: `We use cookies and similar technologies to enhance your experience and analyze service usage.

Types of Cookies:
- Essential cookies for service functionality
- Analytics cookies for usage insights
- Preference cookies for customization
- Marketing cookies for targeted content

Cookie Management:
- You can control cookies through browser settings
- Some features may not work without cookies
- We provide cookie preference controls
- Third-party cookies are subject to their own policies

Analytics and Tracking:
- We use analytics to improve our services
- Data is aggregated and anonymized
- We respect Do Not Track signals
- You can opt out of analytics tracking`
    },
    {
      id: 'international-transfers',
      title: 'International Data Transfers',
      icon: Globe,
      content: `Your information may be transferred to and processed in countries other than your own.

Transfer Mechanisms:
- Standard contractual clauses
- Adequacy decisions by relevant authorities
- Your explicit consent where required
- Appropriate safeguards and protections

Data Processing Locations:
- Primary processing in the United States
- Backup and redundancy in multiple regions
- Compliance with applicable data protection laws
- Regular review of transfer mechanisms

Your Rights:
- Information about data processing locations
- Right to object to certain transfers
- Additional protections where available
- Contact us for specific information`
    },
    {
      id: 'children-privacy',
      title: 'Children\'s Privacy',
      icon: Users,
      content: `Our services are not intended for children under 13 years of age.

Age Restrictions:
- We do not knowingly collect information from children under 13
- If we learn we have collected such information, we will delete it
- Parents should monitor their children's online activities
- We encourage parental involvement in online safety

If you believe we have collected information from a child under 13, please contact us immediately at privacy@cybronis.com`
    },
    {
      id: 'changes',
      title: 'Changes to This Policy',
      icon: Calendar,
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws.

Notification of Changes:
- We will notify you of material changes
- Updates will be posted on this page
- We will update the "Last Updated" date
- Continued use constitutes acceptance of changes

Your Options:
- Review changes before they take effect
- Contact us with questions or concerns
- Discontinue use if you disagree with changes
- Exercise your rights as described in this policy`
    },
    {
      id: 'contact',
      title: 'Contact Us',
      icon: Mail,
      content: `If you have questions about this Privacy Policy or our privacy practices, please contact us.

Contact Information:
Email: privacy@cybronis.com
Phone: +1 (555) 123-4567
Address: 123 Innovation Drive, Tech City, TC 12345

Data Protection Officer:
Email: dpo@cybronis.com

Response Times:
- We will respond to your inquiry within 30 days
- Complex requests may require additional time
- We may need to verify your identity
- Some requests may be subject to legal limitations`
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
              <h1 className="text-5xl md:text-6xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <FileText className="w-5 h-5 mr-2" />
                <span>Version 2.1</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <section.icon className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="font-medium text-gray-900">{section.title}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <section.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Points Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Points Summary</h2>
            <p className="text-xl text-gray-600">Important highlights from our Privacy Policy</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Data Protection',
                description: 'We use industry-standard encryption and security measures to protect your data.'
              },
              {
                icon: Eye,
                title: 'Transparency',
                description: 'We clearly explain what data we collect and how we use it.'
              },
              {
                icon: Lock,
                title: 'No Data Selling',
                description: 'We never sell your personal information to third parties.'
              },
              {
                icon: Users,
                title: 'Your Control',
                description: 'You have full control over your data and can request changes or deletion.'
              },
              {
                icon: Database,
                title: 'Minimal Collection',
                description: 'We only collect data necessary to provide our services.'
              },
              {
                icon: CheckCircle,
                title: 'Compliance',
                description: 'We comply with GDPR, CCPA, and other applicable privacy laws.'
              }
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <point.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
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
            <h2 className="text-4xl font-bold mb-4">Questions About Privacy?</h2>
            <p className="text-xl text-blue-100 mb-8">
              We're here to help. Contact our privacy team for any questions or concerns.
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

export default PrivacyPage;
