// // // // // import React from 'react';
// // // // // import { motion } from 'framer-motion';
// // // // // import { Monitor, Users, BookOpen, FileText, Award, Target } from 'lucide-react';

// // // // // const ServicesGrid: React.FC = () => {
// // // // //   const services = [
// // // // //     {
// // // // //       icon: Monitor,
// // // // //       title: 'Corporate Training',
// // // // //       description: 'Expert-led Excel, PowerPoint, and communication skills training for teams and enterprises.',
// // // // //       features: ['Excel Mastery', 'PowerPoint Excellence', 'Data Visualization', 'Advanced Formulas']
// // // // //     },
// // // // //     {
// // // // //       icon: Users,
// // // // //       title: '1:1 & Group Upskilling',
// // // // //       description: 'Personalized learning paths and group sessions tailored to your specific business needs.',
// // // // //       features: ['Individual Coaching', 'Team Workshops', 'Custom Curriculum', 'Progress Tracking']
// // // // //     },
// // // // //     {
// // // // //       icon: Award,
// // // // //       title: 'Train the Trainer',
// // // // //       description: 'Empower your internal teams to become effective trainers and knowledge multipliers.',
// // // // //       features: ['Trainer Certification', 'Content Development', 'Delivery Techniques', 'Assessment Methods']
// // // // //     },
// // // // //     {
// // // // //       icon: FileText,
// // // // //       title: 'Templates + Toolkits',
// // // // //       description: 'Ready-to-use professional templates and comprehensive toolkits for immediate implementation.',
// // // // //       features: ['Excel Templates', 'PowerPoint Decks', 'Process Guides', 'Best Practices']
// // // // //     },
// // // // //     {
// // // // //       icon: BookOpen,
// // // // //       title: 'Books by Ritu Arora',
// // // // //       description: 'Comprehensive learning resources authored by Ritu to enhance your professional journey.',
// // // // //       features: ['Digital Editions', 'Case Studies', 'Practical Exercises', 'Industry Insights']
// // // // //     },
// // // // //     {
// // // // //       icon: Target,
// // // // //       title: 'Custom Solutions',
// // // // //       description: 'Bespoke training programs designed specifically for your organization\'s unique challenges.',
// // // // //       features: ['Needs Assessment', 'Custom Content', 'Flexible Delivery', 'ROI Measurement']
// // // // //     }
// // // // //   ];

// // // // //   return (
// // // // //     <section id="services" className="py-20 lg:py-32 bg-white">
// // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // //         {/* Section Header */}
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0, y: 30 }}
// // // // //           whileInView={{ opacity: 1, y: 0 }}
// // // // //           transition={{ duration: 0.8 }}
// // // // //           viewport={{ once: true }}
// // // // //           className="text-center mb-16"
// // // // //         >
// // // // //           <h2 className="text-4xl lg:text-5xl font-bold text-deep-navy-800 mb-6">
// // // // //             Comprehensive Training Solutions
// // // // //           </h2>
// // // // //           <p className="text-xl text-soft-grey-600 max-w-3xl mx-auto leading-relaxed">
// // // // //             From foundational skills to advanced expertise, we offer a complete suite of professional development programs tailored to modern workplace needs.
// // // // //           </p>
// // // // //         </motion.div>

// // // // //         {/* Services Grid */}
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0 }}
// // // // //           whileInView={{ opacity: 1 }}
// // // // //           transition={{ duration: 0.6, staggerChildren: 0.2 }}
// // // // //           viewport={{ once: true }}
// // // // //           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
// // // // //         >
// // // // //           {services.map((service, index) => (
// // // // //             <motion.div
// // // // //               key={index}
// // // // //               initial={{ opacity: 0, y: 30 }}
// // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // //               transition={{ duration: 0.6, delay: index * 0.1 }}
// // // // //               whileHover={{ 
// // // // //                 y: -10, 
// // // // //                 boxShadow: '0 20px 40px rgba(200, 84, 47, 0.1)' 
// // // // //               }}
// // // // //               viewport={{ once: true }}
// // // // //               className="bg-gradient-to-br from-light-peach-50 to-white p-8 rounded-2xl border border-soft-grey-200 hover:border-warm-coral-200 transition-all duration-300 group"
// // // // //             >
// // // // //               {/* Icon */}
// // // // //               <motion.div
// // // // //                 whileHover={{ scale: 1.1, rotate: 5 }}
// // // // //                 className="w-16 h-16 bg-gradient-to-br from-terracotta-500 to-warm-coral-500 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
// // // // //               >
// // // // //                 <service.icon size={28} className="text-white" />
// // // // //               </motion.div>

