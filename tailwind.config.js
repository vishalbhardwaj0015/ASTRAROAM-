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
          DEFAULT: '#1B5E20',
          light: '#2E7D32',
          dark: '#0d3b0f',
        },
        accent: {
          DEFAULT: '#8BC34A',
          light: '#9CCC65',
          dark: '#689F38',
        },
        navy: {
          DEFAULT: '#0B1D2A',
          light: '#122836',
          lighter: '#1a3545',
        },
        gold: '#d4a853',
        'off-white': '#f8faf9',
        danger: '#dc3545',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-cloud': 'floatCloud 20s ease-in-out infinite',
        'float-cloud-2': 'floatCloud 25s ease-in-out infinite reverse',
        'float-cloud-3': 'floatCloud 18s ease-in-out infinite',
        'bounce-scroll': 'bounce 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease',
        'slide-up': 'slideUp 0.4s ease',
        'spin-slow': 'spin 3s linear infinite',
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
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1B5E20, #2E7D32)',
        'gradient-accent': 'linear-gradient(135deg, #8BC34A, #9CCC65)',
        'gradient-navy': 'linear-gradient(135deg, #0B1D2A, #122836)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.1)',
        'glass-lg': '0 8px 40px rgba(11,29,42,0.16)',
        'glass-xl': '0 12px 60px rgba(11,29,42,0.24)',
        'glow': '0 0 30px rgba(139,195,74,0.3)',
        'glow-lg': '0 0 50px rgba(139,195,74,0.6)',
      },
    },
  },
  plugins: [],
}
