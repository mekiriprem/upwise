import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Learning & Development Manager',
      company: 'Microsoft',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Ritu\'s Excel training transformed our team\'s productivity. The practical approach and real-world examples made complex formulas accessible to everyone. Our data analysis capabilities improved by 300%.'
    },
    {
      name: 'Michael Chen',
      role: 'HR Director',
      company: 'Google',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The presentation skills workshop was a game-changer for our leadership team. Ritu\'s expertise in PowerPoint design and storytelling elevated our client presentations to a new level.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Lead',
      company: 'Amazon',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Upwise\'s train-the-trainer program equipped me with the skills to become an effective internal trainer. The methodology is solid, practical, and immediately applicable.'
    },
    {
      name: 'David Park',
      role: 'Finance Manager',
      company: 'Infosys',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The custom Excel solutions saved our team hours of manual work every week. Ritu understood our specific needs and delivered training that directly impacted our bottom line.'
    },
    {
      name: 'Lisa Thompson',
      role: 'Project Manager',
      company: 'Accenture',
      image: 'https://images.pexels.com/photos/3727460/pexels-photo-3727460.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Professional, insightful, and results-driven. The communication skills training helped our entire team present more confidently to C-level executives.'
    }
  ];

  const stats = [
    { number: '99%', label: 'NPS Score', color: 'text-terracotta-600' },
    { number: '30,000+', label: 'Learners Trained', color: 'text-warm-coral-500' },
    { number: '4.8/5', label: 'Average Rating', color: 'text-terracotta-600' },
    { number: '500+', label: 'Companies', color: 'text-warm-coral-500' }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-white">
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
            What Our Learners Say
          </h2>
          <p className="text-xl text-soft-grey-600 max-w-3xl mx-auto">
            Discover how professionals and organizations have transformed their skills and achieved remarkable results with Upwise.
          </p>
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1, type: "spring" }}
                viewport={{ once: true }}
                className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}
              >
                {stat.number}
              </motion.div>
              <div className="text-soft-grey-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-light-peach-50 to-soft-grey-50 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote size={120} className="text-terracotta-600" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Testimonial Content */}
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl lg:text-2xl text-deep-navy-800 font-medium leading-relaxed mb-8">
                      "{testimonials[currentIndex].text}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-deep-navy-800 text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-soft-grey-600">
                          {testimonials[currentIndex].role}
                        </div>
                        <div className="text-terracotta-600 font-medium">
                          {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image/Visual */}
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <img
                        src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Training session"
                        className="rounded-2xl shadow-lg w-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-terracotta-600/20 to-warm-coral-500/20 rounded-2xl" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-terracotta-600 w-8'
                        : 'bg-soft-grey-300 hover:bg-soft-grey-400'
                    }`}
                  />
                ))}
              </div>

              {/* Arrow Navigation */}
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-deep-navy-700 hover:text-terracotta-600 transition-colors duration-200"
                >
                  <ChevronLeft size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-deep-navy-700 hover:text-terracotta-600 transition-colors duration-200"
                >
                  <ChevronRight size={20} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-soft-grey-600 mb-6">
            Ready to join thousands of satisfied learners?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
          >
            Start Your Training Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;