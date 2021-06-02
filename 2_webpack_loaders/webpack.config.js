const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/, //Regular expression to detect .css files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg)$/, //Regular expression to detect png|jpg|jpeg files
        use: ["file-loader"],
      },
      {
        test: /\.scss$/, //Regular expression to detect .scss files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/, //Regular expression to detect .js files
        exclude: /(node_modules|bower_components)/, //Regular expression to exclude folders
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"],
          },
        },
      },
      {
        test: /\.html$/, //Regular expression to detect .html files
        use: "html-loader",
      },
      {
        test: /\.txt$/, //Regular expression to detect .txt files
        use: "raw-loader",
      },
    ],
  },
};
