"use strict";

const path = require('path');
const WebpackBaseConf = require('./webpack.base.conf');
const WebpackMerge = require('webpack-merge');

module.exports = WebpackMerge(WebpackBaseConf, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '..', 'dist'),
        hot: true,
        hotOnly: true,
        inline: true,
        host: 'localhost',
        port: '3500'
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: "public/js/[name].[Hash:5].js"
    },
})