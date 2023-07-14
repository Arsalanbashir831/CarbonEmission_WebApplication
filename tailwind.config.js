/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'theme': 'linear-gradient(90deg, rgba(101,0,68,1) 0%, rgba(137,0,102,0.8241421568627451) 86%);',
    }, backgroundColor: {
      'main': '#7B3187',
      'transbg':"rgba(255, 255, 255, 0.06)",
      'contentbg':"#F8F8FA",
      'purewhite':"#ffff"
    },
    
  },
  plugins: [],
}