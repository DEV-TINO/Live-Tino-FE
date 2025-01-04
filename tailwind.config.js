/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      extend: {},
      screens: {
        'lg': '1040px',
        'xl': '1200px',
        '2xl': '1392px',
      },
  },
  plugins: [],
};

