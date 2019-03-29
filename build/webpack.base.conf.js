"use strict";

const path = require('path');

module.exports = {
    entry: {
        app: path.join(__dirname, '..', 'src/app.js'),
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
    }
}