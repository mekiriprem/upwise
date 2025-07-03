// // // import React, { useState } from 'react';
// // // import { motion } from 'framer-motion';
// // // import { Check, Star, ArrowRight } from 'lucide-react';

// // // const TrainingPackages: React.FC = () => {
// // //   const [billingType, setBillingType] = useState<'monthly' | 'annual'>('annual');

// // //   const packages = [
// // //     {
// // //       name: 'Starter',
// // //       description: 'Perfect for individuals getting started',
// // //       monthlyPrice: 299,
// // //       annualPrice: 2990,
// // //       popular: false,
// // //       features: [
// // //         'Basic Excel & PowerPoint training',
// // //         '10 hours of live sessions',
// // //         'Email support',
// // //         'Certificate of completion',
// // //         'Access to resource library',
// // //         '30-day money-back guarantee'
// // //       ]
// // //     },
// // //     {
// // //       name: 'Growth',
// // //       description: 'Ideal for small teams and departments',
// // //       monthlyPrice: 799,
// // //       annualPrice: 7990,
// // //       popular: true,
// // //       features: [
// // //         'Everything in Starter',
// // //         'Advanced Excel & PowerPoint modules',
// // //         '25 hours of live sessions',
// // //         'Priority email & chat support',
// // //         'Custom templates & toolkits',
// // //         'Progress tracking dashboard',
// // //         '1-on-1 coaching sessions (2 hours)',
// // //         'Team collaboration tools'
// // //       ]
// // //     },
// // //     {
// // //       name: 'Enterprise',
// // //       description: 'Comprehensive solution for large organizations',
// // //       monthlyPrice: 1999,
// // //       annualPrice: 19990,
// // //       popular: false,
// // //       features: [
// // //         'Everything in Growth',
// // //         'Unlimited live sessions',
// // //         'Dedicated account manager',
// // //         'Custom curriculum development',
// // //         'Train-the-trainer programs',
// // //         'ROI measurement & reporting',
// // //         'On-site training options',
// // //         '24/7 priority support',
// // //         'Integration with LMS systems'
// // //       ]
// // //     }
// // //   ];

// // //   return (
// // //     <section id="packages" className="py-20 lg:py-32 bg-gradient-to-br from-soft-grey-50 to-light-peach-50">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         {/* Section Header */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.8 }}
// // //           viewport={{ once: true }}
// // //           className="text-center mb-16"
// // //         >
// // //           <h2 className="text-4xl lg:text-5xl font-bold text-deep-navy-800 mb-6">
// // //             Choose Your Training Journey
// // //           </h2>
// // //           <p className="text-xl text-soft-grey-600 max-w-3xl mx-auto mb-8">
// // //             Flexible packages designed to meet your professional development needs, from individual growth to enterprise-wide transformation.
// // //           </p>

// // //           {/* Billing Toggle */}
// // //           <motion.div
// // //             initial={{ opacity: 0, scale: 0.9 }}
// // //             whileInView={{ opacity: 1, scale: 1 }}
// // //             transition={{ duration: 0.6, delay: 0.2 }}
// // //             viewport={{ once: true }}
// // //             className="inline-flex items-center bg-white p-1 rounded-xl shadow-lg border border-soft-grey-200"
// // //           >
// // //             <button
// // //               onClick={() => setBillingType('monthly')}
// // //               className={`px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
// // //                 billingType === 'monthly'
// // //                   ? 'bg-terracotta-600 text-white shadow-md'
// // //                   : 'text-soft-grey-600 hover:text-deep-navy-800'
// // //               }`}
// // //             >
// // //               Monthly
// // //             </button>
// // //             <button
// // //               onClick={() => setBillingType('annual')}
// // //               className={`px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 relative ${
// // //                 billingType === 'annual'
// // //                   ? 'bg-terracotta-600 text-white shadow-md'
// // //                   : 'text-soft-grey-600 hover:text-deep-navy-800'
// // //               }`}
// // //             >
// // //               Annual
// // //               <span className="absolute -top-2 -right-2 bg-warm-coral-500 text-white text-xs px-2 py-1 rounded-full">
// // //                 Save 17%
// // //               </span>
// // //             </button>
// // //           </motion.div>
// // //         </motion.div>

