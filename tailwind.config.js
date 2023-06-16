/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'UbuntuRegular': 'Ubuntu-Regular',
      'UbuntuMedium': 'Ubuntu-Medium',
      'UbuntuBold': 'Ubuntu-Bold',
    },
    plugins: [],
  }
}