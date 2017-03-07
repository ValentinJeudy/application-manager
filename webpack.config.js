var path = require('path');
var root = path.resolve(__dirname);
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
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
    publicPath: '/dist/'
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
        loader: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
  // ,
  // devServer: {
  //   inline: true,
  //   hot: true,
  //   contentBase: './'
  // }
}