// // //         {/* Packages Grid */}
// // //         <motion.div
// // //           initial={{ opacity: 0 }}
// // //           whileInView={{ opacity: 1 }}
// // //           transition={{ duration: 0.6, staggerChildren: 0.2 }}
// // //           viewport={{ once: true }}
// // //           className="grid lg:grid-cols-3 gap-8"
// // //         >
// // //           {packages.map((pkg, index) => (
// // //             <motion.div
// // //               key={index}
// // //               initial={{ opacity: 0, y: 30 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.6, delay: index * 0.1 }}
// // //               whileHover={{ 
// // //                 y: -10, 
// // //                 boxShadow: pkg.popular 
// // //                   ? '0 25px 50px rgba(200, 84, 47, 0.15)' 
// // //                   : '0 25px 50px rgba(0, 0, 0, 0.1)'
// // //               }}
// // //               viewport={{ once: true }}
// // //               className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 ${
// // //                 pkg.popular
// // //                   ? 'border-terracotta-500 shadow-xl'
// // //                   : 'border-soft-grey-200 hover:border-warm-coral-200'
// // //               }`}
// // //             >
// // //               {/* Popular Badge */}
// // //               {pkg.popular && (
// // //                 <motion.div
// // //                   initial={{ opacity: 0, scale: 0.8 }}
// // //                   whileInView={{ opacity: 1, scale: 1 }}
// // //                   transition={{ duration: 0.6, delay: 0.3 }}
// // //                   viewport={{ once: true }}
// // //                   className="absolute -top-4 left-1/2 transform -translate-x-1/2"
// // //                 >
// // //                   <div className="bg-gradient-to-r from-terracotta-500 to-warm-coral-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
// // //                     <Star size={16} />
// // //                     Most Popular
// // //                   </div>
// // //                 </motion.div>
// // //               )}

// // //               {/* Package Header */}
// // //               <div className="text-center mb-8">
// // //                 <h3 className="text-2xl font-bold text-deep-navy-800 mb-2">
// // //                   {pkg.name}
// // //                 </h3>
// // //                 <p className="text-soft-grey-600 mb-6">
// // //                   {pkg.description}
// // //                 </p>
                
// // //                 {/* Price */}
// // //                 <div className="mb-6">
// // //                   <motion.div
// // //                     key={billingType}
// // //                     initial={{ opacity: 0, y: 10 }}
// // //                     animate={{ opacity: 1, y: 0 }}
// // //                     transition={{ duration: 0.3 }}
// // //                   >
// // //                     <span className="text-4xl lg:text-5xl font-bold text-deep-navy-800">
// // //                       ${billingType === 'annual' ? pkg.annualPrice : pkg.monthlyPrice}
// // //                     </span>
// // //                     <span className="text-soft-grey-600 ml-2">
// // //                       /{billingType === 'annual' ? 'year' : 'month'}
// // //                     </span>
// // //                   </motion.div>
// // //                   {billingType === 'annual' && (
// // //                     <p className="text-sm text-warm-coral-600 mt-2">
// // //                       Save ${(pkg.monthlyPrice * 12) - pkg.annualPrice} annually
// // //                     </p>
// // //                   )}
// // //                 </div>
// // //               </div>

// // //               {/* Features List */}
// // //               <ul className="space-y-4 mb-8">
// // //                 {pkg.features.map((feature, idx) => (
// // //                   <motion.li
// // //                     key={idx}
// // //                     initial={{ opacity: 0, x: -10 }}
// // //                     whileInView={{ opacity: 1, x: 0 }}
// // //                     transition={{ duration: 0.4, delay: 0.4 + idx * 0.05 }}
// // //                     viewport={{ once: true }}
// // //                     className="flex items-start gap-3"
// // //                   >
// // //                     <Check size={20} className="text-warm-coral-500 flex-shrink-0 mt-0.5" />
// // //                     <span className="text-soft-grey-700 text-sm">
// // //                       {feature}
// // //                     </span>
// // //                   </motion.li>
// // //                 ))}
// // //               </ul>

// // //               {/* CTA Button */}
// // //               <motion.button
// // //                 whileHover={{ scale: 1.05 }}
// // //                 whileTap={{ scale: 0.95 }}
// // //                 className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
// // //                   pkg.popular
// // //                     ? 'bg-terracotta-600 hover:bg-terracotta-700 text-white shadow-lg hover:shadow-xl'
// // //                     : 'bg-deep-navy-800 hover:bg-deep-navy-900 text-white'
// // //                 }`}
// // //               >
// // //                 Get Started
// // //                 <ArrowRight size={20} />
// // //               </motion.button>

