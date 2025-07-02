/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'soft-grey': {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#D1D6DB',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        'deep-navy': {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#2B3B4E',
          900: '#1E293B',
        },
        'terracotta': {
          50: '#FEF7F0',
          100: '#FDEDD3',
          200: '#FBD8A7',
          300: '#F7BE70',
          400: '#F19B37',
          500: '#EE7F1A',
          600: '#DF620F',
          700: '#C8542F',
          800: '#9A3412',
          900: '#7C2D12',
        },
        'warm-coral': {
          50: '#FEF7F5',
          100: '#FDEDE8',
          200: '#FBD9D1',
          300: '#F7B8A5',
          400: '#F18F70',
          500: '#E98569',
          600: '#DC4A2D',
          700: '#B73E1D',
          800: '#983318',
          900: '#7C2D12',
        },
        'light-peach': {
          50: '#FEFCFB',
          100: '#FEF8F5',
          200: '#FDEEE8',
          300: '#FBD1CD',
          400: '#F7A8A0',
          500: '#F18A7F',
          600: '#E85A4F',
          700: '#D1342C',
          800: '#B02318',
          900: '#7C2D12',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};