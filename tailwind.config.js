/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        primary:'#002318',
        secondary:'#fff2e4',
        text:'#222222'
      },
    },
  },
  plugins: [],
}