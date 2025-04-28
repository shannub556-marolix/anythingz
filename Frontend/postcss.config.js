// postcss.config.js
module.exports = {
    plugins: [
      require('cssnano')({
        preset: 'default', // Minify CSS aggressively
      }),
      require('postcss-obfuscator')({
        // Optional: Seed for consistent hashing (same input = same hash)
        seed: '123456789', // Replace with your secret string
        // Other options (customize as needed):
        classNamePattern: 'obf-[hash]', // Pattern for obfuscated class names
        log: true // Show obfuscation logs in the terminal
      })
    ]
  };