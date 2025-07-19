/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      colors: {
        gray: {
          900: '#0a0a0f',
          800: '#1a1a23',
          700: '#2a2a37',
          600: '#3a3a4b',
          500: '#4a4a5f',
          400: '#6a6a7f',
          300: '#8a8a9f',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 5px theme(colors.cyan.400), 0 0 10px theme(colors.cyan.400), 0 0 15px theme(colors.cyan.400)',
          },
          '100%': { 
            boxShadow: '0 0 10px theme(colors.cyan.400), 0 0 20px theme(colors.cyan.400), 0 0 30px theme(colors.cyan.400)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
