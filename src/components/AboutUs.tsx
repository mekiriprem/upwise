// import React from 'react';
// import { motion } from 'framer-motion';

// const AboutUs: React.FC = () => {
//   return (
//     <section id="about-us" className="relative overflow-hidden py-24 lg:py-32 bg-white">
//       {/* Decorative Background Blobs */}
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-terracotta-200 to-warm-coral-200 rounded-full blur-3xl opacity-30 pointer-events-none" />
//       <div className="absolute -bottom-44 -right-40 w-[28rem] h-[28rem] bg-gradient-to-br from-light-peach-200 to-soft-grey-100 rounded-full blur-3xl opacity-40 pointer-events-none" />

//       <div className="max-w-5xl mx-auto px-4 sm:px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-4xl lg:text-5xl font-bold text-center text-deep-navy-800 mb-12"
//         >
//           About <span className="bg-gradient-to-r from-terracotta-600 to-warm-coral-500 bg-clip-text text-transparent">Upwise</span>
//         </motion.h2>

//         {/* Section Content */}
//         <div className="space-y-10 text-lg text-soft-grey-700 leading-relaxed">
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             viewport={{ once: true }}
//           >
//             Empowering professionals to grow smarter, present sharper, and perform better — with clarity, confidence, and compassion.
//             Upwise exists to unlock professional potential by delivering powerful, practical, and people-first upskilling experiences.
//             Our aim is to build a future-ready workforce equipped with communication and technical skills that drive real impact.
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             Upwise is a next-generation professional development brand led by <strong>Ritu Arora</strong> — a corporate trainer and author with over two decades of industry experience and two published books to her credit. Backed by real-world expertise and a people-first philosophy, Upwise aims to empower professionals through practical, high-impact upskilling.
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             As the brand consultancy partner, our mandate is to craft a clear, differentiated identity for Upwise that reflects its core values of <strong>trust</strong>, <strong>clarity</strong>, and <strong>performance</strong>. This includes defining the brand’s strategic positioning, visual language, and tone of voice — and building the foundation for a content-driven growth engine that supports visibility, credibility, and scale across B2B and digital channels.
//           </motion.p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;



import React from 'react';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-24 lg:py-32 bg-white overflow-hidden relative">
      {/* Background Accent Circles */}
      <div className="absolute -top-32 -left-40 w-96 h-96 bg-gradient-to-br from-terracotta-200 to-warm-coral-200 opacity-30 blur-3xl rounded-full -z-10" />
      <div className="absolute -bottom-40 -right-40 w-[28rem] h-[28rem] bg-gradient-to-br from-light-peach-200 to-soft-grey-100 rounded-full blur-3xl opacity-40 -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:flex lg:items-center lg:gap-16">
        {/* Left Image */}
        {/* <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-shrink-0 lg:w-1/2 mb-12 lg:mb-0"
        >
          <img
            src="https://bsmedia.business-standard.com/_media/bs/img/article/2024-04/11/full/1712859690-4722.jpg"
            alt="Ritu Arora"
            className="rounded-2xl shadow-xl object-cover w-full h-auto"
          />
        </motion.div> */}



<motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="flex-shrink-0 lg:w-1/2 mb-12 lg:mb-0"
>
  <div className="rounded-2xl border-4 border-terracotta-500 p-1 shadow-2xl">
    <img
      src="https://bsmedia.business-standard.com/_media/bs/img/article/2024-04/11/full/1712859690-4722.jpg"
      alt="Ritu Arora"
      className="rounded-xl object-cover w-full h-auto"
    />
  </div>
</motion.div>



        {/* Right Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-deep-navy-800 mb-6">
            Meet <span className="bg-gradient-to-r from-terracotta-600 to-warm-coral-500 bg-clip-text text-transparent">Upwise</span>
          </h2>

          <p className="text-lg text-soft-grey-700 leading-relaxed mb-6">
            Upwise is a modern professional development brand founded by <strong>Ritu Arora</strong> — a seasoned corporate trainer and author with over 20 years of experience. Guided by her people-first approach, Upwise delivers impactful upskilling experiences that empower professionals to thrive with confidence and clarity.
          </p>

          <p className="text-lg text-soft-grey-700 leading-relaxed">
            Our mission is to build a future-ready workforce by combining strategic learning design, compelling content, and a distinct brand identity rooted in trust, performance, and growth. We support B2B and digital expansion through clear positioning and a consistent visual and verbal language.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

