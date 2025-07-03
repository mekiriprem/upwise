import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Programs',
      links: [
        { name: 'Excel Training', href: '#' },
        { name: 'PowerPoint Mastery', href: '#' },
        { name: 'Communication Skills', href: '#' },
        { name: 'Train the Trainer', href: '#' },
        { name: 'Custom Solutions', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Templates', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'Webinars', href: '#' },
        { name: 'eBooks', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Ritu', href: '#' },
        { name: 'Success Stories', href: '#' },
        { name: 'Partnerships', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press Kit', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  return (
    <footer className="bg-deep-navy-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23E98569%22 fill-opacity=%220.4%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-b border-deep-navy-700 py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                  Stay ahead with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta-400 to-warm-coral-400">
                    expert insights
                  </span>
                </h3>
                <p className="text-xl text-soft-grey-300 leading-relaxed">
                  Get weekly tips, industry trends, and exclusive training resources delivered to your inbox.
                </p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-deep-navy-800 border border-soft-grey-600 rounded-xl text-white placeholder-soft-grey-400 focus:ring-2 focus:ring-warm-coral-500 focus:border-transparent transition-all duration-200"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-warm-coral-500 hover:bg-warm-coral-600 text-white px-8 py-4 rounded-xl font-semibold whitespace-nowrap transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-terracotta-500 to-warm-coral-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">U</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Upwise</h3>
                    {/* <p className="text-sm text-soft-grey-400">by Ritu Arora</p> */}
                  </div>
                </div>

                <p className="text-soft-grey-300 leading-relaxed mb-8">
                  Empowering professionals to grow smarter, present sharper, and perform better through expert-led corporate training and professional development programs.
                </p>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-soft-grey-300">
                    <Mail size={20} className="text-warm-coral-400" />
                    <span>hello@upwise.training</span>
                  </div>
                  <div className="flex items-center gap-3 text-soft-grey-300">
                    <Phone size={20} className="text-warm-coral-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-soft-grey-300">
                    <MapPin size={20} className="text-warm-coral-400" />
                    <span>Global Training Services</span>
                  </div>
                </div>
              </motion.div>

              {/* Footer Links */}
              {footerSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-semibold mb-6 text-white">
                    {section.title}
                  </h4>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <motion.a
                          href={link.href}
                          whileHover={{ x: 5 }}
                          className="text-soft-grey-300 hover:text-warm-coral-400 transition-all duration-200"
                        >
                          {link.name}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-deep-navy-700 py-8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <div className="text-soft-grey-400 text-sm">
                © {currentYear} Upwise by Ritu Arora. All rights reserved.
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="text-soft-grey-400 hover:text-warm-coral-400 transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-soft-grey-400 hover:text-warm-coral-400 transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="text-soft-grey-400 hover:text-warm-coral-400 transition-colors duration-200">
                  Cookie Policy
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-deep-navy-800 hover:bg-warm-coral-500 rounded-lg flex items-center justify-center text-soft-grey-400 hover:text-white transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;