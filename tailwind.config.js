/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020b18',
          900: '#04142a',
          800: '#071e3d',
          700: '#0d2b52',
          600: '#153866',
          500: '#1e4d80',
        },
        gold: {
          50:  '#fdfbf0',
          100: '#faf4d3',
          200: '#f5e89a',
          300: '#edd84f',
          400: '#e4c840',
          500: '#c9a227',
          600: '#a8831d',
          700: '#86641a',
          800: '#6d4f1a',
          900: '#5c4119',
        },
        cream: '#f5f0e8',
        silk: '#e8e0d0',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"Poppins"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gold-gradient':   'linear-gradient(135deg, #c9a227 0%, #f5e89a 50%, #c9a227 100%)',
        'navy-gradient':   'linear-gradient(180deg, #020b18 0%, #071e3d 100%)',
      },
      animation: {
        'float':          'float 6s ease-in-out infinite',
        'float-delayed':  'float 6s ease-in-out infinite 2s',
        'pulse-slow':     'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow':      'spin 20s linear infinite',
        'shimmer':        'shimmer 2s linear infinite',
        'glow':           'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%':   { boxShadow: '0 0 20px rgba(201, 162, 39, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(201, 162, 39, 0.8)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'gold':    '0 0 30px rgba(201, 162, 39, 0.4)',
        'gold-lg': '0 0 60px rgba(201, 162, 39, 0.6)',
        'glass':   '0 8px 32px rgba(0,0,0,0.3)',
        'navy':    '0 4px 30px rgba(2, 11, 24, 0.8)',
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
}