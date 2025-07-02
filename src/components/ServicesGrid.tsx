import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Users, BookOpen, FileText, Award, Target } from 'lucide-react';

const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Corporate Training',
      description: 'Expert-led Excel, PowerPoint, and communication skills training for teams and enterprises.',
      features: ['Excel Mastery', 'PowerPoint Excellence', 'Data Visualization', 'Advanced Formulas']
    },
    {
      icon: Users,
      title: '1:1 & Group Upskilling',
      description: 'Personalized learning paths and group sessions tailored to your specific business needs.',
      features: ['Individual Coaching', 'Team Workshops', 'Custom Curriculum', 'Progress Tracking']
    },
    {
      icon: Award,
      title: 'Train the Trainer',
      description: 'Empower your internal teams to become effective trainers and knowledge multipliers.',
      features: ['Trainer Certification', 'Content Development', 'Delivery Techniques', 'Assessment Methods']
    },
    {
      icon: FileText,
      title: 'Templates + Toolkits',
      description: 'Ready-to-use professional templates and comprehensive toolkits for immediate implementation.',
      features: ['Excel Templates', 'PowerPoint Decks', 'Process Guides', 'Best Practices']
    },
    {
      icon: BookOpen,
      title: 'Books by Ritu Arora',
      description: 'Comprehensive learning resources authored by Ritu to enhance your professional journey.',
      features: ['Digital Editions', 'Case Studies', 'Practical Exercises', 'Industry Insights']
    },
    {
      icon: Target,
      title: 'Custom Solutions',
      description: 'Bespoke training programs designed specifically for your organization\'s unique challenges.',
      features: ['Needs Assessment', 'Custom Content', 'Flexible Delivery', 'ROI Measurement']
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-deep-navy-800 mb-6">
            Comprehensive Training Solutions
          </h2>
          <p className="text-xl text-soft-grey-600 max-w-3xl mx-auto leading-relaxed">
            From foundational skills to advanced expertise, we offer a complete suite of professional development programs tailored to modern workplace needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 20px 40px rgba(200, 84, 47, 0.1)' 
              }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-light-peach-50 to-white p-8 rounded-2xl border border-soft-grey-200 hover:border-warm-coral-200 transition-all duration-300 group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-br from-terracotta-500 to-warm-coral-500 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
              >
                <service.icon size={28} className="text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-deep-navy-800 mb-4">
                {service.title}
              </h3>
              <p className="text-soft-grey-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-soft-grey-700">
                    <div className="w-2 h-2 bg-warm-coral-400 rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <motion.div
                whileHover={{ x: 5 }}
                className="mt-6 pt-6 border-t border-soft-grey-200"
              >
                <a
                  href="#"
                  className="text-terracotta-600 hover:text-terracotta-700 font-medium text-sm flex items-center gap-2 transition-colors duration-200"
                >
                  Learn More
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-deep-navy-800 hover:bg-deep-navy-900 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
          >
            Explore All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;