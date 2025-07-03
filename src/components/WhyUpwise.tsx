// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { CheckCircle, Star, TrendingUp, Users2 } from 'lucide-react';

// // const WhyUpwise: React.FC = () => {
// //   const highlights = [
// //     {
// //       icon: Star,
// //       title: '25+ Years of Excellence',
// //       description: 'Ritu Arora brings over two decades of corporate training expertise, having worked with Fortune 500 companies globally.'
// //     },
// //     {
// //       icon: Users2,
// //       title: 'People-First Approach',
// //       description: 'Our training methodology focuses on individual growth and team dynamics, ensuring sustainable skill development.'
// //     },
// //     {
// //       icon: TrendingUp,
// //       title: 'Proven Results',
// //       description: 'With 99% NPS score and 30,000+ professionals trained, our impact speaks for itself in measurable outcomes.'
// //     }
// //   ];

// //   const achievements = [
// //     'Author of 2 bestselling professional development books',
// //     'Trusted by 500+ companies across industries',
// //     'Certified Master Trainer with global recognition',
// //     'Featured speaker at international conferences',
// //     'Developed proprietary learning frameworks',
// //     '4.8/5 average training satisfaction rating'
// //   ];

// //   return (
// //     <section id="about" className="py-20 lg:py-32 bg-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="grid lg:grid-cols-2 gap-16 items-center">
// //           {/* Left Content */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8 }}
// //             viewport={{ once: true }}
// //           >
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.2 }}
// //               viewport={{ once: true }}
// //               className="inline-flex items-center px-4 py-2 bg-terracotta-100 text-terracotta-700 rounded-full text-sm font-medium mb-6"
// //             >
// //               ✨ Why Choose Upwise?
// //             </motion.div>

// //             <motion.h2
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.3 }}
// //               viewport={{ once: true }}
// //               className="text-4xl lg:text-5xl font-bold text-deep-navy-800 mb-6"
// //             >
// //               Clarity-driven professional development with{' '}
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta-600 to-warm-coral-500">
// //                 proven impact
// //               </span>
// //             </motion.h2>

// //             <motion.p
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.4 }}
// //               viewport={{ once: true }}
// //               className="text-lg text-soft-grey-600 mb-8 leading-relaxed"
// //             >
// //               At Upwise, we believe that every professional deserves access to world-class training that delivers real results. Our approach combines deep industry expertise with personalized learning experiences.
// //             </motion.p>

// //             {/* Highlights */}
// //             <div className="space-y-6 mb-8">
// //               {highlights.map((highlight, index) => (
// //                 <motion.div
// //                   key={index}
// //                   initial={{ opacity: 0, x: -20 }}
// //                   whileInView={{ opacity: 1, x: 0 }}
// //                   transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
// //                   viewport={{ once: true }}
// //                   className="flex items-start gap-4"
// //                 >
// //                   <div className="w-12 h-12 bg-gradient-to-br from-terracotta-500 to-warm-coral-500 rounded-lg flex items-center justify-center flex-shrink-0">
// //                     <highlight.icon size={24} className="text-white" />
// //                   </div>
// //                   <div>
// //                     <h3 className="font-semibold text-deep-navy-800 mb-2">
// //                       {highlight.title}
// //                     </h3>
// //                     <p className="text-soft-grey-600 leading-relaxed">
// //                       {highlight.description}
// //                     </p>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>

// //             {/* Achievements List */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.8 }}
// //               viewport={{ once: true }}
// //               className="bg-gradient-to-br from-light-peach-50 to-soft-grey-50 p-6 rounded-2xl"
// //             >
// //               <h4 className="font-semibold text-deep-navy-800 mb-4">
// //                 Ritu's Credentials & Achievements
// //               </h4>
// //               <div className="grid gap-3">
// //                 {achievements.map((achievement, index) => (
// //                   <motion.div
// //                     key={index}
// //                     initial={{ opacity: 0, x: -10 }}
// //                     whileInView={{ opacity: 1, x: 0 }}
// //                     transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
// //                     viewport={{ once: true }}
// //                     className="flex items-center gap-3"
// //                   >
// //                     <CheckCircle size={16} className="text-warm-coral-500 flex-shrink-0" />
// //                     <span className="text-soft-grey-700 text-sm">
// //                       {achievement}
// //                     </span>
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </motion.div>
// //           </motion.div>

