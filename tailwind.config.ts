import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Earthy Sri Lankan palette
        clay: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#e8dcc8',
          300: '#d4c0a0',
          400: '#c0a478',
          500: '#a88860',
          600: '#8b6f4d',
          700: '#6d5640',
          800: '#594637',
          900: '#493930',
        },
        earth: {
          50: '#f8f6f4',
          100: '#ebe6df',
          200: '#d9cec0',
          300: '#c0ae99',
          400: '#a89076',
          500: '#8c7258',
          600: '#73604d',
          700: '#5e4f41',
          800: '#4f4338',
          900: '#443a31',
        },
        leaf: {
          50: '#f4f8f3',
          100: '#e5efe3',
          200: '#ccdfc8',
          300: '#a6c89f',
          400: '#7aaa70',
          500: '#5a8d51',
          600: '#45723e',
          700: '#385a33',
          800: '#2f482b',
          900: '#283c25',
        },
        sand: {
          50: '#faf9f7',
          100: '#f2efe9',
          200: '#e6dfd1',
          300: '#d4c8b3',
          400: '#bfab8f',
          500: '#a89072',
          600: '#927762',
          700: '#7a6153',
          800: '#655147',
          900: '#53443c',
        },
        water: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#b9e6fe',
          300: '#7cd4fd',
          400: '#36bffa',
          500: '#0ba5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-merriweather)', 'Georgia', 'serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'woven-texture': "url('/textures/woven-mat.png')",
        'wood-texture': "url('/textures/wood-grain.png')",
        'paper-texture': "url('/textures/handmade-paper.png')",
        'leaf-pattern': "url('/textures/leaf-pattern.svg')",
      },
      animation: {
        'leaf-sway': 'leafSway 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'ripple': 'ripple 3s ease-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
      },
      keyframes: {
        leafSway: {
          '0%, 100%': { transform: 'rotate(-3deg) translateX(0)' },
          '50%': { transform: 'rotate(3deg) translateX(5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

export default config