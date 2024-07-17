const path = require("path");
const { library } = require("webpack");

module.exports = {
  entry: "./src/App.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
