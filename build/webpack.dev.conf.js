"use strict";

const path = require('path');
const WebpackBaseConf = require('./webpack.base.conf');
const WebpackMerge = require('webpack-merge');
const Webpack = require('webpack');

module.exports = WebpackMerge(WebpackBaseConf, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '..', 'dist'),
        //hot: true, //开启页面不自动刷新
        //hotOnly: true,
        inline: true,
        host: 'localhost',
        port: '3500'
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: "public/js/[name].[Hash:5].js",
        publicPath: '/'
    },
    plugins: [
        new Webpack.NamedModulesPlugin(),
        new Webpack.HotModuleReplacementPlugin({
            multiple: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                include: path.resolve(__dirname, '../src'),
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
})