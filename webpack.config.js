const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "portfolio-setting",
  mode: "development",
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
        exclude: /node_modules/,
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

  plugins: [new RefreshWebpackPlugin()],

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "app.js",
  }, // output

  devServer: {
    devMiddleware: { publicPath: "/dist" },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
};
