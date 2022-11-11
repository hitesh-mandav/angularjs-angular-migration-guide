
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
entry: ["./src/app/main.ts", "./src/css/main.scss"],
output: {
    filename: "../src/dist/bundle.js"
},
resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
},
module: {
    rules: [
        // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
        { 
            test: /\.tsx?$/, 
            loader: "ts-loader" 
        },
        {
            test: /\.scss$/,
            use: [
                devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader",
              ],
        }
    ]
},
plugins: [
].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
};