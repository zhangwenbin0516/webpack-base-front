"use strict";

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: ["babel-polyfill", path.join(__dirname, '..', 'src/app.js')],
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, '..', 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: path.join(__dirname, '..', 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, '..', 'src'),
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/
                include: path.join(__dirname, '..', 'src'),
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, '..', 'index.html')
        })
    ]
}