// // //               {/* Custom Package Note */}
// // //               {index === packages.length - 1 && (
// // //                 <motion.p
// // //                   initial={{ opacity: 0 }}
// // //                   whileInView={{ opacity: 1 }}
// // //                   transition={{ duration: 0.6, delay: 0.6 }}
// // //                   viewport={{ once: true }}
// // //                   className="text-center text-sm text-soft-grey-600 mt-4"
// // //                 >
// // //                   Need something different? 
// // //                   <a href="#contact" className="text-terracotta-600 hover:text-terracotta-700 font-medium ml-1">
// // //                     Let's talk custom solutions
// // //                   </a>
// // //                 </motion.p>
// // //               )}
// // //             </motion.div>
// // //           ))}
// // //         </motion.div>

// // //         {/* Bottom CTA */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.8, delay: 0.4 }}
// // //           viewport={{ once: true }}
// // //           className="text-center mt-16"
// // //         >
// // //           <p className="text-lg text-soft-grey-600 mb-6">
// // //             Not sure which package is right for you?
// // //           </p>
// // //           <motion.button
// // //             whileHover={{ scale: 1.05 }}
// // //             whileTap={{ scale: 0.95 }}
// // //             className="bg-warm-coral-500 hover:bg-warm-coral-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
// // //           >
// // //             Schedule a Free Consultation
// // //           </motion.button>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default TrainingPackages;






// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { Star, ArrowRight, Palette, Megaphone, Presentation } from 'lucide-react';

// // type Package = {
// //   name: string;
// //   duration: string;
// //   price: number;
// //   description: string;
// //   popular?: boolean;
// //   features: string[];
// //   icon: React.ReactNode;
// // };

// // const packages: Package[] = [
// //   {
// //     name: 'Trainer Culture Kit',
// //     duration: '(3–4 Weeks)',
// //     price: 25000,
// //     description: 'Ready-to-use templates & onboarding material',
// //     icon: <Presentation size={20} className="text-warm-coral-500 mt-0.5" />,
// //     features: [
// //       'Deck templates (training + sales)',
// //       'Brand-aligned onboarding guide',
// //       'Client-facing pitch deck (content by client)',
// //     ],
// //   },
// //   {
// //     name: 'Marketing Strategy',
// //     duration: '(4–6 Weeks)',
// //     price: 50000,
// //     description: 'Launch-ready strategy & presence for Ritu',
// //     icon: <Megaphone size={20} className="text-warm-coral-500 mt-0.5" />,
// //     features: [
// //       'Content pillars and audience personas',
// //       'LinkedIn-focused social presence',
// //       'Launch content calendar (posts, reels)',
// //       'Email & newsletter templates',
// //       'Thought leadership strategy for Ritu',
// //     ],
// //   },
// //   {
// //     name: 'Brand Identity Development',
// //     duration: '(3–4 Weeks)',
// //     price: 75000,
// //     description: 'Complete brand system from vision to visuals',
// //     popular: true,
// //     icon: <Palette size={20} className="text-warm-coral-500 mt-0.5" />,
// //     features: [
// //       'Vision, mission, and positioning statements',
// //       'Logo design and visual system',
// //       'Color palette, typography, & moodboard',
// //       'Tone of voice and communication style',
// //     ],
// //   },
// // ];

// // const formatINR = (amount: number) =>
// //   `₹${new Intl.NumberFormat('en-IN').format(amount)}`;

// // const TrainingPackages: React.FC = () => {
// //   return (
// //     <section className="py-20 lg:py-32 bg-gradient-to-br from-soft-grey-50 to-light-peach-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Section Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           viewport={{ once: true }}
// //           className="text-center mb-16"
// //         >
// //           <h2 className="text-4xl lg:text-5xl font-bold text-deep-navy-800 mb-6">
// //             Choose Your Package
// //           </h2>
// //           <p className="text-xl text-soft-grey-600 max-w-3xl mx-auto">
// //             From strategic marketing to stunning brand systems — pick what moves your business forward.
// //           </p>
// //         </motion.div>

