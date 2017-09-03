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

console.log(cssConfig, isProd);

let pluginsCommon = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.ProvidePlugin({
     'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
  })
]

let pluginsProd =  [ new HtmlWebpackPlugin({
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

const plugins = isProd ? pluginsCommon.concat(pluginsProd) : pluginsCommon


module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname,'public'),
    publicPath: path.join(__dirname, 'public'),
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