// // // // //               {/* Content */}
// // // // //               <h3 className="text-xl font-bold text-deep-navy-800 mb-4">
// // // // //                 {service.title}
// // // // //               </h3>
// // // // //               <p className="text-soft-grey-600 mb-6 leading-relaxed">
// // // // //                 {service.description}
// // // // //               </p>

// // // // //               {/* Features List */}
// // // // //               <ul className="space-y-2">
// // // // //                 {service.features.map((feature, idx) => (
// // // // //                   <li key={idx} className="flex items-center text-sm text-soft-grey-700">
// // // // //                     <div className="w-2 h-2 bg-warm-coral-400 rounded-full mr-3 flex-shrink-0" />
// // // // //                     {feature}
// // // // //                   </li>
// // // // //                 ))}
// // // // //               </ul>

// // // // //               {/* Learn More Link */}
// // // // //               <motion.div
// // // // //                 whileHover={{ x: 5 }}
// // // // //                 className="mt-6 pt-6 border-t border-soft-grey-200"
// // // // //               >
// // // // //                 <a
// // // // //                   href="#"
// // // // //                   className="text-terracotta-600 hover:text-terracotta-700 font-medium text-sm flex items-center gap-2 transition-colors duration-200"
// // // // //                 >
// // // // //                   Learn More
// // // // //                   <motion.span
// // // // //                     animate={{ x: [0, 3, 0] }}
// // // // //                     transition={{ duration: 1.5, repeat: Infinity }}
// // // // //                   >
// // // // //                     →
// // // // //                   </motion.span>
// // // // //                 </a>
// // // // //               </motion.div>
// // // // //             </motion.div>
// // // // //           ))}
// // // // //         </motion.div>

// // // // //         {/* CTA Section */}
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0, y: 30 }}
// // // // //           whileInView={{ opacity: 1, y: 0 }}
// // // // //           transition={{ duration: 0.8, delay: 0.3 }}
// // // // //           viewport={{ once: true }}
// // // // //           className="text-center mt-16"
// // // // //         >
// // // // //           <motion.button
// // // // //             whileHover={{ scale: 1.05 }}
// // // // //             whileTap={{ scale: 0.95 }}
// // // // //             className="bg-deep-navy-800 hover:bg-deep-navy-900 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
// // // // //           >
// // // // //             Explore All Services
// // // // //           </motion.button>
// // // // //         </motion.div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default ServicesGrid;





// // // // import React from 'react';
// // // // import { motion } from 'framer-motion';
// // // // import { Check } from 'lucide-react';

// // // // const ServicesGrid: React.FC = () => {
// // // //   const offerings = [
// // // //     {
// // // //       title: 'Corporate Training Programs',
// // // //       image: '/assets/images/training.jpg',
// // // //       points: [
// // // //         'Excel',
// // // //         'PowerPoint',
// // // //         'Communication',
// // // //         'Productivity',
// // // //       ],
// // // //     },
// // // //     {
// // // //       title: 'Train the Trainer Programs',
// // // //       image: '/assets/images/trainer.jpg',
// // // //       points: [
// // // //         'Internal capability building',
// // // //         'Delivery techniques',
// // // //         'Trainer certification',
// // // //         'Content development',
// // // //       ],
// // // //     },
// // // //     {
// // // //       title: '1:1 & Small Group Workshops',
// // // //       image: '/assets/images/workshop.jpg',
// // // //       points: [
// // // //         'Live-led upskilling',
// // // //         'Personalized sessions',
// // // //         'Team-specific goals',
// // // //         'Flexible delivery',
// // // //       ],
// // // //     },
// // // //     {
// // // //       title: 'Micro-content Products',
// // // //       image: '/assets/images/toolkits.jpg',
// // // //       points: [
// // // //         'Toolkits & templates',
// // // //         'Short-format videos',
// // // //         'Quick-reference resources',
// // // //         'Practical guides',
// // // //       ],
// // // //     },
// // // //     {
// // // //       title: 'Books by Ritu Arora',
// // // //       image: '/assets/images/books.jpg',
// // // //       points: [
// // // //         'Trust-building tools',
// // // //         'Professional development',
// // // //         'Real-world insights',
// // // //         'Case studies',
// // // //       ],
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <section id="services" className="py-20 lg:py-32 bg-white">
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //         {/* Header */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 30 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.8 }}
// // // //           viewport={{ once: true }}
// // // //           className="text-center mb-14"
// // // //         >
// // // //           <h2 className="text-4xl lg:text-5xl font-bold text-deep-navy-800">
// // // //             Key Offerings
// // // //           </h2>
// // // //         </motion.div>

