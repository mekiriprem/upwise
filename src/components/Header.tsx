// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Menu, X } from 'lucide-react';

// const Header: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Services', href: '#services' },
//     { name: 'About', href: '#about' },
//     { name: 'Packages', href: '#packages' },
//     { name: 'Testimonials', href: '#testimonials' },
//     { name: 'Contact', href: '#contact' }
//   ];

//   return (
//     <motion.header
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled 
//           ? 'bg-white/95 backdrop-blur-md shadow-lg' 
//           : 'bg-transparent'
//       }`}
//     >
//       <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="flex items-center justify-between h-16 lg:h-20">
//           {/* Logo */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center space-x-2"
//           >
//             <div className="w-10 h-10 bg-gradient-to-br from-terracotta-500 to-warm-coral-500 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-lg">U</span>
//             </div>
//             <div>
//               <h1 className="text-xl font-bold text-deep-navy-800">Upwise</h1>
//               {/* <p className="text-xs text-soft-grey-600">by Ritu Arora</p> */}
//             </div>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <motion.a
//                 key={item.name}
//                 href={item.href}
//                 whileHover={{ scale: 1.05 }}
//                 className="text-deep-navy-700 hover:text-terracotta-600 font-medium transition-colors duration-200"
//               >
//                 {item.name}
//               </motion.a>
//             ))}
//           </nav>

//           {/* CTA Button */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="hidden lg:block bg-terracotta-600 hover:bg-terracotta-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
//           >
//             Schedule Call
//           </motion.button>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="lg:hidden p-2 text-deep-navy-700"
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="lg:hidden bg-white border-t border-soft-grey-200"
//           >
//             <div className="py-4 space-y-4">
//               {navItems.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="block px-4 py-2 text-deep-navy-700 hover:text-terracotta-600 font-medium"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//               <div className="px-4">
//                 <button className="w-full bg-terracotta-600 hover:bg-terracotta-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
//                   Schedule Call
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </motion.header>
//   );
// };

// export default Header;



import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* ───── Add scroll listener for backdrop + shadow ───── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Packages', href: '#packages' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`
        fixed top-0 left-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}
      `}
    >
      {/* === 100‑vw bar (always full‑width) === */}
      <div className="w-screen max-w-none px-4 sm:px-6 lg:px-8">
        {/* === Centered content container === */}
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between lg:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-terracotta-500 to-warm-coral-500">
              <span className="text-lg font-bold text-white">U</span>
            </div>
            <span className="text-xl font-bold text-deep-navy-800">Upwise</span>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden items-center space-x-8 lg:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="font-medium text-deep-navy-700 transition-colors duration-200 hover:text-terracotta-600"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden rounded-lg bg-terracotta-600 px-6 py-2 font-medium text-white transition-colors duration-200 hover:bg-terracotta-700 lg:block"
          >
            Schedule Call
          </motion.a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((s) => !s)}
            className="p-2 text-deep-navy-700 lg:hidden"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-soft-grey-200 bg-white lg:hidden"
          >
            <div className="space-y-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 font-medium text-deep-navy-700 transition-colors duration-200 hover:text-terracotta-600"
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full rounded-lg bg-terracotta-600 px-6 py-2 text-center font-medium text-white transition-colors duration-200 hover:bg-terracotta-700"
                >
                  Schedule Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;

