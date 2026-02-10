'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Globe, Rocket, Store, Sparkles, CheckCircle } from 'lucide-react';

const ProductsPage = () => {
  const products = [
    {
      name: 'CybronisAI',
      slug: '/cybronisai',
      icon: Globe,
      color: 'from-sky-500 to-violet-600',
      description:
        'Multi-LLM AI platform with advanced chat, agents and automation – built for power users and teams.',
      highlights: ['6+ AI models', 'MCP support', 'RAG & knowledge base', 'AI agents'],
      kind: 'AI Product',
    },
    {
      name: 'Wise Deployer',
      slug: '/cybronis-bridge',
      icon: Rocket,
      color: 'from-emerald-500 to-teal-600',
      description:
        'Deployment automation tool that lets you ship apps to multiple hosting providers in a few clicks.',
      highlights: ['One-click deploy', 'Multi-provider hosting', 'CI/CD pipelines', 'Live monitoring'],
      kind: 'DevOps Product',
    },
    {
      name: 'Shop Sahayak',
      slug: '/shop-sahayak',
      icon: Store,
      color: 'from-amber-500 to-orange-500',
      description:
        'Android & iOS app for shopkeepers and business owners to manage billing, stock and profit in one place.',
      highlights: ['Smart billing', 'Inventory & stock', 'Profit & GST reports', 'Multi-user access'],
      kind: 'Retail Product',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-16 left-16 w-80 h-80 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
          <div className="absolute top-40 right-16 w-80 h-80 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float delay-1000"></div>
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
                Products built and maintained by Cybronis
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                <span className="block">Our Products</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">
                  AI, DevOps & Retail
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Each product started as a problem we or our clients were facing. We design, build and
                evolve them with the same care we bring to client projects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 p-8 flex flex-col"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${product.color} mb-4`}
                >
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">{product.kind}</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
                <p className="text-sm text-gray-600 mb-4 flex-1">{product.description}</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  {product.highlights.map((item) => (
                    <li key={item} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={product.slug}
                  className="inline-flex items-center text-sm font-semibold text-sky-700 group-hover:text-sky-900 transition-colors"
                >
                  View product details
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;