// //           {/* Right Content - Image & Video */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //             viewport={{ once: true }}
// //             className="relative"
// //           >
// //             {/* Main Image */}
// //             <motion.div
// //               whileHover={{ scale: 1.05 }}
// //               transition={{ duration: 0.3 }}
// //               className="relative z-10"
// //             >
// //               <img
// //                 src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
// //                 alt="Ritu Arora conducting training session"
// //                 className="rounded-2xl shadow-2xl w-full"
// //               />
              
// //               {/* Play Button Overlay */}
// //               <motion.div
// //                 initial={{ scale: 0 }}
// //                 whileInView={{ scale: 1 }}
// //                 transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
// //                 viewport={{ once: true }}
// //                 className="absolute inset-0 flex items-center justify-center"
// //               >
// //                 <motion.button
// //                   whileHover={{ scale: 1.1 }}
// //                   whileTap={{ scale: 0.9 }}
// //                   className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
// //                 >
// //                   <div className="w-0 h-0 border-l-[16px] border-l-terracotta-600 border-y-[12px] border-y-transparent ml-1" />
// //                 </motion.button>
// //               </motion.div>
// //             </motion.div>

// //             {/* Floating Stats Cards */}
// //             <motion.div
// //               initial={{ opacity: 0, scale: 0.8, y: 20 }}
// //               whileInView={{ opacity: 1, scale: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.6 }}
// //               viewport={{ once: true }}
// //               className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-soft-grey-200"
// //             >
// //               <div className="text-2xl font-bold text-terracotta-600">25+</div>
// //               <div className="text-xs text-soft-grey-600">Years Experience</div>
// //             </motion.div>

// //             <motion.div
// //               initial={{ opacity: 0, scale: 0.8, y: -20 }}
// //               whileInView={{ opacity: 1, scale: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.8 }}
// //               viewport={{ once: true }}
// //               className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-soft-grey-200"
// //             >
// //               <div className="text-2xl font-bold text-warm-coral-500">4.8★</div>
// //               <div className="text-xs text-soft-grey-600">Avg Rating</div>
// //             </motion.div>

// //             {/* Background Decoration */}
// //             <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-light-peach-200 to-warm-coral-200 rounded-full opacity-50 -z-10" />
// //             <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-br from-terracotta-200 to-warm-coral-200 rounded-full opacity-30 -z-10" />
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default WhyUpwise;





// import React from 'react';
// import { motion } from 'framer-motion';
// import { Star, Users2, TrendingUp } from 'lucide-react';

// /* ───── Highlights data ───── */
// const highlights = [
//   {
//     icon: Star,
//     title: '25 + Years of Excellence',
//     body:
//       'Over two decades of delivering corporate learning solutions that stick. Fortune 500s choose us for lasting impact.',
//     gradient: 'from-amber-400/80 to-amber-500/80',
//   },
//   {
//     icon: Users2,
//     title: 'People‑First Pedagogy',
//     body:
//       'Our methodology prioritizes human growth, psychological safety, and collaborative team dynamics for real‑world change.',
//     gradient: 'from-sky-400/80 to-sky-500/80',
//   },
//   {
//     icon: TrendingUp,
//     title: 'Proven, Measurable Results',
//     body:
//       '99 % NPS, 30 k+ professionals upskilled, and best‑in‑class ROI dashboards—data that speaks louder than claims.',
//     gradient: 'from-emerald-400/80 to-emerald-500/80',
//   },
// ];

// /* ───── Component ───── */
// const WhyUpwise: React.FC = () => {
//   return (
//     <section
//       id="about"
//       className="relative overflow-hidden py-24 lg:py-32 bg-white"
//     >
//       {/* Soft background blobs */}
//       <div className="absolute -top-48 -left-32 w-96 h-96 bg-gradient-to-br from-warm-coral-200 to-light-peach-200 rounded-full blur-3xl opacity-40 pointer-events-none" />
//       <div className="absolute -bottom-64 -right-40 w-[28rem] h-[28rem] bg-gradient-to-br from-terracotta-300 to-warm-coral-300 rounded-full blur-3xl opacity-30 pointer-events-none" />

