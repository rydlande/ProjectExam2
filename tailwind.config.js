/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#000000',
      'white': '#FAFAFA',
      yellow: {
        light: '#FAF6E7',
        DEFAULT: '#FFD93D',
      },
      teal: {
        light: '#D1EBE5',
        DEFAULT: '#89C4BA',
        dark: '#344442'
      },
      'grey': {
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
      }
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

// button main: 
// className='bg-teal text-white hover:bg-teal-dark font-semibold py-2 px-4 rounded'

// button secondary:
// className='bg-yellow-light text-teal-dark hover:bg-yellow font-bold py-2 px-4 rounded'
