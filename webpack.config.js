const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: path.join(__dirname, "./src/index.tsx"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        loader: "babel-loader",
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|pdf|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
