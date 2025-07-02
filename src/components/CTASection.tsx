import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Phone, Mail } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-deep-navy-800 to-deep-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23E98569%22 fill-opacity=%220.4%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-warm-coral-500/20 text-warm-coral-300 rounded-full text-sm font-medium mb-6"
            >
              🚀 Ready to Transform Your Skills?
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Let's discuss your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta-400 to-warm-coral-400">
                training goals
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-soft-grey-300 mb-8 leading-relaxed"
            >
              Schedule a free consultation to explore how Upwise can accelerate your professional development and drive measurable results for your organization.
            </motion.p>

            {/* Contact Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4 mb-8"
            >
              {[
                { icon: Calendar, text: 'Schedule a free 30-minute strategy call' },
                { icon: Phone, text: 'Speak directly with Ritu Arora' },
                { icon: Mail, text: 'Get a custom training proposal' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 text-soft-grey-200"
                >
                  <div className="w-10 h-10 bg-warm-coral-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-warm-coral-400" />
                  </div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(233, 133, 105, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-warm-coral-500 hover:bg-warm-coral-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300"
              >
                Schedule Free Call
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-soft-grey-400 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Download Brochure
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-8 mt-8 pt-8 border-t border-soft-grey-700"
            >
              <div className="text-center">
                <div className="text-xl font-bold text-warm-coral-400">24hr</div>
                <div className="text-sm text-soft-grey-400">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-warm-coral-400">100%</div>
                <div className="text-sm text-soft-grey-400">Satisfaction Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-warm-coral-400">Free</div>
                <div className="text-sm text-soft-grey-400">Initial Consultation</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-deep-navy-800 mb-6">
                Get Started Today
              </h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-deep-navy-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-soft-grey-300 rounded-lg focus:ring-2 focus:ring-warm-coral-500 focus:border-transparent transition-all duration-200"
                      placeholder="John"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-deep-navy-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-soft-grey-300 rounded-lg focus:ring-2 focus:ring-warm-coral-500 focus:border-transparent transition-all duration-200"
                      placeholder="Doe"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-deep-navy-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-soft-grey-300 rounded-lg focus:ring-2 focus:ring-warm-coral-500 focus:border-transparent transition-all duration-200"
                    placeholder="john.doe@company.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-deep-navy-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-soft-grey-300 rounded-lg focus:ring-2 focus:ring-warm-coral-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your Company"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-deep-navy-700 mb-2">
                    Training Interest
                  </label>
                  <select className="w-full px-4 py-3 border border-soft-grey-300 rounded-lg focus:ring-2 focus:ring-warm-coral-500 focus:border-transparent transition-all duration-200">
                    <option>Select your interest</option>
                    <option>Excel Training</option>
                    <option>PowerPoint Training</option>
                    <option>Communication Skills</option>
                    <option>Train the Trainer</option>
                    <option>Custom Program</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-deep-navy-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-soft-grey-300 rounded-lg focus:ring-2 focus:ring-warm-coral-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your training needs..."
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  viewport={{ once: true }}
                  type="submit"
                  className="w-full bg-terracotta-600 hover:bg-terracotta-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>

              <p className="text-sm text-soft-grey-600 text-center mt-4">
                We'll respond within 24 hours
              </p>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-warm-coral-400 to-terracotta-500 rounded-full opacity-20"
            />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-light-peach-300 to-warm-coral-300 rounded-full opacity-30"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;