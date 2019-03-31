"use strict";

const path = require('path');

module.exports = {
    entry: {
        app: path.join(__dirname, '..', 'src/app.js'),
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc)ss$/,
                include: path.resolve(__dirname, '../src'),
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                include: path.resolve(__dirname, '../src'),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[Hash:6].[ext]',
                            outputPath: 'public/images/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'public/font/[name].[Hash:6].[ext]',
                            outputPath: 'public/font/'
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