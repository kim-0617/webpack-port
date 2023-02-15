const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  name: "portfolio-setting",
  mode: "production",
  devtool: "eval",
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  entry: {
    app: ["./src/index"],
  }, // input

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["react-refresh/babel"],
        },
      },

      // Sass 파일 로더 설정
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          // css-loader 소스맵 옵션 활성화
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          // sass-loader 소스맵 옵션 활성화
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new RefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve("./index.html"),
    }),
  ],

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "app.js",
  }, // output

  devServer: {
    // devMiddleware: { publicPath: "/dist" },
    // static: { directory: path.resolve(__dirname) },
    // hot: true,
    contentBase: "./build",
  },
};
