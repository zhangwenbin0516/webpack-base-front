"use strict";

const WebpackMerge = require('webpack-merge');
const WebpackBaseConf = require('./webpack.base.conf');

module.exports = WebpackMerge(WebpackBaseConf, {
    mode: 'development'
})
