module.exports = {
    style: {
      css: {
        loaderOptions: {
          modules: {
            auto: true, // Enable CSS Modules for all CSS files
            localIdentName: '[hash:base64:8]' // Hash-style class names (like _abc123xy)
          }
        }
      }
    }
  };
  