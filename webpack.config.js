var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin')

var isProd = process.env.NODE_ENV === 'production'
var cssDev = ['style-loader', 'css-loader', 'sass-loader']
var cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  loader: ['css-loader', 'sass-loader'],
  publicPath: '/public'
})
var cssConfig = isProd ? cssProd : cssDev

var entry = isProd ?
  { entry: './src/index.js' } :
  { entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ] }

var publ = (!isProd || process.env.HMR) ? '/public' : '/'

console.log("public path", publ)

var pluginsCommon = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.ProvidePlugin({
     'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
  })
]
var pluginsProd =  [ new HtmlWebpackPlugin({
      title: 'JavaScript tools and resources',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: './src/index.html'
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: !isProd,
      allChunks: true
    })
]
var plugins =  isProd ? pluginsCommon.concat(pluginsProd) : pluginsCommon;


module.exports = {
  entry,
  output: {
    path: path.join(__dirname,'public'),
    publicPath: publ,
    filename: 'bundle.js'
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.scss$/,
        use: cssConfig
      }
    ]
  }
}
