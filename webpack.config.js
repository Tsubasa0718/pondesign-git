const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");


// ルートディレクトリのHTMLファイルを動的に取得
const htmlFiles = fs.readdirSync(__dirname).filter(file => file.endsWith(".html"));

module.exports = {
  entry: "./src/js/index.js",
  devtool: "source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "/"),
    },
    port: 8080,
    open: true,
    hot: true,
    liveReload: true,
    watchFiles: htmlFiles.map(file => path.resolve(__dirname, file)), // ここを追加
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "postcss.config.js"),
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/style.css",
    }),
    ...htmlFiles.map(file => new HtmlWebpackPlugin({
      filename: file,
      template: path.resolve(__dirname, file),
      inject: true,
      minify: async (html) => {
        return await minify(html, {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
        });
      },
      
    })),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/images"),
          to: path.resolve(__dirname, "dist/images"),
        },
      ],
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(png|jpe?g)$/i,
          options: {
            quality: 75,
          },
        },
      ],
    }),
  ],
};
