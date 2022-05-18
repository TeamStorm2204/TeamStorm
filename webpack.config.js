
const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'development',
  entry: path.join(__dirname, "client/src", "index.jsx"),
  output: {
    path: path.join(__dirname, "/client/dist"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //   template: path.join(__dirname, "src", "index.html"),
  //   }), ],
};


