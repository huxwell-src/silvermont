/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    bgSvg: {
      'hero-wave':
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="0.95" d="M0,224L60,218.7C120,213,240,203,360,202.7C480,203,600,213,720,213.3C840,213,960,203,1080,213.3C1200,224,1320,256,1380,272L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>',
    },
    extend: {
      colors: {
        gold: '#efb810',
        'light-black': '#191919',
        light: '#FDFDFD',
      },
      backgroundImage: {
        'hero-wabe': "url('/assets/waveHero.svg')",
      },
    },
  },
  plugins: [require('tailwindcss-bg-svg')],
};
