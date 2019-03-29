"use strict";

const path = require('path');
const WebpackBaseConf = require('./webpack.base.conf');
const WebpackMerge = require('webpack-merge');
const CleanPlugin = require('clean-webpack-plugin');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = WebpackMerge(WebpackBaseConf, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '..', 'dist'),
        inline: true,
        host: 'localhost',
        port: '3500'
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: "public/js/[name].js",
        publicPath: '/'
    },
    plugins: [
        new CleanPlugin({
            root: path.join(__dirname, '..', 'dist')
        }),
        new Webpack.NamedModulesPlugin(),
        new Webpack.HotModuleReplacementPlugin({
            multiple: true
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '..', 'index.html'),
            title: 'webpack学习教程',
            filename: "index.html",
            publicPath: 'assets/'
        })
    ]
})