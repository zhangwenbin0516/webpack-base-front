"use strict";

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(process.env.NODE_ENV)

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, '..', 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            chunks: "[name]"
        })
    ]
}