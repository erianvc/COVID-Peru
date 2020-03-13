const tailwindcss = require('tailwindcss')
const cssnano = require('cssnano')({ preset: 'default', })
const discardComments = require('postcss-discard-comments')

// only needed if you want to purge
const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./src/**/*.svelte', './public/**/*.html'],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),

        // discard comments in development
        ...(process.env.NODE_ENV === 'production' ? [] : [discardComments]),

        // minify the css only in production
        ...(process.env.NODE_ENV === 'production' ? [cssnano, purgecss] : []),
    ]
}