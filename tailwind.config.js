/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cameleon-primary': '#0C394D',
        'cameleon-secondary': '#D9D9D9',
        'form-color' : '#D3D3D3',
      },
    },
  },
  plugins: [],
}
