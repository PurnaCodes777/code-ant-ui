/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-range': { 'min': '428px', 'max': '768px' },
        'tablet': { 'min': '769px', 'max': '1068px' },
        'mini-desktop': { 'min': '1068px', 'max': '1332px' },
      }
    },
  },
  plugins: [],
}