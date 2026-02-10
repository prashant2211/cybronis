'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Code,
  Globe,
  LayoutDashboard,
  Rocket,
  Smartphone,
  Sparkles,
  Users,
  Wand2,
  Wrench,
  Store,
} from 'lucide-react';

const HomePage = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [homeFormData, setHomeFormData] = useState({
    name: '',
    email: '',
    idea: '',
  });
  const [homeIsSubmitting, setHomeIsSubmitting] = useState(false);
  const [homeStatus, setHomeStatus] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleHomeFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHomeIsSubmitting(true);
    setHomeStatus(null);

    setTimeout(() => {
      setHomeStatus('Thanks! We will get in touch within 24 hours.');
      setHomeFormData({ name: '', email: '', idea: '' });
      setHomeIsSubmitting(false);
    }, 1500);
  };

  const handleHomeFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setHomeFormData((prev) => ({ ...prev, [name]: value }));
  };

  const features = [
    {
      icon: Code,
      title: 'Custom Website Development',
      description:
        'High-performance, SEO-friendly websites and web apps built with modern stacks like Next.js, React and Tailwind.',
      color: 'from-blue-500 to-purple-600',
    },
    {
      icon: Smartphone,
      title: 'Android & iOS Apps',
      description:
        'Pixel-perfect mobile apps for Android and iOS tailored to your business workflows and customer experience.',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: LayoutDashboard,
      title: 'Dashboards & Internal Tools',
      description:
        'Admin panels, analytics dashboards and internal tools that make your operations simpler and faster.',
      color: 'from-indigo-500 to-cyan-600',
    },
    {
      icon: Wand2,
      title: 'UI/UX Design',
      description:
        'Clean, modern UI with UX that feels natural for your users – from wireframes to production-ready design.',
      color: 'from-rose-500 to-orange-500',
    },
    {
      icon: Wrench,
      title: 'Maintenance & Scaling',
      description:
        'Ongoing support, performance optimisation and feature upgrades so your product keeps growing smoothly.',
      color: 'from-slate-500 to-gray-700',
    },
    {
      icon: Store,
      title: 'Product Builds for Business',
      description:
        'End-to-end development of custom products like Shop Sahayak – from idea to launch and beyond.',
      color: 'from-amber-500 to-yellow-500',
    },
  ];

  const stats = [
    { number: '20+', label: 'Projects Delivered', icon: Rocket },
    { number: '6+', label: 'Years Experience', icon: Clock },
    { number: '5+', label: 'Tech Stacks Used', icon: Code },
    { number: '100%', label: 'Custom-Built for You', icon: Users },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float delay-1000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float delay-2000"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Web, Mobile & Product Development Studio
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="block">We Build</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">
                Modern Websites & Apps
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 w-full leading-relaxed max-w-3xl mx-auto">
              Cybronis helps founders and business owners turn ideas into real digital products –
              custom websites, Android & iOS apps, dashboards and more. Designed carefully, built
              for performance, delivered end-to-end.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/services"
                className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-violet-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center">
                  🚀 Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-violet-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                href="/contact"
                className="group px-8 py-4 border-2 border-white/40 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/60 backdrop-blur-md"
              >
                <span className="flex items-center">
                  <Wrench className="w-5 h-5 mr-2" />
                  Start a Project
                </span>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 text-gray-200"
            >
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                <span>End-to-end design & development</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                <span>Dedicated founder-level involvement</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                <span>Clear communication & timelines</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-500 to-violet-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services / Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Services for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-violet-600">
                {' '}
                Modern Businesses
              </span>
            </h2>
            <p className="text-xl text-gray-600 w-full max-w-3xl mx-auto">
              From landing pages to full products, we design and develop digital experiences that
              feel premium, load fast and directly support your business goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  currentFeature === index ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                <div className="absolute top-4 right-4">
                  {currentFeature === index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-3 h-3 bg-blue-500 rounded-full"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Spotlight */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our own products, built like your future project
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Along with client work, we build and ship our own products – the same quality,
              process and care we bring to your website or app.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">CybronisAI</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Multi-LLM AI platform for advanced chat, agents and automation – hosted at
                  cybronisai.com.
                </p>
              </div>
              <Link
                href="/cybronisai"
                className="inline-flex items-center text-sm font-semibold text-sky-700 hover:text-sky-900"
              >
                View AI product
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 mb-4">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Wise Deployer</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Deployment automation platform to ship apps to multiple hosting providers with
                  one click.
                </p>
              </div>
              <Link
                href="/cybronis-bridge"
                className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-900"
              >
                View product
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 mb-4">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Shop Sahayak</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Android & iOS app for shopkeepers to manage billing, stock and profit in one
                  simple interface.
                </p>
              </div>
              <Link
                href="/shop-sahayak"
                className="inline-flex items-center text-sm font-semibold text-amber-700 hover:text-amber-900"
              >
                View product
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick contact form */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Get in touch from the homepage itself
              </h2>
              <p className="text-lg text-gray-600">
                Share a short intro about you and your idea. Whether you need a website, app or a
                complete product, we&apos;ll reply with next steps and a possible approach.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  <span>Simple form – no long questionnaire</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  <span>We only use your info to respond to this enquiry</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <form onSubmit={handleHomeFormSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="home-name">
                    Name
                  </label>
                  <input
                    id="home-name"
                    name="name"
                    type="text"
                    required
                    value={homeFormData.name}
                    onChange={handleHomeFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="home-email">
                    Email
                  </label>
                  <input
                    id="home-email"
                    name="email"
                    type="email"
                    required
                    value={homeFormData.email}
                    onChange={handleHomeFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="home-idea">
                    What do you want to build?
                  </label>
                  <textarea
                    id="home-idea"
                    name="idea"
                    required
                    rows={4}
                    value={homeFormData.idea}
                    onChange={handleHomeFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="A few lines about your website / app / product and timeline."
                  />
                </div>

                {homeStatus && (
                  <div className="p-3 rounded-lg text-sm bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {homeStatus}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={homeIsSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-sky-500 to-violet-600 text-white rounded-lg font-semibold hover:from-sky-600 hover:to-violet-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {homeIsSubmitting ? 'Sending...' : 'Send project idea'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-violet-600">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to build your next website or app?
            </h2>
            <p className="text-xl text-sky-100 w-full max-w-3xl mx-auto">
              Share your idea, and we&apos;ll respond with a clear plan, timeline and technical
              approach. No templates – everything is designed and engineered specifically for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-white text-sky-700 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center">
                  🚀 Discuss a Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;