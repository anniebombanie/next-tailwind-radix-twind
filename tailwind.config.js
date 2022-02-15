module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
	colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        black: '#000000',
        blue: {
          50: '#e2e9ff',
          500: '#4f77ff',
          600: '#2953e2',
        },
        gray: {
          50: '#F8FAFB',
          100: '#F1F4F7',
          200: '#E5EAF0',
          300: '#D4DCE3',
          400: '#B1BCC9',
          500: '#8895A4',
          600: '#667180',
          700: '#414D5A',
          800: '#29313E',
          900: '#10141D',
        },
      },
    extend: {
    //   colors: {
    //     transparent: 'transparent',
    //     current: 'currentColor',
    //     white: '#ffffff',
    //     black: '#000000',
    //     blue: {
    //       50: '#e2e9ff',
    //       500: '#4f77ff',
    //       600: '#2953e2',
    //     },
    //     gray: {
    //       50: '#F8FAFB',
    //       100: '#F1F4F7',
    //       200: '#E5EAF0',
    //       300: '#D4DCE3',
    //       400: '#B1BCC9',
    //       500: '#8895A4',
    //       600: '#667180',
    //       700: '#414D5A',
    //       800: '#29313E',
    //       900: '#10141D',
    //     },
    //   },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
