module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        blue: '#24599C',
        darkblue: '#48525F',
        lightblue: '#E9EEF5',
        lightgray: '#EEEEEE',
        gray: '#9E9E9E',
        darkgray: '#48525F',
        black: '#212121',
        milk: '#F9FAFB',
        purple: '#665E74',
        orange: '#E19F27'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
