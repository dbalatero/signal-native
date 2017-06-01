module.exports = {
  paths: {
    public: 'dist',
    watched: ['src']
  },
  files: {
    javascripts: {
      entryPoints: {
        'src/main.js': 'extension.bundle.js'
      }
    }
  },
  sourceMaps: false,
  plugins: {
    babel: {
      presets: ['latest']
    }
  }
}