// //         {/* Packages Grid */}
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           transition={{ duration: 0.6, staggerChildren: 0.2 }}
// //           viewport={{ once: true }}
// //           className="grid lg:grid-cols-3 gap-8"
// //         >
// //           {packages.map((pkg, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: index * 0.1 }}
// //               whileHover={{
// //                 y: -10,
// //                 boxShadow: pkg.popular
// //                   ? '0 25px 50px rgba(200, 84, 47, 0.15)'
// //                   : '0 25px 50px rgba(0, 0, 0, 0.1)',
// //               }}
// //               viewport={{ once: true }}
// //               className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 ${
// //                 pkg.popular
// //                   ? 'border-terracotta-500 shadow-xl'
// //                   : 'border-soft-grey-200 hover:border-warm-coral-200'
// //               }`}
// //             >
// //               {/* Popular Badge */}
// //               {pkg.popular && (
// //                 <motion.div
// //                   initial={{ opacity: 0, scale: 0.8 }}
// //                   whileInView={{ opacity: 1, scale: 1 }}
// //                   transition={{ duration: 0.6, delay: 0.3 }}
// //                   viewport={{ once: true }}
// //                   className="absolute -top-4 left-1/2 transform -translate-x-1/2"
// //                 >
// //                   <div className="bg-gradient-to-r from-terracotta-500 to-warm-coral-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
// //                     <Star size={16} />
// //                     Most Popular
// //                   </div>
// //                 </motion.div>
// //               )}

// //               {/* Header */}
// //               <div className="text-center mb-8">
// //                 <h3 className="text-2xl font-bold text-deep-navy-800 mb-1">
// //                   {pkg.name}
// //                 </h3>
// //                 <p className="text-soft-grey-600">{pkg.duration}</p>
// //                 <p className="text-sm text-soft-grey-600 mt-2">{pkg.description}</p>

// //                 {/* Price */}
// //                 <div className="mt-6">
// //                   <span className="text-4xl lg:text-5xl font-bold text-deep-navy-800">
// //                     {formatINR(pkg.price)}
// //                   </span>
// //                 </div>
// //               </div>

// //               {/* Features List */}
// //               <ul className="space-y-4 mb-8">
// //                 {pkg.features.map((feature, idx) => (
// //                   <motion.li
// //                     key={idx}
// //                     initial={{ opacity: 0, x: -10 }}
// //                     whileInView={{ opacity: 1, x: 0 }}
// //                     transition={{ duration: 0.4, delay: 0.4 + idx * 0.05 }}
// //                     viewport={{ once: true }}
// //                     className="flex items-start gap-3"
// //                   >
// //                     {pkg.icon}
// //                     <span className="text-soft-grey-700 text-sm">{feature}</span>
// //                   </motion.li>
// //                 ))}
// //               </ul>

// //               {/* CTA Button */}
// //               <motion.button
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
// //                   pkg.popular
// //                     ? 'bg-terracotta-600 hover:bg-terracotta-700 text-white shadow-lg hover:shadow-xl'
// //                     : 'bg-deep-navy-800 hover:bg-deep-navy-900 text-white'
// //                 }`}
// //               >
// //                 Get Started
// //                 <ArrowRight size={20} />
// //               </motion.button>
// //             </motion.div>
// //           ))}
// //         </motion.div>

// //         {/* Bottom CTA */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.4 }}
// //           viewport={{ once: true }}
// //           className="text-center mt-16"
// //         >
// //           <p className="text-lg text-soft-grey-600 mb-6">
// //             Need something different?
// //           </p>
// //           <motion.button
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             className="bg-warm-coral-500 hover:bg-warm-coral-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
// //           >
// //             Request a Custom Quote
// //           </motion.button>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TrainingPackages;


// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   Flag,
//   Image as ImageIcon,
//   Palette,
//   MessageSquare,
//   Users,
//   CalendarCheck,
//   Mail,
//   Target
// } from 'lucide-react';

