/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        main: '#000',
        white: '#fff',
        paragraph: '#545454bf'
      },
    },
  },
  plugins: [
],
}

