/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc', // Replace with your primary color code
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar')({ nocompatible: true }), // Added configuration for tailwind-scrollbar plugin
  ],
  variants: {
    scrollbar: ['rounded', 'dark'], // Adds variants for rounded corners or dark mode for scrollbar
  },
};


