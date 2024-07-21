import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '390px',
      md: '768px',
      lg: '1440px',
    },
    colors: {
      'primary-color': '#111827',
      'body-text': '#4B5563',
      'vibrant': '#0EA5E9',
      'border': '#E5E7EB',
      'default': '#FFFFFF',
      'gray': '#F8F8F8',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        textSm: 'textSm linear 15s infinite',
        textMd: 'textMd linear 15s infinite'
      },
      keyframes: {
        textSm: {
          '0%': {transform: 'translateX(10%)'},
          '100%': {transform: 'translateX(-350%)'}
        },
        textMd: {
          '0%': {transform: 'translateX(10%)'},
          '100%': {transform: 'translateX(-200%)'}
        }
      }
    },
  },
  plugins: [],
};
export default config;
