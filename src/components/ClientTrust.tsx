import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_LOGOS } from '../utils/constants';

const ClientTrust: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-soft-grey-50 to-light-peach-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-deep-navy-800 mb-4">
            Trusted by L&D teams in leading enterprises
          </h2>
          <p className="text-lg text-soft-grey-600 max-w-2xl mx-auto">
            Join thousands of professionals from Fortune 500 companies who have transformed their skills with Upwise.
          </p>
        </motion.div>

        {/* Logos Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex items-center justify-center gap-12 lg:gap-16"
          >
            {/* First set of logos */}
            {COMPANY_LOGOS.map((company, index) => (
              <motion.div
                key={`first-${index}`}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 w-32 h-16 bg-white rounded-lg shadow-sm border border-soft-grey-200 flex items-center justify-center hover:shadow-md transition-all duration-300"
              >
                <span className="text-soft-grey-600 font-semibold text-sm">
                  {company}
                </span>
              </motion.div>
            ))}
            {/* Duplicate set for seamless loop */}
            {COMPANY_LOGOS.map((company, index) => (
              <motion.div
                key={`second-${index}`}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 w-32 h-16 bg-white rounded-lg shadow-sm border border-soft-grey-200 flex items-center justify-center hover:shadow-md transition-all duration-300"
              >
                <span className="text-soft-grey-600 font-semibold text-sm">
                  {company}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '500+', label: 'Companies Trained' },
            { value: '30K+', label: 'Professionals Upskilled' },
            { value: '99%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1, type: "spring" }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-terracotta-600 mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-soft-grey-600 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Recognition Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-warm-coral-100 to-light-peach-100 rounded-full">
            <div className="w-6 h-6 bg-gradient-to-r from-terracotta-500 to-warm-coral-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-xs font-bold">★</span>
            </div>
            <span className="text-deep-navy-700 font-semibold">
              Recognized as Top Corporate Trainer 2024
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientTrust;