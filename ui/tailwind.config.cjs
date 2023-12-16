/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
    base: false, // applies background color and foreground color for root element by default
    themeRoot: "#app-root", // The element that receives theme color CSS variables
  },
}

