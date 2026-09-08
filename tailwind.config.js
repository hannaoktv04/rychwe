/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8EE',
        paper: '#FFFDF8',
        ink: '#282522',
        muted: '#746D65',
        softred: '#D9655A',
        warmyellow: '#E7B84B',
        peach: '#F2B5A4',
        blush: '#F8E3DD',
        line: '#E8DED1',
      },
      boxShadow: {
        soft: '0 20px 50px rgba(80, 59, 44, 0.09)',
        card: '0 12px 30px rgba(80, 59, 44, 0.08)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      maxWidth: {
        page: '1180px',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        playful: ['"Segoe Print"', '"Bradley Hand"', 'cursive'],
      },
    },
  },
  plugins: [],
};
