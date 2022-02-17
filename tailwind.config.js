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
        'white': '#ffffff',
        'black': '#000000',
        'blue': {
          50: '#e2e9ff',
		  200: '#BAE6FD',
          500: '#4f77ff',
          600: '#2953e2'
        },
        'gray': {
          50: '#F8FAFB',
          100: '#F1F4F7',
          200: '#E5EAF0',
          300: '#D4DCE3',
          400: '#B1BCC9',
          500: '#8895A4',
          600: '#667180',
          700: '#414D5A',
          800: '#29313E',
          900: '#10141D'
        },
		'stone': {
			200: '#E7E5E4'
		},
		'rose': {
			50: '#FFF1F2',
			200: '#FECDD3',
			600: '#FDA4AF'
		},
		'amber': {
			100: '#FEF3C7',
			200: 'FDE68A',
			300: '#FCD34D',
			400: '#FBBF24',
			600: '#E11D48'
		},
		'pink': {
			300: '#F9A8D4'
		},
		'orange': {
			300: '#FDBA74'
		},
		'teal': {
			400: '#2DD4BF',
			500: '#14B8A6',
			600: '#0D9488'
		},
		'indigo': {
			200: '#C7D2FE'
		},
		'emerald': {
			50: '#ECFDF5',
			200: '#A7F3D0',
			500: '#10B981',
			600: '#059669'
		}
      },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
