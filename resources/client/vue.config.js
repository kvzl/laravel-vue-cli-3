const path = require('path')
const root = (...src) => path.resolve(__dirname, '../../', ...src)

module.exports = {
  publicPath: '/client',
  outputDir: root('public/client'),

  pages: {
    main: {
      entry: 'src/main.js',
      template: 'templates/main.ejs',
      filename: root('resources/views/main.blade.php'),
      inject: false,
      minify: false
    }
  },

  devServer: {
    port: 5000,
    disableHostCheck: true,
    writeToDisk: true,
  }
}