// // // //         {/* Grid of Cards */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0 }}
// // // //           whileInView={{ opacity: 1 }}
// // // //           transition={{ duration: 0.6, staggerChildren: 0.2 }}
// // // //           viewport={{ once: true }}
// // // //           className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
// // // //         >
// // // //           {offerings.map((item, index) => (
// // // //             <motion.div
// // // //               key={index}
// // // //               initial={{ opacity: 0, y: 20 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.5, delay: index * 0.1 }}
// // // //               viewport={{ once: true }}
// // // //               className="bg-gradient-to-br from-light-peach-50 to-white border border-soft-grey-200 hover:border-warm-coral-400 rounded-2xl shadow-md overflow-hidden transition-all duration-300"
// // // //             >
// // // //               {/* Image */}
// // // //               <img
// // // //                 src={item.image}
// // // //                 alt={item.title}
// // // //                 className="w-full h-48 object-cover"
// // // //               />

// // // //               {/* Content */}
// // // //               <div className="p-6">
// // // //                 <h3 className="text-xl font-bold text-deep-navy-800 mb-4">
// // // //                   {item.title}
// // // //                 </h3>

// // // //                 <ul className="space-y-3">
// // // //                   {item.points.map((point, i) => (
// // // //                     <li key={i} className="flex items-start gap-2 text-soft-grey-700 text-sm">
// // // //                       <Check size={18} className="text-warm-coral-500 mt-0.5" />
// // // //                       {point}
// // // //                     </li>
// // // //                   ))}
// // // //                 </ul>
// // // //               </div>
// // // //             </motion.div>
// // // //           ))}
// // // //         </motion.div>

// // // //         {/* CTA */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 30 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.8, delay: 0.3 }}
// // // //           viewport={{ once: true }}
// // // //           className="text-center mt-16"
// // // //         >
// // // //           <motion.button
// // // //             whileHover={{ scale: 1.05 }}
// // // //             whileTap={{ scale: 0.95 }}
// // // //             className="bg-deep-navy-800 hover:bg-deep-navy-900 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
// // // //           >
// // // //             Contact Us
// // // //           </motion.button>
// // // //         </motion.div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default ServicesGrid;



// // // import React from 'react';
// // // import { motion } from 'framer-motion';
// // // import { Check } from 'lucide-react';

// // // const ServicesGrid: React.FC = () => {
  
