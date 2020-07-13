console.log('tzezfdefzefzefzef')
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.js',
  ],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

console.log(process.env.NODE_ENV)


module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}