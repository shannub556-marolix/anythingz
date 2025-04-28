// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('cssnano')({ preset: 'default' }),
        require('postcss-obfuscator')({
          seed: '123456789',
          globalClassNames: false, // Obfuscate ALL classes
        }),
      ],
    },
  },
};