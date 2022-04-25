const base_dir = (process.env.npm_lifecycle_event === 'build' ? '' : 'public/');
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.js',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'arrow-blue': `url('../${base_dir}assets/patterns/pattern-arrow-blue.png')`,
        'wave-white': `url(../${base_dir}assets/patterns/pattern-wave-white.png)`,
        'wave-dots': `url(../${base_dir}assets/patterns/pattern-white-dots.png)`,
        'wave-pink': `url('../${base_dir}assets/patterns/pattern-wave-pink.png')`,
        'yellow-dots': `url('../${base_dir}assets/patterns/pattern-yellow-dots.png')`,
      }),
    },
    fontFamily: {
      iflower: ['Indie Flower', 'Open Sans']
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '0': '0',
      '45': '45deg',
      '90': '90deg',
      '135': '135deg',
      '180': '180deg',
      '270': '270deg',
      '405': '405deg'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
