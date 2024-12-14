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
        darkGreen:"#002318",
        primary:'#07bc0c',
        secondary:'#fff2e4',
        text:'#222222',
        yellow:"#f1c40f"
      },
    },
  },
  plugins: [],
}