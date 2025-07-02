// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Play } from 'lucide-react';

// const Hero: React.FC = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-light-peach-50 to-soft-grey-100">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23C8542F%22 fill-opacity=%220.4%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-center lg:text-left"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="inline-flex items-center px-4 py-2 bg-warm-coral-100 text-warm-coral-700 rounded-full text-sm font-medium mb-6"
//             >
//               ✨ Trusted by 30,000+ professionals
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//               className="text-4xl lg:text-6xl xl:text-7xl font-bold text-deep-navy-800 leading-tight mb-6"
//             >
//               Empowering professionals to{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta-600 to-warm-coral-500">
//                 grow smarter
//               </span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.7 }}
//               className="text-xl lg:text-2xl text-soft-grey-600 mb-8 leading-relaxed"
//             >
//               Present sharper, and perform better with expert-led corporate training and professional development programs.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.9 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(200, 84, 47, 0.3)' }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300"
//               >
//                 Schedule Your Free Strategy Call
//                 <ArrowRight size={20} />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="border-2 border-deep-navy-300 text-deep-navy-700 hover:bg-deep-navy-50 px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300"
//               >
//                 <Play size={20} />
//                 Watch Demo
//               </motion.button>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 1.1 }}
//               className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12"
//             >
//               {[
//                 { number: '99%', label: 'NPS Score' },
//                 { number: '30K+', label: 'Learners' },
//                 { number: '4.8/5', label: 'Rating' }
//               ].map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-2xl lg:text-3xl font-bold text-terracotta-600">{stat.number}</div>
//                   <div className="text-soft-grey-600 text-sm">{stat.label}</div>
//                 </div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Right Content - Image */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="relative"
//           >
//             <motion.div
//               animate={{ y: [0, -20, 0] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               className="relative z-10"
//             >
//               <img
//                 src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
//                 alt="Professional training session"
//                 className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
//               />
//             </motion.div>

//             {/* Floating Elements */}
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-warm-coral-400 to-terracotta-500 rounded-full opacity-20"
//             />
//             <motion.div
//               animate={{ y: [0, -15, 0] }}
//               transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//               className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-light-peach-300 to-warm-coral-300 rounded-full opacity-30"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Creative Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60"></div>

      {/* Particle Effect (simulated with SVG) */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 100 + '%'}
              cy={Math.random() * 100 + '%'}
              r={Math.random() * 2 + 1}
              fill="rgba(255, 182, 193, 0.8)"
              filter="url(#glow)"
              className="animate-float"
            />
          ))}
        </svg>
        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0); }
              50% { transform: translateY(-20px); }
              100% { transform: translateY(0); }
            }
            .animate-float {
              animation: float 6s ease-in-out infinite;
            }
          `}
        </style>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6"
          >
            ✨ Trusted by 30,000+ professionals
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg"
          >
            Empowering professionals to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500">
              grow smarter
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg lg:text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Present sharper, and perform better with expert-led corporate training and professional development programs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: '0 10px 25px rgba(239, 68, 68, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300"
            >
              Schedule Your Free Strategy Call
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300"
            >
              <Play size={20} />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats with Creative Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { number: '99%', label: 'NPS Score' },
              { number: '30K+', label: 'Learners' },
              { number: '4.8/5', label: 'Rating' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center"
              >
                <div className="text-2xl lg:text-3xl font-bold text-red-400">{stat.number}</div>
                <div className="text-gray-200 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
