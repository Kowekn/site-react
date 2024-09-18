/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        dark: "rgba(var(--dark))",
        light: "rgba(var(--light))",
        accent: "rgba(var(--accent))",
        main: "rgba(var(--main))",
        active: "rgba(var(--active))",
        hover: "rgba(var(--hover))"
      },
      
    },
  },
  plugins: [],

  
  


};

