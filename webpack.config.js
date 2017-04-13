var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  resolve:{
    root:__dirname,

    alias: {
    
      index:'src/reducers/index.js',
      items:'src/reducers/items.js',
      itemsview:'src/reducers/itemsview.js',
      searchFilters:'src/reducers/searchFilters.js',
      searchResults:'src/reducers/searchResults.js',
      searchKeyword:'src/reducers/searchKeyword.js',
      
      ActionTypes: 'src/constants/ActionTypes.js'
      

    },
    extensions:['','.js']
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
       'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'     
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ],
        include:__dirname,
        
      }
    ]
  }
}
