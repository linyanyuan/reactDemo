const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = merge(common,{
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        contentBase:'./',
        host:'localhost',
        compress:true,
        historyApiFallback: true
    },
    plugins: [ 
        new HtmlWebpackPlugin({
            template:'index.html',
            filename:'index.html',
            hash:true,
        })
    ]
})