//       <div className="max-w-4xl mx-auto px-4 sm:px-6">
//         {/* Tag */}
//         <motion.span
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="inline-block mb-6 px-4 py-2 text-sm font-medium rounded-full bg-terracotta-100 text-terracotta-700"
//         >
//           ✨ Why Choose Upwise?
//         </motion.span>

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.15 }}
//           viewport={{ once: true }}
//           className="text-center text-4xl lg:text-5xl font-extrabold tracking-tight text-deep-navy-800 mb-16"
//         >
//           Clarity‑Driven Learning with&nbsp;
//           <span className="bg-gradient-to-r from-terracotta-600 to-warm-coral-500 bg-clip-text text-transparent">
//             Proven Impact
//           </span>
//         </motion.h2>

//         {/* Highlights Grid */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {highlights.map(({ icon: Icon, title, body, gradient }, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30, scale: 0.95 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
//               viewport={{ once: true }}
//               className="relative overflow-hidden rounded-3xl p-px"
//             >
//               {/* gradient border */}
//               <div
//                 className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient}`}
//               />
//               {/* glassy card */}
//               <div className="relative z-10 h-full w-full rounded-3xl bg-white/70 backdrop-blur-md p-8">
//                 <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-terracotta-500 to-warm-coral-500 shadow-md">
//                   <Icon size={24} className="text-white" />
//                 </div>
//                 <h3 className="mb-3 text-lg font-semibold text-deep-navy-800">
//                   {title}
//                 </h3>
//                 <p className="text-sm leading-relaxed text-soft-grey-600">
//                   {body}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyUpwise;



import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users2, TrendingUp } from 'lucide-react';

const highlights = [
  {
    icon: Star,
    title: '25+ Years of Excellence',
    body:
      'Over two decades of delivering corporate learning solutions that stick. Fortune 500s choose us for lasting impact.',
    gradient: 'from-yellow-400 via-orange-300 to-amber-500',
    iconBg: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: Users2,
    title: 'People‑First Pedagogy',
    body:
      'Our methodology prioritizes human growth, psychological safety, and collaborative team dynamics for real‑world change.',
    gradient: 'from-sky-400 via-cyan-300 to-sky-500',
    iconBg: 'from-sky-500 to-sky-600',
  },
  {
    icon: TrendingUp,
    title: 'Proven, Measurable Results',
    body:
      '99% NPS, 30k+ professionals upskilled, and best‑in‑class ROI dashboards—data that speaks louder than claims.',
    gradient: 'from-emerald-400 via-green-300 to-emerald-500',
    iconBg: 'from-emerald-500 to-emerald-600',
  },
];

const WhyUpwise: React.FC = () => {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32 bg-white">
      {/* Background decorations */}
      <div className="absolute -top-44 -left-32 w-96 h-96 bg-gradient-to-br from-warm-coral-200 to-light-peach-200 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute -bottom-64 -right-40 w-[28rem] h-[28rem] bg-gradient-to-br from-terracotta-300 to-warm-coral-300 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Tag */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block mb-6 px-4 py-2 text-sm font-medium rounded-full bg-terracotta-100 text-terracotta-700"
        >
          ✨ Why Choose Upwise?
        </motion.span>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-center text-4xl lg:text-5xl font-extrabold tracking-tight text-deep-navy-800 mb-16"
        >
          Clarity‑Driven Learning with{' '}
          <span className="bg-gradient-to-r from-terracotta-600 to-warm-coral-500 bg-clip-text text-transparent">
            Proven Impact
          </span>
        </motion.h2>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map(({ icon: Icon, title, body, gradient, iconBg }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl p-px group transition-transform duration-300 ease-in-out hover:scale-[1.025]"
            >
              {/* Gradient Border */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient}`}
              />

              {/* Glassy Inner Card */}
              <div className="relative z-10 h-full w-full rounded-3xl bg-white/75 backdrop-blur-md p-8 shadow-xl">
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${iconBg} shadow-md`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-deep-navy-800">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-soft-grey-600">
                  {body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUpwise;
