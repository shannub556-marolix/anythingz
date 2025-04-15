module.exports = {
    style: {
      modules: {
        localIdentName: '[hash:base64:10]' // 10-character hashed class names
      },
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
          require('cssnano')({
            preset: ['default', { // Use 'default' instead of 'advanced'
              discardComments: { removeAll: true },
              normalizeWhitespace: true,
              cssDeclarationSorter: true
            }]
          })
        ]
      }
    },
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.devtool = false; // Disable source maps
        return webpackConfig;
      }
    }
  };