import HtmlWebpackPlugin from 'html-webpack-plugin'

export default{
  entry: './src',
  output: {
    path: 'release',
    filename: 'tmp.js' // unnecessary
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'url-loader?mimetype=text/javascript' },
      { test: /\.css$/, loader: 'url-loader?mimetype=text/css' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'html?attrs[]=script:src&attrs[]=link:href!jade-html!./src/index.pug',
      filename: 'width-adjuster.html',
      inject: false
    })
  ]
}
