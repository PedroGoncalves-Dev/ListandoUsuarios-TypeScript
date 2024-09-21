/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // Se você usa uma pasta "components"
    "./node_modules/@shadcn/ui/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
