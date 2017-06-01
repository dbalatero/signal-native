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
  plugins: {
    babel: {
      presets: ['latest']
    }
  }
}
