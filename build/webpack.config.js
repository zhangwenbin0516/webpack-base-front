"use strict";

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');


module.exports = {
    mode: 'development',
    devtool: "eval-source-map",
    entry: {
        app: path.join(__dirname, '..', 'src/app.js'),
        //home: __dirname + '../src/home.js'
    },
    output: {
        path: path.join(__dirname, '..','dist'),
        filename: "/public/js/[name].[chunkhash].js"
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                include: path.resolve(__dirname, '../src'),
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                include: path.resolve(__dirname, '../src'),
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                include: path.resolve(__dirname, '../src'),
                use: ['file-loader']
            },
            {
                test: /\.(csv|tsv)$/,
                use: ['csv-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            }
        ]
    },
    plugins: [
        new Webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'wwwww',
            template: path.join(__dirname, '..','index.html'),
            filename: "index.html",
            publicPath: '/assets/'
        })
    ],
}