"use strict";

const path = require('path');
const config = require('../config');


module.exports = {
    entry: {
        app: path.join(__dirname, '..', 'src/app.js'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
        alias: {
            'src': path.resolve(__dirname, '..', 'src'),
            'assets': path.resolve(__dirname, '..', 'src/assets'),
            'page': path.resolve(__dirname, '..', 'src/components'),
            'themes': path.resolve(__dirname, '..', 'src/themes'),
            'ui': path.resolve(__dirname, '..', 'src/UI')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: /src/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                include: /src/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[Hash:6].[ext]',
                            limit: 8192,
                            outputPath: config.dev.assetsPath + 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.(htm|html)$/,
                use: ['html-withimg-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'font/[name].[Hash:6].[ext]',
                            outputPath: config.dev.assetsPath + 'font/'
                        }
                    }
                ]
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
    }
}