// // //   const offerings = [
// // //   {
// // //     title: 'Corporate Training Programs',
// // //     image:
// // //       'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
// // //     points: ['Excel', 'PowerPoint', 'Communication', 'Productivity'],
// // //   },
// // //   {
// // //     title: 'Train the Trainer Programs',
// // //     image:
// // //       'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
// // //     points: [
// // //       'Internal capability building',
// // //       'Delivery techniques',
// // //       'Trainer certification',
// // //       'Content development',
// // //     ],
// // //   },
// // //   {
// // //     title: '1:1 & Small Group Workshops',
// // //     image:
// // //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGEha_izQC5bTpDutAOp9uAHNtcZ7I5lVmSQ&s', // ✅ NEW image (team discussion / coaching)
// // //     points: [
// // //       'Live‑led upskilling',
// // //       'Personalized sessions',
// // //       'Team‑specific goals',
// // //       'Flexible delivery',
// // //     ],
// // //   },
// // //   {
// // //     title: 'Micro‑content Products',
// // //     image:
// // //       'https://www.daswritingservices.com/wp-content/uploads/2023/10/micro-content-types-examples-1024x535.png', // ✅ NEW image (digital resources)
// // //     points: [
// // //       'Toolkits & templates',
// // //       'Short‑format videos',
// // //       'Quick‑reference resources',
// // //       'Practical guides',
// // //     ],
// // //   },
// // //   {
// // //     title: 'Books by Ritu Arora',
// // //     image:
// // //       'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
// // //     points: [
// // //       'Trust‑building tools',
// // //       'Professional development',
// // //       'Real‑world insights',
// // //       'Case studies',
// // //     ],
// // //   },
// // // ];


// // //   return (
// // //     <section id="services" className="py-20 lg:py-28 bg-white">
// // //       <div className="max-w-6xl mx-auto px-4 sm:px-6">
// // //         {/* Section Header */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.8 }}
// // //           viewport={{ once: true }}
// // //           className="text-center mb-14"
// // //         >
// // //           <h2 className="text-4xl lg:text-5xl font-bold text-deep-navy-800 mb-4">
// // //             Key Offerings
// // //           </h2>
// // //           <p className="text-lg text-soft-grey-600 max-w-2xl mx-auto">
// // //             Practical, high-impact learning experiences designed for today’s professionals and organizations.
// // //           </p>
// // //         </motion.div>

// // //         {/* Cards Grid */}
// // //         <motion.div
// // //           initial={{ opacity: 0 }}
// // //           whileInView={{ opacity: 1 }}
// // //           transition={{ duration: 0.6, staggerChildren: 0.2 }}
// // //           viewport={{ once: true }}
// // //           className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// // //         >
// // //           {offerings.map((item, index) => (
// // //             <motion.div
// // //               key={index}
// // //               initial={{ opacity: 0, y: 20 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.5, delay: index * 0.1 }}
// // //               viewport={{ once: true }}
// // //               className=" w-80 bg-gradient-to-br from-light-peach-50 to-white border border-soft-grey-200 hover:border-warm-coral-400 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
// // //             >
// // //               {/* Image */}
// // //               <img
// // //                 src={item.image}
// // //                 alt={item.title}
// // //                 className="w-full h-44 object-cover"
// // //               />

// // //               {/* Content */}
// // //               <div className="p-6">
// // //                 <h3 className="text-lg font-bold text-deep-navy-800 mb-4">
// // //                   {item.title}
// // //                 </h3>
// // //                 <ul className="space-y-2">
// // //                   {item.points.map((point, i) => (
// // //                     <li
// // //                       key={i}
// // //                       className="flex items-start gap-2 text-sm text-soft-grey-700"
// // //                     >
// // //                       <Check size={18} className="text-warm-coral-500 mt-0.5" />
// // //                       {point}
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </motion.div>

// // //         {/* CTA */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.8, delay: 0.3 }}
// // //           viewport={{ once: true }}
// // //           className="text-center mt-16"
// // //         >
// // //           <motion.button
// // //             whileHover={{ scale: 1.05 }}
// // //             whileTap={{ scale: 0.95 }}
// // //             className="bg-deep-navy-800 hover:bg-deep-navy-900 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
// // //           >
// // //             Schedule a Call
// // //           </motion.button>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ServicesGrid;



// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { Check } from 'lucide-react';

// // const ServicesGrid: React.FC = () => {
// //   // ====== Motion variants ======
// //   const cardHover = { y: -10, scale: 1.05, rotate: 1 };
// //   const cardTransition = { type: 'spring', stiffness: 250, damping: 20 };

// //   const listVariants = {
// //     hidden: {},
// //     visible: {
// //       transition: { staggerChildren: 0.1, delayChildren: 0.8 },
// //     },
// //   };

// //   const itemVariants = {
// //     hidden: { opacity: 0, x: -10 },
// //     visible: { opacity: 1, x: 0 },
// //   };

