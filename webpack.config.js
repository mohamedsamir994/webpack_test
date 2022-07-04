const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const IMGSPlugin = require("image-minimizer-webpack-plugin");
const CSSPlugin = require("mini-css-extract-plugin");
const CSSMini = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    assetModuleFilename: "images/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: [CSSPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: [CSSPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HTMLPlugin({ inject: "body" }),
    new CSSPlugin({ filename: "style.min.css" }),
    new CSSMini(),
  ],
  optimization: {
    minimizer: [
      "...",
      new IMGSPlugin({
        minimizer: {
          implementation: IMGSPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["mozjpeg", { quality: 60 }],
              ["optipng", { optimizationLevel: 5 }],
              [
                "svgo",
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      convertShapeToPath: {
                        convertArcs: true,
                      },
                      convertPathData: false,
                    },
                  },
                },
              ],
            ],
          },
        },
      }),
    ],
  },
};
