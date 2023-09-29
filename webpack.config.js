const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
module: {
    rules: [
      {
        test: /\.css$/, // Matches .css files
        use: [
          'style-loader', // Injects styles into DOM
          'css-loader'    // Turns css into CommonJS
        ]
      }
    ]
  }
};