// //   // ====== Data ======
// //   const offerings = [
// //     {
// //       title: 'Corporate Training Programs',
// //       image:
// //         'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
// //       points: ['Excel', 'PowerPoint', 'Communication', 'Productivity'],
// //     },
// //     {
// //       title: 'Train the Trainer Programs',
// //       image:
// //         'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
// //       points: [
// //         'Internal capability building',
// //         'Delivery techniques',
// //         'Trainer certification',
// //         'Content development',
// //       ],
// //     },
// //     {
// //       title: '1:1 & Small Group Workshops',
// //       image:
// //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGEha_izQC5bTpDutAOp9uAHNtcZ7I5lVmSQ&s',
// //       points: [
// //         'Live‑led upskilling',
// //         'Personalized sessions',
// //         'Team‑specific goals',
// //         'Flexible delivery',
// //       ],
// //     },
// //     {
// //       title: 'Micro‑content Products',
// //       image:
// //         'https://www.daswritingservices.com/wp-content/uploads/2023/10/micro-content-types-examples-1024x535.png',
// //       points: [
// //         'Toolkits & templates',
// //         'Short‑format videos',
// //         'Quick‑reference resources',
// //         'Practical guides',
// //       ],
// //     },
// //     {
// //       title: 'Books by Ritu Arora',
// //       image:
// //         'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
// //       points: [
// //         'Trust‑building tools',
// //         'Professional development',
// //         'Real‑world insights',
// //         'Case studies',
// //       ],
// //     },
// //   ];

// //   return (
// //     <section id="services" className="py-20 lg:py-28 bg-white">
// //       <div className="max-w-6xl mx-auto px-4 sm:px-6">
// //         {/* ----- Section Header ----- */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           viewport={{ once: true }}
// //           className="text-center mb-14"
// //         >
// //           <h2 className="text-4xl lg:text-5xl font-bold text-deep-navy-800 mb-4">
// //             Key Offerings
// //           </h2>
// //           <p className="text-lg text-soft-grey-600 max-w-2xl mx-auto">
// //             Practical, high‑impact learning experiences designed for today’s professionals and organizations.
// //           </p>
// //         </motion.div>

// //         {/* ----- Cards Grid ----- */}
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           transition={{ duration: 0.6, staggerChildren: 0.2 }}
// //           viewport={{ once: true }}
// //           className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// //         >
// //           {offerings.map((item, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: index * 0.1 }}
// //               viewport={{ once: true }}
// //               whileHover={cardHover}
// //               transition={cardTransition}
// //               className="w-80 bg-gradient-to-br from-light-peach-50 to-white border border-soft-grey-200 rounded-2xl shadow-sm hover:shadow-xl overflow-hidden group cursor-pointer"
// //             >
// //               {/* Image with zoom on hover */}
// //               <motion.img
// //                 src={item.image}
// //                 alt={item.title}
// //                 className="w-full h-44 object-cover"
// //                 whileHover={{ scale: 1.1 }}
// //                 transition={{ duration: 0.4 }}
// //               />

// //               {/* Content */}
// //               <div className="p-6">
// //                 <h3 className="text-lg font-bold text-deep-navy-800 mb-4">
// //                   {item.title}
// //                 </h3>

// //                 {/* Staggered bullet list */}
// //                 <motion.ul
// //                   variants={listVariants}
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true }}
// //                   className="space-y-2"
// //                 >
// //                   {item.points.map((point, i) => (
// //                     <motion.li
// //                       key={i}
// //                       variants={itemVariants}
// //                       className="flex items-start gap-2 text-sm text-soft-grey-700"
// //                     >
// //                       <Check
// //                         size={18}
// //                         className="text-warm-coral-500 mt-0.5 flex-shrink-0"
// //                       />
// //                       {point}
// //                     </motion.li>
// //                   ))}
// //                 </motion.ul>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </motion.div>

// //         {/* ----- CTA Button ----- */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.3 }}
// //           viewport={{ once: true }}
// //           className="text-center mt-16"
// //         >
// //           <motion.button
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             className="bg-deep-navy-800 hover:bg-deep-navy-900 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
// //           >
// //             Schedule a Call
// //           </motion.button>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ServicesGrid;





