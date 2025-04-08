/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}', // Include all files in the src directory
    './components/**/*.{js,jsx,ts,tsx}', // Include all files in the components directory
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        Regular: ['AlbertSans-Regular'],
        Medium: ['AlbertSans-Medium'],
        SemiBold: ['AlbertSans-SemiBold'],
        Bold: ['AlbertSans-Bold'],
      },
    },
  },
  plugins: [],
};
