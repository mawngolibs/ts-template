const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        options: {
          configFile: "tsconfig.build.json"
        }
      }
    ]
  },
  resolve: {
    mainFields: ["main", "module"],
    extensions: [".tsx", ".ts", ".js", ".json"]
  },
  output: {
    filename: "index.min.js"
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["tsx", "ts", "js"]
    })
  ]
};
