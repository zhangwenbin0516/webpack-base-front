"use strict";

const path = require('path');
const WebPack = require('webpack');
const WebpackMerge = require('webpack-merge');
const CleanPlugin = require('clean-webpack-plugin');
const WebpackBaseConf = require('./webpack.base.conf');
module.exports = WebpackMerge(WebpackBaseConf, {
    mode: 'production',
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: "public/js/[name].[chunkhash:5].js"
    },
    plugins: [
        new CleanPlugin({
            root: path.join(__dirname, '..', 'dist')
        })
    ]
});