// import React from 'react';
// import { motion, Variants } from 'framer-motion';
// import { Check, ArrowRight } from 'lucide-react';

// const cardVariants: Variants = {
//   rest: { y: 0, boxShadow: '0 1px 4px rgba(0,0,0,0.05)' },
//   hover: { y: -6, boxShadow: '0 12px 32px rgba(0,0,0,0.12)' },
// };

// const imageVariants: Variants = {
//   rest: { scale: 1 },
//   hover: { scale: 1.08 },
// };

// const listVariants: Variants = {
//   rest: {},
//   hover: {
//     transition: { staggerChildren: 0.12, delayChildren: 0.1 },
//   },
// };

// const itemVariants: Variants = {
//   rest: { opacity: 0, x: -6 },
//   hover: { opacity: 1, x: 0, transition: { duration: 0.3 } },
// };

// const offerings = [
//   {
//     title: 'Corporate Training Programs',
//     image:
//       'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
//     points: ['Excel', 'PowerPoint', 'Communication', 'Productivity'],
//   },
//   {
//     title: 'Train the Trainer Programs',
//     image:
//       'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
//     points: [
//       'Internal capability building',
//       'Delivery techniques',
//       'Trainer certification',
//       'Content development',
//     ],
//   },
//   {
//     title: '1:1 & Small Group Workshops',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGEha_izQC5bTpDutAOp9uAHNtcZ7I5lVmSQ&s',
//     points: [
//       'Live‑led upskilling',
//       'Personalized sessions',
//       'Team‑specific goals',
//       'Flexible delivery',
//     ],
//   },
//   {
//     title: 'Micro‑content Products',
//     image:
//       'https://www.daswritingservices.com/wp-content/uploads/2023/10/micro-content-types-examples-1024x535.png',
//     points: [
//       'Toolkits & templates',
//       'Short‑format videos',
//       'Quick‑reference resources',
//       'Practical guides',
//     ],
//   },
//   {
//     title: 'Books by Ritu Arora',
//     image:
//       'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
//     points: [
//       'Trust‑building tools',
//       'Professional development',
//       'Real‑world insights',
//       'Case studies',
//     ],
//   },
// ];

// const ServicesGrid: React.FC = () => {
//   return (
//     <section id="services" className="py-20 lg:py-28 bg-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-14"
//         >
//           <h2 className="text-4xl lg:text-5xl font-bold text-deep-navy-800 mb-4">
//             Key Offerings
//           </h2>
//           <p className="text-lg text-soft-grey-600 max-w-2xl mx-auto">
//             Practical, high‑impact learning experiences designed for today’s professionals and organizations.
//           </p>
//         </motion.div>

//         {/* Grid */}
//         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
//           {offerings.map((o, idx) => (
//             <motion.article
//               key={idx}
//               initial="rest"
//               whileHover="hover"
//               animate="rest"
//               variants={cardVariants}
//               className="w-72 bg-gradient-to-br from-light-peach-50 to-white border border-soft-grey-200 rounded-2xl overflow-hidden transition-all duration-300 group"
//             >
//               {/* Image ‑ angled bottom edge */}
//               <motion.div
//                 variants={imageVariants}
//                 className="relative overflow-hidden"
//               >
//                 <img
//                   src={o.image}
//                   alt={o.title}
//                   className="w-full h-44 object-cover"
//                 />
//                 {/* angled overlay to create the diagonal cut */}
//                 <div
//                   className="absolute bottom-0 left-0 w-full h-10 bg-light-peach-50"
//                   style={{ transform: 'skewY(-6deg)', transformOrigin: '100% 100%' }}
//                 />
//               </motion.div>

//               {/* Content */}
//               <div className="p-6 pt-8 -mt-4">
//                 <h3 className="text-base font-bold text-deep-navy-800 mb-4">
//                   {o.title}
//                 </h3>

//                 {/* Bullet list with stagger reveal */}
//                 <motion.ul variants={listVariants} className="space-y-2 mb-6">
//                   {o.points.map((pt, i) => (
//                     <motion.li
//                       key={i}
//                       variants={itemVariants}
//                       className="flex items-start gap-2 text-sm text-soft-grey-700"
//                     >
//                       <Check
//                         size={18}
//                         className="text-warm-coral-500 mt-0.5 flex-shrink-0"
//                       />
//                       {pt}
//                     </motion.li>
//                   ))}
//                 </motion.ul>

