import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px'],
    },
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'fira-code': ['Fira Code', 'monospace'],
      },
      colors: {
        'dark-gray': 'rgb(24 24 27)',
        'light-gray': '#A1A1AA',
        'action-gray': '#3f3f46',
        'action-gray-2': 'rgb(161 161 170)',
        'highlight-gray': 'hsla(0,0%,100%,.1)',
        'highlight-gray-200': 'hsla(0,0%,100%,.08)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        wide: '1440px',
      },
    },
  },
  plugins: [],
};
export default config;
