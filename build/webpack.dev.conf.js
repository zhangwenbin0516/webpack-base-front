"use strict";

const path = require('path');
const WebpackBaseConf = require('./webpack.base.conf');
const config = require('../config');
const WebpackMerge = require('webpack-merge');
const CleanPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = WebpackMerge(WebpackBaseConf, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '..', config.dev.assetsBuild),
        inline: true,
        host: 'localhost',
        port: '3500'
    },
    output: {
        path: path.join(__dirname, '..', config.dev.assetsBuild),
        filename: config.dev.assetsPath + "js/[name].js",
        publicPath: config.dev.publicPath
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                include: /src/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new CleanPlugin({
            root: path.join(__dirname, '..', config.dev.assetsBuild)
        }),
        new Webpack.NamedModulesPlugin(),
        new Webpack.HotModuleReplacementPlugin({
            multiple: true
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '..', 'index.html'),
            filename: "index.html",
            publicPath: config.dev.publicPath
        }),
        new MiniCssExtractPlugin({
            filename: config.build.assetsPath + 'css/[name].css',
            chunkFilename: '[id].css'
        }),
    ]
})