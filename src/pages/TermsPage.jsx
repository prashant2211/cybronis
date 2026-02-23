import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Scale, 
  Shield, 
  AlertTriangle, 
  CheckCircle,
  XCircle,
  Users,
  CreditCard,
  Gavel,
  Calendar,
  Mail,
  Phone,
  Download
} from 'lucide-react';

const TermsPage = () => {
  const lastUpdated = 'January 15, 2024';

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: `By accessing and using Cybronis services, including CybronisAI and Wise Deployer, you accept and agree to be bound by the terms and provision of this agreement.

These Terms of Service ("Terms") govern your use of our AI and automation platform services. If you do not agree to abide by the above, please do not use this service.

Your continued use of our services after any changes to these Terms will constitute your acceptance of such changes.`
    },
    {
      id: 'definitions',
      title: 'Definitions',
      icon: FileText,
      content: `For the purposes of these Terms of Service:

"Company" refers to Cybronis, the provider of AI and automation services.
"Service" refers to our AI platform, automation tools, and related services.
"User" or "You" refers to the individual or entity using our services.
"Content" refers to data, text, files, or other materials you provide to our services.
"API" refers to our application programming interface and related documentation.
"Account" refers to your user account with our services.

These definitions apply throughout these Terms unless the context clearly indicates otherwise.`
    },
    {
      id: 'service-description',
      title: 'Service Description',
      icon: Shield,
      content: `Cybronis provides AI-powered automation services including:

CybronisAI Platform:
- Multi-LLM support (GPT-4, Claude-3, Gemini, Grok-4, DeepSeek)
- Retrieval Augmented Generation (RAG) capabilities
- Salesforce automation and integration
- API access and documentation

Wise Deployer:
- One-click deployment automation
- Support for multiple hosting providers
- CI/CD pipeline creation and management
- Live deployment tracking and monitoring

We reserve the right to modify, suspend, or discontinue any part of our services at any time with or without notice.`
    },
    {
      id: 'user-accounts',
      title: 'User Accounts',
      icon: Users,
      content: `To access our services, you must create an account and provide accurate, complete information.

Account Requirements:
- Valid email address
- Secure password
- Accurate personal information
- Compliance with age requirements (18+ or parental consent)

Account Responsibilities:
- Maintain account security
- Notify us of unauthorized access
- Keep information current and accurate
- Use only one account per person/entity

Account Termination:
- We may suspend or terminate accounts for violations
- You may close your account at any time
- Data retention policies apply after termination
- Some data may be retained for legal compliance`
    },
    {
      id: 'acceptable-use',
      title: 'Acceptable Use Policy',
      icon: Scale,
      content: `You agree to use our services only for lawful purposes and in accordance with these Terms.

Permitted Uses:
- Legitimate business and personal projects
- Research and development activities
- Educational and learning purposes
- Integration with your own applications

Prohibited Uses:
- Illegal activities or content
- Harassment, abuse, or harmful content
- Spam or unsolicited communications
- Reverse engineering or unauthorized access
- Violation of third-party rights
- Malicious or harmful software
- Excessive resource consumption
- Circumventing security measures

We reserve the right to investigate and take action against violations.`
    },
    {
      id: 'content-ownership',
      title: 'Content and Intellectual Property',
      icon: FileText,
      content: `You retain ownership of content you provide to our services, but grant us necessary licenses to provide our services.

Your Content:
- You own the content you provide
- You grant us license to use, process, and store your content
- You are responsible for your content's legality and accuracy
- You represent that you have necessary rights to your content

Our Content:
- We own our services, software, and intellectual property
- Our trademarks and logos are protected
- You may not copy, modify, or distribute our content
- Limited license granted for service use only

Third-Party Content:
- We may use third-party services and content
- Subject to their respective terms and licenses
- We are not responsible for third-party content
- You must comply with third-party terms`
    },
    {
      id: 'payment-terms',
      title: 'Payment and Billing',
      icon: CreditCard,
      content: `Our services may include paid features and subscription plans.

Pricing and Billing:
- Prices are subject to change with notice
- Billing cycles are monthly or annually
- Payment is due in advance
- All fees are non-refundable unless otherwise stated

Payment Methods:
- Credit cards and other accepted methods
- Automatic renewal unless cancelled
- Failed payments may result in service suspension
- You are responsible for all applicable taxes

Refunds and Cancellations:
- Refunds at our discretion
- Service cancellation as per plan terms
- No refunds for partial usage periods
- Data export available before cancellation`
    },
    {
      id: 'privacy-data',
      title: 'Privacy and Data Protection',
      icon: Shield,
      content: `Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy.

Data Collection:
- We collect information necessary to provide services
- Usage data for service improvement
- Account information for service delivery
- Communication data for support

Data Usage:
- Service provision and improvement
- Communication and support
- Legal compliance and security
- Analytics and research (anonymized)

Data Protection:
- Industry-standard security measures
- Encryption in transit and at rest
- Regular security audits
- Compliance with applicable laws

Your Rights:
- Access to your personal data
- Correction of inaccurate data
- Deletion of your data (subject to legal requirements)
- Data portability where applicable`
    },
    {
      id: 'service-availability',
      title: 'Service Availability',
      icon: AlertTriangle,
      content: `We strive to provide reliable service but cannot guarantee uninterrupted access.

Service Levels:
- We aim for 99.9% uptime
- Scheduled maintenance with advance notice
- Emergency maintenance as needed
- No guarantee of continuous availability

Maintenance and Updates:
- Regular maintenance windows
- Feature updates and improvements
- Security patches and fixes
- Service modifications as needed

Service Interruptions:
- We are not liable for service interruptions
- We will work to restore service promptly
- No compensation for downtime unless specified
- Force majeure events excluded`
    },
    {
      id: 'limitations',
      title: 'Limitations of Liability',
      icon: XCircle,
      content: `To the maximum extent permitted by law, our liability is limited as follows:

Limitation of Damages:
- No liability for indirect, incidental, or consequential damages
- No liability for lost profits or data
- No liability for business interruption
- Total liability limited to fees paid in the 12 months preceding the claim

Exclusions:
- Force majeure events
- Third-party actions or failures
- Your misuse of services
- Unauthorized access to your account

Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.`
    },
    {
      id: 'indemnification',
      title: 'Indemnification',
      icon: Gavel,
      content: `You agree to indemnify and hold us harmless from any claims arising from your use of our services.

Your Indemnification Obligations:
- Claims arising from your content
- Violations of these Terms
- Infringement of third-party rights
- Your misuse of our services

Our Rights:
- Right to assume defense of claims
- Right to settle claims at our discretion
- Right to recover costs and expenses
- Right to terminate service for violations

This indemnification survives termination of these Terms.`
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: XCircle,
      content: `Either party may terminate these Terms at any time.

Termination by You:
- Close your account at any time
- Cancel subscriptions per plan terms
- Export your data before termination
- Some provisions survive termination

Termination by Us:
- For violations of these Terms
- For non-payment of fees
- For illegal or harmful use
- At our discretion with notice

Effect of Termination:
- Access to services ceases
- Data retention per our policies
- Outstanding fees remain due
- Survival of certain provisions`
    },
    {
      id: 'governing-law',
      title: 'Governing Law and Disputes',
      icon: Scale,
      content: `These Terms are governed by the laws of the State of California, United States.

Dispute Resolution:
- Jurisdiction in California courts
- Waiver of jury trial rights
- Individual arbitration for disputes under $10,000
- Class action waiver

Governing Law:
- California state law applies
- Federal law where applicable
- International users subject to local laws
- Severability of provisions

If any provision is found unenforceable, the remaining provisions remain in effect.`
    },
    {
      id: 'changes',
      title: 'Changes to Terms',
      icon: Calendar,
      content: `We may modify these Terms at any time. Continued use constitutes acceptance of changes.

Notification of Changes:
- Post changes on our website
- Email notification for material changes
- 30-day notice for significant changes
- Updated "Last Modified" date

Your Options:
- Review changes before they take effect
- Discontinue use if you disagree
- Contact us with questions
- Exercise termination rights

Changes are effective immediately upon posting unless otherwise specified.`
    },
    {
      id: 'contact',
      title: 'Contact Information',
      icon: Mail,
      content: `For questions about these Terms, please contact us:

Email: legal@cybronis.com
Phone: +1 (555) 123-4567
Address: 123 Innovation Drive, Tech City, TC 12345

Legal Department:
Email: legal@cybronis.com

Response Times:
- We will respond within 5 business days
- Complex inquiries may require additional time
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
                <Scale className="w-8 h-8" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">Terms of Service</h1>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Please read these terms carefully before using our services. By using Cybronis, you agree to these terms.
            </p>
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <FileText className="w-5 h-5 mr-2" />
                <span>Version 3.2</span>
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

      {/* Terms Content */}
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
            <p className="text-xl text-gray-600">Important highlights from our Terms of Service</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: CheckCircle,
                title: 'Acceptable Use',
                description: 'Use our services lawfully and in accordance with our terms.'
              },
              {
                icon: Shield,
                title: 'Data Protection',
                description: 'We protect your data with industry-standard security measures.'
              },
              {
                icon: Users,
                title: 'Account Security',
                description: 'You are responsible for maintaining your account security.'
              },
              {
                icon: CreditCard,
                title: 'Payment Terms',
                description: 'Fees are non-refundable and billed in advance.'
              },
              {
                icon: XCircle,
                title: 'Service Availability',
                description: 'We do not guarantee uninterrupted service availability.'
              },
              {
                icon: Scale,
                title: 'Governing Law',
                description: 'These terms are governed by California state law.'
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
            <h2 className="text-4xl font-bold mb-4">Questions About These Terms?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Our legal team is here to help clarify any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:legal@cybronis.com"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Legal Team
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

export default TermsPage;
