'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ShoppingBag,
  Smartphone,
  ReceiptIndianRupee,
  BarChart3,
  Boxes,
  Users,
  ShieldCheck,
  Clock,
  Download,
  Upload,
  Store,
  ArrowRight,
  CheckCircle,
  Calendar,
  FileText,
  CreditCard,
  Bell,
} from 'lucide-react';

const ShopSahayakPage = () => {
  const coreBenefits = [
    {
      icon: ShoppingBag,
      title: 'Sell Faster, With Zero Confusion',
      description:
        'Simple, POS-style billing screen so your staff can create bills in seconds without making mistakes.',
      points: ['Barcode / item search', 'Discounts & offers', 'Multiple payment modes'],
    },
    {
      icon: Boxes,
      title: 'Smart Stock Management',
      description:
        'Always know what is in stock, what is running low and what is moving slowly – in real time.',
      points: ['Low-stock alerts', 'Expiry & batch tracking', 'Multi-category inventory'],
    },
    {
      icon: BarChart3,
      title: 'Clear Profits & Reports',
      description:
        'Understand your daily, weekly and monthly profit without struggling in Excel or notebooks.',
      points: ['Daily sales & profit', 'GST-friendly tax summary', 'Best-selling items report'],
    },
    {
      icon: Users,
      title: 'For Any Type of Shop',
      description:
        'Designed for retailers, wholesalers and service businesses – from Kirana to showrooms.',
      points: ['Retail shops', 'Garment & footwear', 'Electronics & mobile shops'],
    },
  ];

  const featureGroups = [
    {
      title: 'Billing & POS',
      icon: ReceiptIndianRupee,
      color: 'from-orange-500 to-amber-600',
      features: [
        'Fast billing with simple, clean UI',
        'Support for discounts, returns & exchanges',
        'Multiple payment modes (cash, UPI, card, credit)',
        'Customer-wise billing history',
        'Automatic GST calculation ready invoices',
      ],
    },
    {
      title: 'Inventory & Purchase',
      icon: Boxes,
      color: 'from-blue-500 to-sky-600',
      features: [
        'Add stock in seconds with purchase entries',
        'Low stock & out-of-stock alerts',
        'Batch / size / color wise management (for garments & footwear)',
        'Supplier-wise purchase tracking',
        'Stock valuation and dead stock identification',
      ],
    },
    {
      title: 'Profit, GST & Reports',
      icon: FileText,
      color: 'from-emerald-500 to-teal-600',
      features: [
        'Daily / monthly sales and profit reports',
        'GST summary reports for CA / accountant',
        'Item-wise margin analysis',
        'Top customers & top products report',
        'Download reports in Excel / PDF (coming soon)',
      ],
    },
    {
      title: 'Multi-User & Security',
      icon: ShieldCheck,
      color: 'from-purple-500 to-indigo-600',
      features: [
        'Separate login for owner and staff',
        'Role-based access (billing only, reports only, admin)',
        'Secure cloud backup so data is never lost',
        'Automatic sync across devices',
        'Activity log for important actions',
      ],
    },
  ];

  const shopTypes = [
    'Kirana / grocery stores',
    'Garment & fashion showrooms',
    'Footwear shops',
    'Electronics & mobile shops',
    'Pharmacies & medical stores',
    'Hardware & sanitary shops',
    'Stationery & book stores',
    'Small wholesalers & distributors',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-900 via-orange-900 to-rose-900 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10" />
        <div className="absolute inset-0">
          <div className="absolute top-16 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float delay-1000" />
          <div className="absolute -bottom-10 left-1/2 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float delay-2000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                <Store className="w-4 h-4 mr-2" />
                Built for Indian shopkeepers & business owners
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="block">Shop Sahayak</span>
                <span className="mt-2 block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-200">
                  Your Smart Shop & Billing App
                </span>
              </h1>

              <p className="text-lg md:text-xl text-orange-100 max-w-xl leading-relaxed">
                A simple Android & iOS app that helps you manage billing, stock, expenses and
                profits – so you can focus on growing your shop instead of doing manual calculations.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-sm text-orange-100">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Android & iOS support
                </div>
                <div className="flex items-center text-sm text-orange-100">
                  <ReceiptIndianRupee className="w-4 h-4 mr-2" />
                  Only ₹300 / month
                </div>
                <div className="flex items-center text-sm text-orange-100">
                  <Clock className="w-4 h-4 mr-2" />
                  Get started in 1 day
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-amber-800 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  Get Shop Sahayak
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/60 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  View Features
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 pt-4 text-orange-100 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-300" />
                  <span>No complex hardware required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-300" />
                  <span>Owner can check reports from anywhere</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white">
                      <Store className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-orange-100">Today&apos;s Summary</p>
                      <p className="text-lg font-semibold text-white">Sharma General Store</p>
                    </div>
                  </div>
                  <Calendar className="w-5 h-5 text-orange-100" />
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div className="rounded-2xl bg-black/20 border border-white/10 px-3 py-4">
                    <p className="text-xs text-orange-100 mb-1">Today&apos;s Sales</p>
                    <p className="text-xl font-bold text-white">₹12,540</p>
                  </div>
                  <div className="rounded-2xl bg-black/20 border border-white/10 px-3 py-4">
                    <p className="text-xs text-orange-100 mb-1">Today&apos;s Profit</p>
                    <p className="text-xl font-bold text-emerald-300">₹3,120</p>
                  </div>
                  <div className="rounded-2xl bg-black/20 border border-white/10 px-3 py-4">
                    <p className="text-xs text-orange-100 mb-1">Low Stock Items</p>
                    <p className="text-xl font-bold text-yellow-200">9</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    {
                      name: 'Milk 1L Packet',
                      qty: '12 pcs',
                      amount: '₹480',
                    },
                    {
                      name: 'Atta 10kg',
                      qty: '4 pcs',
                      amount: '₹1,600',
                    },
                    {
                      name: 'Cold Drink 750ml',
                      qty: '8 pcs',
                      amount: '₹720',
                    },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between rounded-xl bg-black/15 border border-white/5 px-3 py-2 text-sm"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                          <ShoppingBag className="w-4 h-4 text-orange-100" />
                        </div>
                        <div>
                          <p className="text-white">{item.name}</p>
                          <p className="text-xs text-orange-100">{item.qty}</p>
                        </div>
                      </div>
                      <p className="text-orange-50 font-semibold">{item.amount}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-orange-100">
                  <div className="flex items-center space-x-2">
                    <Bell className="w-4 h-4" />
                    <span>3 low stock alerts today</span>
                  </div>
                  <button className="inline-flex items-center space-x-1 text-orange-100/90 hover:text-white transition-colors">
                    <span>View full report</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Made for real shops, not just for &quot;online businesses&quot;
              </h2>
              <p className="text-lg text-gray-600">
                Whether you run a small Kirana store, a branded showroom or a busy retail shop,
                Shop Sahayak is designed to remove daily headaches – manual writing, stock confusion,
                price mismatch and end-of-month calculations.
              </p>
              <p className="text-base text-gray-600">
                No matter how your team is working today – notebooks, Excel or basic billing
                software – we help you shift to a clean, mobile-first system that your staff can
                learn in a few hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-gradient-to-br from-orange-50 to-amber-100 p-8 border border-amber-200"
            >
              <h3 className="text-xl font-semibold text-amber-900 mb-4">
                Perfect for these types of shops:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {shopTypes.map((shop) => (
                  <div
                    key={shop}
                    className="flex items-center space-x-2 rounded-xl bg-white/70 border border-amber-100 px-3 py-2"
                  >
                    <Store className="w-4 h-4 text-amber-600" />
                    <span className="text-sm text-amber-900">{shop}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything a modern shop or showroom needs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From billing to inventory to profit tracking – Shop Sahayak covers all the essential
              features required to run a profitable, well-organised shop.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{benefit.description}</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  {benefit.points.map((point) => (
                    <li key={point} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Modules */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modules designed around your daily work
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We observed how real shopkeepers work – then crafted modules that fit naturally into
              their daily routine.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featureGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${group.color} mb-4`}
                >
                  <group.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{group.title}</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {group.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & How it works */}
      <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl border border-amber-100 p-8"
            >
              <div className="inline-flex items-center space-x-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-semibold text-amber-800 mb-4">
                <ReceiptIndianRupee className="w-4 h-4" />
                <span>Simple pricing for all shops</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Pricing</h2>
              <p className="text-gray-600 mb-6">
                One simple plan that gives you access to all features – no hidden charges, no
                complicated slabs.
              </p>

              <div className="flex items-end space-x-2 mb-6">
                <p className="text-4xl font-extrabold text-amber-700">₹300</p>
                <p className="text-gray-600 mb-1">/ month per shop</p>
              </div>

              <ul className="space-y-3 text-sm text-gray-700 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>All modules included – billing, stock, reports & more</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Unlimited bills, items and customers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Support over WhatsApp / call for onboarding</span>
                </li>
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200"
              >
                Talk to us about Shop Sahayak
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                How we onboard your shop in 3 simple steps
              </h2>
              <ol className="space-y-4 text-sm text-gray-700">
                <li className="flex space-x-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-white text-xs font-bold mt-0.5">
                    1
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Understand your shop</p>
                    <p className="text-gray-600">
                      We discuss your shop type, billing flow and current pain points (stock,
                      pricing, staff, etc.).
                    </p>
                  </div>
                </li>
                <li className="flex space-x-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-white text-xs font-bold mt-0.5">
                    2
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Set up app & basic data</p>
                    <p className="text-gray-600">
                      We help you install the app, add main items / categories and configure tax,
                      units and roles.
                    </p>
                  </div>
                </li>
                <li className="flex space-x-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-white text-xs font-bold mt-0.5">
                    3
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Train your staff & go live</p>
                    <p className="text-gray-600">
                      We train your team on billing and daily tasks so you can start using it in
                      your shop from day one.
                    </p>
                  </div>
                </li>
              </ol>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3 rounded-2xl bg-white border border-amber-100 px-4 py-3">
                  <Smartphone className="w-5 h-5 text-amber-600" />
                  <span className="text-sm text-gray-800">Works on Android & iOS phones</span>
                </div>
                <div className="flex items-center space-x-3 rounded-2xl bg-white border border-amber-100 px-4 py-3">
                  <CreditCard className="w-5 h-5 text-amber-600" />
                  <span className="text-sm text-gray-800">UPI / bank transfer payment options</span>
                </div>
                <div className="flex items-center space-x-3 rounded-2xl bg-white border border-amber-100 px-4 py-3">
                  <Download className="w-5 h-5 text-amber-600" />
                  <span className="text-sm text-gray-800">Automatic backup & restore</span>
                </div>
                <div className="flex items-center space-x-3 rounded-2xl bg-white border border-amber-100 px-4 py-3">
                  <Upload className="w-5 h-5 text-amber-600" />
                  <span className="text-sm text-gray-800">Easy migration from existing software</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopSahayakPage;


