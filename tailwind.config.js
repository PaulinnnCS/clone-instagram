/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "image-phones": "url('./assets/home-phones.png')",
        "instagram-name" : "url('./assets/KoLLpWDb4f6.png')",
        "sprite-core" : "url('./assets/sprite_core.png')",
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'], 
      },
      screens: {
        'custom' : '875px',
      }
    },
  },
  plugins: [],
};