// const TrainingPackages: React.FC = () => {
//   const packages = [
//     {
//       name: 'Brand Identity Development',
//       description: '(3–4 Weeks)',
//       price: 75000,
//       popular: true,
//       features: [
//         {
//           text: 'Vision, mission, and positioning statements',
//           icon: <Flag className="text-deep-navy-600 w-5 h-5" />,
//           bgColor: 'bg-blue-100'
//         },
//         {
//           text: 'Logo design and visual system',
//           icon: <ImageIcon className="text-deep-navy-600 w-5 h-5" />,
//           bgColor: 'bg-gray-100'
//         },
//         {
//           text: 'Color palette, typography, and brand moodboard',
//           icon: <Palette className="text-deep-navy-600 w-5 h-5" />,
//           bgColor: 'bg-green-100'
//         },
//         {
//           text: 'Tone of voice and communication style',
//           icon: <MessageSquare className="text-deep-navy-600 w-5 h-5" />,
//           bgColor: 'bg-red-100'
//         }
//       ]
//     },
//     {
//       name: 'Marketing Strategy',
//       description: '(4–6 Weeks)',
//       price: 50000,
//       popular: false,
//       features: [
//         {
//           text: 'Content pillars and audience personas',
//           icon: <Target className="text-deep-navy-600 w-5 h-5" />,
//           bgColor: 'bg-purple-100'
//         },
//         {
//           text: 'Social media presence (LinkedIn-focused)',
//           icon: <Users className="text-deep-navy-600 w-5 h-5" />,
//           bgColor: 'bg-blue-100'
//         },
//         {
//           text: 'Launch content calendar (posts, carousels, reels)',
//           icon: <CalendarCheck className="text-deep-navy-600 w-5 h-5" />,
//           bgColor: 'bg-yellow-100'
//         },
//         {
//           text: 'Newsletter & email marketing templates',
//           icon: <Mail className="text-deep-navy-600 w-5 h-5" />,
//           bgColor: 'bg-rose-100'
//         }
//       ]
//     },
//     {
//       name: 'Trainer Culture Kit',
//       description: '(3–4 Weeks)',
//       price: 25000,
//       popular: false,
//       features: [
//         {
//           text: 'Deck templates (training + sales)',
//           icon: <ImageIcon className="text-deep-navy-600 w-5 h-5" />,
//           bgColor: 'bg-orange-100'
//         },
//         {
//           text: 'Brand-aligned onboarding guide',
//           icon: <MessageSquare className="text-deep-navy-600 w-5 h-5" />,
//           bgColor: 'bg-green-100'
//         },
//         {
//           text: 'Client-facing pitch deck (Content by client)',
//           icon: <Flag className="text-deep-navy-600 w-5 h-5" />,
//           bgColor: 'bg-pink-100'
//         }
//       ]
//     }
//   ];

//   return (
//     <section className="py-20 lg:py-32 bg-gradient-to-br from-soft-grey-50 to-light-peach-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl lg:text-5xl font-bold text-deep-navy-800 mb-4">
//             Branding & Strategy Packages
//           </h2>
//           <p className="text-lg text-soft-grey-600 max-w-2xl mx-auto">
//             Tailored packages to define your voice, shape your identity, and launch with clarity.
//           </p>
//         </motion.div>

//         {/* Package Cards */}
//         <div className="grid lg:grid-cols-3 gap-8">
//           {packages.map((pkg, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 ${
//                 pkg.popular
//                   ? 'border-terracotta-500 shadow-xl'
//                   : 'border-soft-grey-200 hover:border-warm-coral-200'
//               }`}
//             >
//               {/* Popular Badge */}
//               {pkg.popular && (
//                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                   <div className="bg-gradient-to-r from-terracotta-500 to-warm-coral-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
//                     ⭐ Most Popular
//                   </div>
//                 </div>
//               )}

//               {/* Header */}
//               <div className="text-center mb-6">
//                 <h3 className="text-2xl font-bold text-deep-navy-800 mb-1">{pkg.name}</h3>
//                 <p className="text-sm text-soft-grey-500">{pkg.description}</p>
//                 <div className="mt-4">
//                   <span className="text-3xl font-bold text-terracotta-600">₹{pkg.price.toLocaleString()}</span>
//                 </div>
//               </div>

//               {/* Features */}
//               <ul className="space-y-4 mb-8">
//                 {pkg.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-start gap-4">
//                     <div className={`rounded-full p-2 ${feature.bgColor}`}>
//                       {feature.icon}
//                     </div>
//                     <span className="text-soft-grey-700 text-sm">{feature.text}</span>
//                   </li>
//                 ))}
//               </ul>

//               {/* CTA Button */}
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 bg-deep-navy-800 hover:bg-deep-navy-900 text-white"
//               >
//                 Get Started
//               </motion.button>
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <p className="text-lg text-soft-grey-600 mb-6">Need help choosing the right package?</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-warm-coral-500 hover:bg-warm-coral-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
//           >
//             Schedule a Free Consultation
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default TrainingPackages;





import React from 'react';
import { motion } from 'framer-motion';
import {
  Flag,
  Image as ImageIcon,
  Palette,
  MessageSquare,
  Users,
  CalendarCheck,
  Mail,
  Target,
  Star,
} from 'lucide-react';

