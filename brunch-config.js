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
    beforeBrunch: [
      "./bin/prebuild"
    ],
    afterBrunch: [
      "./bin/manifest",
      "./bin/inject_js"
    ],
    babel: {
      presets: ['latest']
    }
  }
}
