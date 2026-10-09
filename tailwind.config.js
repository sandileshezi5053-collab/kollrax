/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f0f4fa',
          100: '#dbe5f1',
          200: '#b8cce4',
          300: '#8aa6d2',
          400: '#5a7fbd',
          500: '#3a5fa3',
          600: '#2a4a87',
          700: '#1e3a6f',
          800: '#16294f',
          900: '#0d1b36',
          950: '#070f22',
        },
        msblue: {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bcd6ff',
          300: '#8ebcff',
          400: '#5996ff',
          500: '#3373ff',
          600: '#1a52f5',
          700: '#143ce0',
          800: '#1633b5',
          900: '#1a328f',
        },
        teal: {
          50: '#effcf9',
          100: '#c9f7ee',
          200: '#93eee0',
          300: '#56ddd0',
          400: '#25c3b8',
          500: '#0aa8a0',
          600: '#018782',
          700: '#066c69',
          800: '#0a5653',
          900: '#0d4744',
        },
      },
      boxShadow: {
        card: '0 1px 3px rgba(13, 27, 54, 0.06), 0 4px 16px rgba(13, 27, 54, 0.04)',
        'card-hover': '0 4px 12px rgba(13, 27, 54, 0.08), 0 12px 32px rgba(13, 27, 54, 0.08)',
        dashboard: '0 24px 60px -12px rgba(7, 15, 34, 0.35), 0 8px 24px -8px rgba(7, 15, 34, 0.25)',
        glow: '0 0 0 1px rgba(51, 115, 255, 0.15), 0 8px 24px -4px rgba(51, 115, 255, 0.25)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.3)', opacity: '0' },
          '100%': { transform: 'scale(1.3)', opacity: '0' },
        },
        'bar-grow': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        'dash-rotate': {
          '0%': { strokeDashoffset: '251' },
          '100%': { strokeDashoffset: '50' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.8s ease-out both',
        'scale-in': 'scale-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'pulse-ring': 'pulse-ring 2.5s ease-out infinite',
        'bar-grow': 'bar-grow 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        'dash-rotate': 'dash-rotate 1.6s ease-out both',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
