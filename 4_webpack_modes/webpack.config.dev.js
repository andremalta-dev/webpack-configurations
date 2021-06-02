const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    index: "index.html",
    port: 3000,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "Webpack Modes",
    }),
  ],
};