//                 {/* CTA link */}
//                 <div className="flex items-center gap-1 text-sm font-semibold text-deep-navy-800 group-hover:text-warm-coral-600 transition-colors">
//                   Start your journey
//                   <ArrowRight
//                     size={16}
//                     className="group-hover:translate-x-1 transition-transform"
//                   />
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesGrid;










import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

/* ─────────────────── Variants ─────────────────── */

const cardVariants: Variants = {
  rest:  { y: 0, boxShadow: '0 1px 4px rgba(0,0,0,0.05)' },
  hover: { y: -6, boxShadow: '0 12px 32px rgba(0,0,0,0.12)' },
};

const imageVariants: Variants = {
  rest:  { scale: 1 },
  hover: { scale: 1.08 },
};

/** list animates once when card comes into view */
const listVariants: Variants = {
  hidden: {},
  show:   { transition: { delayChildren: 0.5, staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -6 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

/* ─────────────────── Data ─────────────────── */

const offerings = [
  {
    title: 'Corporate Training Programs',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    points: ['Excel', 'PowerPoint', 'Communication', 'Productivity'],
  },
  {
    title: 'Train the Trainer Programs',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    points: [
      'Internal capability building',
      'Delivery techniques',
      'Trainer certification',
      'Content development',
    ],
  },
  {
    title: '1:1 & Small Group Workshops',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGEha_izQC5bTpDutAOp9uAHNtcZ7I5lVmSQ&s',
    points: [
      'Live‑led upskilling',
      'Personalized sessions',
      'Team‑specific goals',
      'Flexible delivery',
    ],
  },
  {
    title: 'Micro‑content Products',
    image:
      'https://www.daswritingservices.com/wp-content/uploads/2023/10/micro-content-types-examples-1024x535.png',
    points: [
      'Toolkits & templates',
      'Short‑format videos',
      'Quick‑reference resources',
      'Practical guides',
    ],
  },
  {
    title: 'Books by Ritu Arora',
    image:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
    points: [
      'Trust‑building tools',
      'Professional development',
      'Real‑world insights',
      'Case studies',
    ],
  },
];

/* ─────────────────── Component ─────────────────── */

const ServicesGrid: React.FC = () => (
  <section id="services" className="py-20 lg:py-28 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-deep-navy-800 mb-4">
          Key Offerings
        </h2>
        <p className="text-lg text-soft-grey-600 max-w-2xl mx-auto">
          Practical, high‑impact learning experiences designed for today’s professionals and organizations.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {offerings.map((o, idx) => (
          <motion.article
            key={idx}
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={cardVariants}
            className="w-72 bg-gradient-to-br from-light-peach-50 to-white border border-soft-grey-200 rounded-2xl overflow-hidden transition-all duration-300 group"
          >
            {/* Image */}
            <motion.div variants={imageVariants} className="relative overflow-hidden">
              <img src={o.image} alt={o.title} className="w-full h-44 object-cover" />
              <div
                className="absolute bottom-0 left-0 w-full h-10 bg-light-peach-50"
                style={{ transform: 'skewY(-6deg)', transformOrigin: '100% 100%' }}
              />
            </motion.div>

            {/* Content */}
            <div className="p-6 pt-8 -mt-4">
              <h3 className="text-base font-bold text-deep-navy-800 mb-4">{o.title}</h3>

              {/* Bullet list animates once on scroll‑in */}
              <motion.ul
                variants={listVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-2 mb-6"
              >
                {o.points.map((pt, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariants}
                    className="flex items-start gap-2 text-sm text-soft-grey-700"
                  >
                    <Check size={18} className="text-warm-coral-500 mt-0.5 flex-shrink-0" />
                    {pt}
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA */}
              <div className="flex items-center gap-1 text-sm font-semibold text-deep-navy-800 group-hover:text-warm-coral-600 transition-colors">
                Start your journey
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
