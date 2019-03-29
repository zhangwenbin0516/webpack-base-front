"use strict";

const path = require('path');
const WebpackMerge = require('webpack-merge');
const WebpackBaseConf = require('./webpack.base.conf');
const CleanPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = WebpackMerge(WebpackBaseConf, {
    mode: 'production',
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: "public/js/[name].[Hash:5].js",
        publicPath: '/'
    },
    plugins: [
        new CleanPlugin({
            root: path.join(__dirname, '..', 'dist')
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '..', 'index.html'),
            title: 'webpack学习教程',
            filename: "index.html",
            publicPath: 'assets/'
        }),
        new MiniCssExtractPlugin({
            filename: 'public/css/[name].[Hash:6].css',
            chunkFilename: '[id].css'
        }),
    ]
});