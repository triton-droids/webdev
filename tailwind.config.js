/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-bg': '#000000',
        'main-text': '#F5F5F5',
        'muted-text': '#A3B2C2',
        'button-text': '#101010',
        'logo-blue': '#3B82F6',
        'hover-bg': '#B3C1D6',
        'hover-text': '#2D2D2D',
      },
      fontFamily: {
        sans: ['"Proxima Nova"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        button: '6em',
        card: '2rem',
      },
    },
  },
  plugins: [],
};
