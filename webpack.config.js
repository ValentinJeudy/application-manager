var path = require('path');
var root = path.resolve(__dirname);
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var extractCSS = new ExtractTextPlugin('bundle.css');
var prod = process.argv.indexOf('-p') > -1;

module.exports = {
  entry: {
    app: ['./src/js/main.js'].concat( prod
      ? [] : ['webpack-dev-server/client?http://localhost:8080']
    )
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
    crossOriginLoading: 'use-credentials'
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        loader : 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        include: root
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://maps.googleapis.com/',
        secure: false,
        pathRewrite: {'^/api' : ''},
        changeOrigin: true
      }
    },
    inline: true,
    historyApiFallback: true,
    contentBase: __dirname,
    // hot: true,
    headers: {
       "Access-Control-Allow-Origin": "http://localhost:8080", "Access-Control-Allow-Credentials": "true"
    },


  }
}
