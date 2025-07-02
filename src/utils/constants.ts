export const COLORS = {
  softGrey: '#D1D6DB',
  deepNavy: '#2B3B4E',
  terracotta: '#C8542F',
  warmCoral: '#E98569',
  lightPeach: '#FBD1CD',
} as const;

export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  },
  slideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
};

export const COMPANY_LOGOS = [
  'Microsoft', 'Google', 'Amazon', 'Infosys', 'TCS', 'Wipro', 
  'Accenture', 'IBM', 'Deloitte', 'PwC', 'KPMG', 'EY'
];