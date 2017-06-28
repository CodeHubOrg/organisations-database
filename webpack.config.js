var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname,'public'),
    filename: 'bundle.js'
  },
  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
       'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'     
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css?$/,
        use: [
          "style-loader", 
          "css-loader"
        ]
      }
    ]
  }
}
