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
        primary: {
          DEFAULT: '#0f2027',
          light: '#1a3a4a',
          dark: '#081519',
        },
        accent: {
          DEFAULT: '#c9a84c',
          light: '#dbbf6a',
          dark: '#a88a32',
        },
        navy: {
          DEFAULT: '#0f2027',
          light: '#1a3a4a',
          lighter: '#234558',
        },
        gold: '#c9a84c',
        cream: '#faf7f2',
        'off-white': '#f5f3ef',
        danger: '#dc3545',
        charcoal: '#1a1a2e',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-cloud': 'floatCloud 20s ease-in-out infinite',
        'float-cloud-2': 'floatCloud 25s ease-in-out infinite reverse',
        'float-cloud-3': 'floatCloud 18s ease-in-out infinite',
        'bounce-scroll': 'bounce 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease',
        'slide-up': 'slideUp 0.4s ease',
        'slide-down': 'slideDown 0.4s ease',
        'spin-slow': 'spin 3s linear infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'scale-in': 'scaleIn 0.3s ease',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatCloud: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(40px) translateY(-10px)' },
          '50%': { transform: 'translateX(80px) translateY(5px)' },
          '75%': { transform: 'translateX(30px) translateY(-5px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0f2027, #1a3a4a)',
        'gradient-accent': 'linear-gradient(135deg, #c9a84c, #dbbf6a)',
        'gradient-navy': 'linear-gradient(135deg, #0f2027, #234558)',
        'gradient-premium': 'linear-gradient(135deg, #0f2027 0%, #1a3a4a 50%, #234558 100%)',
        'gradient-gold': 'linear-gradient(135deg, #c9a84c 0%, #dbbf6a 50%, #c9a84c 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(15,32,39,0.4) 0%, rgba(15,32,39,0.85) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.08)',
        'glass-lg': '0 8px 40px rgba(15,32,39,0.12)',
        'glass-xl': '0 20px 60px rgba(15,32,39,0.18)',
        'glow': '0 0 30px rgba(201,168,76,0.25)',
        'glow-lg': '0 0 50px rgba(201,168,76,0.4)',
        'gold': '0 4px 20px rgba(201,168,76,0.3)',
        'gold-lg': '0 8px 40px rgba(201,168,76,0.4)',
        'premium': '0 10px 50px rgba(15,32,39,0.15)',
        'premium-lg': '0 20px 80px rgba(15,32,39,0.2)',
      },
      letterSpacing: {
        'premium': '0.25em',
        'wide-xl': '0.15em',
      },
    },
  },
  plugins: [],
}
