/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'lg': '1245px',
      'md': '768px',
      'sm': '640px'
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-satoshi)'],
      },
      colors: {
        theme: '#EFECE6',
        themeWhite:'#F4F4F4',
        dark: '#444444',
        lightDark: '#77777780'
      },
    },
  },
  plugins: [],
};
