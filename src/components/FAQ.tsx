import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What makes Upwise different from other corporate training providers?',
      answer: 'Upwise combines 25+ years of hands-on corporate experience with a people-first approach. Our training is not just theoretical – it\'s based on real-world applications and delivered by Ritu Arora, who has trained professionals across Fortune 500 companies. We focus on practical skills that deliver immediate ROI and measurable business impact.'
    },
    {
      question: 'Do you offer customized training programs for specific industries?',
      answer: 'Absolutely! We understand that each industry has unique challenges and requirements. Our custom training programs are designed after a thorough needs assessment of your organization. Whether you\'re in finance, healthcare, technology, or manufacturing, we adapt our content, examples, and case studies to your specific industry context.'
    },
    {
      question: 'What is the typical duration and format of your training programs?',
      answer: 'Our programs are flexible and can be delivered in various formats: intensive workshops (1-3 days), weekly sessions over several weeks, or extended programs spanning months. We offer in-person, virtual, and hybrid delivery options. The duration depends on your specific needs, ranging from focused 4-hour sessions to comprehensive 40-hour programs.'
    },
    {
      question: 'How do you measure the success and ROI of your training programs?',
      answer: 'We use a comprehensive measurement framework that includes pre and post-training assessments, practical skill demonstrations, and follow-up evaluations at 30, 60, and 90 days. We track metrics like productivity improvements, time savings, error reduction, and participant confidence levels. Our clients typically see 200-300% ROI within the first year.'
    },
    {
      question: 'Can you provide training for both beginners and advanced users?',
      answer: 'Yes! Our programs are designed with multiple proficiency levels in mind. We conduct pre-training assessments to understand each participant\'s current skill level and learning objectives. Our modular approach allows us to create learning paths for beginners, intermediate users, and advanced practitioners within the same program.'
    },
    {
      question: 'What kind of ongoing support do you provide after the training?',
      answer: 'Our commitment doesn\'t end with the training session. We provide 90 days of email support, access to our resource library, monthly Q&A sessions, and follow-up consultations. For enterprise clients, we also offer train-the-trainer programs and ongoing coaching to ensure knowledge transfer and skill retention within your organization.'
    },
    {
      question: 'Do you provide certificates upon completion of training programs?',
      answer: 'Yes, all participants receive a certificate of completion for our training programs. For specialized programs like Train-the-Trainer, we provide professional certification that\'s recognized in the industry. We also offer digital badges that can be displayed on LinkedIn profiles and professional portfolios.'
    },
    {
      question: 'What are your pricing options and payment terms?',
      answer: 'Our pricing is flexible and depends on factors like program duration, number of participants, delivery format, and customization level. We offer per-participant pricing for open programs and flat rates for corporate programs. Payment terms include monthly, quarterly, and annual options with discounts for longer commitments. Contact us for a detailed quote based on your specific requirements.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-light-peach-50 to-soft-grey-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-deep-navy-800 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-soft-grey-600 max-w-2xl mx-auto">
            Get answers to the most common questions about Upwise training programs and how we can help transform your professional skills.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm border border-soft-grey-200 overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-soft-grey-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-deep-navy-800 pr-8">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus size={24} className="text-terracotta-600" />
                  ) : (
                    <Plus size={24} className="text-soft-grey-500" />
                  )}
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-soft-grey-200 pt-6">
                        <p className="text-soft-grey-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-white rounded-3xl shadow-sm border border-soft-grey-200"
        >
          <h3 className="text-2xl font-bold text-deep-navy-800 mb-4">
            Still have questions?
          </h3>
          <p className="text-soft-grey-600 mb-6">
            Our team is here to help you find the perfect training solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Schedule a Call
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-terracotta-600 text-terracotta-600 hover:bg-terracotta-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Send us a Message
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;