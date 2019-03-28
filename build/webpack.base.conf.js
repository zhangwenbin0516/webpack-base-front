"use strict";

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let resolve = (resolve) => {
    return path.join(__dirname, '..', resolve)
}

module.exports = {
    entry: {
        app: resolve('src/app.js')
    },
    output: {
        filename: "[name].[Hash].js",
        path: resolve('dist')
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                //include: resolve('src'),
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            fallback: 'style-loader'
        })
    ]
}