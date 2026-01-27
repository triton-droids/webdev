/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-bg': '#101010',
        'main-text': '#F5F5F5',
        'muted-text': '#A3B2C2',
        'button-text': '#101010',
        'role-blue': '#007bff',
        'logo-blue': '#3B82F6',
        'hover-bg': '#B3C1D6',
        'hover-text': '#2D2D2D',
        accent: '#FECE00',
      },
      fontFamily: {
        sans: ['"Proxima Nova"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        button: '6em',
        card: '2rem',
      },
      fontSize: {
        hero: ['clamp(3rem, 8vw, 5rem)', { lineHeight: '1.05' }],
        section: ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.1' }],
        'card-title': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2' }],
        'body-lg': ['clamp(1.125rem, 2vw, 1.5rem)', { lineHeight: '1.5' }],
        body: ['clamp(1rem, 1.5vw, 1.25rem)', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
};