/* ────────────────────────────────────────────────────
   DATA
   Cards are already ordered: ₹25 000 → ₹75 000 → ₹50 000
────────────────────────────────────────────────────── */
const packages = [
  {
    name: 'Trainer Culture Kit',
    description: '(3–4 Weeks)',
    price: 25_000,
    popular: false,
    features: [
      {
        text: 'Deck templates (training + sales)',
        icon: <ImageIcon className="w-5 h-5 text-deep-navy-600" />,
        bg: 'bg-orange-100',
      },
      {
        text: 'Brand‑aligned onboarding guide',
        icon: <MessageSquare className="w-5 h-5 text-deep-navy-600" />,
        bg: 'bg-green-100',
      },
      {
        text: 'Client‑facing pitch deck (provided by client)',
        icon: <Flag className="w-5 h-5 text-deep-navy-600" />,
        bg: 'bg-pink-100',
      },
    ],
  },
  {
    name: 'Brand Identity Development',
    description: '(3–4 Weeks)',
    price: 75_000,
    popular: true,
    features: [
      {
        text: 'Vision, mission, and positioning statements',
        icon: <Flag className="w-5 h-5 text-deep-navy-600" />,
        bg: 'bg-blue-100',
      },
      {
        text: 'Logo design and visual system',
        icon: <ImageIcon className="w-5 h-5 text-deep-navy-600" />,
        bg: 'bg-gray-100',
      },
      {
        text: 'Color palette, typography, & brand moodboard',
        icon: <Palette className="w-5 h-5 text-deep-navy-600" />,
        bg: 'bg-green-100',
      },
      {
        text: 'Tone of voice and communication style',
        icon: <MessageSquare className="w-5 h-5 text-deep-navy-600" />,
        bg: 'bg-red-100',
      },
    ],
  },
  {
    name: 'Marketing Strategy',
    description: '(4–6 Weeks)',
    price: 50_000,
    popular: false,
    features: [
      {
        text: 'Content pillars and audience personas',
        icon: <Target className="w-5 h-5 text-deep-navy-600" />,
        bg: 'bg-purple-100',
      },
      {
        text: 'Social media presence (LinkedIn‑focused)',
        icon: <Users className="w-5 h-5 text-deep-navy-600" />,
        bg: 'bg-blue-100',
      },
      {
        text: 'Launch content calendar (posts, carousels, reels)',
        icon: <CalendarCheck className="w-5 h-5 text-deep-navy-600" />,
        bg: 'bg-yellow-100',
      },
      {
        text: 'Newsletter & email marketing templates',
        icon: <Mail className="w-5 h-5 text-deep-navy-600" />,
        bg: 'bg-rose-100',
      },
    ],
  },
];

/* INR formatter (valid identifier) */
const formatPrice = (n: number) => `₹${n.toLocaleString('en-IN')}`;

/* ────────────────────────────────────────────────────
   COMPONENT
────────────────────────────────────────────────────── */
const TrainingPackages: React.FC = () => (
  <section className="py-20 lg:py-32 bg-gradient-to-br from-soft-grey-50 to-light-peach-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="mb-4 text-4xl font-bold text-deep-navy-800 lg:text-5xl">
          Branding & Strategy Packages
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-soft-grey-600">
          Pick the package that fits your growth strategy and brand vision.
        </p>
      </motion.div>

      {/* Card grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {packages.map((pkg, idx) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 1 }} // 0 s • 1 s • 2 s
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              boxShadow: pkg.popular
                ? '0 25px 50px rgba(200, 84, 47, 0.15)'
                : '0 25px 50px rgba(0,0,0,0.1)',
            }}
            className={`relative rounded-3xl border-2 bg-white p-8 transition-all ${
              pkg.popular
                ? 'border-terracotta-500 shadow-xl'
                : 'border-soft-grey-200 hover:border-warm-coral-200'
            }`}
          >
            {/* Badge */}
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-terracotta-500 to-warm-coral-500 px-6 py-2 text-sm font-semibold text-white">
                  <Star size={16} /> Most Popular
                </div>
              </div>
            )}

            {/* Card header */}
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold text-deep-navy-800">
                {pkg.name}
              </h3>
              <p className="text-sm text-soft-grey-500">{pkg.description}</p>
              <div className="mt-4 text-3xl font-bold text-terracotta-600">
                {formatPrice(pkg.price)}
              </div>
            </div>

            {/* Features */}
            <ul className="mb-8 space-y-4">
              {pkg.features.map(({ text, icon, bg }, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className={`rounded-full p-2 ${bg}`}>{icon}</span>
                  <span className="text-sm text-soft-grey-700">{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full rounded-xl bg-deep-navy-800 py-4 text-lg font-semibold text-white transition hover:bg-deep-navy-900"
            >
              Get Started
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrainingPackages;
