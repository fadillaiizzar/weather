/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        breeze: "#A3C6CF", // 🌧 Rainy - biru kehijauan pastel
        butter: "#F7E7B4", // ☁️ Cloudy/Normal - kuning pucat pastel
        sun: "#FFB84C",    // ☀️ Sunny - oranye keemasan pastel
        cream: "#FFF8E7",  // background umum - krem lembut
      },
      

    },
  },
  plugins: [],
}