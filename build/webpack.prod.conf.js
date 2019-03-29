"use strict";

const path = require('path');
const WebpackMerge = require('webpack-merge');
const WebpackBaseConf = require('./webpack.base.conf');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = WebpackMerge(WebpackBaseConf, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: "public/js/[name].[chunkhash:5].js"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'public/css/[name].[Hash:6].css',
            chunkFilename: '[id].css'
        }),
        new UglifyjsWebpackPlugin({
            sourceMap: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                include: path.join(__dirname, '..', 'src'),
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(sa|sc)ss$/,
                include: path.join(__dirname, '..', 'src'),
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    }
});