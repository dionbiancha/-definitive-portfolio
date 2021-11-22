module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      green_1: '#32FF84',
      green_2: 'rgb(50,255,132, 0.1)',
      white: '#FFFFFF',
      yellow: '#E1C116',
      gray_1: '#E5E5E5',
      gray_2: ' #7C7C7C',
      gray_3: '#161B22',
      gray_4: '#0D1117',
      gray_5: '#0D0D0D',
      black: '#000000',
      blue_1: '#1F6FEB',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
