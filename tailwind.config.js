/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,mdx}',
      './app/**/*.{js,ts,jsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          'montserrat': ['Montserrat', 'sans-serif'],
          'open-sans': ['Open Sans', 'sans-serif'],
          // Add more fonts here
        },
        colors: {
            'deep-blue': '#3A0CA3',
            'gold': '#FFC300',
            'charcoal-gray': '#403D39',
            'dark-gray': '#232323',
            'teal-green': '#264653',
          },
      },
    },
    plugins: [],
  };