import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Code,
  Smartphone,
  LayoutDashboard,
  PenSquare,
  Wrench,
  Users,
  Sparkles,
  Globe,
  CheckCircle,
} from 'lucide-react';
import { useState } from 'react';

const ServicesPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Thank you! We will get in touch within 24 hours.',
      });
      setFormData({ name: '', email: '', projectType: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const services = [
    {
      icon: Code,
      title: 'Custom Website Development',
      description:
        'Marketing sites, portfolios, product landing pages and full web applications built on modern stacks like Next.js, React and Tailwind.',
      points: [
        'High-performance, SEO-friendly builds',
        'Responsive layouts for all devices',
        'CMS and blog integration if needed',
        'Clean, maintainable codebase',
      ],
      color: 'from-sky-500 to-blue-600',
    },
    {
      icon: Smartphone,
      title: 'Android & iOS App Development',
      description:
        'Native-feeling mobile apps for Android and iOS that align with your business workflows and user journeys.',
      points: [
        'Product strategy and feature planning',
        'Modern UI patterns for mobile',
        'API integration & secure auth',
        'Play Store & App Store guidance',
      ],
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: LayoutDashboard,
      title: 'Dashboards & Internal Tools',
      description:
        'Admin panels, analytics dashboards and internal tools that help your team work faster and with fewer mistakes.',
      points: [
        'Role-based access and permissions',
        'Data visualisation and reporting',
        'Integrations with existing systems',
        'Thoughtful UX for internal users',
      ],
      color: 'from-violet-500 to-indigo-600',
    },
    {
      icon: PenSquare,
      title: 'UI/UX Design for Web & Mobile',
      description:
        'User-first design – from wireframes and flows to polished interfaces that feel modern and intuitive.',
      points: [
        'User journey mapping',
        'Low & high fidelity wireframes',
        'Design systems & component libraries',
        'Clickable prototypes for feedback',
      ],
      color: 'from-rose-500 to-orange-500',
    },
    {
      icon: Wrench,
      title: 'Maintenance, Refactors & Upgrades',
      description:
        'Keep your existing product healthy – performance tuning, bug fixing, refactors and new feature development.',
      points: [
        'Code audits and health checks',
        'Performance & Lighthouse improvements',
        'Incremental refactors (no big-bang rewrite)',
        'Feature extensions and optimisations',
      ],
      color: 'from-slate-600 to-gray-800',
    },
    {
      icon: Globe,
      title: 'Concept to Launch Product Builds',
      description:
        'You bring the idea, we help with architecture, design, development and launch – similar to how we built Shop Sahayak and our AI products.',
      points: [
        'Technical architecture & planning',
        'Milestone-based delivery',
        'Launch support & monitoring',
        'Long-term roadmap collaboration',
      ],
      color: 'from-amber-500 to-yellow-500',
    },
  ];

  const processSteps = [
    {
      title: '1. Discovery & Requirements',
      description:
        'We understand your business, target users and goals, then turn that into a clear requirement document.',
    },
    {
      title: '2. UX & UI Design',
      description:
        'Information architecture, user flows, wireframes and final visual design – all reviewed and refined with you.',
    },
    {
      title: '3. Development & Integrations',
      description:
        'Front-end and back-end implementation, integrations with third-party services and solid testing.',
    },
    {
      title: '4. Launch & Ongoing Support',
      description:
        'Deployment, monitoring and post-launch support so the product feels stable, fast and ready for growth.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-16 left-16 w-80 h-80 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
          <div className="absolute top-40 right-16 w-80 h-80 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float delay-1000"></div>
          <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float delay-2000"></div>
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
                Services for founders, startups & growing businesses
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                <span className="block">Design & Build</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">
                  The Product You're Imagining
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                From first sketch to live deployment, we handle the full lifecycle – design, front-end,
                back-end, mobile, integrations and post-launch support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="group px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span className="flex items-center">
                    🚀 Start a Project Discussion
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  to="#services"
                  className="group px-8 py-4 border-2 border-white/60 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10"
                >
                  View All Services
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-gray-200 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  <span>Single landing pages to full SaaS products</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  <span>Transparent communication & regular demos</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  <span>Tech choices matched to your stage & budget</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What we can build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You can engage us for a complete product build, or for one focused piece like UI/UX or
              front-end implementation. Either way, we design it with care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How we work with you
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A lightweight but structured process – so you always know what's happening and
              what's coming next.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-600 text-white text-sm font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-xs uppercase tracking-wide text-gray-500">
                    Phase {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in touch form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Tell us a bit about your project
              </h2>
              <p className="text-lg text-gray-600">
                Share a few lines about what you want to build – website, mobile app, internal tool
                or a full product. We'll reply with clarifying questions and a rough plan.
              </p>
              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Honest feedback on scope, timeline and stack</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>No spam – we only use your details to respond to this request</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Prefer WhatsApp or call? Mention it in the message</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="projectType"
                  >
                    What do you want to build?
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="website">Website / Landing page</option>
                    <option value="webapp">Web app / SaaS product</option>
                    <option value="mobile">Android / iOS app</option>
                    <option value="dashboard">Admin panel / dashboard</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="message"
                  >
                    Briefly describe your idea
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Share a few lines about your project, timeline and any links if available."
                  />
                </div>

                {status.type && (
                  <div
                    className={`p-3 rounded-lg text-sm ${
                      status.type === 'success'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-sky-500 to-violet-600 text-white rounded-lg font-semibold hover:from-sky-600 hover:to-violet-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isSubmitting ? 'Sending...' : 'Submit project details'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-violet-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Have an idea you want to validate or ship?
            </h2>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto">
              Send a short brief – even a few lines – and we'll get back with questions, a
              rough approach and next steps. No obligation, just clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-white text-sky-700 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center">
                  ✉️ Send a brief
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/shop-sahayak"
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10"
              >
                See an example product
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
