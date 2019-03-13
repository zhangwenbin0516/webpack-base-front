"use strict";
let path = require('path');   //路径依赖包
let HtmlWebpackPlugin = require('html-webpack-plugin');     //html生成依赖包
let PathFile = (val) => {     //获取路径
    return path.join('./', '..', val);
}

module.exports = {
    entry: {    //入口文件配置
        app: PathFile('src/app.js')
    },
    ouput: {    //打包出口文件
        filename: '[name].js',
        path: PathFile('dist')
    },
    module: {   //处理对应模块

    },
    plugins: [  //对应插件模块配置
        new HtmlWebpackPlugin({
            template: PathFile('static/index.html'),
            hash: true
        })
    ],
    devServer: {    //开发服务器配置

    },
    mode: 'production'     //打包模式设置
}
